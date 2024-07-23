'use client'

import { ArticleCard } from '@eslovensko/idsk-react';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react';

const InfobarPage = () => {
    return (
        <div className="component-page">
            <title>Informačná lišta</title>
            <h1 className="my-8">
                Informačná lišta - Upozornenie
            </h1>
            <p className="idsk-subtitle mb-16">
                Informačná lišta slúži na oboznámenie alebo upozornenie použivateľa o nových informáciach v ramci používateľského rozhrania. Umiestnenie informačnej lište je zväčšia v hornej časti obsahu najmä kvôli vizuálne priorite.
            </p>
            <div className="mb-16">
                <Link href={'https://komponenty.idsk3.gov.sk/components/notification-banner/'}>
                    <ArticleCard>
                        <h4>Kód komponentu</h4>
                        <p className="my-1">HTML verzia na prevzatie</p>
                    </ArticleCard>
                </Link>
            </div>
            <h2 className="mb-4">
                Použitie upozoňovacej informačnej lišty
            </h2>
            <p className="idsk-subtitle mb-8">
                Lištu použite v prípade, že chcete niečo zdôrazniť alebo na niečo upozorniť pomocou rôznej vizuálnej alebo informačnej priority.
            </p>
            <ol className='idsk-subtitle mb-4'>
                <li>1. Základný typ - Označuje neutrálnu informatívnu zmenu alebo akciu.</li>
                <li>2. Upozorňovací typ - Poskytuje informáciu, ktorá vás upozorňuje na problém/chybu.</li>
                <li>3. Oznamovací typ - Označuje varovanie, ktoré si môže vyžadovať pozornosť.</li>
                <li>4. Úspešný typ - Označuje úspešnú alebo pozitívnu akciu.</li>
            </ol>
            <h2 className="mt-8 mb-4">
                Varianty
            </h2>
            <p className="idsk-subtitle mb-4">
                Komponent umožňuje použitie 4 variantov:
            </p>
            <ol className='idsk-subtitle mb-4'>
                <li>1. Základný typ</li>
                <li>2. Upozorňovací typ</li>
                <li>3. Oznamovací typ</li>
                <li>4. Úspešný typ</li>
            </ol>
            <Image
                src="/images/info-lista/varianty-info-listy.svg"
                width={1100}
                height={250}
                quality={100}
                alt="varianty informačnej lišty"
                className="mt-4 mb-8"
            />
            <h2 className="mt-8 mb-4">
                Nastavenie
            </h2>
            <p className="idsk-subtitle mb-4">
                1. Variant informačnej lišty s ikonou/s tlačidlom.
            </p>
            <Image
                src="/images/info-lista/s-ikonou.svg"
                width={1100}
                height={250}
                quality={100}
                alt="variant informačnej lišty s ikonou/s tlačidlom."
                className="mt-4 mb-8"
            />
            <p className="idsk-subtitle mb-4">
                2. Variant informačnej lišty s nadpisom/bez nadpisu.
            </p>
            <Image
                src="/images/info-lista/s-nadpisom-bez.svg"
                width={1100}
                height={250}
                quality={100}
                alt="variant informačnej lišty s nadpisom/bez nadpisu."
                className="mt-4 mb-8"
            />

            {/* Oznámenie */}
            <h1 className="mt-20 mb-8">
                Informačná lišta - Oznámenie
            </h1>
            <p className="idsk-subtitle mb-16">
                Informačná lišta slúži na oboznámenie alebo upozornenie použivateľa o nových informáciach v ramci používateľského rozhrania. Umiestnenie informačnej lište je zväčšia v hornej časti obsahu najmä kvôli vizuálne priorite. Oznámenie zvyčajne slúži na zobrazenie permanentnej informácie pre používateľa.
            </p>
            <h2 className="mb-4">
                Použitie oznamovacej informačnej lišty
            </h2>
            <p className="idsk-subtitle mb-8">
                Lištu použite v prípade, že chcete niečo zdôrazniť alebo na niečo upozorniť pomocou rôznej vizuálnej alebo informačnej priority.
            </p>
            <ol className='idsk-subtitle mb-4'>
                <li>1. Základný typ - Označuje neutrálnu informatívnu zmenu alebo akciu.</li>
                <li>2. Upozorňovací typ - Poskytuje informáciu, ktorá vás upozorňuje na problém/chybu.</li>
                <li>3. Oznamovací typ - Označuje varovanie, ktoré si môže vyžadovať pozornosť.</li>
            </ol>
            <h2 className="mt-8 mb-4">
                Varianty
            </h2>
            <p className="idsk-subtitle mb-4">
                Komponent umožňuje použitie 3 variantov:
            </p>
            <ol className='idsk-subtitle mb-4'>
                <li>1. Základný typ</li>
                <li>2. Upozorňovací typ</li>
                <li>3. Oznamovací typ</li>
            </ol>
            <Image
                src="/images/info-lista/varianty-oznamovacej.svg"
                width={1100}
                height={250}
                quality={100}
                alt="varianty oznamovacej informačnej lišty"
                className="mt-4 mb-8"
            />
            <h2 className="mt-8 mb-4">
                Nastavenie
            </h2>
            <p className="idsk-subtitle mb-4">
                1. Variant informačnej lišty s ikonou/s tlačidlom.
            </p>
            <Image
                src="/images/info-lista/oznamovacia-s-ikonou.svg"
                width={1100}
                height={250}
                quality={100}
                alt="variant informačnej lišty s ikonou/s tlačidlom."
                className="mt-4 mb-8"
            />
        </div>
    );
}

export default InfobarPage;