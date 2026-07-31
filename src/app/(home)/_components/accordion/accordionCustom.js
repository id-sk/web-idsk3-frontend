'use client';

import React, { useState, useId } from 'react';

export const CustomAccordion = ({
  id, 
  heading,
  headingLevel = 3, 
  subTitle,
  children,
  initiallyClosed = true,
  className = '',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(!initiallyClosed);
  
  const generatedId = useId();
  const contentId = id || `accordion-content-${generatedId}`;
  const buttonId = `accordion-button-${generatedId}`;

  const isDemoHover = className.includes('demo-hover-state');
  const isDemoFocus = className.includes('demo-focus-state');

  const HeadingTag = `h${headingLevel}`;

  return (
    <div className={`mb-6 border border-[#BDBDBD] rounded-lg bg-[#F5F5F5] ${className}`} {...props}>
      
      <HeadingTag className="m-0 p-0">
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={() => setIsOpen(prev => !prev)} 
          className={`
            relative flex flex-col w-full text-left bg-[#F5F5F5] px-6 py-4 outline-none
            transition-shadow duration-200
            ${isOpen ? 'rounded-t-lg' : 'rounded-lg'}
            hover:shadow-[0_0_0_4px_#757575] hover:z-30
            focus:ring-[3px] focus:ring-[#D96E00] focus:ring-offset-[2px] focus-visible:z-30
            ${isDemoHover ? 'shadow-[0_0_0_4px_#757575] z-30' : ''}
            ${isDemoFocus ? 'ring-[3px] ring-[#D96E00] ring-offset-[2px] z-30' : ''}
          `}
        >
          <div className="flex justify-between items-center w-full">
            <span className="text-black font-bold flex-grow m-0 p-0 text-base sm:text-lg">
              {heading}
            </span>
            <span
              className={`
                inline-block w-[9px] h-[9px] border-r-[2.5px] border-b-[2.5px] border-black ml-4 shrink-0 
                transition-transform duration-300 ease-in-out
                ${isOpen ? '-rotate-[135deg] mt-1.5' : 'rotate-45'}
              `}
              aria-hidden="true"
            />
          </div>
          {subTitle && (
            <span className="block text-[0.9rem] text-black mt-1 font-medium font-normal">
              {subTitle}
            </span>
          )}
        </button>
      </HeadingTag>

      <div
        id={contentId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
        className="bg-white rounded-b-lg p-6 text-black border-t border-neutral-200"
      >
        {children}
      </div>
    </div>
  );
};