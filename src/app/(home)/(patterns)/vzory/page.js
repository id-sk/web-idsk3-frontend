export const metadata = {
  title: 'Vzory | IDSK',
  description: 'Sekcia Vzory sa momentálne pripravuje a čoskoro bude dostupná.',
};

import React from "react";
import Image from "next/image";
import ButtonCustom from '@/app/(home)/_components/button/buttonCustom';
import { Text } from '@/app/(home)/_components/content-blocks/ContentBlocks';

export default function VzoryComingSoon() {
  return (
    <div className="flex flex-col my-8 max-w-[1120px] mx-auto px-4 sm:px-0">
      <h1 className="text-left text-2xl sm:text-3xl md:text-4xl font-black text-black leading-snug md:leading-[55px] mb-8 w-full">
          Vzory
      </h1>
      
      {/* Čistý flex-col s items-start zabráni roztiahnutiu tlačidla */}
      <div className="flex flex-col items-start mt-4 w-full gap-8">
        
        <Image
            src="/images/404/404.svg"
            width={300}
            height={200}
            priority
            alt="" 
            aria-hidden="true" 
            className="w-full h-auto max-w-[300px]" 
        />
        
        <Text>
          Na časti <strong>Vzory</strong> usilovne pracujeme.
          <br />
          Čoskoro bude dostupná...
        </Text>

        <ButtonCustom variant="secondary" status="basic" href="/">
            Späť na hlavnú stránku
        </ButtonCustom>
        
      </div>
    </div>
  );
}