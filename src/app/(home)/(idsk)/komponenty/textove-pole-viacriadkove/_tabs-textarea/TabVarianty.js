'use client';

import React from 'react';
import { TextField } from '@eslovensko/idsk-react';
import { SectionBlock, H3 } from '@/app/(home)/_components/content-blocks/ContentBlocks';

const TabVarianty = () => (
    <div className="animate-fade-in text-black w-full min-w-0">
        
        <SectionBlock titleString="Varianty a stavy">
            
            <H3>1. Variant povinného a nepovinného viacriadkového textového poľa</H3>
            <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8 mt-4">
                <div className="w-full max-w-[400px] px-4">
                    <TextField 
                        id="input-priklad-povinne"
                        inputSize='medium'
                        name="priklad-povinne"
                        label="Príklad povinného poľa"
                        mandatory={true}
                        fullWidth={true}
                    />
                </div>
                <div className="w-full max-w-[400px] px-4">
                    <TextField 
                        id="input-priklad-nepovinne"
                        inputSize='medium'
                        name="priklad-nepovinne"
                        label="Príklad nepovinného poľa"
                        optionalText="(nepovinné pole)"
                        fullWidth={true}
                    />
                </div>
            </div>

            <H3>2. Variant chybového a neaktívneho viacriadkového textového poľa</H3>
            <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8 mt-4">
                <div className="w-full max-w-[400px] px-4">
                    <TextField 
                        id="input-priklad-chyba"
                        inputSize='medium'
                        name="priklad-chyba"
                        label="Príklad chybového stavu"
                        errorMsg="Chybový text"
                        mandatory={true}
                        error={true}
                        fullWidth={true}
                    />
                </div>
                <div className="w-full max-w-[400px] px-4">
                    <TextField 
                        id="input-priklad-disabled"
                        inputSize='medium'
                        name="priklad-disabled"
                        label="Príklad neaktívneho stavu"
                        optionalText="(nepovinné pole)"
                        disabled={true}
                        fullWidth={true}
                    />
                </div>
            </div>

            <H3>3. Varianty viacriadkového textového poľa s podnadpisom a s placeholderom</H3>
            <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8 mt-4">
                <div className="w-full max-w-[400px] px-4">
                    <TextField 
                        id="input-priklad-podnadpis"
                        inputSize='medium'
                        name="priklad-podnadpis"
                        label="Príklad s podnadpisom"
                        subtitle="Podnadpis textového poľa"
                        mandatory={true}
                        fullWidth={true}
                    />
                </div>
                <div className="w-full max-w-[400px] px-4">
                    <TextField 
                        id="input-priklad-placeholder"
                        inputSize='medium'
                        name="priklad-placeholder"
                        label="Príklad s placeholderom"
                        placeholder="Objavil som nasledovnú chybu..."
                        mandatory={true}
                        fullWidth={true}
                    />
                </div>
            </div>

        </SectionBlock>
    </div>
);

export default TabVarianty;