'use client';

import React from 'react';

import BreadcrumbExample from '@/app/(home)/_components/focus/breadcrumb';
import ButtonExample from '@/app/(home)/_components/focus/button';
import CardExample from '@/app/(home)/_components/focus/card';
import CheckboxExample from '@/app/(home)/_components/focus/checkbox';
import Block from '@/app/(home)/_components/focus/block';
import CrossExample from '@/app/(home)/_components/focus/cross';
import FocusSection from '@/app/(home)/_components/focus/focusSection';
import HeaderExample from '@/app/(home)/_components/focus/headerFocus';
import HypertextExample from '@/app/(home)/_components/focus/hypertext';
import RadioExample from '@/app/(home)/_components/focus/radio';
import TextAreaExample from '@/app/(home)/_components/focus/textArea';
import TextFieldExample from '@/app/(home)/_components/focus/textField';


const FocusPage = () => {
  return (
    <main
      id="main-content"
      role="main"
      className="flex flex-col pb-8 my-8 max-w-[1000px]"
    >
      <title>Zameranie klávesnicou (Focus)</title>
      <header>
        <h1 className="w-full text-5xl font-black text-black leading-[55.2px] max-md:max-w-full max-md:text-4xl">
          Zameranie klávesnicou (Focus)
        </h1>
      </header>
      <section aria-labelledby="intro">
        <h2 id="intro" className="sr-only">
          Úvod
        </h2>
        <p className="mt-5 w-full text-2xl tracking-normal leading-9 text-black max-md:max-w-full">
          Používateľ, ktorý používa klávesnicu ako svoje primárne vstupné
          zariadenie, sa naviguje po webovej stránke tak, že preskakuje z
          jedného interaktívneho prvku na druhý. Vidiaci používateľ klávesnice
          preto potrebuje mať k dispozícii viditeľné zameranie (focus), ktoré mu
          pomáha určiť, na ktorom prvku sa momentálne nachádza a s ktorým môže
          interagovať.
        </p>
        <p className="mt-8 w-full text-custom-19 tracking-wide leading-7 text-black max-md:max-w-full">
          V štandarde pre dizajnový manuál je zameranie pri navigácii pomocou
          klávesnice (focus) navrhnuté tak, aby spĺňalo požiadavky na kontrast
          pre netextové prvky (Kritérium úspešnosti 1.4.11 Kontrast netextových
          prvkov z WCAG 2.1).
        </p>
      </section>
      <section aria-labelledby="focus-style">
        <h2 id="focus-style" className="text-4xl leading-custom-45 font-black text-black mt-8">
          Štýl zamerania
        </h2>
        <p className="mt-5 w-full text-custom-19 tracking-wide leading-7 text-black max-md:max-w-full">
          Komponent s aktívnou plochou označuje svoj zameraný stav orámovaním s
          hrúbkou 3 px, ktoré je umiestnené vo vzdialenosti 2 px od komponentu.
          Komponent s aktívnou plochou na svetlom pozadí označuje svoj zameraný
          stav oranžovým orámovaním (#D96E00), v záhlaví na tmavom pozadí
          bielym orámovaním (#FFF).
        </p>
        <h3 className="mt-8 text-2xl font-bold leading-custom-35 text-black max-md:max-w-full">
          Príklady použitia
        </h3>
        <FocusSection
          examples={[
            { title: 'Hypertextový odkaz', component: <HypertextExample /> },
            { title: 'Tlačidlo', component: <ButtonExample /> },
            { title: 'Zaškrtávacie pole', component: <CheckboxExample /> },
            { title: 'Prepínacie pole', component: <RadioExample /> },
            { title: 'Textové pole', component: <TextFieldExample /> },
            { title: 'Viacriadkové textové pole', component: <TextAreaExample /> },
            { title: 'Kartička', component: <CardExample /> },
            { title: 'Rázcestník', component: <CrossExample /> },
            { title: 'Omrvinková navigácia', component: <BreadcrumbExample /> },
            { title: 'Záhlavie (tmavé pozadie)', component: <HeaderExample /> },
          ]}
        />
      </section>
      <section aria-labelledby="focus-pseudo-class">
        <h2 id="focus-pseudo-class" className="text-4xl leading-custom-45 font-black text-black mt-8">
          Pseudo trieda focus
        </h2>
        <p className="mt-5 w-full text-custom-19 tracking-wide leading-7 text-black max-md:max-w-full">
          Pseudo triedy využívame na definovanie špeciálneho stavu prvku. CSS
          pseudo-trieda :focus slúži na štýlovanie komponentu, ktorý je aktuálne
          zameraný pomocou klávesnice, teda je v stave `focus` (zameraný).
          Typickým príkladom komponentu, ktorý môže byť v stave focus, je
          formulárový prvok, napríklad textové pole alebo tlačidlo.
        </p>
        <h3 className="mt-8 text-2xl font-bold leading-custom-35 text-black max-md:max-w-full">
          Príklad použitia
        </h3>
        <p className="mt-5 w-full text-custom-19 tracking-wide leading-7 text-black max-md:max-w-full">
          Ukážka štýlu pre viditeľné zameranie pomocou klávesnice, ktoré sa
          aplikuje na všetky zamerateľné prvky na webovom sídle.
        </p>
        <Block>
          {`:focus {
              outline: 2px solid #D96E00;
              outline-offset: 3px;
              background-color: transparent;
            }`}
        </Block>
        <p className="mt-5 w-full text-custom-19 tracking-wide leading-7 text-black max-md:max-w-full">
          Záhlavie, tmavé pozadie:
        </p>
        <Block>
          {`:focus {
              outline: 2px solid #FFF;
              outline-offset: 3px;
              background-color: transparent;
            }`}
        </Block>
      </section>
    </main>
  );
};

export default FocusPage;
