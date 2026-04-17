'use client'

import React, { useState } from 'react';
import { MyTabBar, MyTabLink } from '@/app/(home)/_components/tab-bar/tabBar';
import { Signpost, SignpostGroup } from '@/app/(home)/_components/signpost/signpostCustom';
import InformationBanner from '@/app/(home)/_components/information-banner/informationBannerCustom';

// Profi balíčky na zvýrazňovanie kódu
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import dedent from 'dedent';

// ============================================================================
// 1. HLAVNÝ KOMPONENT 
// ============================================================================
const SignpostPage = () => {
    const [activeTab, setActiveTab] = useState('pouzitie');

    const renderTabContent = {
        pouzitie: <TabPouzitie />,
        varianty: <TabVarianty />,
        pristupnost: <TabPristupnost />,
        kod: <TabImplementacia />
    };
    return (
        <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0 text-black">
            <title>Rázcestník</title>
            
            <header>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
                    Rázcestník - horizontálny (Signpost)
                </h1>
            </header>
            
            <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-12">
                Horizontálny rázcestník má formu jednoduchej horizontálnej dlaždice, ktorá je zložená z nadpisu, popisu a oddeľovacej čiary. Jeho účelom je prehľadne usporiadať pre používateľa odkazy na súvisiaci obsah, ktorý je rozmiestnený na rôznych, samostatných podstránkach. Rázcestník je jedným z komponentov, ktoré navigujú používateľa k obsahu vašej stránky. 
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

export default SignpostPage;


// ============================================================================
// 2. PODKOMPONENTY (Obsah jednotlivých tabov)
// ============================================================================

// --- TAB 1: POUŽITIE ---
const TabPouzitie = () => (
    <div className="animate-fade-in">
        <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-black mb-4">
            Použitie rázcestníka
        </h2>
        
        <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
            <div className="w-full max-w-[600px] px-4">
                <Signpost 
                    heading="Rázcestník" 
                    href="/komponenty/razcestnik-horizontalny"
                >
                    Tu nájdete komponent horizontálny rázcestník. Nájdete tam dokumentáciu a prototypy.
                </Signpost>
            </div>
        </div>

        <p className="text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8">
            Použitím rázcestníka spolu s nadpisom a podnadpisom dáte používateľovi najavo, ktorý obsah (a ako) spolu na stránke súvisí. Pri definovaní nadpisu a podnadpisu buďte struční a vecní. Rázcestník môžete štrukturovať do jedného alebo viacerých stĺpcov, musíte však dodržať pravidlá pre rozloženie stránky (grid).
        </p>
        <div className="flex flex-wrap gap-8 sm:gap-12 mt-10">
            <div className="flex flex-col items-start flex-1 min-w-[280px]">
                <InformationBanner
                    ariaLabel="Správne použitie rázcestníka"
                    type="banner"
                    variant="basic"
                    hideCloseButton={true}
                >
                 <h3 className="text-lg sm:text-xl font-bold text-black leading-tight ml-2 mb-4">
                    Ako sa používa
                </h3>
                 <ul className="list-disc pl-5 space-y-3 text-sm tracking-wide leading-relaxed text-black mb-8 mt-4">
                    <li>na navigáciu k súvisiacemu obsahu,</li>
                    <li>ako jeden celistvý klikateľný prvok,</li>
                    <li>s jasným vizuálnym indikátorom, že ide o klikateľný prvok (napr. ikonka šípky),</li>
                    <li>udržujte nadpisy aj podnadpisy krátke,</li>
                    <li>v logických a primeraných skupinách (max. 5 rázcestníkov)</li>
                </ul>
                </InformationBanner>
            </div>
            
            <div className="flex flex-col items-start flex-1 min-w-[280px]">
                <InformationBanner
                    ariaLabel="Nesprávne použitie rázcestníka"
                    type="banner"
                    variant="warning"
                    hideCloseButton={true}
                >
                 <h3 className="text-lg sm:text-xl font-bold text-black leading-tight ml-2 mb-4">
                    Ako sa nepoužíva
                </h3>
                 <ul className="list-disc pl-5 space-y-3 text-sm tracking-wide leading-relaxed text-black mb-8 mt-4">
                    <li>s vnútornými odkazmi alebo tlačidlami,</li>
                    <li>na zvýraznenie statického obsahu</li>
                    <li>v dlhých zoznamoch,</li>
                    <li>chýba alebo je nejasný názov poľa,</li>
                    <li>ako čistý text bez ikonky alebo ohraničenia,</li>
                </ul>
                </InformationBanner>
            </div>
        </div>
    </div>
);

// --- TAB 2: VARIANTY ---
// --- TAB 2: VARIANTY (Rázcestník) ---

// Pomocné SVG ikonky pre ukážku (Môžeš nahradiť vašimi)
const IconArrow = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>;
const IconDoc = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>;

const TabVarianty = () => (
    <div className="animate-fade-in">
        <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-black mb-4">
            Varianty
        </h2>
        
        {/* 0. ZÁKLADNÝ (BEZ IKONIEK) */}
        <h3 className="text-lg sm:text-xl font-bold text-black mb-4 mt-8">1. Základný rázcestník (bez ikoniek)</h3>
        <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
            <div className="w-full max-w-[800px] px-4">
                <Signpost 
                    heading="Tlačivá a formuláre" 
                    href="/komponenty/razcestnik-horizontalny"
                >
                    Tu nájdete všetky potrebné dokumenty na stiahnutie vo formáte PDF aj Word.
                    Môžete ich vyplniť elektronicky alebo ručne.
                </Signpost>
            </div>
        </div>

        {/* 1. IKONKA NAPRAVO (Šípka) */}
        <h3 className="text-lg sm:text-xl font-bold text-black mb-4 mt-8">2. S ikonkou napravo (napríklad šípka)</h3>
        <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
            <div className="w-full max-w-[800px] px-4">
                <Signpost 
                    heading="Pokračovať na ďalší krok" 
                    href="/komponenty/razcestnik-horizontalny"
                    arrowIcon={IconArrow}
                >
                    Kliknutím prejdete na druhú časť vašej žiadosti. Vaše doterajšie údaje boli uložené.
                </Signpost>
            </div>
        </div>

        {/* 2. IKONKA NAĽAVO */}
        <h3 className="text-lg sm:text-xl font-bold text-black mb-4 mt-8">3. S ikonkou naľavo</h3>
        <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
            <div className="w-full max-w-[800px] px-4">
                <Signpost 
                    heading="Metodické usmernenia" 
                    href="/komponenty/razcestnik-horizontalny"
                    icon={IconDoc}
                >
                    Prehľad platných metodických usmernení a postupov pre zamestnancov verejnej správy.
                </Signpost>
            </div>
        </div>

        {/* 3. IKONKA NA OBOCH STRANÁCH */}
        <h3 className="text-lg sm:text-xl font-bold text-black mb-4 mt-8">4. S ikonkami na oboch stranách</h3>
        <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
            <div className="w-full max-w-[800px] px-4">
                <Signpost 
                    heading="Komponenty" 
                    href="/komponenty/razcestnik-horizontalny"
                    target="_blank"
                    icon={IconDoc}
                    arrowIcon={IconArrow}
                >
                    Prechod na komponenty IDSK.
                </Signpost>
            </div>
        </div>

        {/* 4. SKUPINA V GRIDE */}
        <h3 className="text-lg sm:text-xl font-bold text-black mb-4 mt-8">5. Skupina rázcestníkov (Grid zobrazenie)</h3>
        <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
            <div className="w-full max-w-[800px] px-4">
                
                {/* SignpostGroup sa postará o to, aby boli v dvoch stĺpcoch na PC a jednom na mobile */}
                <SignpostGroup columns={2}>
                    <Signpost heading="Rodina a vzťahy" href="/komponenty/razcestnik-horizontalny" arrowIcon={IconArrow}>
                        Narodenie dieťaťa, manželstvo, úmrtie.
                    </Signpost>
                    
                    <Signpost heading="Práca a zamestnanie" href="/komponenty/razcestnik-horizontalny" arrowIcon={IconArrow}>
                        Hľadanie práce, odvody, podnikanie.
                    </Signpost>
                    
                    <Signpost heading="Bývanie" href="/komponenty/razcestnik-horizontalny" arrowIcon={IconArrow}>
                        Trvalý pobyt, stavebné povolenie, kataster.
                    </Signpost>
                    
                    <Signpost heading="Zdravotníctvo" href="/komponenty/razcestnik-horizontalny" arrowIcon={IconArrow}>
                        Zdravotné poistenie, eZdravie, preukazy.
                    </Signpost>
                </SignpostGroup>

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
            Rázcestník spĺňa požiadavky WCAG 2.1 AA. Podporuje ovládanie klávesnicou a asistenčnými technológiami.          
        </p>
        
        <h3 className="text-lg sm:text-xl font-bold text-black mb-4">
            Klávesové ovládanie
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8">
            <li><code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Tab</code> – presun zamerania klávesnice (focus) na nasledujúci rázcestník alebo interaktívny prvok.</li>
            <li><code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Shift + Tab</code> – presun zamerania klávesnice (focus) na predchádzajúci prvok.</li>
            <li><code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Enter</code> – aktivovanie rázcestníka (prechod na cieľovú stránku).</li>
        </ul>
        
        <h3 className="text-lg sm:text-xl font-bold text-black mb-4">
            Základné pravidlá prístupnosti
        </h3>
        <ul className="list-disc pl-5 space-y-3 text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8">
           <li>
                Rázcestník funguje ako jeden interaktívny cieľ, preto musí byť celý komponent obalený v elemente <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;a&gt;</code> s platným atribútom <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">href</code>. Zabezpečíte tým natívnu podporu pre navigáciu klávesnicou bez nutnosti pridávať <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">tabindex</code>.
            </li>
            <li>
               Názov rázcestníka musí byť implementovaný pomocou správnej úrovne nadpisu (zvyčajne <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;h2&gt;</code>, <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;h3&gt;</code> alebo <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;h4&gt;</code>) v závislosti od hierarchie konkrétnej stránky. Čítačky obrazovky to využívajú na rýchlu orientáciu.
            </li>
            <li>
                Keďže je celý komponent odkazom, asistenčné technológie prečítajú nadpis aj popis rázcestníka ako jeden súvislý celok. Texty preto udržujte čo najstručnejšie, aby ste používateľa nezahltili zbytočne dlhým názvom odkazu.
            </li>
            <li>
                Ikonky určujúce tému rázcestníka, rovnako ako navigačná šípka, sú pre asistenčné zariadenia zväčša čisto dekoratívne. Musia byť skryté pred čítačkami obrazovky pomocou atribútu <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">aria-hidden=&quot;true&quot;</code>.
            </li>
            <li>
                Ak rázcestník vedie na externú stránku alebo otvára odkaz v novom okne, musí obsahovať skryté textové upozornenie pre čítačky (napríklad <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;aria-label=&quot;Otvorí sa v novom okne&quot;/span&gt;</code>). Ak na to použijete špeciálnu ikonu externého odkazu, môžete upozornenie pridať priamo do nej.
            </li>
        </ul>
    </div>
);

// --- TAB 4: IMPLEMENTÁCIA ---
const TabImplementacia = () => (
    <div className="animate-fade-in text-black space-y-10">
        
        <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Implementácia rázcestníka z ID-SK Frontend</h2>
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
                            Zo stránky dokumentácie stiahnite HTML kód komponentu <a href="https://komponenty.idsk3.gov.sk/components/signpost" className="text-my-blue underline hover:text-blue-800 transition-colors"> rázcestník</a> a vložte ho do svojho HTML.
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
                                <a class='govuk-signpost govuk-signpost__card {%- if vertical %} govuk-signpost__card--vertical {% endif %} govuk-signpost__link' href="#">
                                  <div class='govuk-signpost__container'>
                                      <div>
                                          <h3 class='govuk-signpost__title' >Dlhý nadpis</h3>
                                          <p class='govuk-signpost__description'>Tento text slúži iba ako ukážka naplneného obsahu v danom komponente. Nepoužívať pri implementácii a dizajne.</p>
                                      </div>
                                  </div>
                              </a>
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
                            language="bash" 
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
                        Pre import individuálneho IDSK komponentu (rázcestník) do svojho Sass súboru pridajte:
                        
                        <SyntaxHighlighter 
                            language="scss" 
                            style={vscDarkPlus} 
                            wrapLines={true}
                            wrapLongLines={true}
                            customStyle={{ padding: '1.25rem', fontSize: '0.875rem', margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
                            codeTagProps={{ style: { whiteSpace: 'pre-wrap', wordBreak: 'break-word' } }}
                            >
                            {dedent`
                                @import "node_modules/@id-sk/frontend/idsk/components/signpost/signpost";
                            `}
                        </SyntaxHighlighter>
                    </li>
                </ol>
            </div>
        </section>
    </div>
);