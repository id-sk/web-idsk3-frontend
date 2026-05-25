import React from 'react';
import { SectionBlock, H3, Text, Ul } from '@/app/(home)/_components/content-blocks/ContentBlocks';

const TabPristupnost = () => {
    const codeClass = "bg-neutral-100 border border-neutral-200 font-mono text-sm px-1.5 py-0.5 rounded text-black";

    return (
        <div className="animate-fade-in text-black w-full min-w-0">
            <SectionBlock titleString="Prístupnosť (Accessibility)">
                
                <Text>
                    Komponent tlačidlo spĺňa požiadavky WCAG 2.1 AA. Podporuje ovládanie klávesnicou a asistenčnými technológiami.
                </Text>
                
                <H3>Klávesové ovládanie</H3>
                <Ul className="mb-8">
                    <li><code className={codeClass}>Tab</code> – presun zamerania klávesnice (focus) na nasledujúci rázcestník alebo interaktívny prvok.</li>
                    <li><code className={codeClass}>Shift + Tab</code> – presun zamerania klávesnice (focus) na predchádzajúci prvok.</li>
                    <li><code className={codeClass}>Enter</code>, <code className={codeClass}>Space</code> – aktivovanie tlačidla (spustenie akcie).</li>
                </Ul>
                
                <H3>Základné pravidlá prístupnosti</H3>
                <Ul>
                    <li>
                        Vždy jasne definujte atribút <code className={codeClass}>type</code> (zvyčajne <code className={codeClass}>"button"</code>, <code className={codeClass}>"submit"</code> alebo <code className={codeClass}>"reset"</code>), aby ste predišli nechcenému odoslaniu formulára.
                    </li>
                    <li>
                        Text musí byť jasný, opisný a krátky (1–2 slová). Ideálne by mal začínať slovesom (napr. "Odoslať", "Uložiť", "Pokračovať", "Zmeniť heslo").
                    </li>
                    <li>
                        Ak tlačidlo obsahuje <strong>iba ikonu</strong> (napr. krížik na zatvorenie alebo lupu na vyhľadávanie), asistenčné zariadenia nebudú vedieť, čo robí. Vždy mu musíte pridať atribút <code className={codeClass}>aria-label</code> (napr. <code className={codeClass}>aria-label="Vyhľadať na webe"</code>).
                    </li>
                    <li>
                        Zameriavací rámik je pre prístupnosť kľúčový. Náš komponent automaticky využíva <code className={codeClass}>focus-visible</code> s výraznou oranžovou farbou ID-SK na jasnú identifikáciu zvoleného prvku.
                    </li>
                    <li>
                        Pri kritických akciách (napríklad odosielanie platieb alebo formulárov) po stlačení nastavte stav tlačidla na <code className={codeClass}>disabled</code>, čím zabránite opakovanému vykonaniu rovnakej akcie.
                    </li>
                </Ul>

            </SectionBlock>
        </div>
    );
};

export default TabPristupnost;