'use client';

import React from 'react';

import BreadcrumbCustom from '@/app/(home)/_components/breadcrumbs/breadcrumbCustom';
import InformationBanner from '@/app/(home)/_components/information-banner/informationBannerCustom';

import {
  SectionBlock,
  Text,
  Ul,
} from '@/app/(home)/_components/content-blocks/ContentBlocks';

const exampleWrapperClass =
  'flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8 mt-4';

const TabPouzitie = () => (
  <div className="animate-fade-in text-black w-full min-w-0">
    <SectionBlock titleString="Použitie omrvinkovej navigácie">
      <div className={exampleWrapperClass}>
        <div className="w-full max-w-[600px] px-4">
          <BreadcrumbCustom
            homeVariant="text"
            items={[
                {
                href: '/komponenty',
                label: 'Komponenty',
                },
                {
                label: 'Omrvinková navigácia',
                current: true,
                },
            ]}
            />
        </div>
      </div>

      <Text className="mb-8">
        Omrvinková navigácia sa používa ako zrozumiteľná navigácia používateľa
        v štruktúre stránok smerom od domovskej stránky. Komponent slúži na
        pochopenie aktuálnej polohy používateľa a na návrat na vyššie úrovne
        webového sídla.
      </Text>

      <Text className="mb-8">
        Medzi odkazmi a aktuálnou stránkou musí byť jasné vizuálne odlíšenie.
        Aktuálna stránka nemá byť klikateľná. Text odkazov má byť stručný,
        zrozumiteľný a ideálne v rozsahu jedného až troch slov.
      </Text>

      <div className="flex flex-wrap gap-8 sm:gap-12 mt-10">
        <div className="flex flex-col items-start flex-1 min-w-[280px]">
          <InformationBanner
            title="Ako sa používa"
            ariaLabel="Správne použitie omrvinkovej navigácie"
            type="banner"
            variant="basic"
            hideCloseButton={true}
          >
            <Ul className="text-sm mt-4">
              <li>
                Umiestňuje sa pod hlavičkou stránky tak, aby bola používateľovi
                dostupná pri orientácii v rozhraní.
              </li>
              <li>
                Zvyčajne sa skladá z horizontálneho reťazca odkazov od vyššej
                úrovne po aktuálnu stránku.
              </li>
              <li>
                Používajte ju najmä pri viacúrovňovej informačnej architektúre.
              </li>
              <li>
                Názvy položiek majú byť krátke, vecné a konzistentné s názvami
                stránok.
              </li>
            </Ul>
          </InformationBanner>
        </div>

        <div className="flex flex-col items-start flex-1 min-w-[280px]">
          <InformationBanner
            title="Ako sa nepoužíva"
            ariaLabel="Nesprávne použitie omrvinkovej navigácie"
            type="banner"
            variant="warning"
            hideCloseButton={true}
          >
            <Ul className="text-sm mt-4">
              <li>
                Nepoužívajte ju na weboch s plochou štruktúrou, kde neprináša
                používateľovi dodatočný kontext.
              </li>
              <li>
                Nepoužívajte ju ako indikátor postupu v lineárnom formulári
                alebo transakcii.
              </li>
              <li>
                Vyhnite sa príliš dlhým názvom položiek.
              </li>
              <li>
                Nepoužívajte ikonky ako náhradu za zrozumiteľný text odkazu.
              </li>
            </Ul>
          </InformationBanner>
        </div>
      </div>
    </SectionBlock>
  </div>
);

export default TabPouzitie;