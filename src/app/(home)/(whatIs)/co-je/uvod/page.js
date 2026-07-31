// 1. Definovanie metadát (Server Component)
export const metadata = {
  title: 'Úvod | IDSK',
  description: 'Úvodné informácie o Jednotnom dizajn manuáli elektronických služieb (IDSK).',
};

import React from "react";

const generateId = (text) => {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
};

const Text = ({ children, className = "" }) => (
  <p className={`text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-6 ${className}`}>
    {children}
  </p>
);

const SectionBlock = ({ titleString, children }) => {
  const sectionId = generateId(titleString);

  return (
    <section aria-labelledby={sectionId} className="mt-10 scroll-mt-24">
      <h2 id={sectionId} className="mb-6 text-xl sm:text-2xl font-bold tracking-wide text-black">
        {titleString}
      </h2>
      <div className="space-y-4">
        {children}
      </div>
    </section>
  );
};

const Ul = ({ children }) => (
  <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-6">
    {children}
  </ul>
);


export default function UvodPage() {
  return (
    <div className="flex flex-col my-8 max-w-[1120px] px-4 sm:px-0">
      
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
        Úvod
      </h1>
      
      <div>
        <p className="text-lg sm:text-xl font-bold tracking-wide leading-tight sm:leading-8 text-black mb-6">
          IDSK je súbor pravidiel tvorby obsahu a funkčnosti elektronických
          služieb v súlade s potrebami používateľov. Definuje komponenty, jednotné
          používanie výrazov, princípy, vzory a pravidlá pre tvorbu jednotného
          používateľského rozhrania. Jeho účelom je jednotný spôsob komunikácie s
          používateľom elektronických služieb v celej verejnej správe.
        </p>
        
        <Text>
          Požiadavka zjednotenia elektronických služieb vyplýva z Národnej
          koncepcie informatizácie verejnej správy z roku 2016. Bol navrhnutý v
          spolupráci s odbornou verejnosťou a pracovnými skupinami Komisie pre
          štandardizáciu informačných systémov verejnej správy. Pravidlá a
          prístupy uvedené v IDSK sú tvorené tak, aby využívanie elektronických
          služieb bolo pre verejnosť jednoduchšie, a aby pomáhalo predchádzať
          bežným problémom.
        </Text>
        
        <Text>
          IDSK zohľadňuje používanie rôznych technických prostriedkov (PC, mobil,
          tablet) a zároveň dbá aj na prípadné využitie asistenčných informačných
          technológií (napr. čítač). Tento manuál bol tvorený tak, aby služby,
          ktoré budú poskytované v jeho dizajne boli jednoduché, zrozumiteľné a
          ľahko dostupné pre všetky vekové kategórie. Zároveň poskytuje praktické
          tipy, ktoré pomôžu poskytovateľom zjednodušiť komplikované formuláre.
          IDSK je verejne dostupný na voľné použitie pre všetkých tvorcov
          elektronických služieb spolu s poskytnutím zdrojového kódu.
        </Text>
        
        <Text>
          IDSK je metodickým usmernením pre všetkých poskytovateľov pri tvorbe
          nových a súčasne pri pretváraní existujúcich elektronických služieb a to
          tak, aby bol postupne naplnený jeho cieľ zjednotenia tvorby všetkých
          elektronických služieb verejnej správy.
        </Text>
        
        <Text>
          IDSK je verejne dostupný a je zverejnený na webovom sídle Ministerstva
          investícií, regionálneho rozvoja a informatizácie SR.
        </Text>
        
        <Text>
          Súčasťou manuálu je aj vzorový programový kód. Pozrite si, ako začať s
          vývojom.
        </Text>

        <SectionBlock titleString="Na čo slúži IDSK a na čo nie">
          <Text className="!mb-4">
            IDSK vznikol najmä za účelom zaistenia konzistentnosti dizajnu
            používateľských rozhraní elektronických služieb a webových sídiel
            slovenského e-Governmentu. Bez jeho existencie by služby pôsobili
            nekonzistentne a zmätočne, občania by služby nepovažovali za dostatočne
            kredibilné. Zároveň definuje štandardy kvality dizajnu, zdrojového kódu
            a prístupnosti. Dizajn manuál poskytuje predpripravené komponenty, ktoré sú:
          </Text>
          
          <Ul>
            <li><strong>responzívne</strong> – teda správne sa zobrazujú na rôznych veľkostiach obrazoviek,</li>
            <li><strong>prístupné</strong> – sú použiteľné pre skupiny používateľov so zníženou motorickou alebo zrakovou schopnosťou,</li>
            <li><strong>použiteľné</strong> – implementujú základné heuristiky (<span lang="en">best practice</span>) použiteľnosti.</li>
          </Ul>
          
          <Text>
            IDSK nemá ambíciu nahradiť celý dizajnový proces. Je návodom a určuje
            štandardy a pravidlá pre zostavovanie používateľských rozhraní. Pomocou
            IDSK vytvoríte kvalitné používateľské rozhranie, ale už nezabezpečíte,
            aký používateľský zážitok (<span lang="en">User Experience</span>) bude služba poskytovať. Aby
            ste zabezpečili kvalitný používateľský zážitok, musíte do procesu tvorby
            elektronickej služby zahrnúť metodiku <span lang="en">UCD – User-centered Design.</span>
          </Text>
        </SectionBlock>
      </div>
    </div>
  );
}