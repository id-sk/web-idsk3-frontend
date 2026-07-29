import React from 'react';
import { CustomAccordion } from '@/app/(home)/_components/accordion/accordionCustom';
import { SectionBlock, H3, Text } from '@/app/(home)/_components/content-blocks/ContentBlocks';

const TabVarianty = () => (
  <div className="animate-fade-in text-black w-full min-w-0">
    
    <SectionBlock titleString="Varianty a stavy">
      <Text>
        Akordeón je zložený zo sekcií, ktoré je možné rozbaliť/zbaliť individuálne, alebo všetky naraz tlačidlom “Otvoriť/Zavrieť všetky” sekcie. V prípade potreby dlhšieho nadpisu sekcie (viac ako 10 slov), je možné v hlavičke sekcie použiť popis.
      </Text>

      <H3>1. Variant akordeónu bez popisu a s popisom:</H3>
      
      <div className="flex flex-col items-center gap-4 py-10 border-2 border-dashed border-[#757575] rounded-[10px]">
        <div className="w-full max-w-[700px] px-4 mt-5">
          <CustomAccordion 
            heading="Toto je variant akordeónu bez popisu" 
            initiallyClosed={true}
          >
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          </CustomAccordion>
        </div>
        
        <div className="w-full max-w-[700px] px-4 mt-6">
          <CustomAccordion 
            heading="Toto je variant akordeónu s popisom" 
            subTitle="Tu môžete napísať detailnejšie informácie o tom, čo tento akordeón obsahuje."
            initiallyClosed={true}
          >
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          </CustomAccordion>
        </div>
      </div>

      <H3>2. Stavy akordeónu (Hover a Focus):</H3>
      <Text className="mb-8">
        Akordeón zároveň obsahuje dva základné stavy, indikujúce jeho interaktivitu pre použitie myšou (hover) i klávesnicou (focus).
      </Text>

      {/* Demo kontajner pre stavy */}
      <div className="flex flex-col items-center gap-4 py-10 border-2 border-dashed border-[#757575] rounded-[10px]">
        <div className="w-full max-w-[700px] px-4 mt-5">
          <CustomAccordion 
            className="demo-hover-state" 
            heading="Akordeón zobrazujúci zameranie myšou" 
          >
            <Text>
              Zameranie myšou (hover stav) je kľúčovým prvkom pre vizuálnu indikáciu interaktívneho komponentu. Používateľ vďaka nemu môže vidieť, že nasledujúci akordeón je možné zbaliť a rozbaliť.
            </Text>
          </CustomAccordion>
        </div>
        
        <div className="w-full max-w-[700px] px-4 mt-6">
          <CustomAccordion 
            className="demo-focus-state" 
            heading="Akordeón zobrazujúci zameranie klávesnicou" 
          >
            <Text>
              Zameranie klávesnicou (focus stav) je kľúčovým prvkom prístupnosti, a to nielen pre vizuálnu indikáciu interaktívneho komponentu pre používateľov klávesnice, ale primárne pre používateľov asistenčných zariadení.
            </Text>
          </CustomAccordion>
        </div>
      </div>
    </SectionBlock>

  </div>
);

export default TabVarianty;