import React from 'react';
import ButtonCustom from '@/app/(home)/_components/button/buttonCustom';
import { SectionBlock, H3, ExampleBlock } from '@/app/(home)/_components/content-blocks/ContentBlocks';

const TabVarianty = () => (
    <div className="animate-fade-in text-black w-full min-w-0">
        
        <SectionBlock titleString="Varianty a stavy">
            
            <H3>1. Varianty tlačidla – primárne, sekundárne, textové</H3>
            <ExampleBlock className="mt-4" innerClassName="grid grid-cols-1 sm:grid-cols-3 place-items-center gap-12 max-w-[700px]">
                <ButtonCustom variant="primary" status="basic">
                    Hlavná akcia
                </ButtonCustom>
                <ButtonCustom variant="secondary" status="basic">
                    Vedľajšia akcia
                </ButtonCustom>
                <ButtonCustom variant="tertiary" status="basic">
                    Doplnková akcia
                </ButtonCustom>
            </ExampleBlock>

            <H3>2. Typy tlačidla – úspešné, výstražné, neaktívne</H3>
            <ExampleBlock className="mt-4" innerClassName="grid grid-cols-1 sm:grid-cols-3 place-items-center gap-12 max-w-[700px]">
                {/* Success */}
                <ButtonCustom variant="primary" status="success">
                    Hlavná akcia
                </ButtonCustom>
                <ButtonCustom variant="secondary" status="success">
                    Vedľajšia akcia
                </ButtonCustom>
                <ButtonCustom variant="tertiary" status="success">
                    Doplnková akcia
                </ButtonCustom>

                <div className="hidden sm:block"></div>
                <ButtonCustom variant="secondary" status="warning">
                    Vedľajšia akcia
                </ButtonCustom>
                <ButtonCustom variant="tertiary" status="warning">
                    Doplnková akcia
                </ButtonCustom>

                {/* Disabled */}
                <ButtonCustom variant="primary" status="basic" disabled={true}>
                    Hlavná akcia
                </ButtonCustom>
                <ButtonCustom variant="secondary" status="basic" disabled={true}>
                    Vedľajšia akcia
                </ButtonCustom>
                <ButtonCustom variant="tertiary" status="basic" disabled={true}>
                    Doplnková akcia
                </ButtonCustom>
            </ExampleBlock>

            <H3>3. Veľkosti tlačidla – veľké, stredné, malé</H3>
            <ExampleBlock className="mt-4" innerClassName="grid grid-cols-1 sm:grid-cols-3 place-items-center gap-12 max-w-[700px]">
                <ButtonCustom variant="primary" status="basic" size="large">
                    Hlavná akcia
                </ButtonCustom>
                <ButtonCustom variant="primary" status="basic" size="medium">
                    Vedľajšia akcia
                </ButtonCustom>
                <ButtonCustom variant="primary" status="basic" size="small">
                    Doplnková akcia
                </ButtonCustom>
            </ExampleBlock>

            <H3>4. Konfigurácie tlačidla – s ikonkou naľavo, s ikonkou napravo, iba ikonka</H3>
            <ExampleBlock className="mt-4" innerClassName="grid grid-cols-1 sm:grid-cols-3 place-items-center gap-12 max-w-[700px]">
                
                <ButtonCustom 
                    variant="primary" 
                    status="basic" 
                    iconLeft={
                        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    }
                >
                    Vyhľadať
                </ButtonCustom>
                <ButtonCustom 
                    variant="primary" 
                    status="success" 
                    iconRight={
                        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    }
                >
                    Pokračovať
                </ButtonCustom>
                <ButtonCustom 
                    variant="primary" 
                    status="basic" 
                    aria-label="Otvoriť na novej karte"
                    iconLeft={
                        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    }
                />

                {/* Secondary s ikonami */}
                <ButtonCustom 
                    variant="secondary" 
                    status="basic" 
                    iconLeft={
                        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    }
                >
                    Vyhľadať
                </ButtonCustom>
                <ButtonCustom 
                    variant="secondary" 
                    status="success" 
                    iconRight={
                        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    }
                >
                    Pokračovať
                </ButtonCustom>
                <ButtonCustom 
                    variant="secondary" 
                    status="warning" 
                    aria-label="Odstrániť položku"
                    iconLeft={
                        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                        </svg>
                    }
                />

                {/* Tertiary s ikonami */}
                <ButtonCustom 
                    variant="tertiary" 
                    status="basic" 
                    iconLeft={
                        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    }
                >
                    Vyhľadať
                </ButtonCustom>
                <ButtonCustom 
                    variant="tertiary" 
                    status="success" 
                    iconRight={
                        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    }
                >
                    Pokračovať
                </ButtonCustom>
                <ButtonCustom 
                    variant="tertiary" 
                    status="warning" 
                    aria-label="Odstrániť položku"
                    iconLeft={
                        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                        </svg>
                    }
                />

            </ExampleBlock>

        </SectionBlock>
    </div>
);

export default TabVarianty;