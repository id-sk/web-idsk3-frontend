const commonSrc = "/images/home-page/blank.png";
const commonDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus enim quis orci finibus imperdiet.";

export const baseData = [
  { href: "zaklady-principy/typografia", src: "/images/zaklady-principy-cards/Typografia.svg", title: "Typografia", description: "Pravidlá pre použitie textových prvkov, typov a veľkostí písma.", alt: "" },
  { href: "zaklady-principy/farebna-paleta", src: "/images/zaklady-principy-cards/Farby.svg", title: "Farby", description: "Prehľad farebných paletiet pre grafické používateľské rozhranie.", alt: "" },
  { href: "zaklady-principy/ikony", src: "/images/zaklady-principy-cards/Ikony.svg", title: "Ikony", description: "Súbor vizuálnych symbolov používateľského rozhrania.", alt: ""},
  { href: "zaklady-principy/tiene", src: "/images/zaklady-principy-cards/Tiene.svg", title: "Tiene", description: "Typy tieňov a ich použitie na vizuálne rozlíšenie obsahu.", alt: "" },
  { href: "zaklady-principy/medzery", src: "/images/zaklady-principy-cards/Medzery.svg", title: "Medzery", description: "Medzery a ich rozmery.", alt: "" },
  { href: "zaklady-principy/grid", src: "/images/zaklady-principy-cards/Grid.svg", title: "Grid", description: "Pravidlá rozloženia stránky do jedného alebo viacerých stĺpcov.", alt: ""}
];

export const componentsData = [
  { href: "komponenty/hlavicka", src: "/images/komponenty-cards/hlavicka-web-sidla.svg", title: "Hlavička - webové sídla", description: "Hlavná navigácia webovej stránky", alt: "" },
  { href: "komponenty/hlavicka", src: "/images/komponenty-cards/hlavicka-web-aplikacie.svg", title: "Hlavička - webové aplikácie", description: "Hlavička pre rozhrania, ktoré vyžadujú autentifikáciu používateľa.", alt: ""},
  { href: "komponenty/pata", src: "/images/komponenty-cards/pata.svg", title: "Päta", description: "Informácie o prevádzkovateľovi webovej stránky a textové odkazy.", alt: ""},
  { href: "komponenty/akordeon", src: "/images/komponenty-cards/akordeon.svg", title: "Akordeón", description: "Nástroj na zobrazenie alebo skrývanie prehľadu sekcií súvisiaceho obsahu.", alt: ""},
  { href: "komponenty/lista-spatnej-vazby", src: "/images/komponenty-cards/lista-spatnej-vazby.svg", title: "Lišta spätnej väzby", description: "Slúži na návrhy a vyjadrenie spokojnosti s informáciami získanými na stránke.", alt: ""},
  { href: "/komponenty/text-input", src: "/images/komponenty-cards/textove-pole.svg", title: "Textové pole", description: "Prvok, kam užívateľ zadáva textovú informáciu", alt: ""},
  { href: "/komponenty/text-input", src: "/images/komponenty-cards/viacriadkove-text-pole.svg", title: "Viacriadkové textové pole", description: "Prvok, kam užívateľ zadáva textovú informáciu vo viacerých riadkoch", alt: ""},
  { href: "/komponenty/text-input", src: "/images/komponenty-cards/pole-pre-nahratie-suboru.svg", title: "Pole pre nahratie súboru", description: "Nástroj umožňujúci používateľom nahrať súbory.", alt: ""},
  { href: "/komponenty/radio-button", src: "/images/komponenty-cards/prepinacie-pole.svg", title: "Prepínacie pole", description: "Formulárový prvok pre výber jednej z preddefinovaných možností.", alt: ""},
  { href: "/komponenty/tlacidlo", src: "/images/komponenty-cards/tlacidlo-primarne.svg", title: "Tlačidlo - Primárne", description: "Hlavné akčné prvky, ktoré majú najväčší vplyv na používateľskú interakciu.", alt: ""},
  { href: "/komponenty/tlacidlo", src: "/images/komponenty-cards/tlacidlo-sekundarne.svg", title: "Tlačidlo - Sekundárne", description: "Vedľajšie akčné prvky, ktoré môžu byť potrebné v určitých situáciách.", alt: ""},
  { href: "/komponenty/tlacidlo", src: "/images/komponenty-cards/tlacidlo-textove.svg", title: "Tlačidlo - Textové", description: "Nástroj na užívateľskú interakciu s najnižšou prioritou.", alt: ""},
  { href: "/komponenty/informacna-lista", src: "/images/komponenty-cards/info-lista-upozornenie.svg", title: "Inf.lišta - Upozornenie", description: "Výrazný prvok, upozornenie použivateľa o podstatných/nových informáciach", alt: ""},
  { href: "/komponenty/informacna-lista", src: "/images/komponenty-cards/info-lista-oznamenie.svg", title: "Inf.lišta - Oznámenie", description: "Prvok slúžiaci na zobrazenie permanentnej informácie pre používateľa.", alt: ""},
  { href: "/komponenty/karticka", src: "/images/komponenty-cards/karticka.svg", title: "Kartička", description: "Vizuálna reprezentácia obsahu článkov alebo podstránok.", alt: ""},
  { href: "/komponenty/checkbox", src: "/images/komponenty-cards/zaskrtavacie-pole.svg", title: "Zaškrtávacie pole", description: "Interaktívny prvok, ktorý umožňuje používateľovi vybrať jednu alebo viacero položiek.", alt:""},
  { href: "/komponenty/dropdown", src: "/images/komponenty-cards/rozbalovaci-zoznam.svg", title: "Rozbaľovací zoznam", description: "Interaktívny zoznam akcií alebo možností, ktoré je možné vybrať", alt: ""},
  { href: "/komponenty/text-input", src: "/images/komponenty-cards/chyby-a-validacie.svg", title: "Chyby a validácie", description: "Pravidlá ako zobrazovať chyby a validácie v elektronickom formulári.", alt:""},
  { href: "/komponenty/razcestnik", src: commonSrc, title: "Vertikálny rázcestník", description: "Navigačný prvok formou jednoduchej dlaždice usporiadanej vertikálne", alt: ""},
  { href: "/komponenty/razcestnik", src: commonSrc, title: "Horizontálny rázcestník", description: "Navigačný prvok formou jednoduchej dlaždice usporiadanej horizontálne", alt: ""},
  { href: "/komponenty/razcestnik", src: commonSrc, title: "Textový rázcestník", description: "Navigačný prvok formou jednoduchej dlaždice , zloženej z nadpisu, popisu a oddeľovacej čiary.", alt: ""}
];

