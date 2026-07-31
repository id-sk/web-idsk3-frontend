'use client';

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
      <SectionBlock titleString="Implementácia kartičky z ID-SK Frontend">
        <Text>
          Komponent kartička môžete do projektu integrovať dvoma spôsobmi podľa
          technologickej infraštruktúry:
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
          <H4>1. Použitie vlastného React komponentu</H4>

          <Text className="mb-4">
            V projekte odporúčame používať vlastný komponent{' '}
            <code className={codeClass}>ArticleCard</code>, ktorý zjednocuje
            vizuálne správanie kartičiek, hover a focus stavy, prácu s obrázkom
            a prístupnú štruktúru odkazu.
          </Text>

          <CodeBlock
            language="jsx"
            codeString={`
                import ArticleCard from '@/app/(home)/_components/article/articleCard';

                <ArticleCard
                href="/komponenty/karticka"
                src="/images/co-je-cards/10-principov-idsk.svg"
                alt=""
                title="Základné informácie"
                description="Stručný prehľad základných povinností pre fyzické a právnické osoby pri podávaní daňového priznania."
                />
            `}
          />
        </div>

        <div className="mt-12 mb-8">
          <H4>2. Statická HTML implementácia</H4>

          <Text className="mb-4">
            Ak projekt nevyužíva React alebo Next.js, kartičku je možné
            implementovať aj staticky. Ak je celá kartička klikateľná, obalte
            jej obsah jedným odkazom a nevkladajte do nej ďalšie interaktívne
            prvky.
          </Text>

          <CodeBlock
            language="html"
            codeString={`
                <a href="/komponenty/karticka" class="article-card">
                <article>
                    <img src="/assets/images/placeholder.png" alt="">

                    <h3>
                    Základné informácie
                    </h3>

                    <p>
                    Stručný prehľad základných povinností pre fyzické a právnické osoby.
                    </p>
                </article>
                </a>
            `}
          />
        </div>

        <div className="mt-12 mb-8">
          <H4>3. Pokročilá integrácia (NPM + SCSS + JS)</H4>

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
              <strong className="block mb-2">Pridajte HTML alebo React komponent</strong>
              Do pripraveného súboru vložte vlastný komponent alebo statickú
              štruktúru podľa spôsobu integrácie.
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
                    @import "node_modules/@id-sk/frontend/idsk/components/card/card";
                `}
              />
            </li>
          </Ol>
        </div>

        <div className="mt-12">
          <H4>4. Poznámka k existujúcemu komponentu</H4>

          <Text>
            Ak sa v projekte nachádza starší komponent{' '}
            <code className={codeClass}>article.js</code>, neodstraňujte ho bez
            kontroly používania. Nové implementácie smerujte na{' '}
            <code className={codeClass}>articleCard.js</code> a starý komponent
            odstráňte až v samostatnom clean-up commite po overení, že sa nikde
            nepoužíva.
          </Text>

          <Text>
            Pôvodná dokumentácia používala knižničný{' '}
            <code className={codeClass}>ArticleCard</code> z{' '}
            <code className={codeClass}>@eslovensko/idsk-react</code> a zároveň
            mala v ukážkach natvrdo vložený markup karty. Nový komponent tieto
            vzory zjednocuje.
          </Text>
        </div>
      </SectionBlock>
    </div>
  );
};

export default TabImplementacia;