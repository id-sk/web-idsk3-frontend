# Changelog

Všetky dôležité zmeny v tomto projekte budú zaznamenané v tomto súbore.
Formát je založený na [Keep a Changelog](https://keepachangelog.com/sk/1.0.0/) 
a tento projekt dodržiava [Sémantické verziovanie](https://semver.org/spec/v2.0.0.html).

## [Unreleased] - 2026-05-14

### Pridané (Added)
- **Architektúra:** Implementovaný Compound Components Pattern pre systém Tabov (Tabs, TabsList, TabsTrigger, TabsContent) využívajúci React Context API pre zapuzdrenú správu stavu a ARIA navigáciu.
- **Komponenty:** Pridaná podpora pre dynamický headingLevel v komponente CustomAccordion pre zabezpečenie správnej sémantickej hierarchie dokumentu.
- **Prístupnosť:** Implementovaná kompletná klávesová navigácia pre Taby (šípky, Home, End) a Akordeón (Space, Enter).
- **Tooling:** Zavedený natívny hook useId pre stabilné generovanie ID, čím sa eliminovali chyby pri SSR hydratácii v Next.js.

### Zmenené (Changed)
- **Prístupnosť (Banner):** Zásadný refaktor komponentu InformationBanner. Odstránená nevhodná rola role="status" zo statických prvkov a nahradená natívnou značkou <section> (implicitný region).
- **Prístupnosť (ARIA):** Vylepšený mechanizmus Accessible Name Computation – atribút aria-labelledby sa teraz prioritne mapuje priamo na viditeľný nadpis <h3> namiesto skrytých sr-only elementov.
- **Dizajn (Kontrast):** Upravený styling inline kódu (codeClass) – farba textu zmenená na čiernu pre dosiahnutie plného súladu s WCAG AA kontrastnými pomermi na sivom pozadí.
- **Refaktoring:** Dokumentačné taby (TabPouzitie, TabImplementacia, TabPristupnost) kompletne prepísané s využitím modulu ContentBlocks.jsx pre lepšiu udržateľnosť.
- **Kód:** Upravený state management v Akordeóne na funkcionálny update setIsOpen(prev => !prev) pre zaručenie atomických zmien stavu.

### Opravené (Fixed)
- **Next.js:** Vyriešené chyby typu Unsupported Server Component type pridaním direktívy 'use client' do interaktívnych modulov a modulov závislých na react-syntax-highlighter.
- **Importy:** Opravené ReferenceError a Attempted import error v rozdelených súboroch tabov spôsobené nekonzistentným exportovaním komponentov.

### Odstránené (Removed)
- **Architektúra:** Odstránené manuálne odovzdávanie stavov (activeTab) v page.jsx, nahradené automatizovaným kontextom.
- **Prístupnosť:** Odstránené duplicitné sr-only labely v banneroch, ktoré boli nahradené priamym prepojením na viditeľné nadpisy.
- **Kód:** Odstránené nebezpečné generovanie ID cez Math.random().

## [Unreleased] - 2026-05-12

### Pridané (Added)
- **Architektúra:** Zavedená 3-vrstvová CSS architektúra (Base/Orchestration, CMS Sandbox, Vendor Patche) podľa enterprise a MIRRI štandardov.
- **Komponenty:** Vytvorený globálny architektonický modul `ContentBlocks.jsx` (obsahuje `SectionBlock` a `Text`) pre prístupnejšie a jednotnejšie generovanie obsahu.
- **Štýly:** Vytvorený súbor `src/styles/cms.css` slúžiaci ako izolovaný sandbox pre obsah z CMS so zapnutým bezpečným `overflow-wrap: anywhere`.
- **Dáta:** Konsolidovaný centrálny súbor `data.js` (Single Source of Truth) pre texty, farby a metadáta.


### Zmenené (Changed)
- **Komponenty:** `ColorCard.jsx` refaktorovaný na dve zóny (horná farebná pre kliknutie/tlačidlo, dolná textová pre označenie a kopírovanie textu myšou) pre lepšie UX.
- **Štýly:** IDSK overridy presunuté zo SCSS (`idsk-overrides.scss`) do čistého CSS (`src/styles/idsk-overrides.css`). Odstránená závislosť na Tailwind kompilátore (`@apply`) v vendor patchoch pre lepšiu stabilitu a debugovanie.
- **Tailwind:** `tailwind.config.js` vyčistený od "pixel registry" (statické line-heights/font-sizes) a prekonfigurovaný čisto na sémantické dizajnové tokeny.
- **SEO:** Metadáta stránky `ColorPalette` extrahované do Server Komponentu (`page.js`), obsah ponechaný v Client Komponente.

### Odstránené (Removed)
- **Komponenty:** Odstránený starý `ColorSection.jsx`, plne nahradený novým `SectionBlock`.
- **Štýly:** Odstránený `src/styles/index.css` a `src/styles/global.css` – nahradené centrálnym orchestrátorom `src/app/globals.css`.
- **Štýly:** Vymazané nebezpečné globálne CSS pravidlo `word-break: break-word` (CSS shotgun) pre tagy `div` a `span`, ktoré hrozilo rozbitím layoutov.
