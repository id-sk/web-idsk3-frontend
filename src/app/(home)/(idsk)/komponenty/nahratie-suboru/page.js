'use client'

import Image from 'next/image'
import React from 'react';

const TextUploadPage = () => {
    return (
        <div className="component-page">
            <title>Pole pre nahratie súboru</title>
            <h1 className="my-8">
                Pole pre nahratie súboru
            </h1>
            <p className="idsk-subtitle mb-16">
                Pole pre nahratie súboru je interaktívny prvok, ktorý umožňuje používateľovi nahrať súbor na webové sídlo. Umožňuje používateľom nahrať súbory, ako sú napríklad obrázky, dokumenty. Okrem tlačidla pre nahratie súboru môže byť vhodné pridať aj textové popisy alebo iné prvky na vysvetlenie, ktoré typy súborov môžu byť nahrané resp na vysvetlenie postupu nahrávania súborov.
            </p>
            <h2 className="mb-4">
                Použitie poľa pre nahratie súboru
            </h2>
            <p className="text-custom-19 tracking-wide leading-7 text-black mb-6">
                Komponent pre nahratie súborov je grafický prvok, ktorý umožňuje užívateľom jednoducho nahrať súbory na server. Tento komponent obsahuje oblasť, na ktorú užívatelia môžu pretiahnuť súbory alebo majú možnosť kliknúť na tlačidlo pre výber súborov z ich počítača.
            </p>
            <p className="text-custom-19 tracking-wide leading-7 text-black mb-2">
                Pole pre nahratie súboru môže byť použité pre rôzne typy súborov vrátane obrázkov, dokumentov alebo zvukových nahrávok. Po nahraní súborov je zobrazený náhľad nahratých súborov. Pri výskyte problému pri nahrávaní, je používateľ informovaný spolu so správou o type problému.
                Druhý variant komponentu má rovnaké použitie ako variant prvý, ibaže tento je implemetovaný bez použitia skriptovacieho jazyka Javascript.
            </p>
            <h2 className="mt-16 mb-4">
                Varianty
            </h2>
            <p className="text-custom-19 tracking-wide leading-7 text-black">
                Komponent umožňuje použitie 2 variantov:
            </p>
            <ol className='text-custom-19 tracking-wide leading-7 text-black mb-8'>
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
            <p className="text-custom-19 tracking-wide leading-7 text-black mb-4">
                Komponent pole pre nahratie súboru umožňuje použitie 4 variantov:
            </p>
            <ol className='text-custom-19 tracking-wide leading-7 text-black mb-4'>
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
            <p className="text-custom-19 tracking-wide leading-7 text-black mb-4">
                Pole pre nahratie súboru bez javascriptu poskytuje 3 varianty:
            </p>
            <ol className='text-custom-19 tracking-wide leading-7 text-black mb-4'>
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

export default TextUploadPage;