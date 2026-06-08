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
          Kartička musí byť použiteľná klávesnicou a musí mať zrozumiteľný
          prístupný názov. Ak je celá kartička klikateľná, nesmie obsahovať
          ďalšie vnorené interaktívne prvky.
        </Text>

        <H3>Klávesové ovládanie</H3>

        <Ul className="mb-8">
          <li>
            <code className={codeClass}>Tab</code> – presun zamerania
            klávesnice na nasledujúcu kartičku alebo interaktívny prvok.
          </li>
          <li>
            <code className={codeClass}>Shift + Tab</code> – presun zamerania
            klávesnice na predchádzajúci prvok.
          </li>
          <li>
            <code className={codeClass}>Enter</code> – aktivovanie kartičky a
            prechod na cieľovú stránku.
          </li>
        </Ul>

        <H3>Základné pravidlá prístupnosti</H3>

        <Ul>
          <li>
            Ak kartička slúži ako navigácia, celá kartička môže byť jedným
            odkazom pomocou natívneho prvku{' '}
            <code className={codeClass}>&lt;a&gt;</code> alebo komponentu{' '}
            <code className={codeClass}>Link</code>, ktorý renderuje odkaz.
          </li>

          <li>
            Klikateľná kartička nesmie obsahovať ďalšie vnorené odkazy alebo
            tlačidlá. Vznikol by neplatný alebo mätúci interaktívny obsah.
          </li>

          <li>
            Nadpis kartičky musí byť jasný a informatívny. Zvyčajne sa používa
            nadpis <code className={codeClass}>&lt;h3&gt;</code>, ale konkrétna
            úroveň nadpisu závisí od hierarchie stránky.
          </li>

          <li>
            Obrázok kartičky má mať prázdny alternatívny text{' '}
            <code className={codeClass}>alt=&quot;&quot;</code>, ak je iba
            dekoratívny a informáciu už dostatočne poskytuje text kartičky.
          </li>

          <li>
            Ak obrázok nesie významnú informáciu, musí mať zmysluplný
            alternatívny text. Neopakujte však zbytočne rovnaký text ako v
            nadpise kartičky.
          </li>

          <li>
            Ak kartička obsahuje dátum, použite prvok{' '}
            <code className={codeClass}>&lt;time&gt;</code> s atribútom{' '}
            <code className={codeClass}>dateTime</code> vo formáte vhodnom pre
            strojové spracovanie.
          </li>

          <li>
            Focus stav musí byť viditeľný a kontrastný. Hover stav nesmie byť
            jediným indikátorom klikateľnosti.
          </li>
        </Ul>
      </SectionBlock>
    </div>
  );
};

export default TabPristupnost;