import React from 'react';

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/app/(home)/_components/tab-bar/tabBar';

import TabPouzitie from './_tabs-errorsummary/TabPouzitie';
import TabVarianty from './_tabs-errorsummary/TabVarianty';
import TabPristupnost from './_tabs-errorsummary/TabPristupnost';
import TabImplementacia from './_tabs-errorsummary/TabImplementacia';

export const metadata = {
  title: 'Prehľad s chybovými hláseniami | Komponenty IDSK',
  description:
    'Dokumentácia komponentu Prehľad s chybovými hláseniami, jeho použitie, varianty, prístupnosť a implementácia.',
};

const ErrorSummaryPage = () => {
  return (
    <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0 text-black">
      <header>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
          Prehľad s chybovými hláseniami (Error summary)
        </h1>

        <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-12">
          Prehľad s chybovými hláseniami sumarizuje validačné chyby vo formulári
          na jednom mieste a umožňuje používateľovi rýchlo prejsť na konkrétne
          chybné pole. Zobrazuje sa po pokuse o odoslanie formulára a má byť
          umiestnený pred formulárom alebo na začiatku hlavného obsahu stránky.
        </p>
      </header>

      <Tabs defaultValue="pouzitie">
        <TabsList ariaLabel="Sekcie dokumentácie komponentu Prehľad s chybovými hláseniami">
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

export default ErrorSummaryPage;
