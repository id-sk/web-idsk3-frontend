import React from 'react';
import { SectionBlock, H3, Text, Ul } from '@/app/(home)/_components/content-blocks/ContentBlocks';

const TabPristupnost = () => {
    const codeClass = "bg-neutral-100 border border-neutral-200 font-mono text-sm px-1.5 py-0.5 rounded text-black";

    return (
        <div className="animate-fade-in text-black w-full min-w-0">
            <SectionBlock titleString="Prístupnosť (Accessibility)">

                <Text>
                    Komponent vysvetlivka spĺňa požiadavky WCAG 2.2 na úrovni A a AA. Podporuje ovládanie klávesnicou a asistenčnými technológiami.
                </Text>

                <H3>Klávesové ovládanie</H3>
                <Ul className="mb-8">
                    <li><code className={codeClass}>Enter</code> – zobrazí alebo skryje kontajner s textom.</li>
                    <li><code className={codeClass}>Medzerník</code> – zobrazí alebo skryje kontajner s textom.</li>
                    <li><code className={codeClass}>Esc</code> – zatvorí zobrazený kontajner s textom.</li>
                </Ul>

                <H3>Základné pravidlá prístupnosti</H3>
                <Text>Pri implementácii komponentu dodržte tieto pravidlá:</Text>
                <Ul className="mb-8">
                    <li>Zabezpečte, aby bolo tlačidlo dostupné a ovládateľné pomocou klávesnice.</li>
                    <li>
                        Priraďte tlačidlu jednoznačný prístupný názov, ktorý určuje aj kontext vysvetlivky, napríklad <code className={codeClass}>&quot;Zobraziť vysvetlivku k trvalému pobytu&quot;</code>.
                    </li>
                    <li>
                        Dekoratívnu ikonu „i“ skryte pred asistenčnými technológiami pomocou atribútu <code className={codeClass}>aria-hidden=&quot;true&quot;</code>.
                    </li>
                    <li>Zabezpečte, aby asistenčné technológie rozpoznali, či je vysvetlivka zobrazená alebo skrytá.</li>
                    <li>Umiestnite obsah vysvetlivky v poradí čítania bezprostredne za tlačidlo, ktorým sa zobrazuje.</li>
                    <li>Zachovajte rovnakú sémantiku a spôsob ovládania komponentu na počítačoch aj mobilných zariadeniach.</li>
                </Ul>

                <H3>Základné technické pravidlá implementácie</H3>
                <Text>Pri implementácii komponentu dodržte tieto pravidlá:</Text>
                <Ul>
                    <li>
                        Ak je ikona „i“ vytvorená ako textový znak, nastavte prvku vlastnosť CSS <code className={codeClass}>user-select: none</code>, aby ju používateľ nemohol samostatne označiť.
                    </li>
                    <li>
                        Prvok na zobrazenie vysvetlivky implementujte pomocou natívneho prvku <code className={codeClass}>&lt;button&gt;</code>.
                    </li>
                    <li>
                        Tlačidlu nastavte atribút <code className={codeClass}>aria-expanded=&quot;false&quot;</code> a po zobrazení vysvetlivky zmeňte jeho hodnotu na <code className={codeClass}>true</code>.
                    </li>
                    <li>
                        Kontajneru s textom priraďte jedinečný atribút <code className={codeClass}>id</code> a prepojte ho s tlačidlom pomocou atribútu <code className={codeClass}>aria-controls</code>.
                    </li>
                    <li>
                        Ak účel tlačidla nevyplýva jednoznačne z okolitého textu, nastavte mu atribút <code className={codeClass}>aria-label</code>.
                    </li>
                    <li>
                        Skrytý kontajner odstráňte aj zo stromu prístupnosti, napríklad pomocou atribútu <code className={codeClass}>hidden</code>; po jeho zobrazení atribút odstráňte.
                    </li>
                </Ul>

            </SectionBlock>
        </div>
    );
};

export default TabPristupnost;