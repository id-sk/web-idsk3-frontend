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
      <SectionBlock titleString="Implementácia kartičky z ID-SK Frontend">
        <Text>
          Komponent kartička z knižnice ID-SK Frontend môžete do svojho projektu
          integrovať dvoma spôsobmi v závislosti od vašej technologickej
          infraštruktúry:
        </Text>

        <Ul>
          <li>
            <strong>Statická HTML implementácia</strong> – vhodná pre projekty
            bez Node.js alebo bundlera.
          </li>

          <li>
            <strong>Pokročilá integrácia (NPM + SCSS)</strong> – vhodná pre
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
        <div>
          <H3>1. Statická HTML implementácia (HTML + minifikované súbory)</H3>

          <Text className="mb-4">
            Ak váš projekt nevyužíva Node.js alebo bundler, napríklad Webpack
            alebo Vite, môžete použiť hotové buildy. Pri inštalácii z priečinka{' '}
            <code className={codeClass}>dist</code> sa používajú kompilované a
            minifikované verzie šablón a štýlov.
          </Text>

          <Text className="mb-4">Pri tomto spôsobe nebudete môcť:</Text>

          <Ul>
            <li>
              selektívne zahrnúť štýly pre jednotlivé komponenty,
            </li>

            <li>
              zostaviť vlastné štýly alebo komponenty na základe palety a
              typografických kombinácií,
            </li>

            <li>
              jednoducho prispôsobiť zdrojový Sass kód komponentu,
            </li>

            <li>
              použiť dynamické komponenty vytvorené pomocou Nunjucks makier.
            </li>
          </Ul>

          <Ol className="mt-8">
            <StepItem title="Stiahnite a zahrňte zdroje">
              <Text className="mb-4">
                Stiahnite si najnovšie kompilované a minifikované verzie
                štýlov a assetov. Skopírujte celý priečinok{' '}
                <code className={codeClass}>assets</code> a minifikované súbory
                do koreňového priečinka projektu. Štruktúra môže vyzerať
                približne takto:
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
                  └── frontend.min.css.map
                `}
              />
            </StepItem>

            <StepItem title="Prepojte štýly" className="mt-6">
              <Text className="mb-4">
                Do elementu <code className={codeClass}>&lt;head&gt;</code>{' '}
                vložte odkaz na minifikovaný CSS súbor.
              </Text>

              <CodeBlock
                language="html"
                codeString={`
                  <!DOCTYPE html>
                  <html lang="sk">
                    <head>
                      <meta charset="UTF-8">
                      <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                      >

                      <title>Ukážka kartičky</title>

                      <link
                        rel="stylesheet"
                        href="./frontend.min.css"
                      >
                    </head>

                    <body>
                    </body>
                  </html>
                `}
              />
            </StepItem>

            <StepItem title="Skopírujte HTML kód" className="mt-6">
              <Text className="mb-4">
                Zo stránky dokumentácie prevezmite HTML kód komponentu{' '}
                <ExtLink href="https://komponenty.idsk3.gov.sk/components/card">
                  kartička
                </ExtLink>{' '}
                a vložte ho do svojho HTML súboru.
              </Text>

              <CodeBlock
                language="html"
                codeString={`
                  <div class="idsk-card">
                    <div class="idsk-card__image-wrapper">
                      <img
                        src="/assets/images/placeholder.png"
                        alt=""
                      >
                    </div>

                    <div class="idsk-card__content">
                      <div class="idsk-card__heading">
                        <h3>
                          
                            href="/zakladne-informacie"
                            class="govuk-link"
                          >
                            Nadpis kartičky
                          </a>
                        </h3>
                      </div>

                      <div class="idsk-card__description">
                        V tejto časti nájdete všetky potrebné informácie
                        spojené s používaním a vytvorením občianskeho
                        preukazu s čipom.
                      </div>

                      <p class="idsk-card__date-tags">
                        <time datetime="2023-01-01">
                          1. 1. 2023
                        </time>

                        <span aria-hidden="true"> — </span>

                        <span>Tag 1</span>
                        <span aria-hidden="true"> | </span>
                        <span>Tag 2</span>
                        <span aria-hidden="true"> | </span>
                        <span>Tag 3</span>
                      </p>
                    </div>
                  </div>
                `}
              />

              <Text className="mt-6 mb-4">
                Ak obrázok neprináša žiadnu novú informáciu a iba vizuálne
                dopĺňa obsah kartičky, použite prázdny alternatívny text{' '}
                <code className={codeClass}>alt=&quot;&quot;</code>. Ak je
                obrázok obsahovo dôležitý, opíšte jeho význam stručným
                alternatívnym textom.
              </Text>
            </StepItem>
          </Ol>
        </div>

        <div>
          <H3>2. Pokročilá integrácia (NPM + SCSS)</H3>

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
              Do pripraveného súboru s príponou{' '}
              <code className={codeClass}>.html</code> alebo{' '}
              <code className={codeClass}>.njk</code> vložte markup kartičky,
              ktorý je uvedený vyššie.
            </StepItem>

            <StepItem title="Importujte štýly" className="mt-6">
              Pre import individuálneho komponentu kartičky pridajte do Sass
              súboru:

              <CodeBlock
                language="scss"
                codeString={`
                  @import "node_modules/@id-sk/frontend/idsk/components/card/card";
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