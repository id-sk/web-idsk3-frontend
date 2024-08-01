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

export const primaryColors = [
  { name: 'Primárna farba', hex: '#126dff', rgb: 'rgb(18, 109, 255)'},
  { name: 'Tmavá', hex: '#072c66', rgb: 'rgb(7, 44, 102)'},
  { name: 'Pozadie', hex: '#ffffff', rgb: 'rgb(255, 255, 255)'},
];

export const extendedPrimaryColors = [
  { name: 'P600', hex: '#072c66', rgb: 'rgb(7, 44, 102)' },
  { name: 'P500', hex: '#0b4199', rgb: 'rgb(11, 65, 153)' },
  { name: 'P400', hex: '#126dff', rgb: 'rgb(18, 109, 255)'},
  { name: 'P300', hex: '#88b3f6', rgb: 'rgb(136, 179, 246)'},
  { name: 'P200', hex: '#c3d9f9', rgb: 'rgb(195, 217, 249)'},
  { name: 'P100', hex: '#eff5fe', rgb: 'rgb(239, 245, 254)'},
];

export const neutralColors = [
  { name: 'Čierna', hex: '#000000', rgb: 'rgb(0, 0, 0)'},
  { name: 'Čierna 70', hex: '#000000', rgb: 'rgb(0, 0, 0)'},
  { name: 'Čierna 40', hex: '#000000', rgb: 'rgb(0, 0, 0)' },
  { name: 'Čierna 10', hex: '#000000', rgb: 'rgb(0, 0, 0)' },
  { name: 'Biela', hex: '#ffffff', rgb: 'rgb(255, 255, 255)'},
  { name: 'Biela 70', hex: '#ffffff', rgb: 'rgb(255, 255, 255)'},
  { name: 'Biela 40', hex: '#ffffff', rgb: 'rgb(255, 255, 255)'},
  { name: 'Biela 10', hex: '#ffffff', rgb: 'rgb(255, 255, 255)'},
  { name: 'N900', hex: '#212121', rgb: 'rgb(33, 33, 33)'},
  { name: 'N800', hex: '#424242', rgb: 'rgb(66, 66, 66)'},
  { name: 'N700', hex: '#616161', rgb: 'rgb(97, 97, 97)'},
  { name: 'N600', hex: '#757575', rgb: 'rgb(117, 117, 117)' },
  { name: 'N500', hex: '#9e9e9e', rgb: 'rgb(158, 158, 158)'},
  { name: 'N400', hex: '#bdbdbd', rgb: 'rgb(189, 189, 189)'},
  { name: 'N300', hex: '#e0e0e0', rgb: 'rgb(224, 224, 224)'},
  { name: 'N200', hex: '#eeeeee', rgb: 'rgb(238, 238, 238)'},
  { name: 'N100', hex: '#f5f5f5', rgb: 'rgb(245, 245, 245)'},
  { name: 'N90', hex: '#fafafa', rgb: 'rgb(250, 250, 250)'},
];

export const secondaryColors = [
  { name: 'Zelená/G600', hex: '#2e3106', rgb: 'rgb(46, 49, 6)'},
  { name: 'Zelená/G500', hex: '#444a09', rgb: 'rgb(68, 74, 9)'},
  { name: 'Zelená/G400', hex: '#727b0f', rgb: 'rgb(114, 123, 15)'},
  { name: 'Zelená/G300', hex: '#b4b764', rgb: 'rgb(180, 183, 100)'},
  { name: 'Zelená/G200', hex: '#d5d6a2', rgb: 'rgb(213, 214, 162)'},
  { name: 'Zelená/G100', hex: '#f4f4ec', rgb: 'rgb(244, 244, 236)'},
  { name: 'Turquoise/T600', hex: '#06372c', rgb: 'rgb(6, 55, 44)'},
  { name: 'Turquoise/T500', hex: '#125041', rgb: 'rgb(18, 80, 65)'},
  { name: 'Turquoise/T400', hex: '#1e856d', rgb: 'rgb(30, 133, 109)'},
  { name: 'Turquoise/T300', hex: '#71bdab', rgb: 'rgb(113, 189, 171)'},
  { name: 'Turquoise/T200', hex: '#a9d9cd', rgb: 'rgb(169, 217, 205)'},
  { name: 'Turquoise/T100', hex: '#edf5f3', rgb: 'rgb(237, 245, 243)'},
  { name: 'Purple/L600', hex: '#3c1b66', rgb: 'rgb(60, 27, 102)'},
  { name: 'Purple/L500', hex: '#592999', rgb: 'rgb(89, 41, 153)'},
  { name: 'Purple/L400', hex: '#9544ff', rgb: 'rgb(149, 68, 255)'},
  { name: 'Purple/L300', hex: '#c79aff', rgb: 'rgb(199, 154, 255)'},
  { name: 'Purple/L200', hex: '#e0c5ff', rgb: 'rgb(224, 197, 255)'},
  { name: 'Purple/L100', hex: '#f7f0ff', rgb: 'rgb(247, 240, 255)'},
  { name: 'Pink/R600', hex: '#530250', rgb: 'rgb(83, 2, 80)'},
  { name: 'Pink/R500', hex: '#7c0478', rgb: 'rgb(124, 4, 120)'},
  { name: 'Pink/R400', hex: '#cf06c8', rgb: 'rgb(207, 6, 200)'},
  { name: 'Pink/R300', hex: '#e56fe3', rgb: 'rgb(229, 111, 227)'},
  { name: 'Pink/R200', hex: '#f0aaef', rgb: 'rgb(240, 170, 239)'},
  { name: 'Pink/R100', hex: '#fbebfb', rgb: 'rgb(251, 235, 251)'},
];

