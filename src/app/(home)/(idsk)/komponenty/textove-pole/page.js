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
            <p className="idsk-subtitle mb-8">
                Primárne použitie komponentu textového pole je vo formulároch. Veľkosť poľa zohľadňuje prípustný počet
                znakov daného poľa. Je potrebné zabezpečiť, aby koncový používateľ mohol zadať potrebné údaje aj na menších
                obrazovkách mobilných zariadení. Pri menších veľkostiach obrazoviek je vhodné škálovať polia na celú šírku obrazovky.
            </p>
            <Image
                src="/images/textove-pole/pouzitie-textoveho-pola.png"
                width={1100}
                height={250}
                quality={100}
                alt="použitie prepínacieho pola"
            />
            <h2 className="mt-8 mb-4">
                Varianty
            </h2>
            <p className="idsk-subtitle mb-4">
                Komponent umožňuje použitie 5 variantov:
            </p>
            <ol className='idsk-subtitle mb-4'>
                <li>1. Jednoduchý stav</li>
                <li>2. Vybraný stav</li>
                <li>3. Zameraný stav</li>
                <li>4. Chybový stav</li>
                <li>5. Neaktívny stav</li>
            </ol>
            <Image
                src="/images/textove-pole/vsetky-varianty.png"
                width={1100}
                height={250}
                quality={100}
                alt="varianty pola"
                className="mt-4 mb-8"
            />
            <h2 className="mt-8 mb-4">
                Nastavenie
            </h2>
            <p className="idsk-subtitle mb-4">
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
            <p className="idsk-subtitle mb-4">
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
            <p className="idsk-subtitle mb-4">
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
            <p className="idsk-subtitle mb-4">
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
            <p className="idsk-subtitle mb-4">
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


            {/* Viacriadkové */}
            <h1 className="mt-20 mb-8">
                Viacriadkové textové pole
            </h1>
            <p className="idsk-subtitle mb-16">
                Viacriadkové textové pole je interaktívny prvok v grafickom dizajne, ktorý umožňuje používateľovi zadať viacero riadkov textu. Na rozdiel od jednoriadkového textového poľa, ktoré umožňuje zadať iba jeden riadok textu, viacriadkové textové pole dáva možnosť používateľom zadať dlhšie texty.
            </p>
            <h2 className="mb-4">
                Použitie viacriadkového textového poľa
            </h2>
            <p className="idsk-subtitle mb-8">
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
            <p className="idsk-subtitle mb-4">
                Komponent umožňuje použitie 5 variantov:
            </p>
            <ol className='idsk-subtitle mb-4'>
                <li>1. Jednoduchý stav</li>
                <li>2. Vybraný stav</li>
                <li>3. Zameraný stav</li>
                <li>4. Chybový stav</li>
                <li>5. Neaktívny stav</li>
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
            <p className="idsk-subtitle mb-4">
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
            <p className="idsk-subtitle mb-4">
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


            {/* Pole pre nahratie súboru */}
            <h1 className="mt-20 mb-8">
                Pole pre nahratie súboru
            </h1>
            <p className="idsk-subtitle mb-16">
                Pole pre nahratie súboru je interaktívny prvok, ktorý umožňuje používateľovi nahrať súbor na webové sídlo. Umožňuje používateľom nahrať súbory, ako sú napríklad obrázky, dokumenty. Okrem tlačidla pre nahratie súboru môže byť vhodné pridať aj textové popisy alebo iné prvky na vysvetlenie, ktoré typy súborov môžu byť nahrané resp na vysvetlenie postupu nahrávania súborov.
            </p>
            <h2 className="mb-4">
                Použitie poľa pre nahratie súboru
            </h2>
            <p className="idsk-subtitle mb-8">
                Komponent pre nahratie súborov je grafický prvok, ktorý umožňuje užívateľom jednoducho nahrať súbory na server. Tento komponent obsahuje oblasť, na ktorú užívatelia môžu pretiahnuť súbory alebo majú možnosť kliknúť na tlačidlo pre výber súborov z ich počítača.

                Pole pre nahratie súboru môže byť použité pre rôzne typy súborov vrátane obrázkov, dokumentov alebo zvukových nahrávok. Po nahraní súborov je zobrazený náhľad nahratých súborov. Pri výskyte problému pri nahrávaní, je používateľ informovaný spolu so správou o type problému.

                Druhý variant komponentu má rovnaké použitie ako variant prvý, ibaže tento je implemetovaný bez použitia skriptovacieho jazyka Javascript.
            </p>
            <Image
                src="/images/textove-pole/file-upload/pouzitie.png"
                width={1100}
                height={250}
                quality={100}
                alt="použitie poľa pre nahratie súboru"
            />
            <h2 className="mt-8 mb-4">
                Varianty
            </h2>
            <p className="idsk-subtitle mb-4">
                Komponent umožňuje použitie 2 variantov:
            </p>
            <ol className='idsk-subtitle mb-4'>
                <li>1. Pole pre nahratie súboru</li>
                <li>2. Pole pre nahratie súboru bez javascriptu</li>
            </ol>
            <Image
                src="/images/textove-pole/file-upload/varianty.svg"
                width={1100}
                height={250}
                quality={100}
                alt="varianty pola pre nahratie súboru"
                className="mt-4 mb-8"
            />
            <h2 className="mt-8 mb-4">
                Nastavenie
            </h2>
            <p className="idsk-subtitle mb-4">
                Komponent pole pre nahratie súboru umožňuje použitie 4 variantov:
            </p>
            <ol className='idsk-subtitle mb-4'>
                <li>1. Nečinný</li>
                <li>2. Aktivovaný</li>
                <li>3. Nahratý</li>
                <li>4. Neaktívny</li>
            </ol>
            <Image
                src="/images/textove-pole/file-upload/nastavenie.svg"
                width={1100}
                height={250}
                quality={100}
                alt="nastavenie pola pre nahratie súboru"
                className="mt-4 mb-8"
            />
            <p className="idsk-subtitle mb-4">
                Pole pre nahratie súboru bez javascriptu poskytuje 3 varianty:
            </p>
            <ol className='idsk-subtitle mb-4'>
                <li>1. Základný</li>
                <li>2. Nahrať súbor</li>
                <li>3. Chyba</li>
            </ol>
            <Image
                src="/images/textove-pole/file-upload/bez-javascriptu.svg"
                width={1100}
                height={250}
                quality={100}
                alt="nahratie súboru bez javascriptu"
                className="mt-4 mb-8"
            />
        </div>
    );
}

export default TextInputPage;