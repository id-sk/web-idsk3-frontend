'use client'

import Link from "next/link";
import React from "react";
import { baseData } from "@/constants/data";
import Image from "next/image";


function ImageCard({ href, src, title, description, alt }) {
  return (
    <Link href={href ?? "#"}>
      <div className="flex flex-col grow p-5 w-full hover:shadow-lg tracking-wide bg-white rounded-xl border border-solid border-neutral-200 max-md:mt-5 h-[400px]">
        <Image
          width={100}
          height={100}
          quality={100}
          src={src}
          alt={alt}
          className="w-full aspect-[1.15] object-cover"
        />
        <h3 className="mt-5 text-2xl font-bold tracking-wide leading-9 text-my-blue underline">{title}</h3>
        <p className="mt-2.5 text-xl tracking-wide leading-7 text-black line-clamp-3">{description}</p>
      </div>
    </Link>
  );
}


const BasePage = () => {
  return (
    <div className="flex flex-col my-8 max-w-[850px]">
      <header>
        <h1 className="text-5xl font-black text-black leading-[55.2px] max-md:mr-1 max-md:max-w-full max-md:text-4xl">
          Základy a princípy
        </h1>
      </header>
      <p className="mt-8 w-full text-xl tracking-wide leading-7 max-md:max-w-full">
        Základné prvky vizuálnej identity pre vytvorenie konzistentného a účinného dizajnu elektronických služieb a webových sídiel.
      </p>
      <section className="px-1 mt-10 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {baseData.slice(0, 3).map((card, index) => (
            <div key={index} className="flex flex-col w-[33%] h-auto max-md:ml-0 max-md:w-full">
              <ImageCard key={index} href={card.href} src={card.src} title={card.title} description={card.description} alt={card.alt} />
            </div>
          ))}
        </div>
      </section>
      <section className="-mx-4 mt-10 w-full max-md:max-w-full">
        <div className="flex h-full gap-5 max-md:flex-col max-md:gap-0">
          {baseData.slice(3, 6).map((card, index) => (
            <div key={index} className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full h-full">
              <ImageCard key={index} href={card.href} src={card.src} title={card.title} description={card.description} alt={card.alt} />
            </div>
          ))}
        </div>
      </section>
      <div className='mt-6'>
      </div>
    </div>
  );
}

export default BasePage;







