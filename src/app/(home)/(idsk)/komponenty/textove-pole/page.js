'use client'

import React, { useState } from 'react';
import { MyTabBar, MyTabLink } from '@/app/(home)/_components/tab-bar/tabBar';
import { Input } from '@eslovensko/idsk-react';
import { InformationBanner } from '@eslovensko/idsk-react';

// Profi balíčky na zvýrazňovanie kódu
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import dedent from 'dedent';

// ============================================================================
// 1. HLAVNÝ KOMPONENT (Škrupina stránky a slovník tabov)
// ============================================================================
const TextInputPage = () => {
    const [activeTab, setActiveTab] = useState('pouzitie');

    // 🌟 SLOVNÍK TABOV: Tu len priradíme kľúč k danému podkomponentu
    const renderTabContent = {
        pouzitie: <TabPouzitie />,
        varianty: <TabVarianty />,
        pristupnost: <TabPristupnost />,
        kod: <TabImplementacia />
    };

    return (
        <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0 text-black">
            <title>Textové pole</title>
            
            <header>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
                    Textové pole (Input type='text')
                </h1>
            </header>
            
            <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-12">
                Textové polia predstavujú vstupné prvky, ktorých hlavným cieľom je zber dát získaných od používateľov
                s cieľom dodať im žiadanú informáciu alebo službu. Pre správne pochopenie vyžadovaného údaja
                je potrebné zrozumiteľne popísať názov textového poľa. Základným pravidlom použitia je oboznámiť používateľa o povinnosti vyplnenia textového poľa.
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

export default TextInputPage;


// ============================================================================
// 2. PODKOMPONENTY (Obsah jednotlivých tabov)
// ============================================================================

// --- TAB 1: POUŽITIE ---
const TabPouzitie = () => (
    <div className="animate-fade-in">
        <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-black mb-4">
            Použitie textového poľa
        </h2>
        
        {/* Ukážka Inputu na bodkovanom pozadí */}
        <div className="flex justify-center bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
            <div className="w-full max-w-[400px] py-7 my-6 px-4">
                <Input 
                    id="input-priklad"
                    inputSize='large'
                    name="meno"
                    label="Príklad textového poľa"
                    placeholder="Príklad placeholderu"
                    fullWidth={true}
                />
            </div>
        </div>

        <p className="text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8">
            Komponent textové pole sa primárne využíva vo formulároch. Veľkosť poľa zohľadňuje prípustný počet znakov daného poľa. Je potrebné zabezpečiť, aby koncový používateľ mohol zadať potrebné údaje aj na menších obrazovkách mobilných zariadení. Pri menších veľkostiach obrazoviek je vhodné škálovať polia na celú šírku obrazovky.
        </p>
        <p className="text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8">
            Samotná veľkosť vstupného poľa sa prispôsobuje typu údajov, ktoré bude používateľ zadávať - napríklad kratšie pole pre PSČ a dlhšie pre názov ulice.
            Label textového poľa je obmedzený na jeden riadok, pričom jeho maximálna šírka sa odvíja od odporúčaní pre čitateľnosť vzhľadom na použitú veľkosť fontu.
        </p>

        <div className="flex flex-wrap gap-8 sm:gap-12 mt-10">
            <div className="flex flex-col items-start flex-1 min-w-[280px]">
                <InformationBanner
                    ariaLabel="Správne použitie textového poľa"
                    type="banner"
                    variant="success"
                    hideCloseButton={true}
                >
                 <h3 className="text-lg sm:text-xl font-bold text-black leading-tight ml-2 mb-4">
                    Ako sa používa
                </h3>
                 <ul className="list-disc pl-5 space-y-3 text-sm tracking-wide leading-relaxed text-black mb-8 mt-4">
                    <li>zadávaný údaj je krátky voľný text.</li>
                    <li>údaj nemá pevne definovaný formát.</li>
                    <li>má používateľ zadať napr. meno a priezvisko, názov ulice, mesta alebo inú krátku informáciu.</li>
                    <li>veľkosť poľa zodpovedá očakávanej dĺžke textu.</li>
                    <li>nie je vhodné ani účelné použiť špecializovaný typ vstupu.</li>
                </ul>
                </InformationBanner>
            </div>
            
            <div className="flex flex-col items-start flex-1 min-w-[280px]">
                <InformationBanner
                    ariaLabel="Neprávne použitie textového poľa"
                    type="banner"
                    variant="warning"
                    hideCloseButton={true}
                >
                 <h3 className="text-lg sm:text-xl font-bold text-black leading-tight ml-2 mb-4">
                    Ako sa nepoužíva
                </h3>
                 <ul className="list-disc pl-5 space-y-3 text-sm tracking-wide leading-relaxed text-black mb-8 mt-4">
                    <li>ak je zadávaný údaj dlhý voľný text</li>
                    <li>ak údaj má pevne definovaný formát (e-mail, telefónne číslo dátum, atď.)</li>
                    <li>ak používateľ vyberá hodnotu zo zoznamu - použite select, radio button alebo checkbox</li>
                    <li>ak potrebujete vstup automaticky validovať podľa typu</li>
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
                <Input 
                    id="input-priklad-povinne"
                    inputSize='medium'
                    name="meno"
                    label="Príklad povinného poľa"
                    mandatory={true}
                    fullWidth={true}
                />
            </div>
            <div className="w-full max-w-[400px] px-4">
                <Input 
                    id="input-priklad-nepovinne"
                    inputSize='medium'
                    name="meno"
                    label="Príklad nepovinného poľa"
                    optionalText="(nepovinné pole)"
                    fullWidth={true}
                />
            </div>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-black mb-4 mt-8">Variant chybového a neaktívneho textového poľa</h3>
        <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
            <div className="w-full max-w-[400px] px-4">
                <Input 
                    id="input-priklad-chyba"
                    inputSize='medium'
                    name="meno"
                    label="Príklad chybového stavu"
                    errorMsg="Chybový text"
                    mandatory={true}
                    error={true}
                    fullWidth={true}
                />
            </div>
            <div className="w-full max-w-[400px] px-4">
                <Input 
                    id="input-priklad-disabled"
                    inputSize='medium'
                    name="meno"
                    label="Príklad neaktívneho stavu"
                    optionalText="(nepovinné pole)"
                    disabled={true}
                    fullWidth={true}
                />
            </div>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-black mb-4 mt-8">Varianty textového poľa s podnadpisom, s placeholderom a s popisom</h3>
        <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
            <div className="w-full max-w-[400px] px-4">
                <Input 
                    id="input-priklad-podnadpis"
                    inputSize='medium'
                    name="meno"
                    label="Príklad s podnadpisom"
                    subtitle="Podnadpis textového poľa"
                    mandatory={true}
                    fullWidth={true}
                />
            </div>
            <div className="w-full max-w-[400px] px-4">
                <Input 
                    id="input-priklad-placeholder"
                    inputSize='medium'
                    name="meno"
                    label="Príklad s placeholderom"
                    placeholder="Ján Novák"
                    mandatory={true}
                    fullWidth={true}
                />
            </div>
            <div className="w-full max-w-[400px] px-4">
                <Input 
                    id="input-priklad-popis"
                    inputSize='medium'
                    name="meno"
                    label="Príklad s popisným textom"
                    caption="Popisný text"
                    mandatory={true}
                    fullWidth={true}
                />
            </div>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-black mb-4 mt-8">Variant dátového poľa veľký/malý</h3>
        <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
            <div className="w-full max-w-[400px] px-4">
                <Input 
                    id="input-priklad-velky"
                    inputSize='large'
                    name="meno"
                    label="Variant textového poľa - veľký"
                    mandatory={true}
                    fullWidth={true}
                />
            </div>
            <div className="w-full max-w-[400px] px-4">
                <Input 
                    id="input-priklad-maly"
                    inputSize='medium'
                    name="meno"
                    label="Variant textového poľa - malý"
                    mandatory={true}
                    fullWidth={true}
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
            Komponent je v súlade s normami WCAG 2.2 AA. Komponent spĺňa požiadavky na kontrastné pomery a jeho súčasťou sú interakcie s klávesnicou a čítačkami obrazovky.
        </p>
        
        <h3 className="text-lg sm:text-xl font-bold text-black mb-4">
            Klávesové ovládanie
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8">
            <li><code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Tab</code> – presun zamerania klávesnicou do textového poľa alebo na ďalší prvok formulára.</li>
            <li><code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Shift + Tab</code> – presun zamerania klávesnicou na predchádzajúci prvok.</li>
            <li><code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Enter</code> – potvrdenie formulára (ak je pole súčasťou formulára).</li>
            <li><code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Esc</code> – zrušenie vstupu (iba ak je implementované správanie na úrovni formulára).</li>
            <li>Zadávanie textu funguje štandardne pomocou klávesnice.</li>
        </ul>
        
        <h3 className="text-lg sm:text-xl font-bold text-black mb-4">
            Základné pravidlá prístupnosti
        </h3>
        <ul className="list-disc pl-5 space-y-3 text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8">
            <li>
                Každý input musí mať jasný, programovo asociovaný label cez <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">for="id"</code> (v Reacte <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">htmlFor</code>).
            </li>
            <li>
                V prípade zadávania osobných údajov nezabudnite pridať tzv. <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">autocomplete</code>, napr.:<br className="hidden sm:block" />
                <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;label for="firstName"&gt;Krstné meno:&lt;/label&gt; &lt;input name="firstName" id="firstName" type="text" autocomplete="given-name" /&gt;</code>
            </li>
            <li>
                Prípadný <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">placeholder</code> slúži len pre príklad (napr.: <em>Jana Novotná</em>). Placeholder <strong>NEFUNGUJE</strong> ako náhrada labelu a hintu a <strong>NESMIE</strong> vysvetľovať funkciu textového poľa.
            </li>
            <li>
                Neaktívne pole (disabled) nesmie byť focusovateľné (zamerateľné klávesnicou).
            </li>
            <li>
                Prípadný hint prepojte na input cez atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">aria-describedby</code>.
            </li>
            <li>
                V prípade povinného poľa nezabudnite pridať inputu atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">required</code>.
            </li>
            <li>
                Hviezdička (označujúca povinné pole) musí byť vložená prostredníctvom elementu <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;span&gt;</code>, aby ju bolo možné pred čítačkami skryť prostredníctvom atribútu <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">aria-hidden="true"</code>.
            </li>
            <li>
                Nezabudnite, že samotná hviezdička na označenie povinného poľa nestačí - musí byť dodatočne vysvetlená pomocou vysvetlivky označenia povinných polí.
            </li>
            <li>
                Chybový hint musí mať atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800"> aria-describedby="error"</code> a okrem farby, ikony a hintu upozornenia nezabudnite pre čítačky pridať atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">aria-hidden="true"</code>.
            </li>
        </ul>
    </div>
);

// --- TAB 4: IMPLEMENTÁCIA (Aplikovaný SyntaxHighlighter + dedent) ---
const TabImplementacia = () => (
    <div className="animate-fade-in text-black space-y-10">
        
        <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Implementácia textového poľa z ID-SK Frontend</h2>
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
                        
                        {/* Zvýraznenie kódu pre štruktúru súborov (text/bash) */}
                        <SyntaxHighlighter 
                            language="bash" 
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
                        <strong className="block mb-2 text-sm sm:text-base">➜ Prepojte štýly</strong>
                        <p className="text-sm sm:text-base leading-relaxed md:leading-8 mb-4">
                            Do časti <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">head</code> vložte minifikované css. Na záver <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">body</code> pripojte minifikovaný javascript.
                        </p>
                        
                        {/* Zvýraznenie kódu pre HTML head */}
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
                                  </body> 
                                </html>
                            `}
                        </SyntaxHighlighter>
                    </div>

                    <div>
                        <strong className="block mb-2 text-sm sm:text-base">➜ Skopírujte HTML kód</strong>
                        <p className="text-sm sm:text-base leading-relaxed md:leading-8 mb-4">
                            Zo stránky dokumentácie stiahnite HTML kód komponentu <a href="https://komponenty.idsk3.gov.sk/components/input" className="text-my-blue underline hover:text-blue-800 transition-colors"> textové pole</a> a vložte ho do svojho HTML. Ak používate čisté HTML, musíte do značky <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;div&gt;</code> pridať atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">id</code>. Tento atribút musí byť unikátny v rámci domény.
                        </p>
                        
                        {/* Zvýraznenie kódu pre čisté HTML inputu */}
                        <SyntaxHighlighter 
                            language="html"
                            style={vscDarkPlus} 
                            wrapLines={true}
                            wrapLongLines={true}
                            customStyle={{ padding: '1.25rem', fontSize: '0.875rem', margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
                            codeTagProps={{ style: { whiteSpace: 'pre-wrap', wordBreak: 'break-word' } }}
                            >
                            {dedent`
                                <div class="govuk-form-group govuk-input-component">
                                  <label class="govuk-label govuk-body-m" for="input-example">
                                    Názov textového poľa
                                    <span class="govuk-body-s">(nepovinné)</span>
                                  </label>
                                  <div class="govuk-input-container">
                                    <input class="govuk-input" id="input-example" name="default" type="text">
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
                        Pre inštaláciu cez NPM spustite (po skončení inštalácie sa balík <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">@id-sk/frontend</code> objaví v <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">node_modules</code>):
                        
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
                        Do pripraveného súboru (či už .html alebo .njk) vložte kód, ktorý nájdete vyššie.
                    </li>
                    <li>
                        <strong className="font-semibold block mb-2">Importujte štýly</strong>
                        Pre import individuálneho IDSK komponentu, v tomto prípade Textového poľa, do svojho Sass súboru pridajte:
                        
                        <SyntaxHighlighter 
                            language="scss" 
                            style={vscDarkPlus} 
                            wrapLines={true}
                            wrapLongLines={true}
                            customStyle={{ padding: '1.25rem', fontSize: '0.875rem', margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
                            codeTagProps={{ style: { whiteSpace: 'pre-wrap', wordBreak: 'break-word' } }}
                            >
                            {dedent`
                                @import "node_modules/@id-sk/frontend/idsk/components/input/input";
                            `}
                        </SyntaxHighlighter>
                    </li>
                    <li>
                        <strong className="font-semibold block mb-2">Importujte Javascript</strong>
                        ID-SK Frontend komponenty s JavaScript správaním majú vo svojom markupe nastavený atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">data-module</code>. Pre import javascriptu textového poľa, vložte do .js súboru:
                        
                        <SyntaxHighlighter 
                            language="javascript" 
                            style={vscDarkPlus} 
                            wrapLines={true}
                            wrapLongLines={true}
                            customStyle={{ padding: '1.25rem', fontSize: '0.875rem', margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
                            codeTagProps={{ style: { whiteSpace: 'pre-wrap', wordBreak: 'break-word' } }}
                            >
                            {dedent`
                                import { Input, createAll } from 'govuk-frontend' 

                                createAll(Input)
                            `}
                        </SyntaxHighlighter>
                    </li>
                </ol>
            </div>
        </section>
    </div>
);