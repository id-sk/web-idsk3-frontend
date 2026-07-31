// src/app/(home)/_lib/submitFeedbackForm.js

const API_ENDPOINT = '/api/spatna-vazba';
const REQUEST_TIMEOUT_MS = 90_000; // Zvýšené na 90 sekúnd

const TEXT_FIELDS = [
  'organizacia',
  'meno',
  'priezvisko',
  'email',
  'typZameru',
  'nazovKomponentu',
  'popisZameru',
  'dovodZmeny',
  'doplnujuceInformacie',
  'url',
];

const createGeneralError = (message) => ({
  id: 'odoslat-zamer',
  message,
});

export const buildFeedbackFormData = (values) => {
  const formData = new FormData();

  for (const field of TEXT_FIELDS) {
    formData.append(field, String(values?.[field] ?? ''));
  }

  formData.append(
    'suhlas',
    values?.suhlas === true ? 'true' : 'false'
  );

  formData.append(
    'website_url_honey',
    String(values?.website_url_honey ?? '')
  );

  const files = Array.isArray(values?.prilohy) ? values.prilohy : [];

  for (const file of files) {
    if (!file) continue;
    formData.append('prilohy', file, file.name);
  }

  return formData;
};

const normalizeServerErrors = (errors) => {
  if (!Array.isArray(errors)) {
    return [];
  }

  return errors.flatMap((item) => {
    if (typeof item === 'string') {
      const message = item.trim();
      return message ? [{ id: 'odoslat-zamer', message }] : [];
    }

    if (!item || typeof item !== 'object') {
      return [];
    }

    const field =
      typeof item.field === 'string'
        ? item.field.trim()
        : typeof item.id === 'string'
        ? item.id.trim()
        : '';

    const message =
      typeof item.message === 'string' ? item.message.trim() : '';

    if (!message) {
      return [];
    }

    return [
      {
        ...item,
        ...(field ? { field } : {}),
        id: field || 'odoslat-zamer',
        message,
      },
    ];
  });
};

const getResponseMessage = (result, fallback) => {
  if (result && typeof result.detail === 'string' && result.detail.trim()) {
    return result.detail.trim();
  }
  if (result && typeof result.message === 'string' && result.message.trim()) {
    return result.message.trim();
  }
  return fallback;
};

export const submitFeedbackForm = async (values) => {
  const controller = new AbortController();
  
  const timeoutId = setTimeout(() => {
    controller.abort();
  }, REQUEST_TIMEOUT_MS);

  let response;
  let result;

  try {
    response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json, application/problem+json',
      },
      body: buildFeedbackFormData(values),
      signal: controller.signal,
    });
    
    // JSON processing presunuté do try bloku
    result = await response.json().catch(() => null);
    
  } catch (cause) {
    const isTimeout = cause?.name === 'AbortError';

    const message = isTimeout
      ? 'Odoslanie trvalo príliš dlho. Stav podania sa nepodarilo potvrdiť.'
      : 'Nepodarilo sa pripojiť k serveru. Skontrolujte pripojenie a skúste to znova.';

    const error = new Error(message);
    error.code = isTimeout ? 'REQUEST_TIMEOUT' : 'NETWORK_ERROR';
    error.errors = [createGeneralError(message)];

    throw error;
  } finally {
    clearTimeout(timeoutId);
  }

  if (!response.ok) {
    const fallbackMessage =
      response.status === 413
        ? 'Prílohy sú príliš veľké na odoslanie.'
        : 'Formulár sa nepodarilo odoslať.';

    const message = getResponseMessage(result, fallbackMessage);
    const normalizedErrors = normalizeServerErrors(result?.errors);

    const error = new Error(message);
    error.status = response.status;
    error.code = result?.code || 'HTTP_ERROR';
    
    error.requestId = 
      result?.requestId || 
      response.headers.get('x-request-id') || 
      undefined;

    error.errors =
      normalizedErrors.length > 0
        ? normalizedErrors
        : [createGeneralError(message)];

    throw error;
  }

  const hasValidSuccessResponse = Boolean(
    result?.ok === true &&
    typeof result.datumPrijatia === 'string' &&
    result.datumPrijatia.trim() &&
    typeof result.referencneCislo === 'string' &&
    result.referencneCislo.trim()
  );

  if (!hasValidSuccessResponse) {
    const message = 'Server vrátil neplatnú odpoveď. Formulár sa nepodarilo potvrdiť.';
    const error = new Error(message);
    error.status = response.status;
    error.code = 'INVALID_SUCCESS_RESPONSE';
    error.requestId = 
      result?.requestId || 
      response.headers.get('x-request-id') || 
      undefined;
    error.errors = [createGeneralError(message)];
    throw error;
  }

  return result;
};