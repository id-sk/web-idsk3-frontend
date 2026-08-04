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
      <SectionBlock titleString="Implementácia lišty spätnej väzby z ID-SK Frontend">
        <Text>
          Komponent lišta spätnej väzby môžete do projektu integrovať dvoma
          spôsobmi podľa technologickej infraštruktúry:
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
            HTML, CSS a JavaScript súbory. Pri vlastnej implementácii zachovajte
            sémantiku <code className={codeClass}>fieldset</code>,{' '}
            <code className={codeClass}>legend</code>, natívne tlačidlá a
            samostatný live región.
          </Text>

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
                ➜ Prístupný HTML základ
              </strong>

              <Text className="mb-4">
                Pri vlastnej implementácii dodržte zoskupenie otázky a odpovedí
                pomocou <code className={codeClass}>fieldset</code> a{' '}
                <code className={codeClass}>legend</code>. Live región musí byť
                v DOM už od načítania stránky.
              </Text>

              <CodeBlock
                language="html"
                codeString={`
<section role="region" aria-label="Lišta spätnej väzby">
  <p id="feedback-status" aria-live="polite" aria-atomic="true"></p>

  <fieldset>
    <legend id="feedback-question">
      Boli tieto informácie pre vás užitočné?
    </legend>

    <button type="button">
      <span aria-hidden="true">Áno</span>
      <span class="sr-only">
        Áno, tieto informácie boli pre mňa užitočné
      </span>
    </button>

    <button type="button">
      <span aria-hidden="true">Nie</span>
      <span class="sr-only">
        Nie, tieto informácie neboli pre mňa užitočné
      </span>
    </button>
  </fieldset>

  <a href="/kontakt/nahlasit-problem">
    Nahlásiť chybu na stránke
  </a>
</section>
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

              <Text>Pre inštaláciu cez NPM spustite:</Text>

              <CodeBlock
                language="bash"
                codeString={`
npm install nunjucks --save
npm i @id-sk/frontend@3.0.0-beta.0-hotfix
                `}
              />
            </li>

            <li className="mt-6">
              <strong className="block mb-2">Pridajte komponent</strong>
              V projekte použite vlastný komponent{' '}
              <code className={codeClass}>FeedbackBarCustom</code>, ktorý
              zabezpečuje prístupné zoskupenie otázky, tlačidiel a live
              regiónu.
            </li>

            <li className="mt-6">
              <strong className="font-semibold block mb-2">
                Importujte štýly
              </strong>

              <Text>
                Ak používate pôvodné ID-SK štýly, import individuálneho
                komponentu vyzerá takto:
              </Text>

              <CodeBlock
                language="scss"
                codeString={`
@import "node_modules/@id-sk/frontend/idsk/components/feedback-bar/feedback-bar";
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