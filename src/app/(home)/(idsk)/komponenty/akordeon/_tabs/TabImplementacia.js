'use client';

import React from 'react';
import { 
  SectionBlock, 
  H3,  
  H4,
  Text, 
  Ul, 
  Ol, 
  StepItem,
  ExtLink, 
  CodeBlock 
} from '@/app/(home)/_components/content-blocks/ContentBlocks';

const TabImplementacia = () => {
  const codeClass = "bg-neutral-100 border border-neutral-200 font-mono text-sm px-1.5 py-0.5 rounded text-black";

  return (
    <div className="animate-fade-in text-black w-full min-w-0">
      
      <SectionBlock titleString="Implementácia akordeónu z ID-SK Frontend">
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
        
        <div>
          <H3>1. Statická HTML implementácia (HTML + minifikované súbory)</H3>
          <Text className="mb-4">
            Ak váš projekt nevyužíva Node.js alebo bundler (napr. Webpack, Vite), môžete použiť hotové buildy. Pri inštalácii z <code className={codeClass}>dist</code> sa používajú kompilované a minifikované verzie šablóny so štýlmi. To znamená, že nebudete môcť:
          </Text>
          <Ul>
            <li>selektívne zahrnúť CSS alebo JavaScript pre jednotlivé komponenty</li>
            <li>zostaviť si vlastné štýly alebo komponenty na základe palety alebo typografických kombinácií</li>
            <li>prispôsobiť si kód (napríklad prepísať farby alebo povoliť globálne štýly)</li>
            <li>použiť dynamické komponenty z Nunjucks šablón</li>
          </Ul>

          <Ol className="mt-8">
            <StepItem title="Stiahnite a zahrňte zdroje">
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
            </StepItem>

            <StepItem title="Prepojte štýly" className="mt-6">
              <Text className="mb-4">
                Do časti <code className={codeClass}>head</code> vložte minifikované css. Na záver <code className={codeClass}>body</code> pripojte minifikovaný javascript.
              </Text>
              <CodeBlock 
                language="html"
                codeString={`
                  <!DOCTYPE html> 
                  <html> 
                    <head> 
                      <title>Ukážka Akordeónu</title> 
                      <link rel="stylesheet" href="frontend.min.css"> 
                    </head> 
                    <body> 
                      <script type="module" src="./frontend.min.js"></script> 
                    </body> 
                  </html>
                `}
              />
            </StepItem>

            <StepItem title="Skopírujte HTML kód" className="mt-6">
              <Text className="mb-4">
                Zo stránky dokumentácie stiahnite HTML kód komponentu <ExtLink href="https://komponenty.idsk3.gov.sk/components/accordion">akordeón</ExtLink> a vložte ho do svojho HTML. Ak používate čisté HTML, musíte do značky <code className={codeClass}>&lt;div&gt;</code> pridať atribút <code className={codeClass}>id</code>. Tento atribút musí byť unikátny v rámci domény, aby bolo možné udržať stav rozbalenia akordeónu.
              </Text>
              <CodeBlock 
                language="html"
                codeString={`
                  <div class="govuk-accordion" data-module="govuk-accordion" id="with-descriptions"> 
                    <div class="govuk-accordion__section"> 
                      <div class="govuk-accordion__section-header"> 
                        <h2 class="govuk-accordion__section-heading"> 
                          <span class="govuk-accordion__section-button" id="with-descriptions-heading-1"> 
                            Názov 
                          </span> 
                        </h2> 
                      </div> 
                      <div id="with-descriptions-content-1" class="govuk-accordion__section-content"> 
                        <p class="govuk-body"> 
                          Potrebujeme poznať vašu štátnu príslušnosť, aby sme mohli zistiť, v ktorých voľbách máte právo voliť.
                        </p> 
                      </div> 
                    </div> 
                    <div class="govuk-accordion__section"> 
                      <div class="govuk-accordion__section-header"> 
                        <h2 class="govuk-accordion__section-heading"> 
                          <span class="govuk-accordion__section-button" id="with-descriptions-heading-2"> 
                            Názov 
                          </span> 
                        </h2> 
                        <div class="govuk-accordion__section-summary govuk-body" id="with-descriptions-summary-2"> 
                          Popis 
                        </div> 
                      </div> 
                      <div id="with-descriptions-content-2" class="govuk-accordion__section-content"> 
                        <p class="govuk-body"> 
                          Potrebujeme poznať vašu štátnu príslušnosť, aby sme mohli zistiť, v ktorých voľbách máte právo voliť. 
                        </p> 
                      </div> 
                    </div> 
                  </div>
                `}
              />
            </StepItem>
          </Ol>
        </div>

        {/* POKROČILÁ NPM IMPLEMENTÁCIA */}
        <div>
          <H3>2. Pokročilá integrácia (NPM + SCSS + JS)</H3>
          
          <Ol>
            <StepItem title="Nainštalujte balík">
              Pre inštaláciu cez NPM spustite (po skončení inštalácie sa balík <code className={codeClass}>@id-sk/frontend</code> objaví v <code className={codeClass}>node_modules</code>):
              <CodeBlock 
                language="bash"
                codeString={`
                  npm install nunjucks --save
                  npm i @id-sk/frontend@3.0.0-beta.0-hotfix
                `}
              />
            </StepItem>

            <StepItem title="Pridajte Nunjucks/HTML" className="mt-6">
              Do pripraveného súboru (či už .html alebo .njk) vložte kód, ktorý nájdete vyššie.
            </StepItem>

            <StepItem title="Importujte štýly" className="mt-6">
              Pre import individuálneho IDSK komponentu, v tomto prípade Akordeónu, do svojho Sass súboru pridajte:
              <CodeBlock 
                language="scss"
                codeString={`
                  @import "node_modules/@id-sk/frontend/idsk/components/accordion/accordion";
                `}
              />
            </StepItem>

            <StepItem title="Importujte Javascript" className="mt-6">
              ID-SK Frontend komponenty s JavaScript správaním majú vo svojom markupe nastavený atribút <code className={codeClass}>data-module</code>. Pre import javascriptu Akordeónu, vložte do .js súboru:
              <CodeBlock 
                language="javascript"
                codeString={`
                  import { Accordion, createAll } from 'govuk-frontend' 

                  createAll(Accordion)
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