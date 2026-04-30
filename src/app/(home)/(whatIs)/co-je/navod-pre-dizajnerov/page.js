'use client'

import React, { useState } from 'react';
import { MyTabBar, MyTabLink } from '@/app/(home)/_components/tab-bar/tabBar';
import ButtonCustom from '@/app/(home)/_components/button/buttonCustom';
import InformationBanner from '@/app/(home)/_components/information-banner/informationBannerCustom';
import Image from 'next/image';


const DesignersPage = () => {
    const [activeTab, setActiveTab] = useState('akoZacat');

    const handleClick = () => {
        window.open('https://www.figma.com/community/file/1581301778555425083', '_blank');
    };

    const renderTabContent = {
        akoZacat: <TabAkoZacat />,
        dizajnovySystem: <TabDizajnovySystem />,
        navodPreDizajnerov: <TabNavodPreDizajnerov />,
        navodPreNedizajnerov: <TabNavodPreNedizajnerov />
    };

    return (
        <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0 text-black">
            <title>Pre dizajnérov</title>
            
            <header>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight mb-8">
                    Pre dizajnérov
                </h1>
            </header>

            <main id="main-content" role="main">
                <div className="text-sm sm:text-base tracking-wide leading-relaxed text-black mb-8 space-y-6">
                    <p>
                        V dizajnérskom nástroji Figma nájdete knižnicu dizajnového systému IDSK – knižnicu štýlov, komponentov či vzorov.
                    </p>
                    <p>
                        Všetky súbory sú voľne prístupné na prepoužitie a pre prácu s nimi je nevyhnutné duplikovať súbory alebo skopírovať do nového súboru.
                    </p>
                    <p>
                        Pomocou týchto komponentov je možné vyskladať elektronickú službu a/alebo webové sídlo v IDSK.
                    </p>
                </div>

                <div className="mb-12">
                    <ButtonCustom variant="primary" status="basic" onClick={handleClick} className="my-4" aria-label="Otvorí sa v novom okne"
                    iconRight={
                        <svg className="w-5 h-5 shrink-0" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    }>
                        Figma knižnica IDSK
                    </ButtonCustom>
                </div>
                <MyTabBar>
                    <MyTabLink 
                        href="#" 
                        selected={activeTab === 'akoZacat'} 
                        onClick={(e) => { e.preventDefault(); setActiveTab('akoZacat'); }}
                    >
                        Ako začať
                    </MyTabLink>
                    <MyTabLink 
                        href="#" 
                        selected={activeTab === 'dizajnovySystem'} 
                        onClick={(e) => { e.preventDefault(); setActiveTab('dizajnovySystem'); }}
                    >
                        Dizajnový systém
                    </MyTabLink>
                    <MyTabLink 
                        href="#" 
                        selected={activeTab === 'navodPreDizajnerov'} 
                        onClick={(e) => { e.preventDefault(); setActiveTab('navodPreDizajnerov'); }}
                    >
                        Pre dizajnérov
                    </MyTabLink>
                    <MyTabLink 
                        href="#" 
                        selected={activeTab === 'navodPreNedizajnerov'} 
                        onClick={(e) => { e.preventDefault(); setActiveTab('navodPreNedizajnerov'); }}
                    >
                        Pre nedizajnérov
                    </MyTabLink>
                </MyTabBar>

                <div className="mt-8 text-black">
                    {renderTabContent[activeTab]}
                </div>
            </main>
        </div>
    );
}

export default DesignersPage;

// ============================================================================
// 2. PODKOMPONENTY (Obsah jednotlivých tabov)
// ============================================================================

