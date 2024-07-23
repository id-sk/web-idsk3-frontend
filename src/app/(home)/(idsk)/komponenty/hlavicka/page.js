'use client'

import { ArticleCard } from '@eslovensko/idsk-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeaderPage = () => {
    return (
        <div className="component-page">
            <h1 className="my-8">
                Hlavička - webové sídla
            </h1>
            <p className="idsk-subtitle mb-16">
                Hlavička pre webové sídla je základný prvok jednotného dizajnového systému Slovenska,
                ktorý je postavený tak, aby používateľom poskytoval jednotný vizuálny, ale aj interakčný
                zážitok naprieč celým ekosystémom štátu.
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
            <p className="idsk-subtitle mb-8">
                Jednou z najdôležitejších úloh hlavičky je navigovať používateľa k hľadanému obsahu webového sídla.
                Komponent obsahuje vždy hlavnú sekciu a podľa potreby môže byť jeho súčasťou aj záhlavie, navigácia a rozbaľovacie menu.
                Pri posúvaní sa obsahom webového sídla dochádza súbežne k rolovaniu hlavičky.
            </p>
            <h3 className="mb-8 mt-12">
                Záhlavie
            </h3>
            <p className="idsk-subtitle mb-4">
                Na ľavej strane záhlavia sa nachádza nápis, ktorý indikuje, že webové sídlo je oficiálnou stránkou verejnej správy spoločne s
                odkazom na hlavné webové sídlo správcu alebo na webové sídlo ústredného portálu verejnej správy. Výber jazyka sa vždy nachádza
                na pravej strane záhlavia.
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
            <p className="idsk-subtitle mb-4">
                Hlavná sekcia je povinná časť každej hlavičky. Hlavná sekcia hlavičky je zložená z <b>loga</b> na ľavej strane
                a <b>akčného panelu</b> na pravej strane. Logo v hlavičke sa riadi pravidlami pre domenové mená. V časti akčný panel sa nachádzajú
                najviac dve tlačidlá a vyhľadávacie pole. Panel ponúka tiež variant po prihlásení koncového používateľa.
                V tom prípade je na akčnom paneli zobrazené prihlasovacie meno koncového používateľa, za predpokladu,
                že daný portál alebo webové sídlo poskytuje túto možnosť.
            </p>
            <ol className='idsk-subtitle mb-4'>
                <li>1. Bez akčného panelu</li>
                <li>2. S akčným panelom</li>
                <li>3. S akčným panelom prihlásený používateľ</li>
            </ol>
            <Image
                src="/images/hlavicka/hlavna-sekcia.png"
                width={1100}
                height={250}
                quality={100}
                alt="hlavná sekcia"
                className="mb-4"
            />
            <h3 className="mt-8 mb-4">
                Navigácia (menu)
            </h3>
            <p className="idsk-subtitle mb-4">
                V navigácií sa v prvej úrovni používa najviac päť položiek, ak používateľský prieskum nepreukáže inak.
                Do navigácie sa spravidla umiestňujú vecné oblasti alebo témy, na ktoré sa orgán riadenia špecializuje.
                V prípade varianty hlavička pre elektronické služby sa navigácia nachádza v hlavnej sekcii hlavičky. Položky
                v menu a podmenu vytvárajte za pomoci používateľských prieskumov. Znížite tým riziko, že do hlavičky zakomponujete časti,
                ktoré pre používateľa nie su relevantné.
            </p>
            <Image
                src="/images/hlavicka/navigacia-menu.png"
                width={1100}
                height={250}
                quality={100}
                alt="navigácia menu"
                className="mb-4"
            />
            <h2 className="my-4">
                Varianty
            </h2>
            <p className="idsk-subtitle mb-4">
                Komponent umožňuje použitie 4 variantov.
            </p>
            <p className="idsk-subtitle">
                1. <b>S navigáciou:</b> tento variant hlavičky používajte v prípade robustnejšej informačnej architekúry webového sídla.
                Navigácia ponúka lepšiu orientáciu používateľa nad hlavnými časťami webu.
            </p>
            <p className="idsk-subtitle">
                2. <b>Bez navigácie:</b> využíva sa v prípade jednoduchšieho webového sídla bez rozsiahlej informačnej architektúry.
            </p>
            <Image
                src="/images/hlavicka/varianty-navigacie.png"
                width={1100}
                height={250}
                quality={100}
                alt="varianty navigácie"
                className="my-4"
            />
            <p className="idsk-subtitle">
                3. <b>Neprihlásený používateľ:</b> používa sa v prípade, že webové sídlo neposkytuje používateľom možnosť prihlásenia resp.
                zobrazuje stav hlavičky pred prihlásením.
            </p>
            <p className="idsk-subtitle">
                4. <b>Prihlásený používateľ:</b> využíva sa v prípade, že webové sídlo poskytuje používateľom možnosť prihlásiť sa do profilu/osobnej zóny.
            </p>
            <Image
                src="/images/hlavicka/varianty-prihlasenie.png"
                width={1100}
                height={250}
                quality={100}
                alt="varianty prihlásenia"
                className="my-4"
            />
            <h2 className="mt-8 mb-4">
                Responzivita
            </h2>
            <p className="idsk-subtitle mb-4">
                Zobrazenie vybraných variantov komponentu hlavička na responzívnom zariadení. Počas posúvania obsahu ostáva hlavička staticky pripnutá
                v hornej časti obrazovky, obsah sa roluje pod hlavičku. Hlavná navigácia je umiestnená v rozbaľovacej ponuke, ktorej súčasťou je aj
                zobrazený profil, vyhľadávanie a príslušné akcie. Varianta hlavičky s rozbaleným menu obsahuje v spodnej časti dve primárne tlačidla.
            </p>
            <Image
                src="/images/hlavicka/responzivita.png"
                width={1100}
                height={250}
                quality={100}
                alt="responzivita"
                className="my-4"
            />
            <h3 className="mt-8 mb-4">
                Pravidlá pre doménové mená
            </h3>
            <p className="idsk-subtitle mb-4">
                Použitie variantu doménového mena pri responzívnej verzií slúži na efektívne využívanie úzkeho priestoru v hlavnej sekcii hlavičky na
                mobilných zariadeniach. Pre správne používanie domenových mien sa odporúčajú definovať krátke textové názvy, ktoré reprezentujú dané
                webové sídlo alebo OVM. Ukážky variantov sú uvedené na ilustráciách nižšie.
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
            <p className="idsk-subtitle mb-4">
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


            <h1 className="mt-20 mb-8">
                Hlavička - webové aplikácie
            </h1>
            <p className="idsk-subtitle mb-16">
                Hlavička pre webové aplikácie (elektronické služby) podporuje jednotný vizuálny zážitok používateľa naprieč rozhraniami ekosystému štátu. Využíva sa iba pre rozhrania, ktoré vyžadujú autentifikáciu používateľa, ako
                sú elektronické služby, portály služieb a osobné zóny.
            </p>
            <h2 className="mb-4">
                Použitie hlavičky
            </h2>
            <p className="idsk-subtitle mb-8">
                Jednou z najdôležitejších úloh hlavičky je navigovať používateľa k hľadanému obsahu webovej aplikácie. Komponent obsahuje vždy hlavnú sekciu a podľa potreby môže obsahovať aj záhlavie, navigáciu a rozbaľovacie menu. Komponent hlavičky je staticky umiestnený v hornej časti obrazovky a počas posúvania  sa obsah roluje pod hlavičkou.
            </p>
            <h3 className="mb-8 mt-12">
                Záhlavie
            </h3>
            <p className="idsk-subtitle mb-4">
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
            <p className="idsk-subtitle mb-4">
                Hlavná sekcia je povinná časť každej hlavičky. Hlavná sekcia hlavičky je zložená z <b>loga</b> na ľavej strane
                a <b>akčného panelu</b> na pravej strane. Logo v hlavičke sa riadi pravidlami pre domenové mená. V akčnom paneli je vytvorený priestor pre zobrazenie ikony profilu a doplnkové nadradené akcie ako napríklad notifikácie, podpora atď.
            </p>
            <ol className='idsk-subtitle mb-4'>
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
            <p className="idsk-subtitle mb-4">
                V navigácií sa v prvej úrovni používa najviac päť položiek, ak používateľský prieskum nepreukáže inak.
                Do navigácie sa spravidla umiestňujú vecné oblasti alebo témy, na ktoré sa orgán riadenia špecializuje. Navigácia je umiestnená v strede hlavnej sekcie hlavičky. Položky v menu a podmenu vytvárajte za pomoci používateľských prieskumov. Znížite tým riziko, že do hlavičky zakomponujete časti, ktoré pre používateľa nie su relevantné.
            </p>
            <h2 className="my-4">
                Varianty
            </h2>
            <p className="idsk-subtitle mb-4">
                Komponent umožňuje použitie 2 variantov.
            </p>
            <p className="idsk-subtitle">
                1. <b>S navigáciou:</b> tento variant hlavičky používajte v prípade robustnejšej informačnej architektúry webovej aplikácie. Navigácia ponúka lepšiu orientáciu používateľa nad hlavnými časťami webovej aplikácie.
            </p>
            <p className="idsk-subtitle">
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
            <p className="idsk-subtitle mb-4">
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
            <p className="idsk-subtitle mb-4">
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
            <p className="idsk-subtitle mb-4">
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

export default HeaderPage;