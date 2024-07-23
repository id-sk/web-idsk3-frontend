'use client'

import { ArticleCard } from '@eslovensko/idsk-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BreadcrumbPage = () => {
    return (
        <div className="component-page">
            <title>Omrvinková navigácia</title>
            <h1 className="my-8">
                Omrvinková navigácia
            </h1>
            <p className="idsk-subtitle mb-16">
                Omrviková navigácia je spôsob, ako používateľom umožniť rýchle a jednoduché navigovanie v rámci webovej stránky alebo aplikácie. Ide o typ navigácie, ktorý ukazuje používateľom aktuálnu polohu v hierarchii stránok a umožňuje im rýchlo sa vrátiť na predchádzajúce úrovne.
            </p>
            <div className="mb-16">
                <Link href={'https://komponenty.idsk3.gov.sk/components/breadcrumbs/'}>
                    <ArticleCard>
                        <h4>Kód komponentu</h4>
                        <p className="my-1">HTML verzia na prevzatie</p>
                    </ArticleCard>
                </Link>
            </div>
            <h2 className="mb-4">
                Použitie omrvinkovej navigácie
            </h2>
            <p className="idsk-subtitle mb-8">
                Pri navrhovaní omrvinkovej navigácie je dôležité zabezpečiť, aby bola zreteľná a jednoduchá na používanie. Omrviková navigácia sa zvyčajne skladá z horizontálneho reťazca odkazov, ktorý začína domovskou stránkou a postupne ukazuje každú úroveň hierarchie stránok, až k aktuálnej polohe používateľa. Omrvinková navigácia je umiestnená vždy pod komponentom hlavička tak
                aby bola dostupná počas celej cesty používateľa rozhraním.
            </p>
            <Image
                src="/images/omrvinkova/pouzitie.svg"
                width={1100}
                height={250}
                quality={100}
                alt="použitie omrvinkovej navigácie"
                className="mt-4 mb-12"
            />
            <h2 className="mt-8 mb-4">
                Varianty
            </h2>
            <p className="idsk-subtitle mb-4">
                Komponent umožňuje použitie 2 variantov:
            </p>
            <ol className='idsk-subtitle mb-4'>
                <li>1. Základný stav</li>
                <li>2. Vybraný stav</li>
            </ol>
            <Image
                src="/images/omrvinkova/zakladny.svg"
                width={1100}
                height={250}
                quality={100}
                alt="základný stav"
                className="mt-4 mb-8"
            />
            <Image
                src="/images/omrvinkova/vybrany.svg"
                width={1100}
                height={250}
                quality={100}
                alt="vybraný stav"
                className="mt-4 mb-8"
            />
        </div>
    );
}

export default BreadcrumbPage;