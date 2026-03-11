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
        <h3 className="mt-5 text-2xl font-bold tracking-wide leading-9 text-my-blue underline">
          {title}
        </h3>
        <p className="mt-2.5 text-custom-19 tracking-wide leading-7 text-black line-clamp-3">
          {description}
        </p>
      </div>
    </Link>
  );
}

const IdskPage = () => {
  return (
    // Tento div drží tvoj text a grid pokope. Ak chceš aby sa to roztiahlo viac, môžeš zmeniť max-w-[850px]
    <div className="flex flex-col my-8 max-w-[850px]">
      <title>Zoznam komponentov</title>
      
      <header>
        <h1 className="text-5xl font-black text-black leading-[55px] max-md:text-4xl">
          Zoznam Komponentov
        </h1>
      </header>
      
      <p className="mt-8 text-2xl tracking-normal leading-9 text-black">
        Základné stavebné bloky používateľského rozhrania. Prvky, ktorých opakované použitie má za cieľ vytvorenie jednotného vzhľadu a funkčnosti stránok a webových sídiel.
      </p>
      
      {/* TUTO JE TA MÁGIA: 
        Jedna jediná sekcia, ktorá má Grid.
        grid-cols-1 pre mobily (pod sebou).
        md:grid-cols-2 pre tablety.
        lg:grid-cols-3 pre desktop (3 vedľa seba).
      */}
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