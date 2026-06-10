import React from "react";
import { baseData } from "@/constants/data";
import ArticleCard from '@/app/(home)/_components/article/articleCard';

export const metadata = {
  title: 'Základy a princípy | IDSK',
  description: 'Stránka slúžiaca ako navigácia k základným princípom IDSK.',
};

const BasePage = () => {
  return (
    <div className="flex flex-col my-8 max-w-[1120px] px-4 sm:px-0">
      
      <header>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px]">
          Základy a princípy
        </h1>
      </header>
      
      <div className="mt-8 w-full text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black">
        Základné prvky vizuálnej identity pre vytvorenie konzistentného a účinného dizajnu elektronických služieb a webových sídiel.
      </div>
      
      <section className="mt-10 w-full" aria-label="Zoznam princípov">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          {baseData.map((card, index) => (
            <ArticleCard 
              key={`principle-${index}`}
              href={card.href}
              src={card.src}
              title={card.title}
              description={card.description}
              alt={card.alt || ""}
              orientation="vertical"
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default BasePage;