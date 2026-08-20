'use client';

import React from 'react';

import FileUploadCustom from '@/app/(home)/_components/inputs/file-upload/FileUploadCustom';
import InformationBanner from '@/app/(home)/_components/information-banner/informationBannerCustom';

import {
  SectionBlock,
  Text,
  Ul,
  ExampleBlock,
} from '@/app/(home)/_components/content-blocks/ContentBlocks';

const TabPouzitie = () => (
  <div className="animate-fade-in text-black w-full min-w-0">
    <SectionBlock titleString="Použitie poľa na nahratie súboru">
      <ExampleBlock className="mt-4" innerClassName="max-w-[600px]">
        <FileUploadCustom
          id="file-upload-cv"
          title="Nahrajte životopis"
          hint="Spresnite požiadavku na nahrávaný súbor."
          subtitle="Nahrajte súbor alebo ho sem presuňte."
          formatsText={<>Podporované formáty: <span className="font-bold">JPG, PNG, DOC, DOCX, PDF</span></>}
          maxSizeText={<>Maximálna veľkosť súboru: <span className="font-bold">15 MB</span></>}
          buttonText="Vyberte súbory"
          required
        />
      </ExampleBlock>

      <Text className="mb-8">
        Pole na nahratie súboru použite vtedy, keď používateľ potrebuje dodať
        dokument, obrázok alebo inú prílohu, ktorú nie je praktické nahradiť
        textovým vstupom. Komponent má vždy jasne pomenovať, aký súbor má
        používateľ nahrať.
      </Text>

      <Text className="mb-8">
        Pri nahrávaní uveďte podporované formáty, maximálnu veľkosť súboru a
        zobrazte stav nahrávania. Používateľ má vedieť, či sa súbor nahráva,
        či bol nahratý úspešne alebo či nastala chyba.
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
              <li>ak používateľ potrebuje dodať dokument, obrázok alebo prílohu,</li>
              <li>ak súbor nie je možné nahradiť textovým vstupom,</li>
              <li>s jasným názvom poľa, napríklad „Nahrajte životopis“,</li>
              <li>s informáciou o podporovaných formátoch,</li>
              <li>s informáciou o maximálnej veľkosti súboru,</li>
              <li>so spätnou väzbou o nahrávaní, úspechu alebo chybe.</li>
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
              <li>ak súbor nie je pre dokončenie úlohy nevyhnutný,</li>
              <li>bez informácie o povolených formátoch,</li>
              <li>bez informácie o maximálnej veľkosti súboru,</li>
              <li>iba ako drag and drop bez možnosti vybrať súbor tlačidlom,</li>
              <li>bez stavovej spätnej väzby po výbere súboru,</li>
              <li>s ikonovými tlačidlami bez prístupného názvu.</li>
            </Ul>
          </InformationBanner>
        </div>
      </div>
    </SectionBlock>
  </div>
);

export default TabPouzitie;