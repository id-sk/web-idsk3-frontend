'use client'

import React, { useState } from 'react';
import { MyTabBar, MyTabLink } from '@/app/(home)/_components/tab-bar/tabBar';
import ButtonCustom from '@/app/(home)/_components/button/buttonCustom';
import InformationBanner from '@/app/(home)/_components/information-banner/informationBannerCustom';

// Profi balíčky na zvýrazňovanie kódu
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import dedent from 'dedent';

// ============================================================================
// 1. HLAVNÝ KOMPONENT 
// ============================================================================
const ButtonPage = () => {
    const [activeTab, setActiveTab] = useState('pouzitie');

    const renderTabContent = {
        pouzitie: <TabPouzitie />,
        varianty: <TabVarianty />,
        pristupnost: <TabPristupnost />,
        kod: <TabImplementacia />
    };
    return (
        <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0 text-black">
            <title>Tlačidlo</title>
            
            <header>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
                    Tlačidlo (Button)
                </h1>
            </header>
            
            <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-12">
                Tlačidlá patria medzi najdôležitejšie interakčné prvky v digitálnych službách verejnej správy. Pomáhajú používateľom vykonať akciu, potvrdiť voľbu alebo pokračovať v procese. V IDSK 3 sú tlačidlá navrhnuté tak, aby podporovali jasnú hierarchiu akcií – od najdôležitejšej po doplnkovú.
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

export default ButtonPage;


// ============================================================================
// 2. PODKOMPONENTY (Obsah jednotlivých tabov)
// ============================================================================

// --- TAB 1: POUŽITIE ---
const TabPouzitie = () => (
    <div className="animate-fade-in">
        <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-black mb-4">
            Použitie tlačidiel
        </h2>
        
        {/* UKÁŽKA KOMPONENTU */}
        <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
            <div className="flex flex-wrap justify-center gap-4 px-4">
                <ButtonCustom variant="primary" status="basic">
                    Hlavná akcia
                </ButtonCustom>
                <ButtonCustom variant="secondary" status="basic">
                    Vedľajšia akcia
                </ButtonCustom>
                <ButtonCustom variant="tertiary" status="basic">
                    Doplnková akcia
                </ButtonCustom>
            </div>
        </div>

        <p className="text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8">
            Komponent tlačidlo pozostáva z piatich základných častí. Kľúčovým prvkom je textový popis, ktorý musí jasne, stručne a konkrétne pomenovať vykonávanú akciu. Vizuálnu podobu, tvar a veľkosť definuje kontajner, ktorého výplň a farba určujú dôležitosť tlačidla v hierarchii rozhrania. Význam akcie môžu voliteľne dopĺňať ľavá alebo pravá ikona, ktoré slúžia ako vizuálna podpora textu. Celkovú funkčnosť uzatvára interakčná plocha, ktorá musí byť dostatočne veľká na to, aby umožňovala pohodlné a presné ovládanie na všetkých typoch zariadení.
        </p>

         <p className="text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8">
            Správne nastavená vizuálna hierarchia pomáha používateľovi identifikovať hlavnú výzvu na akciu (CTA) a znižuje kognitívnu záťaž pri rozhodovaní. V IDSK 3 používame tri úrovne priority: primárne pre kľúčové akcie, sekundárne pre doplnkové voľby a terciárne (textové) pre akcie s najnižšou dôležitosťou.
        </p>

        {/* BANNERY: SPRÁVNE VS NESPRÁVNE POUŽITIE */}
        <div className="flex flex-wrap gap-8 sm:gap-12 mt-10">
            {/* AKO SA POUŽÍVA */}
            <div className="flex flex-col items-start flex-1 min-w-[280px]">
                <InformationBanner
                    ariaLabel="Správne použitie tlačidiel"
                    type="banner"
                    variant="basic"
                    hideCloseButton={true}
                >
                    <h3 className="text-lg sm:text-xl font-bold text-black leading-tight ml-2 mb-4">
                        Ako sa používa
                    </h3>
                    <ul className="list-disc pl-5 space-y-3 text-sm tracking-wide leading-relaxed text-black mb-8 mt-4">
                        <li>Na jednej stránke používajte spravidla iba jedno primárne tlačidlo.</li>
                        <li>Text musí mať stručnú a jasnú menovku (napr. „Odoslať“, „Uložiť“).</li>
                        <li>Akcie klaďte vedľa seba v poradí dôležitosti (napr. Späť ako sekundárne, Pokračovať ako primárne).</li>
                        <li>Pri dôležitých akciách implementujte ochranu proti viacnásobnému odoslaniu.</li>
                    </ul>
                </InformationBanner>
            </div>
            
            <div className="flex flex-col items-start flex-1 min-w-[280px]">
                <InformationBanner
                    ariaLabel="Nesprávne použitie tlačidiel"
                    type="banner"
                    variant="warning"
                    hideCloseButton={true}
                >
                    <h3 className="text-lg sm:text-xl font-bold text-black leading-tight ml-2 mb-4">
                        Ako sa nepoužíva
                    </h3>
                    <ul className="list-disc pl-5 space-y-3 text-sm tracking-wide leading-relaxed text-black mb-8 mt-4">
                        <li>Nepoužívajte viacero primárnych tlačidiel na stránke.</li>
                        <li>Nepoužívajte tlačidlá na bežnú navigáciu medzi stránkami, ak nejde o súčasť procesu.</li>
                        <li>Vyhnite sa nápisom ako „Kliknite tu“ alebo „OK“, ktoré nevysvetľujú kontext akcie.</li>
                        <li>Nepoužívajte tlačidlá obsahujúce iba ikonu bez textu, pokiaľ nejde o všeobecne známe symboly.</li>
                        <li>Pri hierarchicky rovnocenných možnostiach (napr. &quot;Áno&quot; a &quot;Nie&quot;) používajte hierarchicky rovnocenné tlačidlá</li>
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
        
        <h3 className="text-lg sm:text-xl font-bold text-black mb-4 mt-8">Varianty tlačidla - primárne, sekundárne, terciárne</h3>
        <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
             <div className="grid grid-cols-1 sm:grid-cols-3 place-items-center gap-12 px-4 max-w-[700px] mx-auto">
                <ButtonCustom variant="primary" status="basic">
                    Hlavná akcia
                </ButtonCustom>
                <ButtonCustom variant="secondary" status="basic">
                    Vedľajšia akcia
                </ButtonCustom>
                <ButtonCustom variant="tertiary" status="basic">
                    Doplnková akcia
                </ButtonCustom>
            </div>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-black mb-4 mt-8">Varianty tlačidla - úspešné, výstražné, neaktívne</h3>
        <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
             <div className="grid grid-cols-1 sm:grid-cols-3 place-items-center gap-12 px-4 max-w-[700px] mx-auto">
                <ButtonCustom variant="primary" status="success">
                    Hlavná akcia
                </ButtonCustom>
                <ButtonCustom variant="secondary" status="success">
                    Vedľajšia akcia
                </ButtonCustom>
                <ButtonCustom variant="tertiary" status="success">
                    Doplnková akcia
                </ButtonCustom>

                <div className="hidden sm:block"></div>
                <ButtonCustom variant="secondary" status="warning">
                    Vedľajšia akcia
                </ButtonCustom>
                <ButtonCustom variant="tertiary" status="warning">
                    Doplnková akcia
                </ButtonCustom>

                <ButtonCustom variant="primary" status="basic" disabled = "true">
                    Hlavná akcia
                </ButtonCustom>
                <ButtonCustom variant="secondary" status="basic" disabled = "true">
                    Vedľajšia akcia
                </ButtonCustom>
                <ButtonCustom variant="tertiary" status="basic" disabled = "true">
                    Doplnková akcia
                </ButtonCustom>
            </div>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-black mb-4 mt-8">Varianty tlačidla - veľké, stredné, malé</h3>
        <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
             <div className="grid grid-cols-1 sm:grid-cols-3 place-items-center gap-12 px-4 max-w-[700px] mx-auto">
                <ButtonCustom variant="primary" status="basic" size="large">
                    Hlavná akcia
                </ButtonCustom>
                <ButtonCustom variant="primary" status="basic" size="medium">
                    Vedľajšia akcia
                </ButtonCustom>
                <ButtonCustom variant="primary" status="basic" size="small">
                    Doplnková akcia
                </ButtonCustom>
            </div>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-black mb-4 mt-8">Varianty tlačidla - s ikonkou naľavo, s ikonkou napravo, iba ikonka</h3>
        <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 place-items-center gap-12 px-4 max-w-[700px] mx-auto">
                <ButtonCustom 
                    variant="primary" 
                    status="basic" 
                    iconLeft={
                        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    }
                >
                    Vyhľadať
                </ButtonCustom>
                <ButtonCustom 
                    variant="primary" 
                    status="success" 
                    iconRight={
                        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    }
                >
                    Pokračovať
                </ButtonCustom>
                <ButtonCustom 
                    variant="primary" 
                    status="basic" 
                    aria-label="Otvoriť v novom okne"
                    iconLeft={
                        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    }
                />
                <ButtonCustom 
                    variant="secondary" 
                    status="basic" 
                    iconLeft={
                        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    }
                >
                    Vyhľadať
                </ButtonCustom>

                <ButtonCustom 
                    variant="secondary" 
                    status="success" 
                    iconRight={
                        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    }
                >
                    Pokračovať
                </ButtonCustom>

                <ButtonCustom 
                    variant="secondary" 
                    status="warning" 
                    aria-label="Otvoriť v novom okne"
                    iconLeft={
                        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                        </svg>
                    }
                />
                <ButtonCustom 
                    variant="tertiary" 
                    status="basic" 
                    iconLeft={
                        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    }
                >
                    Vyhľadať
                </ButtonCustom>

                <ButtonCustom 
                    variant="tertiary" 
                    status="success" 
                    iconRight={
                        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    }
                >
                    Pokračovať
                </ButtonCustom>

                <ButtonCustom 
                    variant="tertiary" 
                    status="warning" 
                    aria-label="Otvoriť v novom okne"
                    iconLeft={
                        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                        </svg>
                    }
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
            Komponent tlačidlo spĺňa požiadavky WCAG 2.1 AA. Podporuje ovládanie klávesnicou a asistenčnými technológiami.          
        </p>
        
        <h3 className="text-lg sm:text-xl font-bold text-black mb-4">
            Klávesové ovládanie
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8">
            <li><code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Tab</code> – presun zamerania klávesnice (focus) na nasledujúci rázcestník alebo interaktívny prvok.</li>
            <li><code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Shift + Tab</code> – presun zamerania klávesnice (focus) na predchádzajúci prvok.</li>
            <li><code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Enter, Space</code> – aktivovanie tlačidla (spustenie akcie).</li>
        </ul>
        
        <h3 className="text-lg sm:text-xl font-bold text-black mb-4">
            Základné pravidlá prístupnosti
        </h3>
        <ul className="list-disc pl-5 space-y-3 text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8">
            <li>
                Vždy jasne definujte atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">type</code> (zvyčajne <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&quot;button&quot;</code>, <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&quot;submit&quot;</code> alebo <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&quot;reset&quot;</code>), aby ste predišli nechcenému odoslaniu formulára.
            </li>
            <li>
                Text musí byť jasný, opisný a krátky (1–2 slová). Ideálne by mal začínať slovesom (napr. &quot;Odoslať&quot;, &quot;Uložiť&quot;, &quot;Pokračovať&quot;, &quot;Zmeniť heslo&quot;).
            </li>
            <li>
                Ak tlačidlo obsahuje <strong>iba ikonu</strong> (napr. krížik na zatvorenie alebo lupu na vyhľadávanie), asistenčné zariadenia nebudú vedieť, čo robí. Vždy mu musíte pridať atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">aria-label</code> (napr. <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">aria-label=&quot;Vyhľadať na webe&quot;</code>).
            </li>
            <li>
                Zameriavací rámik je pre prístupnosť kľúčový. Náš komponent automaticky využíva <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">focus-visible</code> s výraznou oranžovou farbou ID-SK na jasnú identifikáciu zvoleného prvku.
            </li>
            <li>
                Pri kritických akciách (napríklad odosielanie platieb alebo formulárov) po stlačení nastavte stav tlačidla na <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">disabled</code>, čím zabránite opakovanému vykonaniu rovnakej akcie.
            </li>
        </ul>
    </div>
);

// --- TAB 4: IMPLEMENTÁCIA ---
const TabImplementacia = () => (
    <div className="animate-fade-in text-black space-y-10">
        <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Implementácia tlačidla z ID-SK Frontend</h2>
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
                            language="text" 
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
                            Zo stránky dokumentácie stiahnite HTML kód komponentu <a href="https://komponenty.idsk3.gov.sk/components/button" className="text-my-blue underline hover:text-blue-800 transition-colors"> tlačidlo</a> a vložte ho do svojho HTML.
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
                                <button type="submit" class="govuk-button govuk-button__basic" data-module="govuk-button">
                                    Primárne tlačidlo
                                </button>
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
                            language="shell" 
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
                        Pre import individuálneho IDSK komponentu (tlačidlo) do svojho Sass súboru pridajte:
                        
                        <SyntaxHighlighter 
                            language="scss" 
                            style={vscDarkPlus} 
                            wrapLines={true}
                            wrapLongLines={true}
                            customStyle={{ padding: '1.25rem', fontSize: '0.875rem', margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
                            codeTagProps={{ style: { whiteSpace: 'pre-wrap', wordBreak: 'break-word' } }}
                            >
                            {dedent`
                                @import "node_modules/@id-sk/frontend/idsk/components/button/button";
                            `}
                        </SyntaxHighlighter>
                    </li>
                    <li>
                        <strong className="font-semibold block mb-2">Importujte Javascript</strong>
                        ID-SK komponenty s JavaScript správaním je nutné inicializovať. Pre inicializáciu konkrétneho komponentu tlačidlo použite tento kód:
                        
                        <SyntaxHighlighter 
                            language="javascript" 
                            style={vscDarkPlus} 
                            wrapLines={true}
                            wrapLongLines={true}
                            customStyle={{ padding: '1.25rem', fontSize: '0.875rem', margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
                            codeTagProps={{ style: { whiteSpace: 'pre-wrap', wordBreak: 'break-word' } }}
                            >
                            {dedent`
                                import { Button, initAll } from 'govuk-frontend'
                                
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