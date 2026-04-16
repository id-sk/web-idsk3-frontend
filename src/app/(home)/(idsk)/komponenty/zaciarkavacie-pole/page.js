'use client'

import React, { useState } from 'react';
import { MyTabBar, MyTabLink } from '@/app/(home)/_components/tab-bar/tabBar';
import { Checkbox } from '@eslovensko/idsk-react';
import InformationBanner from '@/app/(home)/_components/information-banner/informationBannerCustom';

// Profi balíčky na zvýrazňovanie kódu
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import dedent from 'dedent';

// ============================================================================
// 1. HLAVNÝ KOMPONENT
// ============================================================================
const CheckboxPage = () => {
    const [activeTab, setActiveTab] = useState('pouzitie');

    const renderTabContent = {
        pouzitie: <TabPouzitie />,
        varianty: <TabVarianty />,
        pristupnost: <TabPristupnost />,
        kod: <TabImplementacia />
    };

    return (
        <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0 text-black">
            <title>Začiarkavacie pole</title>
            
            <header>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
                    Začiarkavacie pole (Checkbox)
                </h1>
            </header>
            
            <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-12">
                Začiarkavacie pole je interaktívny prvok, ktorý umožňuje používateľovi vybrať jednu alebo viacero položiek z množiny možností. Používateľ označí Začiarkavacie pole kliknutím do štvorca a zruší označenie opätovným kliknutím.
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

export default CheckboxPage;


// ============================================================================
// 2. PODKOMPONENTY (Obsah jednotlivých tabov)
// ============================================================================

// --- TAB 1: POUŽITIE ---
const TabPouzitie = () => (
    <div className="animate-fade-in">
        <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-black mb-4">
            Použitie začiarkavacieho poľa
        </h2>
        
        <div className="flex justify-center bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
            <div className="w-full max-w-[400px] py-7 my-6 px-4">
                <Checkbox 
                    inputSize='large'
                    name="checkbox"
                    label="Príklad začiarkavacieho poľa"
                    fullWidth={true}
                />
            </div>
        </div>

        <p className="text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8">
            Začiarkavacie pole je interaktívny komponent, ktorý slúži na získanie súhlasu alebo potvrdenie výberu v používateľskom rozhraní. Komponent je využívaný prevažne s popisom, ktorý definuje funkcionalitu komponentu.
        </p>
        <p className="text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8">
            Obsahuje tri stavy – začiarknutý, nezačiarknutý a neurčitý. Zmena stavu nastane kliknutím na komponent. V prípade použitia začiarkávacieho poľa pre získanie súhlasu alebo potvrdenia, je pole v predvolenom stave prázdne.
            Komponent funguje aj bez použitia skriptovacieho jazyka JavaScript, pričom aplikovanie jazyka JavaScript môže byť použité pre rozšírenú funcionalitu.
        </p>

        <div className="flex flex-wrap gap-8 sm:gap-12 mt-10">
            <div className="flex flex-col items-start flex-1 min-w-[280px]">
                <InformationBanner
                    ariaLabel="Správne použitie začiarkavacieho poľa"
                    type="banner"
                    variant="success"
                    hideCloseButton={true}
                >
                 <h3 className="text-lg sm:text-xl font-bold text-black leading-tight ml-2 mb-4">
                    Ako sa používa
                </h3>
                 <ul className="list-disc pl-5 space-y-3 text-sm tracking-wide leading-relaxed text-black mb-8 mt-4">
                    <li>ak používateľ môže vybrať 1 alebo viacero možností</li>
                    <li>s rovnocennými a nezávislými možnosťami</li>
                    <li>výber nie je vzájomne vylučujúci</li>
                    <li>s viditeľnou, stručnou a zrozumiteľnou menovkou</li>
                    <li>v zoskupení maximálne 10 polí - ak potrebujete viac možností použite rozbaľovacie pole</li>
                </ul>
                </InformationBanner>
            </div>
            
            <div className="flex flex-col items-start flex-1 min-w-[280px]">
                <InformationBanner
                    ariaLabel="Nesprávne použitie začiarkavacieho poľa"
                    type="banner"
                    variant="warning"
                    hideCloseButton={true}
                >
                 <h3 className="text-lg sm:text-xl font-bold text-black leading-tight ml-2 mb-4">
                    Ako sa nepoužíva
                </h3>
                 <ul className="list-disc pl-5 space-y-3 text-sm tracking-wide leading-relaxed text-black mb-8 mt-4">
                    <li>ak používateľ môže vybrať len jednu možnosť - použite prepínacie pole</li>
                    <li>ako prepínač stavu zapnuté / vypnuté s okamžitým efektom</li>
                    <li>bez menovky</li>
                    <li>len ako ikonu alebo farbu bez textu</li>
                    <li>nespájajte viac významov, tém alebo kategórií do jedného poľa</li>

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
        
        <h3 className="text-lg sm:text-xl font-bold text-black mb-4 mt-8">Variant povinného/nepovinného textového poľa</h3>
        <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
            <div className="w-full max-w-[400px] px-4">
                <Checkbox 
                    inputSize='large'
                    name="checkbox"
                    label="Menovka"
                    fullWidth={true}
                    mandatory={true}
                />
            </div>
            <div className="w-full max-w-[400px] px-4">
                <Checkbox 
                    inputSize='large'
                    name="checkbox"
                    label="Menovka"
                    optionalText="(nepovinné pole)"
                    fullWidth={true}
                    mandatory={false}
                />
            </div>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-black mb-4 mt-8">Variant začiarknutého/nezačiarknutého začiarkavacieho poľa</h3>
        <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
            <div className="w-full max-w-[400px] px-4">
                <Checkbox 
                    inputSize='large'
                    name="checkbox"
                    label="Menovka"
                    checked={true}
                    fullWidth={true}
                    mandatory={true}
                />
            </div>
            <div className="w-full max-w-[400px] px-4">
                <Checkbox 
                    inputSize='large'
                    name="checkbox"
                    label="Menovka"
                    checked={false}
                    fullWidth={true}
                    mandatory={true}
                />
            </div>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-black mb-4 mt-8">Varianty začiarkavacieho poľa - zrušený a chybový</h3>
        <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
            <div className="w-full max-w-[400px] px-4">
                <Checkbox 
                    inputSize='large'
                    name="checkbox-disabled"
                    label="Menovka"
                    checked={false}
                    fullWidth={true}
                    disabled={true}
                />
            </div>
            <div className="w-full max-w-[400px] px-4">
                <Checkbox 
                    inputSize='large'
                    name="checkbox"
                    label="Menovka"
                    error={true}
                    fullWidth={true}
                    mandatory={true}
                />
            </div>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-black mb-4 mt-8">Variant začiarkavacieho poľa veľký/malý</h3>
        <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
            <div className="w-full max-w-[400px] px-4">
                <Checkbox 
                    inputSize='large'
                    name="checkbox"
                    label="Menovka"
                    checked={true}
                    fullWidth={true}
                    mandatory={true}
                />
            </div>
            <div className="w-full max-w-[400px] px-4">
                <Checkbox 
                    inputSize='small'
                    name="checkbox"
                    label="Menovka"
                    checked={true}
                    fullWidth={true}
                    mandatory={true}
                />
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
            Začiarkavacie pole spĺňa požiadavky WCAG 2.1 AA. Podporuje ovládanie klávesnicou a aistenčnými technológiami.  
        </p>
        
        <h3 className="text-lg sm:text-xl font-bold text-black mb-4">
            Klávesové ovládanie
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8">
            <li><code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Tab</code> – presun zamerania (fokusu) na začiarkavacie pole alebo na ďalší interaktívny prvok.</li>
            <li><code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Shift + Tab</code> – presun zamerania na predchádzajúci interaktívny prvok.</li>
            <li><code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Medzerník (Space)</code> – začiarknutie alebo zrušenie začiarknutia aktuálne zameraného poľa.</li>
        </ul>
        
        <h3 className="text-lg sm:text-xl font-bold text-black mb-4">
            Základné pravidlá prístupnosti
        </h3>
        <ul className="list-disc pl-5 space-y-3 text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8">
            <li>
                Vždy použite element <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;label&gt;</code> pre popis začiarkavacieho poľa a nezabudnite ho programovo spárovať s konkrétnym inputom cez atribúty <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">for</code> a <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">id</code>.
            </li>
            <li>
                Udržujte menovky (label) krátke a jasné. Ak potrebujete dlhšie vysvetlenie, nevkladajte ho do labelu, ale využite doplňujúci text (hint).
            </li>
            <li>
                <strong>Zoskupovanie:</strong> V prípade väčšieho počtu začiarkavacích polí, ktoré spolu logicky súvisia (1 skupina = 1 téma), musia byť implementované do spoločného tagu <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;fieldset&gt;</code>. Samotná nadradená otázka pre túto skupinu musí byť definovaná cez natívny tag <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;legend&gt;</code>.
            </li>
            <li>
                Snažte sa udržiavať poradie jednotlivých možností logické (napr. abecedne, chronologicky alebo podľa najčastejšej voľby) a v nápovede uveďte, koľko možností je možné vybrať.
            </li>
            <li>
                Prípadný hint (nápovedu) prepojte s príslušným začiarkavacím poľom (alebo s celým fieldsetom) prostredníctvom atribútu <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">aria-describedby</code>.
            </li>
            <li>
                V prípade povinného poľa pridajte inputu atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">required</code>.
            </li>
            <li>
                Vizuálna hviezdička označujúca povinné pole musí byť vložená vo vnútri <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;span aria-hidden=&quot;true&quot;&gt;</code>, aby ju čítačky obrazovky neduplikovali. Samotná hviezdička nestačí, význam povinných polí musí byť vysvetlený na začiatku formulára.
            </li>
            <li>
                Pri chybovom stave musí mať input pridaný atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">aria-invalid=&quot;true&quot;</code> a chybová hláška musí byť na input prepojená cez <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">aria-describedby</code> (aby ju čítačka prečítala hneď po zameraní poľa).
            </li>
        </ul>
    </div>
);

// --- TAB 4: IMPLEMENTÁCIA (Aplikovaný SyntaxHighlighter + dedent) ---
const TabImplementacia = () => (
    <div className="animate-fade-in text-black space-y-10">
        
        <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Implementácia začiarkavacieho poľa z ID-SK Frontend</h2>
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
                            Zo stránky dokumentácie stiahnite HTML kód komponentu <a href="https://komponenty.idsk3.gov.sk/components/checkboxes" className="text-my-blue underline hover:text-blue-800 transition-colors"> začiarkavacie pole</a> a vložte ho do svojho HTML. Nezabudnite na atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">data-module=&quot;govuk-checkboxes&quot;</code>, bez ktorého nebude fungovať JavaScript (napr. podmienené odkrývanie obsahu).
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
                                <div class="govuk-form-group">
                                    <div class="govuk-checkboxes" data-module="govuk-checkboxes">
                                        <div class="govuk-checkboxes__item">
                                            <input class="govuk-checkboxes__input" id="národnosť" name="národnosť" type="checkbox" value="british">
                                            <label class="govuk-label govuk-checkboxes__label" for="národnosť">
                                                Britská
                                            </label>
                                        </div>
                                        <div class="govuk-checkboxes__item">
                                            <input class="govuk-checkboxes__input" id="národnosť-2" name="národnosť" type="checkbox" value="irish">
                                            <label class="govuk-label govuk-checkboxes__label" for="národnosť-2">
                                                Írska
                                            </label>
                                        </div>
                                        <div class="govuk-checkboxes__item">
                                            <input class="govuk-checkboxes__input" id="národnosť-3" name="národnosť" type="checkbox" value="other">
                                            <label class="govuk-label govuk-checkboxes__label" for="národnosť-3">
                                                Občan inej krajiny
                                            </label>
                                        </div>
                                    </div>
                                </div>
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
                        Pre import individuálneho IDSK komponentu (začiarkavacie pole) do svojho Sass súboru pridajte:
                        
                        <SyntaxHighlighter 
                            language="scss" 
                            style={vscDarkPlus} 
                            wrapLines={true}
                            wrapLongLines={true}
                            customStyle={{ padding: '1.25rem', fontSize: '0.875rem', margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
                            codeTagProps={{ style: { whiteSpace: 'pre-wrap', wordBreak: 'break-word' } }}
                            >
                            {dedent`
                                @import "node_modules/@id-sk/frontend/idsk/components/checkboxes/checkboxes";
                            `}
                        </SyntaxHighlighter>
                    </li>
                    <li>
                        <strong className="font-semibold block mb-2">Importujte Javascript</strong>
                        ID-SK (GOV.UK) komponenty s JavaScript správaním je nutné inicializovať. Pre inicializáciu konkrétne komponentu začiarkavacie pole použite tento kód:
                        
                       <SyntaxHighlighter 
                            language="javascript" 
                            style={vscDarkPlus} 
                            wrapLines={true}
                            wrapLongLines={true}
                            customStyle={{ padding: '1.25rem', fontSize: '0.875rem', margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
                            codeTagProps={{ style: { whiteSpace: 'pre-wrap', wordBreak: 'break-word' } }}
                            >
                            {dedent`
                                import { Checkboxes, initAll } from 'govuk-frontend'
                                
                                // Naštartovanie všetkých komponentov na stránke naraz (odporúčané)
                                initAll()
                            `}
                        </SyntaxHighlighter>
                    </li>
                </ol>
            </div>
        </section>
    </div>
);