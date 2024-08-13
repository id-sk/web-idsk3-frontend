'use client'

import LinkSection from "@/app/(home)/_components/typography/LinkSection";
import SizeInfo from "@/app/(home)/_components/typography/ScreenSizeInfo";
import TypographySection from "@/app/(home)/_components/typography/TypographySection";
import { headlineData, subtitleData, bodyData, captionData, linkData } from "@/constants/data";


const TypographyPage = () => {
    return (
        <main id="main-content" role="main" className="flex flex-col pb-8 my-8 max-w-[1000px]">
           <title>Typografia</title>
           <header>
          <h1 className="w-full text-5xl font-black text-black leading-[55.2px] max-md:max-w-full max-md:text-4xl">
            Typografia
          </h1>
          </header>
          <p className="mt-5 w-full text-2xl tracking-normal leading-9 text-black max-md:max-w-full">
            Typografia je súbor rôznych typov písma, ktoré sú odlišné v štýle, veľkosti, šírke riadkovania a vzdialenosti medzi písmenami. Pri definovaní typografie bola definovaná škálovateľnosť v podobe preddefinovaných štylov, ktorých úlohov je správne zobrazenie na rozličných zariadeniach. Ďalším dôvodom potreby škálovania je zabezpečenie správnej čitateľnosti a estetickej prijemnosti v rôznych častiach rozhrania.
          </p>
          <h2 className="text-4xl leading-custom-45 font-black text-neutral-500 mt-12">Typ písma</h2>
          <section className="flex flex-wrap gap-10 justify-between items-start pr-16 mt-5 w-full max-md:pr-5 max-md:max-w-full">
            <div className="flex flex-col min-w-[240px]">
              <h2 className="text-5xl font-black text-black leading-[48.3px]">Source sans pro</h2>
              <p className="text-custom-19 tracking-wide leading-7 text-neutral-500">Font family</p>
            </div>
            <div className="flex flex-1 gap-5 whitespace-nowrap min-w-[240px]">
              <div className="flex flex-col">
                <span className="text-5xl font-black text-black leading-[48.3px]">Aa</span>
                <p className="text-custom-19tracking-wide leading-7 text-neutral-500">Black</p>
              </div>
              <div className="flex flex-col">
                <span className="text-5xl font-bold text-black leading-[48.3px]">Aa</span>
                <p className="text-custom-19 tracking-wide leading-7 text-neutral-500">Bold</p>
              </div>
              <div className="flex flex-col">
                <span className="text-5xl text-black leading-[48.3px]">Aa</span>
                <p className="text-custom-19 tracking-wide leading-7 text-neutral-500">Regular</p>
              </div>
            </div>
          </section>
          <SizeInfo />
          <TypographySection title="Nadpisy" items={headlineData} />
          <TypographySection title="Podnadpisy" items={subtitleData} />
          <TypographySection title="Hlavný text" items={bodyData} />
          <TypographySection className="items-end" title="Popis a tlačidlo" items={captionData} />
          <LinkSection title="Hypertextové odkazy" items={linkData} />
        </main>
      );
    };

 
export default TypographyPage;