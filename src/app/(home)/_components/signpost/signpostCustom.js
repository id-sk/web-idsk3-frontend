'use client';

import React from 'react';

// ============================================================================
// 1. OBALOVACÍ KOMPONENT (Rázcestníky v mriežke)
// ============================================================================
export const SignpostGroup = ({ children, columns = 2, className = '' }) => {
  const gridClass = columns === 1 
    ? 'grid-cols-1' 
    : columns === 3 
      ? 'grid-cols-1 md:grid-cols-3' 
      : 'grid-cols-1 md:grid-cols-2';

  return (
    <div className={`grid gap-6 ${gridClass} ${className}`}>
      {children}
    </div>
  );
};

// ============================================================================
// 2. SAMOTNÝ RÁZCESTNÍK (Dlaždica)
// ============================================================================
export const Signpost = React.forwardRef(
  ({ 
    href, 
    heading, 
    headingLevel = 'h3', 
    icon, 
    arrowIcon, 
    target,
    className = '',
    children,
    ...props 
  }, ref) => {
    
    const HeadingTag = headingLevel;
    const isExternal = target === '_blank';

    return (
      <a 
        href={href}
        ref={ref}
        target={target}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={`
          bg-white group block w-full p-[20px] border-[2px] border-[#bdbdbd] rounded-[10px]
          hover:ring-[4px] hover:ring-[#757575]
          focus-visible:outline-[#d96e00] focus-visible:outline-offset-2 focus-visible:outline-[3px]
          ${className}
        `}
        {...props}
      >
        <div className="flex items-start justify-between gap-4">
          
          <div className="flex items-start gap-3">
            {icon && (
              <div 
                aria-hidden="true" 
                className="shrink-0 text-[#0B4199] group-focus-visible:text-[#0b0c0c] mt-1"
              >
                {React.cloneElement(icon, { className: `w-6 h-6 ${icon.props.className || ''}` })}
              </div>
            )}

            <HeadingTag 
              className={`
                text-[19px] sm:text-[24px] font-bold text-[#0B4199] leading-[36px] underline
                group-hover:decoration-[3px] group-hover:underline-offset-2
              `}
            >
              {heading}
            </HeadingTag>
          </div>

          {arrowIcon && (
            <div 
              aria-hidden="true" 
              className="shrink-0 text-[#0B4199] group-focus-visible:text-[#0b0c0c] mt-1"
            >
              {React.cloneElement(arrowIcon, { className: `w-6 h-6 ${arrowIcon.props.className || ''}` })}
            </div>
          )}
        </div>

        {children && (
          <div className="mt-[20px]">
            <p className="text-[19px] leading-[28px] text-[#212121] group-focus-visible:text-[#0b0c0c]">
              {children}
            </p>
          </div>
        )}

        {isExternal && (
          <span className="sr-only"> (Otvorí sa v novom okne)</span>
        )}
      </a>
    );
  }
);

Signpost.displayName = 'Signpost';