'use client';

import React, { forwardRef, useId, Children, cloneElement } from 'react';

// ============================================================================
// 1. OBALOVACÍ KOMPONENT (Skupina)
// ============================================================================
export const RadioButtonGroup = ({
  legend,
  hint,
  mandatory = true,
  errorMsg,
  name,
  className,
  children
}) => {
  const uniqueId = useId();
  const hintId = hint ? `group-hint-${uniqueId}` : undefined;
  const errorId = errorMsg ? `group-error-${uniqueId}` : undefined;
  const hasError = !!errorMsg;

  const renderedChildren = Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return cloneElement(child, {
        error: hasError,
        name: child.props.name || name 
      });
    }
    return child;
  });

  return (
    <fieldset className={`flex flex-col ${className || ''}`}>
      
      {/* HLAVNÁ OTÁZKA (Legend) */}
      {legend && (
        // Ak máme hint, medzera pod legendou je 3px (mb-[3px]). 
        // Ak hint nie je, legenda rovno tlačí obsah dole o mb-7.
        <legend className={`text-[24px] leading-[35px] text-black font-bold ${hint ? 'mb-[3px]' : 'mb-7'}`}>
          {legend}
          {mandatory ? (
            <span aria-hidden="true" className="text-[#C3112B] text-xl ml-1">*</span>
          ) : (
            <span className="text-gray-500 text-[19px] font-normal leading-[28px] ml-1">(nepovinné pole)</span>
          )}
        </legend>
      )}

      {/* HINT PRE SKUPINU */}
      {hint && (
        // Hint má mb-7, aby odtlačil zvyšok obsahu (rádio buttony alebo chybu) presne o toľko, koľko treba
        <div id={hintId} className="text-[#757575] text-[19px] leading-[28px] mb-7">
          {hint}
        </div>
      )}

      {/* SAMOTNÉ MOŽNOSTI */}
      <div className="flex flex-col gap-4">
        {renderedChildren}
      </div>
      

      {/* CHYBOVÁ HLÁŠKA PRE SKUPINU */}
      {hasError && errorMsg && (
        <div id={errorId} className="flex items-end mt-4">
          <span className="text-[#C3112B] text-[19px] leading-[28px]">
            {errorMsg}
          </span>
        </div>
      )}

    </fieldset>
  );
};


// ============================================================================
// 2. SAMOTNÁ MOŽNOSŤ (Radio Button)
// ============================================================================
export const RadioButton = forwardRef(
  ({ 
    id, 
    name, 
    value,
    disabled = false, 
    error = false, // Toto dostane automaticky od skupiny
    label, 
    hint, // Hint pre konkrétnu možnosť
    inputSize = 'large', 
    className, 
    ...props 
  }, ref) => {
    
    const uniqueId = useId();
    const radioId = id || `radio-${uniqueId}`;
    const hintId = `${radioId}-hint`;

    const describedBy = hint ? hintId : undefined;

    const isSmall = inputSize === 'small';
    const boxSizeClass = isSmall ? 'w-[24px] h-[24px]' : 'w-[40px] h-[40px]';
    const dotSizeClass = isSmall ? 'w-[12px] h-[12px]' : 'w-[20px] h-[20px]';
    const textOffsetClass = isSmall ? 'ml-[36px]' : 'ml-[52px]';

    return (
      <div className={`flex flex-col ${className || ''}`}>
        <label 
          htmlFor={radioId} 
          className={`relative flex items-center group ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
        >
          <input
            id={radioId}
            type="radio"
            name={name}
            value={value}
            ref={ref}
            disabled={disabled}
            aria-invalid={error}
            aria-describedby={describedBy} 
            className="peer sr-only" 
            {...props}
          />

          <div
            className={`
              bg-white flex items-center justify-center shrink-0 rounded-full border-2 
              ${boxSizeClass}
              peer-focus-visible:outline peer-focus-visible:outline-[3px] peer-focus-visible:outline-[#d96e00] peer-focus-visible:outline-offset-2
              ${!disabled ? 'group-hover:ring-[4px] group-hover:ring-[#757575]' : ''}
              peer-checked:[&>div]:opacity-100 peer-checked:[&>div]:scale-100
              peer-disabled:border-[#bdbdbd] peer-disabled:cursor-not-allowed peer-disabled:hover:ring-[0px]              
              ${error ? 'border-[#C3112B]' : 'border-[#424242]'}
            `}
          >
            <div 
              className={`
                ${dotSizeClass} rounded-full bg-[#424242] opacity-0 scale-50 transition-all duration-100
              `}
            />
          </div>

          {label && (
            <span className={`ml-3 text-[19px] leading-[28px] ${disabled ? 'text-gray-500' : 'text-black'}`}>
              {label}
            </span>
          )}
        </label>

        {hint && (
          <div id={hintId} className={`${textOffsetClass} text-[#757575] text-[19px] leading-[28px] mt-1`}>
            {hint}
          </div>
        )}
      </div>
    );
  }
);

RadioButton.displayName = 'RadioButton';