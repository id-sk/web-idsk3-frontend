import React from 'react';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/app/(home)/_components/tab-bar/tabBar';

import TabPouzitie from './_tabs-tooltip/TabPouzitie';
import TabVarianty from './_tabs-tooltip/TabVarianty';
import TabPristupnost from './_tabs-tooltip/TabPristupnost';
import TabImplementacia from './_tabs-tooltip/TabImplementacia';

export const metadata = {
  title: 'Vysvetlivka | IDSK',
  description: 'Dokumentácia komponentu Vysvetlivka (Tooltip), jeho varianty, prístupnosť a implementácia.',
};

const TooltipPage = () => {
  return (
    <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0 text-black">
      <header>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
          Vysvetlivka (Tooltip)
        </h1>
      </header>

      <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-12">
        Vysvetlivka je interaktívny prvok, ktorý používateľovi umožňuje zobraziť vysvetľujúci text po zakliknutí myšou (hover) alebo klávesnicou (focus). Vždy je reprezentovaná ikonou písmena „i“ v krúžku.
      </p>

      <Tabs defaultValue="pouzitie">
        <TabsList ariaLabel="Sekcie dokumentácie komponentu Vysvetlivka">
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

export default TooltipPage;