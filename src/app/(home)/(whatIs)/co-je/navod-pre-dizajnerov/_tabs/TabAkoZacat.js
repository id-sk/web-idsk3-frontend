import React from 'react';
import Image from 'next/image';
import { SectionBlock, Ul, Ol, Text } from '@/app/(home)/_components/content-blocks/ContentBlocks';
import FeedbackSection from '../_components/FeedbackSection';

export default function TabAkoZacat() {
  return (
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
            <strong>Komponenty</strong> vyberte v ľavom navigačnom paneli vo Figme. V hornej časti otvorte sekciu <span lang="en">Assets</span>, kde nájdete zoznam komponentov. Vyberte komponent a začnite navrhovať rozhranie.
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm mt-4">
              <Image src="/images/designers/ako_zacat_figma2.png" width={1100} height={500} alt="Ako pracovať s ľavým bočným panelom" className="w-full h-auto md:h-[500px] object-cover" />
            </div>
          </li>
        </Ol>
      </SectionBlock>

      <FeedbackSection />
    </div>
  );
}