# Changelog

Všetky dôležité zmeny v tomto projekte budú zaznamenané v tomto súbore.
Formát je založený na [Keep a Changelog](https://keepachangelog.com/sk/1.0.0/) 
a tento projekt dodržiava [Sémantické verziovanie](https://semver.org/spec/v2.0.0.html).

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