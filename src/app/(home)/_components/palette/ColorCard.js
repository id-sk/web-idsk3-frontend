'use client';

import React, { useState, useRef, useEffect } from 'react';

const ColorCard = ({ name, hex, rgb }) => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null); 

  // Cleanup timeoutu pri unmountnutí komponentu (ochrana pred memory leakom)
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
      
      {/* 1. ZÓNA: Farba (Tlačidlo) */}
      <div className="group relative w-full h-[100px] sm:h-[120px]">
        <button
          onClick={handleCopy}
          aria-label={`Skopírovať HEX kód ${hex} pre farbu ${name}`}
          className="absolute inset-0 w-full h-full cursor-pointer rounded-none rounded-t-[9px] focus-outline-orange transition-all duration-100 hover:ring-[#757575] hover:ring-[4px]"
          style={{ backgroundColor: hex }}
        >
          <div className={`pointer-events-none absolute inset-0 flex items-center justify-center rounded-none rounded-t-[9px] transition-all duration-200 ${copied ? 'opacity-100 bg-black/20' : 'opacity-0 group-hover:opacity-100 bg-black/10'}`}>
            {copied ? (
              <span className="bg-white text-[#078814] text-xs sm:text-sm font-bold px-3 py-1.5 rounded-md shadow-sm">
                Skopírované!
              </span>
            ) : (
              <span className="bg-white text-black text-xs sm:text-sm font-bold px-3 py-1.5 rounded-md shadow-sm">
                Kopírovať HEX
              </span>
            )}
          </div>
        </button>
      </div>
      
      {/* 2. ZÓNA: Textový blok (OZNAČITEĽNÝ TEXT) */}
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