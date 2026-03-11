'use client';

import { homePageData } from "@/constants/data";
import Image from 'next/image';
import Link from "next/link";

// Tu je vrátený tvoj originálny komponent ImageCard
function ImageCard({ href, src, title, description, alt }) {
  return (
    <Link href={href ?? "#"} className="flex w-full">
      <article className="flex flex-col grow p-5 w-full hover:shadow-lg tracking-wide bg-white rounded-xl border border-solid border-neutral-200 max-md:mt-5 max-h-[850px] max-w-[600px] overflow-hidden">
        <figure className="w-full h-full bg-zinc-200">
          <Image
            width={100}
            height={100}
            quality={100}
            src={src}
            alt={alt || title}
            className="w-full aspect-[1.5] object-cover"
          />
        </figure>
        <h3 className="mt-5 text-2xl font-bold tracking-wide leading-9 text-my-blue underline">{title}</h3>
        <p className="mt-2.5 text-xl tracking-wide leading-7 text-black line-clamp-5">
          {description}
        </p>
      </article>
    </Link>
  );
}

export default function HomePage() {
  return (
    <>
      {/* 1. Hero sekcia (Plná šírka s šedým pozadím) */}
      <section className="w-full bg-zinc-100 pt-16 pb-20">
        <div className="page-container flex max-md:flex-col gap-5">
          
          <div className="flex flex-col w-[67%] max-md:w-full">
            <h1 className="text-5xl font-black text-black leading-[55px] max-md:text-4xl">
              Manuál pre tvorbu elektronických služieb a webových sídiel štátu
            </h1>
            <p className="mt-7 text-2xl leading-9 text-neutral-950">
              Manuál, ktorý má za cieľ zjednotiť používateľské rozhrania a spôsob komunikácie s používateľom pri poskytovaní elektronických služieb na Slovensku.
            </p>
            <Link href="/co-je">
              <button className="px-5 py-3 mt-10 text-base font-bold text-white bg-blue-600 rounded-md hover:shadow-lg">
                Začnite s IDSK
              </button>
            </Link>
          </div>

          <div className="w-[33%] max-md:w-full mt-7">
            <Image
              src="/images/home-page/undraw.svg"
              className="w-full"
              width={300}
              height={240}
              alt="Ilustrácia manuálu"
            />
          </div>

        </div>
      </section>

      {/* 2. Sekcia s kartičkami (Centrovaná na max-width vďaka triede page-container) */}
      <section className="page-container py-12">
        <div className="flex gap-5 max-md:flex-col mb-5">
          {homePageData.slice(0, 3).map((card, index) => (
            <ImageCard key={`row1-${index}`} {...card} />
          ))}
        </div>
        <div className="flex gap-5 max-md:flex-col">
          {homePageData.slice(3, 6).map((card, index) => (
            <ImageCard key={`row2-${index}`} {...card} />
          ))}
        </div>
      </section>
    </>
  );
}