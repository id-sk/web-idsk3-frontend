'use client';

import React, { useState, useId } from 'react';
import classNames from 'classnames';

// --- IKONKY ---
const CloseIcon = () => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const InfoIcon = () => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="10" stroke="none" />
    <line x1="12" y1="16" x2="12" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <line x1="12" y1="8" x2="12.01" y2="8" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="10" stroke="none" />
    <polyline points="16 9 10 16 7 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const WarningIcon = () => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L1 21h22L12 2z" stroke="none" />
    <line x1="12" y1="10" x2="12" y2="14" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <line x1="12" y1="18" x2="12.01" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const AlertIcon = () => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" stroke="none" />
    <line x1="12" y1="8" x2="12" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <line x1="12" y1="16" x2="12.01" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const InformationBanner = ({
  title,
  ariaLabel,
  icon,
  useDefaultIcon = true,
  type = 'banner',
  variant = 'information',
  children,
  actionButton,
  hideCloseButton = false,
  closeButtonOnClick = () => {},
  closeButtonLabel = 'Zavrieť',
  className,
  errorMessageId,
  accent = true,
  role, 
}) => {
  const [visible, setVisibility] = useState(true);

  const reactId = useId();
  const idForAria = errorMessageId || `banner-${reactId.replace(/:/g, '')}`;
  
  const titleId = title ? `${idForAria}-title` : undefined;

  let RenderedIcon = icon;
  if (!icon && useDefaultIcon) {
    if (variant === 'success') RenderedIcon = <CheckCircleIcon />;
    else if (variant === 'warning') RenderedIcon = <WarningIcon />;
    else if (variant === 'alert') RenderedIcon = <AlertIcon />;
    else RenderedIcon = <InfoIcon />;
  }

  const variantStyles = {
    information: { bg: 'bg-white', border: 'border-[#126DFF]', text: 'text-[#212121]', iconColor: 'text-[#126DFF]', closeHover: 'hover:ring-[4px] hover:ring-[#757575]' },
    success: { bg: 'bg-white', border: 'border-[#078814]', text: 'text-[#212121]', iconColor: 'text-[#078814]', closeHover: 'hover:ring-[4px] hover:ring-[#757575]' },
    warning: { bg: 'bg-white', border: 'border-[#BD730C]', text: 'text-[#212121]', iconColor: 'text-[#BD730C]', closeHover: 'hover:ring-[4px] hover:ring-[#757575]' },
    alert: { bg: 'bg-white', border: 'border-[#C3112B]', text: 'text-[#212121]', iconColor: 'text-[#C3112B]', closeHover: 'hover:ring-[4px] hover:ring-[#757575]' },
  };

  const style = variantStyles[variant] || variantStyles.information;

  if (!visible) return null;

  const isAlert = variant === 'alert';
  const computedRole = role || (isAlert ? 'alert' : undefined);

  return (
    <section
      role={computedRole}
      aria-labelledby={titleId} 
      aria-label={!title ? (ariaLabel || `Upozornenie typu ${variant}`) : undefined} // Fallback, ak chýba title
      className={classNames(
        'relative flex items-center overflow-hidden rounded-md border-[2px] transition-all duration-300 animate-fade-in',
        style.bg,
        style.border,
        type === 'banner' ? 'p-4 sm:px-6 sm:py-5' : 'py-5 px-4 w-full max-w-7xl mx-auto',
        accent && type === 'banner' && 'border-l-[5px]',
        className
      )}
    >
      <div className="flex w-full justify-between items-center">
        
        {RenderedIcon && (
          <div className={classNames('flex-shrink-0 mr-3 sm:mr-4', style.iconColor)}>
            {RenderedIcon}
          </div>
        )}

        <div className="flex flex-col flex-grow justify-center">
          {title && (
            <h3 id={titleId} className={classNames('text-base sm:text-lg font-bold tracking-wide leading-snug mb-1', style.text)}>
              {title}
            </h3>
          )}
          {children && (
            <div className="text-sm sm:text-base tracking-wide leading-relaxed text-black">
              {children}
            </div>
          )}
        </div>

        <div className="flex-shrink-0 flex items-center ml-2">
          {actionButton ? (
            actionButton
          ) : !hideCloseButton ? (
            <button
              type="button"
              aria-label={closeButtonLabel}
              onClick={(e) => {
                setVisibility(false);
                closeButtonOnClick(e);
              }}
              className={classNames(
                'p-1.5 rounded-md transition-colors',
                style.iconColor, 
                style.closeHover,
                'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[#d96e00] focus-visible:outline-offset-3'
              )}
            >
              <CloseIcon />
            </button>
          ) : null}
        </div>

      </div>
    </section>
  );
};

export default InformationBanner;