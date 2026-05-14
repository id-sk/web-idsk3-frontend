import React from 'react';
import Image from 'next/image';
import { Text, SectionBlock, H3, H4, CodeBlock } from '@/app/(home)/_components/content-blocks/ContentBlocks';

export const metadata = {
  title: 'Zameranie klávesnicou (Focus) | IDSK',
  description: 'Pravidlá a vizuálne štýly pre zameranie prvkov pomocou klávesnice, zabezpečujúce prístupnosť a spĺňajúce štandardy WCAG 2.1.',
};

const focusExamples = [
  { id: 'hypertext', title: 'Hypertextový odkaz', layout: 'normal', src: '/images/focus/hypertextovy-odkaz.svg', width: 375, height: 150, maxW: 'max-w-[375px]' },
  { id: 'button', title: 'Tlačidlo', layout: 'normal', src: '/images/focus/tlacidlo.svg', width: 375, height: 150, maxW: 'max-w-[375px]' },
  { id: 'checkbox', title: 'Zaškrtávacie pole', layout: 'normal', src: '/images/focus/zaskrtavacie-pole.svg', width: 375, height: 150, maxW: 'max-w-[375px]' },
  { id: 'radio', title: 'Prepínacie pole', layout: 'normal', src: '/images/focus/prepinacie-pole.svg', width: 375, height: 150, maxW: 'max-w-[375px]' },
  { id: 'input', title: 'Textové pole', layout: 'normal', src: '/images/focus/textove-pole.svg', width: 500, height: 150, maxW: 'max-w-[375px]' },
  { id: 'textarea', title: 'Viacriadkové textové pole', layout: 'normal', src: '/images/focus/viacriadkove-textove-pole.svg', width: 500, height: 150, maxW: 'max-w-[375px]' },
  { id: 'card', title: 'Kartička', layout: 'full', src: '/images/focus/karticka.svg', width: 800, height: 300, maxW: 'w-full' },
  { id: 'crossroad', title: 'Rázcestník', layout: 'normal', src: '/images/focus/razcestnik.svg', width: 375, height: 150, maxW: 'max-w-[375px]' },
  { id: 'header', title: 'Záhlavie', layout: 'normal', src: '/images/focus/zahlavie.svg', width: 375, height: 150, maxW: 'max-w-[375px]' },
  { id: 'breadcrumb', title: 'Omrvinková navigácia', layout: 'full', src: '/images/focus/omrvinkova-navigacia.svg', width: 575, height: 150, maxW: 'max-w-[575px]' },
];

const FocusPage = () => {
  return (
    <div className="flex flex-col pb-8 my-8 max-w-[1000px] px-4 sm:px-0 text-black">
      
      <header>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
          Zameranie klávesnicou (Focus)
        </h1>
      </header>

      <SectionBlock titleString="Úvod do zamerania" titleNode={<span className="sr-only">Úvod</span>}>
        <Text>
          Používateľ, ktorý používa klávesnicu ako svoje primárne vstupné zariadenie, sa naviguje po webovej stránke tak, že preskakuje z jedného interaktívneho prvku na druhý. Vidiaci používateľ klávesnice preto potrebuje mať k dispozícii viditeľné zameranie (focus), ktoré mu pomáha určiť, na ktorom prvku sa momentálne nachádza a s ktorým môže interagovať.
        </Text>
        <Text>
          V štandarde pre dizajnový manuál je zameranie pri navigácii pomocou klávesnice (focus) navrhnuté tak, aby spĺňalo požiadavky na kontrast pre netextové prvky (Kritérium úspešnosti 1.4.11 Kontrast netextových prvkov z WCAG 2.1).
        </Text>
      </SectionBlock>

      <SectionBlock titleString="Štýl zamerania">
        <Text>
          Komponent s aktívnou plochou označuje svoj zameraný stav orámovaním s hrúbkou 3 px, ktoré je umiestnené vo vzdialenosti 2 px od komponentu. Komponent s aktívnou plochou na svetlom pozadí označuje svoj zameraný stav oranžovým orámovaním (#D96E00), v záhlaví na tmavom pozadí bielym orámovaním (#FFF).
        </Text>

        <H3>Príklady použitia</H3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {focusExamples.map((example) => (
            <figure 
              key={example.id} 
              // Opravené interpolácie reťazcov
              className={`flex flex-col ${example.layout === 'full' ? 'md:col-span-2' : ''}`}
            >
              <H4>{example.title}</H4>
              
              <div className="flex flex-1 items-center justify-center p-6 bg-neutral-50 border border-neutral-200 rounded-lg min-h-[160px]">
                <Image
                  src={example.src}
                  width={example.width}
                  height={example.height}
                  quality={100}
                  alt={`${example.title} – focus stav`}
                  className={`w-full ${example.maxW} h-auto drop-shadow-sm`}
                />
              </div>

              <figcaption className="sr-only">
                {example.title} v stave focus – vizuálna ukážka dizajnového systému.
              </figcaption>
            </figure>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock titleString="Pseudo trieda focus">
        <Text>
          Pseudo triedy využívame na definovanie špeciálneho stavu prvku. CSS pseudo-trieda <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">:focus</code> slúži na štýlovanie komponentu, ktorý je aktuálne zameraný pomocou klávesnice, teda je v stave <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">focus</code> (zameraný). Typickým príkladom komponentu, ktorý môže byť v stave focus, je formulárový prvok, napríklad textové pole alebo tlačidlo.
        </Text>

        <H3>Príklad použitia</H3>
        
        <Text className="mb-6">
          Ukážka štýlu pre viditeľné zameranie pomocou klávesnice, ktoré sa aplikuje na všetky zamerateľné prvky na webovom sídle.
        </Text>
        
        <CodeBlock 
          language="css"
          title="Štandardný focus"
          subtitle="style.css"
          codeString={`:focus {
            outline: 2px solid #D96E00;
            outline-offset: 3px;
            background-color: transparent;
          }`}
        />

        <CodeBlock 
          language="css"
          title="Záhlavie, tmavé pozadie"
          subtitle="style.css"
          codeString={`:focus {
            outline: 2px solid #FFF;
            outline-offset: 3px;
            background-color: transparent;
          }`}
        />
      </SectionBlock>
      
    </div>
  );
};

export default FocusPage;