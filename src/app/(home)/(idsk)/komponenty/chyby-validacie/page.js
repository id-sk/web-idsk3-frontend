'use client'

import Card from '@/app/(home)/_components/article/article';
import { ArticleCard } from '@eslovensko/idsk-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ErrorValidationPage = () => {
    return ( 
    <div className="component-page">
    <title>Chyby a validacie</title>
    <h1 className="my-8">
        Chyby a validácie
    </h1>
    <p className="text-2xl leading-9 mb-16">
        V tejto časti nájdete popísané pravidlá ako zobrazovať chyby a validácie v elektronickom formulári. V prípade, že používateľ zle vyplní formulár, zobrazí sa chyba a formulár nie je možné odoslať. Základné pravidlo pri zobrazovaní chýb a validácii je viditeľné zobraziť a vysvetliť chyby, ktoré nastali.
    </p>
    <div className="ml-2 mb-16">
        <Link href={'https://komponenty.idsk3.gov.sk/components/error-summary'}>
            <Card title="Kód komponentu" content="HTML verzia na prevzatie"/>
        </Link>
    </div>
    <h2 className="mb-4">
        Použitie chyby a validácie
    </h2>
    <p className="text-custom-19 leading-7 mb-8">
        Prehľad o chybách sa musí nachádzať v hornej časti stránky tak, aby bol viditeľný, keď sa stránka aktualizuje a pomocná technológia ju vedela ihneď prečítať .
    </p>
    <Image
        src="/images/chyby-validacie/priklad-pouzitia.svg"
        width={1100}
        height={250}
        quality={100}
        alt="použitie chyby a validácie"
        className='mb-8'
    />
    <h3 className="text-2xl leading-custom-35">
        Pýtajte sa jednu otázku na jednu stránku
    </h3>
    <p className="text-custom-19 leading-7 mb-8">
    Pre používateľov môže byť ťažké zorientovať sa na stránke po zobrazení chyby, najmä, ak sa na nej vyskytlo viacero chýb súčasne. Zjednodušte formuláre ich prepísaním, ak je to možné, rozdeľujte dlhé formuláre na niekoľko stránok, pričom na každej z nich sa pýtajte jednu otázku. Pri štruktúrovaní formulára zvážte aj kontext. Ak spolu žiadané informácie súvisia, je možné ich umiestniť na stránke viac, napríklad meno, priezvisko a číslo občianského preukazu.
    </p>
    <h3 className="text-2xl leading-custom-35">
        Zvýraznenie chýb vo formulároch
    </h3>
    <p className="text-custom-19 leading-7">
        Pre každú chybu:
    </p>
     <ul className="list-disc list-inside ml-4 text-custom-19 leading-7 mb-8">
        <li>Napíšte správu, ktorá pomôže používateľovi pochopiť, prečo sa chyba vyskytla a ako ju má odstrániť.</li>
        <li>Použite červený okraj na vizuálne prepojenie chybovej správy a otázky, ku ktorej sa chyba vzťahuje.</li>
        <li>Ak sa chyba vzťahuje na konkrétne textové polia v rámci otázky, zvýraznite ich aj červeným orámovaním.</li>
      </ul>
    <Image
        src="/images/chyby-validacie/priklad-formulara.svg"
        width={1100}
        height={250}
        quality={100}
        alt="zvýraznenie chýb vo formulároch"
        className='mb-8'
    />
    </div>
     );
}
 
export default ErrorValidationPage;
