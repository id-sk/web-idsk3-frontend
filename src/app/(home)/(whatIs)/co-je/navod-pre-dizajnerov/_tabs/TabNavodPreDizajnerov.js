import React from 'react';
import Image from 'next/image';
import { SectionBlock, Ul, H3, Text } from '@/app/(home)/_components/content-blocks/ContentBlocks';
import InformationBanner from '@/app/(home)/_components/information-banner/informationBannerCustom';
import FeedbackSection from '../_components/FeedbackSection';

export default function TabNavodPreDizajnerov() {
  return (
    <div className="animate-fade-in flex flex-col gap-4">
      
      <SectionBlock titleString="Návod na prácu s knižnicou">
        <Text>
          Knižnica IDSK vo Figme obsahuje pripravené komponenty, ktoré môžete opakovane používať v projekte. Dizajnér vytvoril komponenty tak, aby ste ich nemuseli navrhovať od začiatku.
        </Text>
        <Text>
          Príklady komponentov: tlačidlá, karty, hlavičky, ikony, bannery.
        </Text>
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
          <li>V ľavom navigačnom paneli nájdete sekciu <strong><span lang="en">Pages</span> (Stránky)</strong>. Obsahuje skupiny komponentov a štýlov.</li>
          <li>Každá stránka združuje prvky podľa typu alebo účelu, napríklad tlačidlá, formuláre, ikony a pod.</li>
          <li>Medzi stránkami sa prepínajte kliknutím.</li>
          <li>Knižnicu môžete prehliadať aj posúvaním zvislého posuvníka v ľavom navigačnom paneli.</li>
        </Ul>
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
          <Image 
            src="/images/designers/navod_na_kniznicu.png" 
            width={1100} 
            height={400} 
            alt="Ako pracovať s posuvnou lištou" 
            className="w-full h-auto md:h-[400px] object-cover" 
          />
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
          <li>Približovanie a vzďaľovanie ovládajte kombináciou <strong>Ctrl + koliesko myši</strong> (Windows) alebo <strong>Cmd + <span lang="en">trackpad</span></strong> (MacOS).</li>
          <li>Na horizontálne posúvanie použite kombináciu <strong>Shift + koliesko myši</strong>.</li>
        </Ul>
      </section>

      <section className="flex flex-col gap-4">
        <H3>Vyhľadávanie komponentov</H3>
        <Ul>
          <li>Na ľavej strane, pod zoznamom stránok (<span lang="en">Pages</span>), nájdete vyhľadávacie pole. Pomocou skratky <strong>Ctrl/Cmd + F</strong> vyhľadáte komponent podľa názvu alebo časti názvu.</li>
          <li>Vyhľadávanie prehľadá všetky stránky a zvýrazní nájdené komponenty.</li>
          <li>Vo Figme majú komponenty fialové ohraničenie a fialovú ikonu. Komponent je hlavná verzia prvku, z nej vznikajú ďalšie prvky, tzv. inštancie.</li>
        </Ul>
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
          <Image 
            src="/images/designers/navod_komponent.png" 
            width={1100} 
            height={400} 
            alt="Ako pracovať s komponentom" 
            className="w-full h-auto md:h-[400px] object-cover" 
          />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <H3>Varianty komponentov</H3>
        <Ul>
          <li>Každý komponent môže mať viac variantov, napríklad rôzne farby, stavy alebo veľkosti.</li>
          <li>Varianty sú zoskupené na jednej stránke a usporiadané vedľa seba.</li>
          <li>Prehliadajte jednotlivé položky na stránke a vyberte variant, ktorý potrebujete.</li>
        </Ul>
      </section>

      <FeedbackSection />

    </div>
  );
}