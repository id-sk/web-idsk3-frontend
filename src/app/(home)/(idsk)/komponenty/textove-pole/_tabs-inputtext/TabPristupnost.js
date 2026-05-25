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
                <Ul className="mb-8">
                    <li><code className={codeClass}>Tab</code> – presun zamerania klávesnicou do textového poľa alebo na ďalší prvok formulára.</li>
                    <li><code className={codeClass}>Shift + Tab</code> – presun zamerania klávesnicou na predchádzajúci prvok.</li>
                    <li><code className={codeClass}>Enter</code> – potvrdenie formulára (ak je pole súčasťou formulára).</li>
                    <li><code className={codeClass}>Esc</code> – zrušenie vstupu (iba ak je implementované správanie na úrovni formulára).</li>
                    <li>Zadávanie textu funguje štandardne pomocou klávesnice.</li>
                </Ul>
                
                <H3>Základné pravidlá prístupnosti</H3>
                <Ul>
                    <li>
                        Každý input musí mať jasný, programovo asociovaný label cez <code className={codeClass}>for="id"</code> (v Reacte <code className={codeClass}>htmlFor</code>).
                    </li>
                    <li>
                        V prípade zadávania osobných údajov nezabudnite pridať tzv. <code className={codeClass}>autocomplete</code>, napr.:<br className="hidden sm:block" />
                        <code className={codeClass}>&lt;label for="firstName"&gt;Krstné meno:&lt;/label&gt; &lt;input name="firstName" id="firstName" type="text" autocomplete="given-name" /&gt;</code>
                    </li>
                    <li>
                        Prípadný <code className={codeClass}>placeholder</code> slúži len pre príklad (napr.: <em>Jana Novotná</em>). Placeholder <strong>NEFUNGUJE</strong> ako náhrada labelu a hintu a <strong>NESMIE</strong> vysvetľovať funkciu textového poľa.
                    </li>
                    <li>
                        Neaktívne pole (disabled) nesmie byť focusovateľné (zamerateľné klávesnicou).
                    </li>
                    <li>
                        Prípadný hint prepojte na input cez atribút <code className={codeClass}>aria-describedby</code>.
                    </li>
                    <li>
                        V prípade povinného poľa nezabudnite pridať inputu atribút <code className={codeClass}>required</code>.
                    </li>
                    <li>
                        Hviezdička (označujúca povinné pole) musí byť vložená prostredníctvom elementu <code className={codeClass}>&lt;span&gt;</code>, aby ju bolo možné pred čítačkami skryť prostredníctvom atribútu <code className={codeClass}>aria-hidden="true"</code>.
                    </li>
                    <li>
                        Nezabudnite, že samotná hviezdička na označenie povinného poľa nestačí - musí byť dodatočne vysvetlená pomocou vysvetlivky označenia povinných polí.
                    </li>
                    <li>
                        Chybový hint musí mať atribút <code className={codeClass}>aria-describedby="error"</code> a okrem farby, ikony a hintu upozornenia nezabudnite pre čítačky pridať atribút <code className={codeClass}>aria-hidden="true"</code>.
                    </li>
                </Ul>

            </SectionBlock>
        </div>
    );
};

export default TabPristupnost;