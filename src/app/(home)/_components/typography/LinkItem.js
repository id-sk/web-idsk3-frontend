'use client'

import React from 'react';

const LinkItem = ({ title, size, lineHeight, spacing, type, fontWeight }) => {
  return (
    <div className="py-5 border-t border-b border-neutral-200 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
          <h3>
          <a href="#"
          className="text-blue-600 {`text-${type.toLowerCase()} tracking-wide  underline max-md:mt-10`}"
            style={{
              fontSize: size,
              lineHeight: lineHeight,
              letterSpacing: spacing,
              type: type.toLowerCase() === 'Bold' ? 'Regular' : 'Bold',
              type: type,
              fontWeight: fontWeight,
            }}
            >{title}</a></h3>
        </div>
        <div className="flex flex-col ml-5 w-[50%] max-md:ml-0 max-md:w-full">
          <p className="text-xs font-bold leading-4 text-neutral-500 max-md:mt-10">
            Veľkosť: {size}<br />
            Veľkosť riadku: {lineHeight}<br />
            {/* Medzery medzi odsekmi: {spacing}<br  />*/}
            Rez písma: {type}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LinkItem;