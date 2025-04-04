'use client'

import React from "react";


const PrincipyPage = () => {
    return (
        <div className="flex flex-col my-8 max-w-[1000px]">
            <title>Princípy</title>
            <header>
                <h1 className="text-5xl font-black text-black leading-[55.2px] max-md:mr-1 max-md:max-w-full max-md:text-4xl">
                    10 princípov vytvárania služieb podľa IDSK
                </h1>
            </header>
            <main id="main-content" role="main">
                <div className="my-4 text-2xl leading-9 tracking-wide text-black max-md:max-w-full">
                    <ol className="list-decimal list-inside">
                        <li>
                            <a
                                href="#uzitocnost"
                            >
                                Začnite potrebami používateľov (princíp užitočnosti)
                            </a>
                        </li>
                        <li>
                            <a
                                href="#stabilita"
                            >
                                Opätovne používajte a zdieľajte (princíp stability a otvorenosti)
                            </a>
                        </li>
                        <li>
                            <a
                                href="#realnost"
                            >
                                Inšpirujte sa realitou (princíp reálnosti)
                            </a>
                        </li>
                        <li>
                            <a
                                href="#jednoduchost"
                            >
                                Náročná tvorba vedie k jednoduchým službám (princíp jednoduchosti)
                            </a>
                        </li>
                        <li>
                            <a
                                href="#agilita"
                            >
                                Začnite v malom (princíp agility)
                            </a>
                        </li>
                        <li>
                            <a
                                href="#pristupnost"
                            >
                                IDSK je pre každého (princíp prístupnosti)
                            </a>
                        </li>
                        <li>
                            <a
                                href="#kontext"
                            >
                                Rešpektovanie kontextu okolnosti použitia (princíp kontextu)
                            </a>
                        </li>
                        <li>
                            <a
                                href="#holistika"
                            >
                                Vytvárajte elektronické služby, nie webové stránky (princíp
                                holistického pohľadu)
                            </a>
                        </li>
                        <li>
                            <a
                                href="#konzistentnost"
                            >
                                Buďte konzistentní (princíp konzistentnosti)
                            </a>
                        </li>
                        <li className="-mx-2">
                            <a
                                href="#otvorenost"
                            >
                                Tvorte otvorene, zvýšite tým kvalitu (princíp otvorenosti)
                            </a>
                        </li>
                    </ol>
                </div>
                <h2 id="uzitocnost" className="mt-8 text-4xl font-black text-black max-md:max-w-full">
                    1. Začnite potrebami používateľov (princíp užitočnosti)
                </h2>
                <p className="mt-8 text-custom-19 tracking-wide leading-7 text-black max-md:mr-1 max-md:max-w-full">
                    Dizajn služby začína identifikáciou potrieb používateľov. Ak neviete,
                    aké sú potreby používateľov, nepodarí sa vám vytvoriť správnu službu.
                    Nevychádzajte z domnienok. Používateľský prieskum, analýza dát a
                    informácie priamo od používateľov vám pomôžu vybudovať zázemie,
                    na ktorom môžete postaviť službu, ktorá bude spĺňať svoj účel a bude
                    užitočná.
                </p>
                <h2 id="stabilita" className="mt-8 text-4xl font-black text-black max-md:max-w-full">
                    2. Opätovne používajte a zdieľajte (princíp stability a otvorenosti)
                </h2>
                <p className="mt-8 text-custom-19 tracking-wide leading-7 text-black max-md:mr-1 max-md:max-w-full">
                    Platformy a registre je dôležité vytvárať tak, aby tvorili funkčný
                    nemenný základ, ktorý je opätovne použiteľný. Poskytovanie a vzájomné
                    zdieľanie zdrojov môže výrazne uľahčiť prácu ďalším tvorcom
                    elektronických služieb.
                </p>
                <h2 id="realnost" className="mt-8 text-4xl font-black text-black max-md:max-w-full">
                    3. Inšpirujte sa realitou (princíp reálnosti)
                </h2>
                <p className="mt-8 text-custom-19 tracking-wide leading-7 text-black max-md:mr-1 max-md:max-w-full">
                    Pri vytváraní elektronických služieb môžete vychádzať zo spôsobov
                    používania existujúcich služieb v reálnom svete. Aby bola služba
                    kvalitná, pokračujte v jej dizajnovaní aj po jej dokončení, a to
                    na základe informácii od používateľov. Ideálnym spôsobom je
                    pred zavedením finálnej verzie služby spustenie jej testovacej verzie.
                    Testuje s používateľmi až dovtedy kým bude služba pripravená na jej
                    reálne používanie. Základným nástrojom každej elektronickej služby je
                    dátová analytika, ktorá by mala byť jednoducho čitateľná a neustále
                    zapnutá.
                </p>
                <h2 id="jednoduchost" className="mt-8 text-4xl font-black text-black max-md:max-w-full">
                    4. Náročná tvorba vedie k jednoduchým službám (princíp jednoduchosti)
                </h2>
                <p className="mt-8 text-custom-19 tracking-wide leading-7 text-black max-md:mr-1 max-md:max-w-full">
                    Elektronizácia je príležitosťou na zjednodušenie služieb používateľom.
                    Pri dizajne služieb vnímajte širší kontext, nielen existujúci postup.
                    Investujte čas do opätovného prepracovania procesov a neuspokojte sa
                    s názorom, ktorý zachováva existujúci stav.
                </p>
                <h2 id="agilita" className="mt-8 text-4xl font-black text-black max-md:max-w-full">
                    5. Začnite v malom (princíp agility)
                </h2>
                <p className="mt-8 text-custom-19 tracking-wide leading-7 text-black max-md:mr-1 max-md:max-w-full">
                    Sprístupnite používateľom svoju službu čo najskôr a získajte spätnú
                    väzbu od koncových používateľov. Je lepšie rozvíjať službu postupne a
                    po malých častiach, ako spúšťať veľké celky. Znížite tým riziká a
                    získate cenné informácie, ktoré môžu ovplyvniť vaše ďalšie investície
                    do rozvoja.
                </p>
                <h2 id="pristupnost" className="mt-8 text-4xl font-black text-black max-md:max-w-full">
                    6. IDSK je pre každého (princíp prístupnosti)
                </h2>
                <p className="mt-8 text-custom-19 tracking-wide leading-7 text-black max-md:mr-1 max-md:max-w-full">
                    Prístupný dizajn je dobrý dizajn. Elektronické služby vytvorené podľa
                    IDSK by mali byť inkluzívne, zrozumiteľné a jednoducho čitateľné. Je
                    potrebné si pripomínať, že elektronické služby sa vytvárajú s konkrétnym
                    účelom, ako odpoveď na konkrétne potreby spoločnosti a na používanie
                    pre konkrétnych ľudí. Medzi používateľmi sú aj takí, ktorí nepoužívajú
                    informačné technológie každý deň. Ľudia ktorí najviac potrebujú naše
                    služby sú často ľudia, ktorým sa zdá ich používanie najťažšie. Práve
                    tieto osoby by mali tvoriť časť testovacej skupiny.
                </p>
                <h2 id="kontext" className="mt-8 text-4xl font-black text-black max-md:max-w-full">
                    7. Rešpektovanie kontextu okolnosti použitia (princíp kontextu)
                </h2>
                <p className="mt-8 text-custom-19 tracking-wide leading-7 text-black max-md:mr-1 max-md:max-w-full">
                    Pri tvorbe elektronických služieb je potrebné zohľadňovať okolnosti a
                    kontext, v ktorom ľudia služby budú používať. Dizajn musí adresovať
                    rozdielne potreby podľa času, miesta a zariadenia, v rámci ktorých sa
                    bude služba primárne vykonávať.
                </p>
                <h2 id="holistika" className="mt-8 text-4xl font-black text-black max-md:max-w-full">
                    8. Vytvárajte elektronické služby, nie webové stránky (princíp
                    holistického pohľadu)
                </h2>
                <p className="mt-8 text-custom-19 tracking-wide leading-7 text-black max-md:mr-1 max-md:max-w-full">
                    Pri tvorbe služby vnímajte ich multikanálový kontext. Netvoríte len
                    webovú stránku, ale navrhujete zážitok používateľa naprieč rôznymi
                    digitálnymi aj nedigitálnymi kanálmi. Zohľadnite zistenia
                    zo zákazníckeho prieskumu aj v iných kanáloch, aby ste vytvorili
                    kvalitnejšiu službu.
                </p>
                <h2 id="konzistentnost" className="mt-8 text-4xl font-black text-black max-md:max-w-full">
                    9. Buďte konzistentní (princíp konzistentnosti)
                </h2>
                <p className="mt-8 text-custom-19 tracking-wide leading-7 text-black max-md:mr-1 max-md:max-w-full">
                    Princíp konzistentnosti spočíva v používaní rovnakého jazyka, výrazov
                    uvedených v slovníku a rovnakých dizajnových vzorov. Uplatňovaním tohto
                    princípu sa pri tvorbe služieb zabezpečí jednak vizuálna jednotnosť a
                    tiež uistenie používateľa, že skutočne stále používa službu verejnej
                    správy. Navyše, keď budú všetky služby tvorené jedným spôsobom,
                    používateľ nadobudne zručnosť v ich používaní. V takom prípade ich bude
                    používať opakovane a tieto služby budú pre neho skutočne efektívnym
                    spôsobom využívania potrebných služieb.
                </p>
                <h2 id="otvorenost" className="mt-8 text-4xl font-black text-black max-md:max-w-full">
                    10. Tvorte otvorene, zvýšite tým kvalitu (princíp otvorenosti)
                </h2>
                <p className="mt-8 text-custom-19 tracking-wide leading-7 text-black max-md:mr-1 max-md:max-w-full ">
                    Zdieľajte vaše návrhy, nápady, zámery, neúspechy a zdrojové kódy
                    s komunitou. Otvorenosť podporuje kreativitu a zlepšuje kvalitu výstupov
                    cez skorú spätnú väzbu. Keďže tvorba elektronických služieb je spravidla
                    financovaná z verejných zdrojov, nie je dôvod výstupy skrývať.
                </p>
            </main>
        </div>

    );
}

export default PrincipyPage;