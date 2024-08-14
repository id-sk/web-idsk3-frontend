'use client'

import React from 'react';

const TextFieldExample = () => {
  return (
    <div className="flex flex-col mt-8 max-w-full text-xl tracking-wide leading-none w-[400px]">
      <label className="flex gap-1.5 items-start self-start px-0.5">
        <span className="text-black">Názov textového poľa</span>
        <span className="text-neutral-500">(nepovinné)</span>
      </label>
      <div className="flex flex-col gap-2.5 justify-center p-0.5 mt-2.5 w-full text-black whitespace-nowrap rounded-md border-amber-600 border-solid border-[3px]">
        <input type="text" className="overflow-hidden flex-1 shrink gap-2.5 px-4 py-2.5 w-full bg-white rounded-md border-2 border-solid border-neutral-700" />
      </div>
    </div>
  );
}

export default TextFieldExample;