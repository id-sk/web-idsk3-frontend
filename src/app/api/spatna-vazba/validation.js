// src/app/api/spatna-vazba/validation.js
import { Buffer } from 'node:buffer';
import { randomUUID } from 'node:crypto';

export const MAX_FILES = 5;
export const MAX_TOTAL_FILE_SIZE = 15 * 1024 * 1024;
export const MAX_REQUEST_SIZE = 18 * 1024 * 1024;

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

export const OUTGOING_CONTENT_TYPES = {
  '.fig': 'application/octet-stream',
  '.xls': 'application/vnd.ms-excel',
  '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  '.odt': 'application/vnd.oasis.opendocument.text',
  '.ods': 'application/vnd.oasis.opendocument.spreadsheet',
  '.csv': 'text/csv; charset=utf-8',
  '.zip': 'application/zip',
};

export const ALLOWED_INTENT_TYPES = new Set(['novy-komponent', 'uprava-komponentu']);
export const INTENT_TYPE_LABELS = {
  'novy-komponent': 'Nový komponent',
  'uprava-komponentu': 'Úprava existujúceho komponentu / nový variant',
};

export const FIELD_LIMITS = {
  organizacia: 200, meno: 100, priezvisko: 100, email: 254,
  nazovKomponentu: 200, popisZameru: 300, dovodZmeny: 300,
  doplnujuceInformacie: 300, url: 2048,
};

export const FIELD_LABELS = {
  organizacia: 'Názov inštitúcie', meno: 'Meno', priezvisko: 'Priezvisko',
  email: 'E-mail', nazovKomponentu: 'Názov komponentu', popisZameru: 'Popis',
  dovodZmeny: 'Zdôvodnenie', doplnujuceInformacie: 'Výstupy z prieskumu', url: 'URL adresa',
};

export const getString = (formData, key) => {
  const value = formData.get(key);
  return typeof value === 'string' ? value.trim() : '';
};

export const validateEmail = (value) => value ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) : false;

export const validateUrl = (value) => {
  if (!value) return false;
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
};

export const getFileExtension = (filename = '') => {
  const lastDotIndex = filename.lastIndexOf('.');
  return lastDotIndex === -1 ? '' : filename.slice(lastDotIndex).toLowerCase();
};

export const sanitizeAttachmentName = (name = '') => {
  const sanitized = name.replace(/[\u0000-\u001F\u007F]/g, '').replace(/[\\/]/g, '_').trim().slice(0, 200);
  return sanitized || 'priloha';
};

export const getCurrentDateLabel = () =>
  new Intl.DateTimeFormat('sk-SK', {
    timeZone: 'Europe/Bratislava',
    day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit',
  }).format(new Date());

export const createReferenceNumber = () =>
  `IDSK-${randomUUID().replaceAll('-', '').slice(0, 12).toUpperCase()}`;

export const processAndValidateFile = async (file) => {
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