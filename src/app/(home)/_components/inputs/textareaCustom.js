'use client';

import React, { useId, useState } from 'react';

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

const TextareaCustom = ({
  id,
  name,
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
  maxLength = 1000,
  value,
  defaultValue = '',
  onChange,
  placeholder,
  rows = 4,
  fullWidth = false,
  className = '',
  textareaClassName = '',
  ...props
}) => {
  const generatedId = useId();
  const textareaId = id || `textarea-${generatedId}`;
  const subtitleId = subtitle ? `${textareaId}-subtitle` : undefined;
  const descriptionId = description || caption ? `${textareaId}-description` : undefined;
  const errorId = errorMsg ? `${textareaId}-error` : undefined;
  const counterSrId = maxLength !== undefined ? `${textareaId}-counter-sr` : undefined;

  const hasError = error || !!errorMsg;
  const isRequired = required ?? mandatory;

  const [internalCount, setInternalCount] = useState(
    () => String(defaultValue ?? '').length
  );

  const charCount = value !== undefined ? String(value ?? '').length : internalCount;

  const describedBy =
    [
      subtitleId,
      descriptionId,
      counterSrId,
      hasError && errorId ? errorId : null,
    ]
      .filter(Boolean)
      .join(' ') || undefined;

  const handleChange = (event) => {
    if (value === undefined) {
      setInternalCount(event.target.value.length);
    }

    onChange?.(event);
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
          htmlFor={textareaId}
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

      <div
        className={cx(
          'idsk-textarea-custom-wrapper relative flex w-full',
          disabled && 'idsk-textarea-custom-wrapper--disabled'
        )}
      >
        <textarea
          id={textareaId}
          name={name}
          rows={rows}
          required={isRequired}
          aria-required={isRequired ? 'true' : undefined}
          disabled={disabled}
          maxLength={maxLength}
          value={value}
          defaultValue={value === undefined ? defaultValue : undefined}
          onChange={handleChange}
          placeholder={placeholder}
          aria-invalid={hasError ? 'true' : undefined}
          aria-describedby={describedBy}
          aria-errormessage={hasError && errorId ? errorId : undefined}
          className={cx(
            'idsk-textarea-custom min-h-[88px] w-full rounded-[5px] border-2 bg-white px-4 pb-8 pt-2.5 text-[19px] leading-7 text-[#212121]',
            'placeholder:text-[#757575]',
            !disabled && 'resize-y hover:ring-[4px] hover:ring-[#757575] focus:outline focus:outline-[3px] focus:outline-[#D96E00] focus:outline-offset-2',
            disabled
              ? 'resize-none cursor-not-allowed border-[#BDBDBD] bg-[#F5F5F5] text-[#757575]'
              : hasError
                ? 'border-[#C3112B] pr-12'
                : 'border-[#424242]',
            textareaClassName
          )}
          {...props}
        />

        {hasError && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-4 top-3 text-[#C3112B]"
          >
            <WarningIcon className="h-5 w-5" />
          </span>
        )}

        {maxLength !== undefined && (
          <>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-2 right-4 z-10 bg-white px-1 text-[16px] leading-6 text-[#757575]"
            >
              {charCount}/{maxLength}
            </span>

            <span id={counterSrId} className="sr-only" aria-live="polite">
              Napísaných {charCount} znakov z maximálne {maxLength}.
            </span>
          </>
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
              role="alert"
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
};

export default TextareaCustom;