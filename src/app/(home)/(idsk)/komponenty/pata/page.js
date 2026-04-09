'use client'

import React, { useState } from 'react';
import { MyTabBar, MyTabLink } from '@/app/(home)/_components/tab-bar/tabBar';
import { FooterContainer } from '@eslovensko/idsk-react';
import { InformationBanner } from '@eslovensko/idsk-react';

// Profi balíčky na zvýrazňovanie kódu
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import dedent from 'dedent';

// ============================================================================
// 1. HLAVNÝ KOMPONENT 
// ============================================================================
const FooterCustom = () => {
    const [activeTab, setActiveTab] = useState('pouzitie');

    const renderTabContent = {
        pouzitie: <TabPouzitie />,
        varianty: <TabVarianty />,
        pristupnost: <TabPristupnost />,
        kod: <TabImplementacia />
    };
    return (
        <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0 text-black">
            <title>Päta</title>
            
            <header>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
                    Päta (Footer)
                </h1>
            </header>
            
            <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-12">
                Všetky stránky musia používať štandardizovanú pätu, ktorá môže, ale nemusí obsahovať štrukturované hypertextové odkazy na dôležitý obsah. Základným variantom je päta bez sekundárnej navigácie.            
            </p>
            <MyTabBar>
                <MyTabLink 
                    href="#" 
                    selected={activeTab === 'pouzitie'} 
                    onClick={(e) => { e.preventDefault(); setActiveTab('pouzitie'); }}
                >
                    Použitie
                </MyTabLink>
                <MyTabLink 
                    href="#" 
                    selected={activeTab === 'varianty'} 
                    onClick={(e) => { e.preventDefault(); setActiveTab('varianty'); }}
                >
                    Varianty a stavy
                </MyTabLink>
                <MyTabLink 
                    href="#" 
                    selected={activeTab === 'pristupnost'} 
                    onClick={(e) => { e.preventDefault(); setActiveTab('pristupnost'); }}
                >
                    Prístupnosť
                </MyTabLink>
                <MyTabLink 
                    href="#" 
                    selected={activeTab === 'kod'} 
                    onClick={(e) => { e.preventDefault(); setActiveTab('kod'); }}
                >
                    Implementácia
                </MyTabLink>
            </MyTabBar>

            {/* Vykreslenie aktívneho tabu */}
            <div className="mt-8">
                {renderTabContent[activeTab]}
            </div>
        </div>
    );
}

export default FooterCustom;


// ============================================================================
// 2. PODKOMPONENTY (Obsah jednotlivých tabov)
// ============================================================================

