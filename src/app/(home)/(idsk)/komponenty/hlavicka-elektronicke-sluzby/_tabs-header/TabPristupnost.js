import React from 'react';

import {
  SectionBlock,
  H3,
  Text,
  Ul,
} from '@/app/(home)/_components/content-blocks/ContentBlocks';

const TabPristupnost = () => {
  const codeClass =
    'bg-neutral-100 border border-neutral-200 font-mono text-sm px-1.5 py-0.5 rounded text-black';

  return (
    <div className="animate-fade-in text-black w-full min-w-0">
      <SectionBlock titleString="Prístupnosť (Accessibility)">
        <Text>
          Hlavička pre elektronické služby musí byť použiteľná klávesnicou a
          asistenčnými technológiami. Používateľ musí vedieť jednoznačne
          rozpoznať navigáciu, logo, jazykové menu, akčný panel a prípadné
          rozbaľovacie časti.
        </Text>

        <H3>Klávesové ovládanie</H3>

        <Ul className="mb-8">
          <li>
            <code className={codeClass}>Tab</code> – posúva fokus sekvenčne
            vpred cez logo, navigáciu, jazykové menu a tlačidlá.
          </li>
          <li>
            <code className={codeClass}>Shift + Tab</code> – vracia fokus o
            krok späť v opačnom poradí.
          </li>
          <li>
            <code className={codeClass}>Enter</code> alebo{' '}
            <code className={codeClass}>Medzerník</code> – aktivuje odkazy,
            tlačidlá a rozbaľovacie prvky.
          </li>
          <li>
            <code className={codeClass}>Esc</code> – zatvorí otvorené
            rozbaľovacie menu a vráti fokus na prvok, ktorý ho otvoril.
          </li>
          <li>
            <code className={codeClass}>Šípky</code> – môžu slúžiť na pohyb
            medzi položkami, ak sa používateľ nachádza v otvorenom výbere alebo
            podmenu.
          </li>
        </Ul>

        <H3>Základné pravidlá prístupnosti komponentu Hlavička</H3>

        <Ul>
          <li>
            Celý blok hlavičky obaľte do natívneho HTML prvku{' '}
            <code className={codeClass}>&lt;header&gt;</code>.
          </li>

          <li>
            Logo prepojte s domovskou stránkou pomocou odkazu{' '}
            <code className={codeClass}>&lt;a href=&quot;/&quot;&gt;</code>.
            Ak je logo obrázok, musí mať zrozumiteľný alternatívny text,
            napríklad „Odkaz na domovskú stránku ministerstva“.
          </li>

          <li>
            Hlavné menu musí byť v prvku{' '}
            <code className={codeClass}>&lt;nav&gt;</code> s prístupným názvom,
            napríklad <code className={codeClass}>aria-label=&quot;Hlavná navigácia&quot;</code>.
          </li>

          <li>
            Rozbaľovacie zoznamy otvárajte cez natívny prvok{' '}
            <code className={codeClass}>&lt;button&gt;</code>. Položky menu
            štruktúrujte pomocou{' '}
            <code className={codeClass}>&lt;ul&gt;</code>,{' '}
            <code className={codeClass}>&lt;li&gt;</code> a{' '}
            <code className={codeClass}>&lt;a&gt;</code>.
          </li>

          <li>
            Každé tlačidlo, ktoré otvára podmenu, musí mať atribút{' '}
            <code className={codeClass}>aria-expanded</code>. Ak otvára menu,
            môže mať aj <code className={codeClass}>aria-haspopup</code>.
          </li>

          <li>
            Všetky odkazy a tlačidlá v hlavičke musia mať jasne rozpoznateľný
            stav zamerania klávesnicou.
          </li>

          <li>
            Medzera medzi interaktívnymi prvkami má byť dostatočná, aby sa
            znížilo riziko nechceného kliknutia používateľmi s motorickým
            znevýhodnením.
          </li>

          <li>
            Ikony, ktoré sú iba dekoratívne, skryte pred asistenčnými
            technológiami pomocou{' '}
            <code className={codeClass}>aria-hidden=&quot;true&quot;</code>.
          </li>

          <li>
            Ak je prihlásenie nevyhnutné pre používanie služby, tlačidlo
            prihlásenia môže byť v hlavičke vizuálne zvýraznené ako primárna
            akcia.
          </li>
        </Ul>
      </SectionBlock>
    </div>
  );
};

export default TabPristupnost;