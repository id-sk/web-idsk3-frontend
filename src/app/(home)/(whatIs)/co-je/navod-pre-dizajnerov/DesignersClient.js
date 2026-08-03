'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/app/(home)/_components/tab-bar/tabBar';
import InformationBanner from '@/app/(home)/_components/information-banner/informationBannerCustom';
import { Text, SectionBlock, Ul, Ol, H3, H4, ExtLink } from '@/app/(home)/_components/content-blocks/ContentBlocks';
import ButtonCustom from '@/app/(home)/_components/button/buttonCustom';

// ============================================================================
// LOKÁLNE KOMPONENTY A DÁTA (Špecifické len pre túto podstránku)
// ============================================================================

const figmaTutorials = [
  {
    title: "Figma návod pre začiatočníkov",
    text: "Začnite pracovať vo Figme a zoznámte sa s jej základným rozhraním a funkciami podľa tohto oficiálneho návodu.",
    image: "/images/designers/nedizajneri4.png",
    link: "https://www.figma.com/resource-library/design-basics/?fuid=1567875285555985583"
  },
  {
    title: "Ako funguje Auto Layout",
    text: "Zistite, ako využívať Auto Layout na tvorbu flexibilných komponentov, ktoré sa automaticky prispôsobujú svojmu obsahu a veľkosti obrazovky.",
    image: "/images/designers/nedizajneri5.png",
    link: "https://www.figma.com/community/file/784448220678228461/figma-auto-layout-playground"
  },
  {
    title: "Práca s variantmi",
    text: "Naučte sa vytvárať a spravovať komponenty a ich rôzne varianty (napr. stavy tlačidiel) pre zefektívnenie vašej práce.",
    image: "/images/designers/nedizajneri6.png",
    link: "https://help.figma.com/hc/en-us/articles/360056440594-Create-and-use-variants"
  }
];

const HorizontalTutorialCard = ({ title, text, image, link }) => (
  <div className="group relative flex flex-col md:flex-row items-stretch w-full bg-white rounded-[10px] border border-solid border-neutral-200 transition-all hover:outline hover:outline-[4px] hover:outline-[#757575] overflow-hidden p-0 m-0">
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="absolute inset-0 z-10 outline-none focus-visible:ring-[4px] focus-visible:ring-[#0B4199] rounded-[5px]"
    >
      <span className="sr-only">{title} (otvorí sa v novom okne)</span>
    </a>

    <div className="flex relative w-full md:w-[35%] shrink-0 min-h-[200px] overflow-hidden bg-gray-100 p-0 m-0">
      <Image 
        src={image} 
        width={800} 
        height={450}
        unoptimized={true} 
        alt="" 
        aria-hidden="true" 
        className="block -ml-[5px] -my-[2px] w-[calc(100%+5px)] h-[calc(100%+4px)] max-w-none object-cover transition-transform duration-300 group-hover:scale-105" 
      />
    </div>
    
    <div className="flex flex-col flex-1 justify-center p-5 sm:p-6 w-full z-0">
      <h4 className="text-xl sm:text-2xl font-bold tracking-wide leading-8 sm:leading-9 text-[#0B4199] underline underline-offset-3 group-hover:text-[#126DFF] group-hover:decoration-[length:3px] transition-colors">
        {title}
      </h4>
      <p className="mt-2 text-base sm:text-lg leading-6 sm:leading-7 text-black">
        {text}
      </p>
    </div>
  </div>
);

const FeedbackSection = () => (
  <SectionBlock titleString="Spätná väzba a podnety">
    <Text>
      Pomôžte nám zlepšovať dizajnovú knižnicu IDSK. Svoju spätnú väzbu pošlite na <ExtLink href="mailto:idsk@mirri.gov.sk">idsk@mirri.gov.sk</ExtLink>.
    </Text>
    <Ul>
      <li>Ak ste našli chybu v komponente alebo máte návrh na zlepšenie, napíšte nám.</li>
      <li>Ak knižnicu začínate používať, hľadáte odpovede alebo sa chcete zapojiť do jej rozvoja ako dizajnér či developer, kontaktujte nás.</li>
    </Ul>
  </SectionBlock>
);

// ============================================================================
// HLAVNÝ KOMPONENT
// ============================================================================

