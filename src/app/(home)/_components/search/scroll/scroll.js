import React from 'react';
// Môžeš úplne vymazať import './scroll.scss';

const Scroll = ({ children, length, searchLength }) => {
  return (
    <div 
      className={
        length > 0 && searchLength > 0 
          ? 'absolute overflow-y-auto bg-white shadow-md rounded-lg p-4 border border-neutral-200 z-10 w-[16.7rem] max-w-full max-md:w-[14.7rem]' 
          : 'hidden'
      }
    >
      {children}
    </div>
  );
};

export default Scroll;