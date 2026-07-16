'use client';

import React from 'react';

import InformationBanner from '@/app/(home)/_components/information-banner/informationBannerCustom';
import ButtonCustom from '@/app/(home)/_components/button/buttonCustom';



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

      <Text className="mb-8">
        Všetky informačné lišty v ukážkach na tejto stránke sú statické a slúžia
        iba na demonštráciu vizuálnych variantov komponentu. Z tohto dôvodu používajú
        <code className="bg-neutral-100 border border-neutral-200 font-mono text-sm px-1.5 py-0.5 rounded text-black">
          role=&quot;region&quot;
        </code>{' '}
        a sú pomenované viditeľným nadpisom lišty. Ak sa informačná lišta zobrazí
        dynamicky ako reakcia na akciu používateľa, vhodná rola závisí od významu
        správy. Viac o použití rolí nájdete v časti Prístupnosť.
      </Text>

      <H3>1. Informačný typ</H3>

      <Text className="mb-4">
        Informačný typ má informačnú funkciu a slúži na zvýraznenie všeobecnej
        alebo doplnkovej informácie.
      </Text>

      <div className={exampleWrapperClass}>
        <div className="flex flex-col gap-6 w-full max-w-[600px] px-4">
          <InformationBanner
            title="Príklad komponentu informačná lišta"
            ariaLabel="Oznam"
            type="banner"
            variant="information"
            hideCloseButton={true}
          >
            <p>
              Pre rýchlejšie vybavenie žiadosti odporúčame priložiť doklad o
              ukončení štúdia.
            </p>
          </InformationBanner>
        </div>
      </div>

      <H3>2. Varovný typ</H3>

      <Text className="mb-4">
        Varovný typ má najvyššiu výstražnú funkciu. Používa sa pri kritických
        informáciách, ktoré môžu používateľovi brániť v dokončení akcie.
      </Text>

      <div className={exampleWrapperClass}>
        <div className="flex flex-col gap-6 w-full max-w-[600px] px-4">
          <InformationBanner
            title="Príklad komponentu varovná lišta"
            ariaLabel="Chyba"
            type="banner"
            variant="alert"
            hideCloseButton={true}
          >
            <p>
              Žiadosť nie je možné odoslať, pretože chýbajú povinné údaje.
              Skontrolujte formulár a doplňte chýbajúce informácie.
            </p>
          </InformationBanner>
        </div>
      </div>

      <H3>3. Upozorňovací typ</H3>

      <Text className="mb-4">
        Upozorňovací typ vyžaduje zvýšenú pozornosť používateľa. Je vhodný tam,
        kde informácia môže ovplyvniť výber alebo ďalší postup používateľa.
      </Text>

      <div className={exampleWrapperClass}>
        <div className="flex flex-col gap-6 w-full max-w-[600px] px-4">
          <InformationBanner
            title="Príklad komponentu upozorňovacia lišta"
            ariaLabel="Upozornenie"
            type="banner"
            variant="warning"
            hideCloseButton={true}
          >
            <p>
              Ak prílohy nenahráte v tejto žiadosti, bude potrebné ich doložiť
              dodatočne elektronicky alebo osobne.
            </p>
          </InformationBanner>
        </div>
      </div>

      <H3>4. Úspešný typ</H3>

      <Text className="mb-4">
        Úspešný typ informuje o úspešnom dokončení čiastkovej akcie a potvrdzuje
        správnosť kroku.
      </Text>

      <div className={exampleWrapperClass}>
        <div className="flex flex-col gap-6 w-full max-w-[600px] px-4">
          <InformationBanner
            title="Príklad komponentu úspešná lišta"
            ariaLabel="Úspech"
            type="banner"
            variant="success"
            hideCloseButton={true}
          >
            <p>
              Formulár bol úspešne uložený. Vypĺňanie môžete dokončiť neskôr.
            </p>
          </InformationBanner>
        </div>
      </div>

      <H3>5. Informačná lišta s tlačidlom</H3>

      <Text className="mb-4">
        Informačná lišta môže využívať aj tlačidlo ktoré umožní používateľovi vykonať požadovanú akciu.
      </Text>

      <div className={exampleWrapperClass}>
        <div className="flex flex-col gap-6 w-full max-w-[600px] px-4">
          <InformationBanner
            title="Dôležitá informácia"
            ariaLabel="Dôležitá informácia"
            type="banner"
            variant="information"
            hideCloseButton={true}
            actionButton={
            <ButtonCustom
              href="/kontakt"
              variant="tertiary"
              status="basic"
              size="medium"
            >
              Akcia
            </ButtonCustom>
            }
          >
            <p>
              Služba bude dočasne nedostupná v sobotu od 22:00 do 23:30.
            </p>
          </InformationBanner>
        </div>
      </div>
    </SectionBlock>
  </div>
);

export default TabVarianty;