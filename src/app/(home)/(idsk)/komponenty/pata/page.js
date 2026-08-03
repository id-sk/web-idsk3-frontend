'use client';

import React from 'react';

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/app/(home)/_components/tab-bar/tabBar';

import TabPouzitie from './_tabs-footer/TabPouzitie';
import TabVarianty from './_tabs-footer/TabVarianty';
import TabPristupnost from './_tabs-footer/TabPristupnost';
import TabImplementacia from './_tabs-footer/TabImplementacia';

export const metadata = {
  title: 'Päta | Komponenty IDSK',
  description:
    'Dokumentácia komponentu Päta (Footer), jeho použitie, varianty, prístupnosť a implementácia.',
};

const FooterPage = () => {
  return (
    <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0 text-black">
      <header>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
          Päta (Footer)
        </h1>
      </header>

      <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-12">
        Všetky stránky musia používať štandardizovanú pätu, ktorá môže, ale
        nemusí obsahovať štrukturované hypertextové odkazy na dôležitý obsah.
        Základným variantom je päta bez sekundárnej navigácie.
      </p>

      <Tabs defaultValue="pouzitie">
        <TabsList ariaLabel="Sekcie dokumentácie komponentu Päta">
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

export default FooterPage;