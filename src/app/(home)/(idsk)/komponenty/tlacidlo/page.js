import React from 'react';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/app/(home)/_components/tab-bar/tabBar';

import TabPouzitie from './_tabs-button/TabPouzitie';
import TabVarianty from './_tabs-button/TabVarianty';
import TabPristupnost from './_tabs-button/TabPristupnost';
import TabImplementacia from './_tabs-button/TabImplementacia';

export const metadata = {
  title: 'Tlačidlo | Komponenty IDSK',
  description: 'Dokumentácia komponentu Tlačidlo (Button), jeho varianty, prístupnosť a implementácia.',
};

const ButtonPage = () => {
  return (
    <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0 text-black">
      
      <header>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
          Tlačidlo (Button)
        </h1>
      </header>
      
      <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-12">
        Tlačidlá patria medzi najdôležitejšie interakčné prvky v digitálnych službách verejnej správy. Pomáhajú používateľom vykonať akciu, potvrdiť voľbu alebo pokračovať v procese. V IDSK 3 sú tlačidlá navrhnuté tak, aby podporovali jasnú hierarchiu akcií – od najdôležitejšej po doplnkovú.
      </p>

      <Tabs defaultValue="pouzitie">
        
        <TabsList ariaLabel="Sekcie dokumentácie komponentu Tlačidlo">
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

export default ButtonPage;