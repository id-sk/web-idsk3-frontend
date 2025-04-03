'use client'

import { homePageData } from "@/constants/data";
import Image from 'next/image';
import Link from "next/link";
import FooterResp from './(home)/_components/footer/FooterResp';
import Navbar from "./(home)/_components/navbar/navbar";
import { SkipLink } from "@eslovensko/idsk-react";
import { handleSkip } from "@/utils/skip";


function ImageCard({ href, src, title, description, alt }) {
  return (
    <Link href={href ?? "#"}>
      <article className="flex flex-col grow p-5 w-full hover:shadow-lg tracking-wide bg-white rounded-xl border border-solid border-neutral-200 max-md:mt-5 max-h-[850px] max-w-[600px] overflow-hidden">
        <figure className="w-full h-full bg-zinc-200">
          <Image
            width={100}
            height={100}
            quality={100}
            src={src}
            alt={alt}
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
      <SkipLink onClick={handleSkip}>
        Preskočiť na hlavný obsah
      </SkipLink>
      <main>
        <Navbar />
        <section className="flex flex-col pt-16 px-8 bg-zinc-100 max-md:max-w-full">
          <div className="flex flex-col items-center px-16 pt-9 pb-20 w-full bg-zinc-100 max-md:px-5 max-md:max-w-full">
            <div className="mb-4 w-full max-w-[1168px] max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col max-md:mt-2.5 max-md:max-w-full">
                    <h1 className="text-5xl font-black text-black leading-[55px] max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
                      Manuál pre tvorbu elektronických služieb a webových sídiel štátu
                    </h1>
                    <p className="mt-7 text-2xl tracking-normal leading-9 text-neutral-950 max-md:max-w-full">
                      Manuál, ktorý má za cieľ zjednotiť používateľské rozhrania a spôsob komunikácie s používateľom pri poskytovaní elektronických služieb na Slovensku.
                    </p>
                    <Link href="/co-je">
                      <button className="justify-center hover:shadow-lg self-start px-5 py-3 mt-10 text-base font-bold tracking-wide leading-6 text-center text-white bg-blue-600 rounded-md">
                        Začnite s IDSK
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <Image
                    src="/images/home-page/undraw.svg"
                    className="grow mt-7 w-full aspect-[1.23] max-md:mt-10"
                    width={100}
                    height={100}
                    quality={100}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <main className="flex flex-col w-full h-full pt-12 -my-2 pb-8 max-w-[1100px] mx-auto self-center  max-md:max-w-full">
          <section className="p-3 mt-3 w-full max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {homePageData.slice(0, 3).map((card, index) => (
                <ImageCard key={index} href={card.href} src={card.src} title={card.title} description={card.description} alt={card.alt} />
              ))}
            </div>
          </section>
          <section className="p-3 w-full  max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {homePageData.slice(3, 6).map((card, index) => (
                <ImageCard key={index} href={card.href} src={card.src} title={card.title} description={card.description} alt={card.alt} />
              ))}
            </div>
          </section>
        </main>
        <br />
        <br />
        <FooterResp />
      </main>
    </>
  );

}



