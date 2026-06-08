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
          Lišta spätnej väzby musí byť použiteľná klávesnicou a musí poskytovať
          jasný kontext používateľom asistenčných technológií. Otázka,
          odpovede a potvrdzujúca správa musia byť programovo zrozumiteľne
          prepojené.
        </Text>

        <H3>Klávesové ovládanie</H3>

        <Ul className="mb-8">
          <li>
            <code className={codeClass}>Tab</code> – presun zamerania
            klávesnice na nasledujúce tlačidlo alebo odkaz.
          </li>
          <li>
            <code className={codeClass}>Shift + Tab</code> – presun zamerania
            klávesnice na predchádzajúce tlačidlo alebo odkaz.
          </li>
          <li>
            <code className={codeClass}>Enter</code> alebo{' '}
            <code className={codeClass}>Medzerník</code> – aktivovanie
            vybraného tlačidla.
          </li>
        </Ul>

        <H3>Základné pravidlá prístupnosti</H3>

        <Ul>
          <li>
            Všetky akcie v lište musia používať natívny element{' '}
            <code className={codeClass}>&lt;button&gt;</code>, prípadne
            natívny odkaz <code className={codeClass}>&lt;a&gt;</code>, ak ide
            o prechod na inú stránku.
          </li>

          <li>
            Otázka a odpovede „Áno“ a „Nie“ musia byť zoskupené pomocou{' '}
            <code className={codeClass}>&lt;fieldset&gt;</code> a otázka má
            byť uvedená v <code className={codeClass}>&lt;legend&gt;</code>.
          </li>

          <li>
            Celý komponent má byť označený ako samostatná oblasť pomocou{' '}
            <code className={codeClass}>role=&quot;region&quot;</code> a{' '}
            <code className={codeClass}>aria-label=&quot;Lišta spätnej väzby&quot;</code>.
          </li>

          <li>
            Tlačidlá „Áno“ a „Nie“ musia mať popisný prístupný názov, ktorý
            zahŕňa aj kontext otázky. Nestačí, aby asistenčná technológia oznámila iba „Áno,
            tlačidlo“ alebo „Nie, tlačidlo“.
          </li>

          <li>
            Dynamická potvrdzujúca správa, napríklad „Ďakujeme za vašu spätnú
            väzbu.“, sa oznamuje cez samostatný{' '}
            <code className={codeClass}>aria-live=&quot;polite&quot;</code>{' '}
            región. Tento live región musí byť prítomný v DOM už pri načítaní
            stránky a na začiatku má byť prázdny.
          </li>

          <li>
            Nepoužívajte <code className={codeClass}>aria-live</code> na celom
            komponente, ktorý obsahuje aj statický text otázky a tlačidlá.
          </li>

          <li>
            Medzi tlačidlami má byť dostatočná medzera, odporúčane aspoň{' '}
            <strong>25 px</strong>, aby sa znížilo riziko nechceného kliknutia.
          </li>

          <li>
            Dekoratívne ikony, napríklad ikona fajky pri potvrdzujúcej správe,
            musia byť skryté pred asistenčnými technológiami pomocou{' '}
            <code className={codeClass}>aria-hidden=&quot;true&quot;</code>.
          </li>
        </Ul>
      </SectionBlock>
    </div>
  );
};

export default TabPristupnost;