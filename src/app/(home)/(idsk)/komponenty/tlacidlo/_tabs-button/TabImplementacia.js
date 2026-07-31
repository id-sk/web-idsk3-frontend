'use client';

import React from 'react';
import { 
  SectionBlock, 
  H3, 
  H4, 
  Text, 
  Ul, 
  Ol, 
  ExtLink, 
  CodeBlock 
} from '@/app/(home)/_components/content-blocks/ContentBlocks';

const TabImplementacia = () => {
  const codeClass = "bg-neutral-100 border border-neutral-200 font-mono text-sm px-1.5 py-0.5 rounded text-black";

  return (
    <div className="animate-fade-in text-black w-full min-w-0">
      
      <SectionBlock titleString="Implementácia tlačidla z ID-SK Frontend">
        <Text>
          Komponenty z knižnice ID-SK Frontend môžete do svojho projektu integrovať dvoma spôsobmi v závislosti od vašej technologickej infraštruktúry:
        </Text>
        <Ul>
          <li><strong>Statická HTML implementácia</strong> – vhodná pre projekty bez Node.js alebo bundlera.</li>
          <li><strong>Pokročilá integrácia (NPM + SCSS + JS)</strong> – vhodná pre projekty so správou zdrojov a build procesom.</li>
        </Ul>
      </SectionBlock>

      <SectionBlock titleString="Základné požiadavky">
        <Text>Pred začiatkom integrácie sa uistite, že máte:</Text>
        <Ul>
          <li><strong className="font-semibold">Node.js:</strong> verzia 4.2.0 alebo vyššia.</li>
          <li><strong className="font-semibold">Dart Sass:</strong> verzia 1.0.0 alebo vyššia.</li>
          <li><strong className="font-semibold">Nunjucks:</strong> verzia 3.0.0 alebo vyššia (ak chcete používať makrá).</li>
        </Ul>
      </SectionBlock>

      <SectionBlock titleString="Možnosti implementácie">
        
        <div className="mt-4 mb-8">
          <H4>1. Statická HTML implementácia (HTML + minifikované súbory)</H4>
          <Text className="mb-4">
            Ak váš projekt nevyužíva Node.js alebo bundler (napr. Webpack, Vite), môžete použiť hotové buildy. Pri inštalácii z <code className={codeClass}>dist</code> sa používajú kompilované a minifikované verzie šablóny so štýlmi. To znamená, že nebudete môcť:
          </Text>
          <Ul>
            <li>selektívne zahrnúť CSS alebo JavaScript pre jednotlivé komponenty</li>
            <li>zostaviť si vlastné štýly alebo komponenty na základe palety alebo typografických kombinácií</li>
            <li>prispôsobiť si kód (napríklad prepísať farby alebo povoliť globálne štýly)</li>
            <li>použiť dynamické komponenty z Nunjucks šablón</li>
          </Ul>

          <div className="space-y-8 mt-8">
            <div>
              <strong className="block mb-2 text-sm sm:text-base md:text-lg">➜ Stiahnite a zahrňte zdroje</strong>
              <Text className="mb-4">
                Stiahnite si najnovšie kompilované a minifikované verzie šablón štýlov, JavaScript a assetov. Skopírujte celý <code className={codeClass}>assets</code> priečinok a minifikované súbory do rootu vášho projektu. Štruktúra by mala vyzerať približne takto:
              </Text>
              <CodeBlock 
                language="bash"
                codeString={`
                  project/ 
                  │ 
                  ├── assets - images  
                             - fonts 
                  ├── index.html 
                  ├── frontend.min.css 
                  ├── frontend.min.js 
                  ├── frontend.min.css.map 
                  └── frontend.min.js.map
                `}
              />
            </div>

            <div>
              <strong className="block mb-2 text-sm sm:text-base md:text-lg">➜ Prepojte štýly a skripty</strong>
              <Text className="mb-4">
                Do časti <code className={codeClass}>head</code> vložte minifikované css. Na záver <code className={codeClass}>body</code> pripojte minifikovaný javascript a inicializujte ho.
              </Text>
              <CodeBlock 
                language="html"
                codeString={`
                  <!DOCTYPE html> 
                  <html> 
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
              <strong className="block mb-2 text-sm sm:text-base md:text-lg">➜ Skopírujte HTML kód</strong>
              <Text className="mb-4">
                Zo stránky dokumentácie stiahnite HTML kód komponentu <ExtLink href="https://komponenty.idsk3.gov.sk/components/button">tlačidlo</ExtLink> a vložte ho do svojho HTML.
              </Text>
              <CodeBlock 
                language="html"
                codeString={`
                  <button type="submit" class="govuk-button govuk-button__basic" data-module="govuk-button">
                    Primárne tlačidlo
                  </button>
                `}
              />
            </div>
          </div>
        </div>

        {/* POKROČILÁ NPM IMPLEMENTÁCIA */}
        <div className="mt-12 mb-8">
          <H4>2. Pokročilá integrácia (NPM + SCSS + JS)</H4>
          
          <Ol>
            <li>
              <strong className="block mb-2">Nainštalujte balík</strong>
              Pre inštaláciu cez NPM spustite (po skončení inštalácie sa balík <code className={codeClass}>@id-sk/frontend</code> objaví v <code className={codeClass}>node_modules</code>):
              <CodeBlock 
                language="bash"
                codeString={`
                  npm install nunjucks --save
                  npm i @id-sk/frontend@3.0.0-beta.0-hotfix
                `}
              />
            </li>
            <li className="mt-6">
              <strong className="block mb-2">Pridajte Nunjucks/HTML</strong>
              Do pripraveného súboru (či už .html alebo .njk) vložte kód, ktorý nájdete vyššie.
            </li>
            <li className="mt-6">
              <strong className="font-semibold block mb-2">Importujte štýly</strong>
              Pre import individuálneho IDSK komponentu (tlačidlo) do svojho Sass súboru pridajte:
              <CodeBlock 
                language="scss"
                codeString={`
                  @import "node_modules/@id-sk/frontend/idsk/components/button/button";
                `}
              />
            </li>
            <li className="mt-6">
              <strong className="font-semibold block mb-2">Importujte Javascript</strong>
              ID-SK komponenty s JavaScript správaním je nutné inicializovať. Pre inicializáciu konkrétneho komponentu tlačidlo použite tento kód:
              <CodeBlock 
                language="javascript"
                codeString={`
                  import { Button, initAll } from 'govuk-frontend'
                  
                  // Naštartovanie všetkých komponentov na stránke naraz (odporúčané)
                  initAll()
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