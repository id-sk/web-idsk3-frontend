import React from 'react';

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/app/(home)/_components/tab-bar/tabBar';

import TabPouzitie from './_tabs-fileupload/TabPouzitie';
import TabVarianty from './_tabs-fileupload/TabVarianty';
import TabPristupnost from './_tabs-fileupload/TabPristupnost';
import TabImplementacia from './_tabs-fileupload/TabImplementacia';

export const metadata = {
  title: 'Pole na nahratie súboru | IDSK',
  description:
    'Dokumentácia komponentu Pole na nahratie súboru, jeho použitie, varianty, prístupnosť a implementácia.',
};

const FileUploadPage = () => {
  return (
    <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0 text-black">
      <header>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
          Pole na nahratie súboru (File Upload)
        </h1>
      </header>

      <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-12">
        Pole na nahratie súboru umožňuje používateľovi vybrať jeden alebo viac
        súborov zo svojho zariadenia, prípadne ich presunúť do určenej oblasti
        pomocou drag and drop. Komponent musí používateľovi jasne oznámiť účel
        poľa, podporované formáty, maximálnu veľkosť a stav nahrávania.
      </p>

      <Tabs defaultValue="pouzitie">
        <TabsList ariaLabel="Sekcie dokumentácie komponentu Pole na nahratie súboru">
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

export default FileUploadPage;