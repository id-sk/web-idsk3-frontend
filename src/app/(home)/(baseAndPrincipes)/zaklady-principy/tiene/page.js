import React from 'react';
import ShadowCard from './_components/ShadowCard'; 
import { shadowData } from '@/constants/data';
import { Text, SectionBlock } from '@/app/(home)/_components/content-blocks/ContentBlocks';

export const metadata = {
  title: 'Tiene | IDSK',
  description: 'Prehľad tieňov a ich použitie pre vizuálne oddelenie a zdôraznenie dôležitých prvkov používateľského rozhrania.',
};

const ShadowPage = () => {
  return (
    <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0 text-black">
      
      <header>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
          Tiene
        </h1>
      </header>
      
      <Text className="mb-4">
        Tiene môžu byť použité na vizuálne oddelenie dôležitých prvkov, ale aj na vizuálne zdôraznenie konkrétneho prvku, napríklad modálneho okna alebo ikony. Týmto spôsobom sa zvyšuje jeho význam a pritiahne pozornosť čitateľa. Môžu byť použité na vytvorenie efektu hĺbky a 3D vzhľadu.
      </Text>
      
      <SectionBlock titleString="Prehľad tieňov">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 py-5 mt-2 text-[19px] tracking-wide leading-7">
          {shadowData.map((shadow) => (
            <ShadowCard 
              key={shadow.title} 
              title={shadow.title} 
              shadowClass={shadow.shadowClass} 
            />
          ))}
        </div>
      </SectionBlock>
      
    </div>
  );
};

export default ShadowPage;