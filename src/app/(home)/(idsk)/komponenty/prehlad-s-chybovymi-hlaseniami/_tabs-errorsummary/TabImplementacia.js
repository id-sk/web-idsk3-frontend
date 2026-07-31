import React from 'react';

import {
  SectionBlock,
  H4,
  Text,
  Ul,
  Ol,
  ExtLink,
  CodeBlock,
} from '@/app/(home)/_components/content-blocks/ContentBlocks';

const TabImplementacia = () => {
  const codeClass =
    'bg-neutral-100 border border-neutral-200 font-mono text-sm px-1.5 py-0.5 rounded text-black';

  return (
    <div className="animate-fade-in text-black w-full min-w-0">
      <SectionBlock titleString="Implementácia prehľadu s chybovými hláseniami">
        <Text>
          Prehľad s chybovými hláseniami môžete implementovať ako súčasť
          validačnej logiky formulára. V tomto React komponente používame pattern,
          pri ktorom sa po validačnej chybe presunie focus na prehľad chýb.
          Preto komponent nepoužíva <code className={codeClass}>role=&quot;alert&quot;</code>.
        </Text>

        <Ul>
          <li>
            <strong>Focus-based pattern</strong> – odporúčaný v tomto komponente:
            po odoslaní formulára sa focus presunie na prehľad chýb.
          </li>
          <li>
            <strong>Alert pattern</strong> – použiteľný len vtedy, keď sa focus
            na chybové hlásenie nepresúva.
          </li>
        </Ul>
      </SectionBlock>

      <SectionBlock titleString="Základné požiadavky">
        <Text>Pri implementácii dodržte tieto pravidlá:</Text>

        <Ul>
          <li>každý prehľad chýb musí mať jasný nadpis,</li>
          <li>každý odkaz v prehľade musí smerovať na konkrétne chybné pole,</li>
          <li>každé ID na stránke musí byť jedinečné,</li>
          <li>text chyby v prehľade má byť rovnaký ako text chyby pri poli,</li>
          <li>chybové hlásenie musí obsahovať konkrétnu informáciu, ako chybu opraviť.</li>
        </Ul>
      </SectionBlock>

      <SectionBlock titleString="React implementácia">
        <div className="mt-4 mb-8">
          <H4>1. Použitie komponentu</H4>

          <Text className="mb-4">
            Pole <code className={codeClass}>errors</code> obsahuje zoznam chýb.
            Hodnota <code className={codeClass}>id</code> musí zodpovedať ID
            konkrétneho chybného inputu vo formulári.
          </Text>

          <CodeBlock
            language="jsx"
            codeString={`import ErrorSummaryCustom from '@/app/(home)/_components/error-summary/errorSummaryCustom';

const errors = [
  {
    id: 'email',
    message: 'Zadajte e-mailovú adresu v tvare meno@example.com.',
  },
  {
    id: 'name',
    message: 'Meno musí obsahovať aspoň 3 znaky.',
  },
];

<ErrorSummaryCustom
  title="Vo formulári sú chyby"
  description="Opravte označené polia a formulár odošlite znova."
  errors={errors}
  focusKey={submitCount}
/>`}
          />
        </div>

        <div className="mt-12 mb-8">
          <H4>2. Správne označenie chybného poľa</H4>

          <Text className="mb-4">
            Input a chybové hlásenie nesmú používať rovnaké ID. Chybové hlásenie
            prepojte s inputom cez <code className={codeClass}>aria-describedby</code>.
          </Text>

          <CodeBlock
            language="html"
            codeString={`<label for="email">
  Zadajte e-mail
  <span aria-hidden="true">*</span>
</label>

<p id="email-error" class="error-message">
  <strong>Chyba:</strong>
  Zadajte e-mailovú adresu v tvare meno@example.com.
</p>

<input
  id="email"
  name="email"
  type="email"
  aria-invalid="true"
  aria-describedby="email-error"
/>`}
          />
        </div>

        <div className="mt-12 mb-8">
          <H4>3. Čomu sa vyhnúť</H4>

          <Text className="mb-4">
            Ak na prehľad chýb presúvate focus, nepoužívajte na rovnakom prvku
            live region.
          </Text>

          <CodeBlock
            language="html"
            codeString={`<!-- Nepoužívajte tento pattern, ak na prvok zároveň presúvate focus -->
<div
  role="alert"
  tabindex="-1"
>
  <h2>Vo formulári sú chyby</h2>
</div>`}
          />

          <Text className="mt-6 mb-4">
            Rovnako nepoužívajte rovnaké ID pre input a chybovú hlášku.
          </Text>

          <CodeBlock
            language="html"
            codeString={`<!-- Nesprávne: input aj chyba majú rovnaké id -->
<input id="input-email" aria-errormessage="input-email">

<span id="input-email">
  Zadajte e-mailovú adresu v tvare meno@example.com.
</span>`}
          />
        </div>
      </SectionBlock>

      <SectionBlock titleString="Implementácia z ID-SK Frontend">
        <Text>
          Ak implementujete komponent podľa ID-SK Frontend, overte si, aký
          oznamovací pattern používa konkrétna verzia knižnice. Ak komponent
          presúva focus na prehľad chýb, nepoužívajte súčasne{' '}
          <code className={codeClass}>role=&quot;alert&quot;</code> na tom istom
          prvku.
        </Text>

        <div className="mt-4 mb-8">
          <H4>1. Statická HTML implementácia</H4>

          <Text className="mb-4">
            Z dokumentácie môžete vychádzať zo stránky komponentu{' '}
            <ExtLink href="https://komponenty.idsk3.gov.sk/components/error-summary">
              prehľad s chybovými hláseniami
            </ExtLink>
            . Pri vlastnej implementácii však zachovajte jedinečné ID a zvoľte
            iba jeden oznamovací pattern.
          </Text>

          <CodeBlock
            language="html"
            codeString={`<div
  class="govuk-error-summary"
  tabindex="-1"
  aria-labelledby="error-summary-title"
  data-module="govuk-error-summary"
>
  <h2 id="error-summary-title" class="govuk-error-summary__title">
    Vo formulári sú chyby
  </h2>

  <div class="govuk-error-summary__body">
    <ul class="govuk-list govuk-error-summary__list">
      <li>
        <a href="#email">
          Zadajte e-mailovú adresu v tvare meno@example.com.
        </a>
      </li>
      <li>
        <a href="#name">
          Meno musí obsahovať aspoň 3 znaky.
        </a>
      </li>
    </ul>
  </div>
</div>`}
          />
        </div>

        <div className="mt-12 mb-8">
          <H4>2. Pokročilá integrácia (NPM + SCSS + JS)</H4>

          <Ol>
            <li>
              <strong className="block mb-2">Nainštalujte balík</strong>
              Pre inštaláciu cez NPM spustite:

              <CodeBlock
                language="bash"
                codeString={`npm install nunjucks --save
npm i @id-sk/frontend@3.0.0-beta.0-hotfix`}
              />
            </li>

            <li className="mt-6">
              <strong className="block mb-2">Pridajte HTML alebo Nunjucks</strong>
              Do pripraveného súboru vložte markup komponentu a uistite sa, že
              odkazy v zozname smerujú na existujúce chybné polia.
            </li>

            <li className="mt-6">
              <strong className="font-semibold block mb-2">Importujte štýly</strong>
              Pre import individuálneho ID-SK komponentu pridajte:

              <CodeBlock
                language="scss"
                codeString={`@import "node_modules/@id-sk/frontend/idsk/components/error-summary/error-summary";`}
              />
            </li>

            <li className="mt-6">
              <strong className="font-semibold block mb-2">
                Inicializujte JavaScript
              </strong>
              Ak používate JavaScript modul knižnice, inicializujte ho podľa
              verzie ID-SK Frontend používanej vo vašom projekte.

              <CodeBlock
                language="javascript"
                codeString={`import { ErrorSummary, createAll } from 'govuk-frontend';

createAll(ErrorSummary);`}
              />
            </li>
          </Ol>
        </div>
      </SectionBlock>
    </div>
  );
};

export default TabImplementacia;