'use client'

import { whatIsData } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";


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
          className="w-full aspect-[1.5] object-cover"
        />
        <h3 className="mt-5 text-2xl font-bold tracking-wide leading-9 text-my-blue underline">{title}</h3>
        <p className="mt-2.5 text-custom-19 tracking-wide leading-7 text-black line-clamp-3">{description}</p>
      </div>
    </Link>
  );
}


const WhatIsPage = () => {
  return (
    <div className="flex flex-col my-8 max-w-[850px]">
      <title>Čo je ID-SK</title>
      <header>
        <h1 className="text-5xl font-black text-black leading-[55.2px] max-md:mr-1 max-md:max-w-full max-md:text-4xl">
          Čo je ID-SK
        </h1>
      </header>
      <main id="main-content" role="main">
      <p className="mt-8 text-2xl leading-9 tracking-wide text-black max-md:mr-1 max-md:max-w-full">
        Jednotný dizajn manuál elektronických služieb a webových sídiel Slovenska (ID-SK) je dizajnový systém elektronických služieb a webových sídiel štátu. ID-SK má za cieľ zjednotiť používateľské rozhrania a spôsob komunikácie s používateľom pri poskytovaní služieb. Je to manuál na tvorbu kvalitných elektronických služieb a webových sídiel na Slovensku.{" "}
      </p>
      <section className="px-1 mt-10 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {whatIsData.slice(0, 3).map((card, index) => (
            <div key={index} className="flex flex-col w-[33%] h-auto max-md:ml-0 max-md:w-full">
              <ImageCard key={index} href={card.href} src={card.src} title={card.title} description={card.description} alt={card.alt} />
            </div>
          ))}
        </div>
      </section>
      <section className="px-1 mt-10 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {whatIsData.slice(3, 5).map((card, index) => (
            <div key={index} className="flex flex-col w-[33%] h-auto max-md:ml-0 max-md:w-full">
              <ImageCard key={index} href={card.href} src={card.src} title={card.title} description={card.description} alt={card.alt} />
            </div>
          ))}
        </div>
      </section>
      </main>
    </div>
  );
}

export default WhatIsPage;







