'use client'

import { ArticleCard } from '@eslovensko/idsk-react';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react';

const TextInputPage = () => {
    return (
        <div className="component-page">
            <title>Textové pole</title>
            <h1 className="my-8">
                Textové pole
            </h1>
            <p className="idsk-subtitle mb-16">
                Textové pole predstavuje vstupné prvky, ktorých hlavným cieľom je zber dát získaných od používateľov
                s cieľom dodať im žiadanú informáciu alebo službu. Pre správne pochopenie vyžadovaného údaju
                je potrebné zrozumiteľne popísať názov textového poľa. Základným pravidlom použitia je oboznámiť používateľa o povinnosti vyplnenia textového poľa.
            </p>
            <div className="mb-10">
                <Link href={'https://komponenty.idsk3.gov.sk/components/textarea/'}>
                    <ArticleCard>
                        <h4>Kód komponentu</h4>
                        <p className="my-1">HTML verzia na prevzatie</p>
                    </ArticleCard>
                </Link>
            </div>
            <h2 className="mb-4">
                Použitie textového poľa
            </h2>
            <p className="itext-custom-19 tracking-wide leading-7 mb-8">
                Primárne použitie komponentu textového pole je vo formulároch. Veľkosť poľa zohľadňuje prípustný počet
                znakov daného poľa. Je potrebné zabezpečiť, aby koncový používateľ mohol zadať potrebné údaje aj na menších
                obrazovkách mobilných zariadení. Pri menších veľkostiach obrazoviek je vhodné škálovať polia na celú šírku obrazovky.
            </p>
            <Image
                src="/images/textove-pole/pouzitie-textoveho-pola.svg"
                width={1100}
                height={250}
                quality={100}
                alt="použitie prepínacieho pola"
            />
            <h2 className="mt-8 mb-4">
                Varianty
            </h2>
            <p className="text-custom-19 tracking-wide leading-7 mb-4">
                Komponent umožňuje použitie 5 variantov:
            </p>
            <ol className='text-custom-19 tracking-wide leading-7 mb-4'>
                <li>1. Jednoduchý stav</li>
                <li>2. Vybraný stav</li>
                <li>3. Zameraný stav</li>
                <li>4. Chybový stav</li>
                <li>5. Neaktívny stav</li>
            </ol>
            <Image
                src="/images/textove-pole/vsetky-varianty.svg"
                width={1100}
                height={250}
                quality={100}
                alt="varianty pola"
                className="mt-4 mb-8"
            />
            <h2 className="mt-12 mb-4">
                Nastavenie
            </h2>
            <p className="text-custom-19 tracking-wide leading-7 mb-4">
                1. Variant povinného/nepovinného dátového poľa
            </p>
            <Image
                src="/images/textove-pole/variant-povinneho-nepovinneho.png"
                width={1100}
                height={250}
                quality={100}
                alt="variant povinného/nepovinného dátového poľa"
                className="mt-4 mb-8"
            />
            <p className="text-custom-19 tracking-wide leading-7 mb-4">
                2. Variant dátového poľa s rozbaľovačom/bez rozbaľovača
            </p>
            <Image
                src="/images/textove-pole/variant-rozbalovac-bez.png"
                width={1100}
                height={250}
                quality={100}
                alt="variant dátového poľa s rozbaľovačom/bez rozbaľovača"
                className="mt-4 mb-8"
            />
            <p className="text-custom-19 tracking-wide leading-7 mb-4">
                3. Variant dátového poľa s podnadpisom/bez podnadpisu
            </p>
            <Image
                src="/images/textove-pole/variant-podnadpisom-bez.png"
                width={1100}
                height={250}
                quality={100}
                alt="variant dátového poľa s podnadpisom/bez podnadpisu"
                className="mt-4 mb-8"
            />
            <p className="text-custom-19 tracking-wide leading-7 mb-4">
                4. Variant dátového poľa s popisom/bez popisu
            </p>
            <Image
                src="/images/textove-pole/datove-popis-bez.png"
                width={1100}
                height={250}
                quality={100}
                alt="variant dátového poľa s popisom/bez popisu"
                className="mt-4 mb-8"
            />
            <p className="text-custom-19 tracking-wide leading-7 mb-4">
                5. Variant dátového poľa veľký/malý
            </p>
            <Image
                src="/images/textove-pole/velky-maly.png"
                width={1100}
                height={250}
                quality={100}
                alt="variant velký / malý"
                className="mt-4 mb-12"
            />
        </div>
    );
}

export default TextInputPage;