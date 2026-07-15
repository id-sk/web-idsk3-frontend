'use client';

import React from 'react';

import BreadcrumbCustom from '@/app/(home)/_components/breadcrumbs/breadcrumbCustom';

import {
  SectionBlock,
  H3,
  Text,
} from '@/app/(home)/_components/content-blocks/ContentBlocks';

const exampleWrapperClass =
  'flex flex-col items-center gap-6 py-10 border-2 border-dashed border-[#9e9e9e] rounded-[10px] mb-8 mt-4';

const TabVarianty = () => (
  <div className="animate-fade-in text-black w-full min-w-0">
    <SectionBlock titleString="Varianty a stavy">
      <H3>1. Základný stav</H3>

      <Text className="mb-4">
        Základný stav zobrazuje odkaz na vyššiu úroveň a aktuálnu stránku.
        Aktuálna stránka nie je klikateľná a má byť označená ako aktuálna.
      </Text>

      <div className={exampleWrapperClass}>
        <div className="w-full max-w-[600px] px-4">
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
        </div>
      </div>

      <H3>2. Základný stav s ikonkou</H3>

      <Text className="mb-4">
        Základný stav s ikonkou namiesto Domov.
      </Text>

      <div className={exampleWrapperClass}>
        <div className="w-full max-w-[600px] px-4">
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
        </div>
      </div>

      <H3>2. Viacúrovňová omrvinková navigácia</H3>

      <Text className="mb-4">
        Pri viacúrovňovej štruktúre zobrazte jednotlivé úrovne od všeobecnejšej
        po konkrétnejšiu stránku. Nepoužívajte príliš dlhé názvy položiek.
      </Text>

      <div className={exampleWrapperClass}>
        <div className="w-full max-w-[600px] px-4">
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
                href: '/komponenty/navigacia',
                label: 'Navigácia',
              },
              {
                label: 'Omrvinková navigácia',
                current: true,
              },
            ]}
          />
        </div>
      </div>

      <H3>3. Dlhšia navigácia</H3>

      <Text className="mb-4">
        Pri dlhších omrvinkách musí komponent zvládnuť zalomenie na viac riadkov
        bez straty čitateľnosti a bez prekrytia položiek.
      </Text>

      <div className={exampleWrapperClass}>
        <div className="w-full max-w-[600px] px-4">
          <BreadcrumbCustom
            items={[
              {
                href: '/',
                label: 'Úvod',
              },
              {
                href: '/sluzby',
                label: 'Služby',
              },
              {
                href: '/sluzby/podnikanie',
                label: 'Podnikanie',
              },
              {
                href: '/sluzby/podnikanie/registre',
                label: 'Registre',
              },
              {
                label: 'Výpis z registra',
                current: true,
              },
            ]}
          />
        </div>
      </div>

      <H3>4. Mobilné zobrazenie</H3>

      <Text className="mb-4">
        Pri malých šírkach obrazovky môže komponent zobraziť zjednodušenú
        navigáciu alebo zalomený zoznam. Dôležité je, aby používateľ nestratil
        kontext a mal dostupnú cestu na vyššiu úroveň.
      </Text>

      <div className={exampleWrapperClass}>
        <div className="w-full max-w-[360px] px-4">
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
        </div>
      </div>
    </SectionBlock>
  </div>
);

export default TabVarianty;