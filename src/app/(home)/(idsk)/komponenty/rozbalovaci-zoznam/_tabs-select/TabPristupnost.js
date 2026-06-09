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
                    <li><code className={codeClass}>Tab</code> / <code className={codeClass}>Shift + Tab</code> – presun zamerania na rozbaľovacie pole alebo z neho na predchádzajúci/nasledujúci prvok.</li>
                    <li><code className={codeClass}>Medzerník</code> alebo <code className={codeClass}>Alt + Šípka dole</code> – otvorí zatvorené rozbaľovacie pole.</li>
                    <li><code className={codeClass}>Šípka hore</code> / <code className={codeClass}>Šípka dole</code> – pohyb medzi jednotlivými možnosťami (funguje v zatvorenom aj otvorenom stave).</li>
                    <li><code className={codeClass}>Enter</code> alebo <code className={codeClass}>Medzerník</code> – potvrdí výber a zatvorí rozbaľovací zoznam.</li>
                    <li><code className={codeClass}>Esc</code> – zbalí rozbaľovací zoznam bez zmeny aktuálneho výberu.</li>
                    <li><code className={codeClass}>Home</code> / <code className={codeClass}>End</code> – presun na prvú alebo poslednú možnosť v zozname.</li>
                    <li><strong>Zadávanie textu</strong> – stlačenie písmena na klávesnici rýchlo presunie zameranie na možnosť začínajúcu na daný znak.</li>
                </Ul>
                
                <H3>Základné pravidlá prístupnosti</H3>
                <Ul>
                    <li>
                        Používajte natívne HTML prvky <code className={codeClass}>&lt;select&gt;</code> a <code className={codeClass}>&lt;option&gt;</code>, spoločne s atribútom <code className={codeClass}>value=&quot;&quot;</code>.
                    </li>
                    <li>
                        Každý prvok <code className={codeClass}>&lt;select&gt;</code> musí mať jasný, programovo asociovaný popis cez značku <code className={codeClass}>&lt;label&gt;</code>. Nikdy nenahrádzajte skutočný label predvolenou prvou možnosťou v zozname (napríklad zmazaním labelu a ponechaním iba možnosti &quot;Vyberte si...&quot;).
                    </li>
                    <li>
                        Vyhnite sa automatickému odosielaniu (Auto-submission): Nikdy nepoužívajte udalosť zmeny výberu (<code className={codeClass}>onChange</code>) na okamžité odoslanie formulára alebo navigáciu. Mätie to používateľov asistenčných technológií, ktorí pri prechádzaní zoznamu šípkami nechtiac aktivujú zmeny. Vždy poskytnite potvrdzovacie tlačidlo.
                    </li>
                    <li>
                        Vyhnite sa závislým poliam: Nemeňte dynamicky možnosti v jednom rozbaľovacom poli len na základe toho, čo používateľ vybral v inom. Pre mnohých používateľov je mätúce pochopiť, ako jedna voľba ovplyvňuje druhú.
                    </li>
                    <li>
                        Pri zbere neovplyvnených dát (napríklad v dotazníkoch) sa vyhnite predvyplneniu určitej hodnoty. Uistite sa, že prvá predvolená možnosť je neaktívna inštrukcia (napr. <em>-- Vyberte možnosť --</em>).
                    </li>
                    <li>
                        Zabezpečte jasne viditeľný stav zamerania (focus state) pre samotné rozbaľovacie pole.
                    </li>
                    <li>
                        Prípadný doplňujúci text (hint) prepojte na pole cez atribút <code className={codeClass}>aria-describedby</code>. V prípade povinného poľa nezabudnite pridať atribút <code className={codeClass}>required</code>.
                    </li>
                    <li>
                        Ak je zoznam rozsiahly, použite element <code className={codeClass}>&lt;optgroup label=&quot;Názov skupiny&quot;&gt;</code> na zoskupenie súvisiacich <code className={codeClass}>&lt;option&gt;</code>. Uľahčí to orientáciu nielen vizuálne, ale aj pre asistenčné technológie.
                    </li>
                    <li>
                        Ak pole požaduje bežné údaje (napríklad krajinu v adrese), použite atribút <code className={codeClass}>autocomplete</code> (napr. <code className={codeClass}>autocomplete=&quot;country&quot;</code>), aby ste používateľom uľahčili vypĺňanie.
                    </li>
                    <li>
                        Aj keď HTML umožňuje vložiť do rozbaľovacieho poľa tag <code className={codeClass}>&lt;hr&gt;</code>, považuje sa len za vizuálny prvok a asistenčné technológie ho ignorujú. Nepoužívajte ho na prenášanie dôležitého kontextu.
                    </li>
                </Ul>

            </SectionBlock>
        </div>
    );
};

export default TabPristupnost;