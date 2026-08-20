'use client';

import React from 'react';
import TextareaCustom from '@/app/(home)/_components/inputs/textareaCustom';
import InformationBanner from '@/app/(home)/_components/information-banner/informationBannerCustom';
import { SectionBlock, Text, Ul, ExampleBlock } from '@/app/(home)/_components/content-blocks/ContentBlocks';

const TabPouzitie = () => (
    <div className="animate-fade-in text-black w-full min-w-0">
        
        <SectionBlock titleString="Použitie viacriadkového textového poľa">
            
            <ExampleBlock
                className="mt-4 py-0"
                innerClassName="max-w-[500px] py-7 my-6"
            >
                <TextareaCustom
                    id="textarea-priklad"
                    name="textarea-priklad"
                    label="Príklad viacriadkového textového poľa"
                    mandatory
                    fullWidth
                    maxLength={300}
                    placeholder="Príklad placeholderu"
                />
            </ExampleBlock>

            <Text className="mb-8">
                Komponent viacriadkové textové pole sa primárne využíva vo formulároch. Viacriadkové textové pole je využívané zvyčajne pre zber väčšieho množstva informácii, ako napríklad zanechanie spätnej väzby. Pri výbere viacriadkového textového poľa je nutné určiť povinnosť textového poľa podľa zadefinovaných pravidiel. Počet možných zadaných znakov je zobrazený v pravom dolnom rohu textového poľa.
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
                            <li>Používa sa na získavanie dlhších súvislých odpovedí.</li>
                            <li>Používa sa na komentáre, opis problému, doplňujúce informácie atď.</li>
                            <li>Používa sa s jasným znázornením, či je pole povinné alebo nepovinné.</li>
                            <li>Používa sa s počtom znakov v pravom dolnom rohu poľa.</li>
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
                            <li>Nepoužíva sa pre krátke vstupy a pre štruktúrované údaje (meno, e-mail, telefón).</li>
                            <li>Nepoužíva sa s horizontálnym scrollovaním textu.</li>
                            <li>Nepoužíva sa bez informácie o maximálnom počte znakov.</li>
                        </Ul>
                    </InformationBanner>
                </div>

            </div>

        </SectionBlock>
    </div>
);

export default TabPouzitie;