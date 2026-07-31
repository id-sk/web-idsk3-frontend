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
          Omrvinková navigácia musí byť implementovaná ako navigačný landmark.
          Používateľom asistenčných technológií má jasne oznámiť, že ide o omrvinkovú
          navigáciu, a aktuálna stránka musí byť programovo označená.
        </Text>

        <H3>Klávesové ovládanie</H3>

        <Ul className="mb-8">
          <li>
            <code className={codeClass}>Tab</code> – presun zamerania na
            nasledujúci odkaz v omrvinkovej navigácii.
          </li>
          <li>
            <code className={codeClass}>Shift + Tab</code> – presun zamerania
            na predchádzajúci odkaz.
          </li>
          <li>
            <code className={codeClass}>Enter</code> – aktivovanie odkazu a
            prechod na cieľovú stránku.
          </li>
        </Ul>

        <H3>Základné pravidlá prístupnosti</H3>

        <Ul>
          <li>
            Celý komponent musí byť obalený v elemente{' '}
            <code className={codeClass}>&lt;nav&gt;</code> s prístupným názvom,
            napríklad <code className={codeClass}>aria-label=&quot;Omrvinková navigácia&quot;</code>.
          </li>

          <li>
            Položky omrvinkovej navigácie odporúčame implementovať ako
            usporiadaný zoznam pomocou prvkov{' '}
            <code className={codeClass}>&lt;ol&gt;</code> a{' '}
            <code className={codeClass}>&lt;li&gt;</code>.
          </li>

          <li>
            Klikateľné položky musia byť natívne odkazy pomocou prvku{' '}
            <code className={codeClass}>&lt;a&gt;</code> s platným atribútom{' '}
            <code className={codeClass}>href</code>.
          </li>

          <li>
            Aktuálna stránka musí byť označená atribútom{' '}
            <code className={codeClass}>aria-current=&quot;page&quot;</code>.
            Aktuálna stránka nemá byť klikateľná, pokiaľ to nie je potrebné pre
            špecifický používateľský scenár.
          </li>

          <li>
            Vizuálne oddeľovače medzi položkami musia byť skryté pred
            asistenčnými technológiami, ak sú súčasťou HTML. Ak sú vytvorené
            cez CSS pseudo-element, asistenčné technológie ich spravidla neoznamujú.
          </li>

          <li>
            Komponent nesmie nahrádzať hlavnú navigáciu ani indikátor postupu v
            lineárnom procese.
          </li>
        </Ul>
      </SectionBlock>
    </div>
  );
};

export default TabPristupnost;