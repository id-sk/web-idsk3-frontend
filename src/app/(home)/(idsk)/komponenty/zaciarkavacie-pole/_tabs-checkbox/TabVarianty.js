import React from 'react';
import Checkbox from '@/app/(home)/_components/inputs/checkboxCustom';
import { SectionBlock, H3 } from '@/app/(home)/_components/content-blocks/ContentBlocks';

const TabVarianty = () => (
    <div className="animate-fade-in text-black w-full min-w-0">
        
        <SectionBlock titleString="Varianty a stavy">
            
            <H3>1. Variant povinného a nepovinného začiarkavacieho poľa</H3>
            <div className="flex flex-col items-center gap-6 py-10 border-2 border-dashed border-[#757575] rounded-[10px] mb-8 mt-4">
                <div className="w-full max-w-[400px] px-4">
                    <Checkbox 
                        inputSize='large'
                        name="checkbox-mandatory"
                        label="Menovka"
                        fullWidth={true}
                        mandatory={true}
                    />
                </div>
                <div className="w-full max-w-[400px] px-4">
                    <Checkbox 
                        inputSize='large'
                        name="checkbox-optional"
                        label="Menovka"
                        optionalText="nepovinné pole"
                        fullWidth={true}
                        mandatory={false}
                    />
                </div>
            </div>

            <H3>2. Variant začiarkavacieho poľa s popisom a bez popisu</H3>
            <div className="flex flex-col items-center gap-6 py-10 border-2 border-dashed border-[#757575] rounded-[10px] mb-8 mt-4">
                <div className="w-full max-w-[400px] px-4">
                    <Checkbox 
                        inputSize='large'
                        name="checkbox-no-hint"
                        label="Menovka"
                        fullWidth={true}
                    />
                </div>
                <div className="w-full max-w-[400px] px-4">
                    <Checkbox 
                        inputSize='large'
                        name="checkbox-with-hint"
                        label="Menovka"
                        optionalText="nepovinné pole"
                        fullWidth={true}
                        mandatory={false}
                        hint="Toto je nepovinné pole"
                    />
                </div>
            </div>

            <H3>3. Variant začiarknutého a nezačiarknutého poľa</H3>
            <div className="flex flex-col items-center gap-6 py-10 border-2 border-dashed border-[#757575] rounded-[10px] mb-8 mt-4">
                <div className="w-full max-w-[400px] px-4">
                    <Checkbox 
                        inputSize='large'
                        name="checkbox-checked"
                        readOnly
                        label="Menovka"
                        checked={true}
                        fullWidth={true}
                        mandatory={true}
                    />
                </div>
                <div className="w-full max-w-[400px] px-4">
                    <Checkbox 
                        inputSize='large'
                        name="checkbox-unchecked"
                        readOnly
                        label="Menovka"
                        checked={false}
                        fullWidth={true}
                        mandatory={true}
                    />
                </div>
            </div>

            <H3>4. Varianty začiarkavacieho poľa – zrušený a chybový</H3>
            <div className="flex flex-col items-center gap-6 py-10 border-2 border-dashed border-[#757575] rounded-[10px] mb-8 mt-4">
                <div className="w-full max-w-[400px] px-4">
                    <Checkbox 
                        inputSize='large'
                        name="checkbox-disabled"
                        label="Menovka"
                        checked={false}
                        fullWidth={true}
                        disabled={true}
                    />
                </div>
                <div className="w-full max-w-[400px] px-4">
                    <Checkbox 
                        inputSize='large'
                        name="checkbox-error"
                        label="Menovka"
                        error={true}
                        aria-invalid={true}
                        fullWidth={true}
                        mandatory={true}
                        errorMsg="Zabudli ste označiť možnosť"
                    />
                </div>
            </div>

            <H3>5. Variant začiarkavacieho poľa – veľký a malý</H3>
            <div className="flex flex-col items-center gap-6 py-10 border-2 border-dashed border-[#757575] rounded-[10px] mb-8 mt-4">
                <div className="w-full max-w-[400px] px-4">
                    <Checkbox 
                        inputSize='large'
                        name="checkbox-large"
                        label="Menovka"
                        fullWidth={true}
                        mandatory={true}
                    />
                </div>
                <div className="w-full max-w-[400px] px-4">
                    <Checkbox 
                        inputSize='small'
                        name="checkbox-small"
                        label="Menovka"
                        fullWidth={true}
                        mandatory={true}
                    />
                </div>
            </div>

        </SectionBlock>
    </div>
);

export default TabVarianty;