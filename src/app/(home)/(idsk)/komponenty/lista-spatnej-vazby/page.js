import React from 'react';

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/app/(home)/_components/tab-bar/tabBar';

import TabPouzitie from './_tabs-feedback/TabPouzitie';
import TabVarianty from './_tabs-feedback/TabVarianty';
import TabPristupnost from './_tabs-feedback/TabPristupnost';
import TabImplementacia from './_tabs-feedback/TabImplementacia';

export const metadata = {
  title: 'Lišta spätnej väzby | IDSK',
  description:
    'Dokumentácia komponentu Lišta spätnej väzby, jeho použitie, varianty, prístupnosť a implementácia.',
};

const FeedbackPage = () => {
  return (
    <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0 text-black">
      <header>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
          Lišta spätnej väzby (Feedback bar)
        </h1>
      </header>

      <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-12">
        Lišta spätnej väzby sa umiestňuje bezprostredne nad komponent päta.
        Základným cieľom lišty spätnej väzby je zistiť od používateľov
        užitočnosť a relevantnosť publikovaného obsahu na webovom sídle.
      </p>

      <Tabs defaultValue="pouzitie">
        <TabsList ariaLabel="Sekcie dokumentácie komponentu Lišta spätnej väzby">
          <TabsTrigger value="pouzitie">Použitie</TabsTrigger>
          <TabsTrigger value="varianty">Varianty a stavy</TabsTrigger>
          <TabsTrigger value="pristupnost">Prístupnosť</TabsTrigger>
          <TabsTrigger value="kod">Implementácia</TabsTrigger>
        </TabsList>

        <div className="mt-2 text-black">
          <TabsContent value="pouzitie">
            <TabPouzitie />
          </TabsContent>

          <TabsContent value="varianty">
            <TabVarianty />
          </TabsContent>

          <TabsContent value="pristupnost">
            <TabPristupnost />
          </TabsContent>

          <TabsContent value="kod">
            <TabImplementacia />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default FeedbackPage;