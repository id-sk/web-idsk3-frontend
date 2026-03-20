'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Card from '@/app/(home)/_components/article/article';
import { MyTabBar, MyTabLink } from '@/app/(home)/_components/tab-bar/tabBar';
import { Input } from '@eslovensko/idsk-react';

const TextInputPage = () => {
    const [activeTab, setActiveTab] = useState('pouzitie');
   
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

            {/* ========================================== */}
            {/* OBSAH TABOV */}
            {/* ========================================== */}
            
            {/* TAB: POUŽITIE */}
            {activeTab === 'pouzitie' && (
                <div className="animate-fade-in mt-8">
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

                    <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-8">
                        Komponent textové pole sa primárne využíva vo formulároch. Veľkosť poľa zohľadňuje prípustný počet znakov daného poľa. Je potrebné zabezpečiť, aby koncový používateľ mohol zadať potrebné údaje aj na menších obrazovkách mobilných zariadení. Pri menších veľkostiach obrazoviek je vhodné škálovať polia na celú šírku obrazovky.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-8">
                        Samotná veľkosť vstupného poľa sa prispôsobuje typu údajov, ktoré bude používateľ zadávať - napríklad kratšie pole pre PSČ a dlhšie pre názov ulice.
                        Label textového poľa je obmedzený na jeden riadok, pričom jeho maximálna šírka sa odvíja od odporúčaní pre čitateľnosť vzhľadom na použitú veľkosť fontu.
                    </p>

                    <div className="flex flex-wrap gap-8 sm:gap-12 mt-10">
                        <div className="flex flex-col items-start flex-1 min-w-[280px]">
                            <h3 className="text-lg sm:text-xl font-bold text-black leading-tight">
                                Ako sa používa
                            </h3>
                            <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-8">
                                Textové pole použite, keď...                            
                            </p>
                            <ul className="space-y-3 text-sm sm:text-base tracking-wide leading-relaxed text-black mb-8">
                                <li className="flex items-start gap-3">
                                    <span className="shrink-0 text-base">✅</span>
                                    <span>zadávaný údaj je krátky voľný text.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="shrink-0 text-base">✅</span>
                                    <span>údaj nemá pevne definovaný formát.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="shrink-0 text-base">✅</span>
                                    <span>má používateľ zadať napr. meno a priezvisko, názov ulice, mesta alebo inú krátku informáciu.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="shrink-0 text-base">✅</span>
                                    <span>veľkosť poľa zodpovedá očakávanej dĺžke textu.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="shrink-0 text-base">✅</span>
                                    <span>nie je vhodné ani účelné použiť špecializovaný typ vstupu.</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="flex flex-col items-start flex-1 min-w-[280px]">
                            <h3 className="text-lg sm:text-xl font-bold text-black leading-tight">
                                Ako sa nepoužíva
                            </h3>
                            <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-8">
                                Textové pole nepoužívajte spôsobom, že...                            
                            </p>
                            <ul className="space-y-3 text-sm sm:text-base tracking-wide leading-relaxed text-black mb-8">
                                <li className="flex items-start gap-3">
                                    <span className="shrink-0 text-base">❌</span>
                                    <span>údaj má presne definovaný formát (napr. e-mail, telefón, dátum, heslo).</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="shrink-0 text-base">❌</span>
                                    <span>používateľ vyberá hodnotu zo zoznamu (použite rozbaľovací zoznam, prepínacie pole alebo začiarkavacie pole).</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="shrink-0 text-base">❌</span>
                                    <span>používateľ zadáva dlhý súvislý text (použite viacriadkové textové pole).</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="shrink-0 text-base">❌</span>
                                    <span>potrebujete vstup automaticky validovať podľa typu.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            {/* TAB: VARIANTY */}
            {activeTab === 'varianty' && (
                <div className="animate-fade-in mt-8">
                    <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-black mb-4">
                        Varianty
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-4">
                        Komponent textové pole umožňuje použitie 5 základných stavov:
                    </p>
                    <ol className="list-decimal pl-5 space-y-2 text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-8">
                        <li>Východiskový stav (Default)</li>
                        <li>Zameraný myšou (Hover)</li>
                        <li>Zameraný klávesnicou (Focus)</li>
                        <li>Chybový stav (Error)</li>
                        <li>Neaktívny stav (Disabled)</li>
                    </ol>
                    <Image
                        src="/images/textove-pole/vsetky-varianty.svg"
                        width={1100}
                        height={250}
                        quality={100}
                        alt="Varianty poľa"
                        className="w-full h-auto border border-gray-200 rounded-lg shadow-sm bg-white mb-12"
                    />

                    <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-black mt-12 mb-6">
                        Nastavenie
                    </h2>
                    
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-4 mt-8">Variant povinného/nepovinného textového poľa</h3>
                        <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
                            <div className="flex1 w-full max-w-[400px] my-4 px-4">
                                <Input 
                                    id="input-priklad"
                                    inputSize='medium'
                                    name="meno"
                                    label="Príklad textového poľa"
                                    mandatory={true}
                                    fullWidth={true}
                                />
                            </div>
                            <div className="flex1 w-full max-w-[400px] my-4 px-4">
                                <Input 
                                    id="input-priklad"
                                    inputSize='medium'
                                    name="meno"
                                    label="Príklad textového poľa"
                                    optionalText="(nepovinné pole)"
                                    fullWidth={true}
                                />
                            </div>
                        </div>

                    <h3 className="text-lg sm:text-xl font-bold text-black mb-4 mt-8">Varianty textového poľa s podnadpisom, s placeholderom a s popisom</h3>
                        <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
                            <div className="flex1 w-full max-w-[400px] my-4 px-4">
                                <Input 
                                    id="input-priklad"
                                    inputSize='medium'
                                    name="meno"
                                    label="Príklad textového poľa s podnadpisom"
                                    subtitle="Podnadpis textového poľa"
                                    fullWidth={true}
                                />
                            </div>
                            <div className="flex1 w-full max-w-[400px] my-4 px-4">
                                <Input 
                                    id="input-priklad"
                                    inputSize='medium'
                                    name="meno"
                                    label="Príklad textového poľa s placeholderom"
                                    placeholder="Ján Novák"
                                    fullWidth={true}
                                />
                            </div>
                            <div className="flex1 w-full max-w-[400px] my-4 px-4">
                                <Input 
                                    id="input-priklad"
                                    inputSize='medium'
                                    name="meno"
                                    label="Príklad textového poľa s popisným textom"
                                    caption="Popisný text"
                                    fullWidth={true}
                                />
                            </div>
                        </div>

                    <h3 className="text-lg sm:text-xl font-bold text-black mb-4 mt-8">5. Variant dátového poľa veľký/malý</h3>
                    <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
                            <div className="flex1 w-full max-w-[400px] my-4 px-4">
                                <Input 
                                    id="input-priklad"
                                    inputSize='large'
                                    name="meno"
                                    label="Variant textového poľa - veľký"
                                    fullWidth={true}
                                />
                            </div>
                            <div className="flex1 w-full max-w-[400px] my-4 px-4">
                                <Input 
                                    id="input-priklad"
                                    inputSize='medium'
                                    name="meno"
                                    label="Variant textového poľa - malý"
                                    fullWidth={true}
                                />
                            </div>
                        </div>
                </div>
            )}

            {/* TAB: PRÍSTUPNOSŤ */}
            {activeTab === 'pristupnost' && (
                <div className="animate-fade-in mt-8">
                    <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-black mb-6">
                        Prístupnosť (Accessibility)
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-8">
                        Komponent je v súlade s normami WCAG 2.2 AA. Komponent spĺňa požiadavky na kontrastné pomery a jeho súčasťou sú interakcie s klávesnicou a čítačkami obrazovky.
                    </p>
                    
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-4">
                        Klávesové ovládanie
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-8">
                        <li><code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Tab</code> – presun zamerania klávesnicou do textového poľa alebo na ďalší prvok formulára.</li>
                        <li><code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Shift + Tab</code> – presun zamerania klávesnicou na predchádzajúci prvok.</li>
                        <li><code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Enter</code> – potvrdenie formulára (ak je pole súčasťou formulára).</li>
                        <li><code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Esc</code> – zrušenie vstupu (iba ak je implementované správanie na úrovni formulára).</li>
                        <li>Zadávanie textu funguje štandardne pomocou klávesnice.</li>
                    </ul>
                    
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-4">
                        Základné pravidlá prístupnosti
                    </h3>
                    <ul className="list-disc pl-5 space-y-3 text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-8">
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
                            Chybový hint musí mať atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800"> aria-describedby="error"</code> a Okrem farby, ikony a hintu upozornenia nezabudnite pre čítačky pridať atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">aria-hidden="true"</code>.
                        </li>
                    </ul>
                </div>
            )}

            {/* TAB: KÓD */}
            {activeTab === 'kod' && (
                <div className="space-y-10 text-black">
    {/* ÚVODNÁ ČASŤ */}
    <section>
        <h2 className="text-xl sm:text-2xl font-bold mt-3 mb-10">Implementácia textového poľa z ID-SK Frontend</h2>
        <p className="text-sm sm:text-base leading-relaxed mb-4">
            Komponenty z knižnice ID-SK Frontend môžete do svojho projektu integrovať dvoma spôsobmi v závislosti od vašej technologickej infraštruktúry:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
            <li><strong>Statická HTML implementácia</strong> – vhodná pre projekty bez Node.js alebo bundlera.</li>
            <li><strong>Pokročilá integrácia (NPM + SCSS + JS)</strong> – vhodná pre projekty so správou zdrojov a build procesom.</li>
        </ul>
    </section>

    {/* POŽIADAVKY */}
    <section>
        <h3 className="text-md sm:text-xl font-bold mb-4">Základné požiadavky</h3>
        <p className="text-sm sm:text-base leading-relaxed mb-4">Pred začiatkom integrácie sa uistite, že máte:</p>
        <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
            <li><strong className="font-semibold">Node.js:</strong> verzia 4.2.0 alebo vyššia.</li>
            <li><strong className="font-semibold">Dart Sass:</strong> verzia 1.0.0 alebo vyššia.</li>
            <li><strong className="font-semibold">Nunjucks:</strong> verzia 3.0.0 alebo vyššia (ak chcete používať makrá).</li>
        </ul>
    </section>

    {/* MOŽNOSŤ 1: HTML */}
    <section>
        <h3 className="text-md sm:text-xl font-bold mb-4">Možnosti implementácie</h3>
        
        <div className="my-8">
            <h4 className="text-md sm:text-lg font-bold text-black mb-3">1. Statická HTML implementácia (HTML + minifikované súbory)</h4>
            <p className="text-sm sm:text-base leading-relaxed mb-4">
                Ak váš projekt nevyužíva Node.js alebo bundler (napr. Webpack, Vite), môžete použiť hotové buildy. Pri inštalácii z <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">dist</code> sa používajú kompilované a minifikované verzie šablóny so štýlmi. To znamená, že nebudete môcť:
            </p>
            <ul className="list-disc pl-5 mb-6 space-y-1 text-sm sm:text-base">
                <li>selektívne zahrnúť CSS alebo JavaScript pre jednotlivé komponenty</li>
                <li>zostaviť si vlastné štýly alebo komponenty na základe palety alebo typografických kombinácií</li>
                <li>prispôsobiť si kód (napríklad prepísať farby alebo povoliť globálne štýly)</li>
                <li>použiť dynamické komponenty z Nunjucks šablón</li>
            </ul>

            <div className="space-y-6">
                {/* Krok: Stiahnutie zdrojov */}
                <div>
                    <strong className="block mb-2 text-sm sm:text-base">➜ Stiahnite a zahrňte zdroje</strong>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                        Stiahnite si najnovšie kompilované a minifikované verzie šablón štýlov, JavaScript a assetov. Skopírujte celý <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">assets</code> priečinok a minifikované súbory do rootu vášho projektu. Štruktúra by mala vyzerať približne takto:
                    </p>
                    <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto w-full max-w-full min-w-0">
                        <pre className="text-sm font-mono text-gray-100 leading-relaxed whitespace-pre-wrap break-words">
                            <code>
{`project/ 
│ 
├── assets - images  
           - fonts 
├── index.html 
├── frontend.min.css 
├── frontend.min.js 
├── frontend.min.css.map 
└── frontend.min.js.map`}
                            </code>
                        </pre>
                    </div>
                </div>

                {/* Krok: Prepojenie štýlov */}
                <div>
                    <strong className="block mb-2 text-sm sm:text-base">➜ Prepojte štýly</strong>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                        Do časti <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">head</code> vložte minifikované css. Na záver <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">body</code> pripojte minifikovaný javascript.
                    </p>
                    <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto w-full max-w-full min-w-0">
                        <pre className="text-sm font-mono text-gray-100 leading-relaxed whitespace-pre-wrap break-words">
                            <code>
{`<!DOCTYPE html> 
<html> 
  <head> 
    <title>Ukážka</title> 
    <link rel="stylesheet" href="frontend.min.css"> 
  </head> 
  <body> 
    <script type="module" src="./frontend.min.js"></script> 
  </body> 
</html>`}
                            </code>
                        </pre>
                    </div>
                </div>

                {/* Krok: HTML */}
                <div>
                    <strong className="block mb-2 text-sm sm:text-base">➜ Skopírujte HTML kód</strong>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                        Zo stránky dokumentácie stiahnite HTML kód komponentu Textového poľa a vložte ho do svojho HTML. Ak používate čisté HTML, musíte do značky <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;div&gt;</code> pridať atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">id</code>. Tento atribút musí byť unikátny v rámci domény.
                    </p>
                    <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto w-full max-w-full min-w-0">
                        <pre className="text-sm font-mono text-gray-100 leading-relaxed whitespace-pre-wrap break-words">
                            <code>
{`<div class="govuk-form-group govuk-input-component">

  <label class="govuk-label  govuk-body-m" for="input-example">
    Názov textového poľa
      <span class="govuk-body-s">(nepovinné)</span>
  </label>
  <div class="govuk-input-container">
    <input class="govuk-input  "  id="input-example" name="default" type="text">


  </div>
</div>`}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>

        {/* MOŽNOSŤ 2: NPM */}
        <div className="my-8">
            <h4 className="text-lg font-bold text-black mb-3">2. Pokročilá integrácia (NPM + SCSS + JS)</h4>
            
            <ol className="list-disc pl-5 space-y-6 text-sm sm:text-base">
                <li>
                    <strong className="block mb-2">Nainštalujte balík</strong>
                    Pre inštaláciu cez NPM spustite (po skončení inštalácie sa balík <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">@id-sk/frontend</code> objaví v <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">node_modules</code>):
                    <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto mt-2 w-full max-w-full min-w-0">
                        <pre className="text-sm font-mono text-gray-100 whitespace-pre-wrap break-words">
                            <code>
{`npm install nunjucks --save
npm i @id-sk/frontend@3.0.0-beta.0-hotfix`}
                            </code>
                        </pre>
                    </div>
                </li>
                <li>
                    <strong className="block mb-2">Pridajte Nunjucks/HTML</strong>
                    Do pripraveného súboru (či už .html alebo .njk) vložte kód, ktorý nájdete vyššie, prípadne na stránke komponentov v detaile komponentu - <a href="https://komponenty.idsk3.gov.sk/components/input" className="text-my-blue underline hover:text-blue-800 transition-colors">Textové pole</a>.
                </li>
                <li>
                    <strong className="font-semibold block mb-2">Importujte štýly</strong>
                    Pre import individuálneho IDSK komponentu, v tomto prípade Textového poľa, do svojho Sass súboru pridajte:
                    <div className="bg-gray-800 rounded-lg p-4 mt-2 w-full max-w-full min-w-0 overflow-x-auto">
                        <pre className="text-sm font-mono text-gray-100 whitespace-pre-wrap break-words">
                            <code>
{`@import "node_modules/@id-sk/frontend/idsk/components/input/input";`}
                            </code>
                        </pre>
                    </div>
                </li>
                <li>
                    <strong className="font-semibold block mb-2">Importujte Javascript</strong>
                    ID-SK Frontend komponenty s JavaScript správaním majú vo svojom markupe nastavený atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">data-module</code>. Pre import javascriptu textového poľa, vložte do .js súboru:
                    <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto mt-2 w-full max-w-full min-w-0">
                        <pre className="text-sm font-mono text-gray-100 whitespace-pre-wrap break-words">
                            <code>
{`import { Input, createAll } from 'govuk-frontend' 

createAll(Input)`}
                            </code>
                        </pre>
                    </div>
                </li>
            </ol>
        </div>
    </section>
</div>
            )}
        </div>
    );
}

export default TextInputPage;