// --- TAB 1: AKO ZAČAŤ S IDSK ---
const TabAkoZacat = () => (
    <div className="animate-fade-in space-y-10">
        <section>
            <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-black mb-6">
                Obsah knižnice
            </h2>
            <ul className="space-y-4 text-sm sm:text-base tracking-wide leading-relaxed text-black">
                <li className="flex items-start gap-3">
                    <span className="shrink-0 font-bold">Štýly:</span>
                    <span>Určujú typografiu, farby, ikonografiu, medzery, tiene a mriežku.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="shrink-0 font-bold">Komponenty:</span>
                    <span>Definujú opakovane použiteľné prvky a ich varianty.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="shrink-0 font-bold">Vzory:</span>
                    <span>Spájajú komponenty do použiteľných blokov pre návrh používateľského rozhrania.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="shrink-0 font-bold">Šablóny:</span>
                    <span>Spájajú vzory a komponenty do šablón na použitie.</span>
                </li>
            </ul>
        </section>

        <section>
            <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-black mb-6">
                Ako pracovať s knižnicou
            </h2>
            <p className="text-sm sm:text-base tracking-wide leading-relaxed text-black mb-4">
                Knižnicu IDSK použite ako prvý krok pri návrhu rozhrania. Rozhranie tvoria štýly a komponenty.
            </p>
            <ol className="list-decimal pl-5 space-y-4 text-sm sm:text-base tracking-wide leading-relaxed text-black mb-6">
                <li>
                    <strong>Štýl</strong> vyberte v pravom paneli vo Figme. Panel zobrazuje typografiu, farby a mriežku.
                    <div className="my-8 overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                        <Image
                            src="/images/designers/ako_pracovať_figma.png"
                            width={1100}
                            height={500}
                            quality={100}
                            alt="Ako pracovať s pravým bočným panelom"
                            className="w-full h-auto md:h-[500px] object-cover"
                        />
                    </div>
                </li>
                <li>
                    <strong>Komponenty</strong> vyberte v ľavom navigačnom paneli vo Figme. V hornej časti otvorte sekciu Assets, kde nájdete zoznam komponentov. Vyberte komponent a začnite navrhovať rozhranie.
                    <div className="my-8 overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                        <Image
                            src="/images/designers/ako_zacat_figma2.png"
                            width={1100}
                            height={500}
                            quality={100}
                            alt="Ako pracovať s ľavým bočným panelom"
                            className="w-full h-auto md:h-[500px] object-cover"
                        />
                    </div>
                </li>
            </ol>
        </section>

        <section>
            <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-black mb-4">
                Spätná väzba a podnety
            </h2>
            <p className="text-sm sm:text-base tracking-wide leading-relaxed text-black mb-4">
                Pomôžte nám zlepšovať dizajnovú knižnicu IDSK. Svoju spätnú väzbu pošlite na <a href="mailto:idsk@mirri.gov.sk" className="text-my-blue underline hover:text-blue-800 transition-colors">idsk@mirri.gov.sk</a>.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base tracking-wide leading-relaxed text-black">
                <li>Ak ste našli chybu v komponente alebo máte návrh na zlepšenie, napíšte nám.</li>
                <li>Ak knižnicu začínate používať, hľadáte odpovede alebo sa chcete zapojiť do jej rozvoja ako dizajnér či developer, kontaktujte nás.</li>
            </ul>
        </section>
    </div>
);


