'use client'

import React from 'react';

function Row({ id, name, size, width }) {
  return (
<div className="flex items-center py-2.5 pr-14 text-custom-19 leading-7 tracking-wide border-b border-neutral-200 max-md:flex-wrap">
      <div className="w-1/6 md:w-1/6">{id}</div>
      <div className="w-2/6 md:w-2/6">{name}</div>
      <div className="w-1/6 sm:w-1/6 md:w-1/6 sm:-mx-14">{size}</div>
      <div className={`h-2.5 bg-blue-200 ${width}`} />
    </div>
  );
}

export default Row;

