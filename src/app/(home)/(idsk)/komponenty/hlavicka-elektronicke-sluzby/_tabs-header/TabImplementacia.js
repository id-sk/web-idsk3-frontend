'use client';

import React from 'react';

import {
  SectionBlock,
  H3,
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
      <SectionBlock titleString="Implementácia hlavičky pre elektronické služby z ID-SK Frontend">
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
        <div className="mt-4 mb-8">
          <H3>1. Statická HTML implementácia</H3>

          <Text className="mb-4">
            Ak projekt nevyužíva Node.js alebo bundler, môžete použiť hotové
            buildy. Pri inštalácii zo zložky{' '}
            <code className={codeClass}>dist</code> sa používajú kompilované a
            minifikované verzie šablóny so štýlmi.
          </Text>

          <Ul>
            <li>Nemôžete selektívne zahrnúť CSS alebo JavaScript pre jednotlivé komponenty.</li>
            <li>Nemôžete zostaviť vlastné štýly podľa typografických kombinácií.</li>
            <li>Nemôžete prispôsobiť interný kód komponentu bez zásahu do buildu.</li>
            <li>Nemôžete použiť dynamické komponenty z Nunjucks šablón bez prípravy prostredia.</li>
          </Ul>

          <div className="space-y-8 mt-8">
            <div>
              <strong className="block mb-2 text-sm sm:text-base md:text-lg">
                ➜ Stiahnite a zahrňte zdroje
              </strong>

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
            </div>

            <div>
              <strong className="block mb-2 text-sm sm:text-base md:text-lg">
                ➜ Prepojte štýly a skripty
              </strong>

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
            </div>

            <div>
              <strong className="block mb-2 text-sm sm:text-base md:text-lg">
                ➜ Skopírujte HTML kód
              </strong>

              <Text className="mb-4">
                Zo stránky dokumentácie stiahnite HTML kód komponentu{' '}
                <ExtLink href="https://komponenty.idsk3.gov.sk/components/header">
                  hlavička pre elektronické služby
                </ExtLink>{' '}
                a vložte ho do svojho HTML.
              </Text>

              <CodeBlock
                language="html"
                codeString={`
                    <header class="govuk-header" data-module="govuk-header">
                    <div class="govuk-header__container">
                        <a href="/" class="govuk-header__link govuk-header__link--homepage">
                        <img
                            src="/assets/images/logo-sk-color.svg"
                            alt="Odkaz na domovskú stránku"
                        >
                        </a>

                        <nav aria-label="Hlavná navigácia" class="govuk-header__navigation">
                        <ul class="govuk-header__navigation-list">
                            <li class="govuk-header__navigation-item" aria-current="page">
                            <a class="govuk-header__link" href="/sekcia-1">
                                Sekcia 1
                            </a>
                            </li>
                            <li class="govuk-header__navigation-item">
                            <a class="govuk-header__link" href="/sekcia-2">
                                Sekcia 2
                            </a>
                            </li>
                        </ul>
                        </nav>

                        <div class="govuk-header__actionPanel">
                        <button type="button" class="govuk-button" aria-label="Notifikácie">
                            <span class="material-icons" aria-hidden="true">notifications</span>
                        </button>
                        <button type="button" class="govuk-button" aria-label="Profil">
                            MM
                        </button>
                        </div>
                    </div>
                    </header>
                `}
              />
            </div>
          </div>
        </div>

        <div className="mt-12 mb-8">
          <H3>2. Pokročilá integrácia (NPM + SCSS + JS)</H3>

          <Ol>
            <li>
              <strong className="block mb-2">Nainštalujte balík</strong>

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
            </li>

            <li className="mt-6">
              <strong className="block mb-2">Pridajte Nunjucks alebo HTML</strong>
              Do pripraveného súboru vložte HTML alebo Nunjucks makro podľa
              spôsobu integrácie.
            </li>

            <li className="mt-6">
              <strong className="font-semibold block mb-2">
                Importujte štýly
              </strong>

              <Text>
                Pre import individuálneho IDSK komponentu, v tomto prípade
                hlavičky, do Sass súboru pridajte:
              </Text>

              <CodeBlock
                language="scss"
                codeString={`
                    @import "node_modules/@id-sk/frontend/idsk/components/header/header";
                `}
              />
            </li>

            <li className="mt-6">
              <strong className="font-semibold block mb-2">
                Importujte JavaScript
              </strong>

              <Text>
                ID-SK Frontend komponenty s JavaScript správaním majú vo svojom
                markupe nastavený atribút{' '}
                <code className={codeClass}>data-module</code>. Pre import
                JavaScriptu hlavičky vložte do JS súboru:
              </Text>

              <CodeBlock
                language="javascript"
                codeString={`
                    import { Header, createAll } from 'govuk-frontend'

                    createAll(Header)
                `}
              />
            </li>
          </Ol>
        </div>
      </SectionBlock>
    </div>
  );
};

export default TabImplementacia;