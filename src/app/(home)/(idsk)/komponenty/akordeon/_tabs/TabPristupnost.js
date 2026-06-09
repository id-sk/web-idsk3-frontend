import React from 'react';
import { SectionBlock, H3, Text, Ul } from '@/app/(home)/_components/content-blocks/ContentBlocks';

const TabPristupnost = () => {
    const codeClass = "bg-neutral-100 border border-neutral-200 font-mono text-sm px-1.5 py-0.5 rounded text-black";

    return (
        <div className="animate-fade-in text-black w-full min-w-0">
            <SectionBlock titleString="Prístupnosť (Accessibility)">
                
                <Text>
                    Komponent je v súlade s normami WCAG 2.1 AA. Komponent spĺňa požiadavky na kontrastné pomery a jeho súčasťou sú interakcie s klávesnicou a čítačkami obrazovky. 
                </Text>
                
                <H3>Klávesové ovládanie</H3>
                <Ul className="mb-8">
                    <li><code className={codeClass}>Enter</code> alebo <code className={codeClass}>Medzerník</code> – rozbalí / zbalí sekciu.</li>
                    <li><code className={codeClass}>Tab</code> – prechádza medzi hlavičkami.</li>
                    <li><code className={codeClass}>Shift + Tab</code> – ide späť.</li>
                </Ul>
                
                <H3>Základné pravidlá prístupnosti komponentu Akordeón</H3>
                <Ul>
                    <li>
                        Všetky interaktívne prvky sú implementované ako tlačidlá <code className={codeClass}>&lt;button&gt;</code>.
                    </li>
                    <li>
                        Pridajte atribút <code className={codeClass}>aria-expanded=&quot;true/false&quot;</code>, ktorý označuje, či je sekcia rozbalená alebo zbalená.                    </li>
                    <li>
                        Pridajte atribút <code className={codeClass}>aria-controls</code>, ktorý prepája tlačidlo s konkrétnym obsahom sekcie (cez ID), vďaka čomu asistenčné technológie vedia, že kliknutím na tlačidlo sa zmení viditeľnosť práve tejto sekcie.
                    </li>
                    <li>
                        Pridajte atribút <code className={codeClass}>aria-label</code>, ktorý kombinuje názov sekcie, prípadný súhrn a stavovú správu (otvorené/zatvorené) pre asistenčné technológie.
                    </li>
                    <li>
                        Obsah musí zostať vždy dostupný aj bez zapnutého JavaScriptu.
                    </li>
                    <li>
                        Nezabudnite ikonu pre asistenčné technológie skryť pomocou <code className={codeClass}>aria-hidden=&quot;true&quot;</code> (v prípade <code className={codeClass}>svg</code>) alebo prázdneho <code className={codeClass}>alt=&quot;&quot;</code> (v prípade obrázkov).
                    </li>
                    <li>
                        Akordeón musí mať funkčné stavy zamerania myšou (hover) a zamerania klávesnicou (focus), tak ako to je zobrazené v časti Varianty.
                    </li>
                </Ul>

            </SectionBlock>
        </div>
    );
};

export default TabPristupnost;