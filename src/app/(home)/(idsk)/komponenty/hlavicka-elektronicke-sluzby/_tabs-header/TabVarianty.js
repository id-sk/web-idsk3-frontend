'use client';

import React from 'react';

import Navbar from '@/app/(home)/_components/navbar/navbar';

import {
  SectionBlock,
  H3,
  Text,
} from '@/app/(home)/_components/content-blocks/ContentBlocks';

const exampleWrapperClass =
  'flex justify-center bg-[#FDFDFD] bg-[radial-gradient(circle,_#4B4B4B40_1px,_transparent_1px)] bg-[size:18px_18px] rounded-sm mb-8 transition-all duration-300';

const TabVarianty = () => {
  const mockSidebarData = [];

  return (
    <div className="animate-fade-in text-black w-full min-w-0">
      <SectionBlock titleString="Varianty a stavy">
        <H3>1. Hlavička s navigáciou</H3>

        <Text className="mb-8">
          Použite pri rozsiahlejšej informačnej architektúre elektronickej
          služby. Navigácia pomáha používateľovi orientovať sa v hlavných
          častiach aplikácie.
        </Text>

        <div className={exampleWrapperClass}>
          <div className="w-full max-w-[800px] py-7 my-6 px-4 relative min-h-[250px] h-auto">
            <Navbar sidebarData={mockSidebarData} />
          </div>
        </div>

        <H3>2. Hlavička bez navigácie</H3>

        <Text className="mb-8">
          Použite pri jednoduchej elektronickej službe bez rozsiahlej informačnej
          architektúry. V takom prípade hlavička stále obsahuje základnú
          identitu služby a akčný panel, ale nezobrazuje hlavné menu.
        </Text>

        <div className={exampleWrapperClass}>
          <div className="w-full max-w-[800px] py-7 my-6 px-4 relative min-h-[250px] h-auto">
            <Navbar hideNavigation={true} />
          </div>
        </div>
      </SectionBlock>
    </div>
  );
};

export default TabVarianty;