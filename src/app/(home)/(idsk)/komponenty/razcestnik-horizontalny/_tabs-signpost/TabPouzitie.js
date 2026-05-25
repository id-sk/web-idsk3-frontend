'use client';

import React from 'react';
import { Signpost } from '@/app/(home)/_components/signpost/signpostCustom';
import InformationBanner from '@/app/(home)/_components/information-banner/informationBannerCustom';
import { SectionBlock, Text, Ul } from '@/app/(home)/_components/content-blocks/ContentBlocks';

const TabPouzitie = () => (
    <div className="animate-fade-in text-black w-full min-w-0">
        
        <SectionBlock titleString="Použitie rázcestníka">
            
            <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8 mt-4">
                <div className="w-full max-w-[600px] px-4">
                    <Signpost 
                        heading="Rázcestník" 
                        href="/komponenty/razcestnik-horizontalny"
                    >
                        Tu nájdete komponent horizontálny rázcestník. Nájdete tam dokumentáciu a prototypy.
                    </Signpost>
                </div>
            </div>

            <Text className="mb-8">
                Použitím rázcestníka spolu s nadpisom a podnadpisom dáte používateľovi najavo, ktorý obsah (a ako) spolu na stránke súvisí. Pri definovaní nadpisu a podnadpisu buďte struční a vecní. Rázcestník môžete štrukturovať do jedného alebo viacerých stĺpcov, musíte však dodržať pravidlá pre rozloženie stránky (grid).
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
                            <li>na navigáciu k súvisiacemu obsahu,</li>
                            <li>ako jeden celistvý klikateľný prvok,</li>
                            <li>s jasným vizuálnym indikátorom, že ide o klikateľný prvok (napr. ikonka šípky),</li>
                            <li>udržujte nadpisy aj podnadpisy krátke,</li>
                            <li>v logických a primeraných skupinách (max. 5 rázcestníkov).</li>
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
                            <li>s vnútornými odkazmi alebo tlačidlami,</li>
                            <li>na zvýraznenie statického obsahu,</li>
                            <li>v dlhých zoznamoch,</li>
                            <li>ak chýba alebo je nejasný názov poľa,</li>
                            <li>ako čistý text bez ikonky alebo ohraničenia.</li>
                        </Ul>
                    </InformationBanner>
                </div>
            </div>

        </SectionBlock>
    </div>
);

export default TabPouzitie;