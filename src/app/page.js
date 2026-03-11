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
            <h1 className="text-5xl font-black text-black leading-[55px] max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
              Dizajnový systém elektronických služieb a webových sídel 
            </h1>
            <p className="mt-7 text-2xl tracking-normal leading-9 text-neutral-950 max-md:max-w-full">
              Webové sídlo IDSK obsahuje verziu dizajnového systému IDSK 3.0.0. <strong>Aktuálna a platná verzia dizajnového systému IDSK 3.1.0 </strong> je dostupná výhradne vo Figma komunitnej knižnici.
            </p>
            <Link 
              href="https://www.figma.com/community/file/1581301778555425083/idsk-3-1-0" 
              target="_blank" 
              rel="noopener noreferrer"
              /* PRIDANÉ: inline-flex, items-center a gap-2 */
              className="inline-flex items-center justify-center gap-2 hover:shadow-lg self-start px-5 py-3 mt-10 text-base font-bold tracking-wide leading-6 text-center text-white bg-blue-600 rounded-md"
            >
              <span className="underline">Figma IDSK 3.1.0</span>
              
              {/* IKONKA EXTERNAL LINK */}
              <svg 
                className="w-6 h-6 shrink-0" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                />
              </svg>
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