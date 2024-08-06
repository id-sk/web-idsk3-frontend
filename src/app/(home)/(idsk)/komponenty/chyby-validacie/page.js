'use client'

import React from "react";
import Image from 'next/image';

const ErrorValidationPage = () => {
    return ( 
    <div className="component-page">
    <title>Chyby a validacie</title>
    <h1 className="my-8">
        Chyby a validácie
    </h1>
    <p className="idsk-subtitle mb-16">
        V tejto časti nájdete popísané pravidlá ako zobrazovať chyby a validácie v elektronickom formulári. V prípade, že používateľ zle vyplní formulár, zobrazí sa chyba a formulár nie je možné odoslať. Základné pravidlo pri zobrazovaní chýb a validácii je viditeľné zobraziť a vysvetliť chyby, ktoré nastali.
    </p>
    <h2 className="mb-4">
        Použitie chyby a validácie
    </h2>
    <p className="idsk-subtitle mb-8">
        Prehľad o chybách sa musí nachádzať v hornej časti stránky tak, aby bol viditeľný, keď sa stránka aktualizuje a pomocná technológia ju vedela ihneď prečítať .
    </p>
    <h3 className="idsk-subtitle">
        Pýtajte sa jednu otázku na jednu stránku
    </h3>
    <p className="idsk-subtitle mb-8">
        Pre používateľov môže byť ťažké zorientovať sa na stránke po zobrazení chyby, najmä, ak sa na nej vyskytlo viacero chýb súčasne.
        Zjednodušte formuláre ich prepísaním, ak je to možné, rozdeľujte dlhé formuláre na niekoľko stránok, pričom na každej z nich sa pýtajte jednu otázku.
        Pri štruktúrovaní formulára zvážte aj kontext. Ak spolu žiadané informácie súvisia, je možné ich umiestniť na stránke viac, napríklad meno, priezvisko a číslo občianského preukazu.
    </p>
    <h3 className="idsk-subtitle">
        Zvýraznenie chýb vo formulároch
    </h3>
    <p className="idsk-subtitle mb-8">
        Pre každú chybu:
        Napíšte správu, ktorá pomôže používateľovi pochopiť, prečo sa chyba vyskytla a ako ju má odstrániť.
        Použite červený okraj na vizuálne prepojenie chybovej správy a otázky, ku ktorej sa chyba vzťahuje.
        Ak sa chyba vzťahuje na konkrétne textové polia v rámci otázky, zvýraznite ich aj červeným orámovaním.
    </p>
    <Image
        src="/images/textove-pole/priklad-formulara.svg"
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