'use client'

import React, { useState } from 'react';
import { MyTabBar, MyTabLink } from '@/app/(home)/_components/tab-bar/tabBar';
import InformationBanner from '@/app/(home)/_components/information-banner/informationBannerCustom';
import Navbar from '@/app/(home)/_components/navbar/navbar';

// Balíčky na zvýrazňovanie kódu
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import dedent from 'dedent';

// ============================================================================
// 1. HLAVNÝ KOMPONENT (Škrupina stránky a slovník tabov)
// ============================================================================
const NavbarPage = () => {
    const [activeTab, setActiveTab] = useState('pouzitie');

    const renderTabContent = {
        pouzitie: <TabPouzitie />,
        varianty: <TabVarianty />,
        pristupnost: <TabPristupnost />,
        kod: <TabImplementacia />
    };

    return (
        <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0 text-black">
            <title>Hlavička</title>
            
            <header>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight mb-8">
                    Hlavička pre elektronické služby (Header)
                </h1>
            </header>

            <p className="text-sm sm:text-base tracking-wide leading-relaxed text-black mb-12">
                Hlavička pre elektronické služby je základný prvok jednotného dizajnového systému Slovenska. Zabezpečuje jednotný vizuálny a interaktívny zážitok naprieč elektronickými službami. Použite ju pre rozhrania vyžadujúce prihlásenie používateľa, napríklad pre elektronické služby, portály služieb a osobné zóny.
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

export default NavbarPage;


// ============================================================================
// 2. PODKOMPONENTY (Obsah jednotlivých tabov)
// ============================================================================
const TabPouzitie = () => {
    const mockSidebarData = [];

    return (
        <div className="animate-fade-in">
            <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-black mb-4">
                Použitie Hlavičky
            </h2>
            
            <div className="flex justify-center bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8 transition-all duration-300">
                <div className="w-full max-w-[800px] py-7 my-6 px-4 relative min-h-[250px] h-auto">
                    <Navbar sidebarData={mockSidebarData} />
                </div>
            </div>

            <p className="text-sm sm:text-base tracking-wide leading-relaxed text-black mb-8">
                Hlavička pomáha používateľovi navigovať sa k obsahu webovej aplikácie. Obsahuje hlavnú sekciu (povinná) a záhlavie, navigáciu a rozbaľovacie menu (podľa potreby). Hlavička je statická. Pri posúvaní sa obsah webovej aplikácie roluje pod ňou.
            </p>

            <h3 className="text-lg sm:text-xl font-bold text-black leading-tight mb-4">
                Záhlavie
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base tracking-wide leading-relaxed text-black mb-8 mt-4">
                <li>Obsahuje informáciu, že ide o oficiálne webové sídlo verejnej správy, spolu s odkazom na hlavné webové sídlo správcu alebo ústredný portál verejnej správy (vľavo),</li>
                <li>Obsahuje výber jazyka (vpravo).</li>
            </ul>

            <h3 className="text-lg sm:text-xl font-bold text-black leading-tight mb-4">
                Hlavná sekcia
            </h3>
            <p className="text-sm sm:text-base tracking-wide leading-relaxed text-black mb-4">
                Hlavná sekcia je povinná časť každej hlavičky. Obsahuje:           
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base tracking-wide leading-relaxed text-black mb-4 mt-2">
                <li>logo (vľavo),</li>
                <li>navigáciu (v strede),</li>
                <li>akčný panel (vpravo).</li>
            </ul>
            <p className="text-sm sm:text-base tracking-wide leading-relaxed text-black mb-4">
                Logo sa riadi pravidlami pre doménové mená.           
            </p>
            <p className="text-sm sm:text-base tracking-wide leading-relaxed text-black mb-4">
                Akčný panel obsahuje:          
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base tracking-wide leading-relaxed text-black mb-8 mt-2">
                <li>ikonu profilu,</li>
                <li>doplnkové nadradené akcie, napríklad notifikácie alebo podporu.</li>
            </ul>
            
            <div className="flex flex-wrap gap-8 sm:gap-12 mt-10">
                <div className="flex flex-col items-start flex-1 min-w-[280px]">
                    <InformationBanner
                        ariaLabel="Správne použitie hlavičky"
                        type="banner"
                        variant="basic"
                        hideCloseButton={true}
                    >
                        <h3 className="text-lg sm:text-xl font-bold text-black leading-tight ml-2 mb-4">
                            Ako sa používa
                        </h3>
                        <ul className="list-disc pl-5 space-y-3 text-sm tracking-wide leading-relaxed text-black mb-8 mt-4">
                            <li>Hlavička patrí na úplný začiatok každej podstránky a pri posúvaní obsahu zostáva staticky prilepená.</li>
                            <li>Úplne hore patrí informácia o oficiálnom webe verejnej správy a výber jazyka.</li>
                            <li>Vľavo v strednej lište umiestnite logo, do stredu navigáciu a vpravo akčný panel pre profil a notifikácie.</li>
                            <li>V prvej úrovni navigácie použite maximálne 5 položiek.</li>
                        </ul>
                    </InformationBanner>
                </div>
                
                <div className="flex flex-col items-start flex-1 min-w-[280px]">
                    <InformationBanner
                        ariaLabel="Nesprávne použitie hlavičky"
                        type="banner"
                        variant="warning"
                        hideCloseButton={true}
                    >
                        <h3 className="text-lg sm:text-xl font-bold text-black leading-tight ml-2 mb-4">
                        Ako sa nepoužíva
                    </h3>
                        <ul className="list-disc pl-5 space-y-3 text-sm tracking-wide leading-relaxed text-black mb-8 mt-4">
                        <li>Nikdy neumiestňujte do kódu viacero hlavných hlavičiek na jednej stránke.</li>
                        <li>Nepresúvajte logo doprava alebo akčný panel doľava, narušíte tým orientáciu používateľov.</li>
                        <li>Nenaplňte navigáciu dlhým zoznamom nerelevantných odkazov.</li>
                        <li>Ak robíte jednoduchú elektronickú službu, rozbaľovaciu navigáciu úplne vynechajte.</li>
                    </ul>
                    </InformationBanner>
                </div>
            </div>
        </div>
    );
};

// --- TAB 2: VARIANTY ---
const TabVarianty = () => {
    const mockSidebarData = [];

    return (
        <div className="animate-fade-in">
            <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-black mb-4">
                Varianty a stavy
            </h2>
            
            <h3 className="text-lg sm:text-xl font-bold text-black mb-4">
                1. S navigáciou:
            </h3>
            <p className="text-sm sm:text-base tracking-wide leading-relaxed text-black mb-8">
                Použite pri rozsiahlejšej informačnej architektúre elektronickej služby. Navigácia pomáha používateľovi orientovať sa v hlavných častiach aplikácie.
            </p>
            <div className="flex justify-center bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8 transition-all duration-300">
                <div className="w-full max-w-[800px] py-7 my-6 px-4 relative min-h-[250px] h-auto">
                    {/* Tu má Navbar dáta, takže zobrazí menu */}
                    <Navbar sidebarData={mockSidebarData} />
                </div>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-black mb-4">
                2. Bez navigácie:
            </h3>
            <p className="text-sm sm:text-base tracking-wide leading-relaxed text-black mb-8">
                Použite pri jednoduchej elektronickej službe bez rozsiahlej informačnej architektúry.
            </p>
            <div className="flex justify-center bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8 transition-all duration-300">
                <div className="w-full max-w-[800px] py-7 my-6 px-4 relative min-h-[250px] h-auto">
                    {/* Tu posielame prázdne dáta (alebo prop úplne vymažeme), aby hlavička nemala menu */}
                    <Navbar hideNavigation={true} />
                </div>
            </div>
        </div>
    );
};

// --- TAB 3: PRÍSTUPNOSŤ ---
const TabPristupnost = () => (
    <div className="animate-fade-in">
        <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-black mb-6">
            Prístupnosť (Accessibility)
        </h2>
        <p className="text-sm sm:text-base tracking-wide leading-relaxed text-black mb-8">
            Hlavička pre elektronické služby je v súlade s normami WCAG 2.1 AA. Komponent spĺňa požiadavky na kontrastné pomery a jeho súčasťou sú interakcie s klávesnicou a čítačkami obrazovky. 
        </p>
        
        <h3 className="text-lg sm:text-xl font-bold text-black mb-4">
            Klávesové ovládanie
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base tracking-wide leading-relaxed text-black mb-8">
            <li>
                <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Tab</code> – posúva fokus sekvenčne vpred cez logo, vyhľadávacie pole, navigáciu a tlačidlá.
            </li>
            <li>
                <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Shift + Tab</code> – vracia fokus o krok späť v opačnom poradí.
            </li>
            <li>
                <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Enter / Medzerník</code> – aktivuje odkazy, odosiela vyhľadávanie alebo rozbaľuje a zbaľuje roletové menu či mobilnú navigáciu.
            </li>
            <li>
                <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Esc (Escape)</code> – okamžite zatvorí akékoľvek otvorené rozbaľovacie menu (dropdown) a bezpečne vráti fokus na tlačidlo, ktoré ho otvorilo.
            </li>
            <li>
                <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Šípky (↑ ↓)</code> – umožňujú plynulý pohyb medzi položkami, ak sa používateľ nachádza vo vnútri otvoreného výberu (select) alebo podmenu.
            </li>
        </ul>
        
        <h3 className="text-lg sm:text-xl font-bold text-black mb-4">
            Základné pravidlá prístupnosti komponentu Hlavička
        </h3>
        <ul className="list-disc pl-5 space-y-3 text-sm sm:text-base tracking-wide leading-relaxed text-black mb-8">
            <li>
                Celý blok vždy obaľte do natívneho HTML tagu <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;header&gt;</code>. Ak hlavička obsahuje priamo aj názov stránky, dajte tomuto textu úroveň <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;h1&gt;</code>.
            </li>
            <li>
                Prepojte logo s domovskou stránkou pomocou odkazu <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">a href=&quot;&quot;</code>. Odporúča sa použiť formát SVG (max. výška 50px) a nezabudnite na jasný alt text, napríklad „Odkaz na domovskú stránku ministerstva“.
            </li>
            <li>
                Hlavné menu musí byť v tagu <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;nav&gt;</code>. Rozbaľovacie zoznamy otvárajte vždy cez <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;button&gt;</code> a samotné položky štruktúrujte štandardne cez <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;ul&gt;</code>, <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;li&gt;</code> a <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;a&gt;</code> s popisným textom.
            </li>
            <li>
                Každé tlačidlo, ktoré otvára podmenu, musí obsahovať atribúty <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">aria-haspopup</code> a <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">aria-expanded=&quot;true/false&quot;</code>, aby asistenčné technológie vedeli, v akom je menu stave.
            </li>
            <li>
                Medzera medzi jednotlivými interaktívnymi prvkami (tlačidlami) by mala byť aspoň 25px od stredu interaktívneho prvku. Zabránite tak nechceným preklikom, čo mimoriadne ocenia používatelia s trasom rúk alebo zhoršenou motorikou.
            </li>
            <li>
                Ak je pre pohyb na webe absolútne nevyhnutné prihlásenie, neváhajte toto tlačidlo v hlavičke nastaviť ako primárne.
            </li>
            <li>
                Všetky odkazy a tlačidlá v hlavičke musia mať jasne rozpoznateľný stav zamerania klávesnicou (focus), aby používatelia bez myši vedeli, kde sa presne nachádzajú.
            </li>
        </ul>
    </div>
);

// --- TAB 4: IMPLEMENTÁCIA ---
const TabImplementacia = () => (
    <div className="animate-fade-in text-black space-y-10 w-full min-w-0">
        
        <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Implementácia hlavičky pre elektronické služby z ID-SK Frontend</h2>
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
                                style={a11yDark} 
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
                                style={a11yDark} 
                                wrapLines={true}
                                wrapLongLines={true}
                                customStyle={{ padding: '1.25rem', fontSize: '0.875rem', margin: 0, background: 'transparent', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
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
                    </div>

                    <div>
                        <strong className="block mb-2 text-sm sm:text-base">➜ Skopírujte HTML kód</strong>
                        <p className="text-sm sm:text-base leading-relaxed mb-4">
                            Zo stránky dokumentácie stiahnite HTML kód komponentu <a href="https://komponenty.idsk3.gov.sk/components/header" className="text-my-blue underline hover:text-blue-800 transition-colors">hlavička pre elektronické služby</a> a vložte ho do svojho HTML.
                        </p>
                        
                        <div className="w-full min-w-0 rounded-lg border border-gray-700 bg-[#1E1E1E]">
                            <SyntaxHighlighter 
                                language="html" 
                                style={a11yDark} 
                                wrapLines={true}
                                wrapLongLines={true}
                                customStyle={{ padding: '1.25rem', fontSize: '0.875rem', margin: 0, background: 'transparent', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
                                codeTagProps={{ style: { whiteSpace: 'pre-wrap', wordBreak: 'break-word' } }}
                            >
                                {dedent`
                                    <div class="govuk-header__wrapper">
                                        <header class="govuk-header idsk-shadow-head" data-module="govuk-header">
                                            <div class="govuk-header__container ">

                                            <div class="idsk-secondary-navigation govuk-width-container">
                                                <div class="idsk-secondary-navigation__header">
                                                <div class="idsk-secondary-navigation__heading">
                                                    <div class="idsk-secondary-navigation__heading-title">
                                                    <span class="idsk-secondary-navigation__heading-mobile">SK</span>
                                                    <span class="idsk-secondary-navigation__heading-desktop">Oficiálna stránka</span>
                                                    
                                                    <button class="govuk-button govuk-button--texted--inverse idsk-secondary-navigation__heading-button" aria-expanded="false" aria-label="Oficiálna stránka verejnej správy">
                                                        <span class="idsk-secondary-navigation__heading-mobile">e-Gov</span>
                                                        <span class="idsk-secondary-navigation__heading-desktop"><b>verejnej správy</b></span>
                                                        <span class="material-icons">arrow_drop_down</span>
                                                    </button>
                                                    </div>
                                                    <div class="idsk-secondary-navigation__body hidden" data-testid="secnav-children">
                                                    <div class="idsk-secondary-navigation__text">
                                                        <div>
                                                        <h3 class="govuk-body-s"><b>Doména gov.sk je oficiálna</b></h3>
                                                        <p class="govuk-body-s">Toto je oficiálna webová stránka orgánu verejnej moci Slovenskej republiky. Oficiálne stránky využívajú najmä doménu gov.sk. <a class="govuk-link--inverse" href="https://www.slovensko.sk/sk/agendy/agenda/_organy-verejnej-moci" target="_blank">Odkazy na jednotlivé webové sídla orgánov verejnej moci nájdete na tomto odkaze.</a></p>
                                                        </div>
                                                        <div>
                                                        <h3 class="govuk-body-s"><b>Táto stránka je zabezpečená</b></h3>
                                                        <p class="govuk-body-s max-width77-desktop">Buďte pozorní a vždy sa uistite, že zdieľate informácie iba cez zabezpečenú webovú stránku verejnej správy SR. Zabezpečená stránka vždy začína https:// pred názvom domény webového sídla.</p>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div class="idsk-dropdown__wrapper idsk-secondary-navigation__dropdown" data-pseudolabel="jazykové menu">
                                            <button  class="govuk-button govuk-button--texted--inverse idsk-secondary-navigation__heading-button idsk-dropdown" aria-label="Rozbaliť jazykové menu" aria-haspopup="listbox">
                                        
                                                <span>slovenčina</span>
                                                <span class="material-icons" aria-hidden="true">arrow_drop_down</span>
                                            </button>
                                            <ul class="idsk-dropdown__options idsk-shadow-medium">
                                                    <li class="idsk-dropdown__option idsk-pseudolabel__wrapper "  data-pseudolabel="eng">
                                                    <a href="#" lang="en">
                                                        eng
                                                    </a>
                                                    </li>
                                                    <li class="idsk-dropdown__option idsk-pseudolabel__wrapper "  data-pseudolabel="slo">
                                                    <a href="#" lang="sk">
                                                        slo
                                                    </a>
                                                    </li>
                                            </ul>
                                            </div>
                                                </div>
                                            </div>
                                            </div>

                                            <div class="govuk-predheader govuk-width-container">
                                            <div class="govuk-header__logo">
                                                <a href="/" class="govuk-header__link govuk-header__link--homepage" title="Odkaz na titulnú stránku">
                                                
                                                <img src="/assets/images/logo-sk-color.svg" alt="Logo Moje Slovensko s odkazom na titulú stránku" />
                                                </a>
                                            </div>
                                            <div class="govuk-header__btns-search"  style="width: 100%" >  

                                                <nav aria-label="Menu" class="govuk-header__navigation mobile-hidden">
                                                    <ul class="govuk-header__navigation-list" style="border-top: 0">
                                                            <li class="govuk-header__navigation-item govuk-header__navigation-item--active" aria-current="page">
                                                            <div class="govuk-header__link--wrapper">
                                                                <a class="govuk-header__link" href="#1"title="10 Otvorených úloh">
                                                                Sekcia 1
                                                                </a>
                                                                <div class="warning" aria-hidden="true">10</div>
                                                            </div>
                                                            </li>
                                                            <li class="govuk-header__navigation-item" >
                                                            <div class="govuk-header__link--wrapper">
                                                                <a class="govuk-header__link" href="#2"title="20 Neprečítaných správ">
                                                                Sekcia 2
                                                                </a>
                                                                <div class="warning" aria-hidden="true">20</div>
                                                            </div>
                                                            </li>
                                                            <li class="govuk-header__navigation-item" >
                                                            <div class="govuk-header__link--wrapper">
                                                                <a class="govuk-header__link" href="#3"title="15 Nevyžiadaných Správ">
                                                                Sekcia 3
                                                                </a>
                                                                <div class="warning" aria-hidden="true">15</div>
                                                            </div>
                                                            </li>
                                                            <li class="govuk-header__navigation-item" >
                                                            <div class="govuk-header__link--wrapper">
                                                                <a class="govuk-header__link" href="#4"title="78 Zverejnených položiek">
                                                                Sekcia 4
                                                                </a>
                                                                <div class="warning" aria-hidden="true">78</div>
                                                            </div>
                                                            </li>
                                                            <li class="govuk-header__navigation-item" >
                                                            <div class="govuk-header__link--wrapper">
                                                                <a class="govuk-header__link" href="#5"title="67 Ukončených úloh">
                                                                Sekcia 5
                                                                </a>
                                                                <div class="warning" aria-hidden="true">67</div>
                                                            </div>
                                                            </li>
                                                    </ul>
                                                    </nav>

                                                <div class="govuk-header__mobile-menu desktop-hidden">
                                                    <button type="button" class="govuk-header__menu-button font-bold govuk-js-header-toggle" aria-controls="navigation" hidden>
                                                    Menu
                                                    </button>
                                                    <div class="govuk-header__actionPanel mobile desktop-hidden">
                                                    <button class="govuk-button" title="Notifikácie"><span role="button" class="material-icons" aria-hidden="true">notifications</span></button>
                                                    <button class="govuk-button" title="Informácie o portáli"><span role="button" class="material-icons" aria-hidden="true">info</span></button>
                                                    </div>
                                                </div>

                                                <div class="govuk-header__actionPanel desktop mobile-hidden">
                                                    <button class="govuk-button" title="Notifikácie"><span role="button" class="material-icons" aria-hidden="true">notifications</span></button>
                                                    <button class="govuk-button" title="Informácie o portáli"><span role="button" class="material-icons" aria-hidden="true">info</span></button>
                                                    <button class="govuk-button govuk-header__profile_button" title="Profil">MM</button>
                                                </div>
                                                
                                            </div>
                                            </div>

                                                <nav id="navigation" aria-label="Menu" class="govuk-header__navigation govuk-width-container">
                                                <dialog id="navigationProfileDialog">
                                                    <div class="govuk-header__profile">
                                                    <div class="govuk-header__profile__header mobile-hidden">
                                                        <div class="govuk-heading-m">Profil</div>
                                                        <button class="govuk-button govuk-button--texted govuk-header__profile_close_button"><span class="material-icons">close</span></button>
                                                    </div>
                                                    <div class="govuk-header__profile__body">
                                                        <img class="profile" src="https://placehold.co/100x100/072C66/FFFFFF?text=JH" alt="Profile"/>
                                                        <h4 class="govuk-heading-l">Janko Hruska</h4>
                                                        <span>RČ 123456/1234</span>

                                                        <button class="govuk-button govuk-button__basic">Primárne tlačidlo</button>
                                                        <button class="govuk-button govuk-button--texted govuk-button--texted__warning">Textové tlačidlo</button>
                                                    </div>
                                                    </div>
                                                </dialog>
                                                    <span class="text">Menu</span>

                                                    <div class="govuk-header__navigation-list desktop-hidden ">
                                                    <ul>
                                                            <li
                                                            class="govuk-header__navigation-item govuk-header__navigation-item--active" aria-current="page">
                                                            <a class="govuk-header__link" href="#1"title="10 Otvorených úloh">
                                                                Sekcia 1
                                                            </a>
                                                            </li>
                                                            <li
                                                            class="govuk-header__navigation-item" >
                                                            <a class="govuk-header__link" href="#2"title="20 Neprečítaných správ">
                                                                Sekcia 2
                                                            </a>
                                                            </li>
                                                            <li
                                                            class="govuk-header__navigation-item" >
                                                            <a class="govuk-header__link" href="#3"title="15 Nevyžiadaných Správ">
                                                                Sekcia 3
                                                            </a>
                                                            </li>
                                                            <li
                                                            class="govuk-header__navigation-item" >
                                                            <a class="govuk-header__link" href="#4"title="78 Zverejnených položiek">
                                                                Sekcia 4
                                                            </a>
                                                            </li>
                                                            <li
                                                            class="govuk-header__navigation-item" >
                                                            <a class="govuk-header__link" href="#5"title="67 Ukončených úloh">
                                                                Sekcia 5
                                                            </a>
                                                            </li>
                                                    </ul>
                                                    </div>
                                                </nav>
                                                </div>
                                        </header>
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
                                style={a11yDark} 
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
                        Pre import individuálneho IDSK komponentu, v tomto prípade hlavičky, do svojho Sass súboru pridajte:
                        
                        <div className="w-full min-w-0 rounded-lg border border-gray-700 bg-[#1E1E1E] mt-4">
                            <SyntaxHighlighter 
                                language="scss" 
                                style={a11yDark} 
                                wrapLines={true}
                                wrapLongLines={true}
                                customStyle={{ padding: '1.25rem', fontSize: '0.875rem', margin: 0, background: 'transparent', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
                                codeTagProps={{ style: { whiteSpace: 'pre-wrap', wordBreak: 'break-word' } }}
                            >
                                {dedent`
                                    @import "node_modules/@id-sk/frontend/idsk/components/header/header";
                                `}
                            </SyntaxHighlighter>
                        </div>
                    </li>
                    <li>
                        <strong className="font-semibold block mb-2">Importujte Javascript</strong>
                        ID-SK Frontend komponenty s JavaScript správaním majú vo svojom markupe nastavený atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">data-module</code>. Pre import javascriptu Hlavičky, vložte do .js súboru:
                        
                        <div className="w-full min-w-0 rounded-lg border border-gray-700 bg-[#1E1E1E] mt-4">
                            <SyntaxHighlighter 
                                language="javascript" 
                                style={a11yDark} 
                                wrapLines={true}
                                wrapLongLines={true}
                                customStyle={{ padding: '1.25rem', fontSize: '0.875rem', margin: 0, background: 'transparent', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
                                codeTagProps={{ style: { whiteSpace: 'pre-wrap', wordBreak: 'break-word' } }}
                            >
                                {dedent`
                                    import { Header, createAll } from 'govuk-frontend' 

                                    createAll(Header)
                                `}
                            </SyntaxHighlighter>
                        </div>
                    </li>
                </ol>
            </div>
        </section>
    </div>
);