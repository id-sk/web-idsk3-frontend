import React from 'react';
import { SectionBlock, H3, Text, Ul } from '@/app/(home)/_components/content-blocks/ContentBlocks';

const TabPristupnost = () => {
    const codeClass = "bg-neutral-100 border border-neutral-200 font-mono text-sm px-1.5 py-0.5 rounded text-black";

    return (
        <div className="animate-fade-in text-black w-full min-w-0">
            <SectionBlock titleString="Prístupnosť (Accessibility)">
                
                <Text>
                    Komponent je v súlade s normami WCAG 2.2 AA. Komponent spĺňa požiadavky na kontrastné pomery a jeho súčasťou sú interakcie s klávesnicou a asistenčnými zariadeniami.
                </Text>
                
                <H3>Klávesové ovládanie</H3>
                <Ul className="mb-8">
                    <li><code className={codeClass}>Tab</code> – presun zamerania klávesnicou do viacriadkového textového poľa alebo na ďalší prvok formulára.</li>
                    <li><code className={codeClass}>Shift + Tab</code> – presun zamerania klávesnicou na predchádzajúci prvok.</li>
                    <li><code className={codeClass}>Enter</code> – potvrdenie formulára (ak je pole súčasťou formulára).</li>
                    <li><code className={codeClass}>Esc</code> – zrušenie vstupu (iba ak je implementované správanie na úrovni formulára).</li>
                    <li>Zadávanie textu funguje štandardne pomocou klávesnice.</li>
                </Ul>
                
                <H3>Základné pravidlá prístupnosti</H3>
                <Ul>
                    <li>
                        Viacriadkové textové pole musí používať natívny HTML znak <code className={codeClass}>&lt;textarea&gt;</code>.
                    </li>
                    <li>
                        Každá <code className={codeClass}>&lt;textarea&gt;</code> musí mať programovo asociovaný label cez <code className={codeClass}>for</code> a <code className={codeClass}>id</code> (v Reacte <code className={codeClass}>htmlFor</code>).
                    </li>
                    <li>
                        Nie je vhodné horizontálne scrollovanie – preto použite zalomenie textu cez atribút <code className={codeClass}>wrap</code>.
                    </li>
                    <li>
                        V prípade predpokladu dlhšieho textu viete prispôsobiť veľkosť okna cez atribúty <code className={codeClass}>rows</code> a <code className={codeClass}>cols</code> a obmedziť jeho maximálnu dĺžku cez <code className={codeClass}>maxLength</code>.
                    </li>
                    <li>
                        Prípadný <code className={codeClass}>placeholder</code> slúži len ako príklad (napr.: <em>Objavil som nasledovnú chybu...</em>). Placeholder <strong>NEFUNGUJE</strong> ako náhrada labelu a hintu a <strong>NESMIE</strong> vysvetľovať funkciu textového poľa.
                    </li>
                    <li>
                        Neaktívne pole (<code className={codeClass}>disabled</code>) nesmie byť focusovateľné (zamerateľné klávesnicou).
                    </li>
                    <li>
                        Pre dynamické zmeny – napríklad pre počítadlo znakov – pridajte pre čítačky atribút <code className={codeClass}>aria-live="polite"</code> spolu s limitom znakov v <code className={codeClass}>maxLength</code>.
                    </li>
                    <li>
                        Prípadný popis prepojte na pole cez atribút <code className={codeClass}>aria-describedby</code>.
                    </li>
                    <li>
                        V prípade povinného poľa nezabudnite pridať atribút <code className={codeClass}>required</code>.
                    </li>
                    <li>
                        Hviezdička (označujúca povinné pole) musí byť vložená prostredníctvom elementu <code className={codeClass}>&lt;span&gt;</code>, aby ju bolo možné pred čítačkami skryť prostredníctvom atribútu <code className={codeClass}>aria-hidden="true"</code>.
                    </li>
                    <li>
                        Nezabudnite, že samotná hviezdička na označenie povinného poľa nestačí – musí byť dodatočne vysvetlená pomocou vysvetlivky označenia povinných polí.
                    </li>
                    <li>
                        Chybové hlásenia realizujte prostredníctvom JavaScriptu a napojte ich napríklad na HTML atribút <code className={codeClass}>required</code>. Chybový hint musí byť prepojený s poľom cez atribút <code className={codeClass}>aria-describedby</code>.
                    </li>
                    <li>
                        Okrem farby, ikony a textu upozornenia nezabudnite v prípade chyby pridať pre čítačky atribút <code className={codeClass}>aria-invalid="true"</code>.
                    </li>
                </Ul>

            </SectionBlock>
        </div>
    );
};

export default TabPristupnost;