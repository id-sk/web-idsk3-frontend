import React from 'react';
import { SectionBlock, H3, Text, Ul } from '@/app/(home)/_components/content-blocks/ContentBlocks';

const TabPristupnost = () => {
    const codeClass = "bg-neutral-100 border border-neutral-200 font-mono text-sm px-1.5 py-0.5 rounded text-black";

    return (
        <div className="animate-fade-in text-black w-full min-w-0">
            <SectionBlock titleString="Prístupnosť (Accessibility)">
                
                <Text>
                    Komponent je v súlade s normami WCAG 2.2 AA. Komponent spĺňa požiadavky na kontrastné pomery a jeho súčasťou sú interakcie s klávesnicou a čítačkami obrazovky.
                </Text>
                
                <H3>Klávesové ovládanie</H3>
                <Text className="mb-4">
                    Rozbaľovacie pole má plnú podporu natívneho klávesnicového ovládania:
                </Text>
                <Ul className="mb-8">
                   <li>
                        <code className={codeClass}>Tab</code> /{' '}
                        <code className={codeClass}>Shift + Tab</code> – presun zamerania na rozbaľovacie pole alebo z neho na predchádzajúci/nasledujúci prvok.
                    </li>
                    <li>
                        <code className={codeClass}>Medzerník</code>,{' '}
                        <code className={codeClass}>Enter</code> alebo{' '}
                        <code className={codeClass}>Alt + Šípka dole</code> – otvorí zatvorené rozbaľovacie pole.
                    </li>
                    <li>
                        <code className={codeClass}>Šípka hore</code> /{' '}
                        <code className={codeClass}>Šípka dole</code> – v otvorenom zozname presúva zvýraznenie medzi možnosťami. V zatvorenom stave otvorí zoznam.
                    </li>
                    <li>
                        <code className={codeClass}>PageUp</code> /{' '}
                        <code className={codeClass}>PageDown</code> – presunie zvýraznenie o viac možností naraz.
                    </li>
                    <li>
                        <code className={codeClass}>Home</code> /{' '}
                        <code className={codeClass}>End</code> – presunie zvýraznenie na prvú alebo poslednú dostupnú možnosť v zozname.
                    </li>
                    <li>
                        <code className={codeClass}>Enter</code> alebo{' '}
                        <code className={codeClass}>Medzerník</code> – potvrdí zvýraznenú možnosť a zatvorí rozbaľovací zoznam.
                    </li>
                    <li>
                        <code className={codeClass}>Esc</code> – zbalí rozbaľovací zoznam bez zmeny aktuálneho výberu.
                    </li>
                    <li>
                        <strong>Zadávanie textu</strong> – stlačenie písmena alebo krátkej postupnosti písmen presunie zvýraznenie na možnosť začínajúcu zadaným textom.
                    </li>
                    <li>
                        <strong>Klik mimo komponentu</strong> – zatvorí otvorený zoznam bez zmeny aktuálneho výberu.
                    </li>
                    <li>
                        <strong>Neaktívne možnosti</strong> – pri pohybe klávesnicou sa preskakujú a nie je možné ich vybrať.
                    </li>
                </Ul>
                
                <H3>Základné pravidlá prístupnosti</H3>
                <Ul>
                    <li>
                        Ak používate natívne rozbaľovacie pole, použite prvky{' '}
                        <code className={codeClass}>&lt;select&gt;</code> a{' '}
                        <code className={codeClass}>&lt;option&gt;</code>. Ak používate vlastný komponent, musí poskytovať rovnakú funkčnosť a porovnateľnú podporu klávesnice a asistenčných technológií.
                    </li>
                    <li>
                        Každé rozbaľovacie pole musí mať jasný, programovo asociovaný popis cez značku{' '}
                        <code className={codeClass}>&lt;label&gt;</code> alebo ekvivalentné prepojenie pomocou ARIA atribútov. Nikdy nenahrádzajte skutočný label iba predvolenou hodnotou v zozname, napríklad textom „Vyberte si...“.
                    </li>
                    <li>
                        Predvolená hodnota alebo placeholder má používateľovi iba pomôcť pochopiť očakávaný výber. Nesmie nahrádzať label a nemá byť použitý ako jediný popis poľa.
                    </li>
                    <li>
                        Vyhnite sa automatickému odosielaniu. Nepoužívajte zmenu výberu na okamžité odoslanie formulára alebo navigáciu bez jasného potvrdenia používateľom. Pri formulároch vždy poskytnite samostatné potvrdzovacie tlačidlo.
                    </li>
                    <li>
                        Ak výber v rozbaľovacom poli mení obsah stránky alebo dostupné možnosti v inom poli, zmenu jasne oznámte a zachovajte predvídateľné poradie ovládania. Závislé polia používajte iba vtedy, keď sú pre používateľa zrozumiteľné.
                    </li>
                    <li>
                        Pri zbere neovplyvnených dát, napríklad v dotazníkoch, sa vyhnite predvyplneniu konkrétnej hodnoty, ak by mohla ovplyvniť odpoveď. Použite neutrálny placeholder, napríklad <em>Vyberte možnosť</em>.
                    </li>
                    <li>
                        Zabezpečte jasne viditeľný stav zamerania pre zatvorený ovládací prvok aj pre zvýraznenú položku v otvorenom zozname.
                    </li>
                    <li>
                        Prípadný doplňujúci text prepojte na ovládací prvok cez atribút{' '}
                        <code className={codeClass}>aria-describedby</code>. V prípade povinného poľa použite natívny atribút{' '}
                        <code className={codeClass}>required</code> pri natívnom prvku alebo{' '}
                        <code className={codeClass}>aria-required=&quot;true&quot;</code> pri vlastnom komponente.
                    </li>
                    <li>
                        Pri vlastnom rozbaľovacom poli zabezpečte správne stavy ako{' '}
                        <code className={codeClass}>aria-expanded</code>,{' '}
                        <code className={codeClass}>aria-controls</code>,{' '}
                        <code className={codeClass}>aria-activedescendant</code> a{' '}
                        <code className={codeClass}>aria-selected</code>, ak sú pre daný vzor použité.
                    </li>
                    <li>
                        Ak je zoznam rozsiahly, zvážte zoskupenie súvisiacich možností. Pri natívnom prvku použite{' '}
                        <code className={codeClass}>&lt;optgroup label=&quot;Názov skupiny&quot;&gt;</code>. Pri vlastnom komponente zabezpečte, aby boli skupiny zrozumiteľné vizuálne aj pre asistenčné technológie.
                    </li>
                    <li>
                        Ak pole požaduje bežné údaje, napríklad krajinu v adrese, použite pri natívnom prvku atribút{' '}
                        <code className={codeClass}>autocomplete</code>, napríklad{' '}
                        <code className={codeClass}>autocomplete=&quot;country&quot;</code>. Pri vlastnom komponente zvážte, či je vhodnejší natívny prvok alebo samostatné textové pole s našepkávaním.
                    </li>
                    <li>
                        Nepoužívajte vizuálne oddeľovače ako náhradu za významové zoskupenie možností. Ak potrebujete oddeliť skupiny položiek, použite skutočné skupiny alebo zrozumiteľné skupinové nadpisy.
                    </li>
                </Ul>
            </SectionBlock>
        </div>
    );
};

export default TabPristupnost;