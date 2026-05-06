'use client'

import React, { useState } from 'react';
import { MyTabBar, MyTabLink } from '@/app/(home)/_components/tab-bar/tabBar';
import { Select } from '@eslovensko/idsk-react';
import InformationBanner from '@/app/(home)/_components/information-banner/informationBannerCustom';

// Profi balíčky na zvýrazňovanie kódu
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import dedent from 'dedent';

// ============================================================================
// 1. HLAVNÝ KOMPONENT (Škrupina stránky a slovník tabov)
// ============================================================================
const SelectPage = () => {
    const [activeTab, setActiveTab] = useState('pouzitie');

    const renderTabContent = {
        pouzitie: <TabPouzitie />,
        varianty: <TabVarianty />,
        pristupnost: <TabPristupnost />,
        kod: <TabImplementacia />
    };

    return (
        <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0 text-black">
            <title>Rozbaľovacie pole</title>
            
            <header>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
                    Rozbaľovacie pole (Select)
                </h1>
            </header>
            
            <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-12">
                Rozbaľovacie pole je interaktívny prvok, ktorý umožňuje používateľovi vybrať jednu možnosť z ponuky dostupných hodnôt. 
                Po kliknutí na pole používateľ otvorí zoznam možností (rozbaľovací zoznam) a z neho zvolí požadovanú položku. Vybraná možnosť sa následne zobrazí v základnom (zatvorenom) stave poľa.
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

            <div className="mt-8">
                {renderTabContent[activeTab]}
            </div>
        </div>
    );
}

export default SelectPage;


// ============================================================================
// 2. PODKOMPONENTY (Obsah jednotlivých tabov)
// ============================================================================

