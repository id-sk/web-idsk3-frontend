'use client';

import React, { useEffect, useState } from 'react';

const ColorCard = ({ name, hex, rgb, opacity }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const colorStyle = { backgroundColor: hex, opacity: opacity !== undefined ? opacity : 1 };

  return (
    <div
      className="flex flex-col rounded-lg border border-solid border-neutral-200"
      style={{ width: '190px', height: '220px' }}
    >
      <div
        className="flex-shrink-0 rounded-t-lg"
        style={{ ...colorStyle, height: '110px', backgroundColor: isMounted ? hex : 'transparent' }}
      ></div>
      <div className="flex flex-col p-2.5 bg-neutral-50" style={{ height: '80px', overflow: 'none' }}>
        <div className="text-base font-bold tracking-wide leading-6">{name}</div>
        <div className="shrink-0 mt-1 h-px bg-black"></div>
        <div className="flex flex-col mt-1 text-xs tracking-wide leading-4 whitespace-nowrap">
          <div className="flex">
            <div>#</div>
            <div>{hex.substring(1)}</div>
          </div>
          <div className="flex mt-1">
            <div>{rgb}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorCard;
