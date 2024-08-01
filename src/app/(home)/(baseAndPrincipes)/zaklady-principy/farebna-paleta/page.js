'use client'

import React from 'react';
import ColorGrid from '@/app/(home)/_components/paleta/ColorGrid';
import ColorSection from '@/app/(home)/_components/paleta/ColorSection';
import { primaryColors, secondaryColors, neutralColors, extendedPrimaryColors, alertColors, textColors, slovakColors } from "@/constants/data";

const ColorPalette = () => {
  return (
    <main className="flex flex-col -mx-0 my-8 max-w-[1200px]">
      <h1 className="w-full text-5xl font-black text-black leading-[55.2px] max-md:max-w-full max-md:text-4xl">
        Farebná paleta
      </h1>
      <p className="mt-5 w-full text-2xl tracking-normal leading-9 text-black max-md:max-w-full">
        Farebná paleta definuje základné farby, ktoré sú používané pre udržiavanie konzistentnosti vramci rozhrania. Navrhnuté farby su definované tak, aby splňali kontrastné pomery pre nevidiacich a slabozrakých. Farby sú rozdelené do základných skupín podľa účelu použitia.
      </p>

      <ColorSection title="Primárna paleta" description="Primárna paleta je sada základných farieb, ktoré sú použité v grafickom dizajne pre vytvorenie konzistentného a súdržného vizuálneho prejavu. Sú to farby, ktoré tvoria základ všetkých ďalších kombinácií a farebných schém v rámci dizajnu.">
      <ColorGrid colors={primaryColors} cardsPerRow={6} gap="1rem" rowGap="0.5rem" alignLeft={true} />
      </ColorSection>
      <ColorSection title="Primárna rozšírená paleta" description="Primárna rozšírená paleta sa používa na doplnenie a rozšírenie primárnej palety. Táto paleta obsahuje ďalšie farby, ktoré sú zvyčajne odvodené od farieb v primárnej palete a slúžia na vytváranie rozmanitých a zaujímavých kombinácií farieb v rámci dizajnu.">
      <ColorGrid colors={extendedPrimaryColors} cardsPerRow={6} gap="1rem" rowGap="0.5rem" />
      </ColorSection>

      <ColorSection title="Neutrálna paleta" description="V neutrálnej palete sú farby, ktoré majú nízku intenzitu a zvyčajne sú bezfarebné. Neutrálne farby zvyčajne zahŕňajú odtiene ako biela, čierna, šedá.">
        <ColorGrid 
        colors={neutralColors}
        cardsPerRow={6} gap="1.5rem" rowGap="0.5rem"/>
      </ColorSection>

      <ColorSection title="Sekundárna paleta" description="Sekundárna paleta sa používa na doplnenie primárnej a rozšírenej palety, slúži na vytvorenie ďalších vizuálnych prvkov. Môže obsahovať aj úplne nové farby, ktoré sú prispôsobené potrebám daného projektu.">
        <ColorGrid 
        colors={secondaryColors}
        cardsPerRow={6} gap="1rem" rowGap="0.5rem" />
      </ColorSection>

      <ColorSection title="Upozornenia paleta" description="Farebná paleta upozornení je špecifickým súborom farieb, ktoré sa používajú na vytvorenie vizuálneho upozornenia pre určitý účel. Táto paleta farieb zvyčajne obsahuje farby, ktoré majú vysokú viditeľnosť a sú schopné prilákať pozornosť čitateľa.">
        <ColorGrid 
        colors={alertColors} 
        cardsPerRow={6} gap="1rem" rowGap="0.5rem" />
      </ColorSection>

      <ColorSection title="Textová paleta" description="Farebná paleta textov zvyčajne obsahuje súbor farieb, ktoré sa používajú na tvorbu textových elementov, ako sú nadpisy, popisy, označenia a odkazy.">
        <ColorGrid 
        colors={textColors} 
        cardsPerRow={6} gap="1rem" rowGap="0.5rem" />
      </ColorSection>

      <ColorSection title="Slovenská paleta" description="Slovenská paleta farieb obsahuje farby, ktoré sú špecifické pre Slovensko a symbolizujú trikolóru, používajú sa napríklad v logu.">
        <ColorGrid 
        colors={slovakColors} 
        cardsPerRow={6} gap="1rem" rowGap="0.5rem" /> 
      </ColorSection>
    </main>
  );
};

export default ColorPalette;
