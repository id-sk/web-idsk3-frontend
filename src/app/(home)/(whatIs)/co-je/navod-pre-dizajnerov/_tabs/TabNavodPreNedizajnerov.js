import React from 'react';
import Image from 'next/image';
import { SectionBlock, Ul, Ol, H3, H4, Text } from '@/app/(home)/_components/content-blocks/ContentBlocks';
import InformationBanner from '@/app/(home)/_components/information-banner/informationBannerCustom';
import FeedbackSection from '../_components/FeedbackSection';
import HorizontalTutorialCard from '../_components/HorizontalTutorialCard';

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

export default function TabNavodPreNedizajnerov() {
  return (
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
        <InformationBanner 
            variant="warning" 
            title="Pozor" 
            hideCloseButton={true}
          >
            Nesťahujte knižnicu z Figma Community formou duplikácie súboru, pokiaľ to nie je nutné. Vytvorí sa tým iba lokálna kópia súboru a stratí sa prepojenie na centrálnu knižnicu. Komponenty sa vám potom nebudú automaticky aktualizovať.
        </InformationBanner>
        
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
}