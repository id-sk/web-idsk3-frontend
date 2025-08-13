'use client'

import Card from '@/app/(home)/_components/article/article';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react';

const TextInputPage = () => {
    return (
        <div className="component-page">
            <title>Viacriadkové textové pole</title>
            <h1 className="my-8">
                Viacriadkové textové pole
            </h1>
            <p className="idsk-subtitle mb-16">
                Viacriadkové textové pole je interaktívny prvok v grafickom dizajne, ktorý umožňuje používateľovi zadať viacero riadkov textu. Na rozdiel od jednoriadkového textového poľa, ktoré umožňuje zadať iba jeden riadok textu, viacriadkové textové pole dáva možnosť používateľom zadať dlhšie texty.
            </p>
            <div className="ml-2 mb-16">
                <Link href={'https://komponenty.idsk3.gov.sk/components/textarea/'}>
                    <Card title="Kód komponentu" content="HTML verzia na prevzatie"/>
                </Link>
            </div>
            <h2 className="mb-4">
                Použitie viacriadkového textového poľa
            </h2>
            <p className="text-custom-19 tracking-wide leading-7 mb-8">
                Viacriadkové textové pole je využívané zvyčajne pre zber väčšieho množstva informácii, ako napríklad zanechanie spätnej väzby. Pri výbere viacriadkového textového poľa je nutné určiť povinnosť textového poľa podľa zadefinovaných pravidiel. Počet možných zadaných znakov je zobrazený v pravom dolnom rohu textového poľa.
            </p>
            <Image
                src="/images/textove-pole/viacriadkove/pouzitie-viacriadkoveho-pola.png"
                width={1100}
                height={250}
                quality={100}
                alt="použitie prepínacieho pola"
            />
            <h2 className="mt-8 mb-4">
                Varianty
            </h2>
            <p className="text-custom-19 tracking-wide leading-7">
                Komponent umožňuje použitie 5 variantov:
            </p>
            <ol className='text-custom-19 tracking-wide leading-7 mb-8'>
                <li>1. Jednoduchý stav</li>
                <li>2. Vybraný stav</li>
                <li>3. Zameraný stav</li>
                <li>4. Neaktívny stav</li>
                <li>5. Chybový stav</li>
            </ol>
            <Image
                src="/images/textove-pole/viacriadkove/vsetky-varianty-viacriadkoveho.png"
                width={1100}
                height={250}
                quality={100}
                alt="varianty viacriadkového pola"
                className="mt-4 mb-8"
            />
            <h2 className="mt-8 mb-4">
                Nastavenie
            </h2>
            <p className="text-custom-19 tracking-wide leading-7 mb-4">
                1. Variant povinného/nepovinného viacriadkového textového poľa
            </p>
            <Image
                src="/images/textove-pole/viacriadkove/variant-povinneho-nepovinneho-viacriadkoveho.png"
                width={1100}
                height={250}
                quality={100}
                alt="variant povinného/nepovinného viacriadkového poľa"
                className="mt-4 mb-8"
            />
            <p className="text-custom-19 tracking-wide leading-7 mb-4">
                2. Variant viacriadkového textového poľa s popisom/bez popisu
            </p>
            <Image
                src="/images/textove-pole/viacriadkove/variant-popis-bez-viacriadkovy.png"
                width={1100}
                height={250}
                quality={100}
                alt="variant viacriadkového textového poľa s popisom/bez popisu"
                className="mt-4 mb-8"
            />
        </div>
    );
}

export default TextInputPage;