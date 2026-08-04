import React from 'react';

import { CustomAccordion } from '@/app/(home)/_components/accordion/accordionCustom';

import {
  SectionBlock,
  ExampleBlock,
  H3,
  Text,
} from '@/app/(home)/_components/content-blocks/ContentBlocks';

const TabVarianty = () => (
  <div className="animate-fade-in w-full min-w-0 text-black">
    <SectionBlock titleString="Varianty a stavy">
      <Text>
        Akordeón je zložený zo sekcií, ktoré je možné rozbaliť alebo zbaliť
        individuálne, prípadne všetky naraz tlačidlom „Otvoriť/Zavrieť všetky
        sekcie“. V prípade potreby dlhšieho nadpisu sekcie, teda viac ako 10
        slov, je možné v hlavičke sekcie použiť popis.
      </Text>

      <H3>1. Variant akordeónu bez popisu a s popisom</H3>

      <ExampleBlock innerClassName="max-w-[700px] pt-4 mt-2 mb-1">
        <CustomAccordion
          heading="Toto je variant akordeónu bez popisu"
          initiallyClosed={true}
        >
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </CustomAccordion>

        <CustomAccordion
          heading="Toto je variant akordeónu s popisom"
          subTitle="Tu môžete napísať detailnejšie informácie o tom, čo tento akordeón obsahuje."
          initiallyClosed={true}
        >
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </CustomAccordion>
      </ExampleBlock>

      <H3>2. Stavy akordeónu – hover a focus</H3>

      <Text className="mb-8">
        Akordeón zároveň obsahuje dva základné stavy indikujúce jeho
        interaktivitu pri použití myši – hover – a klávesnice – focus.
      </Text>

      <ExampleBlock innerClassName="max-w-[700px] pt-4 mt-2 mb-1">
        <CustomAccordion
          className="demo-hover-state"
          heading="Akordeón zobrazujúci zameranie myšou"
        >
          <Text>
            Zameranie myšou, teda hover stav, je kľúčovým prvkom vizuálnej
            indikácie interaktívneho komponentu. Používateľ vďaka nemu môže
            vidieť, že akordeón je možné zbaliť a rozbaliť.
          </Text>
        </CustomAccordion>

        <CustomAccordion
          className="demo-focus-state"
          heading="Akordeón zobrazujúci zameranie klávesnicou"
        >
          <Text>
            Zameranie klávesnicou, teda focus stav, je kľúčovým prvkom
            prístupnosti. Poskytuje vizuálnu indikáciu interaktívneho komponentu
            používateľom klávesnice a používateľom asistenčných technológií.
          </Text>
        </CustomAccordion>
      </ExampleBlock>
    </SectionBlock>
  </div>
);

export default TabVarianty;