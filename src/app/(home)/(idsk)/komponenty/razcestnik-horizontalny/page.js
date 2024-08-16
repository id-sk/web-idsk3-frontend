'use client'

import { ArticleCard } from "@eslovensko/idsk-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavigationBarPage = () => {
  return (
    <main className="flex flex-col my-8 max-w-[835px] max-md:pr-5">
      <title>Rázcestník</title>
      <header>
        <h1 className="text-5xl font-black text-black leading-[55.2px] max-md:max-w-full max-md:text-4xl">Horizontálny rázcestník</h1>
      </header>
      <p className="mt-5 text-2xl tracking-normal leading-9 text-black max-md:max-w-full">
        Horizontálny rázcestník má formu jednoduchej dlaždice usporiadanej horizontálne, ktorá je zložená z nadpisu, popisu a oddeľovacej čiary.
        Jeho účelom je prehľadne usporiadať pre používateľa odkazy na súvisiaci obsah, ktorý je rozmiestnený na rôznych, samostatných podstránkach.
        Rázcestník je jedným z komponentov, ktoré navigujú používateľa k obsahu vašej stránky.
      </p>
      <h2 className="mt-20 text-4xl font-black text-black max-md:mt-10 max-md:max-w-full">Použitie horizontálenho rázcestníka </h2>
      <p className="mt-5 text-custom-19 tracking-wide leading-7 max-md:max-w-full">
        Rázcestník je jedným z komponentov, ktoré navigujú používateľa k obsahu vašej stránky.
        Použitím rázcestníka spolu s nadpisom a podnadpisom dáte používateľovi najavo, ktorý obsah (a ako) spolu na stránke súvisí.
        Pri definovaní nadpisu a podnadpisu buďte struční a vecní. Rázcestník môžete štrukturovať do jedného alebo viacerých stĺpcov,
        musíte však dodržať pravidlá pre rozloženie stránky <span lang="en">(grid)</span>.
      </p>
      <h2 className="mt-8 mb-4">Varianty</h2>
      <p className="text-custom-19 tracking-wide leading-7 ">
        Komponent umožňuje použitie vzájomných kombinácií týchto variantov a stavov:
      </p>
      <ol className='text-custom-19 tracking-wide leading-7 list-disc list-inside '>
        <li>S ikonou</li>
        <li>S šípkou</li>
        <li>S ikonou a šípkou</li>
      </ol>
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
    </main>
  );
}

export default NavigationBarPage;
