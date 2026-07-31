import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Buffer } from 'node:buffer';
import { randomUUID } from 'node:crypto';

export const runtime = 'nodejs';

// ============================================================================
// 1. FAIL-FAST ENV VALIDÁCIA A KONFIGURÁCIA (S ochranou pre Next.js Build)
// ============================================================================
const loadConfig = () => {
  // Ochrana pre CI/CD: Počas build fázy vraciame bezpečný mock, aby kompilácia nezhavarovala
  // na chýbajúcich produkčných SMTP premenných.
  if (
    process.env.NEXT_PHASE === 'phase-production-build' ||
    process.env.NEXT_PHASE === 'phase-export'
  ) {
    return { mode: 'mock', smtp: null };
  }

  const mode = process.env.FEEDBACK_FORM_MODE;

  if (process.env.NODE_ENV === 'production' && mode !== 'email') {
    throw new Error('FATAL: V produkcii musí byť FEEDBACK_FORM_MODE nastavené na "email".');
  }

  const feedbackMode = mode === 'email' || mode === 'mock' ? mode : 'mock';

  if (feedbackMode !== 'email') {
    return {
      mode: feedbackMode,
      smtp: null,
    };
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 25);
  const secure = process.env.SMTP_SECURE === 'true';
  const requireTLS = process.env.SMTP_REQUIRE_TLS === 'true';
  const smtpUser = process.env.SMTP_USER?.trim();
  const smtpPassword = process.env.SMTP_PASSWORD;
  const mailFrom = process.env.MAIL_FROM;
  const mailTo = process.env.MAIL_TO;
  const tlsServername = process.env.SMTP_TLS_SERVERNAME;

  if (!host) throw new Error('FATAL: Chýba SMTP_HOST.');
  if (!mailFrom) throw new Error('FATAL: Chýba MAIL_FROM.');
  if (!mailTo) throw new Error('FATAL: Chýba MAIL_TO.');

  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error('FATAL: SMTP_PORT nie je platný.');
  }

  if (Boolean(smtpUser) !== Boolean(smtpPassword)) {
    throw new Error('FATAL: SMTP_USER a SMTP_PASSWORD musia byť nastavené spoločne.');
  }

  return {
    mode: feedbackMode,
    smtp: {
      host,
      port,
      secure,
      requireTLS,
      smtpUser,
      smtpPassword,
      mailFrom,
      mailTo,
      tlsServername,
    },
  };
};

const CONFIG = loadConfig();

// ============================================================================
// 2. LIMITOVANIE, MAPY A KONŠTANTY
// ============================================================================
const MAX_FILES = 5;
const MAX_TOTAL_FILE_SIZE = 15 * 1024 * 1024;
const MAX_REQUEST_SIZE = 18 * 1024 * 1024;

const ALLOWED_EXTENSIONS = ['.fig', '.xls', '.xlsx', '.odt', '.ods', '.csv', '.zip'];

