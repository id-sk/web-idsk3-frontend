'use client'

import { ArticleCard } from '@eslovensko/idsk-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeaderAppPage = () => {
    return (
        <div className="component-page">
            <title>Hlavička webové aplikacie</title>
            <h1 className="my-8">
                Hlavička - webové aplikácie
            </h1>
            <p className="idsk-subtitle mb-16">
                Hlavička pre webové aplikácie (elektronické služby) podporuje jednotný vizuálny zážitok používateľa naprieč rozhraniami ekosystému štátu. Využíva sa iba pre rozhrania, ktoré vyžadujú autentifikáciu používateľa, ako
                sú elektronické služby, portály služieb a osobné zóny.
            </p>
            <div className="mb-16">
                <Link href={'https://komponenty.idsk3.gov.sk/components/header/'}>
                    <ArticleCard>
                        <h4>Kód komponentu</h4>
                        <p className="my-1">HTML verzia na prevzatie</p>
                    </ArticleCard>
                </Link>
            </div>
            <h2 className="mb-4">
                Použitie hlavičky
            </h2>
            <p className="itext-custom-19 tracking-wide leading-7 text-black max-md:max-w-full mb-8">
                Jednou z najdôležitejších úloh hlavičky je navigovať používateľa k hľadanému obsahu webovej aplikácie. Komponent obsahuje vždy hlavnú sekciu a podľa potreby môže obsahovať aj záhlavie, navigáciu a rozbaľovacie menu. Komponent hlavičky je staticky umiestnený v hornej časti obrazovky a počas posúvania  sa obsah roluje pod hlavičkou.
            </p>
            <h3 className="mb-8 mt-12">
                Záhlavie
            </h3>
            <p className="text-custom-19 tracking-wide leading-7 text-black max-md:max-w-full mb-4">
                Na ľavej strane záhlavia sa nachádza nápis, ktorý indikuje, že webové sídlo je oficiálnou stránkou verejnej správy spoločne s odkazom na hlavné webové sídlo správcu alebo na webové sídlo ústredného portálu verejnej správy. Výber jazyka sa vždy nachádza na pravej strane záhlavia.
            </p>
            <Image
                src="/images/hlavicka/zahlavie.png"
                width={1100}
                height={250}
                quality={100}
                alt="záhlavie"
            />
            <h3 className="mt-8 mb-4">
                Hlavná sekcia
            </h3>
            <p className="text-custom-19 tracking-wide leading-7 text-black max-md:max-w-full mb-4">
                Hlavná sekcia je povinná časť každej hlavičky. Hlavná sekcia hlavičky je zložená z <b>loga</b> na ľavej strane
                a <b>akčného panelu</b> na pravej strane. Logo v hlavičke sa riadi pravidlami pre domenové mená. V akčnom paneli je vytvorený priestor pre zobrazenie ikony profilu a doplnkové nadradené akcie ako napríklad notifikácie, podpora atď.
            </p>
            <ol className='itext-custom-19 tracking-wide leading-7 text-black max-md:max-w-full mb-4'>
                <li>1. S navigáciou</li>
                <li>2. Bez navigácie</li>
            </ol>
            <Image
                src="/images/hlavicka/webove/hlavna-sekcia-webove.png"
                width={1100}
                height={250}
                quality={100}
                alt="hlavná sekcia webové"
                className="mb-4"
            />
            <h3 className="mt-8 mb-4">
                Navigácia (menu)
            </h3>
            <p className="text-custom-19 tracking-wide leading-7 text-black max-md:max-w-full mb-4">
                V navigácií sa v prvej úrovni používa najviac päť položiek, ak používateľský prieskum nepreukáže inak.
                Do navigácie sa spravidla umiestňujú vecné oblasti alebo témy, na ktoré sa orgán riadenia špecializuje. Navigácia je umiestnená v strede hlavnej sekcie hlavičky. Položky v menu a podmenu vytvárajte za pomoci používateľských prieskumov. Znížite tým riziko, že do hlavičky zakomponujete časti, ktoré pre používateľa nie su relevantné.
            </p>
            <h2 className="my-4">
                Varianty
            </h2>
            <p className="text-custom-19 tracking-wide leading-7 text-black max-md:max-w-full mb-4">
                Komponent umožňuje použitie 2 variantov.
            </p>
            <p className="text-custom-19 tracking-wide leading-7 text-black max-md:max-w-full">
                1. <b>S navigáciou:</b> tento variant hlavičky používajte v prípade robustnejšej informačnej architektúry webovej aplikácie. Navigácia ponúka lepšiu orientáciu používateľa nad hlavnými časťami webovej aplikácie.
            </p>
            <p className="text-custom-19 tracking-wide leading-7 text-black max-md:max-w-full">
                2. <b>Bez navigácie:</b> využíva sa v prípade jednoduchšej webovej aplikácie (elektronickej služby) bez rozsiahlej informačnej architektúry.
            </p>
            <Image
                src="/images/hlavicka/webove/varianty-navigacie-bez.png"
                width={1100}
                height={250}
                quality={100}
                alt="varianty navigácie s navigáciou a bez"
                className="my-4"
            />
            <h2 className="mt-8 mb-4">
                Responzivita
            </h2>
            <p className="text-custom-19 tracking-wide leading-7 text-black max-md:max-w-full mb-4">
                Zobrazenie vybraných variantov komponentu hlavička na responzívnom zariadení. Počas posúvania obsahu ostáva hlavička staticky pripnutá v hornej časti obrazovky a obsah sa roluje pod hlavičku. Hlavná navigácia je umiestnená v rozbaľovacej ponuke, ktorej súčasťou je aj zobrazený profil, vyhľadávanie a príslušné akcie.
            </p>
            <Image
                src="/images/hlavicka/webove/responzivita-web.png"
                width={1100}
                height={250}
                quality={100}
                alt="responzivita"
                className="my-4"
            />
            <h3 className="mt-8 mb-4">
                Pravidlá pre doménové mená
            </h3>
            <p className="text-custom-19 tracking-wide leading-7 text-black max-md:max-w-full mb-4">
                Použitie variantu doménoveho mena pri responzívnej verzií slúži na efektívne využívanie úzkeho priestoru v hlavnej sekcii hlavičky na mobilných zariadeniach. Pre správne používanie domenových mien sa odporúčajú definovať krátke textové názvy, ktoré reprezentujú dané webové sídlo alebo OVM. Ukážky variantov sú uvedené na ilustráciách nižšie.
            </p>
            <Image
                src="/images/hlavicka/domenove-mena.png"
                width={1100}
                height={250}
                quality={100}
                alt="doménové mená"
                className="my-4"
            />
            <h3 className="mt-8 mb-4">
                Ako nepoužívať hlavičku
            </h3>
            <p className="text-custom-19 tracking-wide leading-7 text-black max-md:max-w-full mb-4">
                Neodporúča sa používať domenové meno z vyšším počtom znakov ako je 80 a ani kombináciu veľmi širokej verzie <b>loga</b> v kombinácii s textom.
            </p>
            <Image
                src="/images/hlavicka/ako-nepouzivat.png"
                width={1100}
                height={250}
                quality={100}
                alt="ako nepoužívať hlavičku"
                className="my-4"
            />
        </div>
    );
}

export default HeaderAppPage;