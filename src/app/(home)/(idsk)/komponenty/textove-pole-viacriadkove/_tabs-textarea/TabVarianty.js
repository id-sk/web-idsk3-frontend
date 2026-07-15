'use client';

import React from 'react';
import TextareaCustom from '@/app/(home)/_components/inputs/textareaCustom';
import {
  SectionBlock,
  H3,
} from '@/app/(home)/_components/content-blocks/ContentBlocks';

const exampleWrapperClass =
  'flex flex-col items-center gap-6 py-10 border-2 border-dashed border-[#9e9e9e] rounded-[10px] mb-8 mt-4';

const TabVarianty = () => (
  <div className="animate-fade-in text-black w-full min-w-0">
    <SectionBlock titleString="Varianty a stavy">
      <H3>1. Variant povinného a nepovinného viacriadkového textového poľa</H3>

      <div className={exampleWrapperClass}>
        <div className="w-full max-w-[610px] px-4">
          <TextareaCustom
            id="textarea-priklad-povinne"
            name="priklad-povinne"
            label="Príklad povinného poľa"
            mandatory
            fullWidth
            maxLength={1000}
          />
        </div>

        <div className="w-full max-w-[610px] px-4">
          <TextareaCustom
            id="textarea-priklad-nepovinne"
            name="priklad-nepovinne"
            label="Príklad nepovinného poľa"
            optionalText="(nepovinné pole)"
            fullWidth
            maxLength={1000}
          />
        </div>
      </div>

      <H3>2. Variant chybového a neaktívneho viacriadkového textového poľa</H3>

      <div className={exampleWrapperClass}>
        <div className="w-full max-w-[610px] px-4">
          <TextareaCustom
            id="textarea-priklad-chyba"
            name="priklad-chyba"
            label="Príklad chybového stavu"
            error
            errorMsg="Chybový text"
            announceError={false}
            mandatory
            fullWidth
            maxLength={1000}
          />
        </div>

        <div className="w-full max-w-[610px] px-4">
          <TextareaCustom
            id="textarea-priklad-disabled"
            name="priklad-disabled"
            label="Príklad neaktívneho stavu"
            optionalText="(nepovinné pole)"
            disabled
            fullWidth
            maxLength={1000}
          />
        </div>
      </div>

      <H3>3. Varianty viacriadkového textového poľa s podnadpisom a placeholderom</H3>

      <div className={exampleWrapperClass}>
        <div className="w-full max-w-[610px] px-4">
          <TextareaCustom
            id="textarea-priklad-podnadpis"
            name="priklad-podnadpis"
            label="Príklad s podnadpisom"
            subtitle="Podnadpis textového poľa"
            mandatory
            fullWidth
            maxLength={1000}
          />
        </div>

        <div className="w-full max-w-[610px] px-4">
          <TextareaCustom
            id="textarea-priklad-placeholder"
            name="priklad-placeholder"
            label="Príklad s placeholderom"
            placeholder="Objavil som nasledovnú chybu..."
            mandatory
            fullWidth
            maxLength={1000}
          />
        </div>
      </div>

      <H3>4. Variant viacriadkového textového poľa s popisným textom</H3>

      <div className={exampleWrapperClass}>
        <div className="w-full max-w-[610px] px-4">
          <TextareaCustom
            id="textarea-priklad-popis"
            name="priklad-popis"
            label="Príklad s popisným textom"
            description="Popisný text je programovo prepojený s viacriadkovým textovým poľom cez aria-describedby."
            mandatory
            fullWidth
            maxLength={1000}
          />
        </div>
      </div>
    </SectionBlock>
  </div>
);

export default TabVarianty;