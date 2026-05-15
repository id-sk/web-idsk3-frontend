import React from 'react';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/app/(home)/_components/tab-bar/tabBar';

import TabPouzitie from './_tabs/TabPouzitie';
import TabVarianty from './_tabs/TabVarianty';
import TabPristupnost from './_tabs/TabPristupnost';
import TabImplementacia from './_tabs/TabImplementacia';

export const metadata = {
  title: 'Akordeón | Komponenty IDSK',
  description: 'Dokumentácia komponentu Akordeón, jeho varianty, prístupnosť a implementácia.',
};

const AccordionPage = () => {
  return (
    <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0 text-black">
      <header>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight mb-8">
          Akordeón
        </h1>
      </header>

      <p className="text-sm sm:text-base tracking-wide leading-relaxed text-black mb-12">
        Akordeón sa používa na zobrazovanie väčšieho množstva obsahu v obmedzenom priestore, ktorý je rozdelený do logických častí (sekcií). Používateľ si môže rozbaliť len tie sekcie, ktoré ho zaujímajú. Umožňuje tak udržať stránku prehľadnú a zabrániť zahlteniu informáciami.
      </p>

      <Tabs defaultValue="pouzitie">
        
        <TabsList ariaLabel="Sekcie dokumentácie komponentu Akordeón">
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

export default AccordionPage;