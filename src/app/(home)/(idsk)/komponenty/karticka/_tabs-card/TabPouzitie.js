'use client';

import React from 'react';

import ArticleCard from '@/app/(home)/_components/article/articleCard';
import InformationBanner from '@/app/(home)/_components/information-banner/informationBannerCustom';

import {
  SectionBlock,
  Text,
  Ul,
} from '@/app/(home)/_components/content-blocks/ContentBlocks';

const exampleWrapperClass =
  'flex flex-col items-center gap-6 py-10 border-2 border-dashed border-[#9e9e9e] rounded-[10px] mb-8 mt-4';

const TabPouzitie = () => (
  <div className="animate-fade-in text-black w-full min-w-0">
    <SectionBlock titleString="Použitie kartičky">
      <div className={exampleWrapperClass}>
        <div className="w-full max-w-[500px] px-4">
          <ArticleCard
            href="/komponenty/karticka"
            src="/images/co-je-cards/10-principov-idsk.svg"
            alt=""
            title="Základné informácie"
            description="Stručný prehľad základných povinností pre fyzické a právnické osoby pri podávaní daňového priznania."
          />
        </div>
      </div>

      <Text className="mb-8">
        Kartička je komponent obsahujúci stručný popis, prípadne tag, dátum
        alebo obrázok. Slúži najmä ako navigácia na články alebo podstránky.
        Celá plocha kartičky môže byť klikateľná a používateľa presmeruje na
        konkrétny obsah.
      </Text>

      <Text className="mb-8">
        Kartičku používajte v zoznamoch súvisiaceho obsahu, článkov, aktualít
        alebo podstránok. Nadpis a popis majú byť krátke, zrozumiteľné a
        informačne dostatočné aj bez obrázka.
      </Text>

      <div className="flex flex-wrap gap-8 sm:gap-12 mt-10">
        <div className="flex flex-col items-start flex-1 min-w-[280px]">
          <InformationBanner
            title="Ako sa používa"
            ariaLabel="Správne použitie kartičky"
            type="banner"
            variant="basic"
            hideCloseButton={true}
          >
            <Ul className="text-sm mt-4">
              <li>na navigáciu k súvisiacemu obsahu,</li>
              <li>ako jeden celistvý klikateľný prvok,</li>
              <li>s jasným vizuálnym indikátorom, že ide o klikateľný prvok,</li>
              <li>so stručným a jasným nadpisom,</li>
              <li>v logických a primeraných skupinách.</li>
            </Ul>
          </InformationBanner>
        </div>

        <div className="flex flex-col items-start flex-1 min-w-[280px]">
          <InformationBanner
            title="Ako sa nepoužíva"
            ariaLabel="Nesprávne použitie kartičky"
            type="banner"
            variant="warning"
            hideCloseButton={true}
          >
            <Ul className="text-sm mt-4">
              <li>s vnútornými odkazmi alebo tlačidlami,</li>
              <li>na zvýraznenie statického obsahu bez navigačného účelu,</li>
              <li>v príliš dlhých a neprehľadných zoznamoch,</li>
              <li>ak chýba alebo je nejasný nadpis,</li>
              <li>ak obrázok nesie informáciu, ale nemá zmysluplný alternatívny text.</li>
            </Ul>
          </InformationBanner>
        </div>
      </div>
    </SectionBlock>
  </div>
);

export default TabPouzitie;