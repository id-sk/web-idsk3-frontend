import React from 'react';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/app/(home)/_components/tab-bar/tabBar';

import TabPouzitie from './_tabs-signpost/TabPouzitie';
import TabVarianty from './_tabs-signpost/TabVarianty';
import TabPristupnost from './_tabs-signpost/TabPristupnost';
import TabImplementacia from './_tabs-signpost/TabImplementacia';

export const metadata = {
  title: 'Rázcestník | IDSK',
  description: 'Dokumentácia komponentu Rázcestník - horizontálny (Signpost), jeho varianty, prístupnosť a implementácia.',
};

const SignpostPage = () => {
  return (
    <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0 text-black">
      
      <header>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
          Rázcestník - horizontálny (Signpost)
        </h1>
      </header>
      
      <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-12">
        Horizontálny rázcestník má formu jednoduchej horizontálnej dlaždice, ktorá je zložená z nadpisu, popisu a oddeľovacej čiary. Jeho účelom je prehľadne usporiadať pre používateľa odkazy na súvisiaci obsah, ktorý je rozmiestnený na rôznych, samostatných podstránkach. Rázcestník je jedným z komponentov, ktoré navigujú používateľa k obsahu vašej stránky.
      </p>

      <Tabs defaultValue="pouzitie">
        
        <TabsList ariaLabel="Sekcie dokumentácie komponentu Rázcestník">
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

export default SignpostPage;
