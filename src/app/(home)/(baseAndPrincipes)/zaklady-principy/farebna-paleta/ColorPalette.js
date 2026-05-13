'use client'

import React from 'react';
import ColorGrid from '@/app/(home)/_components/palette/ColorGrid';
import { primaryColors, secondaryColors, neutralColors, extendedPrimaryColors, alertColors, textColors, slovakColors } from "@/constants/data";

// Importujeme naše spoločné stavebné bloky
import { Text, SectionBlock } from '@/app/(home)/_components/content-blocks/ContentBlocks';

const ColorPalette = () => {
  return (
    <div className="flex flex-col my-8 max-w-[1200px] px-4 xl:px-0">
      
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
        Farebná paleta
      </h1>
      
      <Text className="mb-12">
        Farebná paleta definuje základné farby, ktoré sú používané pre udržiavanie konzistentnosti v rámci rozhrania. Navrhnuté farby sú definované tak, aby spĺňali kontrastné pomery pre nevidiacich a slabozrakých. Farby sú rozdelené do základných skupín podľa účelu použitia. Kliknutím na farbu si rýchlo skopírujete jej HEX kód.
      </Text>

      <SectionBlock titleString="Primárna paleta">
        <Text>
          Primárna paleta je sada základných farieb, ktoré sú použité v grafickom dizajne pre vytvorenie konzistentného a súdržného vizuálneho prejavu. Sú to farby, ktoré tvoria základ všetkých ďalších kombinácií a farebných schém v rámci dizajnu.
        </Text>
        <ColorGrid colors={primaryColors} />
      </SectionBlock>
      
      <SectionBlock titleString="Primárna rozšírená paleta">
        <Text>
          Primárna rozšírená paleta sa používa na doplnenie a rozšírenie primárnej palety. Táto paleta obsahuje ďalšie farby, ktoré sú zvyčajne odvodené od farieb v primárnej palete a slúžia na vytváranie rozmanitých a zaujímavých kombinácií farieb v rámci dizajnu.
        </Text>
        <ColorGrid colors={extendedPrimaryColors} />
      </SectionBlock>

      <SectionBlock titleString="Neutrálna paleta">
        <Text>
          V neutrálnej palete sú farby, ktoré majú nízku intenzitu a zvyčajne sú bezfarebné. Neutrálne farby zvyčajne zahŕňajú odtiene ako biela, čierna, šedá.
        </Text>
        <ColorGrid colors={neutralColors} />
      </SectionBlock>

      <SectionBlock titleString="Sekundárna paleta">
        <Text>
          Sekundárna paleta sa používa na doplnenie primárnej a rozšírenej palety, slúži na vytvorenie ďalších vizuálnych prvkov. Môže obsahovať aj úplne nové farby, ktoré sú prispôsobené potrebám daného projektu.
        </Text>
        <ColorGrid colors={secondaryColors} />
      </SectionBlock>

      <SectionBlock titleString="Paleta upozornení">
        <Text>
          Farebná paleta upozornení je špecifickým súborom farieb, ktoré sa používajú na vytvorenie vizuálneho upozornenia pre určitý účel. Táto paleta farieb zvyčajne obsahuje farby, ktoré majú vysokú viditeľnosť a sú schopné prilákať pozornosť čitateľa.
        </Text>
        <ColorGrid colors={alertColors} />
      </SectionBlock>

      <SectionBlock titleString="Textová paleta">
        <Text>
          Farebná paleta textov zvyčajne obsahuje súbor farieb, ktoré sa používajú na tvorbu textových elementov, ako sú nadpisy, popisy, označenia a odkazy.
        </Text>
        <ColorGrid colors={textColors} />
      </SectionBlock>

      <SectionBlock titleString="Slovenská paleta">
        <Text>
          Slovenská paleta farieb obsahuje farby, ktoré sú špecifické pre Slovensko a symbolizujú trikolóru, používajú sa napríklad v logu.
        </Text>
        <ColorGrid colors={slovakColors} />
      </SectionBlock>

    </div>
  );
};

export default ColorPalette;