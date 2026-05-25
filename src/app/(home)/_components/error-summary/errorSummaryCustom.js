'use client';

import React, { useEffect, useId, useRef } from 'react';

const ErrorSummaryCustom = ({
  id,
  title = 'Vyskytol sa problém',
  description,
  errors = [],
  className = '',
  focusOnRender = true,
  focusKey,
  ...props
}) => {
  const summaryRef = useRef(null);
  const lastFocusKeyRef = useRef(null);

  const generatedId = useId().replace(/:/g, '');
  const summaryId = id || `error-summary-${generatedId}`;
  const titleId = `${summaryId}-title`;
  const descriptionId = description ? `${summaryId}-description` : undefined;

  useEffect(() => {
    if (!focusOnRender || !errors || errors.length === 0 || !summaryRef.current) {
      return;
    }

    if (focusKey !== undefined) {
      if (lastFocusKeyRef.current === focusKey) {
        return;
      }

      lastFocusKeyRef.current = focusKey;
    }

    summaryRef.current.focus();
  }, [errors?.length, focusOnRender, focusKey]);

  if (!errors || errors.length === 0) {
    return null;
  }

  const handleErrorClick = (event, targetId) => {
    const targetElement = document.getElementById(targetId);

    if (!targetElement) {
      return;
    }

    event.preventDefault();

    targetElement.focus({ preventScroll: true });

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    targetElement.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'center',
    });
  };

  return (
    <div
      id={summaryId}
      ref={summaryRef}
      className={`
        bg-white text-black p-[20px] mb-8
        border-[#C3112B] rounded-lg border-y-2 border-r-2 border-l-[5px]
        focus:outline focus:outline-[3px] focus:outline-[#d96e00] focus:outline-offset-2
        ${className}
      `}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      tabIndex={-1}
      {...props}
    >
      <h2 id={titleId} className="text-lg sm:text-xl font-bold mb-4">
        {title}
      </h2>

      {description && (
        <p id={descriptionId} className="text-base mb-4">
          {description}
        </p>
      )}

      <ul className="list-none pl-0 m-0 space-y-2">
        {errors.map((error) => (
          <li key={`${error.id}-${error.message}`}>
            <a
              href={`#${error.id}`}
              className="
                text-[#0B4199] underline decoration-[1px] underline-offset-3
                hover:text-[#126DFF] hover:decoration-[2px] hover:underline-offset-3
                focus:text-[#126DFF] focus-visible:ring-[3px] focus-visible:ring-[#d96e00] focus-visible:ring-offset-2
                visited:text-[#592999]
                transition-all duration-200
              "
              onClick={(event) => handleErrorClick(event, error.id)}
            >
              {error.message}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ErrorSummaryCustom;