// --- TAB 1: POUŽITIE ---
const TabPouzitie = () => (
    <div className="animate-fade-in">
        <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-black mb-4">
            Použitie päty
        </h2>
        
        <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
            <div className="w-full max-w-[700px] px-4">
                <FooterContainer
                    linksList={[
                        <a key="1" href="https://idsk.gov.sk/co-je/cookies-policy" className="hover:underline">Informácie o spracúvaní súborov cookies</a>,
                        <a key="2" href="mailto:idsk@mirri.gov.sk" className="hover:underline">Kontakt na prevádzkovateľa</a>,
                        <a key="3" href="https://idsk2.gov.sk/" className="hover:underline">IDSK2</a>
                    ]}
                    bottomSection={
                        <div className="mt-6 text-md text-black">
                            <p>Prevádzkovateľom služby je Ministerstvo investícií, regionálneho rozvoja a informatizácie SR.</p>
                            <p className="mt-4">Vytvorené v súlade s <a href="https://idsk.gov.sk" className="underline hover:text-blue-600">Jednotným dizajnovým manuálom IDSK</a>.</p>
                        </div>
                    }
                    logo={
                        <a href="https://mirri.gov.sk" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block">
                            <img src="/images/group.svg" alt="MIRRI SR" width="290" height="66" />
                        </a>
                    }
                >
                    {/* TEXT HORE (Vloží sa ako "children" a komponent ho hodí úplne navrch) */}
                    <div className="mb-6 text-md text-black">
                        <p>Na tomto webovom sídle sa využívajú len nevyhnutné/technické cookies.</p>
                    </div>
                </FooterContainer>
            </div>
        </div>

        <p className="text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8">
            Päta sa primárne využíva pre webové sídla a býva vždy umiestnená na konci stránky, roluje sa spoločne s obsahom. Komponent obsahuje textové informácie o prevádzkovateľovi webovej stránky a textové odkazy na vyhlásenie o prístupnosti, priamy kontakt na prevádzkovateľa weboveho sídla, odkaz na RSS kanál, mapu webového sídla. Štruktúru navigácie tvorte podľa platných pravidiel IDSK pre rozloženie obsahu (layout a grid), t. j. použite rozloženie stránky na celú šírku, na polovice, tretiny alebo štvrtiny. Nepoužívajte iné formy rozloženia.
        </p>

        <div className="flex flex-wrap gap-8 sm:gap-12 mt-10">
            <div className="flex flex-col items-start flex-1 min-w-[280px]">
                <InformationBanner
                    ariaLabel="Správne použitie päty"
                    type="banner"
                    variant="success"
                    hideCloseButton={true}
                    >
                    <h3 className="text-lg sm:text-xl font-bold text-black leading-tight ml-2 mb-4">
                        Ako sa používa
                    </h3>
                    <ul className="list-disc pl-5 space-y-3 text-sm tracking-wide leading-relaxed text-black mb-8 mt-4">
                        <li>Keď potrebujete štandardizovanú a jednotnú uzatváraciu sekciu naprieč všetkými stránkami webového sídla.</li>
                        <li>Keď chcete používateľovi poskytnúť doplnkové a kontextové informácie (nie primárnu navigáciu).</li>
                        <li>Keď potrebujete umiestniť povinné odkazy (vyhlásenie o prístupnosti, kontakt, RSS, mapa webu).</li>
                        <li>Keď sekundárna navigácia logicky dopĺňa hlavnú navigáciu (napr. „O inštitúcii“, „Pomoc“, „Dokumenty“).</li>
                        <li>Keď počet odkazov v jednom stĺpci je min. 2 a max. 6.</li>
                    </ul>
                </InformationBanner>
            </div>
            
            <div className="flex flex-col items-start flex-1 min-w-[280px]">
                <InformationBanner
                    ariaLabel="Nesprávne použitie päty"
                    type="banner"
                    variant="warning"
                    hideCloseButton={true}
                    >
                    <h3 className="text-lg sm:text-xl font-bold text-black leading-tight ml-2 mb-4">
                        Ako sa nepoužíva
                    </h3>
                    <ul className="list-disc pl-5 space-y-3 text-sm tracking-wide leading-relaxed text-black mb-8 mt-4">
                        <li>Neumiestňujte do nej kľúčové úlohy alebo primárne používateľské cesty.</li>
                        <li>Ak je obsah v päte neprehľadne dlhý alebo zahlcujúci.</li>
                        <li>Nepoužívajte viacero pätičiek na jednej stránke.</li>
                        <li>Pätu neumiestňujte mimo konca stránky (napr. medzi sekcie obsahu).</li>
                        <li>Nepoužívajte sekundárnu navigáciu s veľkým množstvom skupín (4 a viac).</li>
                        <li>Nepoužívajte stĺpce bez nadpisov.</li>

                    </ul>
                </InformationBanner>
            </div>
        </div>
    </div>
);

// --- TAB 2: VARIANTY ---
const TabVarianty = () => (
    <div className="animate-fade-in">
        <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-black mb-4">
            Varianty
        </h2>
        
        <h3 className="text-lg sm:text-xl font-bold text-black mb-4 mt-8">Variant s navigáciou</h3>
        <p className="text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8">
            Tento variant obsahuje len texty, nevyhnutné odkazy na prístupnosť/cookies a logo ministerstva alebo prevádzkovateľa.
        </p>

        <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
            <div className="w-full max-w-[700px]">
                <FooterContainer
                    linksList={[
                        <a key="1" href="https://idsk2.gov.sk/" className="hover:underline">IDSK 2</a>,
                        <a key="2" href="#" className="hover:underline">Ochrana osobných údajov</a>
                    ]}
                    bottomSection={
                        <div className="mt-4 text-base text-black">
                            <p>Prevádzkovateľom služby je Ministerstvo investícií, regionálneho rozvoja a informatizácie Slovenskej republiky.</p>
                        </div>
                    }
                    logo={
                        <a href="https://mirri.gov.sk" target="_blank" rel="noopener noreferrer">
                            <img src="/images/group.svg" alt="MIRRI SR" width="290" height="66" />
                        </a>
                    }
                >
                    {/* 2. HLAVNÁ NAVIGÁCIA (Fat footer) - Upravené medzery pb-6 a mb-6 */}
                    <div className="flex flex-col md:flex-row gap-10 md:gap-24 mb-6 border-b border-gray-300 pb-7">
                        <div>
                            <h2 className="font-bold text-lg mb-4">Užitočné odkazy</h2>
                            <ul className="space-y-3 list-none p-0 m-0">
                                <li><a href="#" className="hover:underline">Elektronické služby</a></li>
                                <li><a href="#" className="hover:underline">Životné situácie</a></li>
                                <li><a href="#" className="hover:underline">Časté otázky (FAQ)</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="font-bold text-lg mb-4">O nás</h2>
                            <ul className="space-y-3 list-none p-0 m-0">
                                <li><a href="#" className="hover:underline">Projekty</a></li>
                                <li><a href="#" className="hover:underline">Kariéra</a></li>
                                <li><a href="#" className="hover:underline">Kontakty</a></li>
                            </ul>
                        </div>
                    </div>
                </FooterContainer>
            </div>
        </div>
    </div>
);

