'use client';

import React, {
  Children,
  cloneElement,
  forwardRef,
  useId,
} from 'react';

const normalizeReactId = (value) => value.replace(/:/g, '');
const mergeIds = (...ids) => ids.filter(Boolean).join(' ') || undefined;

export const RadioButtonGroup = ({
  id,
  legend,
  hint,
  mandatory = true,
  required,
  errorMsg,
  name,
  className = '',
  children,
  'aria-describedby': externalDescribedBy,
  ...props
}) => {
  const generatedId = normalizeReactId(useId());
  const groupId = id || `radio-group-${generatedId}`;
  const hintId = hint ? `${groupId}-hint` : undefined;
  const errorId = errorMsg ? `${groupId}-error` : undefined;
  const hasError = Boolean(errorMsg);
  const isRequired = required ?? mandatory;

  const groupDescribedBy = mergeIds(externalDescribedBy, hintId);

  const renderedChildren = Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return child;
    }

    return cloneElement(child, {
      name: child.props.name || name,
      required: child.props.required ?? isRequired,
      error: child.props.error || hasError,
      groupHintId: hintId,
      groupErrorId: hasError ? errorId : undefined,
    });
  });

  return (
    <fieldset
      {...props}
      id={groupId}
      className={`flex flex-col ${className}`}
      aria-describedby={groupDescribedBy}
    >
      {legend && (
        <legend
          className={`text-[24px] font-bold leading-[35px] text-black ${
            hint ? 'mb-[3px]' : 'mb-7'
          }`}
        >
          {legend}
          {isRequired ? (
            <span aria-hidden="true" className="ml-1 text-[#C3112B]">
              *
            </span>
          ) : (
            <span aria-hidden="true" className="ml-1 text-[16px] font-normal leading-[24px] text-[#757575]">
              (nepovinné pole)
            </span>
          )}
        </legend>
      )}

      {hint && (
        <div
          id={hintId}
          className="mb-7 text-[19px] leading-[28px] text-[#757575]"
        >
          {hint}
        </div>
      )}

      <div className="flex flex-col gap-4">{renderedChildren}</div>

      {hasError && (
        <div id={errorId} className="mt-4 flex items-start">
          <span className="text-[19px] leading-[28px] text-[#C3112B]">
            <span>Chyba: </span>
            {errorMsg}
          </span>
        </div>
      )}
    </fieldset>
  );
};

export const RadioButton = forwardRef(
  (
    {
      id,
      name,
      value,
      disabled = false,
      error = false,
      label,
      hint,
      required = false,
      groupHintId,
      groupErrorId,
      inputSize = 'large',
      className = '',
      'aria-describedby': externalDescribedBy,
      ...props
    },
    ref
  ) => {
    const generatedId = normalizeReactId(useId());
    const radioId = id || `radio-${generatedId}`;
    const itemHintId = hint ? `${radioId}-hint` : undefined;

    const describedBy = mergeIds(
      externalDescribedBy,
      itemHintId,
      groupHintId,
      groupErrorId
    );

    const isSmall = inputSize === 'small';
    const boxSizeClass = isSmall
      ? 'h-[24px] w-[24px]'
      : 'h-[40px] w-[40px]';
    const dotSizeClass = isSmall
      ? 'h-[12px] w-[12px]'
      : 'h-[20px] w-[20px]';
    const textOffsetClass = isSmall ? 'ml-[36px]' : 'ml-[52px]';

    return (
      <div className={`flex flex-col ${className}`}>
        <label
          htmlFor={radioId}
          className={`relative flex items-start group ${
            disabled ? 'cursor-not-allowed' : 'cursor-pointer'
          }`}
        >
          <input
            {...props}
            id={radioId}
            ref={ref}
            type="radio"
            name={name}
            value={value}
            disabled={disabled}
            required={required}
            aria-invalid={!disabled && error ? 'true' : undefined}
            aria-describedby={describedBy}
            className="peer sr-only"
          />

          <div
            className={`
              flex shrink-0 items-center justify-center rounded-full border-2
              bg-white ${boxSizeClass}
              peer-focus-visible:outline peer-focus-visible:outline-[3px]
              peer-focus-visible:outline-[#d96e00]
              peer-focus-visible:outline-offset-2
              ${
                !disabled
                  ? 'group-hover:ring-[4px] group-hover:ring-[#757575]'
                  : ''
              }
              peer-checked:[&>div]:scale-100
              peer-checked:[&>div]:opacity-100
              peer-disabled:cursor-not-allowed peer-disabled:border-[#bdbdbd]
              peer-disabled:hover:ring-[0px]
              ${error ? 'border-[#C3112B]' : 'border-[#424242]'}
            `}
          >
            <div
              className={`
                ${dotSizeClass} scale-50 rounded-full bg-[#424242] opacity-0
                transition-all duration-100
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
            </span>
          )}
        </label>

        {hint && (
          <div
            id={itemHintId}
            className={`${textOffsetClass} mt-1 text-[19px] leading-[28px] text-[#757575]`}
          >
            {hint}
          </div>
        )}
      </div>
    );
  }
);

RadioButton.displayName = 'RadioButton';
