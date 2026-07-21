'use client';

import React, { useMemo, useState } from 'react';
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
  <p className="mt-8 text-[16px] leading-6 text-[#757575]">
    Povinné polia sú označené hviezdičkou ({''}
    <span aria-hidden="true" className="text-[#C3112B]">
    *
    </span>
    )
  </p>
);

const validateEmail = (value) => {
  if (!value) return false;

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
};

export default function FeedbackForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState([]);
  const [successData, setSuccessData] = useState(null);
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const errorMap = useMemo(
    () =>
      errors.reduce((acc, error) => {
        acc[error.id] = error.message;
        return acc;
      }, {}),
    [errors]
  );

  const updateValue = (fieldName, fieldValue) => {
      setValues((current) => ({
        ...current,
        [fieldName]: fieldValue,
      }));
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

 const validateForm = () => {
    const nextErrors = [];

    if (!values.organizacia.trim()) {
      nextErrors.push({
        id: 'organizacia',
        message: 'Zadajte názov inštitúcie.',
      });
    }

    if (!values.meno.trim()) {
      nextErrors.push({
        id: 'meno',
        message: 'Zadajte meno kontaktnej osoby.',
      });
    }

    if (!values.priezvisko.trim()) {
      nextErrors.push({
        id: 'priezvisko',
        message: 'Zadajte priezvisko kontaktnej osoby.',
      });
    }

    if (!validateEmail(values.email)) {
      nextErrors.push({
        id: 'email',
        message: 'Zadajte e-mailovú adresu v tvare meno@example.com.',
      });
    }

    if (!values.typZameru) {
      nextErrors.push({
        id: 'typ-zameru',
        message: 'Vyberte typ zámeru.',
      });
    }

    if (!values.nazovKomponentu.trim()) {
      nextErrors.push({
        id: 'nazov-komponentu',
        message: 'Zadajte názov komponentu.',
      });
    }

    if (!values.popisZameru.trim()) {
      nextErrors.push({
        id: 'popis-zameru',
        message: 'Popíšte funkcionalitu komponentu.',
      });
    }

    if (!values.dovodZmeny.trim()) {
      nextErrors.push({
        id: 'dovod-zmeny',
        message: 'Uveďte zdôvodnenie potreby.',
      });
    }

    if (!values.doplnujuceInformacie.trim()) {
      nextErrors.push({
        id: 'doplnujuce-informacie',
        message: 'Uveďte výstupy z používateľského prieskumu alebo odkaz na samostatnú prílohu.',
      });
    }

    if (!validateUrl(values.url)) {
      nextErrors.push({
        id: 'url',
        message: 'Zadajte platnú URL adresu k návrhu alebo podkladom.',
      });
    }

    if (!values.prilohy || values.prilohy.length === 0) {
      nextErrors.push({
        id: 'priloha',
        message: 'Nahrajte aspoň jednu prílohu.',
      });
    }

    if (!values.suhlas) {
      nextErrors.push({
        id: 'suhlas',
        message: 'Potvrďte správnosť uvedených údajov.',
      });
    }

    setErrors(nextErrors);

    return nextErrors.length === 0;
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    const isValid = validateForm();

    if (!isValid) {
      window.setTimeout(() => {
        document.getElementById('form-error-summary')?.focus();
      }, 0);

      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitFeedbackForm(values);

      setSuccessData({
        nazovKomponentu: values.nazovKomponentu,
        email: values.email,
        datumPrijatia: result.datumPrijatia,
        referencneCislo: result.referencneCislo,
      });

      setErrors([]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      setErrors(
        error.errors || [
          {
            id: 'odoslat-zamer',
            message: error.message || 'Formulár sa nepodarilo odoslať.',
          },
        ]
      );

      window.setTimeout(() => {
        document.getElementById('form-error-summary')?.focus();
      }, 0);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = async () => {
    if (!successData?.email) return;

    await navigator.clipboard.writeText('idsk@mirri.gov.sk');
    setCopied(true);

    window.setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  if (successData) {
  return (
    <main className="mx-auto my-8 w-full max-w-[1120px] px-4">
      <div className="mx-auto flex flex-col items-center text-center">
        <CheckIcon className="h-20 w-20" />

        <h1 className="mt-6 text-2xl font-black leading-tight text-black sm:text-3xl md:text-4xl md:leading-[55px]">
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
        aria-labelledby="kontaktujte-idsk-tim"
        className="mx-auto mt-10 w-full"
      >
        <h2
          id="kontaktujte-idsk-tim"
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
                    IDSK tím Ministerstva investícií, regionálneho rozvoja a informatizácie.
                  </strong>
                </p>

                <div className="mt-3 flex max-w-full flex-wrap items-center gap-x-1 gap-y-3 text-[19px] leading-7 text-[#212121]">
                  <span>Email:</span>

                  <a
                    href="mailto:idsk@mirri.gov.sk"
                    className="
                      text-[#0B4199] underline underline-offset-2
                      hover:text-[#126DFF] hover:decoration-2
                      focus:outline focus:outline-[3px] focus:outline-[#D96E00] focus:outline-offset-2
                    "
                  >
                    <strong>idsk@mirri.gov.sk</strong>
                  </a>

                  <ButtonCustom
                    type="button"
                    variant="secondary"
                    status="basic"
                    size="medium"
                    onClick={handleCopyEmail}
                    iconLeft={<CopyIcon className="h-5 w-5 shrink-0" />}
                    className="ml-2"
                  >
                    Kopírovať
                  </ButtonCustom>
                </div>

                {copied && (
                  <p
                    className="mt-4 text-[16px] leading-6 text-[#00703C]"
                    role="status"
                  >
                    E-mailová adresa bola skopírovaná.
                  </p>
                )}
              </div>
            </div>
          </div>
      </section>
    </main>
  );
}

  return (
    <main className="mx-auto my-8 w-full max-w-[1120px] px-4">
        <h1 className="text-2xl font-black leading-tight text-black sm:text-3xl md:text-4xl md:leading-[55px]">
          Zámer vytvorenia nového komponentu alebo úpravy existujúceho komponentu
        </h1>

        <p className="mt-6 text-[19px] leading-7 tracking-wide text-[#212121] max-w-[935px]">
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
              focus:outline focus:outline-[3px] focus:outline-[#D96E00] focus:outline-offset-2
            "
          >
            Metodickým usmernením MIRRI SR č. 051024/2026/OKPSPI
            <span className="sr-only">, súbor PDF, otvorí sa v novom okne</span>
          </a>
          .
        </p>

        <RequiredHint />

        <form className="mt-10 flex flex-col gap-10" noValidate onSubmit={handleSubmit}>
          {errors.length > 0 && (
            <ErrorSummaryCustom
              id="form-error-summary"
              title="Vo formulári sú chyby"
              description="Opravte označené polia a formulár odošlite znova."
              errors={errors}
              focusOnRender={false}
            />
          )}

          <fieldset className="m-0 flex flex-col gap-6 border-0 p-0 max-w-[400px]">
            <legend className="mb-2 text-[24px] font-bold leading-8 text-[#212121]">
              Údaje o žiadateľovi
            </legend>

            <TextInputCustom
              id="organizacia"
              name="organizacia"
              inputSize="medium"
              label="Názov inštitúcie"
              placeholder="napr. Sociálna poisťovňa"
              mandatory
              fullWidth
              value={values.organizacia}
              error={!!errorMap.organizacia}
              errorMsg={errorMap.organizacia}
              onChange={(event) => updateValue('organizacia', event.target.value)}
            />

            <TextInputCustom
              id="meno"
              name="meno"
              inputSize="medium"
              label="Meno kontaktnej osoby"
              placeholder="napr. Jana"
              mandatory
              fullWidth
              value={values.meno}
              error={!!errorMap.meno}
              errorMsg={errorMap.meno}
              onChange={(event) => updateValue('meno', event.target.value)}
            />

            <TextInputCustom
              id="priezvisko"
              name="priezvisko"
              inputSize="medium"
              label="Priezvisko kontaktnej osoby"
              placeholder="napr. Slováková"
              mandatory
              fullWidth
              value={values.priezvisko}
              error={!!errorMap.priezvisko}
              errorMsg={errorMap.priezvisko}
              onChange={(event) => updateValue('priezvisko', event.target.value)}
            />

            <TextInputCustom
              id="email"
              name="email"
              type="email"
              inputSize="medium"
              label="E-mail"
              subtitle="Zadajte vo formáte xxx@yyy.sk."
              placeholder="napr. jana.slovakova@slovensko.sk"
              mandatory
              fullWidth
              value={values.email}
              error={!!errorMap.email}
              errorMsg={errorMap.email}
              onChange={(event) => updateValue('email', event.target.value)}
            />
          </fieldset>

          <RadioButtonGroup
            id="typ-zameru"
            legend="Typ zámeru"
            name="typ-zameru"
            mandatory={true}
            errorMsg={errorMap['typ-zameru']}
            className="m-0 border-0 p-0"
          >
            <RadioButton
              id="typ-zameru-novy"
              value="novy-komponent"
              label="Nový komponent"
              checked={values.typZameru === 'novy-komponent'}
              onChange={(event) => updateValue('typZameru', event.target.value)}
            />

            <RadioButton
              id="typ-zameru-uprava"
              value="uprava-komponentu"
              label="Úprava existujúceho komponentu / nový variant"
              checked={values.typZameru === 'uprava-komponentu'}
              onChange={(event) => updateValue('typZameru', event.target.value)}
            />
          </RadioButtonGroup>

          <fieldset className="m-0 flex flex-col gap-6 border-0 p-0">
            <legend className="mb-2 text-[24px] font-bold leading-8 text-[#212121]">
              Informácie o komponente
            </legend>
            <div className="max-w-[400px]">
              <TextInputCustom
                id="nazov-komponentu"
                name="nazov-komponentu"
                inputSize="medium"
                label="Názov komponentu"
                subtitle="Uveďte návrh názvu nového komponentu, alebo presný názov existujúceho komponentu z knižnice IDSK."
                mandatory
                placeholder="napr. Tlačidlo"
                description={
                  <>
                    <a
                      href="/komponenty"
                      className="text-[#0B4199] underline hover:text-[#126DFF] hover:decoration-2 focus:outline focus:outline-[3px] focus:outline-[#D96E00] focus:outline-offset-2"
                    >
                      Zoznam komponentov IDSK
                    </a>
                  </>
                }
                fullWidth
                value={values.nazovKomponentu}
                error={!!errorMap['nazov-komponentu']}
                errorMsg={errorMap['nazov-komponentu']}
                onChange={(event) => updateValue('nazovKomponentu', event.target.value)}
              />
            </div>

            <div className="max-w-[640px] flex flex-col gap-6">
              <TextareaCustom
                id="popis-zameru"
                name="popis-zameru"
                label="Popis funkcionality komponentu"
                subtitle="Podrobne opíšte, na čo komponent slúži a aká je jeho očakávaná interakcia a správanie."
                mandatory
                fullWidth
                maxLength={300}
                value={values.popisZameru}
                error={!!errorMap['popis-zameru']}
                errorMsg={errorMap['popis-zameru']}
                onChange={(event) => updateValue('popisZameru', event.target.value)}
              />

              <TextareaCustom
                id="dovod-zmeny"
                name="dovod-zmeny"
                label="Zdôvodnenie potreby"
                subtitle="Uveďte dôvody vytvorenia/zmeny, napr. chýbajúci prvok v IDSK, nová legislatíva, technologické limity."
                mandatory
                fullWidth
                maxLength={300}
                value={values.dovodZmeny}
                error={!!errorMap['dovod-zmeny']}
                errorMsg={errorMap['dovod-zmeny']}
                onChange={(event) => updateValue('dovodZmeny', event.target.value)}
              />

              <TextareaCustom
                id="doplnujuce-informacie"
                name="doplnujuce-informacie"
                label="Výstupy z používateľského prieskumu"
                subtitle="Stručne zhrňte zistenia z prieskumu alebo uveďte odkaz na samostatnú prílohu s výstupmi."
                mandatory
                fullWidth
                maxLength={300}
                value={values.doplnujuceInformacie}
                error={!!errorMap['doplnujuce-informacie']}
                errorMsg={errorMap['doplnujuce-informacie']}
                onChange={(event) =>
                  updateValue('doplnujuceInformacie', event.target.value)
                }
              />
             </div>
            <div className="max-w-[400px]">
              <TextInputCustom
                id="url"
                name="url"
                type="url"
                inputSize="medium"
                label="Grafický návrh (Figma/Príloha)"
                placeholder="napr. https://www.figma.com/design/..."
                mandatory
                subtitle="Vložte priamy odkaz na projekt v nástroji Figma (s povolením na zobrazenie)."
                fullWidth
                value={values.url}
                error={!!errorMap.url}
                errorMsg={errorMap.url}
                onChange={(event) => updateValue('url', event.target.value)}
              />
            </div>

            <FileUploadCustom
              id="priloha"
              title="Prílohy"
              hint="Nahrajte dokumentáciu k zámeru (napr. výstupy z používateľského prieskumu, grafické návrhy alebo technickú špecifikáciu)."
              subtitle="Nahrajte súbor alebo ho sem presuňte."
              accept=".fig,.xls,.xlsx,.odt,.ods,.csv,.zip"
              acceptedFormatsLabel="FIG, XLS, XLSX, ODT, ODS, CSV alebo ZIP"
              required
              errorMessage={errorMap.priloha}
              onChangeFiles={(files) => updateValue('prilohy', files)}
              formatsText={
                <>
                  Podporované formáty:{' '}
                  <span className="font-bold">FIG, XLS, XLSX, ODT, ODS, CSV, ZIP</span>
                </>
              }
              maxSizeText={
                <>
                  Maximálna veľkosť súboru:{' '}
                  <span className="font-bold">15 MB</span>
                </>
              }
              buttonText="Vyberte súbor"
            />
          </fieldset>

          <div
            className="flex flex-col gap-2"
            aria-describedby={errorMap.suhlas ? 'suhlas-error' : undefined}
          >
            <div className="flex items-start gap-3">
              <div className="max-w-[760px]">
                <Checkbox
                  id="suhlas"
                  name="suhlas"
                  inputSize="large"
                  label="Orgán riadenia potvrdzuje, že zdrojový kód komponentu bude publikovaný pod verejnou licenciou umožňujúcou jeho bezodplatné používanie, úpravu a šírenie."
                  mandatory
                  checked={values.suhlas}
                  error={!!errorMap.suhlas}
                  errorMsg={errorMap.suhlas}
                  onChange={(event) => updateValue('suhlas', event.target.checked)}
                />
              </div>
            </div>
          </div>

          <div>
            <ButtonCustom
              id="odoslat-zamer"
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