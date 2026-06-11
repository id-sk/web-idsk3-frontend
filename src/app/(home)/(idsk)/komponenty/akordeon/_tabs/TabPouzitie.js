import { CustomAccordion } from '@/app/(home)/_components/accordion/accordionCustom';
import InformationBanner from '@/app/(home)/_components/information-banner/informationBannerCustom';
import { SectionBlock, Text, Ul, Ol } from '@/app/(home)/_components/content-blocks/ContentBlocks';

const TabPouzitie = () => (    
    <div className="animate-fade-in text-black w-full min-w-0">
        
        <SectionBlock titleString="Použitie Akordeónu">
            <div className="flex justify-center border-2 border-dashed border-[#9e9e9e] rounded-[10px] mb-8 mt-4">
                <div className="w-full max-w-[700px] py-7 mt-6 mb-1 px-4">
                    <CustomAccordion 
                        heading="Je možné zrušiť alebo stiahnuť notifikáciu po jej odoslaní?" 
                        initiallyClosed={true}
                    >
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </Text>
                        <Text className="mt-4">
                            Consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
                        </Text>
                    </CustomAccordion>
                </div>
            </div>

            <Text className="mb-4">
                Nadpis príslušnej lišty by mal byť v primeranej dĺžke, maximálne v 1 riadku a výstižne popisovať to, čo sa v danom akordeóne nachádza. Detailnejšie informácie o tom, čo je umiestnené v akordeóne, dodefinujte v popise pod nadpisom. Akordeón najlepšie funguje pre jednoduché texty a odkazy. Nepoužívajte akordeón na obsah, ktorý je dôležitý pre všetkých používateľov. Akordeón sa typicky používa na:
            </Text>
            
            <Ul>
                <li>zoskupenie sekcií s podrobnými informáciami, ktoré nie sú dôležité pre každého používateľa,</li>
                <li>zobrazovanie FAQ (často kladených otázok),</li>
                <li>zobrazenie podrobností k jednotlivým témam (napr. právne texty, technické detaily, vysvetlenia),</li>
                <li>návody a sprievodcovia aktivitou.</li>
            </Ul>
            
        </SectionBlock>

        <SectionBlock titleString="Správanie komponentu">
            
            <Text className="mb-4">
                Akordeón sa skladá z dvoch častí:
            </Text>
            
            <Ol className="mb-8">
                <li>Z hlavičky, ktorá obsahuje nadpis a ikonku (^/v) a je klikateľná po celej dĺžke riadku. Práve do tejto časti môžete umiestniť aj popisný text (ak je potrebný).</li>
                <li>Z obsahovej časti, ktorá sa otvorí práve po kliknutí na hlavičku, a obsahuje dlhší textový popis, prípadne odpoveď na otázku v nadpise.</li>
            </Ol>

            <Text>
                Každá sekcia sa kliknutím na celú plochu hlavičky sekcie rozbalí resp. zbalí, pričom sa zmení ikona – indikátor (ro)zbalenia. Po kliknutí sa (ro)zbalí príslušný panel s obsahom sekcie. Rozbalenie ďalšej sekcie nemá vplyv na uzavretie iného, už otvoreného obsahu. Naraz môže byť otvorených viacero sekcií, používateľ si kliknutím sám určí, ktorú sekciu chce zbaliť alebo rozbaliť.
            </Text>

            <div className="flex flex-wrap gap-8 sm:gap-12 mt-10">
                <div className="flex flex-col items-start flex-1 min-w-[280px]">
                    <InformationBanner
                        ariaLabel="Správne použitie akordeónu"
                        type="banner"
                        variant="basic"
                        hideCloseButton={true}
                    >
                        <h3 className="text-lg sm:text-xl font-bold text-black leading-tight ml-2 mb-4">
                            Ako sa používa
                        </h3>
                        {/* Tu používam čisté HTML tagy namiesto <Ul>, pretože InformationBanner má špecificky menšie písmo (text-sm), aby to pekne sedelo vo vnútri bannera */}
                        <ul className="list-disc pl-5 space-y-3 text-sm tracking-wide leading-relaxed text-black mb-8 mt-4">
                            <li>Použva sa keď máte viacero súvisiacich sekcií (min. 2, max 10).</li>
                            <li>Použva sa keď obsah v jednotlivých sekciách je rovnocenný a nezávislý.</li>
                            <li>Použva sa keď potrebujete rozdeliť obsah do logických sekcií (napr. FAQ, návody, inštrukcie).</li>
                            <li>Použva sa keď máte obsah, ktorý sa pravidelne opakuje alebo je známy.</li>
                        </ul>
                    </InformationBanner>
                </div>
                
                <div className="flex flex-col items-start flex-1 min-w-[280px]">
                    <InformationBanner
                        ariaLabel="Nesprávne použitie akordeónu"
                        type="banner"
                        variant="warning"
                        hideCloseButton={true}
                    >
                        <h3 className="text-lg sm:text-xl font-bold text-black leading-tight ml-2 mb-4">
                            Ako sa nepoužíva
                        </h3>
                        <ul className="list-disc pl-5 space-y-3 text-sm tracking-wide leading-relaxed text-black mb-8 mt-4">
                            <li>Nepoužíva sa keď je potrebné vidieť všetky informácie naraz (napr. pri porovnávaní údajov).</li>
                            <li>Nepoužíva sa keď ide o kľúčový obsah, ktorý by nemal byť skrytý (napr. textové pole s povinnými údajmi).</li>
                            <li>Nepoužíva sa keď sekcie obsahujú veľa textu, vnorené interaktívne prvky alebo akčné prvky.</li>
                            <li>Nepoužíva sa keď ide o navigáciu medzi sekciami – použite taby alebo obsahovú navigáciu.</li>
                        </ul>
                    </InformationBanner>
                </div>
            </div>

        </SectionBlock>
    </div>
);

export default TabPouzitie;