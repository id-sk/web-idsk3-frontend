'use client'

import React from 'react';

const RadioExample = () => {
  return (
    <div className="flex gap-8 items-start self-start mt-8">
      <div className="flex flex-col gap-2.5 justify-center p-0.5 text-custom-19 tracking-wide leading-7 text-black rounded-md border-custom-orange border-solid border-[3px] w-[200px]">
        <label className="flex gap-4 items-center pr-2.5">
          <input
            className="flex shrink-0 self-stretch my-auto w-10 h-10 bg-white border-2 border-black border-solid rounded-[1000px]"
          />
          <span className="self-stretch pr-px my-auto">Názov položky</span>
        </label>
      </div>
      <div className="flex flex-col gap-2.5 justify-center items-center px-0.5 w-11 h-11 rounded-3xl border-custom-orange border-solid border-[3px] ">
        <div className="flex gap-4 items-center w-10">
          <input
            className="flex self-stretch my-auto w-10 bg-white border-2 border-black border-solid min-h-[40px] rounded-[1000px]"
          />
        </div>
      </div>
    </div>
  );
}

export default RadioExample;