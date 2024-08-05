'use client'

import React from 'react';
import LinkItem from './LinkItem';

const LinkTable = ({ items }) => {
  const halfLength = Math.ceil(items.length / 2);
  const leftItems = items.slice(0, halfLength);
  const rightItems = items.slice(halfLength);

  return (
    <div className="mt-10 w-full max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          {leftItems.map((item, index) => (
            <LinkItem key={index} {...item} />
          ))}
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          {rightItems.map((item, index) => (
            <LinkItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinkTable;