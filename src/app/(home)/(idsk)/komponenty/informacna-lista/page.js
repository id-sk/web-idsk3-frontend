'use client'

import React, { useState } from 'react';
import { MyTabBar, MyTabLink } from '@/app/(home)/_components/tab-bar/tabBar';
import InformationBanner from '@/app/(home)/_components/information-banner/informationBannerCustom';

// Profi balíčky na zvýrazňovanie kódu
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import dedent from 'dedent';

// ============================================================================
// 1. HLAVNÝ KOMPONENT 
// ============================================================================
const InformationBannerPage = () => {
    const [activeTab, setActiveTab] = useState('pouzitie');

    const renderTabContent = {
        pouzitie: <TabPouzitie />,
        varianty: <TabVarianty />,
        pristupnost: <TabPristupnost />,
        kod: <TabImplementacia />
    };

    return (
        <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0 text-black">
            <title>Informačná lišta</title>
            
            <header>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
                    Informačná lišta (Notification banner)
                </h1>
            </header>
            
            <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-12">
                Informačná lišta (alebo informačný banner) sa používa na zvýraznenie informácií alebo upozornení rôzneho druhu, ktoré by si používateľ mal všimnúť. Umožňuje rýchlo odlíšiť typ informácie podľa jej významu — oznam (modrá farba), upozornenie (oranžová farba), varovanie (červená farba) alebo potvrdenie úspešnej operácie (zelená farba). Správa nepoužíva nadpis a mala by byť stručná, jasná a výstižná – s dĺžkou max. 25 slov.
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

export default InformationBannerPage;

// ============================================================================
// 2. PODKOMPONENTY (Obsah jednotlivých tabov)
// ============================================================================

// --- TAB 1: POUŽITIE ---
const TabPouzitie = () => (
    <div className="animate-fade-in">
        <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-black mb-4">
            Použitie informačnej lišty
        </h2>
        
        <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
            <div className="w-full max-w-[600px] px-4">
                <InformationBanner
                    title="Príklad komponentu informačná lišta"
                    ariaLabel="Príklad komponentu informačná lišta"
                    type="banner"
                    variant="information"
                    hideCloseButton={true}
                >
                    Lorem ipsum dolor sit amet consectetur. Ipsum diam proin ultricies amet. Gravida rhoncus ultricies odio sed molestie neque.
                </InformationBanner>
            </div>
        </div>

        <p className="text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8">
            Informačná lišta sa používa v situáciách, keď je potrebné informovať používateľa o stave alebo zmene, upozorniť na riziko alebo problém, potvrdiť úspešnú akciu, alebo vyzvať používateľa na jednoduchú následnú akciu.
        </p>

        <div className="flex flex-wrap gap-8 sm:gap-12 mt-10">
            <div className="flex flex-col items-start flex-1 min-w-[280px]">
                <InformationBanner
                    ariaLabel="Správne použitie informačnej lišty"
                    type="banner"
                    variant="basic"
                    hideCloseButton={true}
                >
                 <h3 className="text-lg sm:text-xl font-bold text-black leading-tight ml-2 mb-4">
                    Ako sa používa
                </h3>
                 <ul className="list-disc pl-5 space-y-3 text-sm tracking-wide leading-relaxed text-black mb-8 mt-4">
                    <li>na dôležité globálne oznamy (napr. odstávka systému)</li>
                    <li>na potvrdenie úspešnej operácie (napr. odoslanie formulára)</li>
                    <li>na varovanie pred chybami (napr. neplatné heslo)</li>
                </ul>
                </InformationBanner>
            </div>
            
            <div className="flex flex-col items-start flex-1 min-w-[280px]">
                <InformationBanner
                    ariaLabel="Nesprávne použitie informačnej lišty"
                    type="banner"
                    variant="warning"
                    hideCloseButton={true}
                >
                 <h3 className="text-lg sm:text-xl font-bold text-black leading-tight ml-2 mb-4">
                    Ako sa nepoužíva
                </h3>
                 <ul className="list-disc pl-5 space-y-3 text-sm tracking-wide leading-relaxed text-black mb-8 mt-4">
                    <li>na zobrazenie bežného textu alebo článku</li>
                    <li>ako náhrada za bežné hlásenia pod inputmi formulára</li>
                    <li>ak správa obsahuje príliš veľa textu</li>
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
        <p className="text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8"> <strong>Informačný typ</strong> má informačnú funkciu a slúži na vyzdvihnutie informácie pre používateľa. Poskytuje všeobecné alebo doplnkové informácie</p>
        <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
            <div className="flex flex-col gap-6 w-full max-w-[600px] px-4">             
                <InformationBanner title="Príklad komponentu informačná lišta" ariaLabel="Oznam" type="banner" variant="information" hideCloseButton={false}>
                    <p>Pre rýchlejšie a efektívnejšie vybavenie žiadosti sa odporúča priložiť aj doklad o ukončení štúdia (napr. vysvedčenie o vykonaní záverečnej skúšky, maturitné vysvedčenie, vysokoškolský diplom a pod.).</p>
                </InformationBanner>
            </div>
        </div>
        <p className="text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8"> <strong>Varovný typ</strong> má najvyššiu výstražnú funkciu a slúži na zobrazovanie kritických informácii, ktoré môžu brániť používateľovi dokončiť akciu alebo majú vplyv na úspešné dokončenie akcie. Upozorňuje na potenciálny problém alebo riziko. Nezamieňať si tento komponent s komponentom chybové hlásenie </p>
        <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
            <div className="flex flex-col gap-6 w-full max-w-[600px] px-4">
                <InformationBanner title="Príklad komponentu varovná lišta" ariaLabel="Chyba" type="banner" variant="alert" hideCloseButton={false}>
                    <p>Lorem ipsum dolor sit amet consectetur. Ipsum diam proin ultricies amet. Gravida rhoncus ultricies odio sed molestie neque. Lacus sit congue consequat convallis ut etiam massa vulputate aenean.</p>
                </InformationBanner>
            </div>
        </div>

        <p className="text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8"> <strong>Upozorňovací typ</strong> má stredne výstražnú funkciu a vyžaduje zvýšenú pozornosť používateľa. Je vhodné použiť ho tam, kde informácia môže mať zásadný vplyv na výber možnosti používateľa</p>
        <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
            <div className="flex flex-col gap-6 w-full max-w-[600px] px-4">
                <InformationBanner title="Príklad komponentu upozorňovacia lišta" ariaLabel="Upozornenie" type="banner" variant="warning" hideCloseButton={false}>
                    <p>V prípade, že prílohy nenahráte v tejto žiadosti, je potrebné ich doložiť dodatočne (elektronicky alebo osobne). Požadované prílohy sú nevyhnutné k vyriešeniu vašej žiadosti.</p>
                </InformationBanner>
            </div>
        </div>

        <p className="text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8"> <strong>Úspešný typ</strong> informuje o úspešnom dokončení akcie a slúži na potvrdenie správnosti kroku. Nepoužíva sa pri dokončení elektronickej služby -  na to slúži iný komponent (succes page)</p>
        <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
            <div className="flex flex-col gap-6 w-full max-w-[600px] px-4">
                <InformationBanner title="Príklad komponentu úspešná lišta" ariaLabel="Úspech" type="banner" variant="success" hideCloseButton={false}>
                    <p>Lorem ipsum dolor sit amet consectetur. Ipsum diam proin ultricies amet. Gravida rhoncus ultricies odio sed molestie neque. Lacus sit congue consequat convallis ut etiam massa vulputate aenean.</p>
                </InformationBanner>

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
            Informačná lišta spĺňa požiadavky WCAG 2.1 AA. Spĺňa požiadavky na kontrastné pomery a jeho súčasťou sú plnohodnotné interakcie s klávesnicou a asistenčnými technológiami (čítačkami obrazovky).  
        </p>
        <h3 className="text-lg sm:text-xl font-bold text-black mb-4 mt-8">
            Klávesové ovládanie
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8">
            <li>
                Informačná lišta sama o sebe spravidla nie je interaktívna (nevyžaduje focus klávesnice), pokiaľ neobsahuje vložené odkazy alebo tlačidlo na zatvorenie.
            </li>
            <li>
                <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Tab</code> – ak lišta obsahuje tlačidlo na zatvorenie (napr. pri dynamických Toast notifikáciách) alebo hypertextový odkaz v texte, používateľ sa na ne presunie štandardne pomocou klávesy Tab.
            </li>
        </ul>
        
        <h3 className="text-lg sm:text-xl font-bold text-black mb-4">
            Základné pravidlá prístupnosti
        </h3>
        <ul className="list-disc pl-5 space-y-3 text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8">
            <li>
                Dynamické chybové a varovné lišty: Ak sa informačná lišta (error alebo warning) zjaví na obrazovke dynamicky ako reakcia na akciu používateľa (napr. po odoslaní formulára), musí mať atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">role=&quot;alert&quot;</code>. Čítačka obrazovky vďaka tomu okamžite preruší čítanie a upozorní používateľa na kritický problém.
            </li>
            <li>
                Dynamické úspešné a informačné lišty: Ak sa dynamicky zjaví zelená (success) alebo modrá (info) lišta, použite <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">role=&quot;status&quot;</code>. Čítačka obrazovky počká, kým dočíta aktuálnu vetu, a až potom slušne oznámi novú informáciu bez toho, aby používateľa vyrušila.
            </li>
            <li>
                Statické lišty v obsahu stránky: Ak je informačná lišta pevnou súčasťou rozloženia stránky (napríklad globálne upozornenie o odstávke navrchu stránky), mala by mať atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">role=&quot;region&quot;</code> a mala by byť prepojená so svojím nadpisom pomocou <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">aria-labelledby=&quot;id-nadpisu&quot;</code>, aby ju čítačky vedeli ľahko lokalizovať.
            </li>
            <li>
                Dekoratívne ikony: Ikonky vo vnútri lišty, ktoré vizuálne určujú jej typ (výkričník, fajka, i), musia byť pred asistenčnými technológiami skryté pomocou atribútu <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">aria-hidden=&quot;true&quot;</code>. 
            </li>
            <li>
                Zrozumiteľnosť bez farieb: Nespoliehajte sa pri odovzdávaní informácie iba na farbu (napr. červená = chyba). Zabezpečte, aby bol význam zrejmý aj z textu alebo štruktúry (napríklad pomocou skrytého textu &quot;Chyba:&quot; pre čítačky na začiatku správy), čím splníte kritériá WCAG pre používateľov s poruchou farbocitu.
            </li>
        </ul>
    </div>
);

const TabImplementacia = () => (
    <div className="animate-fade-in text-black space-y-10">
        
        <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Implementácia informačnej lišty z ID-SK Frontend</h2>
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
                            Zo stránky dokumentácie stiahnite HTML kód komponentu <a href="https://komponenty.idsk3.gov.sk/components/notification-banner" className="text-my-blue underline hover:text-blue-800 transition-colors"> informačná lišta</a> a vložte ho do svojho HTML.
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
                                <div class="govuk-notification-banner govuk-notification-banner--warning" role="alert" aria-labelledby="govuk-notification-banner-title" data-module="govuk-notification-banner">
                                    <div class="govuk-notification-banner__header">
                                        <h2 class="govuk-notification-banner__title" id="govuk-notification-banner-title">
                                            Warning
                                        </h2>
                                    </div>
                                    <div class="govuk-notification-banner__content">
                                        <h3 class="govuk-notification-banner__heading">
                                            Oops! Something went wrong
                                        </h3>
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
                        Pre import individuálneho IDSK komponentu (informačná lišta) do svojho Sass súboru pridajte:
                        
                        <SyntaxHighlighter 
                            language="html" 
                            style={a11yDark} 
                            wrapLines={true}
                            wrapLongLines={true}
                            customStyle={{ padding: '1.25rem', fontSize: '0.875rem', margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
                            codeTagProps={{ style: { whiteSpace: 'pre-wrap', wordBreak: 'break-word' } }}
                            >
                            {dedent`
                                @import "node_modules/@id-sk/frontend/idsk/components/notification-banner/notification-banner";
                            `}
                        </SyntaxHighlighter>
                    </li>
                </ol>
            </div>
        </section>
    </div>
);