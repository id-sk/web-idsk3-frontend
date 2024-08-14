'use client'

import Image from 'next/image';
import React from 'react';

const HeaderExample = () => {
  return (
    <header className="flex overflow-hidden gap-10 justify-between items-center px-8 py-2 mt-8 max-w-full bg-blue-950 w-[375px] max-md:px-5">
      <div className="flex gap-2.5 justify-center items-center self-stretch p-0.5 my-auto text-xs tracking-wide leading-4 text-right text-white rounded-md border-white border-solid border-[3px]">
        <div className="flex gap-1.5 justify-center items-center self-stretch my-auto">
          <div className="self-stretch my-auto">
            <span className="text-base tracking-wide leading-6">SK</span>{" "}
            <span className="text-base font-bold tracking-wide leading-6">e-Gov</span>
          </div>
          <Image 
           src="/images/arrow_drop_down.svg"
           width={100}
           height={100}
           quality={100}
           className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" 
           alt="" />
        </div>
      </div>
      <button className="flex overflow-hidden gap-1.5 justify-center items-center self-stretch my-auto text-base tracking-wide text-white whitespace-nowrap">
        <span className="self-stretch my-auto">slovenčina</span>
        <Image 
         src="/images/arrow_drop_down.svg"
         width={100}
         height={100}
         quality={100}
         className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
         alt="" />
      </button>
    </header>
  );
}

export default HeaderExample;