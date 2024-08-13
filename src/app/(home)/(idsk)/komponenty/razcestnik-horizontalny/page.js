'use client'

import { ArticleCard } from "@eslovensko/idsk-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavigationBarPage = () => {
  return (
    <main className="mb-6 -my-8 -mx-6 px-1 flex self-center w-full max-md:max-w-full">
      <title>Rázcestník</title>
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <section className="flex flex-col ml-5 w-[60%] max-md:ml-0 max-md:w-full">
          <article className="flex flex-col grow pt-16 pb-8 max-md:mt-5 max-md:max-w-full">
            <h1 className="text-5xl font-black text-black leading-[55.2px] max-md:max-w-full max-md:text-4xl">Horizontálny rázcestník</h1>
            <p className="mt-5 text-2xl tracking-normal leading-9 text-black max-md:max-w-full">
              Horizontálny rázcestník má formu jednoduchej dlaždice usporiadanej horizontálne, ktorá je zložená z nadpisu, popisu a oddeľovacej čiary.
              Jeho účelom je prehľadne usporiadať pre používateľa odkazy na súvisiaci obsah, ktorý je rozmiestnený na rôznych, samostatných podstránkach.
              Rázcestník je jedným z komponentov, ktoré navigujú používateľa k obsahu vašej stránky.
            </p>
            <h2 className="mt-20 text-4xl font-black text-black max-md:mt-10 max-md:max-w-full">Použitie horizontálenho rázcestníka </h2>
            <p className="mt-5 text-xl tracking-wide leading-7 text-black max-md:max-w-full">
              Rázcestník je jedným z komponentov, ktoré navigujú používateľa k obsahu vašej stránky.
              Použitím rázcestníka spolu s nadpisom a podnadpisom dáte používateľovi najavo, ktorý obsah (a ako) spolu na stránke súvisí.
              Pri definovaní nadpisu a podnadpisu buďte struční a vecní. Rázcestník môžete štrukturovať do jedného alebo viacerých stĺpcov,
              musíte však dodržať pravidlá pre rozloženie stránky (grid).
            </p>
            <h2 className="mt-8 mb-4">Varianty</h2>
            <p className="idsk-subtitle mb-4">
              Komponent umožňuje použitie 4 variantov:
            </p>
            <ol className='idsk-subtitle mb-4'>
              <li>1. S ikonou</li>
              <li>2. S šípkou</li>
              <li>3. S ikonou a šípkou</li>
            </ol>
          </article>
          <div className="my-2 w-[100%] h-[100%] ">
            <Image
              src="/images/razcestnik/horizontalny-razcestnik.svg"
              width={100}
              height={100}
              quality={100}
              alt="horizontalny-razcestnik"
              className="w-full h-full"
            />
          </div>
        </section>
      </div>
    </main>
  );
}

export default NavigationBarPage;
