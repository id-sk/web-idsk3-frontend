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
    'bg-neutral-100 border border-neutral-200 font-mono text-sm px-1.5 py-0.5 rounded text-black';

  return (
    <div className="animate-fade-in text-black w-full min-w-0">
      <SectionBlock titleString="Implementácia omrvinkovej navigácie z ID-SK Frontend">
        <Text>
          Komponenty z knižnice ID-SK Frontend môžete do svojho projektu
          integrovať dvoma spôsobmi v závislosti od technologickej
          infraštruktúry:
        </Text>

        <Ul>
          <li>
            <strong>Statická HTML implementácia</strong> – vhodná pre projekty
            bez Node.js alebo bundlera.
          </li>
          <li>
            <strong>Pokročilá integrácia (NPM + SCSS + JS)</strong> – vhodná
            pre projekty so správou zdrojov a build procesom.
          </li>
        </Ul>
      </SectionBlock>

      <SectionBlock titleString="Základné požiadavky">
        <Text>Pred začiatkom integrácie sa uistite, že máte:</Text>

        <Ul>
          <li>
            <strong className="font-semibold">Node.js:</strong> verzia 4.2.0
            alebo vyššia.
          </li>
          <li>
            <strong className="font-semibold">Dart Sass:</strong> verzia 1.0.0
            alebo vyššia.
          </li>
          <li>
            <strong className="font-semibold">Nunjucks:</strong> verzia 3.0.0
            alebo vyššia, ak chcete používať makrá.
          </li>
        </Ul>
      </SectionBlock>

      <SectionBlock titleString="Možnosti implementácie">
        <div className="mt-4">
          <H3>1. Statická HTML implementácia</H3>

          <Text className="mb-4">
            Ak projekt nevyužíva Node.js alebo bundler, môžete použiť
            kompilované a minifikované súbory zo zložky{' '}
            <code className={codeClass}>dist</code>. Pri tomto spôsobe
            integrácie pracujete s hotovým HTML, CSS a JavaScriptom.
          </Text>

          <Ol className="mt-8">
            <StepItem title="Stiahnite a zahrňte zdroje">
              <Text className="mb-4">
                Skopírujte potrebné súbory a assety do projektu. Štruktúra môže
                vyzerať napríklad takto:
              </Text>

              <CodeBlock
                language="bash"
                codeString={`
                    project/
                    │
                    ├── assets/
                    │   ├── images/
                    │   └── fonts/
                    ├── index.html
                    ├── frontend.min.css
                    ├── frontend.min.js
                    ├── frontend.min.css.map
                    └── frontend.min.js.map
                `}
              />
            </StepItem>

            <StepItem title="Prepojte štýly a skripty" className="mt-6">
              <Text className="mb-4">
                Do časti <code className={codeClass}>head</code> vložte
                minifikovaný CSS súbor. Na koniec{' '}
                <code className={codeClass}>body</code> pripojte JavaScript a
                inicializujte komponenty.
              </Text>

              <CodeBlock
                language="html"
                codeString={`
                    <!DOCTYPE html>
                    <html lang="sk">
                    <head>
                        <title>Ukážka</title>
                        <link rel="stylesheet" href="frontend.min.css">
                    </head>
                    <body>
                        <script type="module" src="./frontend.min.js"></script>
                        <script type="module">
                        import { initAll } from './frontend.min.js'
                        initAll()
                        </script>
                    </body>
                    </html>
                `}
              />
            </StepItem>

            <StepItem title="Skopírujte HTML kód" className="mt-6">
              <Text className="mb-4">
                Zo stránky dokumentácie stiahnite HTML kód komponentu{' '}
                <ExtLink href="https://komponenty.idsk3.gov.sk/components/breadcrumbs">
                  omrvinková navigácia
                </ExtLink>{' '}
                a vložte ho do svojho HTML.
              </Text>

              <CodeBlock
                language="html"
                codeString={`
                    <nav aria-label="Omrvinková navigácia">
                    <ol class="govuk-breadcrumbs__list">
                        <li class="govuk-breadcrumbs__list-item">
                        <a class="govuk-breadcrumbs__link" href="/sekcia">
                            Sekcia
                        </a>
                        </li>
                        <li class="govuk-breadcrumbs__list-item">
                        <a class="govuk-breadcrumbs__link" href="/sekcia/podsekcia">
                            Podsekcia
                        </a>
                        </li>
                        <li class="govuk-breadcrumbs__list-item" aria-current="page">
                        Aktuálna stránka
                        </li>
                    </ol>
                    </nav>
                `}
              />
            </StepItem>
          </Ol>
        </div>

        <div>
          <H3>2. Pokročilá integrácia (NPM + SCSS + JS)</H3>

          <Ol>
            <StepItem title="Nainštalujte balík">
              <Text>
                Pre inštaláciu cez NPM spustite:
              </Text>

              <CodeBlock
                language="bash"
                codeString={`
                    npm install nunjucks --save
                    npm i @id-sk/frontend@3.0.0-beta.0-hotfix
                `}
              />
            </StepItem>

            <StepItem title="Pridajte Nunjucks/HTML" className="mt-6">
              Do pripraveného súboru vložte HTML alebo Nunjucks makro podľa
              spôsobu integrácie.
            </StepItem>

            <StepItem title="Importujte štýly" className="mt-6">
              <Text>
                Pre import individuálneho IDSK komponentu do Sass súboru
                pridajte:
              </Text>

              <CodeBlock
                language="scss"
                codeString={`
                    @import "node_modules/@id-sk/frontend/idsk/components/breadcrumbs/breadcrumbs";
                `}
              />
            </StepItem>
          </Ol>
        </div>
      </SectionBlock>
    </div>
  );
};

export default TabImplementacia;