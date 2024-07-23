'use client'

import { ArticleCard } from '@eslovensko/idsk-react';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react';

const DropdownPage = () => {
    return (
        <div className="component-page">
            <h1 className="my-8">
                Rozbaľovací zoznam
            </h1>
            <p className="idsk-subtitle mb-16">
                Komponent rozbaľovací zoznam sa zobrazuje po kliku na dátové rozbaľovacie pole alebo tlačidlo
                s rozbaľovacou ikonou vpravo. Poskytuje zoznam akcií alebo možností, ktoré je možné použiť.
            </p>
            <div className="mb-16">
                <Link href={'https://komponenty.idsk3.gov.sk/components/checkboxes/'}>
                    <ArticleCard>
                        <h4>Kód komponentu</h4>
                        <p className="my-1">HTML verzia na prevzatie</p>
                    </ArticleCard>
                </Link>
            </div>
            <h2 className="mb-4">
                Použitie rozbaľovacieho zoznamu
            </h2>
            <p className="idsk-subtitle mb-8">
                Používateľ má možnosť kliknúť na dátové rozbaľovacie pole a zobraziť si zoznam možností.
                Ak je potrebné zobraziť veľké množstvo možností, môže sa použiť rolovanie pre pohodlnejšie prechádzanie zoznamu.
            </p>
            <p className="idsk-subtitle mb-8">
                Rozbaľovací zoznam môže mať dva stavy – zatvorený a otvorený. V zatvorenom stave by mal byť zobrazený výberový prvok
                (napr. tlačidlo alebo dátové rozbaľovacie pole), ktorý umožní používateľovi zobraziť si zoznam možností.
                V otvorenom stave by mal byť zobrazený zoznam možností, ktoré je možné prechádzať a vyberať. Po kliku na jednu z možností dôjde k zmene na aktívny stav.
            </p>
            <Image
                src="/images/dropdown/pouzitie-rozbalovacieho-zoznamu.png"
                width={1100}
                height={250}
                quality={100}
                alt="použitie rozbalovacieho zoznamu"
            />
            <h2 className="mt-8 mb-4">
                Varianty
            </h2>
            <p className="idsk-subtitle mb-4">
                Komponent umožňuje použitie 4 variantov:
            </p>
            <ol className='idsk-subtitle mb-4'>
                <li>1. Základný stav</li>
                <li>2. Aktívny stav</li>
                <li>3. Vybraný stav</li>
                <li>4. Neaktívny stav</li>
            </ol>
            <Image
                src="/images/dropdown/varianty-rozbalovacieho-menu.png"
                width={1100}
                height={250}
                quality={100}
                alt="varianty päty"
                className="mt-4 mb-8"
            />
        </div>
    );
}

export default DropdownPage;