// --- TAB 3: PRÍSTUPNOSŤ ---
const TabPristupnost = () => (
    <div className="animate-fade-in">
        <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-black mb-6">
            Prístupnosť (Accessibility)
        </h2>
        <p className="text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8">
            Päta spĺňa požiadavky WCAG 2.1 AA a poskytuje správny sémantický kontext pre asistenčné technológie.          
        </p>
        
        <h3 className="text-lg sm:text-xl font-bold text-black mb-4">
            Klávesové ovládanie
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8">
            <li><code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Tab</code> – presun zamerania klávesnice (focus) na nasledujúci odkaz v päte.</li>
            <li><code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Shift + Tab</code> – presun zamerania klávesnice (focus) na predchádzajúci odkaz.</li>
            <li><code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Enter</code> – aktivovanie vybraného odkazu.</li>
        </ul>
        
        <h3 className="text-lg sm:text-xl font-bold text-black mb-4">
            Základné pravidlá prístupnosti
        </h3>
        <ul className="list-disc pl-5 space-y-3 text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8">
            <li>
                Celý komponent musí byť obalený v natívnom HTML elemente <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;footer&gt;</code>. Tým asistenčným technológiám (čítačkám obrazovky) automaticky priradíte sémantickú rolu <code>contentinfo</code>.
            </li>
            <li>
                Navigácia v päte by mala byť reprezentovaná cez <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;nav&gt;</code> <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;ul&gt;</code> <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;li&gt;</code> <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;a&gt;</code>.
            </li>
            <li>
                Pre navigáciu v päte môžete na oddelenie od ostatných použiť napr.  <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;aria-label="Navigácia v päte"&gt;</code>.
            </li>
            <li>
                Odkazy v päte by mali mať jasný a pochopiteľný textový popis (vyhnite sa všeobecným frázam ako "kliknite sem").
            </li>
            <li>
                Päta by mala mať nadpis úrovne <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">h2</code> 
            </li>
            <li>
                Ak v päte používate logo ako odkaz, uistite sa, že obrázok obsahuje relevantný atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">alt</code> 
            </li>
        </ul>
    </div>
);

