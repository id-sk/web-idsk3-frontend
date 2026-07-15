import React from 'react';
import ButtonCustom from '@/app/(home)/_components/button/buttonCustom';
import InformationBanner from '@/app/(home)/_components/information-banner/informationBannerCustom';
import { SectionBlock, Text, Ul } from '@/app/(home)/_components/content-blocks/ContentBlocks';

const TabPouzitie = () => (
    <div className="animate-fade-in text-black w-full min-w-0">
        
        <SectionBlock titleString="Použitie tlačidiel">
            
            <div className="flex flex-col items-center gap-6 py-10 border-2 border-dashed border-[#9e9e9e] rounded-[10px] mb-8 mt-4">
                <div className="flex flex-wrap justify-center gap-4 px-4">
                    <ButtonCustom variant="primary" status="basic">
                        Hlavná akcia
                    </ButtonCustom>
                    <ButtonCustom variant="secondary" status="basic">
                        Vedľajšia akcia
                    </ButtonCustom>
                    <ButtonCustom variant="tertiary" status="basic">
                        Doplnková akcia
                    </ButtonCustom>
                </div>
            </div>

            <Text className="mb-4">
                Komponent tlačidlo pozostáva z piatich základných častí. Kľúčovým prvkom je textový popis, ktorý musí jasne, stručne a konkrétne pomenovať vykonávanú akciu. Vizuálnu podobu, tvar a veľkosť definuje kontajner, ktorého výplň a farba určujú dôležitosť tlačidla v hierarchii rozhrania. Význam akcie môžu voliteľne dopĺňať ľavá alebo pravá ikona, ktoré slúžia ako vizuálna podpora textu. Celkovú funkčnosť uzatvára interakčná plocha, ktorá musí byť dostatočne veľká na to, aby umožňovala pohodlné a presné ovládanie na všetkých typoch zariadení.
            </Text>
            
            <Text>
                Správne nastavená vizuálna hierarchia pomáha používateľovi identifikovať hlavnú výzvu na akciu (CTA) a znižuje kognitívnu záťaž pri rozhodovaní. V IDSK 3 používame tri úrovne priority: primárne pre kľúčové akcie, sekundárne pre vedľajšie, menej dôležité voľby a terciárne (textové) pre doplnkové akcie s najnižšou dôležitosťou.
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
                            <li>Na jednej stránke používajte spravidla iba jedno primárne tlačidlo.</li>
                            <li>Text musí mať stručnú a jasnú menovku (napr. &quot;Odoslať&quot;, &quot;Uložiť&quot;).</li>
                            <li>Akcie klaďte vedľa seba v poradí dôležitosti (napr. Späť ako sekundárne, Pokračovať ako primárne).</li>
                            <li>Pri dôležitých akciách implementujte ochranu proti viacnásobnému odoslaniu.</li>
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
                            <li>Nepoužívajte viacero primárnych tlačidiel na stránke.</li>
                            <li>Nepoužívajte tlačidlá na bežnú navigáciu medzi stránkami, ak nejde o súčasť procesu.</li>
                            <li>Vyhnite sa nápisom ako „Kliknite tu“ alebo „OK“, ktoré nevysvetľujú kontext akcie.</li>
                            <li>Nepoužívajte tlačidlá obsahujúce iba ikonu bez textu, pokiaľ nejde o všeobecne známe symboly.</li>
                            <li>Pri hierarchicky rovnocenných možnostiach (napr. Áno a Nie) používajte hierarchicky rovnocenné tlačidlá</li>
                        </Ul>
                    </InformationBanner>
                </div>
            </div>

        </SectionBlock>
    </div>
);

export default TabPouzitie;