'use client'

import Card from '@/app/(home)/_components/article/article';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Accordion = () => {
    return (
        <div className="component-page">
            <title>Akordeón</title>
            <h1 className="my-8">
                Akordeón
            </h1>
            <p className="idsk-subtitle mb-16">
                Komponent Akordeón sa využíva v prípade potreby zobraziť prehľad sekcií alebo skryť prehľad sekcií súvisiaceho obsahu. Je vhodný najmä pre používateľov, ktorí potrebujú vykonávať podobné úlohy z jedného miesta. Akordeón je ideálne použiť pre jednoduchý obsah a odkazy.
            </p>
            <div className="ml-2 mb-16">
                <Link href={'https://komponenty.idsk3.gov.sk/components/header/'}>
                <Card  
                title="Kód komponentu"
                content="HTML verzia na prevzatie"
                 />
                </Link>
            </div>
            <h2 className="mb-4">
                Použitie Akordeónu
            </h2>
            <p className="text-custom-19 tracking-wide leading-7 text-black max-md:max-w-full mb-8">
                Nadpis príslušnej lišty by mal byť v primeranej dĺžke, maximálne v 1 riadku a výstižne popisuje
                to čo sa v danom akordeóne nachádza. Detailnejšie informácie o obsahu čo je umiestené
                v akordeóne, dodefinujte v popise pod nadpisom. Akordeón najlepšie funguje pre jednoduché texty a odkazy. Nepoužívajte akordeón na obsah, ktorý je dôležitý pre všetkých používateľov.
            </p>
            <h3 className=" my-4">
                Správanie komponentu:
            </h3>
            <p className="text-custom-19 tracking-wide leading-7 text-black max-md:max-w-full mb-8">
                Klikateľný je riadok s nadpisom a ikonou po celej svojej dĺžke.
                Sekcia obsahu sa rozbalí alebo zbalí kliknutím na príslušný riadok.
                Rozbalenie ďalšej sekcie nemá vplyv na uzavretie iného, už otvoreného obsahu. Naraz môže byť otvorených viacero sekcií, používateľ si kliknutím sám určí, ktorú sekciu chce zbaliť alebo rozbaliť.
                Ikona sa mení podľa toho, či je obsah rozbalený alebo zbalený. Keď sa sekcia rozbalí, ikona sa zmení tak, aby indikovala možnosť zbalenia obsahu.
            </p>
            <h2 className="mt-8 mb-4">
                Varianty
            </h2>
            <p className="text-custom-19 tracking-wide leading-7 text-black max-md:max-w-full mb-4">
                Komponent umožňuje použitie 2 variantov:
            </p>
            <ol className='text-custom-19 tracking-wide leading-7 text-black max-md:max-w-full mb-4'>
                <li>1. Veľký akordeón</li>
                <li>2. Malý akordeón</li>
            </ol>
            <Image
                src="/images/akordeon/varianty-velky-maly.png"
                width={1100}
                height={250}
                quality={100}
                alt="varianty pola"
                className="mt-4 mb-8"
            />
            <h2 className="mt-8 mb-4">
                Nastavenie komponentu
            </h2>
            <p className="text-custom-19 tracking-wide leading-7 text-black max-md:max-w-full mb-4">
                1. Variant akordeónu zatvorený/otvorený
            </p>
            <Image
                src="/images/akordeon/nastavenie-zatvoreny-otvoreny.png"
                width={1100}
                height={250}
                quality={100}
                alt="varianty päty"
                className="mt-4 mb-8"
            />
            <p className="text-custom-19 tracking-wide leading-7 text-black max-md:max-w-full mb-4">
                2. Variant akordeónu s popisom/bez popisu
            </p>
            <Image
                src="/images/akordeon/variant-popis-bez.png"
                width={1100}
                height={250}
                quality={100}
                alt="zaškrtávacieho poľa s textom/bez textu"
                className="mt-4 mb-8"
            />
        </div>
    );
}

export default Accordion;