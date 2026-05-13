'use client'

import React from 'react';

const StyleRow = ({ title, size, lineHeight, type, fontWeight, isLink = false }) => {
  const safeFontWeight = fontWeight || '400';
  const isLargeLink = title.includes(' L') || title.includes(' M');
  const hoverDecorationThickness = isLargeLink ? 'hover:decoration-[length:3px]' : 'hover:decoration-2';

  return (
    <div className="py-4 border-t border-b border-neutral-200">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
        <div className="w-full sm:w-1/2">
          {isLink ? (
             <p>
                <a href="#" 
                   className={`
                     text-[#0B4199] visited:text-[#592999] hover:text-[#126DFF]
                     underline underline-offset-3
                     transition-all duration-100
                     ${hoverDecorationThickness}
                     tracking-wide
                   `}
                   style={{ 
                     fontSize: size, 
                     lineHeight: lineHeight, 
                     fontWeight: safeFontWeight 
                   }}
                >
                  {title}
                </a>
             </p>
          ) : (
            <p className="tracking-wide text-black"
               style={{ 
                 fontSize: size, 
                 lineHeight: lineHeight, 
                 fontWeight: safeFontWeight 
               }}
            >
              {title}
            </p>
          )}
        </div>
        
        <div className="w-full sm:w-1/2 flex items-center">
          <p className="text-xs font-bold leading-relaxed text-neutral-500">
            Veľkosť: {size} <br />
            Veľkosť riadku: {lineHeight} <br />
            Rez písma: {type}
          </p>
        </div>
      </div>
    </div>
  );
};

export const TypographySection = ({ title, items, isLink = false }) => {
  return (
    <section className="mt-16 w-full">
      <h2 className="text-xl sm:text-2xl font-black text-black mb-8">{title}</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">
        <div>
           <h3 className="text-lg font-bold text-black mb-6 pb-2">
             Veľké obrazovky (šírka od 731 px)
           </h3>
           <div className="flex flex-col">
              {items.slice(0, Math.ceil(items.length / 2)).map((item, index) => (
                <StyleRow key={index} {...item} isLink={isLink} />
              ))}
           </div>
        </div>

        <div>
           <h3 className="text-lg font-bold text-black mb-6 pb-2">
             Malé obrazovky (šírka do 730 px)
           </h3>
           <div className="flex flex-col">
              {items.slice(Math.ceil(items.length / 2)).map((item, index) => (
                <StyleRow key={index} {...item} isLink={isLink} />
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};