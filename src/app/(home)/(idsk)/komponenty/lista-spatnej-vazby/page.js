'use client'

import Card from '@/app/(home)/_components/article/article';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BackBarPage = () => {
    return (
        <div className="component-page">
            <title>Lišta spätnej väzby</title>
            <h1 className="my-8">
                Lišta spätnej väzby
            </h1>
            <p className="idsk-subtitle mb-16">
                Lišta spätnej väzby sa umiestňuje bezprostredne nad komponent päta. Základným cieľom lišty spätnej väzby je zistiť od používateľov užitočnosť a relevantnosť publikovaného obsahu na webovom sídle.
            </p>
            <div className="ml-2 mb-16">
                <Link href={'https://komponenty.idsk3.gov.sk/components/feedback-bar/'}>
                    <Card title="Kód komponentu" content="HTML verzia na prevzatie"/>
                </Link>
            </div>
            <h2 className="mb-4">
                Použitie lišty spätnej väzby
            </h2>
            <p className="text-custom-19 tracking-wide leading-7 mb-8">
                Komponent lišta spätnej väzby slúži primárne pre vyjadrenie spokojnosti s informáciami získanými na stránke.
                Vyjadrenie názoru spokojnosti je možné pomocou tlačidiel „Áno“ alebo „Nie“.  V prípade stlačenia možnosti „Nie“,
                používateľovi je zobrazený krátky dotazník, ktorý umožňuje vyjadriť svoj názor alebo pohľad so získanými informácie. Pre zvýšenie pravdepodobnosti vyplnenia dotazníka používateľom sa odporúča použiť krátky a stručný dotazník.
            </p>
            <p className="text-custom-19 tracking-wide leading-7 mb-8">
                Lišta spätnej väzby používateľom poskytuje možnosť nahlásiť chyby. V prípade nájdenia chyby postačí kliknúť na <b>„Nahlásiť chybu“</b>
                a následne vyplniť formulár s jej opisom. Môžete zvoliť typ chyby, napríklad gramatickú chybu alebo zastaraný obsah.
                Odporúčame obmedziť popis na 350 znakov, aby popis chyby bol čo najviac relevantný.
            </p>
            <Image
                src="/images/lista-spatnej-vazby/pouzitie-listy.png"
                width={1100}
                height={250}
                quality={100}
                alt="použitie spätnej väzby"
            />
            <p className="text-custom-19 tracking-wide leading-7 my-8">
                V prípade stlačenia možnosti „Áno“, používateľ vyjadruje spokojnosť s informáciami, ktoré mu boli poskytnuté na danej stránke.
            </p>
            <Image
                src="/images/lista-spatnej-vazby/vyjadrenie-spokojnosti.png"
                width={1100}
                height={250}
                quality={100}
                alt="vyjadrenie spokojnosti"
            />
            <h2 className="mt-8 mb-4">
                Varianty
            </h2>
            <p className="text-custom-19 tracking-wide leading-7 mb-4">
                Komponent umožňuje použitie 2 variantov:
            </p>
            <ol className='text-custom-19 tracking-wide leading-7 mb-4'>
                <li>1. S tlačidlom nahlásiť chybu</li>
                <li>2. Bez tlačidla nahlásiť chybu</li>
            </ol>
            <Image
                src="/images/lista-spatnej-vazby/varianty-spatnej-vazby.png"
                width={1100}
                height={250}
                quality={100}
                alt="varianty päty"
                className="mt-4 mb-8"
            />
        </div>
    );
}

export default BackBarPage;
