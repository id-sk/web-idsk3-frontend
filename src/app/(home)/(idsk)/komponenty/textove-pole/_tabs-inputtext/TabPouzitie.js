'use client';

import React from 'react';
import TextInputCustom from '@/app/(home)/_components/inputs/textInputCustom';
import InformationBanner from '@/app/(home)/_components/information-banner/informationBannerCustom';
import { SectionBlock, Text, Ul } from '@/app/(home)/_components/content-blocks/ContentBlocks';

const TabPouzitie = () => (
    <div className="animate-fade-in text-black w-full min-w-0">
        
        <SectionBlock titleString="Použitie textového poľa">
            
            <div className="flex justify-center border-2 border-dashed border-[#757575] rounded-[10px] mb-8 mt-4">
                <div className="w-full max-w-[400px] py-7 my-6 px-4">
                    <TextInputCustom
                        id="organizacia"
                        name="organizacia"
                        inputSize="medium"
                        label="Názov inštitúcie"
                        placeholder="napr. Ministerstvo informatizácie"
                        mandatory
                        fullWidth
                    />
                </div>
            </div>

            <Text className="mb-4">
                Komponent textové pole sa primárne využíva vo formulároch. Veľkosť poľa zohľadňuje prípustný počet znakov daného poľa. Je potrebné zabezpečiť, aby koncový používateľ mohol zadať potrebné údaje aj na menších obrazovkách mobilných zariadení. Pri menších veľkostiach obrazoviek je vhodné škálovať polia na celú šírku obrazovky.
            </Text>
            
            <Text className="mb-8">
                Samotná veľkosť vstupného poľa sa prispôsobuje typu údajov, ktoré bude používateľ zadávať - napríklad kratšie pole pre PSČ a dlhšie pre názov ulice. Label textového poľa je obmedzený na jeden riadok, pričom jeho maximálna šírka sa odvíja od odporúčaní pre čitateľnosť vzhľadom na použitú veľkosť fontu.
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
                            <li>Ak zadávaný údaj je krátky voľný text.</li>
                            <li>Ak údaj nemá pevne definovaný formát.</li>
                            <li>Ak má používateľ zadať napr. meno a priezvisko, názov ulice, mesta alebo inú krátku informáciu.</li>
                            <li>Ak veľkosť poľa zodpovedá očakávanej dĺžke textu.</li>
                            <li>Ak nie je vhodné ani účelné použiť špecializovaný typ vstupu.</li>
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
                            <li>Ak je zadávaný údaj dlhý voľný text.</li>
                            <li>Ak údaj má pevne definovaný formát (e-mail, telefónne číslo dátum, atď.).</li>
                            <li>Ak používateľ vyberá hodnotu zo zoznamu - použite select, radio button alebo checkbox.</li>
                            <li>Ak potrebujete vstup automaticky validovať podľa typu.</li>
                        </Ul>
                    </InformationBanner>
                </div>
            </div>

        </SectionBlock>
    </div>
);

export default TabPouzitie;