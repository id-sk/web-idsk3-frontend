'use client'

import { whatIsData } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";

function ImageCard({ href, src, title, description, alt }) {
  return (
    // Pridané 'flex w-full h-full' pre zjednotenie výšky kartičiek
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
        <h3 className="mt-5 text-2xl font-bold tracking-wide leading-9 text-my-blue underline">
          {title}
        </h3>
        <p className="mt-2.5 text-custom-19 tracking-wide leading-7 text-black line-clamp-2">
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
        <h1 className="text-5xl font-black text-black leading-[55px] max-md:text-4xl">
          Čo je IDSK
        </h1>
      </header>
      
      {/* Odstránený duplicitný <main id="main-content"> */}
      <div className="mt-8 text-2xl leading-9 tracking-wide text-black">
        Jednotný dizajn manuál elektronických služieb a webových sídiel Slovenska (IDSK) je dizajnový systém elektronických služieb a webových sídiel štátu. IDSK má za cieľ zjednotiť používateľské rozhrania a spôsob komunikácie s používateľom pri poskytovaní služieb. Je to manuál na tvorbu kvalitných elektronických služieb a webových sídiel na Slovensku.
      </div>
      
      {/* Zjednotené do jedného Grid kontajnera namiesto dvoch sekcií */}
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