// --- TAB 1: POUŽITIE ---
const TabPouzitie = () => (
    <div className="animate-fade-in">
        <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-black mb-4">
            Použitie rozbaľovacieho poľa
        </h2>
        
        <div className="flex justify-center bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
            <div className="w-full max-w-[400px] py-7 my-6 px-4">
                <Select 
                    id="vyber-polozku"
                    name="vyber"
                    label="Vyberte si položku zo zoznamu"
                    inputSize="large"
                    fullWidth={true}
                    >
                        <option value="">-- Vyberte položku --</option>
                        <option value="polozka-1">Položka 1</option>
                        <option value="polozka-2">Položka 2</option>
                        <option value="polozka-3">Položka 3</option>
                </Select>
            </div>
        </div>

        <p className="text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8">
            Rozbaľovacie pole (select) slúži na výber jednej hodnoty zo zoznamu možností v rámci formulára. Používateľ po kliknutí otvorí zoznam a vyberie požadovanú položku; následne pole zobrazí vybranú hodnotu v zatvorenom stave. Select je vhodný najmä v situáciách, keď potrebujete šetriť priestor alebo keď zoznam obsahuje viacero možností. Funguje aj bez JavaScriptu, čo z neho robí spoľahlivý natívny formulárový prvok.
        </p>

        <div className="flex flex-wrap gap-8 sm:gap-12 mt-10">
            <div className="flex flex-col items-start flex-1 min-w-[280px]">
                <InformationBanner
                    ariaLabel="Správne použitie rozbaľovacieho poľa"
                    type="banner"
                    variant="basic"
                    hideCloseButton={true}
                    >
                    <h3 className="text-lg sm:text-xl font-bold text-black leading-tight ml-2 mb-4">
                        Ako sa používa
                    </h3>
                    <ul className="list-disc pl-5 space-y-3 text-sm tracking-wide leading-relaxed text-black mb-8 mt-4">
                        <li>Zoznam obsahuje 5 až 20 vzájomne sa vylučujúcich možností.</li>
                        <li>Položky sú logicky zoradené (napr. abecedne, chronologicky alebo od najčastejšej voľby).</li>
                        <li>Rozbaľovací zoznam neprekáža inému dôležitému obsahu.</li>
                        <li>použite s overením v reálnom čase.</li>
                        <li>Používajte s krátkymi textami možností, ktoré nepresahujú jeden riadok.</li>
                    </ul>
                </InformationBanner>
            </div>
            
            <div className="flex flex-col items-start flex-1 min-w-[280px]">
                <InformationBanner
                    ariaLabel="Nesprávne použitie rozbaľovacieho poľa"
                    type="banner"
                    variant="warning"
                    hideCloseButton={true}
                >
                 <h3 className="text-lg sm:text-xl font-bold text-black leading-tight ml-2 mb-4">
                    Ako sa nepoužíva
                </h3>
                 <ul className="list-disc pl-5 space-y-3 text-sm tracking-wide leading-relaxed text-black mb-8 mt-4">
                    <li>je možností príliš málo (menej ako 5) – použite Prepínacie pole</li>
                    <li>je možností extrémne veľa – použite prvok s našepkávačom a vyhľadávaním (listbox alebo combobox).</li>
                    <li>potrebujete vybrať viac ako jednu položku naraz - použite Začiarkavacie políčka</li>
                    <li>výber zmení kontext stránky (napr. funguje ako navigácia)</li>
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
        
        <h3 className="text-lg sm:text-xl font-bold text-black mb-4 mt-8">Variant povinného/nepovinného rozbaľovacieho poľa</h3>
        <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
            <div className="w-full max-w-[400px] px-4">
                <Select 
                    id="select-unrequired"
                    name="vyber"
                    label="Príklad povinného poľa"
                    placeholder='-- Vyberte položku --'
                    inputSize="medium"
                    mandatory={true}
                    fullWidth={true}
                >
                    <option value="">-- Vyberte položku --</option>
                    <option value="polozka-1">Položka 1</option>
                    <option value="polozka-2">Položka 2</option>
                    <option value="polozka-3">Položka 3</option>
                </Select>
            </div>
            <div className="w-full max-w-[400px] px-4">
                <Select 
                    id="seclet-required"
                    name="vyber"
                    label="Príklad nepovinného poľa (nepovinné pole)"
                    placeholder='-- Vyberte položku --'
                    inputSize="medium"
                    fullWidth={true}
                >
                    <option value="">-- Vyberte položku --</option>
                    <option value="polozka-1">Položka 1</option>
                    <option value="polozka-2">Položka 2</option>
                    <option value="polozka-3">Položka 3</option>
                </Select>
            </div>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-black mb-4 mt-8">Variant chybového, neaktívneho rozbaľovacieho poľa a rozbaľovacieho poľa s podnadpisom</h3>
        <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
            <div className="w-full max-w-[400px] px-4">
                <Select 
                    id="select-priklad-chyba"
                    inputSize='medium'
                    name="vyber"
                    label="Príklad chybového stavu"
                    errorMsg="Chybový text"
                    mandatory={true}
                    error={true}
                    fullWidth={true}
                >
                    <option value="">-- Vyberte položku --</option>
                    <option value="polozka-1">Položka 1</option>
                    <option value="polozka-2">Položka 2</option>
                    <option value="polozka-3">Položka 3</option>
                </Select>
            </div>
            <div className="w-full max-w-[400px] px-4">
                <Select 
                    id="select-priklad-disabled"
                    inputSize='medium'
                    name="vyber"
                    label="Príklad neaktívneho stavu"
                    optionalText="(nepovinné pole)"
                    disabled={true}
                    fullWidth={true}
                >
                    <option value="">-- Vyberte položku --</option>
                    <option value="polozka-1">Položka 1</option>
                    <option value="polozka-2">Položka 2</option>
                    <option value="polozka-3">Položka 3</option>
                </Select>
            </div>
            <div className="w-full max-w-[400px] px-4">
                <Select 
                    id="select-priklad-podnadpis"
                    inputSize='medium'
                    name="meno"
                    label="Príklad s podnadpisom"
                    subtitle="Podnadpis rozbaľovacieho poľa"
                    mandatory={true}
                    fullWidth={true}
                >
                    <option value="">-- Vyberte položku --</option>
                    <option value="polozka-1">Položka 1</option>
                    <option value="polozka-2">Položka 2</option>
                    <option value="polozka-3">Položka 3</option>
                </Select>
            </div>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-black mb-4 mt-8">Variant rozbaľovacieho poľa veľký/malý</h3>
        <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
            <div className="w-full max-w-[400px] px-4">
                <Select 
                    id="select-priklad-velky"
                    inputSize='medium'
                    name="vyber"
                    label="Variant rozbaľovacieho poľa - veľký"
                    mandatory={true}
                    fullWidth={true}
                >
                    <option value="">-- Vyberte položku --</option>
                    <option value="polozka-1">Položka 1</option>
                    <option value="polozka-2">Položka 2</option>
                    <option value="polozka-3">Položka 3</option>
                </Select>
            </div>
            <div className="w-full max-w-[400px] px-4">
                <Select 
                    id="select-priklad-maly"
                    inputSize='small'
                    name="vyber"
                    label="Variant rozbaľovacieho poľa - malý"
                    mandatory={true}
                    fullWidth={true}
                >
                    <option value="">-- Vyberte položku --</option>
                    <option value="polozka-1">Položka 1</option>
                    <option value="polozka-2">Položka 2</option>
                    <option value="polozka-3">Položka 3</option>
                </Select>
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
        <p className="text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-4">
            Rozbaľovacie pole má plnú podporu natívneho klávesnicového ovládania:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8">
            <li><code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Tab</code> / <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Shift + Tab</code> – presun zamerania na rozbaľovacie pole alebo z neho na predchádzajúci/nasledujúci prvok.</li>
            <li><code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Medzerník</code> alebo <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Alt + Šípka dole</code> – otvorí zatvorené rozbaľovacie pole.</li>
            <li><code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Šípka hore</code> / <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Šípka dole</code> – pohyb medzi jednotlivými možnosťami (funguje v zatvorenom aj otvorenom stave).</li>
            <li><code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Enter</code> alebo <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Medzerník</code> – potvrdí výber a zatvorí rozbaľovací zoznam.</li>
            <li><code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Esc</code> – zbalí rozbaľovací zoznam bez zmeny aktuálneho výberu.</li>
            <li><code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Home</code> / <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">End</code> – presun na prvú alebo poslednú možnosť v zozname.</li>
            <li><strong>Zadávanie textu</strong> – stlačenie písmena na klávesnici rýchlo presunie zameranie na možnosť začínajúcu na daný znak.</li>
        </ul>
        
        <h3 className="text-lg sm:text-xl font-bold text-black mb-4">
            Základné pravidlá prístupnosti
        </h3>
        <ul className="list-disc pl-5 space-y-3 text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8">
            
            <li>
                Používajte natívne HTML prvky <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;select&gt;</code> a <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;option&gt;</code>, spoločne s atribútom <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">value=&quot;&quot;</code>
            </li>
            <li>
                Každý prvok <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;select&gt;</code> musí mať jasný, programovo asociovaný popis cez značku <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;label&gt;</code>. Nikdy nenahrádzajte skutočný label predvolenou prvou možnosťou v zozname (napríklad zmazaním labelu a ponechaním iba možnosti &quot;Vyberte si...&quot;).
            </li>
            <li>
                Vyhnite sa automatickému odosielaniu (Auto-submission): Nikdy nepoužívajte udalosť zmeny výberu (onChange) na okamžité odoslanie formulára alebo navigáciu. Mätie to používateľov čítačiek obrazovky, ktorí pri prechádzaní zoznamu šípkami nechtiac aktivujú zmeny. Vždy poskytnite potvrdzovacie tlačidlo.
            </li>
            <li>
                Vyhnite sa závislým poliam: Nemeňte dynamicky možnosti v jednom rozbaľovacom poli len na základe toho, čo používateľ vybral v inom. Pre mnohých používateľov je mätúce pochopiť, ako jedna voľba ovplyvňuje druhú.
            </li>
            <li>
                Pri zbere neovplyvnených dát (napríklad v dotazníkoch) sa vyhnite predvyplneniu určitej hodnoty. Uistite sa, že prvá predvolená možnosť je neaktívna inštrukcia (napr. <em>-- Vyberte možnosť --</em>).
            </li>
            <li>
                Zabezpečte jasne viditeľný stav zamerania (focus state) pre samotné rozbaľovacie pole.
            </li>
            <li>
                Prípadný doplňujúci text (hint) prepojte na pole cez atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">aria-describedby</code>. V prípade povinného poľa nezabudnite pridať atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">required</code>.
            </li>
            <li>
                Ak je zoznam rozsiahly, použite element <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;optgroup label=&quot;Názov skupiny&quot;&gt;</code> na zoskupenie súvisiacich <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;option&gt;</code>. Uľahčí to orientáciu nielen vizuálne, ale aj pre čítačky obrazovky.
            </li>
            <li>
                Ak pole požaduje bežné údaje (napríklad krajinu v adrese), použite atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">autocomplete</code> (napr. <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">autocomplete=&quot;country&quot;</code>), aby ste používateľom uľahčili vypĺňanie.
            </li>
            <li>
                Aj keď HTML umožňuje vložiť do selectu tag <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;hr&gt;</code>, považuje sa len za vizuálny prvok a asistenčné technológie ho ignorujú. Nepoužívajte ho na prenášanie dôležitého kontextu.
            </li>
        </ul>
    </div>
);