const ALLOWED_MIME_BY_EXTENSION = {
  '.fig': new Set(['', 'application/octet-stream', 'application/zip']),
  '.xls': new Set(['', 'application/vnd.ms-excel', 'application/octet-stream']),
  '.xlsx': new Set(['', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/zip', 'application/octet-stream']),
  '.odt': new Set(['', 'application/vnd.oasis.opendocument.text', 'application/zip']),
  '.ods': new Set(['', 'application/vnd.oasis.opendocument.spreadsheet', 'application/zip']),
  '.csv': new Set(['', 'text/csv', 'text/plain', 'application/vnd.ms-excel']),
  '.zip': new Set(['', 'application/zip', 'application/x-zip-compressed', 'application/octet-stream']),
};

const OUTGOING_CONTENT_TYPES = {
  '.fig': 'application/octet-stream',
  '.xls': 'application/vnd.ms-excel',
  '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  '.odt': 'application/vnd.oasis.opendocument.text',
  '.ods': 'application/vnd.oasis.opendocument.spreadsheet',
  '.csv': 'text/csv; charset=utf-8',
  '.zip': 'application/zip',
};

const ALLOWED_INTENT_TYPES = new Set(['novy-komponent', 'uprava-komponentu']);
const INTENT_TYPE_LABELS = {
  'novy-komponent': 'Nový komponent',
  'uprava-komponentu': 'Úprava existujúceho komponentu / nový variant',
};

const FIELD_LIMITS = {
  organizacia: 200, meno: 100, priezvisko: 100, email: 254,
  nazovKomponentu: 200, popisZameru: 300, dovodZmeny: 300,
  doplnujuceInformacie: 300, url: 2048,
};

const FIELD_LABELS = {
  organizacia: 'Názov inštitúcie', meno: 'Meno', priezvisko: 'Priezvisko',
  email: 'E-mail', nazovKomponentu: 'Názov komponentu', popisZameru: 'Popis',
  dovodZmeny: 'Zdôvodnenie', doplnujuceInformacie: 'Výstupy z prieskumu', url: 'URL adresa',
};

// ============================================================================
// 3. RATE LIMITING (In-Memory fallback)
// ============================================================================
const globalStore = globalThis;
if (!globalStore.feedbackRateLimitMap) {
  globalStore.feedbackRateLimitMap = new Map();
}
const ipRateLimitMap = globalStore.feedbackRateLimitMap;

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS_ALL = 20;
const MAX_REQUESTS_SUCCESS = 5;

if (!globalStore.feedbackRateLimitInterval) {
  globalStore.feedbackRateLimitInterval = setInterval(() => {
    const now = Date.now();
    for (const [ip, data] of ipRateLimitMap.entries()) {
      const validAll = data.all.filter(t => now - t < RATE_LIMIT_WINDOW_MS);
      const validSuccess = data.success.filter(t => now - t < RATE_LIMIT_WINDOW_MS);
      
      if (validAll.length === 0 && validSuccess.length === 0) {
        ipRateLimitMap.delete(ip);
      } else {
        ipRateLimitMap.set(ip, { all: validAll, success: validSuccess });
      }
    }
  }, RATE_LIMIT_WINDOW_MS).unref();
}

const normalizeIp = (value) => {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, 64);
};

// ============================================================================
// POMOCNÉ FUNKCIE A VALIDÁCIE
// ============================================================================
const getString = (formData, key) => {
  const value = formData.get(key);
  return typeof value === 'string' ? value.trim() : '';
};

const validateEmail = (value) => value ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) : false;

const validateUrl = (value) => {
  if (!value) return false;
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
};

const getFileExtension = (filename = '') => {
  const lastDotIndex = filename.lastIndexOf('.');
  return lastDotIndex === -1 ? '' : filename.slice(lastDotIndex).toLowerCase();
};

const sanitizeAttachmentName = (name = '') => {
  const sanitized = name.replace(/[\u0000-\u001F\u007F]/g, '').replace(/[\\/]/g, '_').trim().slice(0, 200);
  return sanitized || 'priloha';
};

const getCurrentDateLabel = () =>
  new Intl.DateTimeFormat('sk-SK', {
    timeZone: 'Europe/Bratislava',
    day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit',
  }).format(new Date());

const createReferenceNumber = () =>
  `IDSK-${randomUUID().replaceAll('-', '').slice(0, 12).toUpperCase()}`;

let cachedTransporter = null;

const getTransporter = () => {
  if (cachedTransporter) return cachedTransporter;
  if (CONFIG.mode !== 'email') throw new Error('Interná chyba: Pokus o odoslanie emailu v nesprávnom režime.');

  cachedTransporter = nodemailer.createTransport({
    pool: true,
    maxConnections: 3,
    maxMessages: 50,
    host: CONFIG.smtp.host,
    port: CONFIG.smtp.port,
    secure: CONFIG.smtp.secure,
    requireTLS: CONFIG.smtp.requireTLS,
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
    auth: CONFIG.smtp.smtpUser && CONFIG.smtp.smtpPassword ? { user: CONFIG.smtp.smtpUser, pass: CONFIG.smtp.smtpPassword } : undefined,
    tls: CONFIG.smtp.tlsServername ? { servername: CONFIG.smtp.tlsServername } : undefined,
  });

  return cachedTransporter;
};

