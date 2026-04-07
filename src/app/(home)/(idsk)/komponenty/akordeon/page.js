'use client'

import React, { useState } from 'react';
import { MyTabBar, MyTabLink } from '@/app/(home)/_components/tab-bar/tabBar';
import { CustomAccordion } from '@/app/(home)/_components/accordion/accordionCustom';

// Balíčky na zvýrazňovanie kódu
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import dedent from 'dedent';

// ============================================================================
// 1. HLAVNÝ KOMPONENT (Škrupina stránky a slovník tabov)
// ============================================================================
const AccordionPage = () => {
    const [activeTab, setActiveTab] = useState('pouzitie');

    const renderTabContent = {
        pouzitie: <TabPouzitie />,
        varianty: <TabVarianty />,
        pristupnost: <TabPristupnost />,
        kod: <TabImplementacia />
    };

    return (
        <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0 text-black">
            <title>Akordeón</title>
            
            <header>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight mb-8">
                    Akordeón
                </h1>
            </header>

            <p className="text-sm sm:text-base tracking-wide leading-relaxed text-black mb-12">
                Akordeón sa používa na zobrazovanie väčšieho množstva obsahu v obmedzenom priestore, ktorý je rozdelený do logických častí (sekcií). Používateľ si môže rozbaliť len tie sekcie, ktoré ho zaujímajú. Umožňuje tak udržať stránku prehľadnú a zabrániť zahlteniu informáciami.
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
            <div className="mt-8 text-black">
                {renderTabContent[activeTab]}
            </div>
        </div>
    );
}

export default AccordionPage;


// ============================================================================
// 2. PODKOMPONENTY (Obsah jednotlivých tabov)
// ============================================================================

// --- TAB 1: POUŽITIE ---
const TabPouzitie = () => (
    <div className="animate-fade-in">
        <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-black mb-4">
            Použitie Akordeónu
        </h2>
        
        {/* Ukážka na bodkovanom pozadí */}
        <div className="flex justify-center bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
            <div className="w-full max-w-[700px] py-7 my-6 px-4">
                <CustomAccordion 
                    heading={
                        <span className="text-md sm:text-lg font-bold tracking-wide leading-tight text-black block py-1">
                            Je možné zrušiť alebo stiahnuť notifikáciu po jej odoslaní?
                        </span>
                    } 
                    initiallyClosed={true}
                >
                    <div className="text-sm sm:text-base tracking-wide leading-relaxed text-black">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p className="mt-4">Consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.</p>
                    </div>
                </CustomAccordion>
            </div>
        </div>

        <p className="text-sm sm:text-base tracking-wide leading-relaxed text-black mb-8">
            Nadpis príslušnej lišty by mal byť v primeranej dĺžke, maximálne v 1 riadku a výstižne popisovať to, čo sa v danom akordeóne nachádza. Detailnejšie informácie o tom, čo je umiestnené v akordeóne, dodefinujte v popise pod nadpisom. Akordeón najlepšie funguje pre jednoduché texty a odkazy. Nepoužívajte akordeón na obsah, ktorý je dôležitý pre všetkých používateľov. Akordeón sa typicky používa na:
        </p>
        
        <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base tracking-wide leading-relaxed text-black mb-12">
            <li>zoskupenie sekcií s podrobnými informáciami, ktoré nie sú dôležité pre každého používateľa,</li>
            <li>zobrazovanie FAQ (často kladených otázok),</li>
            <li>zobrazenie podrobností k jednotlivým témam (napr. právne texty, technické detaily, vysvetlenia),</li>
            <li>návody a sprievodcovia aktivitou.</li>
        </ul>
        
        <h3 className="text-lg sm:text-xl font-bold text-black mb-4 leading-tight">
            Správanie komponentu:
        </h3>
        
        <p className="text-sm sm:text-base tracking-wide leading-relaxed text-black mb-4">
            Akordeón sa skladá z dvoch častí:
        </p>
        
        <ol className="list-decimal pl-5 space-y-2 text-sm sm:text-base tracking-wide leading-relaxed text-black mb-8">
            <li>Z hlavičky, ktorá obsahuje nadpis a ikonku (^/v) a je klikateľná po celej dĺžke riadku. Práve do tejto časti môžete umiestniť aj popisný text (ak je potrebný).</li>
            <li>Z obsahovej časti, ktorá sa otvorí práve po kliknutí na hlavičku, a obsahuje dlhší textový popis, prípadne odpoveď na otázku v nadpise.</li>
        </ol>

        <p className="text-sm sm:text-base tracking-wide leading-relaxed text-black mb-10">
            Každá sekcia sa kliknutím na celú plochu hlavičky sekcie rozbalí resp. zbalí, pričom sa zmení ikona – indikátor (ro)zbalenia. Po kliknutí sa (ro)zbalí príslušný panel s obsahom sekcie. Rozbalenie ďalšej sekcie nemá vplyv na uzavretie iného, už otvoreného obsahu. Naraz môže byť otvorených viacero sekcií, používateľ si kliknutím sám určí, ktorú sekciu chce zbaliť alebo rozbaliť.
        </p>
    </div>
);