// --- TAB 4: IMPLEMENTÁCIA ---
const TabImplementacia = () => (
    <div className="animate-fade-in text-black space-y-10">
        
        <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Implementácia päty z ID-SK Frontend</h2>
            <p className="text-sm sm:text-base leading-relaxed md:leading-8 mb-8">
                Komponenty z knižnice ID-SK Frontend môžete do svojho projektu integrovať dvoma spôsobmi v závislosti od vašej technologickej infraštruktúry:
            </p>
            <ul className="list-disc pl-5 space-y-3 text-sm sm:text-base md:leading-8 mb-8">
                <li><strong>Statická HTML implementácia</strong> – vhodná pre projekty bez Node.js alebo bundlera.</li>
                <li><strong>Pokročilá integrácia (NPM + SCSS + JS)</strong> – vhodná pre projekty so správou zdrojov a build procesom.</li>
            </ul>
        </section>

        <section>
            <h3 className="text-md sm:text-xl font-bold mb-4">Základné požiadavky</h3>
            <p className="text-sm sm:text-base leading-relaxed md:leading-8 mb-4">Pred začiatkom integrácie sa uistite, že máte:</p>
            <ul className="list-disc pl-5 space-y-2 md:leading-8 text-sm sm:text-base">
                <li><strong className="font-semibold">Node.js:</strong> verzia 4.2.0 alebo vyššia.</li>
                <li><strong className="font-semibold">Dart Sass:</strong> verzia 1.0.0 alebo vyššia.</li>
                <li><strong className="font-semibold">Nunjucks:</strong> verzia 3.0.0 alebo vyššia (ak chcete používať makrá).</li>
            </ul>
        </section>

        {/* STATICKÁ HTML IMPLEMENTÁCIA */}
        <section>
            <h3 className="text-md sm:text-xl font-bold mb-4">Možnosti implementácie</h3>
            
            <div className="my-8">
                <h4 className="text-md sm:text-lg font-bold text-black mb-3">1. Statická HTML implementácia (HTML + minifikované súbory)</h4>
                <p className="text-sm sm:text-base leading-relaxed md:leading-8 mb-4">
                    Ak váš projekt nevyužíva Node.js alebo bundler (napr. Webpack, Vite), môžete použiť hotové buildy. Pri inštalácii z <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">dist</code> sa používajú kompilované a minifikované verzie šablóny so štýlmi. To znamená, že nebudete môcť:
                </p>
                <ul className="list-disc pl-5 mb-6 space-y-1 md:leading-8 text-sm sm:text-base">
                    <li>selektívne zahrnúť CSS alebo JavaScript pre jednotlivé komponenty</li>
                    <li>zostaviť si vlastné štýly alebo komponenty na základe palety alebo typografických kombinácií</li>
                    <li>prispôsobiť si kód (napríklad prepísať farby alebo povoliť globálne štýly)</li>
                    <li>použiť dynamické komponenty z Nunjucks šablón</li>
                </ul>

                <div className="space-y-6">
                    <div>
                        <strong className="block mb-2 text-sm sm:text-base">➜ Stiahnite a zahrňte zdroje</strong>
                        <p className="text-sm sm:text-base leading-relaxed md:leading-8 mb-4">
                            Stiahnite si najnovšie kompilované a minifikované verzie šablón štýlov, JavaScript a assetov. Skopírujte celý <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">assets</code> priečinok a minifikované súbory do rootu vášho projektu. Štruktúra by mala vyzerať približne takto:
                        </p>
                        
                        <SyntaxHighlighter 
                            language="html" 
                            style={vscDarkPlus} 
                            wrapLines={true}
                            wrapLongLines={true}
                            customStyle={{ padding: '1.25rem', fontSize: '0.875rem', margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
                            codeTagProps={{ style: { whiteSpace: 'pre-wrap', wordBreak: 'break-word' } }}
                            >
                            {dedent`
                                project/ 
                                │ 
                                ├── assets - images  
                                           - fonts 
                                ├── index.html 
                                ├── frontend.min.css 
                                ├── frontend.min.js 
                                ├── frontend.min.css.map 
                                └── frontend.min.js.map
                            `}
                        </SyntaxHighlighter>
                    </div>

                    <div>
                        <strong className="block mb-2 text-sm sm:text-base">➜ Prepojte štýly a skripty</strong>
                        <p className="text-sm sm:text-base leading-relaxed md:leading-8 mb-4">
                            Do časti <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">head</code> vložte minifikované css. Na záver <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">body</code> pripojte minifikovaný javascript a inicializujte ho.
                        </p>
                        
                        <SyntaxHighlighter 
                            language="html" 
                            style={vscDarkPlus} 
                            wrapLines={true}
                            wrapLongLines={true}
                            customStyle={{ padding: '1.25rem', fontSize: '0.875rem', margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
                            codeTagProps={{ style: { whiteSpace: 'pre-wrap', wordBreak: 'break-word' } }}
                            >
                            {dedent`
                                <!DOCTYPE html> 
                                <html> 
                                  <head> 
                                    <title>Ukážka</title> 
                                    <link rel="stylesheet" href="frontend.min.css"> 
                                  </head> 
                                  <body> 
                                    <script type="module" src="./frontend.min.js"></script> 
                                    <script type="module">
                                      import { initAll } from './frontend.min.js'
                                      initAll()
                                    </script>
                                  </body> 
                                </html>
                            `}
                        </SyntaxHighlighter>
                    </div>

                    <div>
                        <strong className="block mb-2 text-sm sm:text-base">➜ Skopírujte HTML kód</strong>
                        <p className="text-sm sm:text-base leading-relaxed md:leading-8 mb-4">
                            Zo stránky dokumentácie stiahnite HTML kód komponentu <a href="https://komponenty.idsk3.gov.sk/components/footer" className="text-my-blue underline hover:text-blue-800 transition-colors">päta</a> a vložte ho do svojho HTML.
                        </p>
                        
                        <SyntaxHighlighter 
                            language="html" 
                            style={vscDarkPlus} 
                            wrapLines={true}
                            wrapLongLines={true}
                            customStyle={{ padding: '1.25rem', fontSize: '0.875rem', margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
                            codeTagProps={{ style: { whiteSpace: 'pre-wrap', wordBreak: 'break-word' } }}
                            >
                            {dedent`
                                <footer class="govuk-footer">
                                    <div class="govuk-width-container">
                                        <div class="govuk-footer__meta">
                                        <div class="govuk-footer__meta-item govuk-footer__meta-item--grow">
                                            <h2 class="govuk-visually-hidden">Items</h2>
                                            <ul class="govuk-footer__inline-list">
                                            <li class="govuk-footer__inline-list-item">
                                                <a class="govuk-footer__link" href="#1">
                                                Vyhlásenie o prístupnosti
                                                </a>
                                            </li>
                                            <li class="govuk-footer__inline-list-item">
                                                <a class="govuk-footer__link" href="#2">
                                                Kontakt na prevádzkovateľa
                                                </a>
                                            </li>
                                            <li class="govuk-footer__inline-list-item">
                                                <a class="govuk-footer__link" href="#3">
                                                RSS
                                                </a>
                                            </li>
                                            <li class="govuk-footer__inline-list-item">
                                                <a class="govuk-footer__link" href="#4">
                                                Mapa stránky
                                                </a>
                                            </li>
                                            <li class="govuk-footer__inline-list-item">
                                                <a class="govuk-footer__link" href="#5">
                                                Metodické usmernenia
                                                </a>
                                            </li>
                                            <li class="govuk-footer__inline-list-item">
                                                <a class="govuk-footer__link" href="#6">
                                                Oznamy
                                                </a>
                                            </li>
                                            <li class="govuk-footer__inline-list-item">
                                                <a class="govuk-footer__link" href="#7">
                                                Základné zásady bezpečnosti
                                                </a>
                                            </li>
                                            </ul>
                                            <span class="govuk-footer__licence-description">
                                            Prevádzkovateľom služby je Ministerstvo investícií, regionálneho rozvoja a informatizácie SR.
                                            <br />
                                            Vytvorené v súlade s Jednotným dizajn manuálom elektronických služieb.
                                            </span>
                                        </div>
                                        <div class="govuk-footer__meta-item">
                                            <a
                                            class="govuk-footer__link govuk-footer__copyright-logo"
                                            href="#"
                                            >
                                            <img src="/assets/images/logo-sk-black.svg" alt="Slovensko.sk" />
                                            </a>
                                        </div>
                                        </div>
                                    </div>
                                </footer>
                            `}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </div>

            {/* POKROČILÁ NPM IMPLEMENTÁCIA */}
            <div className="my-8">
                <h4 className="text-lg font-bold text-black mb-3">2. Pokročilá integrácia (NPM + SCSS + JS)</h4>
                
                <ol className="list-decimal pl-5 space-y-6 text-sm sm:text-base md:leading-8">
                    <li>
                        <strong className="block mb-2">Nainštalujte balík</strong>
                        Pre inštaláciu cez NPM spustite:
                        
                        <SyntaxHighlighter 
                            language="html" 
                            style={vscDarkPlus} 
                            wrapLines={true}
                            wrapLongLines={true}
                            customStyle={{ padding: '1.25rem', fontSize: '0.875rem', margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
                            codeTagProps={{ style: { whiteSpace: 'pre-wrap', wordBreak: 'break-word' } }}
                            >
                            {dedent`
                                npm install nunjucks --save
                                npm i @id-sk/frontend@3.0.0-beta.0-hotfix
                            `}
                        </SyntaxHighlighter>
                    </li>
                    <li>
                        <strong className="block mb-2">Pridajte Nunjucks/HTML</strong>
                        Do pripraveného súboru vložte kód, ktorý nájdete vyššie.
                    </li>
                    <li>
                        <strong className="font-semibold block mb-2">Importujte štýly</strong>
                        Pre import individuálneho IDSK komponentu (päta) do svojho Sass súboru pridajte:
                        
                        <SyntaxHighlighter 
                            language="html" 
                            style={vscDarkPlus} 
                            wrapLines={true}
                            wrapLongLines={true}
                            customStyle={{ padding: '1.25rem', fontSize: '0.875rem', margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
                            codeTagProps={{ style: { whiteSpace: 'pre-wrap', wordBreak: 'break-word' } }}
                            >
                            {dedent`
                                @import "node_modules/@id-sk/frontend/idsk/components/footer/footer";
                            `}
                        </SyntaxHighlighter>
                    </li>
                </ol>
            </div>
        </section>
    </div>
);