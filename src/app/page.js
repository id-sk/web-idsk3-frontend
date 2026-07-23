'use client';

import Image from 'next/image'; 
import Link from "next/link";
import { homePageData } from "@/constants/data";
import { Signpost } from '@/app/(home)/_components/signpost/signpostCustom';
import ButtonCustom from '@/app/(home)/_components/button/buttonCustom';
import { SectionBlock, Text } from '@/app/(home)/_components/content-blocks/ContentBlocks';

const ArrowRightIcon = ({ className = '' }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

export default function HomePage() {
  return (
    <>
      {/* Úvodná predstavenie dizajnového systému */}
      <main>
        <section className="w-full bg-white pt-16 pb-10">
          <div className="page-container flex max-md:flex-col gap-5">
            
            <div className="flex flex-col w-[67%] max-md:w-full">
              <h1 className="text-3xl md:text-4xl font-black text-black leading-snug md:leading-[55px] max-md:max-w-full">
                Dizajnový systém elektronických služieb <br /> a webových sídel 
              </h1>
              
              <Text className="mt-7 max-md:max-w-full">
                Webové sídlo IDSK obsahuje verziu dizajnového systému IDSK 3. <strong>Aktuálna a platná verzia dizajnového systému IDSK 3.1.0 </strong> je dostupná výhradne vo Figma komunitnej knižnici.
              </Text>
              
              <div className="mt-10 self-start">
                <Link 
                  href="https://www.figma.com/community/file/1581301778555425083/idsk-3-1-0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  tabIndex={-1} /* Zabráni dvojitému tabovaniu na link aj button */
                >
                  <ButtonCustom
                    variant="primary"
                    status="basic"
                    size="large"
                    aria-label="Figma IDSK 3.1.0 (otvorí sa v novom okne)"
                    iconRight={
                      <svg 
                        className="w-5 h-5 shrink-0" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                        />
                      </svg>
                    }
                  >
                    Figma IDSK 3.1.0
                  </ButtonCustom>
                </Link>
              </div>
            </div>

            {/* Pravá ilustračná sekcia */}
            <div className="w-[33%] max-md:w-full mt-7 flex items-center justify-center">
              <Image
                src="/images/home-page/undraw.svg"
                className="w-full h-auto object-contain"
                width={300}
                height={240}
                alt=""
                priority
              />
            </div>

          </div>
        </section>


        <section className="w-full bg-[#EFF5FE] pt-16 pb-10">
          <div className="page-container flex max-md:flex-col gap-5">

            {/* Pravá ilustračná sekcia */}
            <div className="w-[33%] max-md:w-full mt-2 flex items-center justify-center">
              <Image
                src="/images/home-page/ilustration_home_page.png"
                className="w-full h-auto object-contain"
                width={300}
                height={240}
                alt=""
                priority
              />
            </div>

            <div className="flex flex-col w-[67%] max-md:w-full">
              <h2 className="text-3xl md:text-4xl font-black text-black leading-snug md:leading-[55px] max-md:max-w-full">
                Potrebujete nový komponent alebo zmeniť <br /> existujúci?
              </h2>
              
              <Text className="mt-7 max-md:max-w-full">
                Pošlite nám svoj zámer. Posúdime ho a pomôžeme vám nájsť vhodné riešenie v súlade s IDSK.
              </Text>
              
              <div className="mt-10 self-start">
                <Link 
                  href="/navrhnut-komponent" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  tabIndex={-1}
                >
                  <ButtonCustom
                    variant="secondary"
                    status="basic"
                    size="large"
                    aria-label="Poslať zámer (otvorí sa v novom okne)"
                    iconRight={
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    }
                  >
                    Poslať zámer
                  </ButtonCustom>
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* Spodná sekcia - Hlavný rozcestník s využitím SectionBlock */}
        <div className="page-container pb-12">
          <section
              aria-labelledby="zacnite-s-idsk"
              className="pb-12 pt-16"
            >
              <h2
                id="zacnite-s-idsk"
                className="text-3xl md:text-4xl font-black text-black leading-snug md:leading-[55px] max-md:max-w-full self-center"
              >
                Začnite s IDSK
              </h2>

              <div className="mt-8 grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
                {homePageData.map((card, index) => (
                  <Signpost
                    key={`home-signpost-${index}`}
                    href={card.href}
                    heading={card.title}
                    headingLevel="h3"
                    arrowIcon={<ArrowRightIcon />}
                  >
                    {card.description}
                  </Signpost>
                ))}
              </div>
            </section>
        </div>
      </main>
    </>
  );
}