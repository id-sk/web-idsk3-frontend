'use client';

import React from 'react';
import InformationBanner from '@/app/(home)/_components/information-banner/informationBannerCustom';
import { SectionBlock, Text, Ul, ExampleBlock } from '@/app/(home)/_components/content-blocks/ContentBlocks';
import SelectDropdownCustom from '@/app/(home)/_components/select/selectCustom';

const TabPouzitie = () => (
    <div className="animate-fade-in text-black w-full min-w-0">
        
        <SectionBlock titleString="Použitie rozbaľovacieho poľa">
            
            <ExampleBlock
                className="mt-4 py-0"
                innerClassName="max-w-[400px] py-7 my-6"
            >
                <SelectDropdownCustom
                    id="select-priklad"
                    name="vyber"
                    label="Vyberte možnosť"
                    hint="Vyberte jednu z dostupných možností."
                    placeholder="Vyberte možnosť"
                    mandatory
                    fullWidth
                    options={[
                        { value: 'moznost-1', label: 'Možnosť 1' },
                        { value: 'moznost-2', label: 'Možnosť 2' },
                        { value: 'moznost-3', label: 'Možnosť 3' },
                    ]}
                    />
            </ExampleBlock>

            <Text className="mb-8">
                Rozbaľovacie pole (select) slúži na výber jednej hodnoty zo zoznamu možností v rámci formulára. Používateľ po kliknutí otvorí zoznam a vyberie požadovanú položku; následne pole zobrazí vybranú hodnotu v zatvorenom stave. Select je vhodný najmä v situáciách, keď potrebujete šetriť priestor alebo keď zoznam obsahuje viacero možností. Funguje aj bez JavaScriptu, čo z neho robí spoľahlivý natívny formulárový prvok.
            </Text>

            <div className="flex flex-wrap gap-8 sm:gap-12 mt-10">
                <div className="flex flex-col items-start flex-1 min-w-[280px]">
                    <InformationBanner
                        title="Ako sa používa"
                        type="banner"
                        variant="basic"
                        hideCloseButton={true}
                    >
                        <Ul className="text-sm mt-4">
                            <li>Zoznam obsahuje 5 až 20 vzájomne sa vylučujúcich možností.</li>
                            <li>Položky sú logicky zoradené (napr. abecedne, chronologicky alebo od najčastejšej voľby).</li>
                            <li>Rozbaľovací zoznam neprekáža inému dôležitému obsahu.</li>
                            <li>Použite s overením v reálnom čase.</li>
                            <li>Používajte s krátkymi textami možností, ktoré nepresahujú jeden riadok.</li>
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
                            <li>Ak je možností príliš málo (menej ako 5) – použite Prepínacie pole.</li>
                            <li>Ak je možností extrémne veľa – použite prvok s našepkávačom a vyhľadávaním (listbox alebo combobox).</li>
                            <li>Ak potrebujete vybrať viac ako jednu položku naraz - použite Začiarkavacie políčka.</li>
                            <li>Ak výber zmení kontext stránky (napr. funguje ako navigácia).</li>
                        </Ul>
                    </InformationBanner>
                </div>
            </div>

        </SectionBlock>
    </div>
);

export default TabPouzitie;