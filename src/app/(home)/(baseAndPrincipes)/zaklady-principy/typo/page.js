'use client'

import LinkSection from "@/app/(home)/_components/typography/LinkSection";
import TypographySection from "@/app/(home)/_components/typography/TypographySection";
import { headlineData, subtitleData, bodyData, captionData, linkData } from "@/constants/data";


const Typo = () => {
    
    return (
        <main className="flex flex-col pb-8 my-8">
           <title>Typografia</title>
          <h1 className="w-full text-5xl font-black text-black leading-[55.2px] max-md:max-w-full max-md:text-4xl">
            Typografia
          </h1>
          <p className="mt-5 w-full text-2xl tracking-normal leading-9 text-black max-md:max-w-full">
            Typografia je súbor rôznych typov písma, ktoré sú odlišné v štýle, veľkosti, šírke riadkovania a vzdialenosti medzi písmenami. Pri definovaní typografie bola definovaná škálovateľnosť v podobe preddefinovaných štylov, ktorých úlohov je správne zobrazenie na rozličných zariadeniach. Ďalším dôvodom potreby škálovania je zabezpečenie správnej čitateľnosti a estetickej prijemnosti v rôznych častiach rozhrania.
          </p>
          <section className="flex gap-5 justify-between mt-20 max-w-full w-[741px] max-md:flex-wrap max-md:mt-10">
            <div className="flex flex-col">
              <h2 className="text-5xl font-black text-black leading-[48.3px]">Source sans pro</h2>
              <p className="text-xl tracking-wide leading-7 text-neutral-500">Font family</p>
            </div>
            <div className="flex gap-5 justify-between px-5 whitespace-nowrap">
              <div className="flex flex-col">
                <span className="text-5xl font-black text-black leading-[48.3px]">Aa</span>
                <p className="text-xl tracking-wide leading-7 text-neutral-500">Black</p>
              </div>
              <div className="flex flex-col">
                <span className="text-5xl font-bold text-black leading-[48.3px]">Aa</span>
                <p className="text-xl tracking-wide leading-7 text-neutral-500">Bold</p>
              </div>
              <div className="flex flex-col">
                <span className="text-5xl text-black leading-[48.3px]">Aa</span>
                <p className="text-xl tracking-wide leading-7 text-neutral-500">Regular</p>
              </div>
            </div>
          </section>
          <TypographySection title="Nadpisy" items={headlineData} />
          <TypographySection title="Podnadpisy" items={subtitleData} />
          <TypographySection title="Hlavný text" items={bodyData} />
          <TypographySection title="Popis a tlačidlo" items={captionData} />
          <LinkSection title="Hypertextové odkazy" items={linkData} />
        </main>
      );
    };

 
export default Typo;