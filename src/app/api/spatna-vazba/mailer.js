// src/app/api/spatna-vazba/mailer.js
import nodemailer from 'nodemailer';

let cachedTransporter = null;
let cachedTransporterKey = null;

export const getTransporter = (config) => {
  if (config.mode !== 'email' || !config.smtp) {
    throw new Error('Interná chyba: Pokus o odoslanie e-mailu v nesprávnom režime.');
  }

  const transporterKey = JSON.stringify({
    host: config.smtp.host,
    port: config.smtp.port,
    secure: config.smtp.secure,
    requireTLS: config.smtp.requireTLS,
    smtpUser: config.smtp.smtpUser,
    mailFrom: config.smtp.mailFrom,
    mailTo: config.smtp.mailTo,
    tlsServername: config.smtp.tlsServername,
  });

  if (cachedTransporter && cachedTransporterKey === transporterKey) {
    return cachedTransporter;
  }

  cachedTransporter = nodemailer.createTransport({
    pool: true,
    maxConnections: 3,
    maxMessages: 50,
    host: config.smtp.host,
    port: config.smtp.port,
    secure: config.smtp.secure,
    requireTLS: config.smtp.requireTLS,
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
    auth: config.smtp.smtpUser && config.smtp.smtpPassword 
      ? { user: config.smtp.smtpUser, pass: config.smtp.smtpPassword } 
      : undefined,
    tls: config.smtp.tlsServername 
      ? { servername: config.smtp.tlsServername } 
      : undefined,
  });

  cachedTransporterKey = transporterKey;
  return cachedTransporter;
};