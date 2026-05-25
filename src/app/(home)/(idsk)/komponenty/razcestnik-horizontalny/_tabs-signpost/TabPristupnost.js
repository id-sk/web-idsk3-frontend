import React from 'react';
import { SectionBlock, H3, Text, Ul } from '@/app/(home)/_components/content-blocks/ContentBlocks';

const TabPristupnost = () => {
    const codeClass = "bg-neutral-100 border border-neutral-200 font-mono text-sm px-1.5 py-0.5 rounded text-black";

    return (
        <div className="animate-fade-in text-black w-full min-w-0">
            <SectionBlock titleString="Prístupnosť (Accessibility)">
                
                <Text>
                    Rázcestník spĺňa požiadavky WCAG 2.1 AA. Podporuje ovládanie klávesnicou a asistenčnými technológiami.
                </Text>
                
                <H3>Klávesové ovládanie</H3>
                <Ul className="mb-8">
                    <li><code className={codeClass}>Tab</code> – presun zamerania klávesnice (focus) na nasledujúci rázcestník alebo interaktívny prvok.</li>
                    <li><code className={codeClass}>Shift + Tab</code> – presun zamerania klávesnice (focus) na predchádzajúci prvok.</li>
                    <li><code className={codeClass}>Enter</code> – aktivovanie rázcestníka (prechod na cieľovú stránku).</li>
                </Ul>
                
                <H3>Základné pravidlá prístupnosti</H3>
                <Ul>
                    <li>
                        Rázcestník funguje ako jeden interaktívny cieľ, preto musí byť celý komponent obalený v elemente <code className={codeClass}>&lt;a&gt;</code> s platným atribútom <code className={codeClass}>href</code>. Zabezpečíte tým natívnu podporu pre navigáciu klávesnicou bez nutnosti pridávať <code className={codeClass}>tabindex</code>.
                    </li>
                    <li>
                        Názov rázcestníka musí byť implementovaný pomocou správnej úrovne nadpisu (zvyčajne <code className={codeClass}>&lt;h2&gt;</code>, <code className={codeClass}>&lt;h3&gt;</code> alebo <code className={codeClass}>&lt;h4&gt;</code>) v závislosti od hierarchie konkrétnej stránky. Čítačky obrazovky to využívajú na rýchlu orientáciu.
                    </li>
                    <li>
                        Keďže je celý komponent odkazom, asistenčné technológie prečítajú nadpis aj popis rázcestníka ako jeden súvislý celok. Texty preto udržujte čo najstručnejšie, aby ste používateľa nezahltili zbytočne dlhým názvom odkazu.
                    </li>
                    <li>
                        Ikonky určujúce tému rázcestníka, rovnako ako navigačná šípka, sú pre asistenčné zariadenia zväčša čisto dekoratívne. Musia byť skryté pred čítačkami obrazovky pomocou atribútu <code className={codeClass}>aria-hidden="true"</code>.
                    </li>
                    <li>
                        Ak rázcestník vedie na externú stránku alebo otvára odkaz v novom okne, musí obsahovať skryté textové upozornenie pre čítačky (napríklad <code className={codeClass}>&lt;span aria-label="Otvorí sa v novom okne"&gt;&lt;/span&gt;</code>). Ak na to použijete špeciálnu ikonu externého odkazu, môžete upozornenie pridať priamo do nej.
                    </li>
                </Ul>

            </SectionBlock>
        </div>
    );
};

export default TabPristupnost;