'use client'

import Card from '@/app/(home)/_components/article/article';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react';

const ButtonPage = () => {
    return (
        <div className="component-page">
            <title>Tlačidlo - Textové</title>
            <h1 className="my-8">
                Tlačidlo - Textové
            </h1>
            <p className="idsk-subtitle mb-16">
            Textové tlačidlo slúži na akcie s najnižšou prioritou v rámci používateľského rozhrania. Komponent je použitý zvyčajne spolu s primárnym alebo sekundárnym tlačidlom. Je navrhnutý tak aby bol ľahko viditeľný aj pre ľudí so zrakovým obmedzením.
            </p>
            <div className="ml-2 mb-16">
                <Link href={'https://komponenty.idsk3.gov.sk/components/button/vo-forme-textu/preview'}>
                    <Card title="Kód komponentu" content="HTML verzia na prevzatie"/>
                </Link>
            </div>
            <h2 className="mb-4">
            Použitie textových tlačidiel 
            </h2>
            <p className="text-custom-19 tracking-wide leading-7 mb-8">
            Komponent je umiestňovaný na miesta, kde používateľ očakáva akciu s nižšou interakčnou prioritou. Zvyčajne je využívaný spolu s primárnym a sekundárnym tlačidlom. Tlačidlo musí obsahovať zrozumiteľný a výstižný popis, pomocou ktoré používateľ bude vedieť akú akciu ide vykonať.
            </p>
            <h2 className="mt-8 mb-4">
                Varianty
            </h2>
            <p className="text-custom-19 tracking-wide leading-7">
                Komponent umožňuje použitie 3 variantov:
            </p>
            <ol className='text-custom-19 tracking-wide leading-7 mb-4'>
                <li>1. Základný typ</li>
                <li>2. Úspešný typ</li>
                <li>3. Upozorňovací typ</li>
            </ol>
            <Image
                src="/images/button/textove/varianty-textovych-tlacidiel.svg"
                width={1100}
                height={250}
                quality={100}
                alt="varianty primárnych tlačidiel"
                className="mt-4 mb-8"
            />
            <h2 className="mt-8 mb-4">
                Nastavenie
            </h2>
            <p className="text-custom-19 tracking-wide leading-7">
                Varianty tlačidla:
            </p>
            <ol className='text-custom-19 tracking-wide leading-7 list-disc list-inside mb-4'>
              <li>základný (bez ikony)</li>
              <li>s ikonou vľavo</li>
              <li>s ikonou v pravo</li>
            </ol>
            <Image
                src="/images/button/textove/textove-ikona.svg"
                width={1100}
                height={250}
                quality={100}
                alt="základný s ikonou vľavo s ikonou vprav"
                className="mt-4 mb-8"
            />
            <p className="text-custom-19 tracking-wide leading-7">
                Stavy tlačidla:
            </p>
            <ol className='text-custom-19 tracking-wide leading-7 list-disc list-inside mb-8'>
              <li>aktívny</li>
              <li>vybraný/stlačený</li>
              <li>neaktívny</li>
            </ol>
            <Image
                src="/images/button/textove/textove-aktivne.png"
                width={1100}
                height={250}
                quality={100}
                alt="aktívny vybraný stlačený neaktívny stav"
                className="mt-4 mb-8"
            />
        </div>
    );
}

export default ButtonPage;