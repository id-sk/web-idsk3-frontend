'use client'

import React from 'react';

const SizeInfo = () => {
  return (
    <div className="flex flex-wrap gap-10 items-start pt-10 mt-10 min-w-[240px] text-2xl font-bold leading-9 border-t border-solid border-t-neutral-200 text-neutral-500 max-md:max-w-full">
      <div className="flex-1 shrink basis-0">
        Veľké obrazovky (šírka od 730 px)
      </div>
      <div className="flex-1 shrink basis-0">
        Malé obrazovky (šírka do 730px)
      </div>
    </div>
  );
}

export default SizeInfo;