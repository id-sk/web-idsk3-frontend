'use client'

import { ArticleCard } from '@eslovensko/idsk-react';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react';

const RadioPage = () => {
    return (
        <div className="component-page">
            <title>Prepínacie pole</title>
            <h1 className="my-8">
                Prepínacie pole
            </h1>
            <p className="idsk-subtitle mb-16">
                Prepínacie pole je interaktívny prvok, ktorý používateľovi umožňuje zapnúť alebo vypnúť určitú funkciu alebo stav.
                Používateľ prepína medzi stavmi kliknutím na prepínacie pole. Pri navrhovaní prepínacieho poľa by sa mala zabezpečiť
                jeho jasná viditeľnosť a ľahká klikateľnosť.
            </p>
            <div className="ml-2 mb-16">
                <Link href={'https://komponenty.idsk3.gov.sk/components/radios/'}>
                    <ArticleCard>
                        <h4>Kód komponentu</h4>
                        <p className="my-1">HTML verzia na prevzatie</p>
                    </ArticleCard>
                </Link>
            </div>
            <h2 className="mb-4">
                Použitie prepínacieho poľa
            </h2>
            <p className="text-custom-19 tracking-wide leading-7 mb-8">
                Komponent prepínacie pole umožňuje používateľom vybrať jednu z viacerých navrhovaných možností s cieľom vybrať iba jednu z možnosti.
                Tento komponent sa najčastejšie využíva vo formulároch. Prepínacie pole je prevažne používané s popisom, ktorý objasňuje každú z možnosti,
                aby bolo používateľovi jasné, ktorú z možnosti má zvoliť.
            </p>
            <p className="text-custom-19 tracking-wide leading-7 mb-8">
                Komponent funguje aj bez použitia skriptovacieho jazyka Javascript, pričom aplikovanie jazyka Javascript môže byť použité pre rozšírenú funcionalitu.
            </p>
            <p className="text-custom-19 tracking-wide leading-7 mb-8">
                V prípade, že si koncový používateľ vyberá pomocou prepínacích polí z viac ako dvoch možností, prepínacie polia sa spravidla zarovnávajú pod seba,
                ak nie sú prepínacie polia použité ako škály pri zbere spätnej väzby.
            </p>
            <Image
                src="/images/radio/nazov-prepinacieho-pola.png"
                width={1100}
                height={250}
                quality={100}
                alt="názov prepínacieho pola"
            />
            <h2 className="mt-8 mb-4">
                Varianty
            </h2>
            <p className="text-custom-19 tracking-wide leading-7 mb-4">
                Komponent umožňuje použitie 3 variantov:
            </p>
            <ol className='text-custom-19 tracking-wide leading-7 mb-4'>
                <li>1. Nezaškrtnutý</li>
                <li>2. Zaškrtnutý</li>
            </ol>
            <Image
                src="/images/radio/varianty.png"
                width={1100}
                height={250}
                quality={100}
                alt="varianty pola"
                className="mt-4 mb-8"
            />
            <p className="text-custom-19 tracking-wide leading-7 mb-4">
                Stavy komponentu:
            </p>
            <ol className='text-custom-19 tracking-wide leading-7 mb-4'>
                <li>1. Aktívny stav</li>
                <li>2. Neaktívny stav</li>
                <li>3. Vybraný stav</li>
            </ol>
            <Image
                src="/images/radio/stavy.png"
                width={1100}
                height={250}
                quality={100}
                alt="stavy"
                className="mt-4 mb-8"
            />
            <h2 className="mt-8 mb-4">
                Nastavenie
            </h2>
            <p className="text-custom-19 tracking-wide leading-7 mb-4">
                1. Variant prepínacieho poľa veľký/malý
            </p>
            <Image
                src="/images/radio/velky-maly.png"
                width={1100}
                height={250}
                quality={100}
                alt="variant velký / malý"
                className="mt-4 mb-8"
            />
            <p className="text-custom-19 tracking-wide leading-7 mb-4">
                2. Variant prepínacieho poľa s textom/bez textu
            </p>
            <Image
                src="/images/radio/s-textom.png"
                width={1100}
                height={250}
                quality={100}
                alt="variant s textom/bez textu"
                className="mt-4 mb-8"
            />
        </div>
    );
}

export default RadioPage;