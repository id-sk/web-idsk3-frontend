'use client';

import React from 'react';
import { Signpost, SignpostGroup } from '@/app/(home)/_components/signpost/signpostCustom';
import { SectionBlock, H3, ExampleBlock } from '@/app/(home)/_components/content-blocks/ContentBlocks';

const IconArrow = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>;
const IconDoc = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>;

const TabVarianty = () => (
    <div className="animate-fade-in text-black w-full min-w-0">
        
        <SectionBlock titleString="Varianty a stavy">
            
            <H3>1. Základný rázcestník (bez ikoniek)</H3>
            <ExampleBlock className="mt-4" innerClassName="max-w-[800px]">
                <Signpost 
                    heading="Tlačivá a formuláre" 
                    href="/komponenty/razcestnik-horizontalny"
                >
                    Tu nájdete všetky potrebné dokumenty na stiahnutie vo formáte PDF aj Word. Môžete ich vyplniť elektronicky alebo ručne.
                </Signpost>
            </ExampleBlock>

            <H3>2. S ikonkou napravo (napríklad šípka)</H3>
            <ExampleBlock className="mt-4" innerClassName="max-w-[800px]">
                <Signpost 
                    heading="Pokračovať na ďalší krok" 
                    href="/komponenty/razcestnik-horizontalny"
                    arrowIcon={IconArrow}
                >
                    Kliknutím prejdete na druhú časť vašej žiadosti. Vaše doterajšie údaje boli uložené.
                </Signpost>
            </ExampleBlock>

            <H3>3. S ikonkou naľavo</H3>
            <ExampleBlock className="mt-4" innerClassName="max-w-[800px]">
                <Signpost 
                    heading="Metodické usmernenia" 
                    href="/komponenty/razcestnik-horizontalny"
                    icon={IconDoc}
                >
                    Prehľad platných metodických usmernení a postupov pre zamestnancov verejnej správy.
                </Signpost>
            </ExampleBlock>

            <H3>4. S ikonkami na oboch stranách</H3>
            <ExampleBlock className="mt-4" innerClassName="max-w-[800px]">
                <Signpost 
                    heading="Komponenty" 
                    href="/komponenty/razcestnik-horizontalny"
                    target="_blank"
                    icon={IconDoc}
                    arrowIcon={IconArrow}
                >
                    Prechod na komponenty IDSK.
                </Signpost>
            </ExampleBlock>

            <H3>5. Skupina rázcestníkov (Grid zobrazenie)</H3>
            <ExampleBlock className="mt-4" innerClassName="max-w-[800px]">
                <SignpostGroup columns={2}>
                    <Signpost heading="Rodina a vzťahy" href="/komponenty/razcestnik-horizontalny" arrowIcon={IconArrow}>
                        Narodenie dieťaťa, manželstvo, úmrtie.
                    </Signpost>
                    
                    <Signpost heading="Práca a zamestnanie" href="/komponenty/razcestnik-horizontalny" arrowIcon={IconArrow}>
                        Hľadanie práce, odvody, podnikanie.
                    </Signpost>
                    
                    <Signpost heading="Bývanie" href="/komponenty/razcestnik-horizontalny" arrowIcon={IconArrow}>
                        Trvalý pobyt, stavebné povolenie, kataster.
                    </Signpost>
                    
                    <Signpost heading="Zdravotníctvo" href="/komponenty/razcestnik-horizontalny" arrowIcon={IconArrow}>
                        Zdravotné poistenie, eZdravie, preukazy.
                    </Signpost>
                </SignpostGroup>
            </ExampleBlock>

        </SectionBlock>
    </div>
);

export default TabVarianty;