export const metadata = {
  title: 'Vzory | IDSK',
  description: 'Sekcia Vzory sa momentálne pripravuje a čoskoro bude dostupná.',
};

import React from "react";
import Image from "next/image";
import Link from "next/link"; 
import { Text } from '@/app/(home)/_components/content-blocks/ContentBlocks';

export default function VzoryComingSoon() {
  return (
    <div className="flex flex-col my-8 max-w-[1000px] mx-auto px-4 sm:px-0">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-snug md:leading-[55px] mb-8 w-full text-left">
          Vzory
      </h1>
      
      <div className="flex flex-col items-center justify-center mt-4 pt-10 pb-14 w-full max-w-[550px] mx-auto px-5 bg-white rounded-[10px] border border-solid border-neutral-200 shadow-sm">
        
        <Image
            src="/images/404/404.svg"
            width={300}
            height={200}
            priority
            alt="" 
            aria-hidden="true" 
            className="w-full h-auto max-w-[300px]" 
        />
        
        <Text className="mt-10 text-center !mb-8">
          Na časti <strong>Vzory</strong> usilovne pracujeme.
          <br />
          Čoskoro bude dostupná...
        </Text>

        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-6 py-3 text-base font-bold tracking-wide text-white bg-[#0B4199] rounded-md transition-all duration-200 outline-none hover:bg-[#126DFF] hover:ring-[4px] hover:ring-[#757575] active:bg-[#072c66]"
        >
          Späť na hlavnú stránku
        </Link>
      </div>
    </div>
  );
}