export const whatIsData = [
  { href: "/co-je/uvod", src: "/images/co-je-cards/co-je-id-sk.svg", title: "Úvod o dizajn manuále ID-SK", description: "ID-SK vznikol najmä za účelom zaistenia konzistentnosti dizajnu používateľských rozhraní elektronických služieb a webových sídiel slovenského e-Governmentu.", alt: ""},
  { href: "/co-je/principy", src: "/images/co-je-cards/10-principov-idsk.svg", title: "10 princípov ID-SK", description: "10 princípov tvorby elektronických služieb podľa IDSK. Dizajn služby začína identifikáciou potrieb používateľov...", alt: ""},
  { href: "/co-je/metodika", src: "/images/co-je-cards/metodika-ucd.svg", title: "Metodika UCD", description: "Metodika user-centered dizajnu (UCD) zabezpečí zmysluplnosť a použiteľnosť služieb zo strany koncového používateľa - občana.", alt: "" },
  { href: "/co-je/navod-pre-dizajnerov", src: "/images/co-je-cards/navod-pre-dizajnerov.svg", title: "Návod pre dizajnérov", description: "V dizajnérskom nástroji Figma nájdete knižnicu dizajnového systému ID-SK", alt: ""},
  { href: "/co-je/navod-pre-vyvojarov", src: "/images/co-je-cards/navod-pre-vyvojarov.svg", title: "Návody pre vývojárov", description: 'Ak budete chcieť vytvoriť elektronickú službu pomocou ID-SK, môžete využiť repozitár dostupný na GitHub-e.', alt: ""},
];

export const homePageData = [
  { href: "/co-je", src: "/images/home-page/co-je-id-sk.svg", title: "Čo je ID-SK", description: "Jednotný dizajn manuál elektronických služieb Slovenska. „ID-SK“ je dizajnový systém + manuál na tvorbu elektronických služieb a webových sídiel štátu.", alt: ""},
  { href: "/co-je/principy", src: "/images/home-page/10-principov-idsk.svg", title: "10 princípov ID-SK", description: "1. princíp – princíp užitočnosti – začnite potrebami používateľov. Dizajn služby začína identifikáciou potrieb používateľov. Nevychádzajte z domnienok.", alt: ""},
  { href: "/co-je/metodika", src: "/images/home-page/metodika-a-usmernenia.svg", title: "Metodika a usmernenia", description: "Elektronické služby štátu by mali byť pripravované metodikou User-Centered Design (UCD), aby sa zabezpečila zmysluplnosť a použiteľnosť služieb občanmi.", alt: ""},
  { href: "/zaklady-principy", src: "/images/home-page/zaklady-style-guide.svg", title: "Základy (Style guide)", description: "Súbor štýlov používateľského rozhrania a štandardov dizajnu pre komponenty. Typografia, farebná paleta, ikony, tiene, medzery, stĺpce, použitie obrázkov, ...", alt: ""},
  { href: "/komponenty", src: "/images/home-page/komponenty.svg", title: "Komponenty", description: "Knižnica komponentov, ktoré sa používajú na tvorbu elektronických služieb a webových sídiel. Akordeón, Dátové polia, Hlavička, Päta, Tlačidlá, ...", alt: ""},
  { href: "/vzory", src: "/images/home-page/vzory-ux-patterns.svg", title: "Vzory (UX patterns)", description: "Používanie a adaptácia návrhových vzorov: Adresy, Aktuality, Blok s rázcestníkom, Cookie banner, Článok, Dátum, Indikátor progresu, Meno, Priezvisko, Email...", alt: ""},
];