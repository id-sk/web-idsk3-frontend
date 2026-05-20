'use client';

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
          Päta poskytuje používateľovi doplnkové informácie a odkazy na konci
          stránky. Z prístupnostného pohľadu má byť správne sémanticky označená,
          ľahko ovládateľná klávesnicou a nesmie nahrádzať hlavnú navigáciu ani
          primárne používateľské úlohy.
        </Text>

        <H3>Klávesové ovládanie</H3>

        <Ul className="mb-8">
          <li>
            <code className={codeClass}>Tab</code> – presunie zameranie
            klávesnice na nasledujúci odkaz v päte.
          </li>
          <li>
            <code className={codeClass}>Shift + Tab</code> – presunie zameranie
            klávesnice na predchádzajúci odkaz.
          </li>
          <li>
            <code className={codeClass}>Enter</code> – aktivuje vybraný odkaz.
          </li>
        </Ul>

        <H3>Základné pravidlá prístupnosti</H3>

        <Ul>
          <li>
            Celý komponent má byť implementovaný ako natívny element{' '}
            <code className={codeClass}>&lt;footer&gt;</code>. Tým asistenčné
            technológie získajú sémantickú informáciu, že ide o pätičku stránky.
          </li>

          <li>
            Ak je päta použitá ako hlavná päta dokumentu, element{' '}
            <code className={codeClass}>&lt;footer&gt;</code> zvyčajne vystupuje
            ako landmark <code className={codeClass}>contentinfo</code>.
          </li>

          <li>
            Navigácia v päte má byť reprezentovaná sémanticky, napríklad pomocou{' '}
            <code className={codeClass}>&lt;nav&gt;</code>,{' '}
            <code className={codeClass}>&lt;ul&gt;</code>,{' '}
            <code className={codeClass}>&lt;li&gt;</code> a{' '}
            <code className={codeClass}>&lt;a&gt;</code>.
          </li>

          <li>
            Navigácia v päte má mať zrozumiteľný názov, napríklad pomocou{' '}
            <code className={codeClass}>aria-label=&quot;Navigácia v päte&quot;</code>.
          </li>

          <li>
            Odkazy v päte musia mať jasný a pochopiteľný text. Vyhnite sa
            všeobecným textom ako „kliknite sem“ alebo „viac“.
          </li>

          <li>
            Ak v päte používate logo ako odkaz, obrázok musí mať zmysluplný
            atribút <code className={codeClass}>alt</code>. Ak je logo zároveň
            odkazom na iný web, text alternatívy má používateľovi povedať, kam
            odkaz vedie alebo čo logo reprezentuje.
          </li>

          <li>
            Ak odkaz otvára nové okno alebo novú kartu, používateľ by o tom mal
            byť informovaný v texte odkazu alebo pomocou vizuálne skrytého textu.
          </li>

          <li>
            Päta nemá obsahovať veľké množstvo odkazov bez jasnej štruktúry.
            Dlhé zoznamy rozdeľte do pomenovaných skupín.
          </li>
        </Ul>
      </SectionBlock>
    </div>
  );
};

export default TabPristupnost;