// --- TAB 4: IMPLEMENTÁCIA (Aplikovaný SyntaxHighlighter + dedent) ---
const TabImplementacia = () => (
    <div className="animate-fade-in text-black space-y-10">
        
        <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Implementácia rozbaľovacieho poľa z ID-SK Frontend</h2>
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
                        <strong className="block mb-2 text-sm sm:text-base">➜ Prepojte štýly</strong>
                        <p className="text-sm sm:text-base leading-relaxed md:leading-8 mb-4">
                            Do časti <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">head</code> vložte minifikované css. Na záver <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">body</code> pripojte minifikovaný javascript.
                        </p>
                        
                        {/* Zvýraznenie kódu pre HTML head */}
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
                                  </body> 
                                </html>
                            `}
                        </SyntaxHighlighter>
                    </div>

                    <div>
                        <strong className="block mb-2 text-sm sm:text-base">➜ Skopírujte HTML kód</strong>
                        <p className="text-sm sm:text-base leading-relaxed md:leading-8 mb-4">
                            Zo stránky dokumentácie stiahnite HTML kód komponentu <a href="https://komponenty.idsk3.gov.sk/components/select" className="text-my-blue underline hover:text-blue-800 transition-colors"> rozbaľovací zoznam</a> a vložte ho do svojho HTML. Ak používate čisté HTML, musíte do značky <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;div&gt;</code> pridať atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">id</code>. Tento atribút musí byť unikátny v rámci domény.
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
                                <div class="govuk-form-group">
                                    <label class="govuk-label" for="select-1">
                                        Label text goes here
                                        <span class="idsk-required">*</span>
                                    </label>
                                    <select class="govuk-select" id="select-1" name="select-1">
                                        <option value="1">GOV.UK frontend option 1</option>
                                        <option value="2" selected>GOV.UK frontend option 2</option>
                                        <option value="3" disabled>GOV.UK frontend option 3</option>
                                    </select>
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
                        Do pripraveného súboru (či už .html alebo .njk) vložte kód, ktorý nájdete vyššie.
                    </li>
                    <li>
                        <strong className="font-semibold block mb-2">Importujte štýly</strong>
                        Pre import individuálneho IDSK komponentu, v tomto prípade Rozbaľovacieho poľa, do svojho Sass súboru pridajte:
                        
                        <SyntaxHighlighter 
                            language="scss"
                            style={a11yDark} 
                            wrapLines={true}
                            wrapLongLines={true}
                            customStyle={{ padding: '1.25rem', fontSize: '0.875rem', margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
                            codeTagProps={{ style: { whiteSpace: 'pre-wrap', wordBreak: 'break-word' } }}
                            >
                            {dedent`
                                @import "node_modules/@id-sk/frontend/idsk/components/select/select";
                            `}
                        </SyntaxHighlighter>
                    </li>
                    <li>
                        <strong className="font-semibold block mb-2">Importujte Javascript</strong>
                        ID-SK Frontend komponenty s JavaScript správaním majú vo svojom markupe nastavený atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">data-module</code>. Pre import javascriptu rozbaľovacieho poľa, vložte do .js súboru:
                        
                        <SyntaxHighlighter 
                            language="javascript" 
                            style={a11yDark} 
                            wrapLines={true}
                            wrapLongLines={true}
                            customStyle={{ padding: '1.25rem', fontSize: '0.875rem', margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
                            codeTagProps={{ style: { whiteSpace: 'pre-wrap', wordBreak: 'break-word' } }}
                            >
                            {dedent`
                                import { Select, createAll } from 'govuk-frontend' 

                                createAll(Select)
                            `}
                        </SyntaxHighlighter>
                    </li>
                </ol>
            </div>
        </section>
    </div>
);