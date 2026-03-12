'use client'

import { whatIsData } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";

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
        {/* ZMENŠENÝ NADPIS KARTIČKY */}
        <h3 className="mt-5 text-xl md:text-lg lg:text-xl font-bold tracking-wide leading-8 text-my-blue underline">
          {title}
        </h3>
        {/* ZMENŠENÝ POPIS KARTIČKY na štandardný text-base */}
        <p className="mt-2.5 text-base tracking-wide leading-7 text-black line-clamp-3">
          {description}
        </p>
      </div>
    </Link>
  );
}

const WhatIsPage = () => {
  return (
    <div className="flex flex-col my-8 max-w-[1000px]">
      <title>Čo je IDSK</title>
      
      <header>
        {/* ZMENŠENÝ HLAVNÝ NADPIS */}
        <h1 className="text-3xl md:text-4xl font-black text-black leading-snug md:leading-[55px]">
          Čo je IDSK
        </h1>
      </header>
      
      {/* ZMENŠENÝ INTRO TEXT na text-base pre mobil a text-lg pre desktop */}
      <div className="mt-8 w-full text-base md:text-lg tracking-wide leading-7 md:leading-8 text-black">
        Jednotný dizajn manuál elektronických služieb a webových sídiel Slovenska (IDSK) je dizajnový systém elektronických služieb a webových sídiel štátu. IDSK má za cieľ zjednotiť používateľské rozhrania a spôsob komunikácie s používateľom pri poskytovaní služieb. Je to manuál na tvorbu kvalitných elektronických služieb a webových sídiel na Slovensku.
      </div>
      
      <section className="mt-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {whatIsData.map((card, index) => (
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

    </div>
  );
}

export default WhatIsPage;