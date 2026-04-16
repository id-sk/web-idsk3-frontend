'use client'

import React, { useState, useRef } from 'react';
import { MyTabBar, MyTabLink } from '@/app/(home)/_components/tab-bar/tabBar';
import { DropZone } from '@eslovensko/idsk-react';
import InformationBanner from '@/app/(home)/_components/information-banner/informationBannerCustom';
import { SecondaryButton } from '@eslovensko/idsk-react';

// Profi balíčky na zvýrazňovanie kódu
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import dedent from 'dedent';

// ============================================================================
// 1. HLAVNÝ KOMPONENT 
// ============================================================================
const DropZonePage = () => {
    const [activeTab, setActiveTab] = useState('pouzitie');

    const renderTabContent = {
        pouzitie: <TabPouzitie />,
        varianty: <TabVarianty />,
        pristupnost: <TabPristupnost />,
        kod: <TabImplementacia />
    };
    return (
        <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0 text-black">
            <title>Pole na nahratie súboru </title>
            
            <header>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
                    Pole na nahratie súboru (File Upload)
                </h1>
            </header>
            
            <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-12">
                Pole na nahratie súboru je prvok používateľského rozhrania, ktorý umožňuje používateľovi vybrať  a nahrať jeden alebo viac súborov zo svojho zariadenia.
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

export default DropZonePage;


// ============================================================================
// 2. PODKOMPONENTY (Obsah jednotlivých tabov)
// ============================================================================

// --- TAB 1: POUŽITIE ---
const TabPouzitie = () => (
    <div className="animate-fade-in">
        <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-black mb-4">
            Použitie poľa na nahratie súboru
        </h2>
        
        <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
            <div className="w-full max-w-[600px] px-4">
               <DropZone 
                        dropzoneTitle="Nahrajte životopis"
                        subtitle="Nahrajte súbor alebo ho sem presuňte."
                        description={
                            <>
                                Podporované formáty: JPG, PNG, PDF <br />
                                Maximálna veľkosť súborov je 500 MB
                            </>
                            }
                        buttonText="Vyberte súbory"
                        filesTitle="Nahraté súbory"
                        maxSize={524288000}
                        acceptFiles={{ 
                            'application/pdf': ['.pdf'], 
                            'image/jpeg': ['.jpeg', '.jpg'],
                            'image/png': ['.png']
                        }} 
                    />
                </div>
        </div>

        <p className="text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8">
            Pole na nahratie súboru umožňuje nahrať súbor. Používateľ môže súbor vybrať zo zariadenia alebo ho presunúť do poľa. V popise uveďte:
        </p>
        <ul className="list-disc pl-5 space-y-3 text-sm sm:text-base tracking-wide leading-relaxed text-black mb-8 mt-4">
            <li>koľko súborov možno nahrať</li>
            <li>maximálnu veľkosť súboru</li>
            <li>povolené formáty (ak sú obmedzené)</li>
        </ul>
        <p className="text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8">
            Pole na nahratie súboru použite napríklad na nahratie obrázkov, dokumentov alebo zvukových súborov. 
            Po nahratí súboru sa zobrazí informácia o úspešnom nahratí. Ak sa súbor nepodarí nahrať, pole zobrazí chybové hlásenie.
        </p>
        <div className="flex flex-wrap gap-8 sm:gap-12 mt-10">
            <div className="flex flex-col items-start flex-1 min-w-[280px]">
                <InformationBanner
                    ariaLabel="Správne použitie poľa na nahratie súboru"
                    type="banner"
                    variant="success"
                    hideCloseButton={true}
                >
                 <h3 className="text-lg sm:text-xl font-bold text-black leading-tight ml-2 mb-4">
                    Ako sa používa
                </h3>
                 <ul className="list-disc pl-5 space-y-3 text-sm tracking-wide leading-relaxed text-black mb-8 mt-4">
                    <li>ak používateľ potrebuje dodať dokument, obrázok alebo iný súbor,</li>
                    <li>ak súbor nie je možné nahradiť textovým vstupom,</li>
                    <li>s jasnou informáciou o maximálnej veľkosti súboru</li>
                    <li>s jasnou informáciou o povolených formátoch</li>
                    <li>so spätnou väzbu o úspešnosti alebo neúspešnosti nahratia</li>
                </ul>
                </InformationBanner>
            </div>
            
            <div className="flex flex-col items-start flex-1 min-w-[280px]">
                <InformationBanner
                    ariaLabel="Nesprávne použitie poľa na nahratie súboru"
                    type="banner"
                    variant="warning"
                    hideCloseButton={true}
                >
                 <h3 className="text-lg sm:text-xl font-bold text-black leading-tight ml-2 mb-4">
                    Ako sa nepoužíva
                </h3>
                 <ul className="list-disc pl-5 space-y-3 text-sm tracking-wide leading-relaxed text-black mb-8 mt-4">
                    <li>súbor nie je nevyhnutný,</li>
                    <li>neupozorníte na veľkosť súboru,</li>
                    <li>použijete iba drag & drop bez inej možnosti,</li>
                    <li>chýba alebo je nejasný názov poľa,</li>
                    <li>nezobrazujete stavové hlásenia,</li>
                    <li>nahratie prebieha bez jasnej spätnej väzby.</li>
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
        
        <h3 className="text-lg sm:text-xl font-bold text-black mb-4 mt-8">Variant drag and drop a variant klasické dátové pole (funguje aj bez javascriptu)</h3>
        <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
            <div className="w-full max-w-[600px] px-4">
                <DropZone 
                        dropzoneTitle="Nahrajte životopis"
                        subtitle="Nahrajte súbor alebo ho sem presuňte."
                        description={
                            <>
                                Podporované formáty: JPG, PNG, PDF <br />
                                Maximálna veľkosť súborov je 500 MB
                            </>
                            }
                        buttonText="Vyberte súbory"
                        filesTitle="Nahraté súbory"
                        maxSize={524288000}
                        acceptFiles={{ 
                            'application/pdf': ['.pdf'], 
                            'image/jpeg': ['.jpeg', '.jpg'],
                            'image/png': ['.png']
                        }} 
                    />
            </div>
                <div className="w-full max-w-[600px] px-4">
                    <label className="text-xl sm:text-2xl font-bold text-black mb-4 mt-8" htmlFor="simple-file-upload">
                            Nahrajte životopis
                        </label>
                        
                        <p className="text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-3">
                            Podporované formáty: JPG, PNG, PDF.
                            Maximálna veľkosť súborov je 500 MB.
                        </p>
                        
                        <input 
                            id="custom-file-upload" 
                            name="custom-file-upload" 
                            type="file" 
                            className="sr-only"
                            aria-describedby="custom-file-upload-hint"
                            accept=".pdf" 
                        />
                        
                        <label 
                            htmlFor="custom-file-upload"
                            className="inline-flex items-center justify-center gap-2 self-start 
                                px-5 py-3 text-base font-bold tracking-wide leading-6 text-center text-white 
                                bg-blue-600 rounded-md transition-all duration-200
                                outline-none
                                hover:shadow-none 
                                hover:ring-[4px] 
                                hover:ring-[#757575]
                            "
                            role="button"
                            tabIndex={0}
                        >
                            Vyberte súbory
                    </label>
                </div>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-black mb-4 mt-8">Zrušený variant poľa na nahratie súboru</h3>
        <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
            <div className="w-full max-w-[600px] px-4">
                <DropZone 
                    variant="inactive"
                    dropzoneTitle="Nahrajte prílohy k žiadosti"
                    subtitle="Súbory môžete presunúť sem"
                    description="alebo"
                    buttonText="Vyberte súbory"
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
            Pole na nahratie súboru spĺňa požiadavky WCAG 2.1 AA. Podporuje ovládanie klávesnicou a asistenčnými technológiami.          
        </p>
        
        <h3 className="text-lg sm:text-xl font-bold text-black mb-4">
            Klávesové ovládanie
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8">
            <li><code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Tab</code> – presun zamerania klávesnice (focus) na nasledujúci prvok.</li>
            <li><code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Shift + Tab</code> – presun zamerania klávesnice (focus) na predchádzajúci prvok.</li>
            <li><code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Medzerník</code> – výber aktuálne zameranej možnosti.</li>
            <li><code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Enter + Medzerník</code> – aktivovanie komponentu.</li>
        </ul>
        
        <h3 className="text-lg sm:text-xl font-bold text-black mb-4">
            Základné pravidlá prístupnosti
        </h3>
        <ul className="list-disc pl-5 space-y-3 text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8">
           <li>
                Vždy použite element <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;label&gt;</code> pre jednoznačný, programovo určiteľný názov poľa na nahratie súboru. Nezabudnite ho spárovať s konkrétnym inputom cez atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">for</code> odkazujúci na jedinečné <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">id</code> prvku <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;input type=&quot;file&quot;&gt;</code>.
            </li>
            <li>
                Celý komponent je potrebné implementovať ako orientačný bod (landmark) použitím prvku <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;div&gt;</code> s atribútom <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">role=&quot;region&quot;</code> a s priradeným názvom prostredníctvom <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">aria-label</code>, napríklad <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;div role=&quot;region&quot; aria-label=&quot;Pole na nahratie súboru&quot;&gt;...&lt;/div&gt;</code>.
            </li>
            <li>
                Atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">aria-describedby</code> je potrebné implementovať priamo na prvku <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;input type=&quot;file&quot;&gt;</code>. Tento atribút musí odkazovať na id prvku obsahujúceho spresňujúce informácie k poľu (hint) a zároveň aj na id prvku obsahujúceho chybové hlásenie.
            </li>
            <li>
                Tlačidlo na výber súboru musí mať rovnako implementovaný atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">aria-describedby</code>, ktorý odkazuje na id prvku obsahujúceho spresňujúce informácie a zároveň aj na id prvku obsahujúceho chybové hlásenie.
            </li>
            <li>
                Pre obmedzenie formátov nahrávaných súborov používajte atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">accept</code>, do ktorého definujete prípony (napríklad <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">accept=&quot;.pdf,.jpg,.png&quot;</code>).
            </li>
            <li>
                V prípade chybového stavu musí byť prvku <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;input type=&quot;file&quot;&gt;</code> nastavený atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">aria-invalid=&quot;true&quot;</code>.
            </li>
            <li>
                V prípade povinnej voľby nezabudnite pridať inputu atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">required</code>. Vizuálna hviezdička označujúca povinné pole musí byť vložená vo vnútri <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;span aria-hidden=&quot;true&quot;&gt;</code>, aby ju čítačky obrazovky neduplikovali.
            </li>
            <li>
                Dekoratívne ikonky (napríklad ikona obláčika na nahratie alebo ikony jednotlivých typov súborov) musia byť skryté pre asistenčné technológie pomocou atribútu <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">aria-hidden=&quot;true&quot;</code>.
            </li>
        </ul>
    </div>
);

// --- TAB 4: IMPLEMENTÁCIA ---
const TabImplementacia = () => (
    <div className="animate-fade-in text-black space-y-10">
        
        <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Implementácia poľa na nahratie súboru z ID-SK Frontend</h2>
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
                            Zo stránky dokumentácie stiahnite HTML kód komponentu <a href="https://komponenty.idsk3.gov.sk/components/file-upload" className="text-my-blue underline hover:text-blue-800 transition-colors"> pole na nahratie súboru</a> a vložte ho do svojho HTML. Nezabudnite na atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">data-module=&quot;govuk-fileUpload&quot;</code>, bez ktorého nebude fungovať JavaScript (napríklad drag & drop funkcionalita alebo validácia).
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
                                <div class="govuk-form-group file-upload-component js-enabled " data-module="govuk-fileUpload">
                                    <h2 class="govuk-heading-m">Nahraj súbor</h2>
                                    <div class="upload-container" aria-label="Sekcia nahrávania súborov" role="region">


                                    <input class="govuk-file-upload just-file file-input"  data-file-input  id="fileInput" type="file" aria-describedby="uploadInstructions" hidden  >
                                        <div class="upload-box">
                                        <label for="fileInput" aria-label="Nahratie súboru"></label>
                                        <div class="upload-icon" aria-hidden="true">
                                            <span class="material-icons" aria-hidden="true">cloud_upload</span>
                                        </div>
                                        <div class="upload-text" id="uploadInstructions">
                                            <p class="govuk-body"><b>Zvoľte súbor a nahrajte ho</b></p>
                                            <p class="govuk-body">alebo preneste zvolenú prílohu sem (max. veľkosť 10MB)</p>
                                        </div>
                                        <button class="govuk-button govuk-button__basic upload-button" aria-label="Pridať prílohu" >
                                            <span class="material-icons" aria-hidden="true">add</span>
                                            <span>Pridať prílohu</span>
                                        </button>
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
                        Pre import individuálneho IDSK komponentu (pole na nahratie súboru) do svojho Sass súboru pridajte:
                        
                        <SyntaxHighlighter 
                            language="scss" 
                            style={vscDarkPlus} 
                            wrapLines={true}
                            wrapLongLines={true}
                            customStyle={{ padding: '1.25rem', fontSize: '0.875rem', margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
                            codeTagProps={{ style: { whiteSpace: 'pre-wrap', wordBreak: 'break-word' } }}
                            >
                            {dedent`
                                @import "node_modules/@id-sk/frontend/idsk/components/file-upload/file-upload";
                            `}
                        </SyntaxHighlighter>
                    </li>
                    <li>
                        <strong className="font-semibold block mb-2">Importujte Javascript</strong>
                        ID-SK (GOV.UK) komponenty s JavaScript správaním je nutné inicializovať. Pre inicializáciu konkrétneho komponentu pole na nahratie súboru použite tento kód:
                        
                        <SyntaxHighlighter 
                            language="javascript" 
                            style={vscDarkPlus} 
                            wrapLines={true}
                            wrapLongLines={true}
                            customStyle={{ padding: '1.25rem', fontSize: '0.875rem', margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
                            codeTagProps={{ style: { whiteSpace: 'pre-wrap', wordBreak: 'break-word' } }}
                            >
                            {dedent`
                                import { FileUpload, initAll } from 'govuk-frontend'
                                
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