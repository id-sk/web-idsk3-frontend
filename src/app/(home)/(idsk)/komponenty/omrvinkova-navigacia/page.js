'use client'

import React, { useState } from 'react';
import { MyTabBar, MyTabLink } from '@/app/(home)/_components/tab-bar/tabBar';
import { Breadcrumbs } from '@eslovensko/idsk-react';
import InformationBanner from '@/app/(home)/_components/information-banner/informationBannerCustom';

// Profi balíčky na zvýrazňovanie kódu
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import dedent from 'dedent';

// ============================================================================
// 1. HLAVNÝ KOMPONENT 
// ============================================================================
const BreadcrumbsPage = () => {
    const [activeTab, setActiveTab] = useState('pouzitie');

    const renderTabContent = {
        pouzitie: <TabPouzitie />,
        varianty: <TabVarianty />,
        pristupnost: <TabPristupnost />,
        kod: <TabImplementacia />
    };
    return (
        <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0 text-black">
            <title>Omrvinková navigácia</title>
            
            <header>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
                    Omrvinková navigácia (Breadcrumbs)
                </h1>
            </header>
            
            <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-12">
                Komponent omrvinková navigácia pomáha používateľom pochopiť, kde sa nachádzajú v štruktúre webového sídla a prechádzať medzi jednotlivými úrovňami.            
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

export default BreadcrumbsPage;


// ============================================================================
// 2. PODKOMPONENTY (Obsah jednotlivých tabov)
// ============================================================================

// --- TAB 1: POUŽITIE ---
const TabPouzitie = () => (
    <div className="animate-fade-in">
        <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-black mb-4">
            Použitie omrvinkovej navigácie
        </h2>
        
        <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
            <div className="w-full max-w-[600px] px-4">
               <Breadcrumbs 
                  >
                    <a href="/komponenty">Komponenty</a>
                    <span aria-current="page">Omrvinková navigácia</span>
              </Breadcrumbs>
            </div>
        </div>

        <p className="text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8">
            Omrvinková navigácia sa používa ako zrozumiteľná navigácia používateľa v štruktúre stránok smerom od domovskej stránky (home page). Komponent slúži na pochopenie a navigáciu medzi úrovňami webu. Medzi odkazmi a aktuálnou stránkou by malo byť jasné vizuálne odlíšenie, pričom aktuálna stránka by nemala byť klikateľná. Text odkazov by mal byť stručný a zrozumiteľný, ideálne jedno až tri slová, a pri ich používaní sa neodporúča používať ikonky.
        </p>
        <div className="flex flex-wrap gap-8 sm:gap-12 mt-10">
            <div className="flex flex-col items-start flex-1 min-w-[280px]">
                <InformationBanner
                    ariaLabel="Správne použitie omrvinkovej navigácie"
                    type="banner"
                    variant="basic"
                    hideCloseButton={true}
                    >
                    <h3 className="text-lg sm:text-xl font-bold text-black leading-tight ml-2 mb-4">
                        Ako sa používa
                    </h3>
                    <ul className="list-disc pl-5 space-y-3 text-sm tracking-wide leading-relaxed text-black mb-8 mt-4">
                        <li>Je umiestnená vždy pod komponentom hlavička tak, aby bola dostupná počas celej cesty používateľa rozhraním.</li>
                        <li>Zvyčajne sa skladá z horizontálneho reťazca odkazov, ktorý začína domovskou stránkou a postupne ukazuje každú úroveň hierarchie stránok, až k aktuálnej polohe používateľa.</li>
                        <li>Pri používaní omrvinkovej navigácie je dôležité zabezpečiť, aby bola štruktúra webového sídla (site map) zreteľná a zároveň jednoduchá (krátke názvy).</li>
                        <li>Obsah v jednotlivých sekciách je rovnocenný a nezávislý (teda nezáleží na poradí rozbalenia).</li>
                    </ul>
                </InformationBanner>
            </div>
            
            <div className="flex flex-col items-start flex-1 min-w-[280px]">
                <InformationBanner
                    ariaLabel="Nesprávne použitie omrvinkovej navigácie"
                    type="banner"
                    variant="warning"
                    hideCloseButton={true}
                    >
                    <h3 className="text-lg sm:text-xl font-bold text-black leading-tight ml-2 mb-4">
                        Ako sa nepoužíva
                    </h3>
                    <ul className="list-disc pl-5 space-y-3 text-sm tracking-wide leading-relaxed text-black mb-8 mt-4">
                        <li>Nepoužívajte komponent na webových stránkach s plochou štruktúrou ani na zobrazenie pokroku cez lineárnu cestu či transakciu.</li>
                        <li>Vyhnite sa dlhým názvom stránok, alebo ich pri zobrazení v omrvinkovej navigácii skráťte.</li>
                        <li>Pri veľmi dlhej navigácii v mobilnej verzii (viac ako 5 hierarchických úrovní) zvážte vizuálne skrátenie navigácie.</li>
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
        
        <h3 className="text-lg sm:text-xl font-bold text-black mb-4 mt-8">Variant so zbalením pre mobilné zariadenia a plne rozbalený variant na viaceré riadky</h3>
        {/* Nápoveda pre používateľov dokumentácie */}
        <p className="text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8">
            <strong>Tip:</strong> Zmenšite šírku okna prehliadača, aby ste videli, ako sa omrvinková navigácia automaticky prispôsobí pre mobilné zariadenia.
        </p>
        <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
            <div className="w-full max-w-[600px] px-4">
                <Breadcrumbs>
                    <a href="/sekcia-1" className="govuk-breadcrumbs__link">Sekcia 1</a>
                    <a href="/komponenty">Komponenty</a>
                    <span aria-current="page">Omrvinková navigácia</span>
                </Breadcrumbs>
            </div>
            <div className="w-full max-w-[600px] px-4">
                <Breadcrumbs disableMobileVersion={true}>
                    <a href="/sekcia-1" className="govuk-breadcrumbs__link">Sekcia 1</a>
                    <a href="/komponenty">Komponenty</a>
                    <span aria-current="page">Omrvinková navigácia</span>
                </Breadcrumbs>
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
            Omrvinková navigácia spĺňa požiadavky WCAG 2.1 AA. Podporuje ovládanie klávesnicou a asistenčnými technológiami.          
        </p>
        
        <h3 className="text-lg sm:text-xl font-bold text-black mb-4">
            Klávesové ovládanie
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8">
            <li><code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Tab</code> – presun zamerania klávesnice (focus) na nasledujúci odkaz</li>
            <li><code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Shift + Tab</code> – presun zamerania klávesnice (focus) na predchádzajúci odkaz alebo interaktívny prvok.</li>
            <li><code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Enter</code> – aktivovanie vybraného odkazu (prechod na stránku) alebo otvorenie skrytých položiek v mobilnom zobrazení.</li>
        </ul>
        
        <h3 className="text-lg sm:text-xl font-bold text-black mb-4">
            Základné pravidlá prístupnosti
        </h3>
        <ul className="list-disc pl-5 space-y-3 text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8">
            <li>
                Používajte výhradne natívne HTML tagy. Celá navigácia musí byť obalená v elemente <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;nav&gt;</code>, pričom samotné položky tvoria usporiadaný zoznam <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;ol&gt;</code> s elementmi <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;li&gt;</code> a <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;a&gt;</code>.
            </li>
            <li>
                Nezabudnite pripojiť kontext pre čítačky obrazoviek pridaním atribútu <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">aria-label=&quot;omrvinková navigácia&quot;</code> (alebo podobného) priamo na hlavný <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;nav&gt;</code> element.
            </li>
            <li>
                Vizuálne oddeľovače (napr. šípky, lomky), pokiaľ nie sú pridané čistým CSS (napr. cez <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">::after</code>), musíte pre čítačky skryť. Použite atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">aria-hidden=&quot;true&quot;</code> pre ikony alebo <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">alt=&quot;&quot;</code> pre obrázky.
            </li>
            <li>
                Pre dlhé reťazce odkazov v mobilných zariadeniach zvážte zjednodušenie navigácie, aby nezaberala priveľa miesta, napr. pomocou funkcionality &quot;collapse&quot; alebo doplnením o funkciu späť. 
            </li>
            <li>
                Aktuálna stránka má mať atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">aria-current=&quot;page&quot;</code>
            </li>
        </ul>
    </div>
);

// --- TAB 4: IMPLEMENTÁCIA ---
const TabImplementacia = () => (
    <div className="animate-fade-in text-black space-y-10">
        
        <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Implementácia omrvinkovej navigácie z ID-SK Frontend</h2>
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
                            style={a11yDark} 
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
                            style={a11yDark} 
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
                            Zo stránky dokumentácie stiahnite HTML kód komponentu <a href="https://komponenty.idsk3.gov.sk/components/breadcrumbs" className="text-my-blue underline hover:text-blue-800 transition-colors"> omrvinková navigácia</a> a vložte ho do svojho HTML.
                        </p>
                        
                        <SyntaxHighlighter 
                            language="html" 
                            style={a11yDark} 
                            wrapLines={true}
                            wrapLongLines={true}
                            customStyle={{ padding: '1.25rem', fontSize: '0.875rem', margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
                            codeTagProps={{ style: { whiteSpace: 'pre-wrap', wordBreak: 'break-word' } }}
                            >
                            {dedent`
                                <nav aria-label="Omrvinková navigácia">
                                    <div class="govuk-breadcrumbs">
                                        <ol class="govuk-breadcrumbs__list">
                                            <li class="govuk-breadcrumbs__list-item">
                                                <a class="govuk-breadcrumbs__link" href="/section">Sekcia</a>
                                            </li>
                                            <li class="govuk-breadcrumbs__list-item">
                                                <a class="govuk-breadcrumbs__link" href="/section/sub-section">Podsekcia</a>
                                            </li>
                                        </ol>
                                    </div>
                                </nav>
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
                            style={a11yDark} 
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
                        Pre import individuálneho IDSK komponentu (omrvinková navigácia) do svojho Sass súboru pridajte:
                        
                        <SyntaxHighlighter 
                            language="html" 
                            style={a11yDark} 
                            wrapLines={true}
                            wrapLongLines={true}
                            customStyle={{ padding: '1.25rem', fontSize: '0.875rem', margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
                            codeTagProps={{ style: { whiteSpace: 'pre-wrap', wordBreak: 'break-word' } }}
                            >
                            {dedent`
                                @import "node_modules/@id-sk/frontend/idsk/components/breadcrumbs/breadcrumbs";
                            `}
                        </SyntaxHighlighter>
                    </li>
                </ol>
            </div>
        </section>
    </div>
);