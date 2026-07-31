import React from 'react';

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/app/(home)/_components/tab-bar/tabBar';

import TabPouzitie from './_tabs-breadcrumbs/TabPouzitie';
import TabVarianty from './_tabs-breadcrumbs/TabVarianty';
import TabPristupnost from './_tabs-breadcrumbs/TabPristupnost';
import TabImplementacia from './_tabs-breadcrumbs/TabImplementacia';

export const metadata = {
  title: 'Omrvinková navigácia | Komponenty IDSK',
  description:
    'Dokumentácia komponentu Omrvinková navigácia (Breadcrumbs), jeho použitie, varianty, prístupnosť a implementácia.',
};

const BreadcrumbsPage = () => {
  return (
    <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0 text-black">
      <header>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
          Omrvinková navigácia (Breadcrumbs)
        </h1>
      </header>

      <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-12">
        Komponent omrvinková navigácia pomáha používateľom pochopiť, kde sa
        nachádzajú v štruktúre webového sídla a prechádzať medzi jednotlivými
        úrovňami.
      </p>

      <Tabs defaultValue="pouzitie">
        <TabsList ariaLabel="Sekcie dokumentácie komponentu Omrvinková navigácia">
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

export default BreadcrumbsPage;