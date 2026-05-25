import React from 'react';
import { SectionBlock, H3, Text, Ul } from '@/app/(home)/_components/content-blocks/ContentBlocks';

const TabPristupnost = () => {
    const codeClass = "bg-neutral-100 border border-neutral-200 font-mono text-sm px-1.5 py-0.5 rounded text-black";

    return (
        <div className="animate-fade-in text-black w-full min-w-0">
            <SectionBlock titleString="Prístupnosť (Accessibility)">
                
                <Text>
                    Začiarkavacie pole spĺňa požiadavky WCAG 2.1 AA. Podporuje ovládanie klávesnicou a asistenčnými technológiami.
                </Text>
                
                <H3>Klávesové ovládanie</H3>
                <Ul className="mb-8">
                    <li><code className={codeClass}>Tab</code> – presun zamerania (fokusu) na začiarkavacie pole alebo na ďalší interaktívny prvok.</li>
                    <li><code className={codeClass}>Shift + Tab</code> – presun zamerania na predchádzajúci interaktívny prvok.</li>
                    <li><code className={codeClass}>Medzerník (Space)</code> – začiarknutie alebo zrušenie začiarknutia aktuálne zameraného poľa.</li>
                </Ul>
                
                <H3>Základné pravidlá prístupnosti</H3>
                <Ul>
                    <li>
                        Vždy použite element <code className={codeClass}>&lt;label&gt;</code> pre popis začiarkavacieho poľa a nezabudnite ho programovo spárovať s konkrétnym inputom cez atribúty <code className={codeClass}>for</code> a <code className={codeClass}>id</code>.
                    </li>
                    <li>
                        Udržujte menovky (label) krátke a jasné. Ak potrebujete dlhšie vysvetlenie, nevkladajte ho do labelu, ale využite doplňujúci text (hint).
                    </li>
                    <li>
                        <strong>Zoskupovanie:</strong> V prípade väčšieho počtu začiarkavacích polí, ktoré spolu logicky súvisia (1 skupina = 1 téma), musia byť implementované do spoločného tagu <code className={codeClass}>&lt;fieldset&gt;</code>. Samotná nadradená otázka pre túto skupinu musí byť definovaná cez natívny tag <code className={codeClass}>&lt;legend&gt;</code>.
                    </li>
                    <li>
                        Snažte sa udržiavať poradie jednotlivých možností logické (napr. abecedne, chronologicky alebo podľa najčastejšej voľby) a v nápovede uveďte, koľko možností je možné vybrať.
                    </li>
                    <li>
                        Prípadný hint (nápovedu) prepojte s príslušným začiarkavacím poľom (alebo s celým fieldsetom) prostredníctvom atribútu <code className={codeClass}>aria-describedby</code>.
                    </li>
                    <li>
                        V prípade povinného poľa pridajte inputu atribút <code className={codeClass}>required</code>.
                    </li>
                    <li>
                        Vizuálna hviezdička označujúca povinné pole musí byť vložená vo vnútri <code className={codeClass}>&lt;span aria-hidden="true"&gt;</code>, aby ju čítačky obrazovky neduplikovali. Samotná hviezdička nestačí, význam povinných polí musí byť vysvetlený na začiatku formulára.
                    </li>
                    <li>
                        Pri chybovom stave musí mať input pridaný atribút <code className={codeClass}>aria-invalid="true"</code> a chybová hláška musí byť na input prepojená cez <code className={codeClass}>aria-describedby</code> (aby ju čítačka prečítala hneď po zameraní poľa).
                    </li>
                </Ul>

            </SectionBlock>
        </div>
    );
};

export default TabPristupnost;