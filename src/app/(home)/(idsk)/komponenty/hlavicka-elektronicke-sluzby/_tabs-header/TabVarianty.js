'use client';

import React from 'react';

import Navbar from '@/app/(home)/_components/navbar/navbar';

import {
  SectionBlock,
  H3,
  Text,
  Ul,
  ExampleBlock,
} from '@/app/(home)/_components/content-blocks/ContentBlocks';

const TabVarianty = () => {
  const mockSidebarData = [];

  return (
    <div className="animate-fade-in text-black w-full min-w-0">
      <SectionBlock titleString="Varianty a stavy">
        <Text className="mb-2">
          Hlavička pre elektronické služby má dva základné varianty, ktoré sa
          líšia prítomnosťou hlavnej navigácie:
        </Text>

        <Ul className="mb-8">
          <li>
            <strong>Hlavička s navigáciou</strong> – vhodná pri rozsiahlejšej
            informačnej architektúre elektronickej služby.
          </li>
          <li>
            <strong>Hlavička bez navigácie</strong> – vhodná pri jednoduchej
            elektronickej službe bez rozsiahlej informačnej architektúry.
          </li>
        </Ul>

        <H3>1. Hlavička s navigáciou</H3>

        <Text className="mb-8">
          Použite pri rozsiahlejšej informačnej architektúre elektronickej
          služby. Navigácia pomáha používateľovi orientovať sa v hlavných
          častiach aplikácie.
        </Text>

        <ExampleBlock innerClassName="max-w-[800px]">
          <Navbar sidebarData={mockSidebarData} />
        </ExampleBlock>

        <H3>2. Hlavička bez navigácie</H3>

        <Text className="mb-8">
          Použite pri jednoduchej elektronickej službe bez rozsiahlej
          informačnej architektúry. V takom prípade hlavička stále obsahuje
          základnú identitu služby a akčný panel, ale nezobrazuje hlavné menu.
        </Text>

        <ExampleBlock innerClassName="max-w-[800px]">
          <Navbar hideNavigation={true} />
        </ExampleBlock>
      </SectionBlock>
    </div>
  );
};

export default TabVarianty;