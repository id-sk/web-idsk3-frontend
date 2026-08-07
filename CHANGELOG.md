[1.1.0] - 2026-08-07

Verzia 1.1.0 predstavuje rozsiahlu modernizáciu IDSK dokumentačného webu oproti pôvodnej verzii 0.1.0. Zmeny sa týkajú technického základu projektu, architektúry, dizajnu, navigácie, prístupnosti, dokumentácie komponentov aj spôsobu ich prezentácie a používania na stránke.

Pridané
- Interaktívne komponenty v dokumentácii: Vytvorené a nasadené nové komponenty podľa aktuálnych návrhov vo Figme. Komponenty sa používajú priamo v dokumentácii ako funkčné a interaktívne ukážky namiesto statických obrázkov alebo odkazov na externé príklady.
- Rozšírená dokumentácia komponentov: Doplnené podrobnejšie informácie o použití, implementácii, variantoch, prístupnosti a odporúčaných postupoch pri jednotlivých komponentoch.
- Obsahové bloky: Zavedené zdieľané Content Blocks pre konzistentnejšie skladanie dokumentačných stránok a opakované používanie rovnakých obsahových vzorov.
- Vyhľadávanie: Pridané vyhľadávanie naprieč celým dokumentačným webom.
- Mapa stránok: Pridaná samostatná mapa stránok pre jednoduchší prehľad o štruktúre dokumentácie.
- Signpost navigácia: Zavedené navigačné signposty pre jednoduchšie presúvanie medzi súvisiacimi časťami dokumentácie.
- Breadcrumbs: Pridaná breadcrumb navigácia pre lepšiu orientáciu používateľa v hierarchii webu.
- Taby: Dlhšie dokumentačné stránky boli podľa potreby rozdelené do tabov, napríklad na použitie, implementáciu a prístupnosť.
- Rozšírené návody: Výrazne rozšírené obsahové sekcie vrátane návodov pre dizajnérov a vývojárov.
- Zobrazenie zdrojového kódu: Zavedený react-syntax-highlighter a spracovanie odsadenia zdrojového kódu pre čitateľnejšie a konzistentnejšie príklady implementácie.
- Formulár pre nový komponent: Pridaný formulár na nahlásenie alebo návrh nového komponentu vrátane napojenia cez API a SMTP na MIRRI.
- Nový Header a Footer: Implementované nové verzie hlavičky a päty podľa aktuálneho návrhu IDSK.
Zmenené
- Architektúra webu: Kompletne prepracovaná architektúra dokumentačného webu vrátane informačnej štruktúry, používateľského flow a spôsobu presúvania medzi jednotlivými časťami dokumentácie.
- Navigácia: Pôvodná navigácia založená prevažne na kartičkách bola nahradená kombináciou hlavnej navigácie, dropdownov, vyhľadávania, signpostov, breadcrumbov a mapy stránok.
- Dizajn: Rozhranie webu bolo výrazne prepracované podľa aktuálnych komponentov a návrhov vo Figme.
- Layout: Zmenený hlavný layout stránok podľa aktuálneho smerovania IDSK vrátane nového spôsobu práce s obsahom, navigáciou, hlavičkou a pätou.
- Prístupnosť: Vykonaný rozsiahly audit prístupnosti a jeho zistenia boli priebežne zapracované do komponentov, navigácie a dokumentačných stránok.
- HTML sémantika: Pri implementácii sa vo väčšej miere používajú natívne HTML elementy a ich prirodzená sémantika namiesto zbytočných ARIA rolí alebo vlastných riešení.
- Klávesová navigácia a ARIA: Upravené správanie interaktívnych komponentov, focus management, popisy, vzťahy medzi prvkami a ďalšie ARIA atribúty s cieľom zlepšiť ovládanie pomocou klávesnice a asistenčných technológií.
- Komponentová architektúra: Dokumentácia bola postupne refaktorovaná tak, aby používala zdieľané komponenty namiesto opakovaného alebo statického HTML.
- Styling: Projekt sa postupne presúva od SCSS k Tailwind CSS a centrálne spravovaným globálnym štýlom v global.css.
- Závislosti na starších IDSK balíkoch: Web bol odpojený od pôvodných React a Core balíkov a potrebné štýly boli integrované priamo do projektu. Zjednodušila sa tým cesta závislostí a odstránili problémy, ktoré komplikovali alebo blokovali deployment.
 - Technologický základ: Aktualizované hlavné projektové závislosti vrátane Next.js, Reactu, Sharpu a ESLintu na novšie podporované verzie.
- Obsahová štruktúra: Viaceré rozsiahle stránky boli reorganizované a rozdelené na menšie logické časti s lepšou hierarchiou nadpisov a navigáciou.
- Dokumentačné príklady: Statické odkazy na komponenty boli na viacerých miestach nahradené priamo vloženými interaktívnymi ukážkami.
- Opravené
- Bezpečnosť závislostí: Aktualizáciou balíkov a použitím npm audit fix boli odstránené alebo aktualizáciou závislostí vyriešené viaceré bezpečnostné upozornenia so závažnosťou High a Critical.
- Deployment: Odstránené problémy spôsobené komplikovaným reťazcom starších balíkov a ich rozbaľovaním počas build procesu.
- Prístupnosť komponentov: Opravené viaceré problémy identifikované auditom, napríklad nesprávne ARIA atribúty, väzby medzi popismi a ovládacími prvkami, sémantika skupín, focus stavy a ovládanie klávesnicou.
- SSR a hydratácia: Upravené generovanie identifikátorov a rozdelenie Client/Server komponentov s cieľom predchádzať problémom pri renderovaní v Next.js.
- Štýly a layout: Odstránené viaceré konfliktné alebo príliš globálne CSS pravidlá a zjednodušené správanie štýlov naprieč dokumentáciou.
Odstránené
- Deprecated komponenty: Odstránené zastarané komponenty, ktoré už nezodpovedali aktuálnemu dizajnu alebo spôsobu používania IDSK.
- Staré navigačné vzory: Odstránená pôvodná kartičková navigácia na miestach, kde bola nahradená novou informačnou architektúrou.
- Staré React/Core balíky: Odstránená priama závislosť dokumentačného webu od pôvodných IDSK React a Core balíkov.
- Nepotrebná komplexita: Zjednodušené alebo odstránené viaceré prvky, ktoré vytvárali zbytočnú abstrakciu alebo overengineering bez primeraného prínosu pre projekt.
- Časť SCSS vrstvy: Postupne odstránené nepotrebné SCSS implementácie v prospech Tailwind CSS a centrálne spravovaných globálnych štýlov.
Bezpečnosť
- Aktualizované kľúčové runtime a development závislosti.
- Riešené závažné bezpečnostné upozornenia identifikované prostredníctvom npm audit.
- Zjednodušená dependency architektúra projektu s cieľom znížiť závislosť od zastaraných alebo nepriamo spravovaných balíkov.