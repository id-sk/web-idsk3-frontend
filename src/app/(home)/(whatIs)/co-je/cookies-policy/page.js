export const metadata = {
  title: 'Spracúvanie súborov cookies | IDSK',
  description: 'Informácie pre dotknutú osobu pri získaní osobných údajov a o spracúvaní súborov cookies na webe idsk.gov.sk.',
};

import React from "react";
import InformationBanner from '@/app/(home)/_components/information-banner/informationBannerCustom';
import { Text, SectionBlock, Ul, ExtLink } from '@/app/(home)/_components/content-blocks/ContentBlocks';

export default function SuboryCookies() {
  return (
    <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0">
      
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px]">
        Spracúvanie súborov cookies na webovej stránke idsk.gov.sk
      </h1>
      
      <p className="mt-8 mb-4 text-lg sm:text-xl font-bold tracking-wide leading-tight sm:leading-8 text-black">
        Informácie pre dotknutú osobu pri získaní osobných údajov
      </p>
      
      <Text>
        Podľa čl. 13 a čl. 14 nariadenia Európskeho parlamentu a Rady (EÚ) č. 2016/679 z 27. apríla 2016 o ochrane fyzických osôb pri spracúvaní osobných údajov a o voľnom pohybe takých údajov, ktorým sa zrušuje smernica 95/46/ES (všeobecné nariadenie o ochrane údajov) (ďalej len „GDPR“) Ministerstvo investícií, regionálneho rozvoja a informatizácie Slovenskej republiky (ďalej ako „ministerstvo“, „MIRRI SR“ alebo „prevádzkovateľ”) ako subjekt, ktorý spracováva osobné údaje dotknutej osoby, poskytuje dotknutej osobe nasledovné informácie:
      </Text>

      {/* --- SEKCIE --- */}
      <SectionBlock titleString="1. Identifikačné a kontaktné údaje prevádzkovateľa">
        <Text>Ministerstvo investícií, regionálneho rozvoja a informatizácie Slovenskej republiky, Pribinova 25, 811 09 Bratislava, IČO: 50349287</Text>
      </SectionBlock>

      <SectionBlock titleString="2. Zodpovedná osoba pre oblasť osobných údajov MIRRI SR">
        <Text>telefón: +421 2/2092 8425, e-mail: <ExtLink href="mailto:zodpovedna.osoba@mirri.gov.sk">zodpovedna.osoba@mirri.gov.sk</ExtLink></Text>
      </SectionBlock>

      <SectionBlock titleString="3. Názov spracúvania">
        <Text>Spracúvanie cookies na webovej stránke <ExtLink href="https://idsk.gov.sk">idsk.gov.sk</ExtLink>.</Text>
      </SectionBlock>

      <SectionBlock titleString="4. Čo sú to cookies?">
        <Text>Aby sme Vám mohli poskytnúť prístup k tejto webovej stránke a k službám prispôsobeným Vašim potrebám, potrebujeme poznať a uchovávať informácie o tom, akým spôsobom používate túto webovú stránku.</Text>
        <Text>To dosiahneme pomocou malých textových súborov, tzv. cookies...</Text>
        <Text>MIRRI SR aktuálne spracúva iba vlastné cookies, nie cookies tretích strán.</Text>
      </SectionBlock>

      <SectionBlock titleString="5. Rozsah spracúvaných osobných údajov">
        <Text>
          Z pohľadu GDPR sú niektoré cookies zároveň považované za osobné údaje...
          <strong className="block mt-2">Ministerstvo aktuálne spracúva len nevyhnutné cookies.</strong>
        </Text>
        <InformationBanner
            title="Príklad komponentu informačná lišta"
            ariaLabel="Príklad komponentu informačná lišta"
            type="banner"
            variant="information"
            hideCloseButton={true}
        >
          <ul className="mt-4 space-y-2 text-sm sm:text-base tracking-wide text-black">
            <li>NÁZOV COOKIES: TS#</li>
            <li>DOBA UCHOVÁVANIA: Po skončení relácie sa neuchováva.</li>
            <li>ÚČEL SPRACÚVANIA: Zvyšuje bezpečnosť webovej stránky.</li>
          </ul>
        </InformationBanner>
      </SectionBlock>

      <SectionBlock titleString="6. Kategórie osobných údajov">
        <Text>Ministerstvo nespracúva osobné údaje osobitnej kategórie, údaje o trestných činoch a priestupkoch.</Text>
      </SectionBlock>

      <SectionBlock titleString="7. Kategórie dotknutých osôb">
        <Text>Dotknutými osobami sú fyzické osoby – návštevníci, používatelia webovej stránky <ExtLink href="https://idsk.gov.sk/">idsk.gov.sk</ExtLink>.</Text>
      </SectionBlock>

      <SectionBlock titleString="8. Účel spracúvania osobných údajov">
        <Text>Účelom spracúvania osobných údajov je poskytovať používateľom webovej stránky služby informačnej spoločnosti, zabezpečiť plynulú a bezpečnú prevádzku webovej stránky, zlepšovať používateľskú skúsenosť a zlepšovať spôsob, ako zacieliť na vhodné publikum.</Text>
        <Text>Účelom spracúvania nevyhnutných cookies je umožniť používateľom to, aby mohli túto webovú stránku prezerať a využívať jej funkcie. Tieto súbory cookies neukladajú žiadne informácie o používateľoch, ktoré by sa dali použiť na marketing alebo na zapamätanie si, čo si používatelia na internete pozerali.</Text>
      </SectionBlock>

      <SectionBlock titleString="9. Právny základ spracúvania">
        <Text>
          Právnym základom pre spracúvanie nevyhnutných cookies je <strong>zákonná povinnosť prevádzkovateľa</strong> v zmysle čl. 6 ods. 1 písm. c) GDPR: <em>„spracúvanie je nevyhnutné na splnenie zákonnej povinnosti prevádzkovateľa“</em>. Zákonná povinnosť vyplýva ministerstvu zo zákona č. 452/2021 Z. z. o elektronických komunikáciách v znení neskorších predpisov.
        </Text>
      </SectionBlock>

      <SectionBlock titleString="10. Sprostredkovateľ, ktorý spracúva osobné údaje v mene prevádzkovateľa">
        <Text>Ministerstvo nevyužíva žiadneho sprostredkovateľa.</Text>
      </SectionBlock>

      <SectionBlock titleString="11. Sub-sprostredkovateľ, ktorý spracúva osobné údaje v mene sprostredkovateľa">
        <Text>Ministerstvo nevyužíva žiadneho sub-sprostredkovateľa.</Text>
      </SectionBlock>

      <SectionBlock titleString="12. Príjemcovia osobných údajov">
        <Text>Webová stránka ministerstva neposkytuje osobné údaje inej spoločnosti.</Text>
      </SectionBlock>

      <SectionBlock titleString="13. Doba uchovávania osobných údajov">
        <Text>Cookies sú ukladané od momentu získania do momentu, keď používateľ ukončí reláciu a zavrie webovú stránku. Všetky cookies sa po skončení relácie trvalo odstránia.</Text>
      </SectionBlock>

      <SectionBlock titleString="14. Prenos osobných údajov do tretej krajiny">
        <Text>Nie, nevykonáva sa.</Text>
      </SectionBlock>

      <SectionBlock titleString="15. Prenos osobných údajov medzinárodným organizáciám">
        <Text>Nie, nevykonáva sa.</Text>
      </SectionBlock>

      <SectionBlock titleString="16. Osobné údaje">
        <Text>Osobné údaje <strong>nebudú použité</strong> na automatizované individuálne rozhodovanie vrátane profilovania.</Text>
      </SectionBlock>

      <SectionBlock titleString="17. Práva dotknutej osoby">
        <Text>
          V súlade s čl. 15 až 22 GDPR je dotknutá osoba oprávnená prostredníctvom žiadosti si uplatniť nasledovné <strong>práva dotknutej osoby:</strong>
        </Text>
        <Ul>
          <li>právo na potvrdenie o spracúvaní osobných údajov,</li>
          <li>právo na získanie prístupu k osobným údajom, vrátane relevantných informácií týkajúcich sa ich spracúvania,</li>
          <li>právo na opravu nesprávnych a na doplnenie neúplných osobných údajov, ktoré sa jej týkajú,</li>
          <li>právo na vymazanie osobných údajov, ktoré sa jej týkajú,</li>
          <li>právo na obmedzenie spracúvania osobných údajov,</li>
          <li>právo na prenosnosť osobných údajov,</li>
          <li>právo namietať spracúvanie osobných údajov,</li>
          <li>právo na neuplatňovanie rozhodovania založeného výlučne na automatizovanom individuálnom rozhodovaní, vrátane profilovania.</li>
        </Ul>
      </SectionBlock>

      <SectionBlock titleString="18. Výkon práv dotknutej osoby">
        <Text>
          Dotknutá osoba je oprávnená podať žiadosť o výkon práv dotknutej osoby u prevádzkovateľa alebo u jeho zodpovednej osoby listom na adresu prevádzkovateľa, e-mailom na <ExtLink href="mailto:zodpovedna.osoba@mirri.gov.sk">zodpovedna.osoba@mirri.gov.sk</ExtLink> alebo osobne na podateľni prevádzkovateľa.
        </Text>
      </SectionBlock>

      <SectionBlock titleString="19. Odvolanie súhlasu so spracúvaním osobných údajov">
        <Text>
          Dotknutá osoba je oprávnená kedykoľvek svoj súhlas so spracúvaním osobných údajov odvolať: Ak chcete odstrániť súbory cookies uložené vo Vašich zariadeniach, môžete to urobiť pomocou nastavení Vášho webového prehliadača. Obvykle je potrebné kliknúť na tlačidlo „Nastavenia“ a následne na tlačidlo „Súbory cookies a povolenia lokality“/„Ochrana súkromia a zabezpečenie“ a následne „Súbory cookies“.
        </Text>
      </SectionBlock>
       
      <SectionBlock titleString="20. Informácia o zmluvnej alebo zákonnej požiadavke">
        <Text>
          Poskytovanie nevyhnutných osobných údajov je zákonnou požiadavkou: vyplýva zo zákonnej povinnosti prevádzkovateľa podľa § 109 ods. 8 zákona č. 452/2021 Z. z. o elektronických komunikáciách v znení neskorších predpisov. V prípade neposkytnutia nevyhnutných osobných údajov nie je možné prehliadať webovú stránku <ExtLink href="https://idsk.gov.sk/">idsk.gov.sk</ExtLink>.
        </Text>
      </SectionBlock>

      <SectionBlock titleString="21. Začatie konania o ochrane osobných údajov">
        <Text>
          Ak sa dotknutá osoba domnieva, že pri spracúvaní osobných údajov boli porušené jej práva, má právo podať návrh na začatie konania o ochrane osobných údajov <strong>Úradu na ochranu osobných údajov SR</strong> v súlade s ustanoveniami zákona č. 18/2018 Z. z. o ochrane osobných údajov a o zmene a doplnení niektorých zákonov v znení neskorších predpisov: 
          <ExtLink href="https://dataprotection.gov.sk/sk/ine/vzory-formulare-stiahnutie/navrh-zacatie-konania-ochrane-osobnych-udajov/">
            Návrh na začatie konania o ochrane osobných údajov
          </ExtLink>.      
        </Text>
      </SectionBlock>
    </div>
  );
}