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
      ...props
    },
    ref
  ) => {
    const generatedId = normalizeReactId(useId());
    const summaryId = id || `error-summary-${generatedId}`;
    const titleId = `${summaryId}-title`;
    const descriptionId = description
      ? `${summaryId}-description`
      : undefined;

    if (!errors.length) {
      return null;
    }

    const handleErrorClick = (event, error) => {
      if (!onErrorClick) {
        return;
      }

      const wasHandled = onErrorClick(error);

      // Ak rodič nenašiel ref na cieľ, ponecháme natívne správanie odkazu.
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
          mb-8 max-w-[640px] rounded-lg border-y-2 border-r-2
          border-l-[5px] border-[#C3112B] bg-white p-[20px] text-black
          focus:outline focus:outline-[3px] focus:outline-[#d96e00]
          focus:outline-offset-2
          ${className}
        `}
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        tabIndex={-1}
      >
        <h2 id={titleId} className="mb-4 text-lg font-bold sm:text-xl">
          {title}
        </h2>

        {description && (
          <p id={descriptionId} className="mb-4 text-base">
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
                      underline-offset-3 transition-all duration-200
                      hover:text-[#126DFF] hover:decoration-[2px]
                      hover:underline-offset-3
                      focus:text-[#126DFF] focus-visible:ring-[3px]
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
    );
  }
);

ErrorSummaryCustom.displayName = 'ErrorSummaryCustom';

export default ErrorSummaryCustom;
