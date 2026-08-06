// src/app/api/spatna-vazba/route.js
import { NextResponse } from 'next/server';
import { randomUUID } from 'node:crypto';
import { loadConfig } from './config';
import { getTransporter } from './mailer';
import { normalizeIp, checkRateLimit, recordSuccess } from './rateLimit';
import {
  MAX_REQUEST_SIZE, MAX_FILES, MAX_TOTAL_FILE_SIZE,
  FIELD_LIMITS, FIELD_LABELS, ALLOWED_INTENT_TYPES, INTENT_TYPE_LABELS,
  OUTGOING_CONTENT_TYPES, getString, validateEmail, validateUrl,
  getFileExtension, sanitizeAttachmentName, getCurrentDateLabel,
  createReferenceNumber, processAndValidateFile
} from './validation';

export const runtime = 'nodejs';

export async function POST(request) {
  const requestId = randomUUID();
  const receivedAt = new Date();

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
    const config = loadConfig();

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
      return sendResponse({
        ok: true,
        mock: true,
        datumPrijatia: getCurrentDateLabel(receivedAt),
        datumPrijatiaIso: receivedAt.toISOString(),
        referencneCislo: createReferenceNumber(),
      });
    }

    // 2. IP EXTRAKCIA A RATE LIMITING
    const forwardedFor = request.headers.get('x-forwarded-for');
    const rawIp = forwardedFor?.split(',')[0] ?? request.headers.get('x-real-ip');
    const ip = normalizeIp(rawIp);
    
    const rateLimitResult = checkRateLimit(ip);
    if (rateLimitResult.exceeded) {
      console.warn(`Rate limit prekročený pre IP: ${ip}`, { 
        requestId, 
        recentAll: rateLimitResult.recentAll, 
        recentSuccess: rateLimitResult.recentSuccess 
      });
      return sendResponse(
        { ok: false, code: 'RATE_LIMIT_EXCEEDED', message: 'Prekročili ste limit odoslaní. Skúste to prosím neskôr.' }, 
        429, 
        { 'Retry-After': rateLimitResult.retryAfter }
      );
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

    if (rawFiles.length > MAX_FILES) {
      addError(
        'prilohy',
        'TOO_MANY_FILES',
        `Môžete nahrať najviac ${MAX_FILES} súborov.`
      );
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
   const datumPrijatia = getCurrentDateLabel(receivedAt);
  const datumPrijatiaIso = receivedAt.toISOString();
  const referencneCislo = createReferenceNumber();

    if (config.mode === 'mock') {
      console.info('Formulár bol odoslaný v testovacom režime bez e-mailu.', { referencneCislo, email: values.email, requestId });
      recordSuccess(ip);
      return sendResponse({
        ok: true,
        mock: true,
        datumPrijatia,
        datumPrijatiaIso,
        referencneCislo,
      });
    }

    const transporter = getTransporter(config);
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
      from: config.smtp.mailFrom,
      to: config.smtp.mailTo,
      replyTo: values.email,
      subject: `[${referencneCislo}] Nový zámer: ${safeComponentName}`,
      text: emailText,
      attachments,
    });

    recordSuccess(ip);

    return sendResponse({
      ok: true,
      mock: false,
      datumPrijatia,
      datumPrijatiaIso,
      referencneCislo,
    });
        
  } catch (error) {
    console.error('Chyba pri odosielaní formulára:', { requestId, error });
    return sendResponse({ ok: false, code: 'INTERNAL_ERROR', message: 'Formulár sa nepodarilo odoslať.' }, 500);
  }
}