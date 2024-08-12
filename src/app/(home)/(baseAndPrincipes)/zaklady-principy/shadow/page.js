'use client';

import ShadowSection from '@/app/(home)/_components/shadows/shadowSection';
import React from 'react';


const ShadowPage = () => {
  return (
    <main className="flex flex-col  my-8 text-black max-w-[835px] max-md:pr-5">
      <header>
        <h1 className="text-5xl font-black leading-[55.2px] max-md:max-w-full max-md:text-4xl">
          Tiene
        </h1>
      </header>
      <section className="mt-5 text-2xl tracking-normal leading-9 text-black max-md:max-w-full">
        <p>
          Tiene môžu byť použité na vizuálne oddelenie dôležitých prvkov, ale aj na na vizuálne zdôraznenie konkrétneho prvku, napríklad modálneho okna alebo ikony. Týmto spôsobom sa zvyšuje jeho význam a pritiahne pozornosť čitateľa. Môžu byť použité na vytvorenie efektu hĺbky a 3D vzhľadu.
        </p>
      </section>
      <ShadowSection />
    </main>
   );
};

export default ShadowPage;
