import React from 'react';

import {
  RadioButton,
  RadioButtonGroup,
} from '@/app/(home)/_components/inputs/radioButtonCustom';

import {
  SectionBlock,
  H3,
} from '@/app/(home)/_components/content-blocks/ContentBlocks';

const exampleWrapperClass =
  'flex flex-col items-center gap-6 py-10 border-2 border-dashed border-[#9e9e9e] rounded-[10px] mb-8 mt-4';

const TabVarianty = () => (
  <div className="animate-fade-in text-black w-full min-w-0">
    <SectionBlock titleString="Varianty a stavy">
      <H3>1. Začiarknuté a nezačiarknuté prepínacie pole</H3>

      <div className={exampleWrapperClass}>
        <div className="w-full max-w-[600px] px-4">
          <RadioButtonGroup
            legend="Prepínacie pole"
            name="stav-zaciarknutia"
            hint="Prepínacie pole ukazuje zvolenú a nezvolenú možnosť."
            mandatory={true}
          >
            <RadioButton
              value="checked"
              label="Začiarknuté"
              defaultChecked
            />

            <RadioButton value="unchecked" label="Nezačiarknuté" />
          </RadioButtonGroup>
        </div>
      </div>

      <H3>2. Neaktívny a chybový stav</H3>

      <div className={exampleWrapperClass}>
        <div className="w-full max-w-[600px] px-4">
          <RadioButtonGroup
            legend="Prepínacie pole príklad"
            name="stav-chybovy"
            hint="Ukážka neaktívneho poľa v chybovej skupine."
            mandatory={true}
            errorMsg="Prepínacie pole príklad je povinné. Vyberte jednu z možností."
          >
            <RadioButton
              value="disabled"
              label="Menovka (neaktívne)"
              disabled={true}
            />

            <RadioButton value="unchecked" label="Menovka (chyba)" />
          </RadioButtonGroup>
        </div>
      </div>

      <H3>3. Veľké a malé prepínacie pole</H3>

      <div className={exampleWrapperClass}>
        <div className="w-full max-w-[600px] px-4">
          <RadioButtonGroup
            legend="Prepínacie pole veľkosti"
            name="stav-velkosti"
            hint="Prepínacie pole môže mať veľký alebo malý formát."
            mandatory={true}
          >
            <RadioButton
              value="large-size"
              label="Menovka (veľké)"
              inputSize="large"
            />

            <RadioButton
              value="small-size"
              label="Menovka (malé)"
              inputSize="small"
            />
          </RadioButtonGroup>
        </div>
      </div>

      <H3>4. Nepovinná skupina</H3>

      <div className={exampleWrapperClass}>
        <div className="w-full max-w-[600px] px-4">
          <RadioButtonGroup
            legend="Chcete nám povedať viac?"
            name="nepovinna-skupina"
            hint="Táto voľba je nepovinná."
            mandatory={false}
          >
            <RadioButton value="ano" label="Áno" />
            <RadioButton value="nie" label="Nie" />
          </RadioButtonGroup>
        </div>
      </div>

      <H3>5. Prepínacie pole s doplňujúcim textom pri možnosti</H3>

      <div className={exampleWrapperClass}>
        <div className="w-full max-w-[600px] px-4">
          <RadioButtonGroup
            legend="Vyberte spôsob doručenia"
            name="sposob-dorucenia"
            hint="Vyberte iba jednu z dostupných možností."
            mandatory={true}
          >
            <RadioButton
              value="posta"
              label="Poštou"
              hint="Doručenie môže trvať 3 až 5 pracovných dní."
            />

            <RadioButton
              value="osobne"
              label="Osobne"
              hint="Dokument si budete môcť prevziať na vybranom pracovisku."
            />

            <RadioButton value="elektronicky" label="Elektronicky" />
          </RadioButtonGroup>
        </div>
      </div>
    </SectionBlock>
  </div>
);

export default TabVarianty;