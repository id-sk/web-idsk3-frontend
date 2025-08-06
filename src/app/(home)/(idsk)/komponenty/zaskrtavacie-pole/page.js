'use client'

import { ArticleCard } from '@eslovensko/idsk-react';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react';

const CheckboxPage = () => {
    return (
        <div className="component-page">
            <title>Zaškrtávacie pole</title>
            <h1 className="my-8">
                Zaškrtávacie pole
            </h1>
            <p className="idsk-subtitle mb-16">
                Zaškrtávacie pole je interaktívny prvok, ktorý umožňuje používateľovi vybrať jednu alebo viacero položiek
                z množiny možností. Používateľ označí zaškrtávacie pole kliknutím do štvorca a zruší označenie opätovným kliknutím.
            </p>
            <div className="ml-2 mb-16">
                <Link href={'https://komponenty.idsk3.gov.sk/components/checkboxes/'}>
                    <ArticleCard>
                        <h4>Kód komponentu</h4>
                        <p className="my-1">HTML verzia na prevzatie</p>
                    </ArticleCard>
                </Link>
            </div>
            <h2 className="mb-4">
                Použitie zaškrtávacieho poľa
            </h2>
            <p className="text-custom-19 tracking-wide leading-7 mb-8">
                Zaškrtávacie pole je interakčný prvok, ktorý je využívaný pre získanie súhlasu alebo potvrdenie výberu v užívateľskom rozhraní.
                Komponent je využívaný prevažne s popisom, ktorý definuje funkcionalitu komponentu.
            </p>
            <p className="text-custom-19 tracking-wide leading-7 mb-8">
                Obsahuje tri stavy – zaškrtnutý, nezaškrtnutý a neurčitý. Zmena stavu nastane klikom na komponent.
                V prípade použitia zaškrtávacieho poľa pre získanie súhlasu alebo potvrdenia, pole je v predvolenom stave prázdne.
            </p>
            <p className="text-custom-19 tracking-wide leading-7 mb-8">
                Komponent funguje aj bez použitia skriptovacieho jazyka Javascript, pričom aplikovanie jazyka Javascript môže byť
                použité pre rozšírenú funcionalitu.
            </p>
            <Image
                src="/images/checkbox/nazov-pola.png"
                width={1100}
                height={250}
                quality={100}
                alt="názov zaškrtávacieho pola"
            />
            <h2 className="mt-8 mb-4">
                Varianty
            </h2>
            <ol className='text-custom-19 tracking-wide leading-7 mb-4'>
                <li>1. Nezaškrtnutý</li>
                <li>2. Zaškrtnutý</li>
            </ol>
            <Image
                src="/images/checkbox/varianty-pola.svg"
                width={1100}
                height={250}
                quality={100}
                alt="varianty pola"
                className="mt-4 mb-8"
            />
            <ol className='text-custom-19 tracking-wide leading-7 mb-4'>
                <li>1. Veľký</li>
                <li>2. Malý</li>
            </ol>
            <Image
                src="/images/checkbox/stavy-pola.svg"
                width={1100}
                height={250}
                quality={100}
                alt="stavy pola"
                className="mt-4 mb-8"
            />
            <h2 className="mt-8 mb-4">
                Nastavenie
            </h2>
            <ol className='text-custom-19 tracking-wide leading-7 mb-4'>
                <li>1. Základný stav</li>
                <li>2. Neaktívny stav</li>
                <li>3. Vybraný stav</li>
            </ol>
            <Image
                src="/images/checkbox/velky-maly.svg"
                width={1100}
                height={250}
                quality={100}
                alt="varianty päty"
                className="mt-4 mb-8"
            />
        </div>
    );
}

export default CheckboxPage;