'use client'

import Image from 'next/image';
import React from 'react';

const CardExample = () => {
  return (
    <article className="flex flex-col gap-2.5 justify-center p-0.5 mt-8 max-w-full rounded-xl border-amber-600 border-solid border-[3px] w-[804px]">
      <div className="flex flex-wrap gap-8 p-5 w-full bg-white rounded-xl border border-solid border-neutral-300">
        <div className="flex flex-col min-w-[240px] w-[300px]">
          <Image  
           src="/images/blank.png"
           width={300}
           height={220}
           quality={100}
           className="object-contain w-full aspect-[1.4]" alt="Card image"
            />
        </div>
        <div className="flex flex-col flex-1 shrink justify-center self-start tracking-wide basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <h3 className="text-2xl font-bold text-blue-600 underline max-md:max-w-full">
              Nadpis kartičky
            </h3>
            <p className="mt-2.5 text-xl leading-7 text-black max-md:max-w-full">
              Tento text slúži iba ako ukážka naplneného obsahu v danom komponente. Nepoužívať pri implementácii a dizajne. Tento text slúži iba ako ukážka naplneného obsahu v danom komponente.
              <br />
              Nepoužívať pri implementácii a dizajne.
            </p>
          </div>
          <div className="mt-2.5 text-base text-neutral-500 max-md:max-w-full">
            1.1. 2023 — Tag 1 | Tag 2 | Tag 3
          </div>
        </div>
      </div>
    </article>
  );
}

export default CardExample;