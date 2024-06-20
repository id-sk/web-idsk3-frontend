'use client'

import React from "react";


const UvodPage = () => {
  return (
    <div className="flex flex-col my-8 max-w-[835px]">
      <header>
        <h1 className="text-5xl font-black text-black leading-[55.2px] max-md:mr-1 max-md:max-w-full max-md:text-4xl">
          Úvod
        </h1>
      </header>
      <p className="mt-8 text-xl tracking-wide leading-7 text-black max-md:mr-1 max-md:max-w-full">
        Požiadavka zjednotenia elektronických služieb vyplýva z Národnej
        koncepcie informatizácie verejnej správy z roku 2016. Bol navrhnutý v
        spolupráci s odbornou verejnosťou a pracovnými skupinami Komisie pre
        štandardizáciu informačných systémov verejnej správy. Pravidlá a
        prístupy uvedené v ID-SK sú tvorené tak, aby využívanie elektronických
        služieb bolo pre verejnosť jednoduchšie, a aby pomáhalo predchádzať
        bežným problémom.
      </p>
      <p className="mt-8 text-xl tracking-wide leading-7 text-black max-md:mr-1 max-md:max-w-full">
        ID-SK je súbor pravidiel tvorby obsahu a funkčnosti elektronických
        služieb v súlade s potrebami používateľov. Definuje komponenty, jednotné
        používanie výrazov, princípy, vzory a pravidlá pre tvorbu jednotného
        používateľského rozhrania. Jeho účelom je jednotný spôsob komunikácie s
        používateľom elektronických služieb v celej verejnej správe.
      </p>
      <p className="mt-8 text-xl tracking-wide leading-7 text-black max-md:mr-1 max-md:max-w-full">
        ID-SK zohľadňuje používanie rôznych technických prostriedkov (PC, mobil,
        tablet) a zároveň dbá aj na prípadné využitie asistenčných informačných
        technológii (napr. čítač). Tento manuál bol tvorený tak, aby služby,
        ktoré budú poskytované v jeho dizajne boli jednoduché, zrozumiteľné a
        ľahko dostupné pre všetky vekové kategórie. Zároveň poskytuje praktické
        tipy, ktoré pomôžu poskytovateľom zjednodušiť komplikované formuláre.
        ID-SK je verejne dostupný na voľné použitie pre všetkých tvorcov
        elektronických služieb spolu s poskytnutím zdrojového kódu.
      </p>
      <p className="mt-8 text-xl tracking-wide leading-7 text-black max-md:mr-1 max-md:max-w-full">
        ID-SK je metodickým usmernením, pre všetkých poskytovateľov pri tvorbe
        nových a súčasne pri pretváraní existujúcich elektronických služieb a to
        tak, aby bol postupne naplnený jeho cieľ zjednotenia tvorby všetkých
        elektronických služieb verejnej správy.
      </p>
      <p className="mt-8 text-xl tracking-wide leading-7 text-black max-md:mr-1 max-md:max-w-full">
        ID-SK je verejne dostupný a je zverejnený na webovom sídle Ministerstva
        investícií, regionálneho rozvoja a infromatizácie SR.
      </p>
      <p className="mt-8 text-xl tracking-wide leading-7 text-black max-md:mr-1 max-md:max-w-full">
        Súčasťou manuálu je aj vzorový programový kód. Pozrite si, ako začať s
        vývojom.
      </p>
      <h2 className="mt-8 text-4xl tracking-wide leading-7 text-black max-md:mr-1 max-md:max-w-full">
        Na čo slúži ID-SK a na čo nie
      </h2>
      <p className="mt-8 text-xl tracking-wide leading-7 text-black max-md:mr-1 max-md:max-w-full">
        ID-SK vznikol najmä za účelom zaistenia konzistentnosti dizajnu
        používateľských rozhraní elektronických služieb a webových sídiel
        slovenského e-Governmentu. Bez jeho existencie by služby pôsobili
        nekonzistentne a zmätočne, občania by služby nepovažovali za dostatočne
        kredibilné. Zároveň definuje štandardy kvality dizajnu, zdrojového kódu
        a prístupnosti. Dizajn manuál poskytuje predpripravené komponenty, ktoré
        sú:
        <br />
        responzívne - teda správne sa zobrazujú na rôznych veľkostiach
        obrazoviek;
        <br />
        prístupné - sú použiteľné pre skupiny používateľov so zníženou
        motorickou alebo zrakovou schopnosťou;
        <br />
        použiteľné - implementujú základné heuristiky (best practice)
        použiteľnosti.
        <br />
        <br />
        ID-SK nemá ambíciu nahradiť celý dizajnový proces. Je návodom a určuje
        štandardy a pravidlá pre zostavovanie používateľských rozhraní. Pomocou
        ID-SK vytvoríte kvalitné používateľské rozhranie, ale už nezabezpečíte,
        aký používateľský zážitok (User Experience) bude služba poskytovať. Aby
        ste zabezpečili kvalitný používateľský zážitok, musíte do procesu tvorby
        elektronickej služby zahrnúť metodiku UCD – User-centered Design.
      </p>
    </div>
  );
}

export default UvodPage;