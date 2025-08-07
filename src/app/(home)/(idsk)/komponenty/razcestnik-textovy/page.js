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
        <h1 className="text-5xl font-black text-black leading-[55.2px] max-md:max-w-full max-md:text-4xl">Textový rázcestník</h1>
      </header>
      <p className="mt-5 text-2xl tracking-normal leading-9 text-black max-md:max-w-full">
        Rázcestník má formu jednoduchej dlaždice , zloženej z nadpisu, popisu a oddeľovacej čiary.
        Jeho účelom je prehľadne usporiadať pre používateľa odkazy na súvisiaci obsah, ktorý je
        rozmiestnený na rôznych, samostatných podstránkach. Rázcestník je jedným z komponentov,
        ktoré navigujú používateľa k obsahu vašej stránky.
      </p>
      <div className="ml-2 mb-16">
        <Link href={'https://komponenty.idsk3.gov.sk/components/signpost/'}>
          <ArticleCard>
            <h4>Kód komponentu</h4>
            <p className="my-1">HTML verzia na prevzatie</p>
          </ArticleCard>
        </Link>
      </div>
      <h2 className="mt-20 text-4xl font-black text-black max-md:mt-10 max-md:max-w-full">Použitie textového rázcestníka</h2>
      <p className="mt-5 text-custom-19 tracking-wide leading-7 text-black max-md:max-w-full">
        Rázcestník je jedným z komponentov, ktoré navigujú používateľa k obsahu vašej stránky.
        Použitím rázcestníka spolu s nadpisom a podnadpisom dáte používateľovi najavo, ktorý obsah
        (a ako) spolu na stránke súvisí. Pri definovaní nadpisu a podnadpisu buďte struční a vecní.
        Rázcestník môžete štrukturovať do jedného alebo viacerých stĺpcov, musíte však dodržať pravidlá
        pre rozloženie stránky (grid).
      </p>
      <h2 className="mt-16 mb-4">Varianty</h2>
      <p className="text-custom-19 tracking-wide leading-7 ">
        Komponent umožňuje použitie 3 variantov:
      </p>
      <ol className='text-custom-19 tracking-wide leading-7 mb-4'>
        <li>1. Základná</li>
        <li>2. S linkom </li>
        <li>3. S tagom</li>
      </ol>
      <div className="my-2 w-[100%] h-[100%]">
        <Image
          src="/images/razcestnik/textovy-razcestnik-img1.svg"
          width={100}
          height={100}
          quality={100}
          alt="text-razcestnik"
          className="w-full h-full"
        />
      </div>
      <h2 className="mt-20 text-4xl font-black text-black max-md:mt-10 max-md:max-w-full">Nastavenie</h2>
      <p className="mt-5 text-custom-19 tracking-wide leading-7 text-black max-md:max-w-full">
        1. Variant rázcestníka s podnadpisom/bez podnadpisu
      </p>
      <div className="mt-5 w-[100%] h-[100%]">
        <Image
          src="/images/razcestnik/textovy-razcestnik-img2.svg"
          width={100}
          height={100}
          quality={100}
          alt="text-razcestnik"
          className="w-full h-full"
        />
      </div>
    </main>
  );
}

export default NavigationBarPage;
