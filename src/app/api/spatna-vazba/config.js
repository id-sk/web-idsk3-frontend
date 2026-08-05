// src/app/api/spatna-vazba/config.js

export const loadConfig = () => {
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