// --- TAB 2: VARIANTY ---
const TabVarianty = () => (
    <div className="animate-fade-in">
        <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-black mb-4">
            Varianty a stavy
        </h2>
        
        <p className="text-sm sm:text-base tracking-wide leading-relaxed text-black mb-8">
             Akordeón je zložený zo sekcií, ktoré je možné rozbaliť/zbaliť individuálne, alebo všetky naraz tlačidlom “Otvoriť/Zavrieť všetky” sekcie. V prípade potreby dlhšieho nadpisu sekcie (viac ako 10 slov), je možné v hlavičke sekcie použiť popis.
        </p>
        
        <h3 className="text-lg sm:text-xl font-bold text-black mb-4">
            1. Variant akordeónu bez popisu a s popisom:
        </h3>
        
        <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-12">
            <div className="w-full max-w-[700px] px-4">
                <CustomAccordion 
                    heading={
                        <span className="text-md sm:text-lg font-bold tracking-wide leading-tight text-black block py-1">
                            Toto je variant akordeónu bez popisu
                        </span>
                    } 
                    initiallyClosed={true}
                >
                    <div className="text-sm sm:text-base tracking-wide leading-relaxed text-black">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </CustomAccordion>
            </div>
            
            <div className="w-full max-w-[700px] px-4 mt-6">
                 <CustomAccordion 
                    heading={
                        <span className="text-md sm:text-lg font-bold tracking-wide leading-tight text-black block py-1">
                            Toto je variant akordeónu s popisom
                        </span>
                    } 
                    subTitle="Tu môžete napísať detailnejšie informácie o tom, čo tento akordeón obsahuje."
                    initiallyClosed={true}
                >
                    <div className="text-sm sm:text-base tracking-wide leading-relaxed text-black">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </CustomAccordion>
            </div>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-black mb-4">
           2. Stavy akordeónu (Hover a Focus):
        </h3>
        <p className="text-sm sm:text-base tracking-wide leading-relaxed text-black mb-8">
             Akordeón zároveň obsahuje dva základné stavy, indikujúce jeho interaktivitu pre použitie myšou (hover) i klávesnicou (focus).
        </p>

        <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
            <div className="w-full max-w-[700px] px-4">
                <CustomAccordion 
                    className="demo-hover-state" 
                    heading={
                        <span className="text-md sm:text-lg font-bold tracking-wide leading-tight text-black block py-1">
                            Akordeón zobrazujúci zameranie myšou
                        </span>
                    } 
                >
                    <div className="text-sm sm:text-base tracking-wide leading-relaxed text-black">
                        <p>Zameranie myšou (hover stav) je kľúčovým prvkom pre vizuálnu indikáciu interaktívneho komponentu. Používateľ vďaka nemu môže vidieť, že nasledujúci akordeón je možné zbaliť a rozbaliť.</p>
                    </div>
                </CustomAccordion>
            </div>
            
            <div className="w-full max-w-[700px] px-4 mt-6">
                 <CustomAccordion 
                    className="demo-focus-state" 
                    heading={
                        <span className="text-md sm:text-lg font-bold tracking-wide leading-tight text-black block py-1">
                            Akordeón zobrazujúci zameranie klávesnicou
                        </span>
                    } 
                >
                    <div className="text-sm sm:text-base tracking-wide leading-relaxed text-black">
                        <p>Zameranie klávesnicou (focus stav) je kľúčovým prvkom prístupnosti, a to nielen pre vizuálnu indikáciu interaktívneho komponentu pre používateľov klávesnice, ale primárne pre používateľov asistenčných zariadení. Používateľ vďaka nemu môže vidieť, že nasledujúci akordeón je možné zbaliť a rozbaliť.</p>
                    </div>
                </CustomAccordion>
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
        <p className="text-sm sm:text-base tracking-wide leading-relaxed text-black mb-8">
            Komponent je v súlade s normami WCAG 2.1 AA. Komponent spĺňa požiadavky na kontrastné pomery a jeho súčasťou sú interakcie s klávesnicou a čítačkami obrazovky. 
        </p>
        
        <h3 className="text-lg sm:text-xl font-bold text-black mb-4">
            Klávesové ovládanie
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base tracking-wide leading-relaxed text-black mb-8">
            <li><code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Enter</code> alebo <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Medzerník</code> – rozbalí / zbalí sekciu.</li>
            <li><code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Tab</code> – prechádza medzi hlavičkami.</li>
            <li><code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Shift + Tab</code> – ide späť.</li>
        </ul>
        
        <h3 className="text-lg sm:text-xl font-bold text-black mb-4">
            Základné pravidlá prístupnosti komponentu Akordeón
        </h3>
        <ul className="list-disc pl-5 space-y-3 text-sm sm:text-base tracking-wide leading-relaxed text-black mb-8">
            <li>
                Všetky interaktívne prvky sú implementované ako tlačidlá <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;button&gt;</code>.
            </li>
            <li>
                Pridajte atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">aria-expanded="true/false"</code>, ktorý označuje či je sekcia rozbalená alebo zbalená.
            </li>
            <li>
                Pridajte atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">aria-controls</code>, ktorý prepája tlačidlo s konkrétnym obsahom sekcie (cez ID), vďaka čomu asistenčné technológie vedia, že kliknutím na tlačidlo sa zmení viditeľnosť práve tejto sekcie.
            </li>
            <li>
                Pridajte atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">aria-label</code>, ktorý kombinuje názov sekcie, prípadný súhrn a stavovú správu (otvorené/zatvorené) pre asistenčné technológie.
            </li>
            <li>
                Obsah musí zostať vždy dostupný aj bez zapnutého JavaScriptu.
            </li>
            <li>
                Nezabudnite ikonu pre asistenčné zariadenia skryť pomocou <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">aria-hidden="true"</code> (v prípade <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">svg</code>) alebo prázdneho <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">alt=""</code> (v prípade obrázkov).
            </li>
            <li>
                Akordeón musí mať funkčné stavy zamerania myšou (hover) a zamerania klávesnicou (focus), tak ako to je zobrazené v časti Varianty.
            </li>
        </ul>
    </div>
);

