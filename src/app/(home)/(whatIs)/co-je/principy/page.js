'use client'

import React from "react";

const PrincipyPage = () => {
    return (
        <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0">
            <title>Princípy</title>
            
            <header>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px]">
                    10 princípov vytvárania služieb podľa IDSK
                </h1>
            </header>
            
            <main id="main-content" role="main" className="mt-8">
                {/* Zoznam rýchlych odkazov */}
                <div className="mb-12 text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black">
                    <ol className="list-decimal pl-5 space-y-2">
                        <li>
                            <a href="#uzitocnost" className="text-my-blue underline hover:text-blue-800 transition-colors">
                                Začnite potrebami používateľov (princíp užitočnosti)
                            </a>
                        </li>
                        <li>
                            <a href="#stabilita" className="text-my-blue underline hover:text-blue-800 transition-colors">
                                Opätovne používajte a zdieľajte (princíp stability a otvorenosti)
                            </a>
                        </li>
                        <li>
                            <a href="#realnost" className="text-my-blue underline hover:text-blue-800 transition-colors">
                                Inšpirujte sa realitou (princíp reálnosti)
                            </a>
                        </li>
                        <li>
                            <a href="#jednoduchost" className="text-my-blue underline hover:text-blue-800 transition-colors">
                                Náročná tvorba vedie k jednoduchým službám (princíp jednoduchosti)
                            </a>
                        </li>
                        <li>
                            <a href="#agilita" className="text-my-blue underline hover:text-blue-800 transition-colors">
                                Začnite v malom (princíp agility)
                            </a>
                        </li>
                        <li>
                            <a href="#pristupnost" className="text-my-blue underline hover:text-blue-800 transition-colors">
                                IDSK je pre každého (princíp prístupnosti)
                            </a>
                        </li>
                        <li>
                            <a href="#kontext" className="text-my-blue underline hover:text-blue-800 transition-colors">
                                Rešpektovanie kontextu okolnosti použitia (princíp kontextu)
                            </a>
                        </li>
                        <li>
                            <a href="#holistika" className="text-my-blue underline hover:text-blue-800 transition-colors">
                                Vytvárajte elektronické služby, nie webové stránky (princíp holistického pohľadu)
                            </a>
                        </li>
                        <li>
                            <a href="#konzistentnost" className="text-my-blue underline hover:text-blue-800 transition-colors">
                                Buďte konzistentní (princíp konzistentnosti)
                            </a>
                        </li>
                        <li>
                            <a href="#otvorenost" className="text-my-blue underline hover:text-blue-800 transition-colors">
                                Tvorte otvorene, zvýšite tým kvalitu (princíp otvorenosti)
                            </a>
                        </li>
                    </ol>
                </div>

                {/* Sekcia 1 */}
                <h2 id="uzitocnost" className="mt-10 mb-4 text-xl sm:text-2xl font-bold tracking-wide text-black scroll-mt-6">
                    1. Začnite potrebami používateľov (princíp užitočnosti)
                </h2>
                <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black">
                    Dizajn služby začína identifikáciou potrieb používateľov. Ak neviete,
                    aké sú potreby používateľov, nepodarí sa vám vytvoriť správnu službu.
                    Nevychádzajte z domnienok. Používateľský prieskum, analýza dát a
                    informácie priamo od používateľov vám pomôžu vybudovať zázemie,
                    na ktorom môžete postaviť službu, ktorá bude spĺňať svoj účel a bude
                    užitočná.
                </p>

                {/* Sekcia 2 */}
                <h2 id="stabilita" className="mt-10 mb-4 text-xl sm:text-2xl font-bold tracking-wide text-black scroll-mt-6">
                    2. Opätovne používajte a zdieľajte (princíp stability a otvorenosti)
                </h2>
                <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black">
                    Platformy a registre je dôležité vytvárať tak, aby tvorili funkčný
                    nemenný základ, ktorý je opätovne použiteľný. Poskytovanie a vzájomné
                    zdieľanie zdrojov môže výrazne uľahčiť prácu ďalším tvorcom
                    elektronických služieb.
                </p>

                {/* Sekcia 3 */}
                <h2 id="realnost" className="mt-10 mb-4 text-xl sm:text-2xl font-bold tracking-wide text-black scroll-mt-6">
                    3. Inšpirujte sa realitou (princíp reálnosti)
                </h2>
                <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black">
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

                {/* Sekcia 4 */}
                <h2 id="jednoduchost" className="mt-10 mb-4 text-xl sm:text-2xl font-bold tracking-wide text-black scroll-mt-6">
                    4. Náročná tvorba vedie k jednoduchým službám (princíp jednoduchosti)
                </h2>
                <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black">
                    Elektronizácia je príležitosťou na zjednodušenie služieb používateľom.
                    Pri dizajne služieb vnímajte širší kontext, nielen existujúci postup.
                    Investujte čas do opätovného prepracovania procesov a neuspokojte sa
                    s názorom, ktorý zachováva existujúci stav.
                </p>

                {/* Sekcia 5 */}
                <h2 id="agilita" className="mt-10 mb-4 text-xl sm:text-2xl font-bold tracking-wide text-black scroll-mt-6">
                    5. Začnite v malom (princíp agility)
                </h2>
                <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black">
                    Sprístupnite používateľom svoju službu čo najskôr a získajte spätnú
                    väzbu od koncových používateľov. Je lepšie rozvíjať službu postupne a
                    po malých častiach, ako spúšťať veľké celky. Znížite tým riziká a
                    získate cenné informácie, ktoré môžu ovplyvniť vaše ďalšie investície
                    do rozvoja.
                </p>

                {/* Sekcia 6 */}
                <h2 id="pristupnost" className="mt-10 mb-4 text-xl sm:text-2xl font-bold tracking-wide text-black scroll-mt-6">
                    6. IDSK je pre každého (princíp prístupnosti)
                </h2>
                <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black">
                    Prístupný dizajn je dobrý dizajn. Elektronické služby vytvorené podľa
                    IDSK by mali byť inkluzívne, zrozumiteľné a jednoducho čitateľné. Je
                    potrebné si pripomínať, že elektronické služby sa vytvárajú s konkrétnym
                    účelom, ako odpoveď na konkrétne potreby spoločnosti a na používanie
                    pre konkrétnych ľudí. Medzi používateľmi sú aj takí, ktorí nepoužívajú
                    informačné technológie každý deň. Ľudia ktorí najviac potrebujú naše
                    služby sú často ľudia, ktorým sa zdá ich používanie najťažšie. Práve
                    tieto osoby by mali tvoriť časť testovacej skupiny.
                </p>

                {/* Sekcia 7 */}
                <h2 id="kontext" className="mt-10 mb-4 text-xl sm:text-2xl font-bold tracking-wide text-black scroll-mt-6">
                    7. Rešpektovanie kontextu okolnosti použitia (princíp kontextu)
                </h2>
                <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black">
                    Pri tvorbe elektronických služieb je potrebné zohľadňovať okolnosti a
                    kontext, v ktorom ľudia služby budú používať. Dizajn musí adresovať
                    rozdielne potreby podľa času, miesta a zariadenia, v rámci ktorých sa
                    bude služba primárne vykonávať.
                </p>

                {/* Sekcia 8 */}
                <h2 id="holistika" className="mt-10 mb-4 text-xl sm:text-2xl font-bold tracking-wide text-black scroll-mt-6">
                    8. Vytvárajte elektronické služby, nie webové stránky (princíp holistického pohľadu)
                </h2>
                <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black">
                    Pri tvorbe služby vnímajte ich multikanálový kontext. Netvoríte len
                    webovú stránku, ale navrhujete zážitok používateľa naprieč rôznymi
                    digitálnymi aj nedigitálnymi kanálmi. Zohľadnite zistenia
                    zo zákazníckeho prieskumu aj v iných kanáloch, aby ste vytvorili
                    kvalitnejšiu službu.
                </p>

                {/* Sekcia 9 */}
                <h2 id="konzistentnost" className="mt-10 mb-4 text-xl sm:text-2xl font-bold tracking-wide text-black scroll-mt-6">
                    9. Buďte konzistentní (princíp konzistentnosti)
                </h2>
                <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black">
                    Princíp konzistentnosti spočíva v používaní rovnakého jazyka, výrazov
                    uvedených v slovníku a rovnakých dizajnových vzorov. Uplatňovaním tohto
                    princípu sa pri tvorbe služieb zabezpečí jednak vizuálna jednotnosť a
                    tiež uistenie používateľa, že skutočne stále používa službu verejnej
                    správy. Navyše, keď budú všetky služby tvorené jedným spôsobom,
                    používateľ nadobudne zručnosť v ich používaní. V takom prípade ich bude
                    používať opakovane a tieto služby budú pre neho skutočne efektívnym
                    spôsobom využívania potrebných služieb.
                </p>

                {/* Sekcia 10 */}
                <h2 id="otvorenost" className="mt-10 mb-4 text-xl sm:text-2xl font-bold tracking-wide text-black scroll-mt-6">
                    10. Tvorte otvorene, zvýšite tým kvalitu (princíp otvorenosti)
                </h2>
                <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black">
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