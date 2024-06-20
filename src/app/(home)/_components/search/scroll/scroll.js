import React from 'react';
import './scroll.scss';

const Scroll = ({ children, length, searchLength }) => {
  return (
    <div className={length > 0 && searchLength > 0 ? 'scroll' : 'hidden'}>
      {children}
    </div>
  );
};

export default Scroll;