export default function DesignersClient() {

  return (
    <div className="flex flex-col gap-10 my-8 max-w-[1120px] px-4 sm:px-0 text-black">
      
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight">
        Návod pre dizajnérov
      </h1>

      <div className="flex flex-col gap-6">
        <Text>V dizajnérskom nástroji Figma nájdete knižnicu dizajnového systému IDSK – knižnicu štýlov, komponentov či vzorov.</Text>
        <Text>Všetky súbory sú voľne prístupné na prepoužitie a pre prácu s nimi je nevyhnutné duplikovať súbory alebo skopírovať do nového súboru.</Text>
        <Text>Pomocou týchto komponentov je možné vyskladať elektronickú službu a/alebo webové sídlo v IDSK.</Text>
      </div>

      <div>
        <ButtonCustom
          href="https://www.figma.com/community/file/1581301778555425083"
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          status="basic"
          size="large"
          iconRight={
            <svg
              className="w-5 h-5 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          }
        >
          Figma knižnica IDSK
          <span className="sr-only"> (otvorí sa v novom okne)</span>
        </ButtonCustom>
      </div>

      <Tabs defaultValue="akoZacat">
        <TabsList ariaLabel="Sekcie dokumentácie pre dizajnérov">
          <TabsTrigger value="akoZacat">Ako začať</TabsTrigger>
          <TabsTrigger value="dizajnovySystem">Dizajnový systém</TabsTrigger>
          <TabsTrigger value="navodPreDizajnerov">Pre dizajnérov</TabsTrigger>
          <TabsTrigger value="navodPreNedizajnerov">Pre nedizajnérov</TabsTrigger>
        </TabsList>

        <div className="mt-2 text-black">
          <TabsContent value="akoZacat">
            <TabAkoZacat />
          </TabsContent>

          <TabsContent value="dizajnovySystem">
            <TabDizajnovySystem />
          </TabsContent>

          <TabsContent value="navodPreDizajnerov">
            <TabNavodPreDizajnerov />
          </TabsContent>

          <TabsContent value="navodPreNedizajnerov">
            <TabNavodPreNedizajnerov />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}

// ============================================================================
// OBSAH JEDNOTLIVÝCH TABOV
// ============================================================================

const TabAkoZacat = () => (
  <div className="animate-fade-in flex flex-col gap-4">
    <SectionBlock titleString="Obsah knižnice">
      <Ul>
        <li className="flex items-start gap-3"><span className="shrink-0 font-bold">Štýly:</span><span>Určujú typografiu, farby, ikonografiu, medzery, tiene a mriežku.</span></li>
        <li className="flex items-start gap-3"><span className="shrink-0 font-bold">Komponenty:</span><span>Definujú opakovane použiteľné prvky a ich varianty.</span></li>
        <li className="flex items-start gap-3"><span className="shrink-0 font-bold">Vzory:</span><span>Spájajú komponenty do použiteľných blokov pre návrh používateľského rozhrania.</span></li>
        <li className="flex items-start gap-3"><span className="shrink-0 font-bold">Šablóny:</span><span>Spájajú vzory a komponenty do šablón na použitie.</span></li>
      </Ul>
    </SectionBlock>

    <SectionBlock titleString="Ako pracovať s knižnicou">
      <Text>Knižnicu IDSK použite ako prvý krok pri návrhu rozhrania. Rozhranie tvoria štýly a komponenty.</Text>
      <Ol>
        <li>
          <strong>Štýl</strong> vyberte v pravom paneli vo Figme. Panel zobrazuje typografiu, farby a mriežku.
          <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm mt-4">
            <Image src="/images/designers/ako_pracovať_figma.png" width={1100} height={500} alt="Ako pracovať s pravým bočným panelom" className="w-full h-auto md:h-[500px] object-cover" />
          </div>
        </li>
        <li>
          <strong>Komponenty</strong> vyberte v ľavom navigačnom paneli vo Figme. V hornej časti otvorte sekciu Assets, kde nájdete zoznam komponentov. Vyberte komponent a začnite navrhovať rozhranie.
          <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm mt-4">
            <Image src="/images/designers/ako_zacat_figma2.png" width={1100} height={500} alt="Ako pracovať s ľavým bočným panelom" className="w-full h-auto md:h-[500px] object-cover" />
          </div>
        </li>
      </Ol>
    </SectionBlock>

    <FeedbackSection />
  </div>
);

const TabDizajnovySystem = () => (
  <div className="animate-fade-in flex flex-col gap-4">
    <SectionBlock titleString="Dizajnový systém IDSK">
      <Text>IDSK je súbor pravidiel tvorby obsahu a funkčnosti verejných elektronických služieb a webových sídiel v súlade s potrebami používateľov. Definuje komponenty, pojmy, princípy, vzory a pravidlá pre návrh používateľského rozhrania.</Text>
      <Text>Zjednocuje komunikáciu a používateľskú skúsenosť naprieč elektronickými službami verejnej správy. Pomáha vytvárať prístupné, konzistentné a jednotné elektronické služby verejnej správy.</Text>
    </SectionBlock>

    <SectionBlock titleString="Z čoho sa skladá dizajnový systém">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <H3>1. Základy (Foundations)</H3>
          <Text>Určujú vizuálny a interakčný jazyk systému. Obsahujú:</Text>
          <Ul>
            <li>farby a kontrast,</li>
            <li>typografiu a hierarchiu textu,</li>
            <li>rozstupy, mriežku a rozloženie,</li>
            <li>ikony a ilustrácie,</li>
            <li>pohyby a animácie,</li>
            <li>pravidlá prístupnosti (WCAG 2.1).</li>
          </Ul>
        </div>

        <div className="flex flex-col gap-2">
          <H3>2. Rozloženie a štruktúra</H3>
          <Text>Určujú správanie obsahu pri rôznych veľkostiach obrazovky. Zahŕňajú:</Text>
          <Ul>
            <li>mriežkové systémy,</li>
            <li>šírky kontajnerov,</li>
            <li>rozloženie hlavičky, navigácie, obsahu a päty,</li>
            <li>vzory rozloženia (napr. formulár, dvojstĺpcové rozloženie).</li>
          </Ul>
        </div>

        <div className="flex flex-col gap-2">
          <H3>3. Komponenty</H3>
          <Text>Definujú stavebné prvky používateľského rozhrania. Každý komponent obsahuje:</Text>
          <Ul>
            <li>popis a pravidlá použitia,</li>
            <li>vizuálny návrh a stavy,</li>
            <li>ukážku kódu,</li>
            <li>odporúčania pre prístupnosť.</li>
          </Ul>
          <p className="text-sm sm:text-base italic text-gray-600">Príklady: tlačidlá, formulárové prvky, karty, upozornenia, navigácia.</p>
        </div>

        <div className="flex flex-col gap-2">
          <H3>4. Vzory (Patterns)</H3>
          <Text>Spájajú komponenty do funkčných celkov, riešia bežné úlohy, napríklad:</Text>
          <Ul>
            <li>prihlásenie alebo registráciu,</li>
            <li>vyhľadávanie,</li>
            <li>vypĺňanie formulárov,</li>
            <li>navigáciu medzi stránkami.</li>
          </Ul>
        </div>

        <div className="flex flex-col gap-2">
          <H3>5. Obsah a jazyk</H3>
          <Text>Definujú tón komunikácie a pravidlá písania textov. Udržiavajú jazyk zrozumiteľný, inkluzívny a konzistentný.</Text>
        </div>

        <div className="flex flex-col gap-2">
          <H3>6. Kód a implementácia</H3>
          <Text>Umožňujú používať komponenty priamo. Zahŕňajú:</Text>
          <Ul>
            <li>Frontend knižnicu (napr. SCSS alebo JavaScript),</li>
            <li>dokumentáciu,</li>
            <li>pravidlá pomenovania,</li>
            <li>príklady implementácie.</li>
          </Ul>
        </div>
      </div>
    </SectionBlock>

    <section className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex flex-col gap-4">
      <h2 className="text-lg sm:text-xl font-bold tracking-wide text-black">
        Ako sa používa dizajnový systém
      </h2>
      <ul className="flex flex-col gap-2 text-sm sm:text-base tracking-wide leading-relaxed text-black">
        <li><strong>Navrhnite</strong> – Použite existujúce komponenty a vzory vo Figme.</li>
        <li><strong>Prototypujte</strong> – Otestujte návrh s používateľmi a overte prístupnosť.</li>
        <li><strong>Implementujte</strong> – Použite frontend knižnicu IDSK vo svojom projekte.</li>
        <li><strong>Testujte</strong> – Otestujte vizuálnu konzistenciu a funkčnosť komponentov.</li>
        <li><strong>Zdieľajte</strong> – Ak vznikne nová potreba, navrhnite jej doplnenie do systému.</li>
      </ul>
    </section>
  </div>
);

const TabNavodPreDizajnerov = () => (
  <div className="animate-fade-in flex flex-col gap-4">
    <SectionBlock titleString="Návod na prácu s knižnicou">
      <Text>Knižnica IDSK vo Figme obsahuje pripravené komponenty, ktoré môžete opakovane používať v projekte. Dizajnér vytvoril komponenty tak, aby ste ich nemuseli navrhovať od začiatku.</Text>
      <Text>Príklady komponentov: tlačidlá, karty, hlavičky, ikony, bannery.</Text>
      <InformationBanner 
          variant="information" 
          title="Tip" 
          hideCloseButton={true}
        >
          Používajte komponenty z knižnice a vkladajte ich do projektu bez úprav základnej štruktúry.
      </InformationBanner>
    </SectionBlock>

    <section className="flex flex-col gap-4">
      <H3>Prehliadanie knižnice</H3>
      <Ul>
        <li>V ľavom navigačnom paneli nájdete sekciu <strong>Pages (Stránky)</strong>. Obsahuje skupiny komponentov a štýlov.</li>
        <li>Každá stránka združuje prvky podľa typu alebo účelu, napríklad tlačidlá, formuláre, ikony a pod.</li>
        <li>Medzi stránkami sa prepínajte kliknutím.</li>
        <li>Knižnicu môžete prehliadať aj posúvaním zvislého posuvníka v ľavom navigačnom paneli.</li>
      </Ul>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
        <Image src="/images/designers/navod_na_kniznicu.png" width={1100} height={400} alt="Ako pracovať s posuvnou lištou" className="w-full h-auto md:h-[400px] object-cover" />
      </div>
    </section>

    <section className="flex flex-col gap-4">
      <H3>Obsah knižnice</H3>
      <Ul>
        <li className="flex items-start gap-3"><span className="shrink-0 font-bold">Štýly:</span><span>Určujú typografiu, farby, ikonografiu, medzery, tiene a mriežku.</span></li>
        <li className="flex items-start gap-3"><span className="shrink-0 font-bold">Komponenty:</span><span>Definujú opakovane použiteľné prvky a ich varianty.</span></li>
        <li className="flex items-start gap-3"><span className="shrink-0 font-bold">Vzory:</span><span>Spájajú komponenty do použiteľných blokov pre návrh používateľského rozhrania.</span></li>
        <li className="flex items-start gap-3"><span className="shrink-0 font-bold">Šablóny:</span><span>Spájajú vzory a komponenty do šablón na použitie.</span></li>
      </Ul>
    </section>

    <section className="flex flex-col gap-4">
      <H3>Posúvanie po plátne</H3>
      <Ul>
        <li>Po plátne sa posúvajte kolieskom myši alebo touchpadom.</li>
        <li>Približovanie a vzďaľovanie ovládajte kombináciou <strong>Ctr + koliesko myši</strong> (Windows) alebo <strong>Cmd + trackpad</strong> (MacOS).</li>
        <li>Na horizontálne posúvanie použite kombináciu <strong>Shift + koliesko myši</strong>.</li>
      </Ul>
    </section>

    <section className="flex flex-col gap-4">
      <H3>Vyhľadávanie komponentov</H3>
      <Ul>
        <li>Na ľavej strane, pod zoznamom stránok (Pages), nájdete vyhľadávacie pole. Pomocou skratky <strong>Ctrl/Cmd + F</strong> vyhľadáte komponent podľa názvu alebo časti názvu.</li>
        <li>Vyhľadávanie prehľadá všetky stránky a zvýrazní nájdené komponenty.</li>
        <li>Vo Figme majú komponenty fialové ohraničenie a fialovú ikonu. Komponent je hlavná verzia prvku, z nej vznikajú ďalšie prvky, tzv. inštancie.</li>
      </Ul>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
        <Image src="/images/designers/navod_komponent.png" width={1100} height={400} alt="Ako pracovať s komponentom" className="w-full h-auto md:h-[400px] object-cover" />
      </div>
    </section>

    <section className="flex flex-col gap-4">
      <H3>Varianty komponentov</H3>
      <Ul>
        <li>Každý komponent môže mať viac variantov, napríklad rôzne farby, stavy alebo veľkosti.</li>
        <li>Varianty sú zoskupené na jednej stránke a usporiadané vedľa seba.</li>
        <li>Prehliadajte jednotlivé položky na stránke a vyberte variant, ktorý potrebujete.</li>
      </Ul>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
        <Image src="/images/info-lista/info_lista1.png" width={1100} height={400} alt="Ako pracovať s komponentom" className="w-full h-auto md:h-[400px] object-cover" />
      </div>
    </section>

    <FeedbackSection />
  </div>
);

const TabNavodPreNedizajnerov = () => (
  <div className="animate-fade-in flex flex-col gap-4">
    <SectionBlock titleString="Návod na prácu s knižnicou pre nedizajnérov">
      <Text>Knižnica IDSK vo Figme obsahuje pripravené komponenty, ktoré môžete opakovane používať v projekte. Dizajnér vytvoril komponenty tak, aby ste ich nemuseli navrhovať od začiatku.</Text>
      <Text>Príklady komponentov: tlačidlá, karty, hlavičky, ikony, bannery. Používajte komponenty z knižnice a vkladajte ich do projektu bez úprav základnej štruktúry.</Text>
    </SectionBlock>

    <section className="flex flex-col gap-4">
      <H3>Ako pracovať s knižnicou</H3>
      <H4>Pridanie knižnice IDSK 3 do súboru vo Figme</H4>
      <Ol>
        <li>Otvorte svoj súbor vo Figme.</li>
        <li>V ľavom navigačnom paneli kliknite na <strong>Assets</strong>.</li>
        <li>V paneli Assets kliknite na ikonu knižnice (ikonka knižky). Otvorí sa okno Manage libraries.</li>
        <li>Do vyhľadávacieho poľa zadajte <strong>IDSK 3 (MIRRI SR)</strong> a kliknite na <strong>Add to file</strong>.</li>
      </Ol>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
        <Image src="/images/designers/nedizajneri1.png" width={1100} height={400} alt="Ako nájsť knižnicu" className="w-full h-auto md:h-[400px] object-cover" />
      </div>
      <Text>Knižnicu IDSK 3 následne nájdete medzi dostupnými knižnicami vo svojom súbore.</Text>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
        <Image src="/images/designers/nedizajneri2.png" width={1100} height={400} alt="Kde nájsť knižnicu" className="w-full h-auto md:h-[400px] object-cover" />
      </div>
    </section>

    <section className="flex flex-col gap-4">
      <H3>Aktualizácia knižnice</H3>
      <Text>Ak dizajnéri upravia komponenty v pôvodnej knižnici IDSK 3, zmeny sa automaticky prejavia aj vo vašom súbore.</Text>
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 text-sm sm:text-base text-yellow-900">
        <strong>Pozor:</strong> Nesťahujte knižnicu z Figma Community formou duplikácie súboru, pokiaľ to nie je nutné. Vytvorí sa tým iba lokálna kópia súboru a stratí sa prepojenie na centrálnu knižnicu. Komponenty sa vám potom nebudú automaticky aktualizovať.
      </div>
      
      <H3>Obsah knižnice</H3>
      <Ul>
        <li className="flex items-start gap-3"><span className="shrink-0 font-bold">Štýly:</span><span>Určujú typografiu, farby, ikonografiu, medzery, tiene a mriežku.</span></li>
        <li className="flex items-start gap-3"><span className="shrink-0 font-bold">Komponenty:</span><span>Definujú opakovane použiteľné prvky a ich varianty.</span></li>
        <li className="flex items-start gap-3"><span className="shrink-0 font-bold">Vzory:</span><span>Spájajú komponenty do použiteľných blokov pre návrh používateľského rozhrania.</span></li>
        <li className="flex items-start gap-3"><span className="shrink-0 font-bold">Šablóny:</span><span>Spájajú vzory a komponenty do šablón na použitie.</span></li>
      </Ul>
    </section>

    <section className="flex flex-col gap-4">
      <H3>Vyhľadávanie a pridanie komponentov na plátno</H3>
      <Ol>
        <li>V ľavom navigačnom paneli <strong>Assets</strong> vyhľadajte požadovaný komponent. Môžete použiť aj vyhľadávacie pole.</li>
        <li>Komponenty vo Figme majú fialové ohraničenie a fialovú ikonu. Komponent je hlavná verzia prvku. Z nej vznikajú ďalšie prvky, tzv. inštancie.</li>
        <li>Kliknite na komponent a potiahnite ho na plátno (drag and drop).</li>
        <li>Komponent sa zobrazí na plátne a môžete s ním ďalej pracovať.</li>
      </Ol>
    </section>

    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <H3>Úprava textu, obrázkov a obsahu komponentov</H3>
        <Text>Komponenty môžete upravovať bez zmeny ich základnej štruktúry.</Text>
      </div>
      
      <div className="flex flex-col gap-2">
        <H4>Zmena textu:</H4>
        <Ul>
          <li>Dvojkliknite na text.</li>
          <li>Zadajte nový obsah.</li>
        </Ul>
      </div>
      
      <div className="flex flex-col gap-2">
        <H4>Zmena ikon alebo obrázkov:</H4>
        <Ul>
          <li>Ak komponent obsahuje ikonu, zvyčajne ju nie je možné meniť voľne.</li>
          <li>Niektoré komponenty však umožňujú zmeniť variant ikony v pravom paneli.</li>
        </Ul>
      </div>
      
     <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
  <div className="flex flex-col gap-4">
    <H4>Zmena variantov (stavov):</H4>

    <Text>
      Komponenty môžu mať viac verzií, tzv. varianty (napríklad informačný,
      úspešný, upozorňovací, oznamovací banner). Prepínate ich v pravom paneli.
    </Text>

    <div className="flex flex-col gap-3">
      <H4> Čomu sa vyhnúť:</H4>

      <Ul>
        <li>
          Nepoužívajte možnosť <strong>Detach instance</strong>. Komponent sa tým
          odpojí od zdrojovej knižnice a prestane sa aktualizovať.
        </li>
        <li>
          Neupravujte štruktúru vrstiev vo vnútri komponentu. Nemeňte textové
          štýly, rozmery ani farby, ktoré sú pevne nastavené v dizajnovom systéme.
        </li>
        <li>
          Nekopírujte komponenty do súborov, v ktorých knižnica IDSK nie je
          aktivovaná. Komponenty tam môžu stratiť svoje prepojenie.
        </li>
      </Ul>
    </div>
  </div>

  <div className="mt-10 w-full overflow-hidden rounded-lg border border-gray-200 shadow-sm">
    <Image
      src="/images/info-lista/info_lista1.png"
      width={700}
      height={560}
      alt="Ako si meniť varianty"
      sizes="(max-width: 1024px) 100vw, 420px"
      className="h-auto w-full object-contain"
    />
  </div>
</div>
    </section>

    <section className="flex flex-col gap-4">
      <H3>Oprava chýb</H3>
      <Text>Ak pri úprave komponentu urobíte chybu, použite jeden z týchto krokov:</Text>
      <Ul>
        <li>Kliknite pravým tlačidlom myši na komponent a vyberte <strong>Reset all changes</strong> (alebo Reset instance). Komponent sa vráti do pôvodného stavu z knižnice.</li>
        <li>Použite klávesovú skratku <strong>Cmd + Z</strong> (MacOS) alebo <strong>Ctrl + Z</strong> (Windows) pre krok späť.</li>
        <li>Ak problém pretrváva a komponent je nenávratne rozbitý, odstráňte ho z plátna a jednoducho vložte nový z knižnice v paneli Assets.</li>
      </Ul>
    </section>

    <section className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex flex-col gap-6">
      <h3 className="text-lg sm:text-xl font-bold text-black">Návody a zdroje pre začiatočníkov</h3>
      <Text>
        Ste začiatočník? Dizajnový systém IDSK využíva aj pokročilé funkcie Figmy. Ak hľadáte oficiálne návody na prácu s Figmou, pripravili sme pre vás tieto užitočné odkazy (v angličtine):
      </Text>
      
      <div className="flex flex-col gap-6">
        {figmaTutorials.map((tut, index) => (
          <HorizontalTutorialCard 
            key={index}
            title={tut.title}
            text={tut.text}
            image={tut.image}
            link={tut.link}
          />
        ))}
      </div>
    </section>

    <FeedbackSection />
  </div>
);