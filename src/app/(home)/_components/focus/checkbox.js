'use client'

import React from 'react';

const CheckboxExample = () => {
  return (
    <div className="flex flex-col gap-2.5 justify-center p-0.5 mt-8 max-w-full text-custom-19 leading-7 tracking-wide text-center text-black rounded-md border-custom-orange border-solid border-[3px] w-[200px]">
      <label className="flex gap-4 items-center pr-2.5">
        <input
          className="flex shrink-0 gap-2.5 self-stretch p-2.5 my-auto w-10 h-10 bg-white rounded-md border-2 border-black border-solid"
        />
        <span className="self-stretch my-auto">Názov položky</span>
      </label>
    </div>
  );
}

export default CheckboxExample;