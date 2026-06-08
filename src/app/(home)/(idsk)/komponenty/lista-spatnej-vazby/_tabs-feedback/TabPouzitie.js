'use client';

import React from 'react';

import FeedbackBarCustom from '@/app/(home)/_components/feedback-bar/feedbackBarCustom';
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
    <SectionBlock titleString="Použitie lišty spätnej väzby">
      <div className={exampleWrapperClass}>
        <div className="w-full max-w-[800px] px-4">
           <FeedbackBarCustom
            question="Našli ste na tejto stránke to, čo ste hľadali?"
            showReportButton
            reportText="Oznámte chybu"
            onReport={() => {
            }}
          />
        </div>
      </div>

      <Text className="mb-8">
        Komponent lišta spätnej väzby slúži primárne na získanie jednoduchej
        spätnej väzby k užitočnosti informácií na stránke. Používateľ môže
        odpovedať pomocou rovnocenných možností „Áno“ alebo „Nie“.
      </Text>

      <Text className="mb-8">
        V kontexte štátnej správy musí byť komponent použitý transparentne,
        prístupne a bez manipulatívneho dizajnu. Ak používateľ zvolí možnosť
        „Nie“, môže nasledovať krátky dotazník alebo možnosť nahlásiť problém,
        pričom formulár má byť stručný a nemá vyžadovať zbytočné osobné údaje.
      </Text>

      <div className="flex flex-wrap gap-8 sm:gap-12 mt-10">
        <div className="flex flex-col items-start flex-1 min-w-[280px]">
          <InformationBanner
            title="Ako sa používa"
            ariaLabel="Správne použitie lišty spätnej väzby"
            type="banner"
            variant="basic"
            hideCloseButton={true}
          >
            <Ul className="text-sm mt-4">
              <li>
                Umiestňuje sa na spodok stránky bezprostredne pred pätičku,
                keď už používateľ prečítal obsah.
              </li>
              <li>
                Odpovede „Áno“ a „Nie“ musia mať rovnocennú vizuálnu váhu, aby
                nevznikal manipulatívny vzor.
              </li>
              <li>
                Po odoslaní odpovede musí používateľ dostať potvrdenie, že
                spätná väzba bola prijatá.
              </li>
              <li>
                Formulár na nahlásenie chyby má byť stručný a zameraný na
                konkrétny problém na stránke.
              </li>
            </Ul>
          </InformationBanner>
        </div>

        <div className="flex flex-col items-start flex-1 min-w-[280px]">
          <InformationBanner
            title="Ako sa nepoužíva"
            ariaLabel="Nesprávne použitie lišty spätnej väzby"
            type="banner"
            variant="warning"
            hideCloseButton={true}
          >
            <Ul className="text-sm mt-4">
              <li>
                Nepoužívajte ju na zhromažďovanie komplexných analytických dát
                alebo dlhých prieskumov spokojnosti.
              </li>
              <li>
                Nevkladajte ju do každej podstránky viacstupňového formulára
                alebo transakčného procesu.
              </li>
              <li>
                Tlačidlo „Nahlásiť chybu“ nemá viesť na všeobecnú kontaktnú
                stránku bez kontextu.
              </li>
              <li>
                Nepoužívajte vizuálne zvýhodnenie jednej odpovede pred druhou.
              </li>
            </Ul>
          </InformationBanner>
        </div>
      </div>
    </SectionBlock>
  </div>
);

export default TabPouzitie;