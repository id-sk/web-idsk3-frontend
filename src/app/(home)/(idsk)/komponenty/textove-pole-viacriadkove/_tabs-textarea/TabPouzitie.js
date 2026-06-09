'use client';

import React from 'react';
import { TextField } from '@eslovensko/idsk-react'; 
import InformationBanner from '@/app/(home)/_components/information-banner/informationBannerCustom';
import { SectionBlock, Text, Ul } from '@/app/(home)/_components/content-blocks/ContentBlocks';

const TabPouzitie = () => (
    <div className="animate-fade-in text-black w-full min-w-0">
        
        <SectionBlock titleString="Použitie viacriadkového textového poľa">
            
            <div className="flex justify-center bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8 mt-4">
                <div className="w-full max-w-[500px] py-7 my-6 px-4">
                    <TextField 
                        id="textarea-priklad"
                        inputSize='large'
                        name="meno"
                        label="Príklad viacriadkového textového poľa"
                        placeholder="Príklad placeholderu"
                        mandatory={true}
                        fullWidth={true}
                    />
                </div>
            </div>

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