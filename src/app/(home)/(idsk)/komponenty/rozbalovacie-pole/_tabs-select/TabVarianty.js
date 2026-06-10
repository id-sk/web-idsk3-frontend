'use client';

import React from 'react';
import { Select } from '@eslovensko/idsk-react';
import { SectionBlock, H3 } from '@/app/(home)/_components/content-blocks/ContentBlocks';

const TabVarianty = () => (
    <div className="animate-fade-in text-black w-full min-w-0">
        
        <SectionBlock titleString="Varianty a stavy">
            
            <H3>1. Variant povinného a nepovinného rozbaľovacieho poľa</H3>
            <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8 mt-4">
                <div className="w-full max-w-[400px] px-4">
                    <Select 
                        id="select-unrequired"
                        name="vyber-povinne"
                        label="Príklad povinného poľa"
                        placeholder="-- Vyberte položku --"
                        inputSize="medium"
                        mandatory={true}
                        fullWidth={true}
                    >
                        <option value="">-- Vyberte položku --</option>
                        <option value="polozka-1">Položka 1</option>
                        <option value="polozka-2">Položka 2</option>
                        <option value="polozka-3">Položka 3</option>
                    </Select>
                </div>
                <div className="w-full max-w-[400px] px-4">
                    <Select 
                        id="select-required"
                        name="vyber-nepovinne"
                        label="Príklad nepovinného poľa (nepovinné pole)"
                        placeholder="-- Vyberte položku --"
                        inputSize="medium"
                        fullWidth={true}
                    >
                        <option value="">-- Vyberte položku --</option>
                        <option value="polozka-1">Položka 1</option>
                        <option value="polozka-2">Položka 2</option>
                        <option value="polozka-3">Položka 3</option>
                    </Select>
                </div>
            </div>

            <H3>2. Variant chybového, neaktívneho rozbaľovacieho poľa a poľa s podnadpisom</H3>
            <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8 mt-4">
                <div className="w-full max-w-[400px] px-4">
                    <Select 
                        id="select-priklad-chyba"
                        inputSize="medium"
                        name="vyber-chyba"
                        label="Príklad chybového stavu"
                        errorMsg="Chybový text"
                        mandatory={true}
                        error={true}
                        fullWidth={true}
                    >
                        <option value="">-- Vyberte položku --</option>
                        <option value="polozka-1">Položka 1</option>
                        <option value="polozka-2">Položka 2</option>
                        <option value="polozka-3">Položka 3</option>
                    </Select>
                </div>
                <div className="w-full max-w-[400px] px-4">
                    <Select 
                        id="select-priklad-disabled"
                        inputSize="medium"
                        name="vyber-disabled"
                        label="Príklad neaktívneho stavu"
                        optionalText="(nepovinné pole)"
                        disabled={true}
                        fullWidth={true}
                    >
                        <option value="">-- Vyberte položku --</option>
                        <option value="polozka-1">Položka 1</option>
                        <option value="polozka-2">Položka 2</option>
                        <option value="polozka-3">Položka 3</option>
                    </Select>
                </div>
                <div className="w-full max-w-[400px] px-4">
                    <Select 
                        id="select-priklad-podnadpis"
                        inputSize="medium"
                        name="vyber-podnadpis"
                        label="Príklad s podnadpisom"
                        subtitle="Podnadpis rozbaľovacieho poľa"
                        mandatory={true}
                        fullWidth={true}
                    >
                        <option value="">-- Vyberte položku --</option>
                        <option value="polozka-1">Položka 1</option>
                        <option value="polozka-2">Položka 2</option>
                        <option value="polozka-3">Položka 3</option>
                    </Select>
                </div>
            </div>

            <H3>3. Variant rozbaľovacieho poľa veľký a malý</H3>
            <div className="flex flex-col items-center gap-6 py-10 bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8 mt-4">
                <div className="w-full max-w-[400px] px-4">
                    <Select 
                        id="select-priklad-velky"
                        inputSize="medium"
                        name="vyber-velky"
                        label="Variant rozbaľovacieho poľa - veľký"
                        mandatory={true}
                        fullWidth={true}
                    >
                        <option value="">-- Vyberte položku --</option>
                        <option value="polozka-1">Položka 1</option>
                        <option value="polozka-2">Položka 2</option>
                        <option value="polozka-3">Položka 3</option>
                    </Select>
                </div>
                <div className="w-full max-w-[400px] px-4">
                    <Select 
                        id="select-priklad-maly"
                        inputSize="small"
                        name="vyber-maly"
                        label="Variant rozbaľovacieho poľa - malý"
                        mandatory={true}
                        fullWidth={true}
                    >
                        <option value="">-- Vyberte položku --</option>
                        <option value="polozka-1">Položka 1</option>
                        <option value="polozka-2">Položka 2</option>
                        <option value="polozka-3">Položka 3</option>
                    </Select>
                </div>
            </div>

        </SectionBlock>
    </div>
);

export default TabVarianty;