'use client';

import React from 'react';

import BreadcrumbCustom from '@/app/(home)/_components/breadcrumbs/breadcrumbCustom';

import {
  SectionBlock,
  H3,
  Text,
  ExampleBlock,
} from '@/app/(home)/_components/content-blocks/ContentBlocks';

const TabVarianty = () => (
  <div className="animate-fade-in text-black w-full min-w-0">
    <SectionBlock titleString="Varianty a stavy">
      <H3>1. Základný stav</H3>

      <Text className="mb-4">
        Základný stav zobrazuje odkaz na vyššiu úroveň a aktuálnu stránku.
        Aktuálna stránka nie je klikateľná a má byť označená ako aktuálna.
      </Text>

      <ExampleBlock className="mt-4" innerClassName="max-w-[600px]">
        <BreadcrumbCustom
          items={[
            {
              href: '/komponenty',
              label: 'Komponenty',
            },
            {
              label: 'Omrvinková navigácia',
              current: true,
            },
          ]}
        />
      </ExampleBlock>

      <H3>2. Základný stav s ikonkou</H3>

      <Text className="mb-4">
        Základný stav s ikonkou namiesto Domov.
      </Text>

      <ExampleBlock className="mt-4" innerClassName="max-w-[600px]">
        <BreadcrumbCustom
          homeVariant="icon"
          items={[
            {
              href: '/komponenty',
              label: 'Komponenty',
            },
            {
              label: 'Omrvinková navigácia',
              current: true,
            },
          ]}
        />
      </ExampleBlock>

      <H3>3. Viacúrovňová omrvinková navigácia</H3>

      <Text className="mb-4">
        Pri viacúrovňovej štruktúre zobrazte jednotlivé úrovne od všeobecnejšej
        po konkrétnejšiu stránku. Nepoužívajte príliš dlhé názvy položiek.
      </Text>

      <ExampleBlock className="mt-4" innerClassName="max-w-[600px]">
        <BreadcrumbCustom
          items={[
            {
              href: '#',
              label: 'Domov',
            },
            {
              href: '#',
              label: 'Komponenty',
            },
            {
              href: '#',
              label: 'Navigácia',
            },
            {
              label: 'Omrvinková navigácia',
              current: true,
            },
          ]}
        />
      </ExampleBlock>

      <H3>4. Dlhšia navigácia</H3>

      <Text className="mb-4">
        Pri dlhších omrvinkách musí komponent zvládnuť zalomenie na viac riadkov
        bez straty čitateľnosti a bez prekrytia položiek.
      </Text>

      <ExampleBlock className="mt-4" innerClassName="max-w-[600px]">
        <BreadcrumbCustom
          items={[
            {
              href: '#',
              label: 'Úvod',
            },
            {
              href: '#',
              label: 'Služby',
            },
            {
              href: '#',
              label: 'Podnikanie',
            },
            {
              href: '#',
              label: 'Registre',
            },
            {
              label: 'Omrvinková navigácia',
              current: true,
            },
          ]}
        />
      </ExampleBlock>

      <H3>5. Mobilné zobrazenie</H3>

      <Text className="mb-4">
        Pri malých šírkach obrazovky môže komponent zobraziť zjednodušenú
        navigáciu alebo zalomený zoznam. Dôležité je, aby používateľ nestratil
        kontext a mal dostupnú cestu na vyššiu úroveň.
      </Text>

      <ExampleBlock className="mt-4" innerClassName="max-w-[360px]">
        <BreadcrumbCustom
          items={[
            {
              href: '/',
              label: 'Úvod',
            },
            {
              href: '/komponenty',
              label: 'Komponenty',
            },
            {
              label: 'Omrvinková navigácia',
              current: true,
            },
          ]}
          collapseOnMobile
        />
      </ExampleBlock>
    </SectionBlock>
  </div>
);

export default TabVarianty;