// --- TAB 4: IMPLEMENTÁCIA ---
const TabImplementacia = () => (
    <div className="animate-fade-in text-black space-y-10 w-full min-w-0">
        
        <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Implementácia akordeónu z ID-SK Frontend</h2>
            <p className="text-sm sm:text-base leading-relaxed mb-8">
                Komponenty z knižnice ID-SK Frontend môžete do svojho projektu integrovať dvoma spôsobmi v závislosti od vašej technologickej infraštruktúry:
            </p>
            <ul className="list-disc pl-5 space-y-3 text-sm sm:text-base mb-8">
                <li><strong>Statická HTML implementácia</strong> – vhodná pre projekty bez Node.js alebo bundlera.</li>
                <li><strong>Pokročilá integrácia (NPM + SCSS + JS)</strong> – vhodná pre projekty so správou zdrojov a build procesom.</li>
            </ul>
        </section>

        <section>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Základné požiadavky</h3>
            <p className="text-sm sm:text-base leading-relaxed mb-4">Pred začiatkom integrácie sa uistite, že máte:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base mb-8">
                <li><strong className="font-semibold">Node.js:</strong> verzia 4.2.0 alebo vyššia.</li>
                <li><strong className="font-semibold">Dart Sass:</strong> verzia 1.0.0 alebo vyššia.</li>
                <li><strong className="font-semibold">Nunjucks:</strong> verzia 3.0.0 alebo vyššia (ak chcete používať makrá).</li>
            </ul>
        </section>

        {/* STATICKÁ HTML IMPLEMENTÁCIA */}
        <section>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Možnosti implementácie</h3>
            
            <div className="my-8">
                <h4 className="text-base sm:text-lg font-bold text-black mb-3">1. Statická HTML implementácia (HTML + minifikované súbory)</h4>
                <p className="text-sm sm:text-base leading-relaxed mb-4">
                    Ak váš projekt nevyužíva Node.js alebo bundler (napr. Webpack, Vite), môžete použiť hotové buildy. Pri inštalácii z <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">dist</code> sa používajú kompilované a minifikované verzie šablóny so štýlmi. To znamená, že nebudete môcť:
                </p>
                <ul className="list-disc pl-5 mb-8 space-y-1 text-sm sm:text-base">
                    <li>selektívne zahrnúť CSS alebo JavaScript pre jednotlivé komponenty</li>
                    <li>zostaviť si vlastné štýly alebo komponenty na základe palety alebo typografických kombinácií</li>
                    <li>prispôsobiť si kód (napríklad prepísať farby alebo povoliť globálne štýly)</li>
                    <li>použiť dynamické komponenty z Nunjucks šablón</li>
                </ul>

                <div className="space-y-6">
                    <div>
                        <strong className="block mb-2 text-sm sm:text-base">➜ Stiahnite a zahrňte zdroje</strong>
                        <p className="text-sm sm:text-base leading-relaxed mb-4">
                            Stiahnite si najnovšie kompilované a minifikované verzie šablón štýlov, JavaScript a assetov. Skopírujte celý <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">assets</code> priečinok a minifikované súbory do rootu vášho projektu. Štruktúra by mala vyzerať približne takto:
                        </p>
                        
                        <div className="w-full min-w-0 rounded-lg border border-gray-700 bg-[#1E1E1E]">
                            <SyntaxHighlighter 
                                language="bash" 
                                style={vscDarkPlus} 
                                wrapLines={true}
                                wrapLongLines={true}
                                customStyle={{ padding: '1.25rem', fontSize: '0.875rem', margin: 0, background: 'transparent', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
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
                    </div>

                    <div>
                        <strong className="block mb-2 text-sm sm:text-base">➜ Prepojte štýly</strong>
                        <p className="text-sm sm:text-base leading-relaxed mb-4">
                            Do časti <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">head</code> vložte minifikované css. Na záver <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">body</code> pripojte minifikovaný javascript.
                        </p>
                        
                        <div className="w-full min-w-0 rounded-lg border border-gray-700 bg-[#1E1E1E]">
                            <SyntaxHighlighter 
                                language="html" 
                                style={vscDarkPlus} 
                                wrapLines={true}
                                wrapLongLines={true}
                                customStyle={{ padding: '1.25rem', fontSize: '0.875rem', margin: 0, background: 'transparent', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
                                codeTagProps={{ style: { whiteSpace: 'pre-wrap', wordBreak: 'break-word' } }}
                            >
                                {dedent`
                                    <!DOCTYPE html> 
                                    <html> 
                                      <head> 
                                        <title>Ukážka Akordeónu</title> 
                                        <link rel="stylesheet" href="frontend.min.css"> 
                                      </head> 
                                      <body> 
                                        <script type="module" src="./frontend.min.js"></script> 
                                      </body> 
                                    </html>
                                `}
                            </SyntaxHighlighter>
                        </div>
                    </div>

                    <div>
                        <strong className="block mb-2 text-sm sm:text-base">➜ Skopírujte HTML kód</strong>
                        <p className="text-sm sm:text-base leading-relaxed mb-4">
                            Zo stránky dokumentácie stiahnite HTML kód komponentu <a href="https://komponenty.idsk3.gov.sk/components/accordion" className="text-my-blue underline hover:text-blue-800 transition-colors"> akordeón</a> a vložte ho do svojho HTML. Ak používate čisté HTML, musíte do značky <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;div&gt;</code> pridať atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">id</code>. Tento atribút musí byť unikátny v rámci domény, aby bolo možné udržať stav rozbalenia akordeónu.
                        </p>
                        
                        <div className="w-full min-w-0 rounded-lg border border-gray-700 bg-[#1E1E1E]">
                            <SyntaxHighlighter 
                                language="html" 
                                style={vscDarkPlus} 
                                wrapLines={true}
                                wrapLongLines={true}
                                customStyle={{ padding: '1.25rem', fontSize: '0.875rem', margin: 0, background: 'transparent', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
                                codeTagProps={{ style: { whiteSpace: 'pre-wrap', wordBreak: 'break-word' } }}
                            >
                                {dedent`
                                    <div class="govuk-accordion" data-module="govuk-accordion" id="with-descriptions"> 
                                      <div class="govuk-accordion__section"> 
                                        <div class="govuk-accordion__section-header "> 
                                          <h2 class="govuk-accordion__section-heading"> 
                                            <span class="govuk-accordion__section-button" id="with-descriptions-heading-1"> 
                                              Názov 
                                            </span> 
                                          </h2> 
                                        </div> 
                                        <div id="with-descriptions-content-1" class="govuk-accordion__section-content"> 
                                          <p class="govuk-body"> 
                                            Potrebujeme poznať vašu štátnu príslušnosť, aby sme mohli zistiť, v ktorých voľbách máte právo voliť.
                                          </p> 
                                        </div> 
                                      </div> 
                                      <div class="govuk-accordion__section"> 
                                        <div class="govuk-accordion__section-header "> 
                                          <h2 class="govuk-accordion__section-heading"> 
                                            <span class="govuk-accordion__section-button" id="with-descriptions-heading-2"> 
                                              Názov 
                                            </span> 
                                          </h2> 
                                            <div class="govuk-accordion__section-summary govuk-body" id="with-descriptions-summary-2"> 
                                              Popis 
                                            </div> 
                                        </div> 
                                        <div id="with-descriptions-content-2" class="govuk-accordion__section-content"> 
                                          <p class="govuk-body"> 
                                            Potrebujeme poznať vašu štátnu príslušnosť, aby sme mohli zistiť, v ktorých voľbách máte právo voliť. 
                                          </p> 
                                        </div> 
                                      </div> 
                                    </div>
                                `}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </div>

            {/* POKROČILÁ NPM IMPLEMENTÁCIA */}
            <div className="my-8">
                <h4 className="text-base sm:text-lg font-bold text-black mb-4">2. Pokročilá integrácia (NPM + SCSS + JS)</h4>
                
                <ol className="list-decimal pl-5 space-y-6 text-sm sm:text-base">
                    <li>
                        <strong className="block mb-2">Nainštalujte balík</strong>
                        Pre inštaláciu cez NPM spustite (po skončení inštalácie sa balík <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">@id-sk/frontend</code> objaví v <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">node_modules</code>):
                        
                        <div className="w-full min-w-0 rounded-lg border border-gray-700 bg-[#1E1E1E] mt-4">
                            <SyntaxHighlighter 
                                language="bash" 
                                style={vscDarkPlus} 
                                wrapLines={true}
                                wrapLongLines={true}
                                customStyle={{ padding: '1.25rem', fontSize: '0.875rem', margin: 0, background: 'transparent', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
                                codeTagProps={{ style: { whiteSpace: 'pre-wrap', wordBreak: 'break-word' } }}
                            >
                                {dedent`
                                    npm install nunjucks --save
                                    npm i @id-sk/frontend@3.0.0-beta.0-hotfix
                                `}
                            </SyntaxHighlighter>
                        </div>
                    </li>
                    <li>
                        <strong className="block mb-2">Pridajte Nunjucks/HTML</strong>
                        Do pripraveného súboru (či už .html alebo .njk) vložte kód, ktorý nájdete vyššie.
                    </li>
                    <li>
                        <strong className="font-semibold block mb-2">Importujte štýly</strong>
                        Pre import individuálneho IDSK komponentu, v tomto prípade Akordeónu, do svojho Sass súboru pridajte:
                        
                        <div className="w-full min-w-0 rounded-lg border border-gray-700 bg-[#1E1E1E] mt-4">
                            <SyntaxHighlighter 
                                language="scss" 
                                style={vscDarkPlus} 
                                wrapLines={true}
                                wrapLongLines={true}
                                customStyle={{ padding: '1.25rem', fontSize: '0.875rem', margin: 0, background: 'transparent', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
                                codeTagProps={{ style: { whiteSpace: 'pre-wrap', wordBreak: 'break-word' } }}
                            >
                                {dedent`
                                    @import "node_modules/@id-sk/frontend/idsk/components/accordion/accordion";
                                `}
                            </SyntaxHighlighter>
                        </div>
                    </li>
                    <li>
                        <strong className="font-semibold block mb-2">Importujte Javascript</strong>
                        ID-SK Frontend komponenty s JavaScript správaním majú vo svojom markupe nastavený atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">data-module</code>. Pre import javascriptu Akordeónu, vložte do .js súboru:
                        
                        <div className="w-full min-w-0 rounded-lg border border-gray-700 bg-[#1E1E1E] mt-4">
                            <SyntaxHighlighter 
                                language="javascript" 
                                style={vscDarkPlus} 
                                wrapLines={true}
                                wrapLongLines={true}
                                customStyle={{ padding: '1.25rem', fontSize: '0.875rem', margin: 0, background: 'transparent', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
                                codeTagProps={{ style: { whiteSpace: 'pre-wrap', wordBreak: 'break-word' } }}
                            >
                                {dedent`
                                    import { Accordion, createAll } from 'govuk-frontend' 

                                    createAll(Accordion)
                                `}
                            </SyntaxHighlighter>
                        </div>
                    </li>
                </ol>
            </div>
        </section>
    </div>
);