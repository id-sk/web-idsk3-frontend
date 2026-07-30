export const metadata = {
  title: '10 princípov vytvárania služieb podľa IDSK | IDSK',
  description: 'Základné princípy pre vytváranie užitočných, prístupných a stabilných elektronických služieb štátu.',
};

import React from "react";
import { Text, SectionBlock, Ol, generateId } from '@/app/(home)/_components/content-blocks/ContentBlocks';


const principlesData = [
  {
    title: "1. Začnite potrebami používateľov (princíp užitočnosti)",
    shortLabel: "Začnite potrebami používateľov (princíp užitočnosti)"
  },
  {
    title: "2. Opätovne používajte a zdieľajte (princíp stability a otvorenosti)",
    shortLabel: "Opätovne používajte a zdieľajte (princíp stability a otvorenosti)"
  },
  {
    title: "3. Inšpirujte sa realitou (princíp reálnosti)",
    shortLabel: "Inšpirujte sa realitou (princíp reálnosti)"
  },
  {
    title: "4. Náročná tvorba vedie k jednoduchým službám (princíp jednoduchosti)",
    shortLabel: "Náročná tvorba vedie k jednoduchým službám (princíp jednoduchosti)"
  },
  {
    title: "5. Začnite v malom (princíp agility)",
    shortLabel: "Začnite v malom (princíp agility)"
  },
  {
    title: "6. IDSK je pre každého (princíp prístupnosti)",
    shortLabel: "IDSK je pre každého (princíp prístupnosti)"
  },
  {
    title: "7. Rešpektovanie kontextu okolnosti použitia (princíp kontextu)",
    shortLabel: "Rešpektovanie kontextu okolnosti použitia (princíp kontextu)"
  },
  {
    title: "8. Vytvárajte elektronické služby, nie webové stránky (princíp holistického pohľadu)",
    shortLabel: "Vytvárajte elektronické služby, nie webové stránky (princíp holistického pohľadu)"
  },
  {
    title: "9. Buďte konzistentní (princíp konzistentnosti)",
    shortLabel: "Buďte konzistentní (princíp konzistentnosti)"
  },
  {
    title: "10. Tvorte otvorene, zvýšite tým kvalitu (princíp otvorenosti)",
    shortLabel: "Tvorte otvorene, zvýšite tým kvalitu (princíp otvorenosti)"
  }
];

// --- HLAVNÝ KOMPONENT ---

