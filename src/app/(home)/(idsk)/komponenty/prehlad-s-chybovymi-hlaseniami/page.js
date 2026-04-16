'use client'

import React, { useState } from 'react';
import { MyTabBar, MyTabLink } from '@/app/(home)/_components/tab-bar/tabBar';
import InformationBanner from '@/app/(home)/_components/information-banner/informationBannerCustom';
import { Input } from '@eslovensko/idsk-react';
import ButtonCustom from '@/app/(home)/_components/button/buttonCustom';
import ErrorSummaryCustom from '@/app/(home)/_components/error-summary/errorSummaryCustom';

// Profi balíčky na zvýrazňovanie kódu
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import dedent from 'dedent';

// ============================================================================
// 1. HLAVNÝ KOMPONENT 
// ============================================================================
const ErrorSummaryPage = () => {
    const [activeTab, setActiveTab] = useState('pouzitie');

    const renderTabContent = {
        pouzitie: <TabPouzitie />,
        varianty: <TabVarianty />,
        pristupnost: <TabPristupnost />,
        kod: <TabImplementacia />
    };

    return (
        <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0 text-black">
            <title>Prehľad s chybovými hláseniami</title>
            
            <header>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
                    Prehľad s chybovými hláseniami (Error summary)
                </h1>
                <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-12">
                    Prehľad s chybovými hláseniami je notifikačný komponent, ktorý prehľadne sumarizuje všetky validačné chyby vo formulári a umožňuje používateľovi rýchlu navigáciu ku každému chybnému poľu prostredníctvom anchor odkazov. 
                </p>
            </header>

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

export default ErrorSummaryPage;

// ============================================================================
// 2. PODKOMPONENTY (Obsah jednotlivých tabov)
// ============================================================================

// --- TAB 1: POUŽITIE ---
const TabPouzitie = () => {

    const [hasErrors, setHasErrors] = useState(true);

    const chyby = hasErrors ? [
        { id: 'input-meno', message: 'Meno musí obsahovať aspoň 3 znaky' },
        { id: 'input-email', message: 'Zadajte e-mail v správnom tvare' }
    ] : [];

    const handleSubmit = (e) => {
        e.preventDefault();
        setHasErrors(true);
    };

    return (
        <div className="animate-fade-in">
            <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-black mb-4">
                Použitie prehľadu s chybovými hláseniami
            </h2>
            
            <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
                <div className="w-full max-w-[600px] px-4">
                    {/* Ukážka prehľadu chýb */}
                    <ErrorSummaryCustom 
                        title="Vo formulári sú chyby"
                        description="Prosím, opravte nasledujúce údaje pred pokračovaním:"
                        errors={chyby} 
                    />
                    <p className="mb-7">
                        Povinné polia sú označené hviezdičkou (<span className="text-[#C3112B] text-xl">*</span>)
                    </p>    

                    {/* Ukážkový formulár */}
                    <form onSubmit={handleSubmit} className="space-y-8 mt-8" noValidate>
                        <div className={`flex flex-col ${hasErrors ? 'border-[#C3112B]' : 'border-transparent'}`}>              
                            <Input 
                                id="input-meno"
                                inputSize='medium'
                                name="meno"
                                label="Zadajte meno"
                                errorMsg="Meno musí obsahovať aspoň 3 znaky"
                                mandatory={true}
                                error={hasErrors}
                                fullWidth={true}
                            />
                        </div>
                        <div className={`flex flex-col ${hasErrors ? 'border-[#C3112B]' : 'border-transparent'}`}>                      
                            <Input 
                                id="input-email"
                                inputSize='medium'
                                name="meno"
                                label="Zadajte e-mail"
                                errorMsg="Zadajte e-mail v správnom tvare"
                                mandatory={true}
                                error={hasErrors}
                                fullWidth={true}
                            />
                        </div>

                        <ButtonCustom variant="primary" status="basic">
                            Odoslať formulár
                        </ButtonCustom>
                    </form>
                </div>
            </div>

            <p className="text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8">
                V prípade, že používateľ zle vyplní formulár, zobrazí sa chyba a formulár nie je možné odoslať. Základné pravidlo pri zobrazovaní chýb po validácii je viditeľne zobraziť a vysvetliť chyby, ktoré nastali. Prehľad s chybovými hláseniami sa musí nachádzať v hornej časti stránky tak, aby bol viditeľný, keď sa stránka aktualizuje a asistenčné zariadenia ju vedeli ihneď prečítať. Účelom komponentu je upozorniť používateľa, že formulár obsahuje chyby, poskytnúť mu prehľad všetkých chýb na jednom mieste a umožniť rýchly presun fokusu na konkrétne chybné polia.
            </p>

            <div className="flex flex-wrap gap-8 sm:gap-12 mt-10">
                <div className="flex flex-col items-start flex-1 min-w-[280px]">
                    <InformationBanner
                        ariaLabel="Správne použitie prehľadu s chybovými hláseniami"
                        type="banner"
                        variant="success"
                        hideCloseButton={true}
                    >
                     <h3 className="text-lg sm:text-xl font-bold text-black leading-tight ml-2 mb-4">
                        Ako sa používa
                    </h3>
                     <ul className="list-disc pl-5 space-y-3 text-sm tracking-wide leading-relaxed text-black mb-8 mt-4">
                        <li>keď formulár obsahuje validačnú chybu, aj keď ide len o jednu chybu</li>
                        <li>po odoslaní formulára, nie počas písania</li>
                        <li>vždy s chybovým hlásením pri konkrétnych poliach</li>
                        <li>na začiatku hlavného obsahu stránky - pred formulár</li>
                        <li>vždy len jeden</li>
                        <li>chyby v zozname musia byť v rovnakom poradí, ako vo formulári a zároveň klikateľné odkazy</li>
                    </ul>
                    </InformationBanner>
                </div>
                
                <div className="flex flex-col items-start flex-1 min-w-[280px]">
                    <InformationBanner
                        ariaLabel="Nesprávne použitie prehľadu s chybovými hláseniami"
                        type="banner"
                        variant="warning"
                        hideCloseButton={true}
                    >
                     <h3 className="text-lg sm:text-xl font-bold text-black leading-tight ml-2 mb-4">
                        Ako sa nepoužíva
                    </h3>
                     <ul className="list-disc pl-5 space-y-3 text-sm tracking-wide leading-relaxed text-black mb-8 mt-4">
                        <li>na konci formulára</li>
                        <li>s inými textami chýb než sú tie, ktoré sú pri poliach</li>
                        <li>nenechajte fokus na tlačidle „Odoslať“ po validačnej chybe</li>
                        <li>so všeobecnými alebo neurčitými hláseniami</li>
                        <li>na systémové alebo aplikačné chyby</li>
                    </ul>
                    </InformationBanner>
                </div>
            </div>
        </div>
    );
};

// --- TAB 2: VARIANTY ---
const TabVarianty = () => {
    // 1. Znova definujeme stav aj pre tento Tab, inak to spadne
    const [hasErrors, setHasErrors] = useState(true);

    const chyby1 = hasErrors ? [
        { id: 'input-variant1', message: 'Meno musí obsahovať aspoň 3 znaky' },
    ] : [];

    const chyby2 = hasErrors ? [
        { id: 'input-variant2', message: 'Zadajte e-mail v správnom tvare' }
    ] : [];

    const handleSubmit = (e) => {
        e.preventDefault();
        setHasErrors(true);
    };

    return (
        <div className="animate-fade-in">
            <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-black mb-4">
                Varianty
            </h2>
            <p className="text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8"> 
                Variant prehľadu s chybovými hláseniami bez popisu.
            </p>
            
            {/* VARIANT 1: BEZ POPISU */}
            <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
                <div className="flex flex-col gap-6 w-full max-w-[600px] px-4">            
                    <ErrorSummaryCustom
                        title="Vo formulári sú chyby"
                        errors={chyby2}
                    />
                    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                        <div className="flex flex-col"> 
                            <Input
                                id="input-variant2"
                                inputSize='medium'
                                name="email"
                                label="Zadajte e-mail"
                                errorMsg="Zadajte e-mail v správnom tvare"
                                mandatory={true}
                                error={hasErrors}
                                fullWidth={true}
                            />
                        </div>
                    </form>
                </div>
            </div>

            <p className="text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8"> 
                Variant prehľadu s chybovými hláseniami s popisom 
            </p>
            <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8">
                <div className="flex flex-col gap-6 w-full max-w-[600px] px-4">
                    <ErrorSummaryCustom
                        title="Vo formulári sú chyby"
                        description="Tu môžete doplniť prípadné vysvetlenie, aké chyby sa na stránke nachádzajú a ako ich napraviť."
                        errors={chyby1}
                    />
                    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                        <div className="flex flex-col">              
                            <Input
                                id="input-variant1"
                                inputSize='medium'
                                name="meno2"
                                label="Zadajte meno"
                                errorMsg="Meno musí obsahovať aspoň 3 znaky"
                                mandatory={true}
                                error={hasErrors}
                                fullWidth={true}
                            />
                        </div>
                    </form>
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
        <p className="text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8">
            Prehľad s chybovými hláseniami spĺňa požiadavky WCAG 2.1 AA. Spĺňa požiadavky na kontrastné pomery a jeho súčasťou sú plnohodnotné interakcie s klávesnicou a asistenčnými technológiami (čítačkami obrazovky).
        </p>
        
        <h3 className="text-lg sm:text-xl font-bold text-black mb-4 mt-8">
            Klávesové ovládanie
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8">
            <li>
                <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Tab</code> – presúva fokus medzi jednotlivými chybami (odkazmi) v prehľade a ďalšími fokusovateľnými prvkami stránky.
            </li>
            <li>
                <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Shift + Tab</code> – presun fokusu na predchádzajúci prvok.
            </li>
            <li>
                <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">Enter</code> – aktivuje odkaz pri chybe a presunie fokus priamo na príslušné chybné pole vo formulári.
            </li>
        </ul>
        
        <h3 className="text-lg sm:text-xl font-bold text-black mb-4">
            Základné technické pravidlá implementácie
        </h3>
        <p className="text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-4">
            Pri implementácii prehľadu s chybovými hláseniami nezabudnite dodržiavať nasledovné pravidlá:
        </p>
        <ul className="list-disc pl-5 space-y-3 text-sm sm:text-base tracking-wide leading-relaxed md:leading-8 text-black mb-8">
            <li>
                Nadpis celého prehľadu by mal mať úroveň <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;h2&gt;</code> alebo <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;h3&gt;</code> podľa kontextu stránky. Mal by byť jasný a krátky.
            </li>
            <li>
                Celý obalový komponent musí mať atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">role=&quot;alert&quot;</code>, čím okamžite upozorní asistenčné zariadenia, že vo formulári nastali chyby.
            </li>
            <li>
                Komponent musí byť prepojený s nadpisom cez atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">aria-labelledby=&quot;id-nadpisu&quot;</code>.
            </li>
            <li>
                Nastavenie <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">tabindex=&quot;-1&quot;</code> musí byť prítomné (ideálne priamo na nadpise prehľadu), aby naň bolo možné presunúť focus cez JavaScript, no aby do neho používateľ zbytočne nenarazil pri bežnom tabbing-u.
            </li>
            <li>
                Nezabudnite JavaScriptom nastaviť správne focus stavy, aby aj asistenčné zariadenia vedeli, že a kde nastal problém. Po zistení chyby sa musí focus automaticky presunúť na prehľad chýb.
            </li>
            <li>
                Jednotlivé chybové položky musia byť vytvorené cez zoznam (<code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;ul&gt;</code>, <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;li&gt;</code>) a obsahovať preklik (<code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">&lt;a&gt;</code>).
            </li>
            <li>
                Odkaz v chybovej položke musí cez atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">href=&quot;#id-pola&quot;</code> smerovať presne na id daného chybne vyplneného vstupného poľa vo formulári.
            </li>
            <li>
                Text odkazu v prehľade musí byť úplne totožný s chybovou hláškou zobrazenou priamo pri dátovom poli, aby nebol používateľ zmätený.
            </li>
            <li>
                Okrem farby, ikony a hintu nezabudnite pre čítačky obrazovky pridať samotnému chybnému poľu vo formulári atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">aria-invalid=&quot;true&quot;</code>.
            </li>
        </ul>
    </div>
);

const TabImplementacia = () => (
    <div className="animate-fade-in text-black space-y-10">
        
        <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Implementácia prehľadu s chybovými hláseniami z ID-SK Frontend</h2>
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
                            Zo stránky dokumentácie stiahnite HTML kód komponentu <a href="https://komponenty.idsk3.gov.sk/components/error-summary" className="text-my-blue underline hover:text-blue-800 transition-colors"> prehľad s chybovými hláseniami</a> a vložte ho do svojho HTML. Nezabudnite na atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">data-module=&quot;govuk-error-summary&quot;</code>, bez ktorého nebude fungovať JavaScript.
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
                                <div class="govuk-error-summary" data-module="govuk-error-summary">
                                    <div role="alert">
                                        <h2 class="govuk-error-summary__title">
                                            Zadajte správne tieto vstupné údaje a skúste odoslať znova.
                                        </h2>
                                        <p class="govuk-error-summary__description">
                                            Priestor pre popis, k akým chybám došlo a ako ich opraviť.
                                        </p>
                                        <div class="govuk-error-summary__body">
                                            <ul class="govuk-list govuk-error-summary__list">
                                                <li>
                                                    <a href="#example-error-1">Prosím, zadajte správny tvar vášho Rodného čísla.</a>
                                                </li>
                                                <li>
                                                    <a href="#example-error-2">Prosím, zadajte správny tvar vášho OP preukazu.</a>
                                                </li>
                                                <li>
                                                    <a href="#example-error-3">Prosím, zadajte správny tvar vášho Tel.čísla.</a>
                                                </li>
                                            </ul>
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
                        Pre import individuálneho IDSK komponentu (prehľad s chybovými hláseniami) do svojho Sass súboru pridajte:
                        
                        <SyntaxHighlighter 
                            language="scss" 
                            style={vscDarkPlus} 
                            wrapLines={true}
                            wrapLongLines={true}
                            customStyle={{ padding: '1.25rem', fontSize: '0.875rem', margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
                            codeTagProps={{ style: { whiteSpace: 'pre-wrap', wordBreak: 'break-word' } }}
                            >
                            {dedent`
                                @import "node_modules/@id-sk/frontend/idsk/components/error-summary/error-summary";
                            `}
                        </SyntaxHighlighter>
                    </li>
                    <li>
                        <strong className="font-semibold block mb-2">Importujte Javascript</strong>
                        ID-SK Frontend komponenty s JavaScript správaním majú vo svojom markupe nastavený atribút <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">data-module</code>. Pre import javascriptu Prehľad s chybovými hláseniami, vložte do .js súboru:
                        
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
                                    import { ErrorSummary, createAll } from 'govuk-frontend' 

                                    createAll(ErrorSummary)
                                `}
                            </SyntaxHighlighter>
                        </div>
                    </li>

                </ol>
            </div>
        </section>
    </div>
);