'use client'

import { ArticleCard } from '@eslovensko/idsk-react';
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
            <h2 className="mb-4">
            Použitie textových tlačidiel 
            </h2>
            <p className="idsk-subtitle mb-8">
            Komponent je umiestňovaný na miesta, kde používateľ očakáva akciu s nižšou interakčnou prioritou. Zvyčajne je využívaný spolu s primárnym a sekundárnym tlačidlom. Tlačidlo musí obsahovať zrozumiteľný a výstižný popis, pomocou ktoré používateľ bude vedieť akú akciu ide vykonať.
            </p>
            <h2 className="mt-8 mb-4">
                Varianty
            </h2>
            <p className="idsk-subtitle mb-4">
                Komponent umožňuje použitie 3 variantov:
            </p>
            <ol className='idsk-subtitle mb-4'>
                <li>1. Základný typ</li>
                <li>2. Úspešný typ</li>
                <li>3. Upozorňovací typ</li>
                <li>4. Kontrastný typ</li>
            </ol>
            <Image
                src="/images/button/textove/varianty-textovych-tlacidiel.png"
                width={1100}
                height={250}
                quality={100}
                alt="varianty primárnych tlačidiel"
                className="mt-4 mb-8"
            />
            <h2 className="mt-8 mb-4">
                Nastavenie
            </h2>
            <p className="idsk-subtitle mb-4">
                1. Varianty tlačidla základný/s ikonou vľavo/s ikonou vpravo
            </p>
            <Image
                src="/images/button/textove/textove-ikona.png"
                width={1100}
                height={250}
                quality={100}
                alt="základný s ikonou vľavo s ikonou vprav"
                className="mt-4 mb-8"
            />
            <p className="idsk-subtitle mb-4">
                2. Varianty tlačidla aktívny stav/stlačený stav/neaktívny stav
            </p>
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