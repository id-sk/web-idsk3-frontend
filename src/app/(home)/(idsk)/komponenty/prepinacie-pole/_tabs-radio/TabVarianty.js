import React from 'react';

import {
  RadioButton,
  RadioButtonGroup,
} from '@/app/(home)/_components/inputs/radioButtonCustom';

import {
  SectionBlock,
  H3,
  ExampleBlock,
} from '@/app/(home)/_components/content-blocks/ContentBlocks';

const TabVarianty = () => (
  <div className="animate-fade-in text-black w-full min-w-0">
    <SectionBlock titleString="Varianty a stavy">
      <H3>1. Začiarknuté a nezačiarknuté prepínacie pole</H3>

      <ExampleBlock className="mt-4" innerClassName="max-w-[600px]">
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
      </ExampleBlock>

      <H3>2. Neaktívny a chybový stav</H3>

      <ExampleBlock className="mt-4" innerClassName="max-w-[600px]">
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
      </ExampleBlock>

      <H3>3. Veľké a malé prepínacie pole</H3>

      <ExampleBlock className="mt-4" innerClassName="max-w-[600px]">
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
      </ExampleBlock>

      <H3>4. Nepovinná skupina</H3>

      <ExampleBlock className="mt-4" innerClassName="max-w-[600px]">
        <RadioButtonGroup
          legend="Chcete nám povedať viac?"
          name="nepovinna-skupina"
          hint="Táto voľba je nepovinná."
          mandatory={false}
        >
          <RadioButton value="ano" label="Áno" />
          <RadioButton value="nie" label="Nie" />
        </RadioButtonGroup>
      </ExampleBlock>

      <H3>5. Prepínacie pole s doplňujúcim textom pri možnosti</H3>

      <ExampleBlock className="mt-4" innerClassName="max-w-[600px]">
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
      </ExampleBlock>
    </SectionBlock>
  </div>
);

export default TabVarianty;