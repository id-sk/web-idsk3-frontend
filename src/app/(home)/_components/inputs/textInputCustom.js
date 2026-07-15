'use client';

import React, { forwardRef, useId } from 'react';

const cx = (...classes) => classes.filter(Boolean).join(' ');

const WarningIcon = ({ className = '' }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2 1 21h22L12 2Zm1 16h-2v-2h2v2Zm0-4h-2V9h2v5Z" />
  </svg>
);

const TextInputCustom = forwardRef(
  (
    {
      id,
      name,
      type = 'text',
      label,
      subtitle,
      description,
      caption,
      mandatory = false,
      required,
      optionalText = '(nepovinné pole)',
      disabled = false,
      error = false,
      errorMsg,
      announceError = true,
      inputSize = 'large',
      fullWidth = false,
      value,
      defaultValue,
      onChange,
      placeholder,
      className = '',
      inputClassName = '',
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id || `input-${generatedId}`;

    const subtitleId = subtitle ? `${inputId}-subtitle` : undefined;
    const descriptionId = description || caption ? `${inputId}-description` : undefined;
    const errorId = errorMsg ? `${inputId}-error` : undefined;

    const hasError = error || !!errorMsg;
    const isRequired = required ?? mandatory;

    const describedBy =
      [
        subtitleId,
        descriptionId,
        hasError && errorId ? errorId : null,
      ]
        .filter(Boolean)
        .join(' ') || undefined;

    const sizeClasses = {
      small: 'h-[40px] text-[16px] leading-6 px-4',
      medium: 'h-[40px] text-[16px] leading-6 px-4',
      large: 'h-[48px] text-[19px] leading-7 px-4',
    };

    return (
      <div
        className={cx(
          'flex flex-col',
          fullWidth ? 'w-full' : 'w-full max-w-[610px]',
          className
        )}
      >
        {label && (
          <label
            htmlFor={inputId}
            className={cx(
              'mb-1 flex flex-col text-[19px] leading-7 text-[#212121]',
              disabled && 'text-[#757575]'
            )}
          >
            <span>
              {label}

              {isRequired ? (
                <span aria-hidden="true" className="ml-1 text-xl text-[#C3112B]">
                  *
                </span>
              ) : (
                <span className="ml-1 text-[16px] font-normal leading-6 text-[#757575]">
                  {optionalText}
                </span>
              )}
            </span>
          </label>
        )}

        {subtitle && (
          <span
            id={subtitleId}
            className="mb-2 text-[19px] leading-7 text-[#757575]"
          >
            {subtitle}
          </span>
        )}

        <div className="relative flex w-full">
          <input
            id={inputId}
            ref={ref}
            name={name}
            type={type}
            required={isRequired}
            aria-required={isRequired ? 'true' : undefined}
            disabled={disabled}
            value={value}
            defaultValue={value === undefined ? defaultValue : undefined}
            onChange={onChange}
            placeholder={placeholder}
            aria-invalid={hasError ? 'true' : undefined}
            aria-describedby={describedBy}
            aria-errormessage={hasError && errorId ? errorId : undefined}
            className={cx(
              'w-full rounded-[5px] border-2 bg-white text-[#212121] outline-none transition-colors',
              sizeClasses[inputSize] || sizeClasses.large,
              'placeholder:text-[#757575]',
              !disabled &&
                'hover:ring-[4px] hover:ring-[#757575] focus:outline focus:outline-[3px] focus:outline-[#D96E00] focus:outline-offset-2',
              disabled
                ? 'cursor-not-allowed border-[#BDBDBD] bg-[#F5F5F5] text-[#757575]'
                : hasError
                  ? 'border-[#C3112B] pr-12'
                  : 'border-[#424242]',
              inputClassName
            )}
            {...props}
          />

          {hasError && (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#C3112B]"
            >
              <WarningIcon className="h-5 w-5" />
            </span>
          )}
        </div>

        {(description || caption || hasError) && (
          <div className="mt-2 flex flex-col">
            {(description || caption) && (
              <span
                id={descriptionId}
                className="text-[16px] leading-6 text-[#757575]"
              >
                {description || caption}
              </span>
            )}

            {hasError && errorMsg && (
              <span
                id={errorId}
                role={announceError ? 'alert' : undefined}
                className="text-[19px] leading-7 text-[#C3112B]"
              >
                <span>Chyba: </span>
                {errorMsg}
              </span>
            )}
          </div>
        )}
      </div>
    );
  }
);

TextInputCustom.displayName = 'TextInputCustom';

export default TextInputCustom;