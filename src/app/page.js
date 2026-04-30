'use client';

import { homePageData } from "@/constants/data";
import Image from 'next/image';
import Link from "next/link";

function ImageCard({ href, src, title, description, alt }) {
  return (
    <Link 
      href={href ?? "#"} 
      className="flex w-full h-full group outline-none rounded-2xl focus-visible:ring-3 focus-visible:ring-[#757575] focus-visible:ring-offset-2"
    >
      <article className="
        flex flex-col w-full h-full p-4 sm:p-5 tracking-wide bg-white 
        rounded-2xl border border-solid border-neutral-200 overflow-hidden
        transition-all duration-200
        hover:shadow-none 
        hover:ring-[4px] 
        hover:ring-[#757575]
      ">
        
        {/* OBRÁZOK */}
        <div className="relative w-full aspect-[3/2] bg-zinc-200 rounded-xl overflow-hidden shrink-0">
          <Image
            src={src}
            alt={alt || ""}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        <div className="flex flex-col grow mt-4">
          {/* NADPIS sémanticky <h3> */}
          <h3 className="text-lg sm:text-xl font-bold tracking-wide leading-tight sm:leading-8 text-my-blue underline line-clamp-2">
            {title}
          </h3>
          
          {/* POPIS */}
          <p className="mt-2 text-sm sm:text-base tracking-wide leading-relaxed sm:leading-7 text-black line-clamp-3">
            {description}
          </p>
        </div>

      </article>
    </Link>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="w-full bg-zinc-100 pt-16 pb-20">
        <div className="page-container flex max-md:flex-col gap-5">
          
          <div className="flex flex-col w-[67%] max-md:w-full">
            <h1 className="text-3xl md:text-4xl font-black text-black leading-snug md:leading-[55px] max-md:max-w-full">
              Dizajnový systém elektronických služieb a webových sídel 
            </h1>
            <p className="mt-7 text-base md:text-lg tracking-normal leading-8 text-neutral-950 max-md:max-w-full">
              Webové sídlo IDSK obsahuje verziu dizajnového systému IDSK 3.0.0. <strong>Aktuálna a platná verzia dizajnového systému IDSK 3.1.0 </strong> je dostupná výhradne vo Figma komunitnej knižnici.
            </p>
            <Link 
                href="https://www.figma.com/community/file/1581301778555425083/idsk-3-1-0" 
                target="_blank" 
                aria-label="Figma IDSK 3.1.0 (otvorí sa v novom okne)"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 self-start 
                    px-5 py-3 mt-10 text-base font-bold tracking-wide leading-6 text-center text-white 
                    bg-blue-600 rounded-md transition-all duration-200
                    outline-none
                    hover:shadow-none 
                    hover:ring-[4px] 
                    hover:ring-[#757575]
                    hover:underline
                    "
              >
              <span>Figma IDSK 3.1.0</span>
              
              <svg 
                className="w-6 h-6 shrink-0" 
                aria-hidden="true"
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
              alt=""
            />
          </div>

        </div>
      </section>

      {/* Sekcia s kartičkami */}
      <section className="page-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {homePageData.map((card, index) => (
            <ImageCard key={`card-${index}`} {...card} />
          ))}
        </div>
      </section>
    </>
  );
}