'use client'

import React from "react";

const UvodPage = () => {
  return (
    <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0">
      <title>Úvod</title>
      
      <header>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px]">
          Úvod
        </h1>
      </header>
      
      <main id="main-content" role="main" className="mt-8">
        {/* Zvýraznený úvodný text (Perex) */}
        <p className="text-lg sm:text-xl font-bold tracking-wide leading-tight sm:leading-8 text-black">
          IDSK je súbor pravidiel tvorby obsahu a funkčnosti elektronických
          služieb v súlade s potrebami používateľov. Definuje komponenty, jednotné
          používanie výrazov, princípy, vzory a pravidlá pre tvorbu jednotného
          používateľského rozhrania. Jeho účelom je jednotný spôsob komunikácie s
          používateľom elektronických služieb v celej verejnej správe.
        </p>
        
        {/* Skupina štandardných odstavcov */}
        <div className="space-y-6 mt-6 text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black">
          <p>
            Požiadavka zjednotenia elektronických služieb vyplýva z Národnej
            koncepcie informatizácie verejnej správy z roku 2016. Bol navrhnutý v
            spolupráci s odbornou verejnosťou a pracovnými skupinami Komisie pre
            štandardizáciu informačných systémov verejnej správy. Pravidlá a
            prístupy uvedené v IDSK sú tvorené tak, aby využívanie elektronických
            služieb bolo pre verejnosť jednoduchšie, a aby pomáhalo predchádzať
            bežným problémom.
          </p>
          <p>
            IDSK zohľadňuje používanie rôznych technických prostriedkov (PC, mobil,
            tablet) a zároveň dbá aj na prípadné využitie asistenčných informačných
            technológií (napr. čítač). Tento manuál bol tvorený tak, aby služby,
            ktoré budú poskytované v jeho dizajne boli jednoduché, zrozumiteľné a
            ľahko dostupné pre všetky vekové kategórie. Zároveň poskytuje praktické
            tipy, ktoré pomôžu poskytovateľom zjednodušiť komplikované formuláre.
            IDSK je verejne dostupný na voľné použitie pre všetkých tvorcov
            elektronických služieb spolu s poskytnutím zdrojového kódu.
          </p>
          <p>
            IDSK je metodickým usmernením pre všetkých poskytovateľov pri tvorbe
            nových a súčasne pri pretváraní existujúcich elektronických služieb a to
            tak, aby bol postupne naplnený jeho cieľ zjednotenia tvorby všetkých
            elektronických služieb verejnej správy.
          </p>
          <p>
            IDSK je verejne dostupný a je zverejnený na webovom sídle Ministerstva
            investícií, regionálneho rozvoja a informatizácie SR.
          </p>
          <p>
            Súčasťou manuálu je aj vzorový programový kód. Pozrite si, ako začať s
            vývojom.
          </p>
        </div>

        {/* Sekcia: Na čo slúži IDSK a na čo nie */}
        <h2 className="mt-10 mb-6 text-xl sm:text-2xl font-bold tracking-wide text-black">
          Na čo slúži IDSK a na čo nie
        </h2>
        
        <div className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black">
          <p className="mb-4">
            IDSK vznikol najmä za účelom zaistenia konzistentnosti dizajnu
            používateľských rozhraní elektronických služieb a webových sídiel
            slovenského e-Governmentu. Bez jeho existencie by služby pôsobili
            nekonzistentne a zmätočne, občania by služby nepovažovali za dostatočne
            kredibilné. Zároveň definuje štandardy kvality dizajnu, zdrojového kódu
            a prístupnosti. Dizajn manuál poskytuje predpripravené komponenty, ktoré sú:
          </p>
          
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li><strong>responzívne</strong> – teda správne sa zobrazujú na rôznych veľkostiach obrazoviek,</li>
            <li><strong>prístupné</strong> – sú použiteľné pre skupiny používateľov so zníženou motorickou alebo zrakovou schopnosťou,</li>
            <li><strong>použiteľné</strong> – implementujú základné heuristiky <span lang="en">(best practice)</span> použiteľnosti.</li>
          </ul>
          
          <p>
            IDSK nemá ambíciu nahradiť celý dizajnový proces. Je návodom a určuje
            štandardy a pravidlá pre zostavovanie používateľských rozhraní. Pomocou
            IDSK vytvoríte kvalitné používateľské rozhranie, ale už nezabezpečíte,
            aký používateľský zážitok <span lang="en">(User Experience)</span> bude služba poskytovať. Aby
            ste zabezpečili kvalitný používateľský zážitok, musíte do procesu tvorby
            elektronickej služby zahrnúť metodiku <span lang="en">UCD – User-centered Design.</span>
          </p>
        </div>
      </main>
    </div>
  );
}

export default UvodPage;