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
          Prehľad s chybovými hláseniami musí byť dostupný pre používateľov
          klávesnice aj asistenčných technológií. Po neúspešnom odoslaní
          formulára sa má používateľ dostať priamo k informácii, že formulár
          obsahuje chyby, a následne vedieť prejsť na konkrétne chybné polia.
        </Text>

        <H3>Klávesové ovládanie</H3>

        <Ul className="mb-8">
          <li>
            <code className={codeClass}>Tab</code> – presúva focus medzi
            odkazmi v prehľade chýb a ďalšími fokusovateľnými prvkami stránky.
          </li>
          <li>
            <code className={codeClass}>Shift + Tab</code> – presúva focus na
            predchádzajúci fokusovateľný prvok.
          </li>
          <li>
            <code className={codeClass}>Enter</code> – aktivuje odkaz v
            prehľade chýb a presunie focus na príslušné chybné pole.
          </li>
        </Ul>

        <H3>Základné pravidlá prístupnosti</H3>

        <Ul>
          <li>
            Po validačnej chybe presuňte focus na prehľad chýb. Obalový prvok
            musí mať <code className={codeClass}>tabIndex=&quot;-1&quot;</code>,
            aby naň bolo možné presunúť focus programovo, ale aby sa doň
            používateľ nedostal pri bežnom tabovaní.
          </li>

          <li>
            Ak sa na prehľad chýb presúva focus, nepoužívajte na rovnakom prvku{' '}
            <code className={codeClass}>role=&quot;alert&quot;</code>. Použite
            buď focus, alebo alert, nie oboje naraz.
          </li>

          <li>
            Ak je na stránke prítomný prehľad chýb a po validácii naň presúvate
            focus, nepoužívajte <code className={codeClass}>role=&quot;alert&quot;</code>
            ani na jednotlivých chybových hláseniach pri poliach. Inak môžu
            čítačky obrazovky oznámiť chyby duplicitne.
          </li>

          <li>
            Prehľad chýb má byť prepojený s vlastným nadpisom cez{' '}
            <code className={codeClass}>aria-labelledby</code>. ID nadpisu musí
            byť jedinečné v rámci celej stránky.
          </li>

          <li>
            Každá položka v prehľade chýb má byť odkazom smerujúcim na
            konkrétne chybné pole pomocou{' '}
            <code className={codeClass}>href=&quot;#id-pola&quot;</code>.
            Cieľom odkazu má byť fokusovateľné pole, nie chybová hláška.
          </li>

          <li>
            Text odkazu v prehľade má byť rovnaký ako chybová hláška pri poli.
            Používateľ tak dostane konzistentnú informáciu na oboch miestach.
          </li>

          <li>
            Chybové hlásenie musí používateľovi povedať nielen to, že nastala
            chyba, ale aj ako ju opraviť. Napríklad namiesto „Zadajte e-mail v
            správnom tvare“ použite „Zadajte e-mailovú adresu v tvare
            meno@example.com.“
          </li>

          <li>
            Chybné pole označte pomocou{' '}
            <code className={codeClass}>aria-invalid=&quot;true&quot;</code>.
            Chybové hlásenie pri poli prepojte s inputom cez{' '}
            <code className={codeClass}>aria-describedby</code>.
          </li>

          <li>
            Nikdy nepoužívajte rovnaké ID pre input aj chybové hlásenie. Input
            môže mať napríklad <code className={codeClass}>id=&quot;email&quot;</code>
            a chybová hláška <code className={codeClass}>id=&quot;email-error&quot;</code>.
          </li>
        </Ul>
      </SectionBlock>
    </div>
  );
};

export default TabPristupnost;