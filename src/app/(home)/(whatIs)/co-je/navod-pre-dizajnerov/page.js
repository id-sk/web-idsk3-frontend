import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/app/(home)/_components/tab-bar/tabBar';
import { Text } from '@/app/(home)/_components/content-blocks/ContentBlocks';
import ButtonCustom from '@/app/(home)/_components/button/buttonCustom';

// Importy tvojich nových rozdelených tabov
import TabAkoZacat from './_tabs/TabAkoZacat';
import TabDizajnovySystem from './_tabs/TabDizajnovySystem';
import TabNavodPreDizajnerov from './_tabs/TabNavodPreDizajnerov';
import TabNavodPreNedizajnerov from './_tabs/TabNavodPreNedizajnerov';

export const metadata = {
  title: 'Pre dizajnérov | IDSK',
  description: 'Návod a knižnica dizajnového systému IDSK pre nástroj Figma.',
};

export default function DesignersPage() {
  return (
    <div className="flex flex-col gap-10 my-8 max-w-[1120px] px-4 sm:px-0 text-black">
      
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight">
        Návod pre dizajnérov
      </h1>

      <div className="flex flex-col gap-6">
        <Text>V dizajnérskom nástroji Figma nájdete knižnicu dizajnového systému IDSK – knižnicu štýlov, komponentov či vzorov.</Text>
        <Text>Všetky súbory sú voľne prístupné na prepoužitie a pre prácu s nimi je nevyhnutné duplikovať súbory alebo skopírovať do nového súboru.</Text>
        <Text>Pomocou týchto komponentov je možné vyskladať elektronickú službu a/alebo webové sídlo v IDSK.</Text>
      </div>

      <div>
        <ButtonCustom
          href="https://www.figma.com/community/file/1581301778555425083"
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          status="basic"
          size="large"
          iconRight={
            <svg
              className="w-5 h-5 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          }
        >
          Figma knižnica IDSK
          <span className="sr-only"> (otvorí sa na novej karte)</span>
        </ButtonCustom>
      </div>

      <Tabs defaultValue="akoZacat">
        <TabsList ariaLabel="Sekcie dokumentácie pre dizajnérov">
          <TabsTrigger value="akoZacat">Ako začať</TabsTrigger>
          <TabsTrigger value="dizajnovySystem">Dizajnový systém</TabsTrigger>
          <TabsTrigger value="navodPreDizajnerov">Pre dizajnérov</TabsTrigger>
          <TabsTrigger value="navodPreNedizajnerov">Pre nedizajnérov</TabsTrigger>
        </TabsList>

        <div className="mt-2 text-black">
          <TabsContent value="akoZacat">
            <TabAkoZacat />
          </TabsContent>

          <TabsContent value="dizajnovySystem">
            <TabDizajnovySystem />
          </TabsContent>

          <TabsContent value="navodPreDizajnerov">
            <TabNavodPreDizajnerov />
          </TabsContent>

          <TabsContent value="navodPreNedizajnerov">
            <TabNavodPreNedizajnerov />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}