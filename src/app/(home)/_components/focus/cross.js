'use client'

import React from 'react';

const CrossExample = () => {
  return (
    <div className="flex overflow-hidden flex-col px-5 py-5 mt-8 max-w-full bg-white rounded-xl border border-solid border-neutral-300 min-h-[253px] w-[360px]">
      <div className="flex flex-col w-full text-black">
        <h3 className="text-2xl font-bold tracking-normal">Nadpis</h3>
        <p className="mt-2.5 text-custom-19 tracking-wide leading-7">
          Tento text slúži iba ako ukážka naplneného obsahu v danom komponente. Nepoužívať pri implementácii a dizajne.
        </p>
      </div>
      <button className="flex flex-col gap-2.5 justify-center self-start p-0.5 mt-4 text-base font-bold tracking-wide text-center text-white whitespace-nowrap rounded-md border-amber-600 border-solid border-[3px]">
        <div className="flex flex-col gap-2.5 justify-center items-center px-4 py-2 bg-blue-600 rounded-md">
          <span className="overflow-hidden gap-2.5 self-stretch min-h-[24px]">
            Akcia
          </span>
        </div>
      </button>
    </div>
  );
}

export default CrossExample;