import React from 'react';
import Image from 'next/image';
import { Text, SectionBlock } from '@/app/(home)/_components/content-blocks/ContentBlocks';

export const metadata = {
  title: 'Rozloženie stránky a responzívne zobrazenie | IDSK',
  description: 'Pravidlá pre grid, mriežku a rozmiestňovanie prvkov naprieč responzívnymi zobrazeniami (Mobile, Tablet, Desktop).',
};

const gridPreviews = [
  {
    id: 'mobile',
    title: 'Mobile',
    description: '375px - 520px / 4 stĺpce',
    src: '/images/grid/mobile.png',
    width: 375,
    height: 520,
    alt: 'Technická schéma mriežky pre mobilné zariadenia. Ukazuje obrazovku so šírkou 375 až 520 pixelov rovnomerne rozdelenú do 4 vertikálnych stĺpcov s úzkymi medzerami.',
    imgClass: 'w-full max-w-[375px] h-auto rounded-lg shadow-sm border border-gray-200'
  },
  {
    id: 'tablet',
    title: 'Tablet',
    description: '730px / 8 stĺpcov 75px',
    src: '/images/grid/tablet.png',
    width: 730,
    height: 75,
    alt: 'Technická schéma mriežky pre tablet. Ukazuje obrazovku so šírkou 730 pixelov rozdelenú do 8 vertikálnych stĺpcov, pričom každý stĺpec má pevnú šírku 75 pixelov.',
    imgClass: 'w-full h-auto rounded-lg shadow-sm border border-gray-200'
  },
  {
    id: 'desktop',
    title: 'Desktop L',
    description: '1440px / 12 stĺpcov 75px',
    src: '/images/grid/desktop.png',
    width: 1440,
    height: 75,
    alt: 'Technická schéma mriežky pre veľké monitory. Ukazuje obrazovku so šírkou 1440 pixelov, v strede ktorej je umiestnených 12 vertikálnych stĺpcov so šírkou 75 pixelov.',
    imgClass: 'w-full h-auto rounded-lg shadow-sm border border-gray-200'
  }
];

const GridPage = () => {
  return (
    <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0 text-black">
      
      <header>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
          Rozloženie stránky a responzívne zobrazenie
        </h1>
      </header>
      
      <Text className="mb-12">
        Mriežka slúži na vytvorenie vizuálneho poriadku a usporiadania prvkov v rámci dizajnu. Grid sa skladá z vertikálnych a horizontálnych liniek, ktoré delia dizajn na jednotlivé mriežky, segmenty alebo stĺpce. Prvky sú rozmiestňované na mriežke v rámci definovaných stĺpcov a riadkov, čím sa vytvára jasný vizuálny poriadok a zabezpečuje sa správne rozmiestňovanie jednotlivých prvkov v rámci celého dizajnu.
      </Text>

      <div className="flex flex-col gap-12 mt-4">
        {gridPreviews.map((preview) => (
          <SectionBlock key={preview.id} titleString={preview.title}>
            <Text className="!mt-0 mb-6 text-gray-700">
              {preview.description}
            </Text>
            
            <Image
              src={preview.src}
              width={preview.width}
              height={preview.height}
              quality={100}
              alt={preview.alt}
              className={preview.imgClass}
            />
          </SectionBlock>
        ))}
      </div>

    </div>
  );
}

export default GridPage;