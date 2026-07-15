import React from 'react';

import {
  RadioButton,
  RadioButtonGroup,
} from '@/app/(home)/_components/inputs/radioButtonCustom';

import InformationBanner from '@/app/(home)/_components/information-banner/informationBannerCustom';

import {
  SectionBlock,
  Text,
  Ul,
} from '@/app/(home)/_components/content-blocks/ContentBlocks';

const exampleWrapperClass =
  'flex flex-col items-center gap-6 py-10 border-2 border-dashed border-[#9e9e9e] rounded-[10px] mb-8 mt-4';

const TabPouzitie = () => (
  <div className="animate-fade-in text-black w-full min-w-0">
    <SectionBlock titleString="Použitie prepínacieho poľa">
      <div className={exampleWrapperClass}>
        <div className="w-full max-w-[600px] px-4">
          <RadioButtonGroup
            legend="Ako vás máme kontaktovať?"
            name="kontakt"
            hint="Vyberte len jednu možnosť"
            mandatory={true}
          >
            <RadioButton value="email" label="E-mail" />

            <RadioButton
              value="sms"
              label="Textová správa (SMS)"
              disabled={true}
            />

            <RadioButton
              value="telefon"
              label="Telefón"
              hint="Zavoláme vám v pracovných dňoch od 8:00 do 16:00."
            />
          </RadioButtonGroup>
        </div>
      </div>

      <Text className="mb-8">
        Komponent prepínacie pole umožňuje používateľom vybrať iba jednu z
        viacerých navrhovaných možností. Najčastejšie sa používa vo formulároch
        pri možnostiach, ktoré sa navzájom vylučujú.
      </Text>

      <Text className="mb-8">
        Prepínacie polia sú vhodné najmä vtedy, keď je počet možností primeraný
        a používateľovi pomôže, ak ich vidí všetky naraz. Pri viacerých
        možnostiach sa spravidla zoraďujú pod seba, ak nejde o špecifický
        vizuálny prípad, napríklad škálu spätnej väzby.
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
              <li>ak si používateľ môže vybrať iba jednu možnosť,</li>
              <li>ak sú možnosti vzájomne sa vylučujúce,</li>
              <li>ak je vhodné zobraziť všetky možnosti naraz,</li>
              <li>napríklad pri výbere spôsobu platby alebo doručenia,</li>
              <li>v jednej jasne pomenovanej logickej skupine.</li>
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
              <li>
                keď používateľ potrebuje vybrať viac možností naraz — vtedy
                použite začiarkavacie pole,
              </li>
              <li>
                keď je možností príliš veľa — vtedy zvážte rozbaľovacie pole,
              </li>
              <li>bez kontextu, otázky alebo zrozumiteľnej legendy,</li>
              <li>ako navigačný prvok,</li>
              <li>na potvrdenie jednej samostatnej voľby áno/nie.</li>
            </Ul>
          </InformationBanner>
        </div>
      </div>
    </SectionBlock>
  </div>
);

export default TabPouzitie;