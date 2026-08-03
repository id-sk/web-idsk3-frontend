'use client';

import React, {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';
import Image from 'next/image';

import TextInputCustom from '@/app/(home)/_components/inputs/textInputCustom';
import TextareaCustom from '@/app/(home)/_components/inputs/textareaCustom';
import ButtonCustom from '@/app/(home)/_components/button/buttonCustom';
import Checkbox from '@/app/(home)/_components/inputs/checkboxCustom';
import {
  RadioButton,
  RadioButtonGroup,
} from '@/app/(home)/_components/inputs/radioButtonCustom';
import FileUploadCustom from '@/app/(home)/_components/inputs/fileUploadCustom';
import ErrorSummaryCustom from '@/app/(home)/_components/error-summary/errorSummaryCustom';
import { submitFeedbackForm } from './_lib/submitFeedbackForm';

const IDSK_EMAIL = 'idsk@mirri.gov.sk';



const initialValues = {
  organizacia: '',
  meno: '',
  priezvisko: '',
  email: '',
  typZameru: '',
  nazovKomponentu: '',
  popisZameru: '',
  dovodZmeny: '',
  doplnujuceInformacie: '',
  url: '',
  prilohy: [],
  suhlas: false,
  website_url_honey: '',
};

const FIELD_ORDER = [
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
  'prilohy',
  'suhlas',
];

const FIELD_NAMES = new Set(FIELD_ORDER);

const SERVER_ERROR_FIELD_MAP = {
  organizacia: 'organizacia',
  meno: 'meno',
  priezvisko: 'priezvisko',
  email: 'email',
  typZameru: 'typZameru',
  'typ-zameru': 'typZameru',
  nazovKomponentu: 'nazovKomponentu',
  'nazov-komponentu': 'nazovKomponentu',
  popisZameru: 'popisZameru',
  'popis-zameru': 'popisZameru',
  dovodZmeny: 'dovodZmeny',
  'dovod-zmeny': 'dovodZmeny',
  doplnujuceInformacie: 'doplnujuceInformacie',
  'doplnujuce-informacie': 'doplnujuceInformacie',
  url: 'url',
  priloha: 'prilohy',
  prilohy: 'prilohy',
  suhlas: 'suhlas',
};

const normalizeReactId = (value) => value.replace(/:/g, '');

const prefersReducedMotion = () => {
  if (
    typeof window === 'undefined' ||
    typeof window.matchMedia !== 'function'
  ) {
    return false;
  }

  return window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;
};

const validateEmail = (value) => {
  if (!value) return false;

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
};

const validateUrl = (value) => {
  if (!value) return false;

  try {
    const url = new URL(value.trim());
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
};

const getValidationMessage = (fieldName, values) => {
  switch (fieldName) {
    case 'organizacia':
      return values.organizacia.trim()
        ? ''
        : 'Zadajte názov inštitúcie.';
    case 'meno':
      return values.meno.trim() ? '' : 'Zadajte meno kontaktnej osoby.';
    case 'priezvisko':
      return values.priezvisko.trim()
        ? ''
        : 'Zadajte priezvisko kontaktnej osoby.';
    case 'email':
      return validateEmail(values.email)
        ? ''
        : 'Zadajte e-mailovú adresu v tvare meno@example.com.';
    case 'typZameru':
      return values.typZameru ? '' : 'Vyberte typ zámeru.';
    case 'nazovKomponentu':
      return values.nazovKomponentu.trim()
        ? ''
        : 'Zadajte názov komponentu.';
    case 'popisZameru':
      return values.popisZameru.trim()
        ? ''
        : 'Popíšte funkcionalitu komponentu.';
    case 'dovodZmeny':
      return values.dovodZmeny.trim()
        ? ''
        : 'Uveďte zdôvodnenie potreby.';
    case 'doplnujuceInformacie':
      return values.doplnujuceInformacie.trim()
        ? ''
        : 'Uveďte výstupy z používateľského prieskumu alebo odkaz na samostatnú prílohu.';
    case 'url':
      return validateUrl(values.url)
        ? ''
        : 'Zadajte platnú URL adresu grafického návrhu v správnom tvare (https:// alebo http://).';
    case 'suhlas':
      return values.suhlas
        ? ''
        : 'Potvrďte správnosť uvedených údajov.';
    default:
      return '';
  }
};

const CheckIcon = ({ className = '' }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 24 24"
    fill="none"
  >
    <circle cx="12" cy="12" r="11" fill="#00703C" />
    <path
      d="M7 12.2 10.2 15.4 17.5 8"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CopyIcon = ({ className = '' }) => (
  <svg
    className={className}
    width="20"
    height="23"
    viewBox="0 0 20 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M14.5833 0H2.08333C0.9375 0 0 0.9375 0 2.08333V16.6667H2.08333V2.08333H14.5833V0ZM17.7083 4.16667H6.25C5.10417 4.16667 4.16667 5.10417 4.16667 6.25V20.8333C4.16667 21.9792 5.10417 22.9167 6.25 22.9167H17.7083C18.8542 22.9167 19.7917 21.9792 19.7917 20.8333V6.25C19.7917 5.10417 18.8542 4.16667 17.7083 4.16667ZM17.7083 20.8333H6.25V6.25H17.7083V20.8333Z"
      fill="currentColor"
    />
  </svg>
);

const RequiredHint = () => (
  <p aria-hidden="true" className="mt-8 text-[16px] leading-6 text-[#757575]">
    Povinné polia sú označené hviezdičkou
      {' '}(<span className="text-[#C3112B]">*</span>)
    .
  </p>
);

export default function FeedbackForm() {
  const generatedId = normalizeReactId(useId());

  const ids = useMemo(
    () => ({
      form: `feedback-form-${generatedId}`,
      heading: `feedback-form-${generatedId}-heading`,
      errorSummary: `feedback-form-${generatedId}-error-summary`,
      submitStatus: `feedback-form-${generatedId}-submit-status`,
      submitButton: `feedback-form-${generatedId}-submit`,
      successHeading: `feedback-form-${generatedId}-success-heading`,
      contactHeading: `feedback-form-${generatedId}-contact-heading`,
      organizacia: `feedback-form-${generatedId}-organizacia`,
      meno: `feedback-form-${generatedId}-meno`,
      priezvisko: `feedback-form-${generatedId}-priezvisko`,
      email: `feedback-form-${generatedId}-email`,
      typZameruGroup: `feedback-form-${generatedId}-typ-zameru`,
      typZameruNovy: `feedback-form-${generatedId}-typ-zameru-novy`,
      typZameruUprava: `feedback-form-${generatedId}-typ-zameru-uprava`,
      nazovKomponentu: `feedback-form-${generatedId}-nazov-komponentu`,
      popisZameru: `feedback-form-${generatedId}-popis-zameru`,
      dovodZmeny: `feedback-form-${generatedId}-dovod-zmeny`,
      doplnujuceInformacie: `feedback-form-${generatedId}-doplnujuce-informacie`,
      url: `feedback-form-${generatedId}-url`,
      priloha: `feedback-form-${generatedId}-priloha`,
      suhlas: `feedback-form-${generatedId}-suhlas`,
    }),
    [generatedId]
  );

  const fieldTargetIds = useMemo(
    () => ({
      organizacia: ids.organizacia,
      meno: ids.meno,
      priezvisko: ids.priezvisko,
      email: ids.email,
      typZameru: ids.typZameruNovy,
      nazovKomponentu: ids.nazovKomponentu,
      popisZameru: ids.popisZameru,
      dovodZmeny: ids.dovodZmeny,
      doplnujuceInformacie: ids.doplnujuceInformacie,
      url: ids.url,
      prilohy: ids.priloha,
      suhlas: ids.suhlas,
    }),
    [ids]
  );

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState([]);
  const [successData, setSuccessData] = useState(null);

  const [prilohyValidation, setPrilohyValidation] = useState({
    isValid: false,
    hasInvalidFiles: false,
    isRequiredMissing: true,
    totalSize: 0,
    invalidFiles: [],
    message: 'Nahrajte aspoň jednu prílohu.',
  });

  const handleFilesChange = useCallback((files) => {
  const nextValues = {
      ...valuesRef.current,
      prilohy: files,
    };

    valuesRef.current = nextValues;
    setValues(nextValues);
  }, []);

    const handleFilesValidationChange = useCallback((validation) => {
    setPrilohyValidation(validation);

    setErrors((currentErrors) => {
      const hasAttachmentsError = currentErrors.some(
        (error) => error.field === 'prilohy'
      );

      if (!hasAttachmentsError) {
        return currentErrors;
      }

      if (validation.isValid) {
        return currentErrors.filter(
          (error) => error.field !== 'prilohy'
        );
      }

      return currentErrors.map((error) =>
        error.field === 'prilohy'
          ? {
              ...error,
              message:
                validation.message ||
                'Skontrolujte nahrané prílohy.',
            }
          : error
      );
    });
  }, []);

  const [copyStatus, setCopyStatus] = useState({
    message: '',
    isError: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [summaryFocusRequest, setSummaryFocusRequest] = useState(0);

  const valuesRef = useRef(initialValues);
  const errorSummaryRef = useRef(null);
  const successHeadingRef = useRef(null);
  const fieldRefs = useRef({});

  const fieldRefCallbacks = useMemo(() => {
    const callbacks = {};

    FIELD_ORDER.forEach((fieldName) => {
      callbacks[fieldName] = (node) => {
        if (node) {
          fieldRefs.current[fieldName] = node;
        } else {
          delete fieldRefs.current[fieldName];
        }
      };
    });

    return callbacks;
  }, []);

  const errorMap = useMemo(
    () =>
      errors.reduce((accumulator, error) => {
        if (error.field) {
          accumulator[error.field] = error.message;
        }

        return accumulator;
      }, {}),
    [errors]
  );

  const createFieldError = useCallback(
    (fieldName, message, suffix = 'validation') => ({
      id: `${ids.form}-${suffix}-${fieldName}`,
      kind: 'field',
      field: fieldName,
      targetId: fieldTargetIds[fieldName],
      message,
    }),
    [fieldTargetIds, ids.form]
  );

  const validateForm = useCallback(
  (nextValues) =>
    FIELD_ORDER.reduce((nextErrors, fieldName) => {
      if (fieldName === 'prilohy') {
        return nextErrors;
      }
      const message = getValidationMessage(
        fieldName,
        nextValues
      );
      if (message) {
        nextErrors.push(
          createFieldError(fieldName, message)
        );
      }
      return nextErrors;
    }, []),
  [createFieldError]
);

  const normalizeServerErrors = useCallback(
    (error) => {
      const rawErrors = Array.isArray(error?.errors) ? error.errors : [];

      if (!rawErrors.length) {
        return [
          {
            id: `${ids.form}-submit-error`,
            kind: 'global',
            message:
              error?.message || 'Formulár sa nepodarilo odoslať.',
          },
        ];
      }

      return rawErrors.map((serverError, index) => {
        const rawField =
          typeof serverError === 'object' && serverError !== null
            ? serverError.field || serverError.id
            : undefined;
        const mappedField =
          SERVER_ERROR_FIELD_MAP[rawField] ||
          (FIELD_NAMES.has(rawField) ? rawField : undefined);
        const message =
          typeof serverError === 'string'
            ? serverError
            : serverError?.message || 'Skontrolujte zadanú hodnotu.';

        if (mappedField) {
          return createFieldError(mappedField, message, `server-${index}`);
        }

        return {
          id: `${ids.form}-server-global-${index}`,
          kind: 'global',
          message,
        };
      });
    },
    [createFieldError, ids.form]
  );

  const updateValue = useCallback((fieldName, fieldValue) => {
    const nextValues = {
      ...valuesRef.current,
      [fieldName]: fieldValue,
    };

    valuesRef.current = nextValues;
    setValues(nextValues);

    setErrors((currentErrors) => {
      const hasFieldError = currentErrors.some(
        (error) => error.field === fieldName
      );

      if (!hasFieldError) {
        return currentErrors;
      }

      const nextMessage = getValidationMessage(fieldName, nextValues);

      if (!nextMessage) {
        return currentErrors.filter((error) => error.field !== fieldName);
      }

      return currentErrors.map((error) =>
        error.field === fieldName
          ? {
              ...error,
              message: nextMessage,
            }
          : error
      );
    });
  }, []);

  const focusErrorTarget = useCallback((error) => {
    if (!error.field) {
      return false;
    }

    const target = fieldRefs.current[error.field];

    if (!target || typeof target.focus !== 'function') {
      return false;
    }

    target.focus({ preventScroll: true });
    target.scrollIntoView?.({
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
      block: 'center',
    });

    return true;
  }, []);

  useEffect(() => {
    if (summaryFocusRequest === 0) {
      return;
    }

    errorSummaryRef.current?.focus();
  }, [summaryFocusRequest]);

  useEffect(() => {
    if (!successData || !successHeadingRef.current) {
      return;
    }

    successHeadingRef.current.focus({ preventScroll: true });
    successHeadingRef.current.scrollIntoView({
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
      block: 'start',
    });
    }, [successData]);

    const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const currentValues = valuesRef.current;
    const nextErrors = validateForm(currentValues);

    if (!prilohyValidation.isValid) {
      nextErrors.push(
        createFieldError(
          'prilohy',
          prilohyValidation.message ||
            'Skontrolujte nahrané prílohy.'
        )
      );
    }

    if (nextErrors.length > 0) {
      setErrors(nextErrors);
      setSummaryFocusRequest(
        (current) => current + 1
      );
      return;
    }

    setErrors([]);
    setIsSubmitting(true);

    try {
      const result =
        await submitFeedbackForm(currentValues);

      setSuccessData({
        nazovKomponentu:
          currentValues.nazovKomponentu,
        email: currentValues.email,
        datumPrijatia: result.datumPrijatia,
        referencneCislo: result.referencneCislo,
      });
    } catch (error) {
      setErrors(normalizeServerErrors(error));
      setSummaryFocusRequest(
        (current) => current + 1
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = async () => {
    setCopyStatus({
      message: '',
      isError: false,
    });

    try {
      await navigator.clipboard.writeText(IDSK_EMAIL);

      window.setTimeout(() => {
        setCopyStatus({
          message: 'E-mailová adresa bola skopírovaná.',
          isError: false,
        });
      }, 50);
    } catch {
      window.setTimeout(() => {
        setCopyStatus({
          message:
            'E-mailovú adresu sa nepodarilo skopírovať. Označte ju a skopírujte ručne.',
          isError: true,
        });
      }, 50);
    }
  };

  if (successData) {
    return (
      <main className="mx-auto my-8 w-full max-w-[1120px] px-4">
        <div className="mx-auto flex flex-col items-center text-center">
          <CheckIcon className="h-20 w-20" />

          <h1
            id={ids.successHeading}
            ref={successHeadingRef}
            tabIndex={-1}
            role="status" 
            className="mt-6 text-2xl font-black leading-tight text-black sm:text-3xl md:text-4xl md:leading-[55px]"
          >
            Ďakujeme, váš zámer sme úspešne prijali.
          </h1>

          <dl className="mt-8 flex w-full flex-col items-center gap-3 text-center text-[19px] leading-7 text-[#212121]">
            <div className="flex max-w-full flex-wrap items-baseline justify-center gap-x-1">
              <dt>Názov komponentu:</dt>
              <dd className="m-0 min-w-0 break-words">
                <strong>{successData.nazovKomponentu}</strong>
              </dd>
            </div>

            <div className="flex max-w-full flex-wrap items-baseline justify-center gap-x-1">
              <dt>Dátum prijatia:</dt>
              <dd className="m-0 min-w-0 break-words">
                <strong>{successData.datumPrijatia}</strong>
              </dd>
            </div>

            <div className="flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-2">
              <dt>Referenčné číslo:</dt>
              <dd className="m-0 min-w-0 break-words">
                <strong>{successData.referencneCislo}</strong>
              </dd>
            </div>

            <div className="flex max-w-full flex-wrap items-baseline justify-center gap-x-1">
              <dt>Vyjadrenie k zámeru vám zašleme na e-mailovú adresu:</dt>
              <dd className="m-0 min-w-0 break-words">
                <strong>{successData.email}</strong>
              </dd>
            </div>
          </dl>
        </div>

        <section
          aria-labelledby={ids.contactHeading}
          className="mx-auto mt-10 w-full"
        >
          <h2
            id={ids.contactHeading}
            className="text-[24px] font-bold leading-8 text-[#212121]"
          >
            V prípade otázok kontaktujte
          </h2>

          <div className="mt-4 rounded-[5px] border-2 border-[#BDBDBD] bg-white p-6">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div
                aria-hidden="true"
                className="flex h-[120px] w-[120px] shrink-0 items-center justify-center"
              >
                <Image
                  src="/images/undraw_building_burz 1.png"
                  alt=""
                  width={120}
                  height={120}
                  className="h-[120px] w-[120px] object-contain"
                />
              </div>

              <div className="min-w-0 text-left sm:pl-4">
                <p className="m-0 text-[19px] leading-7 text-[#212121]">
                  <strong>
                    IDSK tím Ministerstva investícií, regionálneho rozvoja
                    a informatizácie Slovenskej republiky.
                  </strong>
                </p>

                <div className="mt-3 flex max-w-full flex-wrap items-center gap-x-1 gap-y-3 text-[19px] leading-7 text-[#212121]">
                  <span>E-mail:</span>

                  <a
                    href={`mailto:${IDSK_EMAIL}`}
                    className="
                      text-[#0B4199] underline underline-offset-2
                      hover:text-[#126DFF] hover:decoration-2
                      focus:outline focus:outline-[3px] focus:outline-[#D96E00]
                      focus:outline-offset-2 focus:rounded-[5px]
                    "
                  >
                    <strong>{IDSK_EMAIL}</strong>
                  </a>

                  <ButtonCustom
                    type="button"
                    variant="secondary"
                    status="basic"
                    size="medium"
                    onClick={handleCopyEmail}
                    aria-label={`Kopírovať e-mailovú adresu ${IDSK_EMAIL}`}
                    iconLeft={<CopyIcon className="h-5 w-5 shrink-0" />}
                    className="ml-2"
                  >
                    Kopírovať
                  </ButtonCustom>
                </div>

                <p
                  className={
                    copyStatus.message
                      ? `mt-4 text-[16px] leading-6 ${
                          copyStatus.isError
                            ? 'text-[#C3112B]'
                            : 'text-[#00703C]'
                        }`
                      : 'sr-only'
                  }
                  aria-live="polite"
                  aria-atomic="true"
                >
                  {copyStatus.message}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="mx-auto my-8 w-full max-w-[1120px] px-4">
      <h1
        id={ids.heading}
        className="text-2xl font-black leading-tight text-black sm:text-3xl md:text-4xl md:leading-[55px]"
      >
        Zámer vytvorenia nového komponentu alebo úpravy existujúceho
        komponentu
      </h1>

      <p className="mt-6 max-w-[935px] text-[19px] leading-7 tracking-wide text-[#212121]">
        Tento formulár slúži orgánom riadenia na zasielanie zámerov na
        vytvorenie nového alebo úpravu existujúceho komponentu dizajnového
        manuálu. Proces prebieha v súlade s{' '}
        <a
          href="/metodicke-usmernenie-051024-2026-okpspi.pdf"
          type="application/pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-[#0B4199] underline underline-offset-2
            hover:text-[#126DFF] hover:decoration-2
            focus:outline focus:outline-[3px] focus:outline-[#D96E00]
            focus:outline-offset-2
          "
        >
          Metodickým usmernením MIRRI SR č. 051024/2026/OKPSPI (PDF, 694 kB)
          <span className="sr-only">, otvorí sa v novom okne</span>
        </a>
      </p>

      <RequiredHint />

      <form
        id={ids.form}
        className="mt-10 flex flex-col gap-10"
        noValidate
        aria-busy={isSubmitting ? 'true' : undefined}
        onSubmit={handleSubmit}
      >
        <p
          id={ids.submitStatus}
          className="sr-only"
          role="status"
          aria-atomic="true"
        >
          {isSubmitting ? 'Formulár sa odosiela.' : ''}
        </p>

        <div
            className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
            aria-hidden="true"
          >
            <label htmlFor="website_url_honey">
              Webová stránka
            </label>

            <input
              id="website_url_honey"
              name="website_url_honey"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={values.website_url_honey}
              onChange={(event) =>
                updateValue(
                  'website_url_honey',
                  event.target.value
                )
              }
            />
          </div>

        {errors.length > 0 && (
          <ErrorSummaryCustom
            id={ids.errorSummary}
            ref={errorSummaryRef}
            title="Vo formulári sú chyby"
            description="Opravte označené polia a formulár odošlite znova."
            errors={errors}
            onErrorClick={focusErrorTarget}
          />
        )}

        <fieldset className="m-0 flex max-w-[400px] flex-col gap-6 border-0 p-0">
          <legend className="mb-2 text-[24px] font-bold leading-8 text-[#212121]">
            <h2>Údaje o žiadateľovi</h2>
          </legend>

          <TextInputCustom
            id={ids.organizacia}
            ref={fieldRefCallbacks.organizacia}
            name="organizacia"
            maxLength={200}
            autoComplete="organization"
            inputSize="medium"
            label="Názov inštitúcie"
            placeholder="napr. Sociálna poisťovňa"
            mandatory
            fullWidth
            value={values.organizacia}
            error={Boolean(errorMap.organizacia)}
            errorMsg={errorMap.organizacia}
            onChange={(event) =>
              updateValue('organizacia', event.target.value)
            }
          />

          <TextInputCustom
            id={ids.meno}
            ref={fieldRefCallbacks.meno}
            name="meno"
            maxLength={100}
            autoComplete="given-name"
            inputSize="medium"
            label="Meno kontaktnej osoby"
            placeholder="napr. Jana"
            mandatory
            fullWidth
            value={values.meno}
            error={Boolean(errorMap.meno)}
            errorMsg={errorMap.meno}
            onChange={(event) => updateValue('meno', event.target.value)}
          />

          <TextInputCustom
            id={ids.priezvisko}
            ref={fieldRefCallbacks.priezvisko}
            name="priezvisko"
            maxLength={100}
            autoComplete="family-name"
            inputSize="medium"
            label="Priezvisko kontaktnej osoby"
            placeholder="napr. Slováková"
            mandatory
            fullWidth
            value={values.priezvisko}
            error={Boolean(errorMap.priezvisko)}
            errorMsg={errorMap.priezvisko}
            onChange={(event) =>
              updateValue('priezvisko', event.target.value)
            }
          />

          <TextInputCustom
            id={ids.email}
            ref={fieldRefCallbacks.email}
            name="email"
            maxLength={254}
            type="email"
            autoComplete="email"
            inputSize="medium"
            label="E-mail"
            subtitle="Zadajte vo formáte xxx@yyy.sk."
            placeholder="napr. jana.slovakova@slovensko.sk"
            mandatory
            fullWidth
            value={values.email}
            error={Boolean(errorMap.email)}
            errorMsg={errorMap.email}
            onChange={(event) => updateValue('email', event.target.value)}
          />
        </fieldset>

        <RadioButtonGroup
          id={ids.typZameruGroup}
          legend={<h2 className="inline">Typ zámeru</h2>}
          name="typ-zameru"
          mandatory
          errorMsg={errorMap.typZameru}
          className="m-0 border-0 p-0"
        >
          <RadioButton
            id={ids.typZameruNovy}
            ref={fieldRefCallbacks.typZameru}
            value="novy-komponent"
            label="Nový komponent"
            checked={values.typZameru === 'novy-komponent'}
            onChange={(event) =>
              updateValue('typZameru', event.target.value)
            }
          />

          <RadioButton
            id={ids.typZameruUprava}
            value="uprava-komponentu"
            label="Úprava existujúceho komponentu / nový variant"
            checked={values.typZameru === 'uprava-komponentu'}
            onChange={(event) =>
              updateValue('typZameru', event.target.value)
            }
          />
        </RadioButtonGroup>

        <fieldset className="m-0 flex flex-col gap-6 border-0 p-0">
          <legend className="mb-2 text-[24px] font-bold leading-8 text-[#212121]">
            <h2>Informácie o komponente</h2>
          </legend>

          <div className="max-w-[400px]">
            <TextInputCustom
              id={ids.nazovKomponentu}
              ref={fieldRefCallbacks.nazovKomponentu}
              name="nazov-komponentu"
              maxLength={200}
              inputSize="medium"
              label="Názov komponentu"
              subtitle="Uveďte návrh názvu nového komponentu, alebo presný názov existujúceho komponentu z knižnice IDSK."
              mandatory
              placeholder="napr. Tlačidlo"
              fullWidth
              value={values.nazovKomponentu}
              error={Boolean(errorMap.nazovKomponentu)}
              errorMsg={errorMap.nazovKomponentu}
              onChange={(event) =>
                updateValue('nazovKomponentu', event.target.value)
              }
            />
            <div className="mt-2 text-[16px] leading-6"> 
              <a
                href="/komponenty"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-[#0B4199] underline underline-offset-2
                  hover:text-[#126DFF] hover:decoration-2 
                  focus:outline focus:outline-[3px] focus:outline-[#D96E00] focus:outline-offset-2
                "
              >
                Zoznam komponentov IDSK
                <span className="sr-only">, otvorí sa v novom okne</span>
              </a>
            </div>
          </div>

          <div className="flex max-w-[640px] flex-col gap-6">
            <TextareaCustom
              id={ids.popisZameru}
              ref={fieldRefCallbacks.popisZameru}
              name="popis-zameru"
              label="Popis funkcionality komponentu"
              subtitle="Podrobne opíšte, na čo komponent slúži a aká je jeho očakávaná interakcia a správanie."
              mandatory
              fullWidth
              maxLength={300}
              value={values.popisZameru}
              error={Boolean(errorMap.popisZameru)}
              errorMsg={errorMap.popisZameru}
              onChange={(event) =>
                updateValue('popisZameru', event.target.value)
              }
            />

            <TextareaCustom
              id={ids.dovodZmeny}
              ref={fieldRefCallbacks.dovodZmeny}
              name="dovod-zmeny"
              label="Zdôvodnenie potreby"
              subtitle="Uveďte dôvody vytvorenia/zmeny, napr. chýbajúci prvok v IDSK, nová legislatíva, technologické limity."
              mandatory
              fullWidth
              maxLength={300}
              value={values.dovodZmeny}
              error={Boolean(errorMap.dovodZmeny)}
              errorMsg={errorMap.dovodZmeny}
              onChange={(event) =>
                updateValue('dovodZmeny', event.target.value)
              }
            />

            <TextareaCustom
              id={ids.doplnujuceInformacie}
              ref={fieldRefCallbacks.doplnujuceInformacie}
              name="doplnujuce-informacie"
              label="Výstupy z používateľského prieskumu"
              subtitle="Stručne zhrňte zistenia z prieskumu alebo uveďte odkaz na samostatnú prílohu s výstupmi."
              mandatory
              fullWidth
              maxLength={300}
              value={values.doplnujuceInformacie}
              error={Boolean(errorMap.doplnujuceInformacie)}
              errorMsg={errorMap.doplnujuceInformacie}
              onChange={(event) =>
                updateValue('doplnujuceInformacie', event.target.value)
              }
            />
          </div>

          <div className="max-w-[400px]">
            <TextInputCustom
              id={ids.url}
              ref={fieldRefCallbacks.url}
              name="url"
              maxLength={2048}
              type="url"
              inputSize="medium"
              label="Grafický návrh"
              placeholder="napr. https://www.figma.com/design/..."
              mandatory
              subtitle="Vložte priamy odkaz na projekt napr. v nástroji Figma (s povolením na zobrazenie). URL adresa musí začínať na https:// alebo http://."
              fullWidth
              value={values.url}
              error={Boolean(errorMap.url)}
              errorMsg={errorMap.url}
              onChange={(event) => updateValue('url', event.target.value)}
            />
          </div>
        </fieldset>

        <FileUploadCustom
          id={ids.priloha}
          inputRef={fieldRefCallbacks.prilohy}
          title="Prílohy"
          headingLevel="h2"
          filesHeadingLevel="h3"
          hint="Nahrajte dokumentáciu k zámeru (napr. výstupy z používateľského prieskumu, grafické návrhy alebo technickú špecifikáciu)."
          subtitle="Nahrajte súbor alebo ho sem presuňte."
          accept=".fig,.xls,.xlsx,.odt,.ods,.csv,.zip"
          acceptedFormatsLabel="FIG, XLS, XLSX, ODT, ODS, CSV alebo ZIP"
          maxFiles={5}
          maxTotalSize={15 * 1024 * 1024}
          required
          errorMessage={errorMap.prilohy}
          onChangeFiles={handleFilesChange}
          onValidationChange={handleFilesValidationChange}
          formatsText={
            <>
              Podporované formáty:{' '}
              <span className="font-bold">
                FIG, XLS, XLSX, ODT, ODS, CSV, ZIP
              </span>
              <p>
                Maximálny počet súborov:{' '}
                <span className="font-bold">5</span>
              </p>
            </>
          }
          maxSizeText={
            <>
              Maximálna celková veľkosť všetkých súborov:{' '}
              <span className="font-bold">15 MB</span>
            </>
          }
          buttonText="Vyberte súbor"
        />

        <div className="max-w-[760px]">
          <Checkbox
            id={ids.suhlas}
            ref={fieldRefCallbacks.suhlas}
            name="suhlas"
            inputSize="large"
            label="Orgán riadenia potvrdzuje, že zdrojový kód komponentu bude publikovaný pod verejnou licenciou umožňujúcou jeho bezodplatné používanie, úpravu a šírenie."
            mandatory
            checked={values.suhlas}
            error={Boolean(errorMap.suhlas)}
            errorMsg={errorMap.suhlas}
            onChange={(event) =>
              updateValue('suhlas', event.target.checked)
            }
          />
        </div>

        <div>
          <ButtonCustom
            id={ids.submitButton}
            type="submit"
            variant="primary"
            status="basic"
            size="large"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Odosielam zámer' : 'Odoslať zámer'}
          </ButtonCustom>
        </div>
      </form>
    </main>
  );
}
