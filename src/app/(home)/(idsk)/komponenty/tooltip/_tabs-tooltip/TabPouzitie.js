import React from 'react';
import InformationBanner from '@/app/(home)/_components/information-banner/informationBannerCustom';
import { SectionBlock, H3, Text, Ul, ExampleBlock } from '@/app/(home)/_components/content-blocks/ContentBlocks';
import { Tooltip } from '@/app/(home)/_components/tooltip/tooltip';

const TabPouzitie = () => (
    <div className="animate-fade-in text-black w-full min-w-0">

        <SectionBlock titleString="Použitie vysvetlivky">

            <ExampleBlock className="mt-4" innerClassName="flex flex-wrap justify-center gap-12 max-w-none">
                <Tooltip
                    label="Rodné číslo"
                    preferredPosition="right"
                    content="Zadajte rodné číslo bez lomky, iba číslice."
                />
                <Tooltip
                    label="Adresa trvalého pobytu"
                    preferredPosition="bottom"
                    content="Uveďte adresu tak, ako je zapísaná v občianskom preukaze."
                />
            </ExampleBlock>

            <Text className="mb-4">
                Komponent vysvetlivka poskytuje doplňujúce informácie k nadpisu, textu alebo formulárovému prvku, ktorých význam nemusí byť používateľovi na prvý pohľad zrejmý. Pomáha objasniť kontext bez zbytočného rozširovania obsahu stránky.
            </Text>

            <H3>Časti komponentu</H3>
            <Text>Komponent vysvetlivka sa skladá z týchto častí:</Text>
            <ol className="list-decimal pl-6 mb-4 space-y-1">
                <li>Ikona „i“ (Icon)</li>
                <li>Kontajner (Container)</li>
                <li>Ukazovateľ (Arrow)</li>
                <li>Text (Text)</li>
            </ol>

            <H3>Zarovnanie a umiestnenie</H3>
            <Ul className="mb-4">
                <li>Ikonu „i“ umiestnite vpravo od nadpisu, textu alebo prvku, ku ktorému sa vysvetlivka vzťahuje.</li>
                <li>Poloha kontajnera a ukazovateľa sa dynamicky prispôsobuje dostupnému priestoru. Kontajner musí zostať celý viditeľný a nesmie zakrývať ikonu „i“.</li>
            </Ul>

            <H3>Interakcia</H3>
            <Text>
                Vysvetlivka sa zobrazí po aktivovaní ikony „i“ myšou, klávesom alebo dotykom. Nezobrazuje sa trvalo a nie je možné ju pripnúť na obrazovku.
            </Text>
            <Text>Na malej obrazovke zariadení zostáva vysvetlivka zobrazená, kým používateľ:</Text>
            <Ul className="mb-4">
                <li>opätovne neaktivuje ikonu „i“,</li>
                <li>neťukne mimo kontajnera vysvetlivky.</li>
            </Ul>
            <Text>Na zariadeniach s klávesnicou sa vysvetlivka zatvorí po:</Text>
            <Ul className="mb-4">
                <li>opätovnom aktivovaní ikony „i“,</li>
                <li>stlačení klávesu Escape,</li>
                <li>aktivovaní prvku mimo vysvetlivky.</li>
            </Ul>

            <div className="flex flex-wrap gap-8 sm:gap-12 mt-10">
                <div className="flex flex-col items-start flex-1 min-w-[280px]">
                    <InformationBanner
                        title="Ako sa používa"
                        type="banner"
                        variant="basic"
                        hideCloseButton={true}
                    >
                        <Ul className="text-sm mt-4">
                            <li>Používajte vysvetlivku na doplnenie kontextu alebo spresnenie významu informácie, ktorá nemusí byť používateľovi na prvý pohľad zrejmá.</li>
                            <li>Formulujte text vysvetlivky jednoducho, stručne a zrozumiteľne.</li>
                            <li>Obmedzte dĺžku textu vysvetlivky na maximálne 290 znakov vrátane medzier.</li>
                            <li>Umiestnite vysvetlivku bezprostredne vedľa nadpisu, textu, textového poľa alebo rozbaľovacieho poľa, ku ktorému sa vzťahuje.</li>
                        </Ul>
                    </InformationBanner>
                </div>

                <div className="flex flex-col items-start flex-1 min-w-[280px]">
                    <InformationBanner
                        title="Ako sa nepoužíva"
                        type="banner"
                        variant="warning"
                        hideCloseButton={true}
                    >
                        <Ul className="text-sm mt-4">
                            <li>Nepoužívajte vysvetlivku na zobrazenie kľúčových informácií potrebných na splnenie úlohy.</li>
                            <li>Nenahrádzajte vysvetlivkou popis ani pokyny potrebné na použitie formulárového prvku.</li>
                            <li>Nepoužívajte vysvetlivku na zobrazenie podstatných informácií; na tento účel použite komponent informačná lišta.</li>
                            <li>Nepoužívajte vysvetlivku na zobrazenie rozsiahleho alebo zložitého obsahu; informácie skráťte, vhodne štruktúrujte alebo použite iný komponent.</li>
                            <li>Neumiestňujte veľké množstvo vysvetliviek blízko seba, pretože môžu zhoršiť prehľadnosť a ovládanie rozhrania, najmä na mobilných zariadeniach.</li>
                            <li>Nevkladajte do vysvetlivky ďalšie prvky, napríklad tlačidlá, odkazy, obrázky alebo formulárové polia.</li>
                        </Ul>
                    </InformationBanner>
                </div>
            </div>

        </SectionBlock>
    </div>
);

export default TabPouzitie;