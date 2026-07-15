'use client';

import React from 'react';

import FeedbackBarCustom from '@/app/(home)/_components/feedback-bar/feedbackBarCustom';

import {
  SectionBlock,
  H3,
  Text,
} from '@/app/(home)/_components/content-blocks/ContentBlocks';

const exampleWrapperClass =
  'flex flex-col items-center gap-6 py-10 border-2 border-dashed border-[#9e9e9e] rounded-[10px] mb-8 mt-4';

const TabVarianty = () => (
  <div className="animate-fade-in text-black w-full min-w-0">
    <SectionBlock titleString="Varianty a stavy">
      <H3>1. Základná lišta spätnej väzby</H3>

      <Text className="mb-4">
        Základný variant obsahuje otázku a dve rovnocenné odpovede „Áno“ a
        „Nie“. Po výbere odpovede sa používateľovi zobrazí potvrdzujúca správa.
      </Text>

      <div className={exampleWrapperClass}>
        <div className="w-full max-w-[800px] px-4">
          <FeedbackBarCustom question="Boli tieto informácie pre vás užitočné?" />
        </div>
      </div>

      <H3>2. Variant s tlačidlom na nahlásenie problému</H3>

      <Text className="mb-4">
        Tento variant pridáva samostatný odkaz na nahlásenie problému na
        stránke. Používateľ tak môže poskytnúť spätnú väzbu aj mimo odpovedí
        „Áno“ a „Nie“.
      </Text>

      <div className={exampleWrapperClass}>
        <div className="w-full max-w-[800px] px-4">
          <FeedbackBarCustom
            question="Našli ste na tejto stránke to, čo ste hľadali?"
            showReportButton
            reportText="Oznámte chybu"
            onReport={() => {
            }}
          />
        </div>
      </div>

      <H3>3. Variant s inou otázkou</H3>

      <Text className="mb-4">
        Otázka sa môže prispôsobiť obsahu stránky, ale musí byť stručná,
        zrozumiteľná a nesmie používateľa navádzať na konkrétnu odpoveď.
      </Text>

      <div className={exampleWrapperClass}>
        <div className="w-full max-w-[800px] px-4">
           <FeedbackBarCustom
            question="Našli ste na tejto stránke to, čo ste hľadali?"
            showReportButton
            reportText="Oznámte chybu"
            onReport={() => {
            }}
          />
        </div>
      </div>
    </SectionBlock>
  </div>
);

export default TabVarianty;