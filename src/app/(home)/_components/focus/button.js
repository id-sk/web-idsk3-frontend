'use client'

import React from 'react';

const ButtonExample = () => {
  return (
    <button className="flex flex-col gap-2.5 justify-center self-start p-0.5 mt-8 text-base font-bold tracking-wide text-center text-white whitespace-nowrap rounded-md border-custom-orange border-solid border-[3px]">
      <div className="flex flex-col gap-2.5 justify-center items-center px-5 py-3 bg-my-blue rounded-md">
        <span className="overflow-hidden gap-2.5 self-stretch min-h-[24px]">
          Primárny/Základný
        </span>
      </div>
    </button>
  );
}

export default ButtonExample;