// ============================================================================
// SIGNATÚRY (Základný Magic Bytes Check)
// ============================================================================
const processAndValidateFile = async (file) => {
  const extension = getFileExtension(file.name);

  if (!ALLOWED_EXTENSIONS.includes(extension)) return { isValid: false };

  const allowedMimes = ALLOWED_MIME_BY_EXTENSION[extension];
  if (!allowedMimes?.has(file.type || '')) return { isValid: false };

  const fileBuffer = Buffer.from(await file.arrayBuffer());

  if (fileBuffer.length === 0) return { isValid: false };

  if (extension === '.csv') {
    const sample = fileBuffer.subarray(0, Math.min(fileBuffer.length, 64 * 1024));
    return { isValid: !sample.includes(0x00), buffer: fileBuffer };
  }

  if (fileBuffer.length < 4) return { isValid: false };

  const hex = fileBuffer.subarray(0, 4).toString('hex').toUpperCase();

  if (extension === '.xls') {
    return { isValid: hex.startsWith('D0CF11E0'), buffer: fileBuffer };
  }

  const isZipBased = ['.zip', '.xlsx', '.ods', '.odt', '.fig'].includes(extension);
  const hasZipSignature = hex.startsWith('504B0304') || hex.startsWith('504B0506') || hex.startsWith('504B0708');

  return { isValid: isZipBased && hasZipSignature, buffer: fileBuffer };
};

