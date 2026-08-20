'use client';

import React from 'react';

import ArticleCard from '@/app/(home)/_components/article/articleCard';

import {
  SectionBlock,
  H3,
  Text,
  ExampleBlock,
} from '@/app/(home)/_components/content-blocks/ContentBlocks';

const TabVarianty = () => (
  <div className="animate-fade-in text-black w-full min-w-0">
    <SectionBlock titleString="Varianty a stavy">
      <H3>1. Vertikálna kartička bez obrázka</H3>

      <Text className="mb-4">
        Vertikálna kartička bez obrázka obsahuje nadpis a krátky popis. Celá plocha
        kartičky je klikateľná. Kartičku bez obrázka použite vtedy, keď obrázok nepridáva používateľovi
        žiadnu hodnotu alebo by zbytočne zahlcoval zoznam.
      </Text>

      <ExampleBlock className="mt-4" innerClassName="max-w-[400px]">
        <ArticleCard
          href="/komponenty/karticka"
          orientation="vertical"
          title="Nadpis kartičky"
          description="Tento text slúži iba ako ukážka naplneného obsahu v danom komponente."
          date="1.12.2025"
        />
      </ExampleBlock>

      <H3>2. Horizontálna kartička bez obrázka</H3>

      <Text className="mb-4">
        Horizontálnu krtičku bez obrázka použite vtedy, keď obrázok nepridáva používateľovi
        žiadnu hodnotu alebo by zbytočne zahlcoval zoznam.
      </Text>

      <ExampleBlock className="mt-4" innerClassName="max-w-[800px]">
        <ArticleCard
          href="/komponenty/karticka"
          orientation="horizontal"
          title="Nadpis kartičky"
          description="Tento text slúži iba ako ukážka naplneného obsahu v danom komponente."
          date="1.12.2025"
        />
      </ExampleBlock>

      <H3>3. Vertikálna kartička s obrázkom</H3>

      <Text className="mb-4">
        Vertikálna kartička obsahuje obrázok, nadpis a krátky popis. 
      </Text>

      <ExampleBlock className="mt-4" innerClassName="max-w-[400px]">
        <ArticleCard
          href="/komponenty/karticka"
          orientation="vertical"
          src="/images/co-je-cards/10-principov-idsk.svg"
          alt=""
          title="Nadpis kartičky"
          description="Tento text slúži iba ako ukážka naplneného obsahu v danom komponente."
        />
      </ExampleBlock>

      <H3>4. Horizontálna kartička s obrázkom</H3>

      <Text className="mb-4">
        Horizontálna kartička obsahuje obrázok, nadpis a krátky popis. 
      </Text>

      <ExampleBlock className="mt-4" innerClassName="max-w-[800px]">
        <ArticleCard
          href="/komponenty/karticka"
          orientation="horizontal"
          src="/images/co-je-cards/10-principov-idsk.svg"
          alt=""
          title="Nadpis kartičky"
          description="Tento text slúži iba ako ukážka naplneného obsahu v danom komponente."
        />
      </ExampleBlock>

      <H3>5. Vertikálna kartička s obrázkom a príliš dlhým nadpisom</H3>

      <Text className="mb-4">
        Pri dlhších nadpisoch komponent obmedzuje počet riadkov, aby si zoznam
        kartičiek zachoval konzistentnú výšku a čitateľnosť.
      </Text>

      <ExampleBlock className="mt-4" innerClassName="max-w-[400px]">
        <ArticleCard
          href="/komponenty/karticka"
          src="/images/co-je-cards/10-principov-idsk.svg"
          alt=""
          title="Základné informácie o používaní elektronických služieb verejnej správy"
          description="Stručný prehľad povinností, možností a odporúčaní pri používaní elektronických služieb."
        />
      </ExampleBlock>

      <H3>6. Skupina kartičiek</H3>

      <Text className="mb-4">
        Kartičky sa často používajú v skupinách. V takom prípade dbajte na
        konzistentnú dĺžku nadpisov, popisov a primeraný počet položiek.
      </Text>

      <ExampleBlock className="mt-4" innerClassName="max-w-[900px]">
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          <ArticleCard
            href="/komponenty/karticka"
            src="/images/co-je-cards/10-principov-idsk.svg"
            alt=""
            title="Základné informácie"
            description="Prehľad základných povinností a odporúčaní."
          />

          <ArticleCard
            href="/komponenty/karticka"
            src="/images/co-je-cards/10-principov-idsk.svg"
            alt=""
            title="Elektronické služby"
            description="Informácie o používaní služieb verejnej správy online."
          />

          <ArticleCard
            href="/komponenty/karticka"
            src="/images/co-je-cards/10-principov-idsk.svg"
            alt=""
            title="Kontakty a pomoc"
            description="Možnosti podpory a kontaktné miesta pre používateľov."
          />
        </div>
      </ExampleBlock>
    </SectionBlock>
  </div>
);

export default TabVarianty;