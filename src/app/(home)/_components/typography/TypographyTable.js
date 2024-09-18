'use client'

import React from 'react';
import TypographyItem from './TypographyItem';


const TypographyTable = ({ items }) => {
  const halfLength = Math.ceil(items.length / 2);
  const leftItems = items.slice(0, halfLength);
  const rightItems = items.slice(halfLength);

  return (
    <div className="mt-10 w-full max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        <h3 className="text-xl text-neutral-500">
          veľké obrazovky so šírkou od 731 px
        </h3>
          {leftItems.map((item, index) => (
            <TypographyItem key={index} {...item} />
          ))}
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
        <h3 className="text-xl text-neutral-500">
          malé obrazovky so šírkou do 730 px
        </h3>
          {rightItems.map((item, index) => (
            <TypographyItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TypographyTable;