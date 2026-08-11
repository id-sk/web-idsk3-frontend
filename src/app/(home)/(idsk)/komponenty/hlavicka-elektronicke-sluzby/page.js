import React from 'react';

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/app/(home)/_components/tab-bar/tabBar';

import TabPouzitie from './_tabs-header/TabPouzitie';
import TabVarianty from './_tabs-header/TabVarianty';
import TabPristupnost from './_tabs-header/TabPristupnost';
import TabImplementacia from './_tabs-header/TabImplementacia';

export const metadata = {
  title: 'Hlavička pre elektronické služby | IDSK',
  description:
    'Dokumentácia komponentu Hlavička pre elektronické služby, jeho použitie, varianty, prístupnosť a implementácia.',
};

const HeaderPage = () => {
  return (
    <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0 text-black">
      <header>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
          Hlavička pre elektronické služby (Header)
        </h1>
      </header>

      <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-12">
        Hlavička pre elektronické služby je základný prvok jednotného dizajnového
        systému Slovenska. Zabezpečuje jednotný vizuálny a interaktívny zážitok
        naprieč elektronickými službami. Použite ju pre rozhrania vyžadujúce
        prihlásenie používateľa, napríklad pre elektronické služby, portály
        služieb a osobné zóny.
      </p>

      <Tabs defaultValue="pouzitie">
        <TabsList ariaLabel="Sekcie dokumentácie komponentu Hlavička pre elektronické služby">
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

export default HeaderPage;