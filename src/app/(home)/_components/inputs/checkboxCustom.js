'use client';

import React, { forwardRef, useId } from 'react';

const CheckIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const Checkbox = forwardRef(
  ({ 
    id, 
    name, 
    disabled = false, 
    error = false, 
    errorMsg, 
    label, 
    hint, 
    mandatory = true, 
    inputSize = 'large', 
    className, 
    ...props 
  }, ref) => {
    
    const uniqueId = useId();
    const checkboxId = id || `checkbox-${uniqueId}`;
    const hintId = `${checkboxId}-hint`;
    const errorId = `${checkboxId}-error`;

    const hasError = error || !!errorMsg;

    const describedBy = [
      hint ? hintId : null,
      hasError && errorMsg ? errorId : null
    ].filter(Boolean).join(' ') || undefined;

    const isSmall = inputSize === 'small';
    const boxSizeClass = isSmall ? 'w-[24px] h-[24px]' : 'w-[40px] h-[40px]';
    const iconSizeClass = isSmall ? 'w-3 h-3' : 'w-5 h-5';
    
    // Vypočítame odsadenie pre Hint, aby presne lícoval s menovkou
    // Veľký: 40px (box) + 12px (ml-3) = 52px
    // Malý: 24px (box) + 12px (ml-3) = 36px
    const textOffsetClass = isSmall ? 'ml-[36px]' : 'ml-[52px]';

    return (
      <div className={`flex flex-col ${className || ''}`}>
        
        {/* 1. SAMOTNÝ CHECKBOX A HLAVNÁ MENOVKA */}
        <label 
          htmlFor={checkboxId} 
          className="relative flex items-center cursor-pointer group"
        >
          <input
            id={checkboxId}
            type="checkbox"
            name={name}
            ref={ref}
            disabled={disabled}
            required={mandatory}
            aria-invalid={hasError}
            aria-describedby={describedBy} 
            className="peer sr-only" 
            {...props}
          />

          <div
            className={`
              bg-white flex items-center justify-center shrink-0 rounded-[5px] border-2 transition-all duration-200
              ${boxSizeClass}
              peer-focus-visible:outline peer-focus-visible:outline-[3px] peer-focus-visible:outline-[#d96e00] peer-focus-visible:outline-offset-3
              group-hover:ring-[4px] group-hover:ring-[#757575]
              peer-checked:[&>svg]:opacity-100
              peer-disabled:border-[#bdbdbd] peer-disabled:cursor-not-allowed
              ${hasError ? 'border-[#C3112B]' : 'border-[#424242]'}
            `}
          >
            <CheckIcon className={`${iconSizeClass} text-[#424242] opacity-0 transition-opacity duration-200`} />
          </div>

          <span className={`ml-3 text-[19px] leading-[28px] ${disabled ? 'text-gray-500' : 'text-black'}`}>
            {label}
            {mandatory ? (
              <span aria-hidden="true" className="text-[#C3112B] text-xl ml-1">*</span>
            ) : (
              <span className="text-gray-500 text-[16px] leading-[24px] ml-1">(nepovinné pole)</span>
            )}
          </span>
        </label>

        {/* 2. DOPLŇUJÚCI HINT (Teraz je mimo labelu = nekazí centrovanie a WCAG!) */}
        {hint && (
          <div id={hintId} className={`${textOffsetClass} text-[#757575] text-[19px] leading-[28px] mt-1`}>
            {hint}
          </div>
        )}

        {/* 3. CHYBOVÁ HLÁŠKA */}
        {hasError && errorMsg && (
          <div id={errorId} className="flex items-start mt-2">
            <span className="text-[#C3112B] text-[19px] leading-[28px]">
              {errorMsg}
            </span>
          </div>
        )}

      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;