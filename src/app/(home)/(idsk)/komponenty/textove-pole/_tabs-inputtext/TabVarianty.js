'use client';

import React from 'react';
import TextInputCustom from '@/app/(home)/_components/inputs/textInputCustom';
import {
  SectionBlock,
  H3,
  ExampleBlock,
} from '@/app/(home)/_components/content-blocks/ContentBlocks';

const ExampleInputWrapper = ({ children }) => (
  <div className="w-full max-w-[400px] px-4">
    {children}
  </div>
);

const TabVarianty = () => (
  <div className="animate-fade-in w-full min-w-0 text-black">
    <SectionBlock titleString="Varianty a stavy">
      <H3>1. Variant povinného a nepovinného textového poľa</H3>

      <ExampleBlock className="mt-4" innerClassName="flex flex-col items-center gap-6 max-w-none px-0">
        <ExampleInputWrapper>
          <TextInputCustom
            id="input-priklad-povinne"
            inputSize="large"
            name="priklad-povinne"
            label="Príklad povinného poľa"
            mandatory
            fullWidth
          />
        </ExampleInputWrapper>

        <ExampleInputWrapper>
          <TextInputCustom
            id="input-priklad-nepovinne"
            inputSize="large"
            name="priklad-nepovinne"
            label="Príklad nepovinného poľa"
            optionalText="(nepovinné pole)"
            fullWidth
          />
        </ExampleInputWrapper>
      </ExampleBlock>

      <H3>2. Variant chybového a neaktívneho textového poľa</H3>

      <ExampleBlock className="mt-4" innerClassName="flex flex-col items-center gap-6 max-w-none px-0">
        <ExampleInputWrapper>
          <TextInputCustom
            id="input-priklad-chyba"
            inputSize="large"
            name="priklad-chyba"
            label="Príklad chybového stavu"
            error
            errorMsg="Chybový text"
            mandatory
            fullWidth
          />
        </ExampleInputWrapper>

        <ExampleInputWrapper>
          <TextInputCustom
            id="input-priklad-disabled"
            inputSize="large"
            name="priklad-disabled"
            label="Príklad neaktívneho stavu"
            optionalText="(nepovinné pole)"
            disabled
            fullWidth
          />
        </ExampleInputWrapper>
      </ExampleBlock>

      <H3>3. Varianty textového poľa s podnadpisom, placeholderom a popisom</H3>

      <ExampleBlock className="mt-4" innerClassName="flex flex-col items-center gap-6 max-w-none px-0">
        <ExampleInputWrapper>
          <TextInputCustom
            id="input-priklad-podnadpis"
            inputSize="large"
            name="priklad-podnadpis"
            label="Príklad s podnadpisom"
            subtitle="Podnadpis textového poľa"
            mandatory
            fullWidth
          />
        </ExampleInputWrapper>

        <ExampleInputWrapper>
          <TextInputCustom
            id="input-priklad-placeholder"
            inputSize="large"
            name="priklad-placeholder"
            label="Príklad s placeholderom"
            placeholder="Ján Novák"
            mandatory
            fullWidth
          />
        </ExampleInputWrapper>

        <ExampleInputWrapper>
          <TextInputCustom
            id="input-priklad-popis"
            inputSize="large"
            name="priklad-popis"
            label="Príklad s popisným textom"
            description="Popisný text"
            mandatory
            fullWidth
          />
        </ExampleInputWrapper>
      </ExampleBlock>

      <H3>4. Varianty veľkostí textového poľa</H3>

      <ExampleBlock className="mt-4" innerClassName="flex flex-col items-center gap-6 max-w-none px-0">
        <ExampleInputWrapper>
          <TextInputCustom
            id="input-priklad-velky"
            inputSize="large"
            name="priklad-velky"
            label="Variant textového poľa – veľký"
            mandatory
            fullWidth
          />
        </ExampleInputWrapper>

        <ExampleInputWrapper>
          <TextInputCustom
            id="input-priklad-stredny"
            inputSize="medium"
            name="priklad-stredny"
            label="Variant textového poľa – stredný"
            mandatory
            fullWidth
          />
        </ExampleInputWrapper>

        <ExampleInputWrapper>
          <TextInputCustom
            id="input-priklad-maly"
            inputSize="small"
            name="priklad-maly"
            label="Variant textového poľa – malý"
            mandatory
            fullWidth
          />
        </ExampleInputWrapper>
      </ExampleBlock>
    </SectionBlock>
  </div>
);

export default TabVarianty;