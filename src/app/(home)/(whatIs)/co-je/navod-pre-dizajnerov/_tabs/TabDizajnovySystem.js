import React from 'react';
import { SectionBlock, H3, Ul, Text } from '@/app/(home)/_components/content-blocks/ContentBlocks';

export default function TabDizajnovySystem() {
  return (
    <div className="animate-fade-in flex flex-col gap-4">
      
      <SectionBlock titleString="Dizajnový systém IDSK">
        <Text>
          IDSK je súbor pravidiel tvorby obsahu a funkčnosti verejných elektronických služieb a webových sídiel v súlade s potrebami používateľov. Definuje komponenty, pojmy, princípy, vzory a pravidlá pre návrh používateľského rozhrania.
        </Text>
        <Text>
          Zjednocuje komunikáciu a používateľskú skúsenosť naprieč elektronickými službami verejnej správy. Pomáha vytvárať prístupné, konzistentné a jednotné elektronické služby verejnej správy.
        </Text>
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
            <p className="text-sm sm:text-base italic text-gray-600">
              Príklady: tlačidlá, formulárové prvky, karty, upozornenia, navigácia.
            </p>
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
}