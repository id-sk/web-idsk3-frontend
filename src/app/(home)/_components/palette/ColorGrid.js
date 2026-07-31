import React from 'react';
import ColorCard from './ColorCard';

const ColorGrid = ({ colors }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-6 w-full">
      {colors.map((color) => (
        <ColorCard key="{color.hex}" {...color}/>
      ))}
    </div>
  );
};

export default ColorGrid;