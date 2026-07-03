import { componentsData } from "@/constants/data";
import ArticleCard from '@/app/(home)/_components/article/articleCard';
import React from 'react';

export const metadata = {
  title: 'Komponenty | IDSK',
  description: 'Stránka slúžiaca ako navigácia ku komponentom IDSK.',
};

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {componentsData.map((card, index) => (
            <ArticleCard 
              key={`principle-${index}`}
              href={card.href}
              src={card.src}
              title={card.title}
              description={card.description}
              alt={card.alt || ""}
              orientation="vertical"
              imageClassName="!bg-white p-4"
            />
          ))}
        </div>
      </section>

      <div className='mt-6'></div>
    </div>
  );
}

export default IdskPage;