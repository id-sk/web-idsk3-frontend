'use client';

import ShadowSection from '@/app/(home)/_components/shadows/shadowSection';
import React from 'react';

const ShadowPage = () => {
  return (
    <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0 text-black">
        <title>Tiene</title>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
          Tiene
        </h1>
        
        <section className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-12">
          <p>
            Tiene môžu byť použité na vizuálne oddelenie dôležitých prvkov, ale aj na vizuálne zdôraznenie konkrétneho prvku, napríklad modálneho okna alebo ikony. Týmto spôsobom sa zvyšuje jeho význam a pritiahne pozornosť čitateľa. Môžu byť použité na vytvorenie efektu hĺbky a 3D vzhľadu.
          </p>
        </section>
        
        <ShadowSection />
    </div>
   );
};

export default ShadowPage;