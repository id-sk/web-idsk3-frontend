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
          Informačná lišta musí byť zrozumiteľná aj bez spoliehania sa iba na
          farbu. Ak je oznámenie dynamicky pridané na stránku, musí byť vhodne
          oznámené asistenčným technológiám podľa významu správy.
        </Text>

        <H3>Klávesové ovládanie</H3>

        <Ul className="mb-8">
          <li>
            Informačná lišta sama o sebe spravidla nevyžaduje focus klávesnice,
            pokiaľ neobsahuje interaktívny prvok.
          </li>
          <li>
            <code className={codeClass}>Tab</code> – ak lišta obsahuje odkaz
            alebo tlačidlo na zatvorenie, používateľ sa naň presunie štandardne
            pomocou klávesnice.
          </li>
          <li>
            <code className={codeClass}>Enter</code> alebo{' '}
            <code className={codeClass}>Medzerník</code> – aktivuje tlačidlo na
            zatvorenie, ak je v komponente dostupné.
          </li>
        </Ul>

        <H3>Základné pravidlá prístupnosti</H3>

        <Ul>
          <li>
            Dynamické varovné lišty, ktoré sa zobrazia ako reakcia na
            akciu používateľa, môžu používať{' '}
            <code className={codeClass}>role=&quot;alert&quot;</code>. Nepoužívajte
            však <code className={codeClass}>role=&quot;alert&quot;</code> zároveň s
            presunom focusu na rovnaký prvok.
          </li>

          <li>
            Dynamické úspešné alebo informačné lišty môžu používať{' '}
            <code className={codeClass}>role=&quot;status&quot;</code>, aby bola správa
            oznámená menej rušivým spôsobom.
          </li>

          <li>
            Statické lišty v obsahu stránky môžu byť označené ako región pomocou{' '}
            <code className={codeClass}>role=&quot;region&quot;</code> a pomenované
            pomocou <code className={codeClass}>aria-label</code> alebo{' '}
            <code className={codeClass}>aria-labelledby</code>, ak je potrebné,
            aby ich používateľ vedel samostatne lokalizovať.
          </li>

          <li>
            Dekoratívne ikonky vo vnútri lišty musia byť skryté pred
            asistenčnými technológiami pomocou{' '}
            <code className={codeClass}>aria-hidden=&quot;true&quot;</code>.
          </li>

          <li>
            Význam lišty nesmie byť vyjadrený iba farbou. Text musí jasne
            komunikovať, či ide o informáciu, upozornenie, chybu alebo úspech.
          </li>

          <li>
            Tlačidlo na zatvorenie musí mať zrozumiteľný prístupný názov,
            napríklad „Zatvoriť informačnú lištu“.
          </li>
        </Ul>
      </SectionBlock>
    </div>
  );
};

export default TabPristupnost;