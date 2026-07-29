'use client';

import React from 'react';

import Navbar from '@/app/(home)/_components/navbar/navbar';
import InformationBanner from '@/app/(home)/_components/information-banner/informationBannerCustom';

import {
  SectionBlock,
  Text,
  Ul,
  H3,
} from '@/app/(home)/_components/content-blocks/ContentBlocks';

const exampleWrapperClass =
  'flex justify-center border-2 border-dashed border-[#757575] rounded-[10px] mb-8 transition-all duration-300';

const TabPouzitie = () => {
  const mockSidebarData = [];

  return (
    <div className="animate-fade-in text-black w-full min-w-0">
      <SectionBlock titleString="Použitie hlavičky">
        <div className={exampleWrapperClass}>
          <div className="w-full max-w-[800px] py-7 my-6 px-4 relative min-h-[250px] h-auto">
            <Navbar sidebarData={mockSidebarData} />
          </div>
        </div>

        <Text className="mb-8">
          Hlavička pomáha používateľovi navigovať sa k obsahu webovej aplikácie.
          Obsahuje hlavnú sekciu, záhlavie, navigáciu a rozbaľovacie menu podľa
          potreby. Hlavička je statická. Pri posúvaní sa obsah webovej aplikácie
          roluje pod ňou.
        </Text>

        <H3>Záhlavie</H3>

        <Ul className="mb-8">
          <li>
            Obsahuje informáciu, že ide o oficiálne webové sídlo verejnej
            správy, spolu s odkazom na hlavné webové sídlo správcu alebo
            ústredný portál verejnej správy.
          </li>
          <li>
            Obsahuje výber jazyka.
          </li>
        </Ul>

        <H3>Hlavná sekcia</H3>

        <Text className="mb-4">
          Hlavná sekcia je povinná časť každej hlavičky. Obsahuje logo,
          navigáciu a akčný panel.
        </Text>

        <Ul className="mb-8">
          <li>
            Logo je umiestnené vľavo a riadi sa pravidlami pre doménové mená.
          </li>
          <li>
            Navigácia je umiestnená v strede a obsahuje hlavné časti aplikácie.
          </li>
          <li>
            Akčný panel je umiestnený vpravo a obsahuje profil, notifikácie
            alebo doplnkové nadradené akcie.
          </li>
        </Ul>

        <div className="flex flex-wrap gap-8 sm:gap-12 mt-10">
          <div className="flex flex-col items-start flex-1 min-w-[280px]">
            <InformationBanner
              title="Ako sa používa"
              ariaLabel="Správne použitie hlavičky"
              type="banner"
              variant="basic"
              hideCloseButton={true}
            >
              <Ul className="text-sm mt-4">
                <li>
                  Hlavička patrí na úplný začiatok každej podstránky.
                </li>
                <li>
                  Úplne hore patrí informácia o oficiálnom webe verejnej správy
                  a výber jazyka.
                </li>
                <li>
                  Vľavo v hlavnej sekcii umiestnite logo, do stredu navigáciu a
                  vpravo akčný panel.
                </li>
                <li>
                  V prvej úrovni navigácie použite najviac 5 položiek.
                </li>
              </Ul>
            </InformationBanner>
          </div>

          <div className="flex flex-col items-start flex-1 min-w-[280px]">
            <InformationBanner
              title="Ako sa nepoužíva"
              ariaLabel="Nesprávne použitie hlavičky"
              type="banner"
              variant="warning"
              hideCloseButton={true}
            >
              <Ul className="text-sm mt-4">
                <li>
                  Neumiestňujte do kódu viacero hlavných hlavičiek na jednej
                  stránke.
                </li>
                <li>
                  Nepresúvajte logo doprava alebo akčný panel doľava.
                </li>
                <li>
                  Nenapĺňajte navigáciu dlhým zoznamom nerelevantných odkazov.
                </li>
                <li>
                  Ak robíte jednoduchú elektronickú službu, rozbaľovaciu
                  navigáciu úplne vynechajte.
                </li>
              </Ul>
            </InformationBanner>
          </div>
        </div>
      </SectionBlock>
    </div>
  );
};

export default TabPouzitie;