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
        <h3 className="mt-5 text-2xl font-bold tracking-wide leading-9 text-my-blue underline">
          {title}
        </h3>
        <p className="mt-2.5 text-xl tracking-wide leading-7 text-black line-clamp-3">
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
        <h1 className="text-5xl font-black text-black leading-[55px] max-md:text-4xl">
          Základy a princípy
        </h1>
      </header>
      
      <p className="mt-8 w-full text-xl tracking-wide leading-7">
        Základné prvky vizuálnej identity pre vytvorenie konzistentného a účinného dizajnu elektronických služieb a webových sídiel.
      </p>
      
      {/* Nahradený zbytočne zložitý Flex za jednoduchý CSS Grid */}
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