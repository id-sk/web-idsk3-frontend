'use client';

import React from 'react';
import { FooterContainer } from '@eslovensko/idsk-react';

import {
  SectionBlock,
  H3,
  Text,
} from '@/app/(home)/_components/content-blocks/ContentBlocks';

const exampleWrapperClass =
  'flex flex-col items-center gap-6 py-10 border-2 border-dashed border-[#9e9e9e] rounded-[10px] mb-8 mt-4';

const TabVarianty = () => (
  <div className="animate-fade-in text-black w-full min-w-0">
    <SectionBlock titleString="Varianty a stavy">
      <H3>1. Základný variant päty</H3>

      <Text className="mb-4">
        Základný variant obsahuje textové informácie, povinné odkazy a logo
        prevádzkovateľa alebo inštitúcie.
      </Text>

      <div className={exampleWrapperClass}>
        <div className="w-full max-w-[700px] px-4">
          <FooterContainer
            linksList={[
              <a
                key="accessibility"
                href="#"
                className="hover:underline"
              >
                Vyhlásenie o prístupnosti
              </a>,
              <a key="contact" href="#" className="hover:underline">
                Kontakt na prevádzkovateľa
              </a>,
              <a key="map" href="#" className="hover:underline">
                Mapa stránky
              </a>,
            ]}
            bottomSection={
              <div className="mt-4 text-base text-black">
                <p>
                  Prevádzkovateľom služby je Ministerstvo investícií,
                  regionálneho rozvoja a informatizácie Slovenskej republiky.
                </p>
              </div>
            }
            logo={
              <a
                href="https://mirri.gov.sk"
                target="_blank"
                rel="noopener noreferrer"
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

      <H3>2. Variant s navigáciou</H3>

      <Text className="mb-4">
        Tento variant obsahuje sekundárnu navigáciu v päte. Použite ho vtedy,
        keď odkazové skupiny logicky dopĺňajú hlavnú navigáciu webového sídla.
      </Text>

      <div className={exampleWrapperClass}>
        <div className="w-full max-w-[700px] px-4">
          <FooterContainer
            linksList={[
              <a
                key="idsk2"
                href="https://idsk2.gov.sk/"
                className="hover:underline"
              >
                IDSK 2
              </a>,
              <a key="privacy" href="#" className="hover:underline">
                Ochrana osobných údajov
              </a>,
            ]}
            bottomSection={
              <div className="mt-4 text-base text-black">
                <p>
                  Prevádzkovateľom služby je Ministerstvo investícií,
                  regionálneho rozvoja a informatizácie Slovenskej republiky.
                </p>
              </div>
            }
            logo={
              <a
                href="https://mirri.gov.sk"
                target="_blank"
                rel="noopener noreferrer"
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
            <nav
              aria-label="Navigácia v päte"
              className="flex flex-col md:flex-row gap-10 md:gap-24 mb-6 border-b border-gray-300 pb-7"
            >
              <div>
                <h2 className="font-bold text-lg mb-4">Užitočné odkazy</h2>
                <ul className="space-y-3 list-none p-0 m-0">
                  <li>
                    <a href="#" className="hover:underline">
                      Elektronické služby
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Životné situácie
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Časté otázky (FAQ)
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-bold text-lg mb-4">O nás</h2>
                <ul className="space-y-3 list-none p-0 m-0">
                  <li>
                    <a href="#" className="hover:underline">
                      Projekty
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Kariéra
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Kontakty
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </FooterContainer>
        </div>
      </div>
    </SectionBlock>
  </div>
);

export default TabVarianty;