// --- TAB 2: DIZAJNOVÝ SYSTÉM IDSK ---
const TabDizajnovySystem = () => (
    <div className="animate-fade-in space-y-10">
        <section>
            <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-black mb-4">
                Dizajnový systém IDSK
            </h2>
            <p className="text-sm sm:text-base tracking-wide leading-relaxed text-black mb-4">
                IDSK je súbor pravidiel tvorby obsahu a funkčnosti verejných elektronických služieb a webových sídiel v súlade s potrebami používateľov. Definuje komponenty, pojmy, princípy, vzory a pravidlá pre návrh používateľského rozhrania.
            </p>
            <p className="text-sm sm:text-base tracking-wide leading-relaxed text-black">
                Zjednocuje komunikáciu a používateľskú skúsenosť naprieč elektronickými službami verejnej správy. Pomáha vytvárať prístupné, konzistentné a jednotné elektronické služby verejnej správy.
            </p>
        </section>

        <section>
            <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-black mb-6">
                Z čoho sa skladá dizajnový systém
            </h2>
            
            <div className="space-y-8">
                <div>
                    <h3 className="text-lg font-bold mb-2">1. Základy (Foundations)</h3>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">Určujú vizuálny a interakčný jazyk systému. Obsahujú:</p>
                    <ul className="list-disc pl-5 text-sm sm:text-base leading-relaxed space-y-1">
                        <li>farby a kontrast,</li>
                        <li>typografiu a hierarchiu textu,</li>
                        <li>rozstupy, mriežku a rozloženie,</li>
                        <li>ikony a ilustrácie,</li>
                        <li>pohyby a animácie,</li>
                        <li>pravidlá prístupnosti (WCAG 2.1).</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-2">2. Rozloženie a štruktúra</h3>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">Určujú správanie obsahu pri rôznych veľkostiach obrazovky. Zahŕňajú:</p>
                    <ul className="list-disc pl-5 text-sm sm:text-base leading-relaxed space-y-1">
                        <li>mriežkové systémy,</li>
                        <li>šírky kontajnerov,</li>
                        <li>rozloženie hlavičky, navigácie, obsahu a päty,</li>
                        <li>vzory rozloženia (napr. formulár, dvojstĺpcové rozloženie).</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-2">3. Komponenty</h3>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">Definujú stavebné prvky používateľského rozhrania. Každý komponent obsahuje:</p>
                    <ul className="list-disc pl-5 text-sm sm:text-base leading-relaxed space-y-1 mb-2">
                        <li>popis a pravidlá použitia,</li>
                        <li>vizuálny návrh a stavy,</li>
                        <li>ukážku kódu,</li>
                        <li>odporúčania pre prístupnosť.</li>
                    </ul>
                    <p className="text-sm sm:text-base italic text-gray-600">Príklady: tlačidlá, formulárové prvky, karty, upozornenia, navigácia.</p>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-2">4. Vzory (Patterns)</h3>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">Spájajú komponenty do funkčných celkov, riešia bežné úlohy, napríklad:</p>
                    <ul className="list-disc pl-5 text-sm sm:text-base leading-relaxed space-y-1">
                        <li>prihlásenie alebo registráciu,</li>
                        <li>vyhľadávanie,</li>
                        <li>vypĺňanie formulárov,</li>
                        <li>navigáciu medzi stránkami.</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-2">5. Obsah a jazyk</h3>
                    <p className="text-sm sm:text-base leading-relaxed">Definujú tón komunikácie a pravidlá písania textov. Udržiavajú jazyk zrozumiteľný, inkluzívny a konzistentný.</p>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-2">6. Kód a implementácia</h3>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">Umožňujú používať komponenty priamo. Zahŕňajú:</p>
                    <ul className="list-disc pl-5 text-sm sm:text-base leading-relaxed space-y-1">
                        <li>Frontend knižnicu (napr. SCSS alebo JavaScript),</li>
                        <li>dokumentáciu,</li>
                        <li>pravidlá pomenovania,</li>
                        <li>príklady implementácie.</li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-8">
            <h2 className="text-lg sm:text-xl font-bold tracking-wide text-black mb-4">
                Ako sa používa dizajnový systém
            </h2>
            <ul className="space-y-3 text-sm sm:text-base tracking-wide leading-relaxed text-black">
                <li><strong>Navrhnite</strong> – Použite existujúce komponenty a vzory vo Figme.</li>
                <li><strong>Prototypujte</strong> – Otestujte návrh s používateľmi a overte prístupnosť.</li>
                <li><strong>Implementujte</strong> – Použite frontend knižnicu IDSK 3.1.0 vo svojom projekte.</li>
                <li><strong>Testujte</strong> – Otestujte vizuálnu konzistenciu a funkčnosť komponentov.</li>
                <li><strong>Zdieľajte</strong> – Ak vznikne nová potreba, navrhnite jej doplnenie do systému.</li>
            </ul>
        </section>
    </div>
);

