'use client';

import React from 'react';
import Block from '@/app/(home)/_components/focus/block';
import Image from 'next/image';


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
        <h4 className="mt-8 text-xl font-bold tracking-normal leading-custom-26 text-black max-md:max-w-full">Hypertextový odkaz</h4>
        <Image
                src="/images/focus/hypertextovy-odkaz.svg"
                width={375}
                height={520}
                quality={100}
                alt="hypertextovy odkaz"
                className='mt-8 mb-16'
            />
        <h4 className="mt-8 text-xl font-bold tracking-normal leading-custom-26 text-black max-md:max-w-full">Tlačidlo</h4>
          <Image
                src="/images/focus/tlacidlo.svg"
                width={375}
                height={520}
                quality={100}
                alt="tlacidlo"
                className='mt-8 mb-16'
            />
             <h4 className="mt-8 text-xl font-bold tracking-normal leading-custom-26 text-black max-md:max-w-full">Zaškrtávacie pole</h4>
          <Image
                src="/images/focus/zaskrtavacie-pole.svg"
                width={375}
                height={520}
                quality={100}
                alt="zaskrtavacie pole"
                className='mt-8 mb-16'
            />
             <h4 className="mt-8 text-xl font-bold tracking-normal leading-custom-26 text-black max-md:max-w-full">Prepínacie pole</h4>
          <Image
                src="/images/focus/prepinacie-pole.svg"
                width={375}
                height={520}
                quality={100}
                alt="prepinacie pole"
                className='mt-8 mb-16'
            />
            <h4 className="mt-8 text-xl font-bold tracking-normal leading-custom-26 text-black max-md:max-w-full">Textové pole</h4>
          <Image
                src="/images/focus/textove-pole.svg"
                width={500}
                height={520}
                quality={100}
                alt="textove pole"
                className='mt-8 mb-16'
            />
         <h4 className="mt-8 text-xl font-bold tracking-normal leading-custom-26 text-black max-md:max-w-full">Viacriadkové textové pole</h4>
          <Image
                src="/images/focus/viacriadkove-textove-pole.svg"
                width={800}
                height={520}
                quality={100}
                alt="viacriadkove textove pole"
                className='mt-8 mb-16'
            />
              <h4 className="mt-8 text-xl font-bold tracking-normal leading-custom-26 text-black max-md:max-w-full">Viacriadkové textové pole</h4>
          <Image
                src="/images/focus/viacriadkove-textove-pole.svg"
                width={800}
                height={520}
                quality={100}
                alt="viacriadkove textove pole"
                className='mt-8 mb-16'
            />
           <h4 className="mt-8 text-xl font-bold tracking-normal leading-custom-26 text-black max-md:max-w-full">Kartička</h4>
          <Image
                src="/images/focus/karticka.svg"
                width={800}
                height={520}
                quality={100}
                alt="karticka"
                className='mt-8 mb-16'
            />
             <h4 className="mt-8 text-xl font-bold tracking-normal leading-custom-26 text-black max-md:max-w-full">Rázcestník</h4>
          <Image
                src="/images/focus/razcestnik.svg"
                width={375}
                height={520}
                quality={100}
                alt="razcestnik"
                className='mt-8 mb-16'
            />
           <h4 className="mt-8 text-xl font-bold tracking-normal leading-custom-26 text-black max-md:max-w-full">Omrvinková navigácia</h4>
          <Image
                src="/images/focus/omrvinkova-navigacia.svg"
                width={575}
                height={520}
                quality={100}
                alt="omrvinkova navigacia"
                className='mt-8 mb-16'
            />
             <h4 className="mt-8 text-xl font-bold tracking-normal leading-custom-26 text-black max-md:max-w-full">Záhlavie</h4>
          <Image
                src="/images/focus/zahlavie.svg"
                width={375}
                height={520}
                quality={100}
                alt="zahlavie"
                className='mt-8 mb-14'
            />
      </section>
      <section aria-labelledby="focus-pseudo-class">
        <h2 id="focus-pseudo-class" className="text-4xl leading-custom-45 font-black text-black mt-2">
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
