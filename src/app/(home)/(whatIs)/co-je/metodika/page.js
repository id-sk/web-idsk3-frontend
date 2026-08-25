export const metadata = {
  title: 'Metodika User-centered Design | IDSK',
  description: 'Metodika prípravy elektronických služieb štátu pomocou user-centered dizajnu (UCD).',
};

import React from "react";
import { Text, SectionBlock, Ul, Ol, H3, H4 } from '@/app/(home)/_components/content-blocks/ContentBlocks';

// --- HLAVNÝ KOMPONENT ---
export default function MetodikaPage() {
  return (
    <div className="flex flex-col my-8 max-w-[1120px] px-4 sm:px-0">
      
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
        Metodika <span lang="en">User-centered Design</span>
      </h1>
      
      <p className="text-lg sm:text-xl font-bold tracking-wide leading-tight sm:leading-8 text-black mb-6">
        Elektronické služby štátu by mali byť pripravované metodikou <span lang="en">user-centered design (UCD)</span>, aby sa zabezpečila zmysluplnosť a použiteľnosť služieb zo strany koncového používateľa – občana.
      </p>
      
      <Text className="!mb-4">
        Na dodržanie <span lang="en">“user-centered”</span> prístupu je nutné rozdeliť prípravnú fázu projektu do 4 fáz:
      </Text>
      
      <Ol>
        <li>úvodná analýza a výskum zákazníckych skupín,</li>
        <li>návrh navigácie, prototypu a testovanie,</li>
        <li><span lang="en">benchmarking</span> používateľského rozhrania,</li>
        <li>optimalizácia používateľského rozhrania.</li>
      </Ol>

      {/* --- SEKCIE --- */}

      <SectionBlock titleString="Úvodná analýza a výskum zákazníckych skupín">
        <Text>
          V prípravnej fáze projektu, kedy je vykonávaná biznis analýza a technická analýza, je nutné analýzy doplniť o výskum správania koncových používateľov, ktorý overí navrhnuté biznis koncepty, doplní očakávania občanov v doméne danej elektronickej služby a zanalyzuje ich motivácie, problémy, znalosti a potreby. Aktivita by mala byť realizovaná ako kvalitatívny výskum s účasťou všetkých relevantných cieľových skupín. Výstupmi takejto aktivity musia byť požiadavky zákazníkov na prínos systému, popis požiadaviek na používateľské rozhranie a argumentácia ako používateľské rozhranie adresuje zdokumentované potreby koncových používateľov. Ďalšími výstupmi môžu byť aj definícia persón alebo definícia zákazníckych ciest.
        </Text>
      </SectionBlock>

      <SectionBlock titleString="Návrh navigácie, prototypu a testovanie">
        <Text className="!mb-0">
          Realizované používateľské rozhranie musí byť tvorené v aktívnej kooperácii s koncovými používateľmi, aby projekt zabezpečil jeho úplnú použiteľnosť. Používatelia musia byť zapojení do tvorby informačnej architektúry a štruktúry navigácie. Tá by mala byť testovaná kvantitatívne so zapojením všetkých účastných cieľových skupín. Informačná architektúra musí zohľadňovať slovník, ktorý je definovaný v tomto dizajnovom manuáli.
        </Text>
        <Text>
          Prototyp elektronickej služby musí byť testovaný aspoň 3x počas jeho prípravy so zástupcami všetkých relevantných cieľových skupín metódou formatívneho testovania použiteľnosti, ideálne však na týždennej báze. Zistenia z testovania musia byť následne zapracované do prototypu. Grafický dizajn a frontend programový kód elektronickej služby musí zohľadňovať Jednotný dizajn manuál elektronických služieb.
        </Text>
      </SectionBlock>

      <SectionBlock 
        titleString="Benchmarking používateľského rozhrania" 
        titleNode={<><span lang="en">Benchmarking</span> používateľského rozhrania</>}
      >
        <Text className="!mb-4">
          Pred uvedením systému do plnej prevádzky musí byť systém otestovaný sumatívnym testovaním použiteľnosti s účasťou všetkých relevantných skupín. Počas testovania budú zdokumentované metriky použiteľnosti (čas úlohy, chybovosť úlohy, efektivita úlohy, SUS skóre) pre kľúčové prípady použitia. Zároveň bude vykonané testovanie prístupnosti systému zohľadňujúce štandardy prístupnosti a funkčnosti webových sídiel a mobilných aplikácií podľa vyhlášky Úradu podpredsedu vlády Slovenskej republiky pre investície a informatizáciu č. 78/2020 Z. z. o štandardoch pre informačné technológie verejnej správy.
        </Text>
        <Text className="!mb-4">
          Používateľské rozhranie by malo spĺňať nasledovné kritéria:
        </Text>
        <Ul>
          <li>namerané SUS skóre je vyššie ako 50 bodov,</li>
          <li>miera dokončenia kľúčových úloh je vyššia ako 80 %,</li>
          <li>chybovosť kľúčových úloh je nižšia ako 40 %.</li>
        </Ul>
      </SectionBlock>

      <SectionBlock titleString="Optimalizácia analytikou správania používateľa">
        <Text>
          Po nasadení systému do ostrej prevádzky bude systém iteratívne zlepšovaný na základe meraní z analytických nástrojov. Tieto by mali merať prinajmenšom chybovosť vykonávania úloh, čas úlohy, efektivitu úlohy a pomer transakcií vykonaných v používateľskom rozhraní (online) k počtu transakcií vykonaných pôvodným spôsobom (offline).
        </Text>
      </SectionBlock>

      <SectionBlock titleString="Forma výstupov plynúcich z metodiky UCD">
        <Text>
          V nasledujúcej časti uvádzame odporúčanú formu výstupov, ktoré sú dodávané počas realizácie projektu so zaimplementovanou metodikou <span lang="en">“user-centered”</span> dizajnu.
        </Text>

        <H3>Report zákazníckeho výskumu</H3>
        <Text className="!mb-4">
          Report zákazníckeho výskumu je dokument, ktorý hĺbkovo analyzuje poznatky zozbierané kvalitatívnym výskumom (rozhovormi so zákazníkmi). Vyhodnocuje sa ním priorita potrieb budúcich používateľov, ich motivácie na používanie produktu, problémy, s ktorými sa aktuálne stretávajú a definuje ich znalostný kapitál. Pozostáva z častí:
        </Text>
        <Ul>
          <li>Metóda výskumu poznatkov,</li>
          <li>Kľúčové požiadavky zákazníkov na prínos systému,</li>
          <li>Zákaznícke cesty (<span lang="en">customer journeys</span>) (nie je nutné),</li>
          <li>Zákaznícke persóny (nie je nutné).</li>
        </Ul>

        <H4>Metóda výskumu poznatkov</H4>
        <Text className="!mb-2">Táto časť obsahuje:</Text>
        <Ul>
          <li>Použitú metodológiu,</li>
          <li>Scenár výskumu,</li>
          <li><span lang="en">Screener</span> – zoznam špecifických kľúčových charakteristík oslovených používateľov pre daný výskum,</li>
          <li>Priebeh oslovovania a naplnenie screeneru,</li>
          <li>Dátum vykonania výskumu.</li>
        </Ul>

        <H4>Kľúčové požiadavky zákazníkov na prínos systému</H4>
        <Text className="!mb-2">Táto časť pozostáva z:</Text>
        <Ul>
          <li>Opisu kľúčovej požiadavky,</li>
          <li>Rácio požiadavky opisujúcej poznatky z výskumu,</li>
          <li>Návrhu spôsobu validácie požiadavky kvantitatívnym výskumom,</li>
          <li>Konkrétnych návrhov riešení požiadavky v používateľskom rozhraní a ich prioritizácie.</li>
        </Ul>

        <H4>Zákaznícke cesty (<span lang="en">customer journeys</span>)</H4>
        <Text className="!mb-2">
          Ide o diagram, ktorý mapuje spôsob používania systému skutočnými zákazníkmi na základe ich doterajších skúseností. Diagram spravidla obsahuje na osi X fázy procesu a na osi Y nasledujúce poznatky pre každú fázu:
        </Text>
        <Ul>
          <li>Diagram aktivít</li>
          <li>Miesto, zariadenie, kanál</li>
          <li>Časový horizont</li>
          <li>Aktivita</li>
          <li>Motivácia</li>
          <li>Bariéry</li>
          <li>Vynaložené úsilie</li>
          <li>Cieľ a potreba</li>
        </Ul>
        <Text>Zákaznícke cesty by mali uvádzať všetky kľúčové prípady použitia.</Text>

        <H4>Zákaznícke persóny</H4>
        <Text>
          Sú predstaviteľmi cieľových skupín používateľského rozhrania a agregujú typické správanie skupiny používateľov. Pre každú cieľovú skupinu by mali byť vytvorené 1-3 persóny.
        </Text>

        <H3>Mapa stránky a/alebo <span lang="en">“user flow”</span> (cesty zákazníka)</H3>
        <Text>
          Oba prístupy (mapa stránky aj <span lang="en">“user flow”</span>) môžu byť využité spolu alebo samostatne. Mapa stránky sa používa na popis stromových štruktúr aplikácií alebo webových sídiel. <span lang="en">“User flow”</span> (cesty zákazníka) opisuje lineárnu štruktúru aplikácie alebo webového sídla.
        </Text>

        <H3>Prototyp</H3>
        <Text>
          Prototyp je skupina čiernobielych skíc používateľského rozhrania (wireframov) vo forme obrázkov, ktoré sú navzájom poprepájané tak, aby používateľom pripomínali skutočné používateľské rozhranie. Wireframy sú pritom pripravené takým spôsobom, aby zohľadňovali pravidlá definované v Jednotnom dizajnovom manuáli elektronických služieb.
        </Text>

        <H3>Report formatívneho testovania</H3>
        <Text className="!mb-4">
          Formatívne testovanie použiteľnosti prototypu je vykonané na vzorke aspoň 6 respondentov pre každú relevantnú cieľovú skupinu. Výstupom testovania je report, ktorý obsahuje:
        </Text>
        <Ul>
          <li>Sprioritizovaný zoznam identifikovaných problémov použiteľnosti podľa frekvencie a závažnosti,</li>
          <li>scenár testovania,</li>
          <li><span lang="en">Screener</span> – zoznam špecifických kľúčových charakteristík oslovených používateľov pre daný výskum,</li>
          <li>priebeh oslovovania a naplnenie <span lang="en">screener</span>,</li>
          <li>dátum vykonania výskumu,</li>
          <li>popis metodiky testovania.</li>
        </Ul>

        <H3>Report sumatívneho testovania</H3>
        <Text className="!mb-4">
          Sumatívne testovanie použiteľnosti prototypu je vykonané na vzorke aspoň 21 respondentov, ktorí sú zvolení z cieľových skupín používateľského rozhrania. Výstupom testovania je report, ktorý obsahuje:
        </Text>
        <Ul>
          <li>sprioritizovaný zoznam identifikovaných problémov použiteľnosti podľa frekvencie a závažnosti,</li>
          <li>
            dokumentáciu meraných metrík pre kľúčové prípady použitia:
            <Ol alpha={true}>
              <li>čas úlohy</li>
              <li>chybovosť úlohy</li>
              <li>efektivita úlohy</li>
            </Ol>
          </li>
          <li>výsledok merania SUS skóre,</li>
          <li>scenár testovania,</li>
          <li><span lang="en">Screener</span> – zoznam špecifických kľúčových charakteristík oslovených používateľov pre daný výskum,</li>
          <li>priebeh oslovovania a naplnenie screeneru,</li>
          <li>dátum vykonania výskumu,</li>
          <li>popis metodiky testovania.</li>
        </Ul>

        <H3>Report testovania prístupnosti</H3>
        <Text>
          Report deklaruje splnenie požiadaviek podľa štandardu prístupnosti a funkčnosti webových sídiel a mobilných aplikácií podľa vyhlášky Úradu podpredsedu vlády Slovenskej republiky pre investície a informatizáciu č. 78/2020 Z. z. o štandardoch pre informačné technológie verejnej správy.
        </Text>
      </SectionBlock>

    </div>
  );
}