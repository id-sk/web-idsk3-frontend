'use client';

import React from 'react';
import { FooterContainer } from '@eslovensko/idsk-react';

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
    <SectionBlock titleString="Použitie päty">
      <div className={exampleWrapperClass}>
        <div className="w-full max-w-[700px] px-4">
          <FooterContainer
            linksList={[
              <a
                key="cookies"
                href="https://idsk.gov.sk/co-je/cookies-policy"
                className="hover:underline"
              >
                Informácie o spracúvaní súborov cookies
              </a>,
              <a
                key="contact"
                href="mailto:idsk@mirri.gov.sk"
                className="hover:underline"
              >
                Kontakt na prevádzkovateľa
              </a>,
              <a
                key="idsk2"
                href="https://idsk2.gov.sk/"
                className="hover:underline"
              >
                IDSK2
              </a>,
            ]}
            bottomSection={
              <div className="mt-6 text-md text-black">
                <p>
                  Prevádzkovateľom služby je Ministerstvo investícií,
                  regionálneho rozvoja a informatizácie SR.
                </p>

                <p className="mt-4">
                  Vytvorené v súlade s{' '}
                  <a
                    href="https://idsk.gov.sk"
                    className="underline hover:text-blue-600"
                  >
                    Jednotným dizajnovým manuálom IDSK
                  </a>
                  .
                </p>
              </div>
            }
            logo={
              <a
                href="https://mirri.gov.sk"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block"
              >
                <img
                  src="/images/group.svg"
                  alt="Ministerstvo investícií, regionálneho rozvoja a informatizácie Slovenskej republiky"
                  width="290"
                  height="66"
                />
              </a>
            }
          >
            <div className="mb-6 text-md text-black">
              <p>
                Na tomto webovom sídle sa využívajú len nevyhnutné/technické
                cookies.
              </p>
            </div>
          </FooterContainer>
        </div>
      </div>

      <Text className="mb-8">
        Päta sa primárne využíva pre webové sídla a býva vždy umiestnená na
        konci stránky. Rolu sa spoločne s obsahom. Komponent obsahuje textové
        informácie o prevádzkovateľovi webovej stránky a textové odkazy na
        vyhlásenie o prístupnosti, priamy kontakt na prevádzkovateľa webového
        sídla, odkaz na RSS kanál alebo mapu webového sídla.
      </Text>

      <Text className="mb-8">
        Štruktúru navigácie v päte tvorte podľa platných pravidiel IDSK pre
        rozloženie obsahu. Používajte rozloženie stránky na celú šírku, na
        polovice, tretiny alebo štvrtiny. Nepoužívajte iné formy rozloženia.
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
              <li>
                keď potrebujete štandardizovanú a jednotnú uzatváraciu sekciu
                naprieč všetkými stránkami webového sídla,
              </li>
              <li>
                keď chcete používateľovi poskytnúť doplnkové a kontextové
                informácie, nie primárnu navigáciu,
              </li>
              <li>
                keď potrebujete umiestniť povinné odkazy, napríklad vyhlásenie
                o prístupnosti, kontakt, RSS alebo mapu webu,
              </li>
              <li>
                keď sekundárna navigácia logicky dopĺňa hlavnú navigáciu,
              </li>
              <li>
                keď počet odkazov v jednom stĺpci zostáva primeraný, ideálne 2
                až 6 odkazov.
              </li>
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
              <li>
                neumiestňujte do nej kľúčové úlohy alebo primárne používateľské
                cesty,
              </li>
              <li>
                nepoužívajte ju, ak je obsah v päte neprehľadne dlhý alebo
                zahlcujúci,
              </li>
              <li>nepoužívajte viacero pätičiek na jednej stránke,</li>
              <li>
                pätu neumiestňujte mimo koniec stránky, napríklad medzi sekcie
                obsahu,
              </li>
              <li>
                nepoužívajte sekundárnu navigáciu s veľkým množstvom skupín,
              </li>
              <li>nepoužívajte stĺpce bez nadpisov.</li>
            </Ul>
          </InformationBanner>
        </div>
      </div>
    </SectionBlock>
  </div>
);

export default TabPouzitie;