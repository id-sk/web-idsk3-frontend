'use client';

import React from 'react';
import ColorCard from './ColorCard';

const chunkArray = (array, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

const ColorGrid = ({ colors, cardsPerRow, gap, rowGap }) => {
  const rows = chunkArray(colors, cardsPerRow);

  return (
    <div className="mt-10 w-full">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`flex flex-wrap ${cardsPerRow < 6 ? 'justify-between' : 'justify-start'}`}
          style={{ gap: rowGap }}
        >
          {row.map((color, index) => (
            <div
              key={index}
              className="flex mt-2"
              style={{ flexBasis: `calc(${100 / cardsPerRow}% - ${gap})` }}
            >
              <ColorCard {...color} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ColorGrid;
