'use client'

import Card from '@/app/(home)/_components/article/article';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react';

const ButtonPage = () => {
    return (
        <div className="component-page">
            <title>Tlačidlo primárne</title>
            <h1 className="my-8">
                Tlačidlo - Primárne
            </h1>
            <p className="idsk-subtitle mb-16">
                Primárne tlačidlo predstavuje hlavné akčné prvky, ktoré majú najväčší vplyv na používateľskú interakciu. Tlačidlá sú obvykle umiestnené v dôležitých a strategických oblastiach rozhrania používateľa a majú významný vplyv na používateľskú skúsenosť.
            </p>
            <div className="ml-2 mb-16">
                <Link href={'https://komponenty.idsk3.gov.sk/components/button/'}>
                    <Card title="Kód komponentu" content="HTML verzia na prevzatie"/>
                </Link>
            </div>
            <h2 className="mb-4">
                Použitie primárnych tlačidiel
            </h2>
            <p className="text-custom-19 tracking-wide leading-7 mb-8">
                Používajú sa na vykonanie hlavnej akcie na stránke. Snažte sa vyhnúť použitiu viacerých hlavných tlačidiel na jednej stránke. Viaceré tlačidlá môžu u používateľa vyvolať zmätenosť a problémy s výberom tlačidla k použitiu.
            </p>
            <h2 className="mt-8 mb-4">
                Varianty
            </h2>
            <p className="text-custom-19 tracking-wide leading-7 mb-4">
                Komponent umožňuje použitie 3 variantov:
            </p>
            <ol className='text-custom-19 tracking-wide leading-7 mb-8'>
                <li>1. Základný typ</li>
                <li>2. Úspešný typ</li>
                <li>3. Upozorňovací typ</li>
            </ol>
            <Image
                src="/images/button/primarne/varianty-primarnych-tlacidiel.svg"
                width={1100}
                height={250}
                quality={100}
                alt="varianty primárnych tlačidiel"
                className="mt-4 mb-8"
            />
            <h2 className="mt-12 mb-8">
                Nastavenie
            </h2>
            <p className="text-custom-19 tracking-wide leading-7 ">
                Variatny tlačidla:
            </p>
            <ol className='text-custom-19 tracking-wide leading-7 list-disc list-inside mb-4'>
              <li>základný (bez ikony)</li>
              <li>s ikonou vľavo</li>
              <li>s ikonou vpravo</li>
            </ol>
            <Image
                src="/images/button/primarne/s-ikonou.svg"
                width={1100}
                height={250}
                quality={100}
                alt="základný s ikonou vľavo s ikonou vprav"
                className="mt-4 mb-8"
            />
            <p className="text-custom-19 tracking-wide leading-7 ">
                Stavy tlačidla:
            </p>
            <ol className='text-custom-19 tracking-wide leading-7 list-disc list-inside mb-4'>
              <li>aktívny</li>
              <li>vybraný</li>
              <li>stlačený</li>
              <li>neaktívny</li>
            </ol>
            <Image
                src="/images/button/primarne/stav.svg"
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