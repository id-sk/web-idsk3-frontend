'use client'

import { componentsData } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import React from 'react';

function ImageCard({ href, src, title, description, alt }) {
  return (
    <Link 
      href={href ?? "#"} 
      className="flex w-full h-full group outline-none rounded-2xl !pl-0"
    >
      <article className="
        relative flex flex-col w-full h-full p-4 sm:p-5 tracking-wide bg-white 
        rounded-2xl border border-solid border-neutral-200
        transition-all duration-200
        group-hover:!shadow-none 
        group-hover:!ring-[4px] group-hover:!ring-[#757575]
        hover:z-10
      ">
        <div className="relative w-full aspect-[3/2] bg-zinc-200 overflow-hidden shrink-0">
          <Image
            src={src}
            alt={alt || ""}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        <div className="flex flex-col grow mt-4">
          <h3 className="text-lg sm:text-xl font-bold tracking-wide leading-tight sm:leading-8 text-my-blue underline line-clamp-2">
            {title}
          </h3>
          <p className="mt-2 text-sm sm:text-base tracking-wide leading-relaxed sm:leading-7 text-black line-clamp-3">
            {description}
          </p>
        </div>
      </article>
    </Link>
  );
}

const IdskPage = () => {
  return (
    <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0">
      <title>Zoznam komponentov</title>
      
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
            <ImageCard 
              key={index} 
              {...card} 
            />
          ))}
        </div>
      </section>

      <div className='mt-6'></div>
    </div>
  );
}

export default IdskPage;