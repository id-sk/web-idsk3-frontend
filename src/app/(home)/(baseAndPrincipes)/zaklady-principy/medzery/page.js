import React from 'react';
import { spacingData } from '@/constants/data';
import { Text, SectionBlock } from '@/app/(home)/_components/content-blocks/ContentBlocks';

export const metadata = {
  title: 'Medzery | IDSK',
  description: 'Pravidlá pre používanie medzier v dizajne. Medzery určujú vzťahy medzi prvkami a tvoria jasnú hierarchiu.',
};

const GapsPage = () => {
  return (
    <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0 text-black">
      
      <header>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
          Medzery
        </h1>
      </header>
      
      <Text className="mb-4">
        Medzery sú dôležité pri určovaní vzťahov medzi jednotlivými prvkami a prispievajú k celkovej prehľadnosti a zrozumiteľnosti dizajnu. Medzera môže byť použitá na oddelenie jedného prvku od druhého, aby sa zvýšila jeho vizuálna dôležitosť a vytvorila sa jasná hierarchia prvkov. Pomáhajú zlepšiť čitateľnosť textu tým, že oddelia riadky alebo odseky a zvýraznia tak jednotlivé časti textu.
      </Text>
      
      <SectionBlock titleString="Prehľad medzier">
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left border-collapse">
            
            <thead>
              <tr className="border-b border-neutral-200 text-sm sm:text-base md:text-lg font-bold tracking-wide">
                <th scope="col" className="py-3 pr-4 w-1/6 font-bold">Názov</th>
                <th scope="col" className="py-3 pr-4 w-2/6 font-bold">Token</th>
                <th scope="col" className="py-3 pr-4 w-1/6 font-bold">Veľkosť</th>
                <th scope="col" className="py-3 w-2/6"><span className="sr-only">Vizuálna ukážka</span></th>
              </tr>
            </thead>

            <tbody>
              {spacingData.map((item) => (
                <tr key={item.id} className="border-b border-neutral-200 text-[19px] leading-7 tracking-wide">
                  <td className="py-4 pr-4 font-mono text-sm">{item.id}</td>
                  <td className="py-4 pr-4">{item.name}</td>
                  <td className="py-4 pr-4">{item.size}</td>
                  <td className="py-4">
                    {/* Vizuálna ukážka medzery. Tailwind spracuje item.width z data.js */}
                    <div className={`h-[15px] bg-[#c3d9f9] ${item.width}`} aria-hidden="true" />
                  </td>
                </tr>
              ))}
            </tbody>
            
          </table>
        </div>
      </SectionBlock>
      
    </div>
  );
}

export default GapsPage;