// --- TAB 3: NÁVOD PRE DIZAJNÉROV ---
const TabNavodPreDizajnerov = () => (
    <div className="animate-fade-in space-y-10">
        <section>
            <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-black mb-4">
                Návod na prácu s knižnicou
            </h2>
            <p className="text-sm sm:text-base tracking-wide leading-relaxed text-black mb-4">
                Knižnica IDSK vo Figme obsahuje pripravené komponenty, ktoré môžete opakovane používať v projekte. Dizajnér vytvoril komponenty tak, aby ste ich nemuseli navrhovať od začiatku. 
            </p>
            <p className="text-sm sm:text-base tracking-wide leading-relaxed text-black mb-4">
                Príklady komponentov: tlačidlá, karty, hlavičky, ikony, bannery. 
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm sm:text-base text-blue-900 mb-6">
                <strong>Tip:</strong> Používajte komponenty z knižnice a vkladajte ich do projektu bez úprav základnej štruktúry.
            </div>
        </section>

        <section>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Prehliadanie knižnice</h3>
            <ul className="list-disc pl-5 text-sm sm:text-base leading-relaxed space-y-2 mb-6">
                <li>V ľavom navigačnom paneli nájdete sekciu <strong>Pages (Stránky)</strong>. Obsahuje skupiny komponentov a štýlov.</li>
                <li>Každá stránka združuje prvky podľa typu alebo účelu, napríklad tlačidlá, formuláre, ikony a pod.</li>
                <li>Medzi stránkami sa prepínajte kliknutím.</li>
                <li>Knižnicu môžete prehliadať aj posúvaním zvislého posuvníka v ľavom navigačnom paneli (pozrite obrázok nižšie).</li>
            </ul>
            <div className="italic mb-8">
                 <div className="my-8 overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                        <Image
                            src="/images/designers/navod_na_kniznicu.png"
                            width={1100}
                            height={400}
                            quality={100}
                            alt="Ako pracovať s posuvnou lištou"
                            className="w-full h-auto md:h-[400px] object-cover"
                        />
                    </div>
            </div>

            <h3 className="text-lg sm:text-xl font-bold mb-4">
                Obsah knižnice
            </h3>
            <ul className="space-y-4 text-sm sm:text-base tracking-wide leading-relaxed text-black">
                <li className="flex items-start gap-3">
                    <span className="shrink-0 font-bold">Štýly:</span>
                    <span>Určujú typografiu, farby, ikonografiu, medzery, tiene a mriežku.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="shrink-0 font-bold">Komponenty:</span>
                    <span>Definujú opakovane použiteľné prvky a ich varianty.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="shrink-0 font-bold">Vzory:</span>
                    <span>Spájajú komponenty do použiteľných blokov pre návrh používateľského rozhrania.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="shrink-0 font-bold">Šablóny:</span>
                    <span>Spájajú vzory a komponenty do šablón na použitie.</span>
                </li>
            </ul>
        </section>

        <section>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Posúvanie po plátne</h3>
            <ul className="list-disc pl-5 text-sm sm:text-base leading-relaxed space-y-2">
                <li>Po plátne sa posúvajte kolieskom myši alebo touchpadom.</li>
                <li>Približovanie a vzďaľovanie ovládajte kombináciou <strong>Ctr + koliesko myši</strong> (Windows) alebo <strong>Cmd + trackpad</strong> (MacOS).</li>
                <li>Na horizontálne posúvanie použite kombináciu <strong>Shift + koliesko myši</strong>.</li>
            </ul>
        </section>

        <section>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Vyhľadávanie komponentov</h3>
            <ul className="list-disc pl-5 text-sm sm:text-base leading-relaxed space-y-2 mb-6">
                <li>Na ľavej strane, pod zoznamom stránok (Pages), nájdete vyhľadávacie pole. Pomocou skratky <strong>Ctrl/Cmd + F</strong> vyhľadáte komponent podľa názvu alebo časti názvu.</li>
                <li>Vyhľadávanie prehľadá všetky stránky a zvýrazní nájdené komponenty.</li>
                <li>Vo Figme majú komponenty fialové ohraničenie a fialovú ikonu. Komponent je hlavná verzia prvku, z nej vznikajú ďalšie prvky, tzv. inštancie.</li>
            </ul>
            <div className="italic mb-8">
                 <div className="my-8 overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                        <Image
                            src="/images/designers/navod_komponent.png"
                            width={1100}
                            height={400}
                            quality={100}
                            alt="Ako pracovať s komponentom"
                            className="w-full h-auto md:h-[400px] object-cover"
                        />
                    </div>
            </div>
        </section>

        <section>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Varianty komponentov</h3>
            <ul className="list-disc pl-5 text-sm sm:text-base leading-relaxed space-y-2 mb-6">
                <li>Každý komponent môže mať viac variantov, napríklad rôzne farby, stavy alebo veľkosti.</li>
                <li>Varianty sú zoskupené na jednej stránke a usporiadané vedľa seba.</li>
                <li>Prehliadajte jednotlivé položky na stránke a vyberte variant, ktorý potrebujete.</li>
            </ul>
            <div className="italic mb-8">
                 <div className="my-8 overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                        <Image
                            src="/images/designers/varianty_priklad.png"
                            width={1100}
                            height={400}
                            quality={100}
                            alt="Ako pracovať s komponentom"
                            className="w-full h-auto md:h-[400px] object-cover"
                        />
                    </div>
            </div>
        </section>
         <section>
            <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-black mb-4">
                Spätná väzba a podnety
            </h2>
            <p className="text-sm sm:text-base tracking-wide leading-relaxed text-black mb-4">
                Pomôžte nám zlepšovať dizajnovú knižnicu IDSK. Svoju spätnú väzbu pošlite na <a href="mailto:idsk@mirri.gov.sk" className="text-my-blue underline hover:text-blue-800 transition-colors">idsk@mirri.gov.sk</a>.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base tracking-wide leading-relaxed text-black">
                <li>Ak ste našli chybu v komponente alebo máte návrh na zlepšenie, napíšte nám.</li>
                <li>Ak knižnicu začínate používať, hľadáte odpovede alebo sa chcete zapojiť do jej rozvoja ako dizajnér či developer, kontaktujte nás.</li>
            </ul>
        </section>
    </div>
);

