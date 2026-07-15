'use client';

import React, { forwardRef, useId, Children, cloneElement } from 'react';

// ============================================================================
// 1. OBALOVACÍ KOMPONENT (Skupina)
// ============================================================================
export const RadioButtonGroup = ({
  id,
  legend,
  hint,
  mandatory = true,
  errorMsg,
  name,
  className,
  children
}) => {
  const generatedId = useId();
  const groupId = id || `radio-group-${generatedId}`;
  const hintId = hint ? `${groupId}-hint` : undefined;
  const errorId = errorMsg ? `${groupId}-error` : undefined;
  const hasError = !!errorMsg;

  const groupDescribedBy = [
    hintId,
    hasError ? errorId : null
  ].filter(Boolean).join(' ') || undefined;

  const renderedChildren = Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return cloneElement(child, {
        error: hasError,
        name: child.props.name || name,
      });
    }

    return child;
  });

  return (
    <fieldset
      id={groupId}
      className={`flex flex-col ${className || ''}`}
      aria-required={mandatory ? 'true' : undefined}
      aria-describedby={groupDescribedBy}
      aria-invalid={hasError ? 'true' : undefined}
      aria-errormessage={hasError ? errorId : undefined}
    >
      {legend && (
        <legend className={`text-[24px] leading-[35px] text-black font-bold ${hint ? 'mb-[3px]' : 'mb-7'}`}>
          {legend}
          {mandatory ? (
            <span aria-hidden="true" className="text-[#C3112B] text-xl ml-1">*</span>
          ) : (
            <span className="text-gray-500 text-[19px] font-normal leading-[28px] ml-1">
              (nepovinné pole)
            </span>
          )}
        </legend>
      )}

      {hint && (
        <div id={hintId} className="text-[#757575] text-[19px] leading-[28px] mb-7">
          {hint}
        </div>
      )}

      <div className="flex flex-col gap-4">
        {renderedChildren}
      </div>

      {hasError && errorMsg && (
        <div id={errorId} role="alert" className="flex items-end mt-4">
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
    error = false,
    label,
    hint,
    inputSize = 'large',
    className,
    ...props
  }, ref) => {
    const uniqueId = useId();
    const radioId = id || `radio-${uniqueId}`;
    const itemHintId = hint ? `${radioId}-hint` : undefined;

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
            aria-describedby={itemHintId}
            aria-invalid={!disabled && error ? 'true' : undefined}
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
          <div id={itemHintId} className={`${textOffsetClass} text-[#757575] text-[19px] leading-[28px] mt-1`}>
            {hint}
          </div>
        )}
      </div>
    );
  }
);

RadioButton.displayName = 'RadioButton';