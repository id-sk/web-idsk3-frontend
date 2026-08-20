import React from 'react';

import ErrorSummaryCustom from '@/app/(home)/_components/error-summary/errorSummaryCustom';
import InformationBanner from '@/app/(home)/_components/information-banner/informationBannerCustom';
import ButtonCustom from '@/app/(home)/_components/button/buttonCustom';
import TextInputCustom from '@/app/(home)/_components/inputs/textInputCustom';

import {
  SectionBlock,
  Text,
  Ul,
  ExampleBlock,
} from '@/app/(home)/_components/content-blocks/ContentBlocks';

const codeClass =
  'bg-neutral-100 border border-neutral-200 font-mono text-sm px-1.5 py-0.5 rounded text-black';

const TabPouzitie = () => {
  const errors = [
    {
      id: 'error-summary-demo-name-error',
      targetId: 'error-summary-demo-name',
      message: 'Meno musí obsahovať aspoň 3 znaky.',
    },
    {
      id: 'error-summary-demo-email-error',
      targetId: 'error-summary-demo-email',
      message: 'Zadajte e-mailovú adresu v tvare meno@example.com.',
    },
  ];

  return (
    <div className="animate-fade-in text-black w-full min-w-0">
      <SectionBlock titleString="Použitie prehľadu s chybovými hláseniami">
        <ExampleBlock className="mt-4" innerClassName="max-w-[600px]">
          <ErrorSummaryCustom
            title="Vo formulári sú chyby"
            description="Opravte nasledujúce údaje pred pokračovaním."
            errors={errors}
          />

          <p className="mb-7">
            Povinné polia sú označené hviezdičkou{' '}
            <span aria-hidden="true" className="text-[#C3112B] text-xl">
              *
            </span>
          </p>

          <form className="space-y-8 mt-8" noValidate>
            <TextInputCustom
              id="error-summary-demo-name"
              name="name"
              label="Zadajte meno"
              value="Al"
              readOnly
              mandatory
              errorMsg="Meno musí obsahovať aspoň 3 znaky."
            />

            <TextInputCustom
              id="error-summary-demo-email"
              name="email"
              type="email"
              label="Zadajte e-mail"
              value="lenka@"
              readOnly
              mandatory
              errorMsg="Zadajte e-mailovú adresu v tvare meno@example.com."
            />

            <ButtonCustom variant="primary" status="basic" type="button">
              Odoslať formulár
            </ButtonCustom>
          </form>
        </ExampleBlock>

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