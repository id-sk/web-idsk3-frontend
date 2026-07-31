import React from 'react';

import ErrorSummaryCustom from '@/app/(home)/_components/error-summary/errorSummaryCustom';
import InformationBanner from '@/app/(home)/_components/information-banner/informationBannerCustom';
import ButtonCustom from '@/app/(home)/_components/button/buttonCustom';

import {
  SectionBlock,
  Text,
  Ul,
} from '@/app/(home)/_components/content-blocks/ContentBlocks';

const exampleWrapperClass =
  'flex flex-col items-center gap-6 py-10 border-2 border-dashed border-[#757575] rounded-[10px] mb-8 mt-4';

const codeClass =
  'bg-neutral-100 border border-neutral-200 font-mono text-sm px-1.5 py-0.5 rounded text-black';

const ExampleTextInput = ({
  id,
  name,
  type = 'text',
  label,
  value,
  errorMsg,
  mandatory = true,
}) => {
  const errorId = `${id}-error`;

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-[19px] leading-[28px] mb-2">
        {label}
        {mandatory && (
          <span aria-hidden="true" className="text-[#C3112B] text-xl ml-1">
            *
          </span>
        )}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        value={value}
        readOnly
        aria-invalid="true"
        aria-describedby={errorId}
        className="
          w-full border-2 border-[#C3112B] px-3 py-2 text-[19px] leading-[28px]
          focus:outline focus:outline-[3px] focus:outline-[#d96e00] focus:outline-offset-2
          hover:ring-[4px] hover:ring-[#757575]
        "
      />

      <p id={errorId} className="text-[#C3112B] text-[19px] leading-[28px] mt-2">
        <span>Chyba: </span>
        {errorMsg}
      </p>

    </div>
  );
};

const TabPouzitie = () => {
  const errors = [
    {
      id: 'error-summary-demo-name',
      message: 'Meno musí obsahovať aspoň 3 znaky.',
    },
    {
      id: 'error-summary-demo-email',
      message: 'Zadajte e-mailovú adresu v tvare meno@example.com.',
    },
  ];

  return (
    <div className="animate-fade-in text-black w-full min-w-0">
      <SectionBlock titleString="Použitie prehľadu s chybovými hláseniami">
        <div className={exampleWrapperClass}>
          <div className="w-full max-w-[600px] px-4">
            <ErrorSummaryCustom
              title="Vo formulári sú chyby"
              description="Opravte nasledujúce údaje pred pokračovaním."
              errors={errors}
              focusOnRender={false}
            />

            <p className="mb-7">
              Povinné polia sú označené hviezdičkou{' '}
              <span aria-hidden="true" className="text-[#C3112B] text-xl">
                *
              </span>
            </p>

            <form className="space-y-8 mt-8" noValidate>
              <ExampleTextInput
                id="error-summary-demo-name"
                name="name"
                label="Zadajte meno"
                value="Al"
                errorMsg="Meno musí obsahovať aspoň 3 znaky."
              />

              <ExampleTextInput
                id="error-summary-demo-email"
                name="email"
                type="email"
                label="Zadajte e-mail"
                value="lenka@"
                errorMsg="Zadajte e-mailovú adresu v tvare meno@example.com."
              />

              <ButtonCustom variant="primary" status="basic" type="button">
                Odoslať formulár
              </ButtonCustom>
            </form>
          </div>
        </div>

        <Text className="mb-8">
          Prehľad s chybovými hláseniami použite po validačnej chybe vo
          formulári. Má používateľovi jasne povedať, že formulár obsahuje chyby,
          zobraziť ich v jednom zozname a umožniť prechod na konkrétne chybné
          polia.
        </Text>

        <Text className="mb-8">
          Ak sa na prehľad chýb presúva zameranie klávesnice, nepoužívajte na
          rovnakom prvku <code className={codeClass}>role=&quot;alert&quot;</code>.
          Kombinácia automatického oznámenia a presunu fokusu môže spôsobiť
          duplicitné čítanie obsahu.
        </Text>

        <div className="flex flex-wrap gap-8 sm:gap-12 mt-10">
          <div className="flex flex-col items-start flex-1 min-w-[280px]">
            <InformationBanner
              title="Ako sa používa"
              type="banner"
              variant="basic"
              hideCloseButton={true}
            >
              <Ul className="text-sm mt-4">
                <li>keď formulár obsahuje validačnú chybu, aj keď ide len o jednu chybu,</li>
                <li>po pokuse o odoslanie formulára, nie pri každom písaní,</li>
                <li>spolu s chybovým hlásením pri konkrétnom poli,</li>
                <li>pred formulárom alebo na začiatku hlavného obsahu stránky,</li>
                <li>vždy len jeden prehľad chýb na jeden formulár,</li>
                <li>chyby majú byť v rovnakom poradí ako polia vo formulári.</li>
              </Ul>
            </InformationBanner>
          </div>

          <div className="flex flex-col items-start flex-1 min-w-[280px]">
            <InformationBanner
              title="Ako sa nepoužíva"
              type="banner"
              variant="warning"
              hideCloseButton={true}
            >
              <Ul className="text-sm mt-4">
                <li>na konci formulára, kde ho používateľ nemusí nájsť,</li>
                <li>s inými textami ako pri samotných poliach,</li>
                <li>so všeobecnými hláškami bez návrhu opravy,</li>
                <li>spolu s <code className={codeClass}>role=&quot;alert&quot;</code>, ak sa na summary presúva focus,</li>
                <li>na systémové alebo aplikačné chyby, ktoré nesúvisia s validáciou formulára.</li>
              </Ul>
            </InformationBanner>
          </div>
        </div>
      </SectionBlock>
    </div>
  );
};

export default TabPouzitie;