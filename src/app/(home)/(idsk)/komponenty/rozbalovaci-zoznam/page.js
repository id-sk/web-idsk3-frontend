import React from 'react';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/app/(home)/_components/tab-bar/tabBar';

import TabPouzitie from './_tabs-select/TabPouzitie';
import TabVarianty from './_tabs-select/TabVarianty';
import TabPristupnost from './_tabs-select/TabPristupnost';
import TabImplementacia from './_tabs-select/TabImplementacia';

export const metadata = {
  title: 'Rozbaľovacie pole | Komponenty IDSK',
  description: 'Dokumentácia komponentu Rozbaľovacie pole (Select), jeho varianty, prístupnosť a implementácia.',
};

const SelectPage = () => {
  return (
    <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0 text-black">
      
      <header>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
          Rozbaľovacie pole (Select)
        </h1>
      </header>
      
      <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-12">
        Rozbaľovacie pole je interaktívny prvok, ktorý umožňuje používateľovi vybrať jednu možnosť z ponuky dostupných hodnôt. Po kliknutí na pole používateľ otvorí zoznam možností (rozbaľovací zoznam) a z neho zvolí požadovanú položku. Vybraná možnosť sa následne zobrazí v základnom (zatvorenom) stave poľa.
      </p>

      <Tabs defaultValue="pouzitie">
        
        <TabsList ariaLabel="Sekcie dokumentácie komponentu Rozbaľovacie pole">
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

export default SelectPage;
