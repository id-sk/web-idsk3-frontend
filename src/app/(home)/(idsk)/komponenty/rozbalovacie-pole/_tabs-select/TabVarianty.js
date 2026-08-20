'use client';

import React, { useState } from 'react';
import SelectDropdownCustom from '@/app/(home)/_components/select/selectCustom';
import { SectionBlock, H3, Text, ExampleBlock } from '@/app/(home)/_components/content-blocks/ContentBlocks';

const basicOptions = [
  { value: 'sk', label: 'Slovensko' },
  { value: 'cz', label: 'Česká republika' },
  { value: 'at', label: 'Rakúsko' },
  { value: 'hu', label: 'Maďarsko' },
  { value: 'pl', label: 'Poľsko' },
];

const optionsWithDisabled = [
  { value: 'sk', label: 'Slovensko' },
  { value: 'cz', label: 'Česká republika' },
  { value: 'at', label: 'Rakúsko (nedostupné)', disabled: true },
  { value: 'hu', label: 'Maďarsko' },
  { value: 'pl', label: 'Poľsko (nedostupné)', disabled: true },
];

const TabVariantyStavy = () => {
  const [controlledValue, setControlledValue] = useState('');

  return (
    <div className="animate-fade-in text-black w-full min-w-0">
      <SectionBlock titleString="Varianty a stavy rozbaľovacieho poľa">
        <Text>
          Rozbaľovacie pole môže byť zobrazené v základnom, povinnom,
          nepovinnom, chybovom alebo neaktívnom stave. Podporuje aj predvolenú
          hodnotu, neaktívne položky a riadený stav.
        </Text>

        <H3>1. Základný stav</H3>
        <ExampleBlock className="mt-4 py-0" innerClassName="max-w-[400px] py-7 my-6">
          <SelectDropdownCustom
            id="select-default"
            name="select-default"
            label="Názov rozbaľovacieho poľa"
            placeholder="Vyberte možnosť"
            fullWidth
            options={basicOptions}
          />
        </ExampleBlock>

        <H3>2. Povinné pole</H3>
        <ExampleBlock className="mt-4 py-0" innerClassName="max-w-[400px] py-7 my-6">
          <SelectDropdownCustom
            id="select-required"
            name="select-required"
            label="Názov rozbaľovacieho poľa"
            placeholder="Vyberte možnosť"
            mandatory
            fullWidth
            options={basicOptions}
          />
        </ExampleBlock>

        <H3>3. Nepovinné pole</H3>
        <ExampleBlock className="mt-4 py-0" innerClassName="max-w-[400px] py-7 my-6">
          <SelectDropdownCustom
            id="select-optional"
            name="select-optional"
            label="Názov rozbaľovacieho poľa"
            placeholder="Vyberte možnosť"
            mandatory={false}
            fullWidth
            options={basicOptions}
          />
        </ExampleBlock>

        <H3>4. Pole s pomocným textom</H3>
        <ExampleBlock className="mt-4 py-0" innerClassName="max-w-[400px] py-7 my-6">
          <SelectDropdownCustom
            id="select-hint"
            name="select-hint"
            label="Názov rozbaľovacieho poľa"
            hint="Pomocný text pre používateľa"
            placeholder="Vyberte možnosť"
            mandatory
            fullWidth
            options={basicOptions}
          />
        </ExampleBlock>

        <H3>5. Chybový stav</H3>
        <ExampleBlock className="mt-4 py-0" innerClassName="max-w-[400px] py-7 my-6">
          <SelectDropdownCustom
            id="select-error"
            name="select-error"
            label="Názov rozbaľovacieho poľa"
            placeholder="Vyberte možnosť"
            mandatory
            error
            errorMsg="Chybový text"
            fullWidth
            options={basicOptions}
          />
        </ExampleBlock>

        <H3>6. Chybový stav s pomocným textom</H3>
        <ExampleBlock className="mt-4 py-0" innerClassName="max-w-[400px] py-7 my-6">
          <SelectDropdownCustom
            id="select-error-hint"
            name="select-error-hint"
            label="Názov rozbaľovacieho poľa"
            hint="Pomocný text pre používateľa"
            placeholder="Vyberte možnosť"
            mandatory
            error
            errorMsg="Chybový text"
            fullWidth
            options={basicOptions}
          />
        </ExampleBlock>

        <H3>7. Neaktívny stav</H3>
        <ExampleBlock className="mt-4 py-0" innerClassName="max-w-[400px] py-7 my-6">
          <SelectDropdownCustom
            id="select-disabled"
            name="select-disabled"
            label="Názov rozbaľovacieho poľa"
            placeholder="Vyberte možnosť"
            mandatory
            disabled
            fullWidth
            options={basicOptions}
          />
        </ExampleBlock>

        <H3>8. Vybraná hodnota</H3>
        <ExampleBlock className="mt-4 py-0" innerClassName="max-w-[400px] py-7 my-6">
          <SelectDropdownCustom
            id="select-selected"
            name="select-selected"
            label="Názov rozbaľovacieho poľa"
            placeholder="Vyberte možnosť"
            mandatory
            defaultValue="sk"
            fullWidth
            options={basicOptions}
          />
        </ExampleBlock>

        <H3>9. Malý variant</H3>
        <ExampleBlock className="mt-4 py-0" innerClassName="max-w-[400px] py-7 my-6">
          <SelectDropdownCustom
            id="select-small"
            name="select-small"
            label="Názov rozbaľovacieho poľa"
            placeholder="Vyberte možnosť"
            inputSize="small"
            mandatory
            fullWidth
            options={basicOptions}
          />
        </ExampleBlock>

        <H3>10. Vybraná hodnota v malom variante</H3>
        <ExampleBlock className="mt-4 py-0" innerClassName="max-w-[400px] py-7 my-6">
          <SelectDropdownCustom
            id="select-small-selected"
            name="select-small-selected"
            label="Názov rozbaľovacieho poľa"
            placeholder="Vyberte možnosť"
            inputSize="small"
            mandatory
            defaultValue="sk"
            fullWidth
            options={basicOptions}
          />
        </ExampleBlock>

        <H3>11. Zoznam s neaktívnou položkou</H3>
        <ExampleBlock className="mt-4 py-0" innerClassName="max-w-[400px] py-7 my-6">
          <SelectDropdownCustom
            id="select-disabled-option"
            name="select-disabled-option"
            label="Názov rozbaľovacieho poľa"
            placeholder="Vyberte krajinu"
            mandatory
            fullWidth
            options={optionsWithDisabled}
          />
        </ExampleBlock>

        <H3>12. Riadený stav</H3>
        <ExampleBlock className="mt-4 py-0" innerClassName="max-w-[400px] py-7 my-6">
          <SelectDropdownCustom
            id="select-controlled"
            name="select-controlled"
            label="Riadené rozbaľovacie pole"
            placeholder="Vyberte možnosť"
            mandatory
            value={controlledValue}
            onValueChange={setControlledValue}
            fullWidth
            options={basicOptions}
          />

          <p className="mt-4 text-[16px] leading-[24px] text-[#757575]">
            Vybraná hodnota: <strong>{controlledValue || '(žiadna)'}</strong>
          </p>
        </ExampleBlock>
      </SectionBlock>
    </div>
  );
};

export default TabVariantyStavy;