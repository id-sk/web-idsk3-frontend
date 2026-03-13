'use client'

import Card from '@/app/(home)/_components/article/article';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Accordion, TabBar, TabBarLink } from '@eslovensko/idsk-react';

const AccordionPage = () => {
    // 1. Zavedieme stav pre aktívny tab (predvolený je 'pouzitie')
    const [activeTab, setActiveTab] = useState('pouzitie');

    return (
        <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0">
            <title>Akordeón</title>
            
            {/* ========================================== */}
            {/* SPOLOČNÁ ČASŤ -  nad tabmi */}
            {/* ========================================== */}
            <header>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
                    Akordeón
                </h1>
            </header>

            <p className="mt-2 text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-10">
                Akordeón sa používa na zobrazovanie väčšieho množstva obsahu v obmedzenom priestore, ktorý je rozdelený do logických častí (sekcií). Používateľ si môže rozbaliť len tie sekcie, ktoré ho zaujímajú. Umožňuje tak udržať stránku prehľadnú a zabrániť zahlteniu informáciami.
            </p>
            

            {/* ========================================== */}
            {/* TAB BAR - Navigácia */}
            {/* ========================================== */}

            <TabBar className="mb-10 border-b border-neutral-300 gap-4">
                <TabBarLink 
                    href="#"
                    selected={activeTab === 'pouzitie'}
                    onClick={(e) => { e.preventDefault(); setActiveTab('pouzitie'); }}
                >
                    Použitie
                </TabBarLink>
                <TabBarLink 
                    href="#"
                    selected={activeTab === 'varianty'}
                    onClick={(e) => { e.preventDefault(); setActiveTab('varianty'); }}
                >
                    Varianty a stavy
                </TabBarLink>
                <TabBarLink 
                    href="#"
                    selected={activeTab === 'pristupnost'}
                    onClick={(e) => { e.preventDefault(); setActiveTab('pristupnost'); }}
                >
                    Prístupnosť
                </TabBarLink>
                <TabBarLink 
                    href="#"
                    selected={activeTab === 'kod'}
                    onClick={(e) => { e.preventDefault(); setActiveTab('kod'); }}
                >
                    Kód
                </TabBarLink>
            </TabBar>

            {/* ========================================== */}
            {/* OBSAH TABOV - Podmienené vykresľovanie */}
            {/* ========================================== */}
            
            {/* TAB: POUŽITIE */}
            {activeTab === 'pouzitie' && (
                
                <div className="animate-fade-in">


                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black mt-3 mb-10 leading-tight">
                        Použitie Akordeónu
                    </h2>

                    <Accordion 
                        heading={
                            <span className="text-lg sm:text-xl font-bold tracking-wide leading-tight sm:leading-8 text-black block py-1">
                                Je možné zrušiť alebo stiahnuť notifikáciu po jej odoslaní?
                            </span>
                        } 
                        initiallyClosed={true}
                        bgGray={true}
                        className="mb-10 border-b border-neutral-n400"
                    >
                        <div className="py-4 text-sm sm:text-base tracking-wide leading-relaxed sm:leading-7 text-black">
                            <p>Nie. Po odoslaní správy (najmä ostrej) nie je možné ju zrušiť alebo upraviť. Odporúča sa preto vždy použiť testovaciu správu pred hromadným odoslaním.</p>
                        </div>
                    </Accordion>
                    
                    <p className="text-sm sm:text-base tracking-wide leading-relaxed sm:leading-7 text-black mb-8">
                        Nadpis príslušnej lišty by mal byť v primeranej dĺžke, maximálne v 1 riadku a výstižne popisovať to, čo sa v danom akordeóne nachádza. Detailnejšie informácie o tom, čo je umiestené v akordeóne, dodefinujte v popise pod nadpisom. Akordeón najlepšie funguje pre jednoduché texty a odkazy. Nepoužívajte akordeón na obsah, ktorý je dôležitý pre všetkých používateľov. Akordeón sa typicky používa na:
                    </p>
                    <ul className="list-disc pl-5 text-sm sm:text-base tracking-wide leading-relaxed sm:leading-7 text-black mb-8">
                        <li className="pl-2">zoskupenie sekcií s podrobnými informáciami, ktoré nie sú dôležité pre každého používateľa,</li>
                        <li className="pl-2">zobrazovanie FAQ (často kladených otázok),</li>
                        <li className="pl-2">zobrazenie podrobností k jednotlivým témam (napr. právne texty, technické detaily, vysvetlenia),</li>
                        <li className="pl-2">návody a sprievodcovia aktivitou.</li>
                    </ul>
                    
                    <h3 className="text-md sm:text-lg md:text-xl font-bold text-black mt-5 mb-4 leading-tight">
                        Správanie komponentu:
                    </h3>
                    
                      <p className="text-sm sm:text-base tracking-wide leading-relaxed sm:leading-7 text-black mb-4">
                        Akordeón sa  skladá z dvoch častí:
                    </p>
                    
                    <ol className="list-decimal pl-5 text-sm sm:text-base tracking-wide leading-relaxed sm:leading-7 text-black mb-8">
                        <li className="pl-2">Z hlavičky, ktorá obsahuje nadpis a ikonku (^/v) a je klikateľná po celej dĺžke riadku. Práve do tejto časti môžete umiestniť aj popisný text (ak je potrebný). </li>
                        <li className="pl-2">Z obsahovej časti, ktorá sa otvorí práve po kliknutí na hlavičku, a obsahuje dlhší textový popis, prípadne odpoveď na otázku v nadpise. </li>
                    </ol>

                    <p className="text-sm sm:text-base tracking-wide leading-relaxed sm:leading-7 text-black mb-10">
                        Každá sekcia sa kliknutím na celú plochu hlavičky sekcie rozbalí resp. zbalí, pričom sa zmení ikona – indikátor (ro)zbalenia. Po kliknutí sa (ro)zbalí príslušný panel s obsahom sekcie. Rozbalenie ďalšej sekcie nemá vplyv na uzavretie iného, už otvoreného obsahu. Naraz môže byť otvorených viacero sekcií, používateľ si kliknutím sám určí, ktorú sekciu chce zbaliť alebo rozbaliť.
                    </p>


                </div>
            )}

            {/* TAB: VARIANTY */}
            {activeTab === 'varianty' && (
                <div className="animate-fade-in">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black mt-3 mb-10 leading-tight">
                        Varianty a stavy
                    </h2>
                    
                    <p className="text-sm sm:text-base tracking-wide leading-relaxed sm:leading-7 text-black mb-4">
                         Akordeón je zložený zo sekcií, ktoré je možné rozbaliť/zbaliť individuálne, alebo všetky naraz tlačidlom “Otvoriť/Zavrieť všetky” sekcie. V prípade potreby dlhšieho nadpisu sekcie (viac, ako 10 slov), je možné v hlavičke sekcie použiť popis. Akordeón zároveň obsahuje dva základné stavy, indikujúce jeho interaktivitu pre použitie myšou (hover) i klávesnicou (focus).
                    </p>
                    <p className="text-sm sm:text-base tracking-wide leading-relaxed sm:leading-7 text-black mb-4">
                        1. Variant akordeónu s popisom/bez popisu:
                    </p>
                    
                    
                    <div className="relative w-full aspect-[4/1] bg-white rounded-xl overflow-hidden mb-10 border border-neutral-200">
                        <Image
                            src="/images/akordeon/variant-popis-bez.png"
                            fill
                            className="object-cover p-2 sm:p-4"
                            alt="zaškrtávacieho poľa s textom/bez textu"
                        />
                    </div>
                    
                    
                    <p className="text-sm sm:text-base tracking-wide leading-relaxed sm:leading-7 text-black mb-4">
                        2. Variant akordeónu zatvorený/otvorený:
                    </p>
                    
                    <div className="relative w-full aspect-[4/1] bg-white rounded-xl overflow-hidden mb-10 border border-neutral-200">
                        <Image
                            src="/images/akordeon/nastavenie-zatvoreny-otvoreny.png"
                            fill
                            className="object-cover p-2 sm:p-4"
                            alt="varianty päty"
                        />
                    </div>

                    <p className="text-sm sm:text-base tracking-wide leading-relaxed sm:leading-7 text-black mb-4">
                       3. Stavy akordeónu - zameraný myšou(hover)/zameraný klávesnicou (focus):
                    </p>
                    
                    <div className="relative w-full aspect-[4/1] bg-white rounded-xl overflow-hidden mb-10 border border-neutral-200">
                        <Image
                            src="/images/akordeon/nastavenie-zatvoreny-otvoreny.png"
                            fill
                            className="object-cover p-2 sm:p-4"
                            alt="varianty päty"
                        />
                    </div>

                </div>
            )}

            {/* TAB: PRÍSTUPNOSŤ */}
            {activeTab === 'pristupnost' && (
                <div className="animate-fade-in">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black mt-3 mb-10 leading-tight">
                        Prístupnosť (Accessibility)
                    </h2>
                    <p className="text-sm sm:text-base tracking-wide leading-relaxed sm:leading-7 text-black mb-8">
                        Komponent je v súlade s normami WCAG 2.2 AA . Komponent spĺňa požiadavky na kontrastné pomery a jeho súčasťou sú interakcie s klávesnicou a čítačkami obrazovky. 
                    </p>
                    <p className="text-sm sm:text-base tracking-wide leading-relaxed sm:leading-7 text-black mb-4 font-bold">
                        Klávesové ovládanie                   
                    </p>
                    <ul className="list-disc pl-5 text-sm sm:text-base tracking-wide leading-relaxed sm:leading-7 text-black mb-8">
                        <li className="pl-2">Enter alebo medzerník – rozbalí / zbalí sekciu,</li>
                        <li className="pl-2">Tab – prechádza medzi hlavičkami,</li>
                        <li className="pl-2">Shift + Tab – ide späť.</li>
                    </ul>
                    <p className="text-sm sm:text-base tracking-wide leading-relaxed sm:leading-7 text-black mb-4 font-bold">
                        Základné pravidlá prístupnosti komponentu Akordeón                
                    </p>
                    <ul className="list-disc pl-5 text-sm sm:text-base tracking-wide leading-relaxed sm:leading-7 text-black mb-8">
                        <li className="pl-2">všetky interaktívne prvky sú implementované ako tlačidlá button </li>
                        <li className="pl-2">pridajte atribút aria-expanded (true/false), ktorý označuje či je sekcia rozbalená alebo zbalená</li>
                        <li className="pl-2">pridajte atribút aria-controls, ktorý prepája tlačidlo s konkrétnym obsahom sekcie (cez ID), vďaka čomu asistenčné technológie vedia, že kliknutím na tlačidlo sa zmení viditeľnosť práve tejto sekcie</li>
                        <li className="pl-2">pridajte atribút aria-label, ktorý kombinuje názov sekcie, prípadný súhrn a stavovú správu (otvorené/zatvorené) pre asistenčné technológie</li>
                        <li className="pl-2">obsah musí zostať vždy dostupný aj bez JavaScriptu</li>
                    </ul>


                </div>
            )}

            {/* TAB: KÓD */}
            {activeTab === 'kod' && (
                <div className="animate-fade-in">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-6 leading-tight">
                        Kód a implementácia
                    </h2>
                    <p className="text-sm sm:text-base tracking-wide leading-relaxed sm:leading-7 text-black mb-8">
                        Technická dokumentácia k implementácii akordeónu v rámci projektu.
                    </p>
                    
                    <div className="mb-12 w-full sm:w-2/3 md:w-1/2">
                        <Link href={'https://komponenty.idsk3.gov.sk/components/accordion/'}>
                            <Card title="Kód komponentu" content="HTML verzia na prevzatie"/>
                        </Link>
                    </div>
                </div>
            )}

        </div>
    );
}

export default AccordionPage;