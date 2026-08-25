import React from 'react';

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/app/(home)/_components/tab-bar/tabBar';

import TabPouzitie from './_tabs-radio/TabPouzitie';
import TabVarianty from './_tabs-radio/TabVarianty';
import TabPristupnost from './_tabs-radio/TabPristupnost';
import TabImplementacia from './_tabs-radio/TabImplementacia';

export const metadata = {
  title: 'Prepínacie pole | IDSK',
  description:
    'Dokumentácia komponentu Prepínacie pole (Radio Button), jeho použitie, varianty, prístupnosť a implementácia.',
};

const RadioButtonPage = () => {
  return (
    <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0 text-black">
      <header>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
          Prepínacie pole (Radios)
        </h1>
      </header>

      <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-12">
        Prepínacie pole umožňuje používateľovi vybrať práve jednu možnosť zo
        skupiny vzájomne sa vylučujúcich možností. Najčastejšie sa používa vo
        formulároch, keď je vhodné zobraziť všetky dostupné možnosti naraz a
        používateľ má medzi nimi urobiť jednoznačný výber.
      </p>

      <Tabs defaultValue="pouzitie">
        <TabsList ariaLabel="Sekcie dokumentácie komponentu Prepínacie pole">
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

export default RadioButtonPage;