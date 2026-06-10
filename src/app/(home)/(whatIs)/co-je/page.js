import React from "react";
import { whatIsData } from "@/constants/data"; 
import ArticleCard from '@/app/(home)/_components/article/articleCard';

export const metadata = {
  title: 'Čo je IDSK? | IDSK',
  description: 'Stránka slúžiaca ako navigácia k základným princípom IDSK.',
};

const WhatIsPage = () => {
  return (
    <div className="flex flex-col my-8 max-w-[1120px] px-4 sm:px-0">
      <header>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px]">
          Čo je IDSK
        </h1>
      </header>
      
      <div className="mt-8 w-full text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black">
        Jednotný dizajn manuál elektronických služieb a webových sídiel Slovenska (IDSK) je dizajnový systém elektronických služieb a webových sídiel štátu. 
      </div>
      
      <section className="mt-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          {whatIsData.map((card, index) => (
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
};

export default WhatIsPage;