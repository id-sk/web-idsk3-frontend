'use client';

import React, { forwardRef, useId } from 'react';

const normalizeReactId = (value) => value.replace(/:/g, '');
const mergeIds = (...ids) => ids.filter(Boolean).join(' ') || undefined;

const CheckIcon = ({ className = '' }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const Checkbox = forwardRef(
  (
    {
      id,
      name,
      disabled = false,
      error = false,
      errorMsg,
      label,
      hint,
      mandatory = true,
      required,
      optionalText = '(nepovinné pole)',
      fullWidth = false,
      inputSize = 'large',
      className = '',
      'aria-describedby': externalDescribedBy,
      ...props
    },
    ref
  ) => {
    const generatedId = normalizeReactId(useId());
    const checkboxId = id || `checkbox-${generatedId}`;
    const hintId = hint ? `${checkboxId}-hint` : undefined;
    const errorId = errorMsg ? `${checkboxId}-error` : undefined;

    const hasError = error || Boolean(errorMsg);
    const isRequired = required ?? mandatory;
    const describedBy = mergeIds(
      externalDescribedBy,
      hintId,
      hasError ? errorId : undefined
    );

    const isSmall = inputSize === 'small';
    const boxSizeClass = isSmall
      ? 'h-[24px] w-[24px]'
      : 'h-[40px] w-[40px]';
    const iconSizeClass = isSmall ? 'h-3 w-3' : 'h-5 w-5';
    const textOffsetClass = isSmall ? 'ml-[36px]' : 'ml-[52px]';

    return (
      <div
        className={`flex flex-col ${
          fullWidth ? 'w-full' : ''
        } ${className}`}
      >
        <label
          htmlFor={checkboxId}
          className={`relative flex items-center group ${
            disabled ? 'cursor-not-allowed' : 'cursor-pointer'
          }`}
        >
          <input
            {...props}
            id={checkboxId}
            ref={ref}
            type="checkbox"
            name={name}
            disabled={disabled}
            required={undefined}
            aria-required={isRequired ? 'true' : undefined}
            aria-invalid={hasError ? 'true' : undefined}
            aria-describedby={describedBy}
            className="peer sr-only"
          />

          <div
            className={`
              custom-checkbox-box
              flex shrink-0 items-center justify-center rounded-[5px] border-2
              bg-white ${boxSizeClass}
              peer-focus-visible:outline peer-focus-visible:outline-[3px]
              peer-focus-visible:outline-[#d96e00]
              peer-focus-visible:outline-offset-2
              ${
                !disabled
                  ? 'group-hover:ring-[4px] group-hover:ring-[#757575]'
                  : ''
              }
              peer-checked:[&>svg]:opacity-100
              peer-disabled:cursor-not-allowed
              peer-disabled:border-[#bdbdbd]
              peer-disabled:hover:ring-[0px]
              ${hasError ? 'border-[#C3112B]' : 'border-[#424242]'}
            `}
          >
            <CheckIcon
              className={`
                custom-checkbox-check
                ${iconSizeClass}
                text-[#424242] opacity-0 transition-opacity duration-200
              `}
            />
          </div>

          {label && (
            <span
              className={`ml-3 text-[19px] leading-[28px] ${
                disabled ? 'text-gray-500' : 'text-black'
              }`}
            >
              {label}
              {isRequired ? (
                <span aria-hidden="true" className="ml-1 text-[#C3112B]">
                  *
                </span>
              ) : (
                <span
                  aria-hidden="true"
                  className="ml-1 text-[16px] leading-[24px] text-[#757575]"
                >
                  {optionalText}
                </span>
              )}
            </span>
          )}
        </label>

        {hint && (
          <div
            id={hintId}
            className={`${textOffsetClass} mt-1 text-[19px] leading-[28px] text-[#757575]`}
          >
            {hint}
          </div>
        )}

        {hasError && errorMsg && (
          <div id={errorId} className="mt-2 flex items-start">
            <span className="text-[19px] leading-[28px] text-[#C3112B]">
              <span>Chyba: </span>
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
