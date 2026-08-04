'use client';

import React, { useState, useRef, useEffect } from 'react';

const ColorCard = ({ name, hex, rgb }) => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null); 

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(true);

      clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error('Nepodarilo sa skopírovať farbu do schránky.', error);
    }
  };

  return (
    <div className="flex flex-col text-left w-full bg-white rounded-[10px] border border-solid border-neutral-300">
      
      <div className="group relative h-[100px] w-full sm:h-[120px]">
        <button
          type="button"
          onClick={handleCopy}
          aria-label={`Skopírovať HEX kód ${hex} pre farbu ${name}`}
          className="
            focus-outline-orange absolute inset-0 h-full w-full cursor-pointer
            rounded-none rounded-t-[9px] transition-all duration-100
            hover:ring-[4px] hover:ring-[#757575]
          "
          style={{ backgroundColor: hex }}
        >
          <div
            className={`
              pointer-events-none absolute inset-0 flex items-center justify-center
              rounded-none rounded-t-[9px] transition-all duration-200
              ${
                copied
                  ? 'bg-black/20 opacity-100'
                  : 'bg-black/10 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100'
              }
            `}
          >
            {copied ? (
              <span className="rounded-md bg-white px-3 py-1.5 text-xs font-bold text-[#078814] shadow-sm sm:text-sm">
                Skopírované!
              </span>
            ) : (
              <span className="rounded-md bg-white px-3 py-1.5 text-xs font-bold text-black shadow-sm sm:text-sm">
                Kopírovať HEX
              </span>
            )}
          </div>
        </button>
      </div>
      
      <div className="flex flex-col p-3 sm:p-4 bg-neutral-50 w-full rounded-b-[9px] min-h-[95px] border-t border-neutral-300">
        <div className="text-sm font-bold tracking-wide leading-tight text-black mb-2">
          {name}
        </div>
        
        <div className="w-full h-px bg-neutral-300 mb-2" aria-hidden="true"></div>
        
        <div className="flex flex-col text-sm tracking-wide text-neutral-800 space-y-1 font-mono">
          <span className="select-text selection:bg-[#c3d9f9] selection:text-black">{hex}</span>
          <span className="select-text selection:bg-[#c3d9f9] selection:text-black">{rgb}</span>
        </div>
      </div>

      <span aria-live="polite" aria-atomic="true" className="sr-only">
        {copied ? `Kód ${hex} bol úspešne skopírovaný do schránky.` : ''}
      </span>
    </div>
  );
};

export default ColorCard;