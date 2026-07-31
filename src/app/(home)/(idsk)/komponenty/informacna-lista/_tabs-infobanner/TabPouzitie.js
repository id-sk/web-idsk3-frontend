'use client';

import React from 'react';

import InformationBanner from '@/app/(home)/_components/information-banner/informationBannerCustom';

import {
  SectionBlock,
  Text,
  Ul,
} from '@/app/(home)/_components/content-blocks/ContentBlocks';

const exampleWrapperClass =
  'flex flex-col items-center gap-6 py-10 border-2 border-dashed border-[#757575] rounded-[10px] mb-8 mt-4';

const TabPouzitie = () => (
  <div className="animate-fade-in text-black w-full min-w-0">
    <SectionBlock titleString="Použitie informačnej lišty">
      <div className={exampleWrapperClass}>
        <div className="w-full max-w-[600px] px-4">
          <InformationBanner
            title="Príklad komponentu informačná lišta"
            ariaLabel="Príklad komponentu informačná lišta"
            type="banner"
            variant="information"
            hideCloseButton={true}
          >
            Informačná lišta upozorňuje používateľa na dôležitú informáciu,
            ktorú by si mal všimnúť.
          </InformationBanner>
        </div>
      </div>

      <Text className="mb-8">
        Informačná lišta sa používa v situáciách, keď je potrebné informovať
        používateľa o stave alebo zmene, upozorniť na riziko alebo problém,
        potvrdiť úspešnú akciu, alebo vyzvať používateľa na jednoduchú následnú
        akciu.
      </Text>

      <Text className="mb-8">
        Text v informačnej lište má byť stručný, zrozumiteľný a konkrétny.
        Nepoužívajte ju ako náhradu za bežný obsah stránky alebo za chybové
        hlásenia priamo pri vstupných poliach.
      </Text>

      <div className="flex flex-wrap gap-8 sm:gap-12 mt-10">
        <div className="flex flex-col items-start flex-1 min-w-[280px]">
          <InformationBanner
            title="Ako sa používa"
            ariaLabel="Správne použitie informačnej lišty"
            type="banner"
            variant="basic"
            hideCloseButton={true}
          >
            <Ul className="text-sm mt-4">
              <li>Používa sa na dôležité globálne oznamy, napríklad odstávku systému.</li>
              <li>Používa sa na potvrdenie úspešnej operácie, napríklad odoslanie formulára.</li>
              <li>Používa sa na upozornenie používateľa na riziko alebo zmenu.</li>
              <li>Používa sa na krátku a jasnú správu, ktorá si vyžaduje pozornosť.</li>
            </Ul>
          </InformationBanner>
        </div>

        <div className="flex flex-col items-start flex-1 min-w-[280px]">
          <InformationBanner
            title="Ako sa nepoužíva"
            ariaLabel="Nesprávne použitie informačnej lišty"
            type="banner"
            variant="warning"
            hideCloseButton={true}
          >
            <Ul className="text-sm mt-4">
              <li>Nepoužíva sa na zobrazenie bežného textu alebo článku.</li>
              <li>Nepoužíva sa ako náhrada za chybové hlásenia pod inputmi formulára.</li>
              <li>Nepoužíva sa ak správa obsahuje príliš veľa textu.</li>
              <li>Ako jediný spôsob rozlíšenia významu iba farbou.</li>
            </Ul>
          </InformationBanner>
        </div>
      </div>
    </SectionBlock>
  </div>
);

export default TabPouzitie;