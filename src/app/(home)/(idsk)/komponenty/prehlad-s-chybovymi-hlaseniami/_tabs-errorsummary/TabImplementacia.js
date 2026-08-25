'use client';

import React from 'react';

import {
  SectionBlock,
  H3,
  Text,
  Ul,
  Ol,
  StepItem,
  ExtLink,
  CodeBlock,
} from '@/app/(home)/_components/content-blocks/ContentBlocks';

const TabImplementacia = () => {
  const codeClass =
    'rounded border border-neutral-200 bg-neutral-100 px-1.5 py-0.5 font-mono text-sm text-black';

  return (
    <div className="animate-fade-in w-full min-w-0 text-black">
      <SectionBlock titleString="Implementácia prehľadu s chybovými hláseniami z ID-SK Frontend">
        <Text>
          Komponent z knižnice ID-SK Frontend môžete do projektu integrovať
          dvoma spôsobmi v závislosti od použitej technologickej infraštruktúry:
        </Text>

        <Ul>
          <li>
            <strong>Statická HTML implementácia</strong> – vhodná pre projekty
            bez Node.js alebo bundlera.
          </li>

          <li>
            <strong>Pokročilá integrácia (NPM + SCSS + JavaScript)</strong> –
            vhodná pre projekty so správou zdrojov a build procesom.
          </li>
        </Ul>
      </SectionBlock>

      <SectionBlock titleString="Základné požiadavky">
        <Text>
          Pri implementácii prehľadu s chybovými hláseniami dodržte tieto
          pravidlá:
        </Text>

        <Ul>
          <li>prehľad chýb musí obsahovať jasný a zrozumiteľný nadpis,</li>

          <li>
            každý odkaz v prehľade musí smerovať na konkrétne chybné pole,
          </li>

          <li>každé ID na stránke musí byť jedinečné,</li>

          <li>
            text chyby v prehľade má byť rovnaký ako text chyby pri danom poli,
          </li>

          <li>
            chybové hlásenie musí používateľovi vysvetliť, ako chybu opraviť,
          </li>

          <li>
            cieľové formulárové pole musí byť možné programovo zamerať.
          </li>
        </Ul>
      </SectionBlock>

      <SectionBlock titleString="Možnosti implementácie">
        <div>
          <H3>1. Statická HTML implementácia</H3>

          <Text className="mb-4">
            Zo stránky dokumentácie môžete prevziať HTML kód komponentu{' '}
            <ExtLink href="https://komponenty.idsk3.gov.sk/components/error-summary">
              prehľad s chybovými hláseniami
            </ExtLink>
            . Odkazy v zozname musia smerovať na ID konkrétnych chybných polí vo
            formulári.
          </Text>

          <CodeBlock
            language="html"
            codeString={`
              <div
                class="govuk-error-summary"
                data-module="govuk-error-summary"
              >
                <div role="alert">
                  <h2 class="govuk-error-summary__title">
                    Zadajte správne tieto vstupné údaje a skúste odoslať znova.
                  </h2>

                  <p class="govuk-error-summary__description">
                    Priestor pre popis, k akým chybám došlo a ako ich opraviť.
                  </p>

                  <div class="govuk-error-summary__body">
                    <ul class="govuk-list govuk-error-summary__list">
                      <li>
                        <a href="#example-error-1">
                          Prosím, zadajte správny tvar vášho rodného čísla.
                        </a>
                      </li>

                      <li>
                        <a href="#example-error-2">
                          Prosím, zadajte správny tvar vášho OP preukazu.
                        </a>
                      </li>

                      <li>
                        <a href="#example-error-3">
                          Prosím, zadajte správny tvar vášho telefónneho čísla.
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            `}
          />

          <Text className="mt-6 mb-4">
            Hodnota atribútu <code className={codeClass}>href</code> musí
            zodpovedať atribútu <code className={codeClass}>id</code> chybného
            poľa:
          </Text>

          <CodeBlock
            language="html"
            codeString={`
              <label for="example-error-1">
                Rodné číslo
              </label>

              <p id="example-error-1-message" class="govuk-error-message">
                <span class="govuk-visually-hidden">Chyba:</span>
                Prosím, zadajte správny tvar vášho rodného čísla.
              </p>

              <input
                id="example-error-1"
                name="birth-number"
                type="text"
                aria-invalid="true"
                aria-describedby="example-error-1-message"
              >
            `}
          />
        </div>

        <div>
          <H3>2. Pokročilá integrácia (NPM + SCSS + JavaScript)</H3>

          <Ol>
            <StepItem title="Nainštalujte balík">
              Pre inštaláciu cez NPM spustite:

              <CodeBlock
                language="bash"
                codeString={`
                  npm install nunjucks --save
                  npm i @id-sk/frontend@3.0.0-beta.0-hotfix
                `}
              />
            </StepItem>

            <StepItem title="Pridajte Nunjucks alebo HTML" className="mt-6">
              Do pripraveného súboru vložte markup komponentu. Skontrolujte, že
              odkazy v zozname smerujú na existujúce formulárové polia.
            </StepItem>

            <StepItem title="Importujte štýly" className="mt-6">
              Pre import individuálneho komponentu pridajte do Sass súboru:

              <CodeBlock
                language="scss"
                codeString={`
                  @import "node_modules/@id-sk/frontend/idsk/components/error-summary/error-summary";
                `}
              />
            </StepItem>

            <StepItem title="Importujte JavaScript" className="mt-6">
              Komponent používa atribút{' '}
              <code className={codeClass}>
                data-module=&quot;govuk-error-summary&quot;
              </code>
              . JavaScript modul inicializujte takto:

              <CodeBlock
                language="javascript"
                codeString={`
                  import {
                    ErrorSummary,
                    createAll
                  } from 'govuk-frontend';

                  createAll(ErrorSummary);
                `}
              />
            </StepItem>
          </Ol>
        </div>
      </SectionBlock>

      <SectionBlock titleString="Správanie JavaScript modulu">
        <Text>
          JavaScript modul pri inicializácii štandardne presunie fokus na
          prehľad s chybovými hláseniami. Toto správanie je možné vypnúť
          nastavením{' '}
          <code className={codeClass}>disableAutoFocus: true</code>.
        </Text>

        <Ul>
          <li>
            po inicializácii sa prehľad chýb programovo zameria,
          </li>

          <li>
            po kliknutí na odkaz v prehľade modul vyhľadá cieľové pole podľa
            fragmentu URL,
          </li>

          <li>
            pred zameraním poľa posunie do viditeľnej oblasti jeho label alebo
            legend,
          </li>

          <li>
            pri radio buttonoch a checkboxoch sa snaží posunúť na legend
            nadradeného <code className={codeClass}>fieldset</code>,
          </li>

          <li>
            následne presunie fokus na konkrétny formulárový prvok.
          </li>
        </Ul>

        <CodeBlock
          language="javascript"
          codeString={`
            import {
              ErrorSummary,
              createAll
            } from 'govuk-frontend';

            createAll(ErrorSummary);
          `}
        />

        <Text className="mt-6 mb-4">
          Automatický fokus môžete vypnúť konfiguráciou komponentu:
        </Text>

        <CodeBlock
          language="javascript"
          codeString={`
            new ErrorSummary(
              document.querySelector('[data-module="govuk-error-summary"]'),
              {
                disableAutoFocus: true
              }
            );
          `}
        />
      </SectionBlock>
    </div>
  );
};

export default TabImplementacia;