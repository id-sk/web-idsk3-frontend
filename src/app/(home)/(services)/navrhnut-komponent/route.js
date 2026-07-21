import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Buffer } from 'node:buffer';

export const runtime = 'nodejs';

const MAX_FILE_SIZE = 15 * 1024 * 1024;

const ALLOWED_EXTENSIONS = [
  '.fig',
  '.xls',
  '.xlsx',
  '.odt',
  '.ods',
  '.csv',
  '.zip',
];

const getString = (formData, key) => {
  const value = formData.get(key);
  return typeof value === 'string' ? value.trim() : '';
};

const validateEmail = (value) => {
  if (!value) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
};

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
  if (lastDotIndex === -1) return '';

  return filename.slice(lastDotIndex).toLowerCase();
};

const isAllowedFile = (file) => {
  const extension = getFileExtension(file.name);
  return ALLOWED_EXTENSIONS.includes(extension);
};

const getCurrentDateLabel = () =>
  new Intl.DateTimeFormat('sk-SK', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date());

const createReferenceNumber = () =>
  `IDSK-${Math.floor(100000 + Math.random() * 900000)}`;

const createTransporter = () => {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const secure = process.env.SMTP_SECURE === 'true';

  if (!host) {
    throw new Error('Chýba SMTP_HOST.');
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth:
      process.env.SMTP_USER && process.env.SMTP_PASSWORD
        ? {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
          }
        : undefined,
  });
};

const buildEmailText = ({ values, referencneCislo, datumPrijatia }) => `
Bol prijatý nový zámer vytvorenia alebo úpravy komponentu IDSK.

Referenčné číslo: ${referencneCislo}
Dátum prijatia: ${datumPrijatia}

Údaje o žiadateľovi
Názov inštitúcie: ${values.organizacia}
Meno: ${values.meno}
Priezvisko: ${values.priezvisko}
E-mail: ${values.email}

Typ zámeru
${values.typZameru}

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

export async function POST(request) {
  try {
    const formData = await request.formData();

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

    if (!values.organizacia) errors.push('Chýba názov inštitúcie.');
    if (!values.meno) errors.push('Chýba meno kontaktnej osoby.');
    if (!values.priezvisko) errors.push('Chýba priezvisko kontaktnej osoby.');
    if (!validateEmail(values.email)) errors.push('E-mailová adresa nie je platná.');
    if (!values.typZameru) errors.push('Chýba typ zámeru.');
    if (!values.nazovKomponentu) errors.push('Chýba názov komponentu.');
    if (!values.popisZameru) errors.push('Chýba popis funkcionality komponentu.');
    if (!values.dovodZmeny) errors.push('Chýba zdôvodnenie potreby.');
    if (!values.doplnujuceInformacie) {
      errors.push('Chýbajú výstupy z používateľského prieskumu.');
    }
    if (!validateUrl(values.url)) {
      errors.push('URL adresa k návrhu alebo podkladom nie je platná.');
    }
    if (values.suhlas !== 'true') {
      errors.push('Chýba potvrdenie správnosti údajov.');
    }

    const files = formData
      .getAll('prilohy')
      .filter(
        (file) =>
          file &&
          typeof file === 'object' &&
          typeof file.arrayBuffer === 'function' &&
          file.size > 0
      );

    if (files.length === 0) {
      errors.push('Chýba aspoň jedna príloha.');
    }

    for (const file of files) {
      if (file.size > MAX_FILE_SIZE) {
        errors.push(`Súbor ${file.name} prekračuje maximálnu veľkosť 15 MB.`);
      }

      if (!isAllowedFile(file)) {
        errors.push(`Súbor ${file.name} nemá povolený formát.`);
      }
    }

    if (errors.length > 0) {
      return NextResponse.json(
        {
          ok: false,
          errors,
        },
        { status: 400 }
      );
    }

    const datumPrijatia = getCurrentDateLabel();
    const referencneCislo = createReferenceNumber();

    const attachments = await Promise.all(
      files.map(async (file) => ({
        filename: file.name,
        content: Buffer.from(await file.arrayBuffer()),
        contentType: file.type || undefined,
      }))
    );

    const transporter = createTransporter();

    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      replyTo: values.email,
      subject: `Nový zámer komponentu: ${values.nazovKomponentu}`,
      text: buildEmailText({
        values,
        referencneCislo,
        datumPrijatia,
      }),
      attachments,
    });

    return NextResponse.json({
      ok: true,
      datumPrijatia,
      referencneCislo,
    });
  } catch (error) {
    console.error('Chyba pri odosielaní formulára:', error);

    return NextResponse.json(
      {
        ok: false,
        message: 'Formulár sa nepodarilo odoslať.',
      },
      { status: 500 }
    );
  }
}