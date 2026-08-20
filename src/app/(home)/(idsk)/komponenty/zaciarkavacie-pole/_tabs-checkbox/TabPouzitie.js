import React from 'react';
import Checkbox from '@/app/(home)/_components/inputs/checkboxCustom';
import InformationBanner from '@/app/(home)/_components/information-banner/informationBannerCustom';
import { SectionBlock, Text, Ul, ExampleBlock } from '@/app/(home)/_components/content-blocks/ContentBlocks';

const TabPouzitie = () => (
    <div className="animate-fade-in text-black w-full min-w-0">
        
        <SectionBlock titleString="Použitie začiarkavacieho poľa">
            
            <ExampleBlock
                className="mt-4 py-0"
                innerClassName="max-w-[400px] py-7 my-6"
            >
                <Checkbox 
                    inputSize='large'
                    name="checkbox"
                    label="Príklad začiarkavacieho poľa"
                    fullWidth={true}
                />
            </ExampleBlock>

            <Text className="mb-4">
                Začiarkavacie pole je interaktívny komponent, ktorý slúži na získanie súhlasu alebo potvrdenie výberu v používateľskom rozhraní. Komponent je využívaný prevažne s popisom, ktorý definuje funkcionalitu komponentu.
            </Text>
            
            <Text>
                Obsahuje tri stavy – začiarknutý, nezačiarknutý a neurčitý. Zmena stavu nastane kliknutím na komponent. V prípade použitia začiarkavacieho poľa pre získanie súhlasu alebo potvrdenia, je pole v predvolenom stave prázdne.
                Komponent funguje aj bez použitia skriptovacieho jazyka JavaScript, pričom aplikovanie jazyka JavaScript môže byť použité pre rozšírenú funkcionalitu.
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
                            <li>Používa sa ak používateľ môže vybrať 1 alebo viacero možností.</li>
                            <li>Používa sa s rovnocennými a nezávislými možnosťami.</li>
                            <li>Používa sa ak výber nie je vzájomne vylučujúci.</li>
                            <li>Používa sa s viditeľnou, stručnou a zrozumiteľnou menovkou.</li>
                            <li>Používa sa v zoskupení maximálne 10 polí - ak potrebujete viac možností použite rozbaľovacie pole.</li>
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
                            <li>Nepoužíva sa ak používateľ môže vybrať len jednu možnosť - použite prepínacie pole.</li>
                            <li>Nepoužíva sa ako prepínač stavu zapnuté / vypnuté s okamžitým efektom.</li>
                            <li>Nepoužíva sa bez menovky.</li>
                            <li>Nepoužíva sa len ako ikona alebo farba bez textu.</li>
                            <li>Nespájajte viac významov, tém alebo kategórií do jedného poľa.</li>
                        </Ul>
                    </InformationBanner>
                </div>
            </div>

        </SectionBlock>
    </div>
);

export default TabPouzitie;