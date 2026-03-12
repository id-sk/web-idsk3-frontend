'use client'

import { componentsData } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import React from 'react';

function ImageCard({ href, src, title, description, alt }) {
  return (
    <Link href={href ?? "#"} className="flex w-full h-full">
      <div className="flex flex-col grow p-5 hover:shadow-lg tracking-wide bg-white rounded-xl border border-solid border-neutral-200">
        <Image
          width={100}
          height={100}
          quality={100}
          src={src}
          alt={alt || title}
          className="w-full aspect-[1.5] object-cover"
        />
        {/* ZMENŠENÝ NADPIS KARTIČKY z text-2xl */}
        <h3 className="mt-5 text-xl md:text-lg lg:text-xl font-bold tracking-wide leading-8 text-my-blue underline">
          {title}
        </h3>
        {/* ZMENŠENÝ POPIS KARTIČKY na text-base namiesto text-custom-19 */}
        <p className="mt-2.5 text-base tracking-wide leading-7 text-black line-clamp-3">
          {description}
        </p>
      </div>
    </Link>
  );
}

const IdskPage = () => {
  return (
    // Tento div drží tvoj text a grid pokope.
    <div className="flex flex-col my-8 max-w-[850px]">
      <title>Zoznam komponentov</title>
      
      <header>
        {/* ZMENŠENÝ HLAVNÝ NADPIS z text-5xl */}
        <h1 className="text-3xl md:text-4xl font-black text-black leading-snug md:leading-[55px]">
          Zoznam Komponentov
        </h1>
      </header>
      
      {/* ZMENŠENÝ INTRO TEXT na text-base pre mobil a text-lg pre desktop (predtým text-2xl) */}
      <p className="mt-8 text-base md:text-lg tracking-wide leading-7 md:leading-8 text-black">
        Základné stavebné bloky používateľského rozhrania. Prvky, ktorých opakované použitie má za cieľ vytvorenie jednotného vzhľadu a funkčnosti stránok a webových sídiel.
      </p>
      
      {/* Sekcia s Gridom zostáva perfektná */}
      <section className="mt-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {componentsData.map((card, index) => (
            <ImageCard 
              key={index} 
              href={card.href} 
              src={card.src} 
              title={card.title} 
              description={card.description} 
              alt={card.alt} 
            />
          ))}
        </div>
      </section>

      <div className='mt-6'></div>
    </div>
  );
}

export default IdskPage;