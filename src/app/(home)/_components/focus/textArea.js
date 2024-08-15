'use client'

import Image from 'next/image';
import React from 'react';

const TextAreaExample = () => {
  return (
    <div className="flex flex-col mt-8 max-w-full tracking-wide w-[600px]">
      <label className="flex flex-wrap gap-1.5 items-start px-0.5 w-full text-xl leading-none max-md:max-w-full">
        <span className="text-black">Názov textového poľa</span>
        <span className="text-neutral-500">(nepovinné)</span>
      </label>
      <div className="flex flex-col gap-2.5 justify-center p-0.5 mt-2.5 w-full whitespace-nowrap rounded-md border-custom-orange border-solid border-[3px] max-md:max-w-full">
        <div className="flex overflow-hidden flex-col pt-2.5 pr-1.5 pb-1.5 pl-4 w-full bg-white rounded-md border-2 border-solid border-neutral-700 max-md:max-w-full">
          <textarea className="flex-1 shrink gap-2.5 pr-2.5 w-full text-xl leading-none text-black max-md:max-w-full" />
          <div className="flex gap-2.5 items-end self-end mt-8 text-base text-right text-neutral-500">
            <div>0/100</div>
             <Image
                src="/images/element.svg"
                width={100}
                height={100}
                quality={100}
                className="object-contain shrink-0 w-3 aspect-square"
                alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextAreaExample;