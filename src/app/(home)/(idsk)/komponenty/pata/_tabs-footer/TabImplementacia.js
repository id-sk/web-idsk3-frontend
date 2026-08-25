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
      <SectionBlock titleString="Implementácia päty z ID-SK Frontend">
        <Text>
          Komponenty z knižnice ID-SK Frontend môžete do svojho projektu
          integrovať dvoma spôsobmi v závislosti od vašej technologickej
          infraštruktúry:
        </Text>

        <Ul>
          <li>
            <strong>Statická HTML implementácia</strong> – vhodná pre projekty
            bez Node.js alebo bundlera.
          </li>
          <li>
            <strong>Pokročilá integrácia (NPM + SCSS + JS)</strong> – vhodná pre
            projekty so správou zdrojov a build procesom.
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
          <H3>1. Statická HTML implementácia (HTML + minifikované súbory)</H3>

          <Text className="mb-4">
            Ak váš projekt nevyužíva Node.js alebo bundler, napríklad Webpack
            alebo Vite, môžete použiť hotové buildy. Pri inštalácii z{' '}
            <code className={codeClass}>dist</code> sa používajú kompilované a
            minifikované verzie šablóny so štýlmi. To znamená, že nebudete môcť:
          </Text>

          <Ul>
            <li>
              selektívne zahrnúť CSS alebo JavaScript pre jednotlivé komponenty,
            </li>
            <li>
              zostaviť si vlastné štýly alebo komponenty na základe palety alebo
              typografických kombinácií,
            </li>
            <li>
              prispôsobiť si kód, napríklad prepísať farby alebo povoliť
              globálne štýly,
            </li>
            <li>použiť dynamické komponenty z Nunjucks šablón.</li>
          </Ul>

          <Ol className="mt-8">
            <StepItem title="Stiahnite a zahrňte zdroje">
              <Text className="mb-4">
                Stiahnite si najnovšie kompilované a minifikované verzie šablón
                štýlov, JavaScript a assetov. Skopírujte celý{' '}
                <code className={codeClass}>assets</code> priečinok a
                minifikované súbory do rootu vášho projektu. Štruktúra by mala
                vyzerať približne takto:
              </Text>

              <CodeBlock
                language="bash"
                codeString={`project/
                    │
                    ├── assets
                    │   ├── images
                    │   └── fonts
                    ├── index.html
                    ├── frontend.min.css
                    ├── frontend.min.js
                    ├── frontend.min.css.map
                    └── frontend.min.js.map`}
              />
            </StepItem>

            <StepItem title="Prepojte štýly a skripty" className="mt-6">
              <Text className="mb-4">
                Do časti <code className={codeClass}>head</code> vložte
                minifikované CSS. Na záver{' '}
                <code className={codeClass}>body</code> pripojte minifikovaný
                JavaScript a inicializujte ho.
              </Text>

              <CodeBlock
                language="html"
                codeString={`<!DOCTYPE html>
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
                            </html>`}
                        />
            </StepItem>

            <StepItem title="Skopírujte HTML kód" className="mt-6">
              <Text className="mb-4">
                Zo stránky dokumentácie stiahnite HTML kód komponentu{' '}
                <ExtLink href="https://komponenty.idsk3.gov.sk/components/footer">
                  päta
                </ExtLink>{' '}
                a vložte ho do svojho HTML.
              </Text>

              <CodeBlock
                language="html"
                codeString={`<footer class="govuk-footer">
                                <div class="govuk-width-container">
                                    <div class="govuk-footer__meta">
                                    <div class="govuk-footer__meta-item govuk-footer__meta-item--grow">
                                        <h2 class="govuk-visually-hidden">Päta stránky</h2>

                                        <ul class="govuk-footer__inline-list">
                                        <li class="govuk-footer__inline-list-item">
                                            <a class="govuk-footer__link" href="#accessibility">
                                            Vyhlásenie o prístupnosti
                                            </a>
                                        </li>
                                        <li class="govuk-footer__inline-list-item">
                                            <a class="govuk-footer__link" href="#contact">
                                            Kontakt na prevádzkovateľa
                                            </a>
                                        </li>
                                        <li class="govuk-footer__inline-list-item">
                                            <a class="govuk-footer__link" href="#rss">
                                            RSS
                                            </a>
                                        </li>
                                        <li class="govuk-footer__inline-list-item">
                                            <a class="govuk-footer__link" href="#sitemap">
                                            Mapa stránky
                                            </a>
                                        </li>
                                        </ul>

                                        <span class="govuk-footer__licence-description">
                                        Prevádzkovateľom služby je Ministerstvo investícií,
                                        regionálneho rozvoja a informatizácie SR.
                                        <br>
                                        Vytvorené v súlade s Jednotným dizajnovým manuálom
                                        elektronických služieb.
                                        </span>
                                    </div>

                                    <div class="govuk-footer__meta-item">
                                        <a class="govuk-footer__link govuk-footer__copyright-logo" href="#">
                                        <img src="/assets/images/logo-sk-black.svg" alt="Slovensko.sk">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </footer>`}
                />
            </StepItem>
          </Ol>
        </div>

        <div>
          <H3>2. Pokročilá integrácia (NPM + SCSS + JS)</H3>

          <Ol>
            <StepItem title="Nainštalujte balík">
              Pre inštaláciu cez NPM spustite:

              <CodeBlock
                language="bash"
                codeString={`npm install nunjucks --save
                            npm i @id-sk/frontend@3.0.0-beta.0-hotfix`}
              />
            </StepItem>

            <StepItem title="Pridajte Nunjucks alebo HTML" className="mt-6">
              Do pripraveného súboru vložte markup komponentu alebo použite
              zodpovedajúce Nunjucks makro, ak ho máte v projekte dostupné.
            </StepItem>

            <StepItem title="Importujte štýly" className="mt-6">
              Pre import individuálneho ID-SK komponentu päta do svojho Sass
              súboru pridajte:

              <CodeBlock
                language="scss"
                codeString={`@import "node_modules/@id-sk/frontend/idsk/components/footer/footer";`}
              />
            </StepItem>
          </Ol>
        </div>
      </SectionBlock>
    </div>
  );
};

export default TabImplementacia;