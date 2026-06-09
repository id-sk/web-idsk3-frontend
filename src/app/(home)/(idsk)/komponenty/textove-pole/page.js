import React from 'react';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/app/(home)/_components/tab-bar/tabBar';

import TabPouzitie from './_tabs-inputtext/TabPouzitie';
import TabVarianty from './_tabs-inputtext/TabVarianty';
import TabPristupnost from './_tabs-inputtext/TabPristupnost';
import TabImplementacia from './_tabs-inputtext/TabImplementacia';

export const metadata = {
  title: 'Textové pole | Komponenty IDSK',
  description: 'Dokumentácia komponentu Textové pole (Input type=text), jeho varianty, prístupnosť a implementácia.',
};

const TextInputPage = () => {
  return (
    <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0 text-black">
      
      <header>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
          Textové pole (Input type=&quot;text&quot;)
        </h1>
      </header>
      
      <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-12">
        Textové polia predstavujú vstupné prvky, ktorých hlavným cieľom je zber dát získaných od používateľov s cieľom dodať im žiadanú informáciu alebo službu. Pre správne pochopenie vyžadovaného údaja je potrebné zrozumiteľne popísať názov textového poľa. Základným pravidlom použitia je oboznámiť používateľa o povinnosti vyplnenia textového poľa.
      </p>

      <Tabs defaultValue="pouzitie">
        
        <TabsList ariaLabel="Sekcie dokumentácie komponentu Textové pole">
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

export default TextInputPage;
