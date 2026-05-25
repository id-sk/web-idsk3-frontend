import React from 'react';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/app/(home)/_components/tab-bar/tabBar';

import TabPouzitie from './_tabs-checkbox/TabPouzitie';
import TabVarianty from './_tabs-checkbox/TabVarianty';
import TabPristupnost from './_tabs-checkbox/TabPristupnost';
import TabImplementacia from './_tabs-checkbox/TabImplementacia';

export const metadata = {
  title: 'Začiarkavacie pole | Komponenty IDSK',
  description: 'Dokumentácia komponentu Začiarkavacie pole (Checkbox), jeho varianty, prístupnosť a implementácia.',
};

const CheckboxPage = () => {
  return (
    <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0 text-black">
      <header>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
          Začiarkavacie pole (Checkbox)
        </h1>
      </header>

      <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-12">
        Začiarkavacie pole je interaktívny prvok, ktorý umožňuje používateľovi vybrať jednu alebo viacero položiek z množiny možností. Používateľ označí Začiarkavacie pole kliknutím do štvorca a zruší označenie opätovným kliknutím.
      </p>

      <Tabs defaultValue="pouzitie">
        <TabsList ariaLabel="Sekcie dokumentácie komponentu Začiarkavacie pole">
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
}

export default CheckboxPage;