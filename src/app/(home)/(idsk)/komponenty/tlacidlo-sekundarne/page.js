'use client'

import { ArticleCard } from '@eslovensko/idsk-react';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react';

const ButtonPage = () => {
    return (
        <div className="component-page">
            <title>Tlačidlo - Sekundárne</title>
            <h1 className="my-8">
                Tlačidlo - Sekundárne
            </h1>
            <p className="idsk-subtitle mb-16">
            Sekundárne tlačidlo predstavuje menej výrazné akčné prvky, ktoré môžu byť potrebné v určitých situáciách alebo pri vedľajších úlohách. Tlačidlá sa zvyčajne nachádzajú v menej strategických oblastiach rozhrania používateľa a môžu mať menší význam pre používateľskú interakciu.
            </p>
            <h2 className="mb-4">
            Použitie sekundárnych tlačidiel 
            </h2>
            <p className="idsk-subtitle mb-8">
            Komponent používajte na vykonanie vedľajších úloh na stránke a vyvarujte sa použitiu príliš veľkého množstva sekundárnych tlačidiel. Použitie vysokého počtu tlačidiel môže byť pre používateľa mätúce a môže viesť k zblúdeniu na stránke. V prípade potreby použitia viacerých tlačidiel, odporúčame stránku zjednodušiť alebo jej obsah rozdeliť na ďalšie podstránky.
            </p>
            <h2 className="mt-8 mb-4">
                Varianty
            </h2>
            <p className="idsk-subtitle mb-4">
            Komponent umožňuje použitie 4 variantov:
            </p>
            <ol className='idsk-subtitle mb-4'>
                <li>1. Základný typ</li>
                <li>2. Úspešný typ</li>
                <li>3. Upozorňovací typ</li>
                <li>4. Kontrastný typ</li>
            </ol>
            <Image
                src="/images/button/sekundarne/varianty-sekundarnych-tlacidiel.png"
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
                1. Varianty tlačidla základný/s ikonou vľavo /s ikonou vprav
            </p>
            <Image
                src="/images/button/sekundarne/sekundarne-ikona.png"
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
                src="/images/button/sekundarne/sekundarne-aktivne.png"
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