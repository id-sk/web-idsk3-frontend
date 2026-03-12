'use client';

import { homePageData } from "@/constants/data";
import Image from 'next/image';
import Link from "next/link";

// 1. OPRAVA: Zmenšili sme fonty v ImageCard
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
        {/* Nadpis kartičky: zmenšený na text-xl, a pre stredné obrazovky na text-lg */}
        <h3 className="mt-5 text-xl md:text-lg lg:text-xl font-bold tracking-wide leading-8 text-my-blue underline">
            {title}
        </h3>
        {/* Popis kartičky: zmenšený z text-xl na klasickú veľkosť text-base */}
        <p className="mt-2.5 text-base tracking-wide leading-7 text-black line-clamp-5">
          {description}
        </p>
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
            {/* 2. OPRAVA: Nadpis H1 bol príliš veľký. Na mobile bude text-3xl, od tabletu text-4xl */}
            <h1 className="text-3xl md:text-4xl font-black text-black leading-snug md:leading-[55px] max-md:max-w-full">
              Dizajnový systém elektronických služieb a webových sídel 
            </h1>
            {/* 3. OPRAVA: Odstavec bol text-2xl! Zmenené na text-base (mobil) a text-lg (desktop) */}
            <p className="mt-7 text-base md:text-lg tracking-normal leading-8 text-neutral-950 max-md:max-w-full">
              Webové sídlo IDSK obsahuje verziu dizajnového systému IDSK 3.0.0. <strong>Aktuálna a platná verzia dizajnového systému IDSK 3.1.0 </strong> je dostupná výhradne vo Figma komunitnej knižnici.
            </p>
            <Link 
              href="https://www.figma.com/community/file/1581301778555425083/idsk-3-1-0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 hover:shadow-lg self-start px-5 py-3 mt-10 text-base font-bold tracking-wide leading-6 text-center text-white bg-blue-600 rounded-md"
            >
              <span className="underline">Figma IDSK 3.1.0</span>
              
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