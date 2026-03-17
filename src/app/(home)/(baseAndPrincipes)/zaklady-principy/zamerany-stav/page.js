'use client';

import React from 'react';
import Image from 'next/image';

const FocusPage = () => {
  return (
    <main
      id="main-content"
      role="main"
      className="flex flex-col pb-8 my-8 max-w-[1000px] px-4 sm:px-0 text-black"
    >
      <title>Zameranie klávesnicou (Focus)</title>
      <header>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
          Zameranie klávesnicou (Focus)
        </h1>
      </header>

      <section aria-labelledby="intro">
        <h2 id="intro" className="sr-only">
          Úvod
        </h2>
        <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-6">
          Používateľ, ktorý používa klávesnicu ako svoje primárne vstupné
          zariadenie, sa naviguje po webovej stránke tak, že preskakuje z
          jedného interaktívneho prvku na druhý. Vidiaci používateľ klávesnice
          preto potrebuje mať k dispozícii viditeľné zameranie (focus), ktoré mu
          pomáha určiť, na ktorom prvku sa momentálne nachádza a s ktorým môže
          interagovať.
        </p>
        <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-12">
          V štandarde pre dizajnový manuál je zameranie pri navigácii pomocou
          klávesnice (focus) navrhnuté tak, aby spĺňalo požiadavky na kontrast
          pre netextové prvky (Kritérium úspešnosti 1.4.11 Kontrast netextových
          prvkov z WCAG 2.1).
        </p>
      </section>

      <section aria-labelledby="focus-style">
        <h2 id="focus-style" className="text-xl sm:text-2xl font-bold tracking-wide text-black mb-4 mt-8">
          Štýl zamerania
        </h2>
        <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-8">
          Komponent s aktívnou plochou označuje svoj zameraný stav orámovaním s
          hrúbkou 3 px, ktoré je umiestnené vo vzdialenosti 2 px od komponentu.
          Komponent s aktívnou plochou na svetlom pozadí označuje svoj zameraný
          stav oranžovým orámovaním (#D96E00), v záhlaví na tmavom pozadí
          bielym orámovaním (#FFF).
        </p>

        <h3 className="text-lg sm:text-xl font-bold text-black mb-8 mt-12">
          Príklady použitia
        </h3>

        <h4 className="text-base sm:text-lg font-bold text-black mb-4 mt-8">Hypertextový odkaz</h4>
        <Image
          src="/images/focus/hypertextovy-odkaz.svg"
          width={375}
          height={150}
          quality={100}
          alt="Ukážka focusu na hypertextovom odkaze"
          className="w-full max-w-[375px] h-auto mb-16 border border-gray-200 rounded shadow-sm bg-white"
        />

        <h4 className="text-base sm:text-lg font-bold text-black mb-4 mt-8">Tlačidlo</h4>
        <Image
          src="/images/focus/tlacidlo.svg"
          width={375}
          height={150}
          quality={100}
          alt="Ukážka focusu na tlačidle"
          className="w-full max-w-[375px] h-auto mb-16 border border-gray-200 rounded shadow-sm bg-white"
        />

        <h4 className="text-base sm:text-lg font-bold text-black mb-4 mt-8">Zaškrtávacie pole</h4>
        <Image
          src="/images/focus/zaskrtavacie-pole.svg"
          width={375}
          height={150}
          quality={100}
          alt="Ukážka focusu pre zaškrtávacie pole"
          className="w-full max-w-[375px] h-auto mb-16 border border-gray-200 rounded shadow-sm bg-white"
        />

        <h4 className="text-base sm:text-lg font-bold text-black mb-4 mt-8">Prepínacie pole</h4>
        <Image
          src="/images/focus/prepinacie-pole.svg"
          width={375}
          height={150}
          quality={100}
          alt="Ukážka focusu pre prepínacie pole"
          className="w-full max-w-[375px] h-auto mb-16 border border-gray-200 rounded shadow-sm bg-white"
        />

        <h4 className="text-base sm:text-lg font-bold text-black mb-4 mt-8">Textové pole</h4>
        <Image
          src="/images/focus/textove-pole.svg"
          width={500}
          height={150}
          quality={100}
          alt="Ukážka focusu pre textové pole"
          className="w-full max-w-[500px] h-auto mb-16 border border-gray-200 rounded shadow-sm bg-white"
        />

        <h4 className="text-base sm:text-lg font-bold text-black mb-4 mt-8">Viacriadkové textové pole</h4>
        <Image
          src="/images/focus/viacriadkove-textove-pole.svg"
          width={800}
          height={300}
          quality={100}
          alt="Ukážka focusu pre viacriadkové textové pole"
          className="w-full h-auto mb-16 border border-gray-200 rounded shadow-sm bg-white"
        />

        <h4 className="text-base sm:text-lg font-bold text-black mb-4 mt-8">Kartička</h4>
        <Image
          src="/images/focus/karticka.svg"
          width={800}
          height={300}
          quality={100}
          alt="Ukážka focusu pre kartičku"
          className="w-full h-auto mb-16 border border-gray-200 rounded shadow-sm bg-white"
        />

        <h4 className="text-base sm:text-lg font-bold text-black mb-4 mt-8">Rázcestník</h4>
        <Image
          src="/images/focus/razcestnik.svg"
          width={375}
          height={150}
          quality={100}
          alt="Ukážka focusu pre rázcestník"
          className="w-full max-w-[375px] h-auto mb-16 border border-gray-200 rounded shadow-sm bg-white"
        />

        <h4 className="text-base sm:text-lg font-bold text-black mb-4 mt-8">Omrvinková navigácia</h4>
        <Image
          src="/images/focus/omrvinkova-navigacia.svg"
          width={575}
          height={150}
          quality={100}
          alt="Ukážka focusu pre omrvinkovú navigáciu"
          className="w-full max-w-[575px] h-auto mb-16 border border-gray-200 rounded shadow-sm bg-white"
        />

        <h4 className="text-base sm:text-lg font-bold text-black mb-4 mt-8">Záhlavie</h4>
        <Image
          src="/images/focus/zahlavie.svg"
          width={375}
          height={150}
          quality={100}
          alt="Ukážka focusu pre záhlavie"
          className="w-full max-w-[375px] h-auto mb-14 border border-gray-200 rounded shadow-sm bg-white"
        />
      </section>

      <section aria-labelledby="focus-pseudo-class">
        <h2 id="focus-pseudo-class" className="text-xl sm:text-2xl font-bold tracking-wide text-black mb-4 mt-12">
          Pseudo trieda focus
        </h2>
        <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-8">
          Pseudo triedy využívame na definovanie špeciálneho stavu prvku. CSS
          pseudo-trieda <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">:focus</code> slúži na štýlovanie komponentu, ktorý je aktuálne
          zameraný pomocou klávesnice, teda je v stave <code className="bg-gray-200 font-mono text-sm px-1.5 py-0.5 rounded text-gray-800">focus</code> (zameraný).
          Typickým príkladom komponentu, ktorý môže byť v stave focus, je
          formulárový prvok, napríklad textové pole alebo tlačidlo.
        </p>

        <h3 className="text-lg sm:text-xl font-bold text-black mb-4 mt-8">
          Príklad použitia
        </h3>
        <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-4">
          Ukážka štýlu pre viditeľné zameranie pomocou klávesnice, ktoré sa
          aplikuje na všetky zamerateľné prvky na webovom sídle.
        </p>
        
        {/* Prvá ukážka CSS kódu */}
        <div className="my-8 w-full max-w-full overflow-hidden bg-[#f3f2f1] border border-[#bfc1c3] rounded-sm">
            <div className="bg-[#dee0e2] px-4 py-2 border-b border-[#bfc1c3] flex justify-between items-center">
                <span className="text-sm font-bold text-[#0b0c0c] font-mono">Ukážka CSS štruktúry</span>
                <span className="text-xs text-[#505a5f]">style.css</span>
            </div>
            <pre className="p-4 overflow-x-auto text-sm sm:text-base leading-6 text-[#0b0c0c] font-mono whitespace-pre-wrap break-words">
{`:focus {
    outline: 2px solid #D96E00;
    outline-offset: 3px;
    background-color: transparent;
}`}
            </pre>
        </div>

        <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-4 mt-8">
          Záhlavie, tmavé pozadie:
        </p>
        
        {/* Druhá ukážka CSS kódu */}
        <div className="my-8 w-full max-w-full overflow-hidden bg-[#f3f2f1] border border-[#bfc1c3] rounded-sm">
            <div className="bg-[#dee0e2] px-4 py-2 border-b border-[#bfc1c3] flex justify-between items-center">
                <span className="text-sm font-bold text-[#0b0c0c] font-mono">Ukážka CSS štruktúry</span>
                <span className="text-xs text-[#505a5f]">style.css</span>
            </div>
            <pre className="p-4 overflow-x-auto text-sm sm:text-base leading-6 text-[#0b0c0c] font-mono whitespace-pre-wrap break-words">
{`:focus {
    outline: 2px solid #FFF;
    outline-offset: 3px;
    background-color: transparent;
}`}
            </pre>
        </div>
      </section>
    </main>
  );
};

export default FocusPage;