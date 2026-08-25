'use client';

import React from 'react';

import FeedbackBarCustom from '@/app/(home)/_components/feedback-bar/feedbackBarCustom';

import {
  SectionBlock,
  H3,
  Text,
  ExampleBlock,
} from '@/app/(home)/_components/content-blocks/ContentBlocks';

const TabVarianty = () => (
  <div className="animate-fade-in text-black w-full min-w-0">
    <SectionBlock titleString="Varianty a stavy">
      <H3>1. Základná lišta spätnej väzby</H3>

      <Text className="mb-4">
        Základný variant obsahuje otázku a dve rovnocenné odpovede „Áno“ a
        „Nie“. Po výbere odpovede sa používateľovi zobrazí potvrdzujúca správa.
      </Text>

      <ExampleBlock className="mt-4" innerClassName="max-w-[800px]">
        <FeedbackBarCustom question="Boli tieto informácie pre vás užitočné?" />
      </ExampleBlock>

      <H3>2. Variant s tlačidlom na nahlásenie problému</H3>

      <Text className="mb-4">
        Tento variant pridáva samostatný odkaz na nahlásenie problému na
        stránke. Používateľ tak môže poskytnúť spätnú väzbu aj mimo odpovedí
        „Áno“ a „Nie“.
      </Text>

      <ExampleBlock className="mt-4" innerClassName="max-w-[800px]">
        <FeedbackBarCustom
          question="Našli ste na tejto stránke to, čo ste hľadali?"
          showReportButton
          reportText="Oznámte chybu"
          onReport={() => {
          }}
        />
      </ExampleBlock>

      <H3>3. Variant s inou otázkou</H3>

      <Text className="mb-4">
        Otázka sa môže prispôsobiť obsahu stránky, ale musí byť stručná,
        zrozumiteľná a nesmie používateľa navádzať na konkrétnu odpoveď.
      </Text>

      <ExampleBlock className="mt-4" innerClassName="max-w-[800px]">
        <FeedbackBarCustom
          question="Našli ste na tejto stránke to, čo ste hľadali?"
          showReportButton
          reportText="Oznámte chybu"
          onReport={() => {
          }}
        />
      </ExampleBlock>
    </SectionBlock>
  </div>
);

export default TabVarianty;