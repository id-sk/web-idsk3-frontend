import React from 'react';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/app/(home)/_components/tab-bar/tabBar';

import TabPouzitie from './_tabs-textarea/TabPouzitie';
import TabVarianty from './_tabs-textarea/TabVarianty';
import TabPristupnost from './_tabs-textarea/TabPristupnost';
import TabImplementacia from './_tabs-textarea/TabImplementacia';

export const metadata = {
  title: 'Viacriadkové textové pole | IDSK',
  description: 'Dokumentácia komponentu Viacriadkové textové pole (Textarea), jeho varianty, prístupnosť a implementácia.',
};

const TextareaPage = () => {
  return (
    <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0 text-black">
      
      <header>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
          Viacriadkové textové pole (Textarea)
        </h1>
      </header>
      
      <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-12">
        Viacriadkové textové pole je interaktívny prvok v grafickom dizajne, ktorý umožňuje používateľovi zadať viacero riadkov textu. Na rozdiel od jednoriadkového textového poľa, ktoré umožňuje zadať iba jeden riadok textu, viacriadkové textové pole dáva možnosť používateľom zadať dlhšie texty.
      </p>

      <Tabs defaultValue="pouzitie">
        
        <TabsList ariaLabel="Sekcie dokumentácie komponentu Viacriadkové textové pole">
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

export default TextareaPage;