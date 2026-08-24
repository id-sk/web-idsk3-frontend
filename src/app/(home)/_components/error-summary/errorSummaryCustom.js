'use client';

import React, { forwardRef, useId } from 'react';

const normalizeReactId = (value) => value.replace(/:/g, '');

const ErrorSummaryCustom = forwardRef(
  (
    {
      id,
      title = 'Vyskytol sa problém',
      description,
      errors = [],
      className = '',
      onErrorClick,
      focusOnRender = false,
      ...props
    },
    ref
  ) => {
    const generatedId = normalizeReactId(useId());
    const summaryId = id || `error-summary-${generatedId}`;
    const titleId = `${summaryId}-title`;
    const descriptionId = description ? `${summaryId}-description` : undefined;

    if (!errors.length) {
      return null;
    }

    const handleErrorClick = (event, error) => {
      if (!onErrorClick) {
        return;
      }

      const wasHandled = onErrorClick(error);

      if (wasHandled !== false) {
        event.preventDefault();
      }
    };

    return (
      <div
        {...props}
        id={summaryId}
        ref={ref}
        role="region"
        className={`
          mb-8 max-w-[640px] overflow-hidden rounded-lg bg-[#C3112B]
          py-[2px] pl-[5px] pr-[2px]
          focus:outline focus:outline-[3px] focus:outline-[#d96e00]
          focus:outline-offset-2
          ${className}
        `}
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        tabIndex={-1}
      >
        <div className="h-full w-full bg-white p-[20px] rounded-r-md text-black">
          <h2 id={titleId} className="mb-4 text-[24px] font-bold leading-[35px]">
            {title}
          </h2>

          {description && (
            <p id={descriptionId} className="mb-4 text-[16px] leading-[24px]">
              {description}
            </p>
          )}

          <ul className="m-0 list-none space-y-2 pl-0">
            {errors.map((error, index) => {
              const key =
                error.id ||
                `${error.field || error.targetId || 'global'}-${index}`;

              return (
                <li key={key}>
                  {error.targetId ? (
                    <a
                      href={`#${error.targetId}`}
                      className="
                        text-[#0B4199] underline decoration-[1px]
                        underline-offset-3 transition-colors duration-100
                        hover:text-[#126DFF] hover:decoration-[2px]
                        hover:underline-offset-3 focus:text-[#126DFF] focus-visible:ring-[3px]
                        focus-visible:ring-[#d96e00] focus-visible:ring-offset-2
                      "
                      onClick={(event) => handleErrorClick(event, error)}
                    >
                      {error.message}
                    </a>
                  ) : (
                    <span>{error.message}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
);

ErrorSummaryCustom.displayName = 'ErrorSummaryCustom';

export default ErrorSummaryCustom;