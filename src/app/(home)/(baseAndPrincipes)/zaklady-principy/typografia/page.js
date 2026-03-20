'use client'

import LinkSection from "@/app/(home)/_components/typography/LinkSection";
import SizeInfo from "@/app/(home)/_components/typography/ScreenSizeInfo";
import TypographySection from "@/app/(home)/_components/typography/TypographySection";
import { headlineData, subtitleData, bodyData, captionData, linkData } from "@/constants/data";

const TypographyPage = () => {
    return (
        <main id="main-content" role="main" className="flex flex-col my-8 pb-8 max-w-[1000px] px-4 sm:px-0 text-black">
            <title>Typografia</title>
            
            <header>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
                    Typografia
                </h1>
            </header>

            <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-12">
                Typografia je súbor rôznych typov písma, ktoré sú odlišné v štýle, veľkosti, šírke riadkovania a vzdialenosti medzi písmenami. Pri definovaní typografie bola definovaná škálovateľnosť v podobe preddefinovaných štýlov, ktorých úlohou je správne zobrazenie na rozličných zariadeniach. Ďalším dôvodom potreby škálovania je zabezpečenie správnej čitateľnosti a estetickej príjemnosti v rôznych častiach rozhrania.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-black mt-4 mb-8">
                Typ písma
            </h2>
            
            <section className="flex flex-col md:flex-row gap-8 md:gap-20 items-start w-full mb-16">
                {/* Názov fontu */}
                <div className="flex flex-col min-w-[240px]">
                    <span className="text-3xl sm:text-4xl md:text-5xl font-black text-black leading-tight mb-2">Source Sans Pro</span>
                    <p className="text-sm sm:text-base tracking-wide text-neutral-500">Font family</p>
                </div>

                <div className="flex flex-wrap gap-8 sm:gap-12">
                    <div className="flex flex-col items-start">
                        <span className="text-4xl sm:text-5xl font-black text-black leading-tight mb-2">Aa</span>
                        <p className="text-sm sm:text-base tracking-wide text-neutral-500">Black</p>
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="text-4xl sm:text-5xl font-bold text-black leading-tight mb-2">Aa</span>
                        <p className="text-sm sm:text-base tracking-wide text-neutral-500">Bold</p>
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="text-4xl sm:text-5xl font-normal text-black leading-tight mb-2">Aa</span>
                        <p className="text-sm sm:text-base tracking-wide text-neutral-500">Regular</p>
                    </div>
                </div>
            </section>

            {/* Komponenty s ukážkami gigantickej typografie :) */}
            {/* <SizeInfo /> */}
            <TypographySection title="Nadpisy" items={headlineData} />
            <TypographySection title="Podnadpisy" items={subtitleData} />
            <TypographySection title="Hlavný text" items={bodyData} />
            <TypographySection title="Popis a tlačidlo" items={captionData} />
            <LinkSection title="Hypertextové odkazy" items={linkData} />
        </main>
    );
};

export default TypographyPage;