export default function PrincipyPage() {
  return (
    <div className="flex flex-col my-8 max-w-[1120px] px-4 sm:px-0">
      
      {/* Čistý H1 bez zbytočného <header> obalu */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
        10 princípov vytvárania služieb podľa IDSK
      </h1>
      
      {/* Vizuálny "main" blok zmenený na bezpečný <div> */}
      <div>
        {/* --- NAVIGÁCIA (Zoznam rýchlych odkazov) --- */}
        <nav aria-label="Rýchle odkazy" className="mb-12">
          {/* Používame náš globálny komponent Ol pre dokonalú typografiu */}
          <Ol>
            {principlesData.map((item, index) => (
              <li key={index}>
                {/* Odkaz generujeme z celého názvu, aby presne sedel s IDčka v SectionBlock */}
                <a 
                  href={`#${generateId(item.title)}`} 
                  className="text-[#0B4199] underline underline-offset-3 hover:text-[#126DFF] hover:decoration-[length:3px] transition-all duration-100"
                >
                  {item.shortLabel}
                </a>
              </li>
            ))}
          </Ol>
        </nav>

        {/* --- SEKCIE PRINCÍPOV --- */}
        <SectionBlock titleString={principlesData[0].title}>
          <Text>
            Dizajn služby začína identifikáciou potrieb používateľov. Ak neviete,
            aké sú potreby používateľov, nepodarí sa vám vytvoriť správnu službu.
            Nevychádzajte z domnienok. Používateľský prieskum, analýza dát a
            informácie priamo od používateľov vám pomôžu vybudovať zázemie,
            na ktorom môžete postaviť službu, ktorá bude spĺňať svoj účel a bude
            užitočná.
          </Text>
        </SectionBlock>

        <SectionBlock titleString={principlesData[1].title}>
          <Text>
            Platformy a registre je dôležité vytvárať tak, aby tvorili funkčný
            nemenný základ, ktorý je opätovne použiteľný. Poskytovanie a vzájomné
            zdieľanie zdrojov môže výrazne uľahčiť prácu ďalším tvorcom
            elektronických služieb.
          </Text>
        </SectionBlock>

        <SectionBlock titleString={principlesData[2].title}>
          <Text>
            Pri vytváraní elektronických služieb môžete vychádzať zo spôsobov
            používania existujúcich služieb v reálnom svete. Aby bola služba
            kvalitná, pokračujte v jej dizajnovaní aj po jej dokončení, a to
            na základe informácii od používateľov. Ideálnym spôsobom je
            pred zavedením finálnej verzie služby spustenie jej testovacej verzie.
            Testuje s používateľmi až dovtedy kým bude služba pripravená na jej
            reálne používanie. Základným nástrojom každej elektronickej služby je
            dátová analytika, ktorá by mala byť jednoducho čitateľná a neustále
            zapnutá.
          </Text>
        </SectionBlock>

        <SectionBlock titleString={principlesData[3].title}>
          <Text>
            Elektronizácia je príležitosťou na zjednodušenie služieb používateľom.
            Pri dizajne služieb vnímajte širší kontext, nielen existujúci postup.
            Investujte čas do opätovného prepracovania procesov a neuspokojte sa
            s názorom, ktorý zachováva existujúci stav.
          </Text>
        </SectionBlock>

        <SectionBlock titleString={principlesData[4].title}>
          <Text>
            Sprístupnite používateľom svoju službu čo najskôr a získajte spätnú
            väzbu od koncových používateľov. Je lepšie rozvíjať službu postupne a
            po malých častiach, ako spúšťať veľké celky. Znížite tým riziká a
            získate cenné informácie, ktoré môžu ovplyvniť vaše ďalšie investície
            do rozvoja.
          </Text>
        </SectionBlock>

        <SectionBlock titleString={principlesData[5].title}>
          <Text>
            Prístupný dizajn je dobrý dizajn. Elektronické služby vytvorené podľa
            IDSK by mali byť inkluzívne, zrozumiteľné a jednoducho čitateľné. Je
            potrebné si pripomínať, že elektronické služby sa vytvárajú s konkrétnym
            účelom, ako odpoveď na konkrétne potreby spoločnosti a na používanie
            pre konkrétnych ľudí. Medzi používateľmi sú aj takí, ktorí nepoužívajú
            informačné technológie každý deň. Ľudia ktorí najviac potrebujú naše
            služby sú často ľudia, ktorým sa zdá ich používanie najťažšie. Práve
            tieto osoby by mali tvoriť časť testovacej skupiny.
          </Text>
        </SectionBlock>

        <SectionBlock titleString={principlesData[6].title}>
          <Text>
            Pri tvorbe elektronických služieb je potrebné zohľadňovať okolnosti a
            kontext, v ktorom ľudia služby budú používať. Dizajn musí adresovať
            rozdielne potreby podľa času, miesta a zariadenia, v rámci ktorých sa
            bude služba primárne vykonávať.
          </Text>
        </SectionBlock>

        <SectionBlock titleString={principlesData[7].title}>
          <Text>
            Pri tvorbe služby vnímajte ich multikanálový kontext. Netvoríte len
            webovú stránku, ale navrhujete zážitok používateľa naprieč rôznymi
            digitálnymi aj nedigitálnymi kanálmi. Zohľadnite zistenia
            zo zákazníckeho prieskumu aj v iných kanáloch, aby ste vytvorili
            kvalitnejšiu službu.
          </Text>
        </SectionBlock>

        <SectionBlock titleString={principlesData[8].title}>
          <Text>
            Princíp konzistentnosti spočíva v používaní rovnakého jazyka, výrazov
            uvedých v slovníku a rovnakých dizajnových vzorov. Uplatňovaním tohto
            princípu sa pri tvorbe služieb zabezpečí jednak vizuálna jednotnosť a
            tiež uistenie používateľa, že skutočne stále používa službu verejnej
            správy. Navyše, keď budú všetky služby tvorené jedným spôsobom,
            používateľ nadobudne zručnosť v ich používaní. V takom prípade ich bude
            používať opakovane a tieto služby budú pre neho skutočne efektívnym
            spôsobom využívania potrebných služieb.
          </Text>
        </SectionBlock>

        <SectionBlock titleString={principlesData[9].title}>
          <Text>
            Zdieľajte vaše návrhy, nápady, zámery, neúspechy a zdrojové kódy
            s komunitou. Otvorenosť podporuje kreativitu a zlepšuje kvalitu výstupov
            cez skorú spätnú väzbu. Keďže tvorba elektronických služieb je spravidla
            financovaná z verejných zdrojov, nie je dôvod výstupy skrývať.
          </Text>
        </SectionBlock>

      </div>
    </div>
  );
}