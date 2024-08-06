'use client'


const MetodikaPage = () => {
    return (
        <div className="component-page">
            <title>Metodika</title>
            <h1 className="my-8">
            <span lang="en">Metodika User-centered Design</span>
            </h1>
            <p className="idsk-subtitle mb-16">
                Elektronické služby štátu by mali byť pripravované metodikou <span lang="en">user-centered dizajnu (UCD)</span>, aby sa zabezpečila zmysluplnosť a použiteľnosť služieb zo strany koncového používateľa – občana.
            </p>
            <p className="idsk-subtitle mb-4">
                Na dodržanie user-centered prístupu je nutné rozdeliť prípravnú fázu projektu do 4 fáz:
            </p>
            <ol className='idsk-subtitle mb-4'>
                <li>1. Úvodná analýza a výskum zákazníckych skupín.</li>
                <li>2. Návrh navigácie, prototypu a testovanie.</li>
                <li>3. <span lang="en">Benchmarking</span> používateľského rozhrania.</li>
                <li>4. Optimalizácia používateľského rozhrania.</li>
            </ol>
            <h2 className="mt-8 mb-4">
                Úvodná analýza a výskum zákazníckych skupín
            </h2>
            <p className="idsk-subtitle mb-8">
                V prípravnej fáze projektu, kedy je vykonávaná biznis analýza a technická analýza, je nutné analýzy doplniť o výskum správania koncových používateľov, ktorý overí navrhnuté biznis koncepty, doplní očakávania občanov v doméne danej elektronickej služby a zanalyzuje ich motivácie, problémy, znalosti a potreby. Aktivita by mala byť realizovaná ako kvalitatívny výskum s účasťou všetkých relevantných cieľových skupín. Výstupmi takejto aktivity musia byť požiadavky zákazníkov na prínos systému, popis požiadaviek na používateľské rozhranie a argumentácia ako používateľské rozhranie adresuje zdokumentované potreby koncových používateľov. Ďalšími výstupmi môžu byť aj definícia persón alebo definícia zákazníckych ciest.
            </p>
            <h2 className="mt-8 mb-4">
                Návrh navigácie prototypu a testovanie
            </h2>
            <p className="idsk-subtitle mb-8">
                Realizované používateľské rozhranie musí byť tvorené v aktívnej kooperácii s koncovými používateľmi, aby projekt zabezpečil jeho úplnú použiteľnosť. Používatelia musia byť zapojení do tvorby informačnej architektúry a štruktúry navigácie. Tá by mala byť testovaná kvantitatívne so zapojením všetkých účastných cieľových skupín. Informačná architektúra musí zohľadňovať slovník, ktorý je definovaný v tomto dizajnovom manuáli.
            </p>
            <p className="idsk-subtitle mb-8">
                Prototyp elektronickej služby musí byť testovaný aspoň 3x počas jeho prípravy so zástupcami všetkých relevantných cieľových skupín metódou formatívneho testovania použiteľnosti, ideálne však na týždennej báze. Zistenia z testovania musia byť následne zapracované do prototypu. Grafický dizajn a frontend programový kód elektronickej služby musí zohľadňovať Jednotný dizajn manuál elektronických služieb.
            </p>
            <h2 className="mt-8 mb-4">
            <span lang="en">Benchmarking</span> používateľského rozhrania
            </h2>
            <p className="idsk-subtitle mb-8">
                Pred uvedením systému do plnej prevádzky musí byť systém otestovaný sumatívnym testovaním použiteľnosti s účasťou všetkých relevantných skupín. Počas testovania budú zdokumentované metriky použiteľnosti (čas úlohy, chybovosť úlohy, efektivita úlohy, SUS skóre) pre kľúčové prípady použitia. Zároveň bude vykonané testovanie prístupnosti systému zohľadňujúce štandardy pre prístupnosť webu WCAG 2.0 AA- Web Content Accessibility Guidelines 2.0.
            </p>
            <p className="idsk-subtitle my-4">
                Používateľské rozhranie by malo spĺňať nasledovné kritéria:
            </p>
            <ul className='idsk-subtitle mb-4'>
                <li>- namerané SUS skóre je vyššie ako 50 bodov;</li>
                <li>- miera dokončenia kľúčových úloh je vyššia ako 80%;</li>
                <li>- chybovosť kľúčových úloh je nižšia ako 40%.</li>
            </ul>
            <h2 className="mt-8 mb-4">
                Optimalizácia analytikou správania používateľa
            </h2>
            <p className="idsk-subtitle mb-8">
                Po nasadení systému do ostrej prevádzky bude systém iteratívne zlepšovaný na základe meraní z analytických nástrojov. Tieto by mali merať pri najmenšom chybovosť vykonávania úloh, čas úlohy, efektivitu úlohy a pomer transakcií vykonaných v používateľskom rozhraní (online) k počtu transakcií vykonaných pôvodným spôsobom (offline).
            </p>
            <h2 className="mt-8 mb-4">
                Forma výstupov plynúcich z metodiky UCD
            </h2>
            <p className="idsk-subtitle mb-8">
                V nasledujúcej časti uvádzame odporúčanú formu výstupov, ktoré sú dodávané počas realizácie projektu so zaimplementovanou metodikou User-centered dizajnu
            </p>
            <h3 className="mt-8">
                Report zákazníckeho výskumu
            </h3>
            <p className="idsk-subtitle mb-4">
                Report zákazníckeho výskumuje  dokument, ktorý hĺbkovo analyzuje poznatky zozbierané kvalitatívnym výskumom (rozhovormi so zákazníkmi). Vyhodnocuje sa ním priorita potrieb budúcich používateľov, ich motivácie na používanie produktu, problémy, s ktorými sa aktuálne stretávajú a definuje ich znalostný kapitál. Pozostáva z častí:
            </p>
            <ul className='idsk-subtitle mb-4'>
                <li>- Metóda výskumu poznatkov</li>
                <li>- Kľúčové požiadavky zákazníkov na prínos systému</li>
                <li>- Zákaznícke cesty (customer journeys) (nie je nutné)</li>
                <li>- Zákaznícke persóny (nie je nutné)</li>
            </ul>
            <h4 className="mt-8">
                Metóda výskumu poznatkov
            </h4>
            <p className="idsk-subtitle">
                Táto časť obsahuje:
            </p>
            <ul className='idsk-subtitle mb-4'>
                <li>- Použitú metodológiu</li>
                <li>- Scenár výskumu</li>
                <li>- Screener – zoznam špecifických kľúčových charakteristí slovených používateľov pre daný výskum</li>
                <li>- Priebeh oslovovania a naplnenie screeneru</li>
                <li>- Dátum vykonania výskumu</li>
            </ul>
            <h4 className="mt-8">
                Kľúčové požiadavky zákazníkov na prínos systému
            </h4>
            <p className="idsk-subtitle">
                Táto časť pozostáva z:
            </p>
            <ul className='idsk-subtitle mb-4'>
                <li>- Opisu kľúčovej požiadavky</li>
                <li>- Rácio požiadavky opisujúcej poznatky z výskumu</li>
                <li>- Návrhu spôsobu validácie požiadavky kvantitatívnym výskumom</li>
                <li>- Konkrétnych návrhovriešení požiadavky v používateľskom rozhraní a ich prioritizáci</li>
            </ul>
            <h4 className="mt-8">
                Zákaznícke cesty (customer journeys)
            </h4>
            <p className="idsk-subtitle">
                Ide o diagram, ktorý mapuje spôsob používania systému skutočnými zákazníkmi na základe ich doterajších skúseností. Diagram spravidla obsahuje na osi X fázy procesu a na osi Y nasledujúce poznatky pre každú fázu:
            </p>
            <ul className='idsk-subtitle mb-4'>
                <li>- Diagram aktivít</li>
                <li>- Miesto, zariadenie, kanál</li>
                <li>- Časový horizont</li>
                <li>- Aktivita</li>
                <li>- Motivácia</li>
                <li>- Bariéry</li>
                <li>- Vynaložené úsilie</li>
                <li>- Cieľ a potreba</li>
            </ul>
            <p className="idsk-subtitle">
                Zákaznícke cesty by mali uvádzať všetky kľúčové prípady použitia.
            </p>
            <h4 className="mt-8">
                Zákaznícke persóny
            </h4>
            <p className="idsk-subtitle">
                Sú predstaviteľmi cieľových skupín používateľského rozhrania a agregujú typické správanie skupiny používateľov. Pre každú cieľovú skupinu by mali byť vytvorené 1-3 persóny.
            </p>
            <h3 className="mt-8">
                Mapa stránky a/alebo “user flow” (cesty zákazníka)
            </h3>
            <p className="idsk-subtitle mb-4">
                Oba prístupy (mapa stránky aj “user flow”) môžu byť využité spolu alebo samostatne. Mapa stránky sa používa na popis stromových štruktúr aplikácii alebo webových sídiel. “User flow” (cesty zákazníka) opisuje lineárnu štruktúru aplikácie alebo webového sídla.
            </p>
            <h3 className="mt-8">
                Prototyp
            </h3>
            <p className="idsk-subtitle mb-4">
                Prototyp je skupina čiernobielych skíc používateľského rozhrania (wireframov) vo forme obrázkov, ktoré sú navzájom poprepájané tak, aby používateľom pripomínali skutočné používateľské rozhranie. Wireframy sú pritom pripravené takým spôsobom, aby zohľadňovali pravidlá definované v Jednotnom dizajnovom manuáli elektronických služieb.
            </p>
            <h3 className="mt-8">
                Report formatívneho testovania
            </h3>
            <ul className='idsk-subtitle mb-4'>
                <li>- Formatívne testovanie použiteľnosti prototypu je vykonané na vzorke aspoň 6 respondentov pre každú relevantnú cieľovú skupinu. Výstupom testovania je report, ktorý obsahuje:</li>
                <li>- Sprioritizovaný zoznam identifikovaných problémov použiteľnosti podľa frekvencie a závažnosti,</li>
                <li>- scenár testovania,</li>
                <li>- screener – zoznam špecifických kľúčových charakteristík oslovených používateľov pre daný výskum,</li>
                <li>- priebeh oslovovania a naplnenie screeneru,</li>
                <li>- dátum vykonania výskumu,</li>
                <li>- popis metodiky testovania.</li>
            </ul>
            <h3 className="mt-8">
                Report sumatívneho testovania
            </h3>
            <p className="idsk-subtitle mb-4">
                Sumatívne testovanie použiteľnosti prototypu je vykonané na vzorke aspoň 21 respondentov, ktorí sú zvolení z cieľových skupín používateľského rozhrania. Výstupom testovania je report, ktorý obsahuje:
            </p>
            <ul className='idsk-subtitle mb-4'>
                <li>- sprioritizovaný zoznam identifikovaných problémov použiteľnosti podľa frekvencie a závažnosti,</li>
                <li>- dokumentáciu meraných metrík pre kľúčové prípady použitia:</li>
                <ul type="a">
                <li>čas úlohy</li>
                </ul>
                <ul type="b">
                <li>chybovosť úlohy</li>
                </ul>
                <ul type="c">
                <li className='mb-4'>efektivita úlohy</li>
                </ul>
                <li>- výsledok merania SUS skóre,</li>
                <li>- scenár testovania,</li>
                <li>- screener – zoznam špecifických kľúčových charakteristík oslovených používateľov pre daný výskum,</li>
                <li>- priebeh oslovovania a naplnenie screeneru,</li>
                <li>- dátum vykonania výskumu</li>
                <li>- popis metodiky testovania.</li>
            </ul>
            <h3 className="mt-8">
                Report testovania prístupnosti
            </h3>
            <p className="idsk-subtitle mb-4">
                Report musí deklarovať splnenie požiadaviek podľa štandardu WCAG 2.0 AA a podľa výnosu Ministerstva financií Slovenskej republiky č. 55/2014 Z. z. o štandardoch pre informačné systémy verejnej správy.
            </p>
        </div>
    );
}

export default MetodikaPage;