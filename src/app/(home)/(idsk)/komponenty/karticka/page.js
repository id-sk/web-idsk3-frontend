import React from 'react';

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/app/(home)/_components/tab-bar/tabBar';

import TabPouzitie from './_tabs-card/TabPouzitie';
import TabVarianty from './_tabs-card/TabVarianty';
import TabPristupnost from './_tabs-card/TabPristupnost';
import TabImplementacia from './_tabs-card/TabImplementacia';

export const metadata = {
  title: 'Kartička | IDSK',
  description:
    'Dokumentácia komponentu Kartička, jeho použitie, varianty, prístupnosť a implementácia.',
};

const CardPage = () => {
  return (
    <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0 text-black">
      <header>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
          Kartička (Card)
        </h1>
      </header>

      <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-12">
        Primárna funkcia komponentu kartička je vizuálna reprezentácia obsahu
        článkov alebo podstránok. Prvky, ako sú text a obrázky, majú byť
        umiestnené spôsobom, ktorý jasne naznačuje ich hierarchiu.
      </p>

      <Tabs defaultValue="pouzitie">
        <TabsList ariaLabel="Sekcie dokumentácie komponentu Kartička">
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

export default CardPage;