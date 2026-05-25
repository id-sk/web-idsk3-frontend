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
          Prepínacie pole je navrhnuté tak, aby podporovalo ovládanie
          klávesnicou a používanie s asistenčnými technológiami. Pri
          implementácii je dôležité zachovať natívne HTML prvky, správne
          zoskupenie možností a programové prepojenie popisov, nápovedy a
          chybových hlásení.
        </Text>

        <H3>Klávesové ovládanie</H3>

        <Ul className="mb-8">
          <li>
            <code className={codeClass}>Tab</code> – presunie zameranie na
            aktuálne vybranú možnosť v skupine, prípadne na prvú dostupnú
            možnosť, ak ešte žiadna nie je vybraná.
          </li>
          <li>
            <code className={codeClass}>Shift + Tab</code> – presunie zameranie
            na predchádzajúci interaktívny prvok mimo skupiny.
          </li>
          <li>
            <code className={codeClass}>Šípky ↑ ↓ ← →</code> – presúvajú výber
            medzi jednotlivými možnosťami v rámci skupiny.
          </li>
          <li>
            <code className={codeClass}>Medzerník</code> – vyberie aktuálne
            zameranú možnosť, ak ešte nie je vybraná.
          </li>
        </Ul>

        <H3>Základné pravidlá prístupnosti</H3>

        <Ul>
          <li>
            Každé prepínacie pole musí byť natívny element{' '}
            <code className={codeClass}>&lt;input type=&quot;radio&quot;&gt;</code>.
            Nenahrádzajte ho prvkom <code className={codeClass}>div</code> alebo
            vlastným widgetom, ak na to nie je vážny dôvod.
          </li>

          <li>
            Každé prepínacie pole musí mať viditeľnú menovku implementovanú cez{' '}
            <code className={codeClass}>&lt;label&gt;</code> a prepojenú s
            inputom pomocou atribútov <code className={codeClass}>for</code> a{' '}
            <code className={codeClass}>id</code>.
          </li>

          <li>
            Všetky prepínacie polia patriace do jednej otázky musia byť
            zoskupené v elemente <code className={codeClass}>&lt;fieldset&gt;</code>.
            Názov skupiny musí byť uvedený v elemente{' '}
            <code className={codeClass}>&lt;legend&gt;</code>.
          </li>

          <li>
            Všetky možnosti v jednej skupine musia mať rovnaký atribút{' '}
            <code className={codeClass}>name</code>. Inak ich prehliadač nebude
            považovať za jednu skupinu vzájomne sa vylučujúcich možností.
          </li>

          <li>
            Ak je skupina povinná, použite natívny atribút{' '}
            <code className={codeClass}>required</code> na prepínacích poliach.
            Vizuálna hviezdička označujúca povinné pole má byť skrytá pred
            čítačkami pomocou <code className={codeClass}>aria-hidden=&quot;true&quot;</code>.
          </li>

          <li>
            Nápovedu k celej skupine alebo ku konkrétnej možnosti prepojte cez{' '}
            <code className={codeClass}>aria-describedby</code>, aby ju mohli
            oznámiť aj asistenčné technológie.
          </li>

          <li>
            Pri chybovom stave nastavte{' '}
            <code className={codeClass}>aria-invalid=&quot;true&quot;</code> a
            chybové hlásenie programovo prepojte s poľom alebo skupinou.
            Prakticky najrobustnejší pattern je použiť{' '}
            <code className={codeClass}>aria-describedby</code> aj pre text
            chyby.
          </li>

          <li>
            Chybové hlásenie má pomenovať konkrétne chybné pole alebo skupinu.
            Text typu „Toto pole je povinné“ je menej vhodný ako napríklad
            „Spôsob kontaktovania je povinný. Vyberte jednu z možností.“
          </li>

          <li>
            Kritická, právna alebo obmedzujúca voľba by nemala byť automaticky
            predvybraná. Používateľ má mať možnosť urobiť vedomé rozhodnutie.
          </li>
        </Ul>
      </SectionBlock>
    </div>
  );
};

export default TabPristupnost;