// --- TAB 4: NÁVOD PRE NEDIZAJNÉROV ---
const TabNavodPreNedizajnerov = () => (
    <div className="animate-fade-in space-y-10">
        <section>
            <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-black mb-4">
                Návod na prácu s knižnicou pre nedizajnérov
            </h2>
            <p className="text-sm sm:text-base tracking-wide leading-relaxed text-black mb-4">
                Knižnica IDSK vo Figme obsahuje pripravené komponenty, ktoré môžete opakovane používať v projekte. Dizajnér vytvoril komponenty tak, aby ste ich nemuseli navrhovať od začiatku. 
            </p>
            <p className="text-sm sm:text-base tracking-wide leading-relaxed text-black mb-6">
                Príklady komponentov: tlačidlá, karty, hlavičky, ikony, bannery. Používajte komponenty z knižnice a vkladajte ich do projektu bez úprav základnej štruktúry.
            </p>
        </section>

        <section>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Ako pracovať s knižnicou</h3>
            <h4 className="font-bold mb-2">Pridanie knižnice IDSK 3 do súboru vo Figme</h4>
            <ol className="list-decimal pl-5 text-sm sm:text-base leading-relaxed space-y-2 mb-6">
                <li>Otvorte svoj súbor vo Figme.</li>
                <li>V ľavom navigačnom paneli kliknite na <strong>Assets</strong>.</li>
                <li>V paneli Assets kliknite na ikonu knižnice (ikonka knižky). Otvorí sa okno Manage libraries.</li>
                <li>Do vyhľadávacieho poľa zadajte <strong>IDSK 3 (MIRRI SR)</strong> a kliknite na <strong>Add to file</strong>.</li>
            </ol>
            <div className="italic mb-8">
                 <div className="my-8 overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                        <Image
                            src="/images/designers/nedizajneri1.png"
                            width={1100}
                            height={400}
                            quality={100}
                            alt="Ako nájsť knižnicu"
                            className="w-full h-auto md:h-[400px] object-cover"
                        />
                    </div>
            </div>
            <p className="text-sm sm:text-base mb-6">Knižnicu IDSK 3 následne nájdete medzi dostupnými knižnicami vo svojom súbore.</p>
            <div className="italic mb-8">
                 <div className="my-8 overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                        <Image
                            src="/images/designers/nedizajneri2.png"
                            width={1100}
                            height={400}
                            quality={100}
                            alt="Kde nájsť knižnicu"
                            className="w-full h-auto md:h-[400px] object-cover"
                        />
                    </div>
            </div>
        </section>

        <section>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Aktualizácia knižnice</h3>
            <p className="text-sm sm:text-base leading-relaxed mb-4">
                Ak dizajnéri upravia komponenty v pôvodnej knižnici IDSK 3, zmeny sa automaticky prejavia aj vo vašom súbore.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 text-sm sm:text-base text-yellow-900 mb-8">
                <strong>Pozor:</strong> Nesťahujte knižnicu z Figma Community formou duplikácie súboru, pokiaľ to nie je nutné. Vytvorí sa tým iba lokálna kópia súboru a stratí sa prepojenie na centrálnu knižnicu. Komponenty sa vám potom nebudú automaticky aktualizovať.
            </div>
            
            <h3 className="text-lg sm:text-xl font-bold mb-4">
                Obsah knižnice
            </h3>
            <ul className="space-y-4 text-sm sm:text-base tracking-wide leading-relaxed text-black">
                <li className="flex items-start gap-3">
                    <span className="shrink-0 font-bold">Štýly:</span>
                    <span>Určujú typografiu, farby, ikonografiu, medzery, tiene a mriežku.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="shrink-0 font-bold">Komponenty:</span>
                    <span>Definujú opakovane použiteľné prvky a ich varianty.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="shrink-0 font-bold">Vzory:</span>
                    <span>Spájajú komponenty do použiteľných blokov pre návrh používateľského rozhrania.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="shrink-0 font-bold">Šablóny:</span>
                    <span>Spájajú vzory a komponenty do šablón na použitie.</span>
                </li>
            </ul>
        </section>

        <section>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Vyhľadávanie a pridanie komponentov na plátno</h3>
            <ol className="list-decimal pl-5 text-sm sm:text-base leading-relaxed space-y-2 mb-8">
                <li>V ľavom navigačnom paneli <strong>Assets</strong> vyhľadajte požadovaný komponent. Môžete použiť aj vyhľadávacie pole.</li>
                <li>Komponenty vo Figme majú fialové ohraničenie a fialovú ikonu. Komponent je hlavná verzia prvku. Z nej vznikajú ďalšie prvky, tzv. inštancie.</li>
                <li>Kliknite na komponent a potiahnite ho na plátno (drag and drop).</li>
                <li>Komponent sa zobrazí na plátne a môžete s ním ďalej pracovať.</li>
            </ol>
        </section>

        <section>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Úprava textu, obrázkov a obsahu komponentov</h3>
            <p className="text-sm sm:text-base mb-4">Komponenty môžete upravovať bez zmeny ich základnej štruktúry.</p>
            
            <div className="space-y-4 mb-6">
                <div>
                    <h4 className="font-bold">Zmena textu:</h4>
                    <ul className="list-disc pl-5 text-sm sm:text-base">
                        <li>Dvojkliknite na text.</li>
                        <li>Zadajte nový obsah.</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold">Zmena ikon alebo obrázkov:</h4>
                    <ul className="list-disc pl-5 text-sm sm:text-base">
                        <li>Ak komponent obsahuje ikonu, zvyčajne ju nie je možné meniť voľne.</li>
                        <li>Niektoré komponenty však umožňujú zmeniť variant ikony v pravom paneli.</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold">Zmena variantov (stavov):</h4>
                    <p className="text-sm sm:text-base mb-2">Komponenty môžu mať viac verzií, tzv. varianty (napríklad informačný, úspešný, upozorňovací, oznamovací banner). Prepínate ich v pravom paneli.</p>
                    <div className="italic mb-8">
                        <div className="my-8 overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                                <Image
                                    src="/images/designers/nedizajneri3.png"
                                    width={1100}
                                    height={400}
                                    quality={100}
                                    alt="Ako si meniť varianty"
                                    className="w-full h-auto md:h-[400px] object-cover"
                                />
                            </div>
                    </div>
                </div>
            </div>
        </section>
        <InformationBanner
            ariaLabel="Čo nerobiť pri práci s Figma knižnicou"
            type="banner"
            variant="warning"
            hideCloseButton={true}
        >
            <h3 className="text-lg sm:text-xl font-bold text-black leading-tight mt-4 ml-2 mb-4">
                Čomu sa vyhnúť
            </h3>
            <ul className="list-disc pl-5 space-y-3 text-sm tracking-wide leading-relaxed text-black mb-4 mt-4">
                <li>Nepoužívajte možnosť <strong>Detach instance</strong>. Komponent sa tým odpojí od zdrojovej knižnice a prestane sa aktualizovať.</li>
                <li>Neupravujte štruktúru vrstiev vo vnútri komponentu. Nemeňte textové štýly, rozmery ani farby, ktoré sú pevne nastavené v dizajnovom systéme.</li>
                <li>Nekopírujte komponenty do súborov, v ktorých knižnica IDSK nie je aktivovaná. Komponenty tam môžu stratiť svoje prepojenie.</li>
            </ul>
        </InformationBanner>

        <section>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Oprava chýb</h3>
            <p className="text-sm sm:text-base mb-2">Ak pri úprave komponentu urobíte chybu, použite jeden z týchto krokov:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base mb-8">
                <li>Kliknite pravým tlačidlom myši na komponent a vyberte <strong>Reset all changes</strong> (alebo Reset instance). Komponent sa vráti do pôvodného stavu z knižnice.</li>
                <li>Použite klávesovú skratku <strong>Cmd + Z</strong> (MacOS) alebo <strong>Ctrl + Z</strong> (Windows) pre krok späť.</li>
                <li>Ak problém pretrváva a komponent je nenávratne rozbitý, odstráňte ho z plátna a jednoducho vložte nový z knižnice v paneli Assets.</li>
            </ul>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
            <h3 className="text-lg sm:text-xl font-bold mb-4">Návody a zdroje pre začiatočníkov</h3>
            <p className="text-sm sm:text-base mb-4">
                Ste začiatočník? Dizajnový systém IDSK využíva aj pokročilé funkcie Figmy. Ak hľadáte oficiálne návody na prácu s Figmou, pripravili sme pre vás tieto užitočné odkazy (v angličtine):
            </p>
            
            <div className="space-y-8 mt-8">
                {/* 1. Návod: Figma pre začiatočníkov */}
                <div className="flex flex-col md:flex-row gap-6">
                    <a 
                        href="https://help.figma.com/hc/en-us/articles/360039827114-Getting-started-with-Figma" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block w-full md:w-1/3 aspect-video shrink-0 overflow-hidden rounded-lg shadow-sm"
                    >
                        <Image
                            src="/images/designers/nedizajneri4.png"
                            width={350}
                            height={196}
                            quality={100}
                            alt="Návod pre začiatočníkov (Otvorí sa v novom okne)"
                            className="w-full h-full object-cover scale-105 transition-transform duration-300 hover:scale-110"
                        />
                    </a>
                    <div className="flex-1 mt-1">
                        <a 
                            href="https://help.figma.com/hc/en-us/articles/360039827114-Getting-started-with-Figma" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="text-lg font-bold text-[#212121] underline hover:text-[#0B4199] hover:decoration-[3px] visited:text-[#592999] block mb-2"
                        >
                            Figma návod pre začiatočníkov
                        </a>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed ml-1">
                            Začnite pracovať vo Figme a zoznámte sa s jej základným rozhraním a funkciami podľa tohto oficiálneho návodu.
                        </p>
                    </div>
                </div>

                {/* 2. Návod: Auto Layout */}
                <div className="flex flex-col md:flex-row gap-6 items-start">
                    <a 
                        href="https://www.figma.com/community/file/784448220678228461" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block w-full md:w-1/3 aspect-video shrink-0 overflow-hidden rounded-lg shadow-sm"
                    >
                        <Image
                            src="/images/designers/nedizajneri5.png"
                            width={350}
                            height={196}
                            quality={100}
                            alt="Ako funguje Auto Layout (otvorí sa v novom okne)"
                            className="w-full h-full object-cover scale-105 transition-transform duration-300 hover:scale-110"
                        />
                    </a>
                    <div className="flex-1 mt-1">
                        <a 
                            href="https://www.figma.com/community/file/784448220678228461" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="text-lg font-bold text-[#212121] underline hover:text-[#0B4199] hover:decoration-[3px] visited:text-[#592999] block mb-2"
                        >
                            Ako funguje Auto Layout
                        </a>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed ml-1">
                            Zistite, ako využívať Auto Layout na tvorbu flexibilných komponentov, ktoré sa automaticky prispôsobujú svojmu obsahu a veľkosti obrazovky.
                        </p>
                    </div>
                </div>

                {/* 3. Návod: Práca s variantmi */}
                <div className="flex flex-col md:flex-row gap-6 items-start">
                    <a 
                        href="https://help.figma.com/hc/en-us/articles/360056440594-Create-and-use-variants" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block w-full md:w-1/3 aspect-video shrink-0 overflow-hidden rounded-lg shadow-sm"
                    >
                        <Image
                            src="/images/designers/nedizajneri6.png"
                            width={350}
                            height={196}
                            quality={100}
                            alt="Návod práca s variantmi (Otvorí sa v novom okne)"
                            className="w-full h-full object-cover scale-105 transition-transform duration-300 hover:scale-110"
                        />
                    </a>
                    <div className="flex-1 mt-1">
                        <a 
                            href="https://help.figma.com/hc/en-us/articles/360056440594-Create-and-use-variants" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="text-lg font-bold text-[#212121] underline hover:text-[#0B4199] hover:decoration-[3px] visited:text-[#592999] block mb-2"
                        >
                            Práca s variantmi
                        </a>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed ml-1">
                            Naučte sa vytvárať a spravovať komponenty a ich rôzne varianty (napr. stavy tlačidiel) pre zefektívnenie vašej práce.
                        </p>
                    </div>
                </div>
                
            </div>
        </section>

        <section>
            <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-black mb-4">
                Spätná väzba a podnety
            </h2>
            <p className="text-sm sm:text-base tracking-wide leading-relaxed text-black mb-4">
                Pomôžte nám zlepšovať dizajnovú knižnicu IDSK. Svoju spätnú väzbu pošlite na <a href="mailto:idsk@mirri.gov.sk" className="text-my-blue underline hover:text-blue-800 transition-colors">idsk@mirri.gov.sk</a>.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base tracking-wide leading-relaxed text-black">
                <li>Ak ste našli chybu v komponente alebo máte návrh na zlepšenie, napíšte nám.</li>
                <li>Ak knižnicu začínate používať, hľadáte odpovede alebo sa chcete zapojiť do jej rozvoja ako dizajnér či developer, kontaktujte nás.</li>
            </ul>
        </section>
    </div>
);