export const alertColors = [
  { name: 'Základná tmavá', hex: '#072c66', rgb: 'rgb(7, 44, 102)'},
  { name: 'Základná', hex: '#126dff', rgb: 'rgb(18, 109, 255)' },
  { name: 'Základná médium', hex: '#c3d9f9', rgb: 'rgb(195, 217, 249)' },
  { name: 'Základná svetlá', hex: '#eff5fe', rgb: 'rgb(239, 245, 254)'},
  { name: 'Výstražná tmavá', hex: '#4e0711', rgb: 'rgb(78, 7, 17)'},
  { name: 'Výstražná', hex: '#c3112b', rgb: 'rgb(195, 17, 43)'},
  { name: 'Výstražná médium', hex: '#f8b5b9', rgb: 'rgb(248, 181, 185)'},
  { name: 'Výstražná svetlá', hex: '#fbeef0', rgb: 'rgb(251, 238, 240)'},
  { name: 'Pozitívna tmavá', hex: '#033608', rgb: 'rgb(3, 54, 8)'},
  { name: 'Pozitívna', hex: '#078814', rgb: 'rgb(7, 136, 20)'},
  { name: 'Pozitívna médium', hex: '#9fdaa5', rgb: 'rgb(159, 218, 165)'},
  { name: 'Pozitívna svetlá', hex: '#ebf5ec', rgb: 'rgb(235, 245, 236)'},
  { name: 'Upozornenie tmavá', hex: '#4e2a00', rgb: 'rgb(78, 42, 0)'},
  { name: 'Upozornenie', hex: '#bd730c', rgb: 'rgb(189, 115, 12)'},
  { name: 'Upozornenie médium', hex: '#ebcfaa', rgb: 'rgb(235, 207, 170)'},
  { name: 'Upozornenie svetlá', hex: '#faf4ec', rgb: 'rgb(250, 244, 236)'},
];

export const textColors = [
  { name: 'Čierny text', hex: '#000000', rgb: 'rgb(0, 0, 0)'},
  { name: 'Sivý text', hex: '#757575', rgb: 'rgb(117, 117, 117)'},
  { name: 'Svetlo sivý text', hex: '#e0e0e0', rgb: 'rgb(224, 224, 224)'},
  { name: 'Biely text', hex: '#ffffff', rgb: 'rgb(255, 255, 255)'},
  { name: 'Tmavý text', hex: '#072c66', rgb: 'rgb(7, 44, 102)'},
  { name: 'Médium text', hex: '#0b4199', rgb: 'rgb(11, 65, 153)'},
  { name: 'Svetlý text', hex: '#88b3f6', rgb: 'rgb(136, 179, 246)'},
  { name: 'Primárny text', hex: '#126dff', rgb: 'rgb(18, 109, 255)'},
  { name: 'Pozitívny tmavý text', hex: '#033608', rgb: 'rgb(3, 54, 8)'},
  { name: 'Pozitívny text', hex: '#078814', rgb: 'rgb(7, 136, 20)'},
  { name: 'Výstražný tmavý text', hex: '#4e0711', rgb: 'rgb(78, 7, 17)'},
  { name: 'Výstražný text', hex: '#c3112b', rgb: 'rgb(195, 17, 43)'},
  { name: 'Focus stav', hex: '#d96e00', rgb: 'rgb(217, 110, 0)'},
];

export const slovakColors = [
  { name: 'Slovenská biela', hex: '#ffffff', rgb: 'rgb(255, 255, 255)' },
  { name: 'Slovenská červená', hex: '#c3112b', rgb: 'rgb(195, 17, 43)'},
  { name: 'Slovenská modrá', hex: '#1e4e9d', rgb: 'rgb(30, 78, 157)'},
  { name: 'Slovenská sivá', hex: '#DDDEDE', rgb: 'rgb(221, 222, 222)'},
];

