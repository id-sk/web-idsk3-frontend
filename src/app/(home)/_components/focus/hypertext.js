'use client'


import React from 'react';

const HypertextExample = () => {
  return (
    <div className="flex gap-8 items-center self-start mt-8 font-bold tracking-wide text-blue-600">
      <a href="#" className="gap-2.5 self-stretch p-0.5 my-auto text-2xl leading-9 underline rounded-md border-amber-600 border-solid border-[3px]">
        Link L bold
      </a>
      <a href="#" className="gap-2.5 self-stretch p-0.5 my-auto text-custom-19 leading-7 underline rounded-md border-amber-600 border-solid border-[3px]">
        link M bold
      </a>
    </div>
  );
}

export default HypertextExample;