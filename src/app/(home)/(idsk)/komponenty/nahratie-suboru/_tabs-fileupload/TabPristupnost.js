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
          Komponent je navrhnutý tak, aby podporoval požiadavky WCAG 2.1 AA.
          Výsledná prístupnosť závisí aj od konkrétnej implementácie, textov
          chýb a validácie vo formulári.
        </Text>

        <H3>Ovládanie klávesnicou</H3>

        <Ul className="mb-8">
          <li>
            <code className={codeClass}>Tab</code> – presun zamerania
            klávesnice na nasledujúci prvok.
          </li>
          <li>
            <code className={codeClass}>Shift + Tab</code> – presun zamerania
            klávesnice na predchádzajúci prvok.
          </li>
          <li>
            <code className={codeClass}>Enter</code> – aktivovanie tlačidla na
            výber súboru.
          </li>
          <li>
            <code className={codeClass}>Medzerník</code> – aktivovanie tlačidla
            na výber súboru.
          </li>
        </Ul>

        <H3>Základné technické pravidlá implementácie</H3>

        <Ul>
          <li>
            Každé pole musí mať jednoznačný, programovo určiteľný názov
            prostredníctvom prvku <code className={codeClass}>&lt;label&gt;</code>,
            ktorý je s poľom previazaný pomocou atribútu{' '}
            <code className={codeClass}>for</code> odkazujúceho na jedinečné{' '}
            <code className={codeClass}>id</code> prvku{' '}
            <code className={codeClass}>&lt;input type=&quot;file&quot;&gt;</code>.
          </li>

          <li>
            Celý komponent je implementovaný ako pomenovaná oblasť pomocou{' '}
            <code className={codeClass}>role=&quot;region&quot;</code>. Názov oblasti
            je odvodený z viditeľného nadpisu pomocou{' '}
            <code className={codeClass}>aria-labelledby</code>.
          </li>

          <li>
            Atribút <code className={codeClass}>aria-describedby</code> je
            implementovaný priamo na prvku{' '}
            <code className={codeClass}>&lt;input type=&quot;file&quot;&gt;</code>.
            Odkazuje na inštrukciu, podporované formáty, maximálnu veľkosť
            súboru a prípadné chybové hlásenie.
          </li>

          <li>
            Tlačidlo na výber súboru má tiež nastavený atribút{' '}
            <code className={codeClass}>aria-describedby</code> a obsahuje
            vizuálne skrytý text, ktorý dopĺňa kontext názvu poľa.
          </li>

          <li>
            Pre obmedzenie formátov súborov používajte atribút{' '}
            <code className={codeClass}>accept</code>, napríklad{' '}
            <code className={codeClass}>accept=&quot;.pdf,.jpg,.png&quot;</code>.
          </li>

          <li>
            V prípade chybového stavu musí mať prvok{' '}
            <code className={codeClass}>&lt;input type=&quot;file&quot;&gt;</code>{' '}
            nastavený atribút{' '}
            <code className={codeClass}>aria-invalid=&quot;true&quot;</code>.
          </li>

          <li>
            Indikátor priebehu nahrávania je implementovaný pomocou natívneho
            prvku <code className={codeClass}>&lt;progress&gt;</code>.
          </li>

          <li>
            Po úspešnom nahratí súboru alebo po jeho odstránení zo zoznamu je
            zmena oznámená prostredníctvom{' '}
            <code className={codeClass}>aria-live=&quot;polite&quot;</code> regiónu.
          </li>

          <li>
            Nahraté súbory sú implementované ako sémantický zoznam pomocou
            prvkov <code className={codeClass}>&lt;ul&gt;</code> a{' '}
            <code className={codeClass}>&lt;li&gt;</code>.
          </li>

          <li>
            Každé tlačidlo na odstránenie súboru musí mať jedinečný prístupný
            názov, napríklad{' '}
            <code className={codeClass}>
              aria-label=&quot;Odstrániť súbor zivotopis.pdf&quot;
            </code>.
          </li>

          <li>
            Dekoratívne ikonky musia byť skryté pred asistenčnými technológiami
            pomocou <code className={codeClass}>aria-hidden=&quot;true&quot;</code>.
          </li>

          <li>
            Texty „Nahrajte súbor“ a „Nahrané súbory“ sú implementované ako
            sémantické nadpisy. Nadpis „Nahrané súbory“ je vnorený pod
            nadradený nadpis „Nahrajte súbor“.
          </li>
        </Ul>
      </SectionBlock>
    </div>
  );
};

export default TabPristupnost;