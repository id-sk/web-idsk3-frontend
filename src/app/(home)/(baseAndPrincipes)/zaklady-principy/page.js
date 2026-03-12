'use client'

import Link from "next/link";
import React from "react";
import { baseData } from "@/constants/data";
import Image from "next/image";

function ImageCard({ href, src, title, description, alt }) {
  return (
    <Link href={href ?? "#"} className="flex w-full h-full">
      <div className="flex flex-col grow p-5 w-full hover:shadow-lg tracking-wide bg-white rounded-xl border border-solid border-neutral-200">
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
        {/* ZMENŠENÝ POPIS KARTIČKY na text-base (štandardný text) */}
        <p className="mt-2.5 text-base tracking-wide leading-7 text-black line-clamp-3">
          {description}
        </p>
      </div>
    </Link>
  );
}

const BasePage = () => {
  return (
    <div className="flex flex-col my-8 max-w-[850px]">
      <title>Základy a princípy</title>
      
      <header>
        {/* ZMENŠENÝ HLAVNÝ NADPIS */}
        <h1 className="text-3xl md:text-4xl font-black text-black leading-snug md:leading-[55px]">
          Základy a princípy
        </h1>
      </header>
      
      {/* ZMENŠENÝ INTRO TEXT na text-base pre mobil a text-lg pre desktop */}
      <p className="mt-8 w-full text-base md:text-lg tracking-wide leading-7 md:leading-8">
        Základné prvky vizuálnej identity pre vytvorenie konzistentného a účinného dizajnu elektronických služieb a webových sídiel.
      </p>
      
      <section className="mt-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {baseData.slice(0, 3).map((card, index) => (
            <ImageCard key={`row1-${index}`} {...card} />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {baseData.slice(3, 6).map((card, index) => (
            <ImageCard key={`row2-${index}`} {...card} />
          ))}
        </div>
      </section>
      
    </div>
  );
}

export default BasePage;