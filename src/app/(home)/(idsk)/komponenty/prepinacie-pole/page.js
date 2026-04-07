'use client'

import React, { useState } from 'react';
import { MyTabBar, MyTabLink } from '@/app/(home)/_components/tab-bar/tabBar';
import { RadioButton } from '@eslovensko/idsk-react';
import { InformationBanner } from '@eslovensko/idsk-react';

// Profi balíčky na zvýrazňovanie kódu
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import dedent from 'dedent';

// ============================================================================
// 1. HLAVNÝ KOMPONENT 
// ============================================================================
const radioButton = () => {
    const [activeTab, setActiveTab] = useState('pouzitie');

    const renderTabContent = {
        pouzitie: <TabPouzitie />,
        varianty: <TabVarianty />,
        pristupnost: <TabPristupnost />,
        kod: <TabImplementacia />
    };

    return (
        <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0 text-black">
            <title>Prepínacie pole</title>
            
            <header>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
                    Prepínacie pole (Radios)
                </h1>
            </header>
            
            <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-12">
                Prepínacie pole je interaktívny prvok, ktorý používateľovi umožňuje zapnúť alebo vypnúť určitú funkciu alebo stav. Používateľ prepína medzi stavmi kliknutím na prepínacie pole. Pri navrhovaní prepínacieho poľa by sa mala zabezpečiť jeho jasná viditeľnosť a ľahká klikateľnosť.
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

export default radioButton;


// ============================================================================
// 2. PODKOMPONENTY (Obsah jednotlivých tabov)
// ============================================================================

// --- TAB 1: POUŽITIE ---
const TabPouzitie = () => (
    <div className="animate-fade-in">
        <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-black mb-4">
            Použitie prepínacieho poľa
        </h2>
        
        <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
            <div className="w-full max-w-[400px] px-4">
                <RadioButton 
                    inputSize='large'
                    name="radio"
                    label="Pole č.1"
                    fullWidth={true}
                />
            </div>
            <div className="w-full max-w-[400px] px-4">
                <RadioButton 
                    inputSize='large'
                    name="radio"
                    label="Pole č.2"
                    fullWidth={true}
                />
            </div>
        </div>

        <p className="text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8">
            Komponent prepínacie pole umožňuje používateľom vybrať iba jednu z viacerých navrhovaných možností. Tento komponent sa najčastejšie využíva vo formulároch. Prepínacie pole je prevažne používané s popisom, ktorý objasňuje každú z možností, aby bolo používateľovi jasné, ktorú z možností má zvoliť.        </p>
        <p className="text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8">
            Komponent funguje aj bez použitia skriptovacieho jazyka JavaScript, pričom aplikovanie jazyka JavaScript môže byť použité pre rozšírenú funcionalitu. 
            V prípade, že si koncový používateľ vyberá pomocou prepínacích polí z viac ako dvoch možností, prepínacie polia sa spravidla zarovnávajú pod seba, ak nie sú prepínacie polia použité ako škály pri zbere spätnej väzby.
        </p>

        <div className="flex flex-wrap gap-8 sm:gap-12 mt-10">
            <div className="flex flex-col items-start flex-1 min-w-[280px]">
                <InformationBanner
                    ariaLabel="Správne použitie prepínacieho poľa"
                    type="banner"
                    variant="success"
                    hideCloseButton={true}
                >
                 <h3 className="text-lg sm:text-xl font-bold text-black leading-tight ml-2 mb-4">
                    Ako sa používa
                </h3>
                 <ul className="list-disc pl-5 space-y-3 text-sm tracking-wide leading-relaxed text-black mb-8 mt-4">
                    <li>ak si používateľ môže vybrať iba jednu možnosť</li>
                    <li>ak sú možnosti vzájomne sa vylučujúce</li>
                    <li>ak je vhodné zobraziť všetky možnosti naraz</li>
                    <li>ak potrebujete napr. výber spôsobu platby alebo doručenia</li>
                    <li>ak zoskupujte možnosti do jednej logickej skupiny</li>
                </ul>
                </InformationBanner>
            </div>
            
            <div className="flex flex-col items-start flex-1 min-w-[280px]">
                <InformationBanner
                    ariaLabel="Neprávne použitie prepínacieho poľa"
                    type="banner"
                    variant="warning"
                    hideCloseButton={true}
                >
                 <h3 className="text-lg sm:text-xl font-bold text-black leading-tight ml-2 mb-4">
                    Ako sa nepoužíva
                </h3>
                 <ul className="list-disc pl-5 space-y-3 text-sm tracking-wide leading-relaxed text-black mb-8 mt-4">
                    <li>keď používateľ potrebuje vybrať viac možností naraz - použite začiarkavacie pole</li>
                    <li>keď je možností príliš veľa (napr. viac ako 7) - vtedy použite rozbaľovacie pole</li>
                    <li>bez kontextu, otázky alebo menovky</li>
                    <li>ako navigačný prvok</li>
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
        
        <h3 className="text-lg sm:text-xl font-bold text-black mb-4 mt-8">Variant začiarknutého/nezačiarknutého prepínacieho poľa</h3>
        <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
            <div className="w-full max-w-[400px] px-4">
                <RadioButton 
                    inputSize='large'
                    name="radio-group-1"
                    label="Menovka (Predvolene začiarknuté)"
                    defaultChecked={true}
                    fullWidth={true}
                />
            </div>
            <div className="w-full max-w-[400px] px-4">
                <RadioButton 
                    inputSize='large'
                    name="radio-group-1"
                    label="Menovka (Nezačiarknuté)"
                    fullWidth={true}
                />
            </div>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-black mb-4 mt-8">Varianty prepínacieho poľa - zrušený a chybový</h3>
        <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
            <div className="w-full max-w-[400px] px-4">
                <RadioButton
                    inputSize='large'
                    name="radio-group-disabled" // Unikátne meno
                    label="Menovka (Neaktívne)"
                    fullWidth={true}
                    disabled={true}
                />
            </div>
            <div className="w-full max-w-[400px] px-4">
                <RadioButton 
                    inputSize='large'
                    name="radio-group-error" // Unikátne meno
                    label="Menovka (Chyba)"
                    error={true}
                    fullWidth={true}
                />
            </div>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-black mb-4 mt-8">Variant prepínacieho poľa veľký/malý</h3>
        <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
            <div className="w-full max-w-[400px] px-4">
                <RadioButton 
                    inputSize='large'
                    name="radio-group-size"
                    label="Menovka (Veľký variant)"
                    fullWidth={true}
                />
            </div>
            <div className="w-full max-w-[400px] px-4">
                <RadioButton 
                    inputSize='small'
                    name="radio-group-size"
                    label="Menovka (Malý variant)"
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
            Prepínacie pole spĺňa požiadavky WCAG 2.1 AA. Spĺňa požiadavky na kontrastné pomery a jeho súčasťou sú plnohodnotné interakcie s klávesnicou a asistenčnými technológiami (čítačkami obrazovky).  
        </p>
        
        <h3 className="text-lg sm:text-xl font-bold text-black mb-4">
            Klávesové ovládanie
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8">
            <li><code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Tab</code> – presun zamerania klávesnicou na aktuálne vybrané pole v skupine (alebo na prvé, ak nie je vybrané žiadne).</li>
            <li><code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Shift + Tab</code> – presun zamerania na predchádzajúci interaktívny prvok mimo skupiny.</li>
            <li><code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Šípky (↑ ↓ ← →)</code> – pohyb medzi jednotlivými možnosťami v rámci skupiny (šípky zvyčajne automaticky menia výber).</li>
            <li><code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Medzerník (Space)</code> – výber aktuálne zameranej možnosti (ak používate manuálne potvrdzovanie výberu).</li>
        </ul>
        
        <h3 className="text-lg sm:text-xl font-bold text-black mb-4">
            Základné pravidlá prístupnosti
        </h3>
        <ul className="list-disc pl-5 space-y-3 text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8">
            <li>
                Vždy použite element <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;label&gt;</code> pre popis prepínacieho poľa a nezabudnite ho programovo spárovať s konkrétnym inputom cez atribúty <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">for</code> a <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">id</code>.
            </li>
            <li>
                Udržujte menovky (label) a legendy krátke a jasné. V prípade potreby dlhšieho vysvetlenia využite doplňujúci text (hint).
            </li>
            <li>
                Všetky prepínacie polia z jednej logickej skupiny (1 skupina = 1 téma) musia byť obalené v tagu <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;fieldset&gt;</code>. Samotná hlavná otázka pre túto skupinu musí byť implementovaná cez natívny tag <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;legend&gt;</code>.
            </li>
            <li>
                Všetky prepínacie polia v rámci jednej skupiny musia mať identický atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">name="rovnake_meno"</code>. Ak je tento atribút odlišný, polia nebudú fungovať ako vzájomne sa vylučujúce možnosti a prehliadač s nimi nebude vedieť správne pracovať.
            </li>
            <li>
                Snažte sa udržať počet možností v skupine menší ako 10. Zoraďte ich v logickom poradí (napríklad od A po Z, chronologicky alebo od najpravdepodobnejšej voľby).
            </li>
            <li>
                Užívateľsky kritická, právna alebo obmedzujúca voľba (napr. <em>"Áno, chcem odoberať newsletter"</em>) by nikdy nemala byť predvybraná (tzv. default checked).
            </li>
            <li>
                Prípadný hint (nápovedu) k celej skupine alebo ku konkrétnemu poľu prepojte prostredníctvom atribútu <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">aria-describedby</code>.
            </li>
            <li>
                V prípade povinnej voľby nezabudnite pridať inputu atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">required</code>. Vizuálna hviezdička označujúca povinné pole musí byť vložená vo vnútri <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;span aria-hidden="true"&gt;</code>, aby ju čítačky obrazovky neduplikovali.
            </li>
            <li>
                Pri chybovom stave musí mať input pridaný atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">aria-invalid="true"</code> a chybová hláška musí byť na neho prepojená cez <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">aria-describedby</code>.
            </li>
        </ul>
    </div>
);

const TabImplementacia = () => (
    <div className="animate-fade-in text-black space-y-10">
        
        <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Implementácia prepínacieho poľa z ID-SK Frontend</h2>
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
                            Zo stránky dokumentácie stiahnite HTML kód komponentu <a href="https://komponenty.idsk3.gov.sk/components/radios" className="text-my-blue underline hover:text-blue-800 transition-colors"> prepínacie pole</a> a vložte ho do svojho HTML. Nezabudnite na atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">data-module="govuk-radios"</code>, bez ktorého nebude fungovať JavaScript (napr. podmienené odkrývanie obsahu).
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
                                  <fieldset class="govuk-fieldset">
                                    <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
                                      <h1 class="govuk-fieldset__heading">
                                        Kde žijete?
                                      </h1>
                                    </legend>
                                    <div class="govuk-radios" data-module="govuk-radios">
                                      <div class="govuk-radios__item">
                                        <input class="govuk-radios__input" id="where-do-you-live" name="where-do-you-live" type="radio" value="slovensko">
                                        <label class="govuk-label govuk-radios__label" for="where-do-you-live">
                                          Slovensko
                                        </label>
                                      </div>
                                      <div class="govuk-radios__item">
                                        <input class="govuk-radios__input" id="where-do-you-live-2" name="where-do-you-live" type="radio" value="zahranicie">
                                        <label class="govuk-label govuk-radios__label" for="where-do-you-live-2">
                                          Zahraničie
                                        </label>
                                      </div>
                                    </div>
                                  </fieldset>
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
                        Pre import individuálneho IDSK komponentu (prepínacie pole) do svojho Sass súboru pridajte:
                        
                        <SyntaxHighlighter 
                            language="html" 
                            style={vscDarkPlus} 
                            wrapLines={true}
                            wrapLongLines={true}
                            customStyle={{ padding: '1.25rem', fontSize: '0.875rem', margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
                            codeTagProps={{ style: { whiteSpace: 'pre-wrap', wordBreak: 'break-word' } }}
                            >
                            {dedent`
                                @import "node_modules/@id-sk/frontend/idsk/components/radios/radios";
                            `}
                        </SyntaxHighlighter>
                    </li>
                    <li>
                        <strong className="font-semibold block mb-2">Importujte Javascript</strong>
                        ID-SK (GOV.UK) komponenty s JavaScript správaním je nutné inicializovať. Pre inicializáciu konkrétne komponentu prepínacie pole použite tento kód:
                        
                        <SyntaxHighlighter 
                            language="html" 
                            style={vscDarkPlus} 
                            wrapLines={true}
                            wrapLongLines={true}
                            customStyle={{ padding: '1.25rem', fontSize: '0.875rem', margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
                            codeTagProps={{ style: { whiteSpace: 'pre-wrap', wordBreak: 'break-word' } }}
                            >
                            {dedent`
                                import { Radios, initAll } from 'govuk-frontend'
                                
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