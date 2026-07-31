import { componentsData } from "@/constants/data";
import { Signpost } from '@/app/(home)/_components/signpost/signpostCustom';
import React from 'react';

export const metadata = {
  title: 'Komponenty | IDSK',
  description: 'Stránka slúžiaca ako navigácia ku komponentom IDSK.',
};

const ArrowRightIcon = ({ className = '' }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

const IdskPage = () => {
  return (
    <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0">
      <header>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px]">
          Zoznam Komponentov
        </h1>
      </header>
      
      <p className="mt-8 text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black">
        Základné stavebné bloky používateľského rozhrania. Prvky, ktorých opakované použitie má za cieľ vytvorenie jednotného vzhľadu a funkčnosti stránok a webových sídiel.
      </p>
      
      <section className="mt-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-7">
          {componentsData.map((card, index) => (
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

      <div className='mt-6'></div>
    </div>
  );
}

export default IdskPage;