// ============================================================================
// HLAVNÝ HANDLER
// ============================================================================
export async function POST(request) {
  const requestId = randomUUID();

  const sendResponse = (body, status = 200, extraHeaders = {}) => {
    return NextResponse.json(
      { ...body, requestId },
      {
        status,
        headers: {
          'Cache-Control': 'no-store',
          'X-Request-ID': requestId,
          ...extraHeaders,
        },
      }
    );
  };

  try {
    const contentType = request.headers.get('content-type')?.toLowerCase() ?? '';
    if (!contentType.includes('multipart/form-data')) {
      return sendResponse({ ok: false, code: 'UNSUPPORTED_MEDIA_TYPE', message: 'Požiadavka musí používať multipart/form-data.' }, 415);
    }

    const contentLength = Number(request.headers.get('content-length'));
    if (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_SIZE) {
      return sendResponse({
        ok: false, code: 'PAYLOAD_TOO_LARGE', message: 'Odosielané údaje sú príliš veľké.',
        errors: [{ field: 'prilohy', code: 'MAX_REQUEST_SIZE', message: 'Celková veľkosť odosielaných údajov prekračuje povolený limit.' }],
      }, 413);
    }

    let formData;
    try {
      formData = await request.formData();
    } catch {
      return sendResponse({ ok: false, code: 'INVALID_MULTIPART_BODY', message: 'Obsah požiadavky sa nepodarilo spracovať.' }, 400);
    }

    // 1. HONEYPOT
    if (getString(formData, 'website_url_honey')) {
      console.info('Zachytili sme bota vo formulári (Honeypot).', { requestId });
      return sendResponse({ ok: true, mock: true, datumPrijatia: getCurrentDateLabel(), referencneCislo: createReferenceNumber() });
    }

    // 2. IP EXTRAKCIA A RATE LIMITING
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ip = normalizeIp(forwardedFor?.split(',')[0] ?? request.headers.get('x-real-ip')) || 'unknown-ip';
    
    if (ip !== 'unknown-ip') {
      const now = Date.now();
      const userData = ipRateLimitMap.get(ip) || { all: [], success: [] };
      
      const recentAll = userData.all.filter(timestamp => now - timestamp < RATE_LIMIT_WINDOW_MS);
      const recentSuccess = userData.success.filter(timestamp => now - timestamp < RATE_LIMIT_WINDOW_MS);
      
      if (recentAll.length >= MAX_REQUESTS_ALL || recentSuccess.length >= MAX_REQUESTS_SUCCESS) {
        console.warn(`Rate limit prekročený pre IP: ${ip}`, { requestId, recentAll: recentAll.length, recentSuccess: recentSuccess.length });
        return sendResponse(
          { ok: false, code: 'RATE_LIMIT_EXCEEDED', message: 'Prekročili ste limit odoslaní. Skúste to prosím neskôr.' }, 
          429, 
          { 'Retry-After': String(Math.ceil(RATE_LIMIT_WINDOW_MS / 1000)) }
        );
      }
      
      recentAll.push(now);
      ipRateLimitMap.set(ip, { all: recentAll, success: recentSuccess });
    }

    // 3. SPRACOVANIE A VALIDÁCIA ÚDAJOV
    const values = {
      organizacia: getString(formData, 'organizacia'),
      meno: getString(formData, 'meno'),
      priezvisko: getString(formData, 'priezvisko'),
      email: getString(formData, 'email'),
      typZameru: getString(formData, 'typZameru'),
      nazovKomponentu: getString(formData, 'nazovKomponentu'),
      popisZameru: getString(formData, 'popisZameru'),
      dovodZmeny: getString(formData, 'dovodZmeny'),
      doplnujuceInformacie: getString(formData, 'doplnujuceInformacie'),
      url: getString(formData, 'url'),
      suhlas: getString(formData, 'suhlas'),
    };

    const errors = [];
    const addError = (field, code, message) => errors.push({ field, code, message });

    for (const [field, maxLength] of Object.entries(FIELD_LIMITS)) {
      if (values[field] && values[field].length > maxLength) {
        addError(field, 'MAX_LENGTH_EXCEEDED', `${FIELD_LABELS[field]} môže obsahovať najviac ${maxLength} znakov.`);
      }
    }

    if (!values.organizacia) addError('organizacia', 'REQUIRED', 'Chýba názov inštitúcie.');
    if (!values.meno) addError('meno', 'REQUIRED', 'Chýba meno kontaktnej osoby.');
    if (!values.priezvisko) addError('priezvisko', 'REQUIRED', 'Chýba priezvisko kontaktnej osoby.');
    
    if (!values.email) addError('email', 'REQUIRED', 'Chýba e-mailová adresa.');
    else if (!validateEmail(values.email)) addError('email', 'INVALID_EMAIL', 'E-mailová adresa nie je platná.');

    if (!ALLOWED_INTENT_TYPES.has(values.typZameru)) addError('typZameru', 'INVALID_INTENT_TYPE', 'Typ zámeru nie je platný.');
    
    if (!values.nazovKomponentu) addError('nazovKomponentu', 'REQUIRED', 'Chýba názov komponentu.');
    if (!values.popisZameru) addError('popisZameru', 'REQUIRED', 'Chýba popis funkcionality komponentu.');
    if (!values.dovodZmeny) addError('dovodZmeny', 'REQUIRED', 'Chýba zdôvodnenie potreby.');
    if (!values.doplnujuceInformacie) addError('doplnujuceInformacie', 'REQUIRED', 'Chýbajú výstupy z používateľského prieskumu.');

    if (!values.url) addError('url', 'REQUIRED', 'Chýba URL adresa k návrhu.');
    else if (!validateUrl(values.url)) addError('url', 'INVALID_URL', 'URL adresa k návrhu alebo podkladom nie je platná.');

    if (values.suhlas !== 'true') addError('suhlas', 'REQUIRED', 'Chýba potvrdenie správnosti údajov.');

    // 4. KONTROLA A PARSOVANIE PRÍLOH
    let hasOversizedPayload = false;
    const rawFiles = formData.getAll('prilohy').filter((file) => file && typeof file === 'object' && typeof file.arrayBuffer === 'function');

    if (rawFiles.length === 0) {
      addError('prilohy', 'MISSING_FILE', 'Chýba aspoň jedna príloha.');
    } else if (rawFiles.length > MAX_FILES) {
      addError('prilohy', 'TOO_MANY_FILES', `Môžete nahrať najviac ${MAX_FILES} súborov.`);
    }

    const totalFileSize = rawFiles.reduce((sum, file) => sum + Number(file.size || 0), 0);
    if (totalFileSize > MAX_TOTAL_FILE_SIZE) {
      hasOversizedPayload = true;
      addError('prilohy', 'TOTAL_SIZE_EXCEEDED', 'Celková veľkosť príloh prekračuje maximálnu veľkosť 15 MB.');
    }

    const attachments = [];
    const canInspectFiles = rawFiles.length > 0 && rawFiles.length <= MAX_FILES && !hasOversizedPayload;

    if (canInspectFiles) {
      for (const file of rawFiles) {
        const safeFileName = sanitizeAttachmentName(file.name);

        if (file.size === 0) {
          addError('prilohy', 'EMPTY_FILE', `Súbor ${safeFileName} je prázdny.`);
          continue;
        }

        const processed = await processAndValidateFile(file);
        
        if (!processed.isValid) {
          addError('prilohy', 'INVALID_FORMAT', `Súbor ${safeFileName} nemá povolený formát, alebo je poškodený.`);
        } else {
          attachments.push({
            filename: safeFileName,
            content: processed.buffer,
            contentType: OUTGOING_CONTENT_TYPES[getFileExtension(file.name)] || 'application/octet-stream'
          });
        }
      }
    }

    if (errors.length === 0 && attachments.length !== rawFiles.length) {
      throw new Error('Interná chyba: Nie všetky prílohy boli spracované.');
    }

    if (errors.length > 0) {
      return sendResponse({
        ok: false,
        code: hasOversizedPayload ? 'PAYLOAD_TOO_LARGE' : 'VALIDATION_ERROR',
        message: hasOversizedPayload ? 'Prílohy sú príliš veľké na odoslanie.' : 'Skontrolujte nesprávne vyplnené polia.',
        errors,
      }, hasOversizedPayload ? 413 : 422);
    }

    // 5. ODOSLANIE E-MAILU
    const datumPrijatia = getCurrentDateLabel();
    const referencneCislo = createReferenceNumber();

    if (CONFIG.mode === 'mock') {
      console.info('Formulár bol odoslaný v testovacom režime bez e-mailu.', { referencneCislo, email: values.email, requestId });
      
      if (ip !== 'unknown-ip') {
        const userData = ipRateLimitMap.get(ip);
        userData.success.push(Date.now());
      }
      
      return sendResponse({ ok: true, mock: true, datumPrijatia, referencneCislo });
    }

    const transporter = getTransporter();
    const safeComponentName = values.nazovKomponentu.replace(/[\r\n]+/g, ' ').slice(0, 150);

    const emailText = `
Bol prijatý nový zámer vytvorenia alebo úpravy komponentu IDSK.

Referenčné číslo: ${referencneCislo}
Dátum prijatia: ${datumPrijatia}

Údaje o žiadateľovi
Názov inštitúcie: ${values.organizacia}
Meno: ${values.meno}
Priezvisko: ${values.priezvisko}
E-mail: ${values.email}

Typ zámeru:
${INTENT_TYPE_LABELS[values.typZameru] || values.typZameru}

Informácie o komponente
Názov komponentu: ${values.nazovKomponentu}

Popis funkcionality komponentu:
${values.popisZameru}

Zdôvodnenie potreby:
${values.dovodZmeny}

Výstupy z používateľského prieskumu:
${values.doplnujuceInformacie}

Grafický návrh / URL:
${values.url}

Súhlas:
${values.suhlas === 'true' ? 'Áno' : 'Nie'}
`;

    await transporter.sendMail({
      from: CONFIG.smtp.mailFrom,
      to: CONFIG.smtp.mailTo,
      replyTo: values.email,
      subject: `[${referencneCislo}] Nový zámer: ${safeComponentName}`,
      text: emailText,
      attachments,
    });

    if (ip !== 'unknown-ip') {
      const userData = ipRateLimitMap.get(ip);
      userData.success.push(Date.now());
    }

    return sendResponse({ ok: true, mock: false, datumPrijatia, referencneCislo });
    
  } catch (error) {
    console.error('Chyba pri odosielaní formulára:', { requestId, error });
    return sendResponse({ ok: false, code: 'INTERNAL_ERROR', message: 'Formulár sa nepodarilo odoslať.' }, 500);
  }
}