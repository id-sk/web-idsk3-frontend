'use client'

import React from "react";
import Link from "next/link"; // Pridané pre lepšie interné linkovanie, ak je to potrebné
import { InformationBanner } from '@eslovensko/idsk-react';


const SuboryCookies = () => {
  return (
    <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0">
      <title>Spracúvanie súborov cookies</title>
      
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px]">
        Spracúvanie súborov cookies na webovej stránke idsk.gov.sk
      </h1>

      <div>
        <p className="mt-8 text-lg sm:text-xl font-bold tracking-wide leading-tight sm:leading-8 text-black">
          Informácie pre dotknutú osobu pri získaní osobných údajov
        </p>
        
        <p className="mt-4 text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black">
          Podľa čl. 13 a čl. 14 nariadenia Európskeho parlamentu a Rady (EÚ) č. 2016/679 z 27. apríla 2016 o ochrane fyzických osôb pri spracúvaní osobných údajov a o voľnom pohybe takých údajov, ktorým sa zrušuje smernica 95/46/ES (všeobecné nariadenie o ochrane údajov) (ďalej len „GDPR“) Ministerstvo investícií, regionálneho rozvoja a informatizácie Slovenskej republiky (ďalej ako „ministerstvo“, „MIRRI SR“ alebo „prevádzkovateľ”) ako subjekt, ktorý spracováva osobné údaje dotknutej osoby, poskytuje dotknutej osobe nasledovné informácie
        </p>

        <h2 className="mt-10 text-xl sm:text-2xl font-bold tracking-wide text-black">
          1. Identifikačné a kontaktné údaje prevádzkovateľa
        </h2>
        <p className="mt-4 text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black">
          Ministerstvo investícií, regionálneho rozvoja a informatizácie Slovenskej republiky, Pribinova 25, 811 09 Bratislava, IČO: 50349287
        </p>

        <h2 className="mt-10 text-xl sm:text-2xl font-bold tracking-wide text-black">
          2. Zodpovedná osoba pre oblasť osobných údajov MIRRI SR
        </h2>
        <p className="mt-4 text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black">
          telefón: +421 2/2092 8425, e-mail: <a href="mailto:zodpovedna.osoba@mirri.gov.sk" className="text-my-blue underline hover:text-blue-800 transition-colors">zodpovedna.osoba@mirri.gov.sk</a>
        </p>

        <h2 className="mt-10 text-xl sm:text-2xl font-bold tracking-wide text-black">
          3. Názov spracúvania
        </h2>
        <p className="mt-4 text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black">
          Spracúvanie cookies na webovej stránke <a href="https://idsk.gov.sk" className="text-my-blue underline hover:text-blue-800 transition-colors">idsk.gov.sk</a>.
        </p>

        <h2 className="mt-10 text-xl sm:text-2xl font-bold tracking-wide text-black">
          4. Čo sú to cookies?
        </h2>
        <div className="space-y-4 mt-4 text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black">
          <p>
            Aby sme Vám mohli poskytnúť prístup k tejto webovej stránke a k službám prispôsobeným Vašim potrebám, potrebujeme poznať a uchovávať informácie o tom, akým spôsobom používate túto webovú stránku.
          </p>
          <p>
            To dosiahneme pomocou malých textových súborov, tzv. cookies. Cookies obsahujú malé množstvo informácií a sú sťahované prostredníctvom serveru tejto webovej stránky do Vášho počítača, laptopu alebo iného zariadenia. Váš internetový prehliadač potom zašle súbory cookies späť tejto webovej stránke pri každej ďalšej návšteve, vďaka čomu Vás táto webová stránka rozpozná a nájde informácie napr. o vašich používateľských preferenciách (navštívené stránky, kliknutia, história aktivít).
          </p>
          <p>
            Kedykoľvek navštívite túto webovú stránku, môže dochádzať k zhromažďovaniu informácií prostredníctvom súborov cookies alebo iných technológií (informácie o jazyku, krajine a predtým nastavených stránkach).
          </p>
          <p>
            Cookies sú odosielané našej webovej stránke (naše vlastné cookies) alebo sú odoslané inej webovej stránke, ktorá tieto cookies spracúva (cookies tretích strán). V prípade, ak webovú stránku idsk.gov.sk navštívite z iného zariadenia ako zo zariadenia, na ktorom ste si už vlastné preferencie cookies nastavili alebo v prípade, ak nastane zmena v našom procese spracúvania cookies alebo ak uplynie doba, po ktorú sme Vaše preferencie cookies uchovávali, opätovne Vás požiadame o nastavenie cookies na našej webovej stránke.
          </p>
          <p>
            MIRRI SR aktuálne spracúva iba vlastné cookies, nie cookies tretích strán.
          </p>
        </div>

        <h2 className="mt-10 text-xl sm:text-2xl font-bold tracking-wide text-black">
          5. Rozsah spracúvaných osobných údajov
        </h2>
        <div className="space-y-4 mt-4 text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black">
          <p>
            Z pohľadu GDPR sú niektoré cookies zároveň považované za osobné údaje. Cookies sú osobnými údajmi vtedy, ak je na základe cookies možné identifikovať Vás ako konkrétnu osobu.
            <strong className="block mt-2">Ministerstvo aktuálne spracúva len nevyhnutné cookies.</strong>
          </p>
          <InformationBanner 
                    variant="information" 
                    title="Ministerstvo spracúva nasledujúce nevyhnutné cookies:"
                    ariaLabel="Ukážka Cookies"
                    >
                     <ul className="mt-4 space-y-2">
                      <li>NÁZOV COOKIES: TS#</li>
                      <li>DOBA UCHOVÁVANIA: Po skončení relácie sa neuchováva.</li>
                      <li>ÚČEL SPRACÚVANIA: Zvyšuje bezpečnosť webovej stránky.</li>
                    </ul>
                </InformationBanner>
        </div>
        
        <h2 className="mt-10 text-xl sm:text-2xl font-bold tracking-wide text-black">
          6. Kategórie osobných údajov
        </h2>
        <p className="mt-4 text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black">
          Ministerstvo nespracúva osobné údaje osobitnej kategórie, údaje o trestných činoch a priestupkoch.
        </p>

        <h2 className="mt-10 text-xl sm:text-2xl font-bold tracking-wide text-black">
          7. Kategórie dotknutých osôb
        </h2>
        <p className="mt-4 text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black">
          Dotknutými osobami sú fyzické osoby – návštevníci, používatelia webovej stránky <a href="https://idsk.gov.sk/" className="text-my-blue underline hover:text-blue-800 transition-colors">idsk.gov.sk</a>.
        </p>

        <h2 className="mt-10 text-xl sm:text-2xl font-bold tracking-wide text-black">
          8. Účel spracúvania osobných údajov
        </h2>
        <div className="space-y-4 mt-4 text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black">
          <p>
            Účelom spracúvania osobných údajov je poskytovať používateľom webovej stránky služby informačnej spoločnosti,
            zabezpečiť plynulú a bezpečnú prevádzku webovej stránky, zlepšovať používateľskú skúsenosť a zlepšovať spôsob,
            ako zacieliť na vhodné publikum.
          </p>
          <p>
            Účelom spracúvania nevyhnutných cookies je umožniť používateľom to, aby mohli túto webovú stránku prezerať 
            a využívať jej funkcie. Tieto súbory cookies neukladajú žiadne informácie o používateľoch, ktoré by sa dali 
            použiť na marketing alebo na zapamätanie si, čo si používatelia na internete pozerali.
          </p>
        </div>

        <h2 className="mt-10 text-xl sm:text-2xl font-bold tracking-wide text-black">
          9. Právny základ spracúvania
        </h2>
        <p className="mt-4 text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black">
          Právnym základom pre spracúvanie nevyhnutných cookies je <strong>zákonná povinnosť prevádzkovateľa</strong> v zmysle 
          čl. 6 ods. 1 písm. c) GDPR: <em>„spracúvanie je nevyhnutné na splnenie zákonnej povinnosti prevádzkovateľa“</em>.
          Zákonná povinnosť vyplýva ministerstvu zo zákona č. 452/2021 Z. z. o elektronických komunikáciách v znení neskorších predpisov.
        </p>

        <h2 className="mt-10 text-xl sm:text-2xl font-bold tracking-wide text-black">
          10. Sprostredkovateľ, ktorý spracúva osobné údaje v mene prevádzkovateľa
        </h2>
        <p className="mt-4 text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black">
          Ministerstvo nevyužíva žiadneho sprostredkovateľa.
        </p>

        <h2 className="mt-10 text-xl sm:text-2xl font-bold tracking-wide text-black">
          11. Sub-sprostredkovateľ, ktorý spracúva osobné údaje v mene sprostredkovateľa
        </h2>
        <p className="mt-4 text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black">
          Ministerstvo nevyužíva žiadneho sub-sprostredkovateľa.
        </p>

        <h2 className="mt-10 text-xl sm:text-2xl font-bold tracking-wide text-black">
          12. Príjemcovia osobných údajov
        </h2>
        <p className="mt-4 text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black">
          Webová stránka ministerstva neposkytuje osobné údaje inej spoločnosti.
        </p>

        <h2 className="mt-10 text-xl sm:text-2xl font-bold tracking-wide text-black">
          13. Doba uchovávania osobných údajov
        </h2>
        <p className="mt-4 text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black">
          Cookies sú ukladané od momentu získania do momentu, keď používateľ ukončí reláciu a zavrie webovú stránku.
          Všetky cookies sa po skončení relácie trvalo odstránia.
        </p>

        <h2 className="mt-10 text-xl sm:text-2xl font-bold tracking-wide text-black">
          14. Prenos osobných údajov do tretej krajiny
        </h2>
        <p className="mt-4 text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black">
          Nie, nevykonáva sa.
        </p>

        <h2 className="mt-10 text-xl sm:text-2xl font-bold tracking-wide text-black">
          15. Prenos osobných údajov medzinárodným organizáciám
        </h2>
        <p className="mt-4 text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black">
          Nie, nevykonáva sa.
        </p>

        <h2 className="mt-10 text-xl sm:text-2xl font-bold tracking-wide text-black">
          16. Osobné údaje
        </h2>
        <p className="mt-4 text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black">
          Osobné údaje <strong>nebudú použité</strong> na automatizované individuálne rozhodovanie vrátane profilovania.
        </p>

        <h2 className="mt-10 text-xl sm:text-2xl font-bold tracking-wide text-black">
          17. Práva dotknutej osoby
        </h2>
        <div className="mt-4 text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black">
          V súlade s čl. 15 až 22 GDPR je dotknutá osoba oprávnená prostredníctvom žiadosti si uplatniť nasledovné <strong>práva dotknutej osoby:</strong>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>právo na potvrdenie o spracúvaní osobných údajov,</li>
            <li>právo na získanie prístupu k osobným údajom, vrátane relevantných informácií týkajúcich sa ich spracúvania,</li>
            <li>právo na opravu nesprávnych a na doplnenie neúplných osobných údajov, ktoré sa jej týkajú,</li>
            <li>právo na vymazanie osobných údajov, ktoré sa jej týkajú,</li>
            <li>právo na obmedzenie spracúvania osobných údajov,</li>
            <li>právo na prenosnosť osobných údajov,</li>
            <li>právo namietať spracúvanie osobných údajov,</li>
            <li>právo na neuplatňovanie rozhodovania založeného výlučne na automatizovanom individuálnom rozhodovaní, vrátane profilovania.</li>
          </ul>
        </div>

        <h2 className="mt-10 text-xl sm:text-2xl font-bold tracking-wide text-black">
          18. Výkon práv dotknutej osoby
        </h2>
        <p className="mt-4 text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black">
          Dotknutá osoba je oprávnená podať žiadosť o výkon práv dotknutej osoby u prevádzkovateľa alebo 
          u jeho zodpovednej osoby listom na adresu prevádzkovateľa, e-mailom na <a href="mailto:zodpovedna.osoba@mirri.gov.sk" className="text-my-blue underline hover:text-blue-800 transition-colors">zodpovedna.osoba@mirri.gov.sk </a> alebo osobne na podateľni prevádzkovateľa.
        </p>

        <h2 className="mt-10 text-xl sm:text-2xl font-bold tracking-wide text-black">
          19. Odvolanie súhlasu so spracúvaním osobných údajov
        </h2>
        <p className="mt-4 text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black">
          Dotknutá osoba je oprávnená kedykoľvek svoj súhlas so spracúvaním osobných údajov odvolať:
          Ak chcete odstrániť súbory cookies uložené vo Vašich zariadeniach, môžete to urobiť pomocou nastavení 
          Vášho webového prehliadača. Obvykle je potrebné kliknúť na tlačidlo „Nastavenia“ a následne na tlačidlo 
          „Súbory cookies a povolenia lokality“/„Ochrana súkromia a zabezpečenie“ a následne „Súbory cookies“.
        </p>
       
        <h2 className="mt-10 text-xl sm:text-2xl font-bold tracking-wide text-black">
          20. Informácia o zmluvnej alebo zákonnej požiadavke
        </h2>
        <p className="mt-4 text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black">
          Poskytovanie nevyhnutných osobných údajov je zákonnou požiadavkou: vyplýva zo zákonnej povinnosti prevádzkovateľa 
          podľa § 109 ods. 8 zákona č. 452/2021 Z. z. o elektronických komunikáciách v znení neskorších predpisov. 
          V prípade neposkytnutia nevyhnutných osobných údajov nie je možné prehliadať webovú stránku <a href="https://idsk.gov.sk/" className="text-my-blue underline hover:text-blue-800 transition-colors">idsk.gov.sk</a>.
        </p>

        <h2 className="mt-10 text-xl sm:text-2xl font-bold tracking-wide text-black">
          21. Začatie konania o ochrane osobných údajov
        </h2>
        <p className="mt-4 text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black">
          Ak sa dotknutá osoba domnieva, že pri spracúvaní osobných údajov boli porušené jej práva, má právo podať návrh na začatie konania 
          o ochrane osobných údajov <strong>Úradu na ochranu osobných údajov SR</strong> v súlade s ustanoveniami zákona č. 18/2018 Z. z. o ochrane osobných údajov 
          a o zmene a doplnení niektorých zákonov v znení neskorších predpisov: 
          <a href="https://dataprotection.gov.sk/sk/ine/vzory-formulare-stiahnutie/navrh-zacatie-konania-ochrane-osobnych-udajov/" className="text-my-blue underline hover:text-blue-800 transition-colors ml-1">Návrh na začatie konania o ochrane osobných údajov</a>.       
        </p>
      </div>
    </div>
  );
}

export default SuboryCookies;