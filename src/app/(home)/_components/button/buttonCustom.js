'use client';

import React, { forwardRef, useState } from 'react';
import Link from 'next/link';

const ButtonCustom = forwardRef(({
  children,
  variant = 'primary', // primary | secondary | tertiary
  status = 'basic',    // basic | success | warning
  size = 'large',      // small | medium | large
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  href,
  className = '',
  onClick,
  onKeyDown,
  onKeyUp,
  onBlur,
  ...props
}, ref) => {
  const [isEnterPressed, setIsEnterPressed] = useState(false);
  const isLink = Boolean(href);

  const colors = {
    blue: {
      base: '#126dff',
      hover: '#0B4199',
      active: '#072c66',
      light: '#eff5fe',
    },
    green: {
      base: '#078814',
      hover: '#078814',
      active: '#033608',
      light: '#ebf5ec',
    },
    red: {
      base: '#c3112b',
      hover: '#c3112b',
      active: '#4e0711',
      light: '#fbeef0',
    },
    grey: {
      border: '#bdbdbd',
      text: '#fff',
      bg: '#e0e0e0',
    },
    white: {
      background: '#fff',
    },
  };

  const s =
    status === 'success'
      ? colors.green
      : status === 'warning'
        ? colors.red
        : colors.blue;

  const buttonStyle = !disabled
    ? {
        '--btn-base': s.base,
        '--btn-hover': s.hover,
        '--btn-active': s.active,
        '--btn-light': s.light,
      }
    : {
        '--btn-base': colors.grey.bg,
        '--btn-text': colors.grey.text,
        '--btn-border': colors.grey.border,
        '--btn-background': colors.white.background,
      };

  const baseClasses = `
    inline-flex items-center justify-center font-bold tracking-wide
    p-[12px] rounded-[5px] gap-[10px] transition-all duration-100 outline-none
    focus:outline focus:outline-[3px] focus:outline-[#d96e00] focus:outline-offset-2
    disabled:cursor-not-allowed
  `;

  const variantClasses = {
    primary: `
      bg-[var(--btn-base)] text-white

      ${
        isLink
          ? !disabled
            ? `
              hover:underline hover:ring-[4px] hover:ring-[#757575]
              active:bg-[var(--btn-active)] active:scale-[0.98] active:underline
            `
            : ''
          : `
            enabled:hover:underline enabled:hover:ring-[4px] enabled:hover:ring-[#757575]
            enabled:active:bg-[var(--btn-active)] enabled:active:scale-[0.98] enabled:active:underline

            disabled:bg-[var(--btn-border)] disabled:text-[var(--btn-text)]
          `
      }

      ${
        isEnterPressed && !disabled
          ? '!bg-[var(--btn-active)] !scale-[0.98] !underline'
          : ''
      }
    `,

    secondary: `
      bg-white border-2 border-[var(--btn-hover)] text-[var(--btn-hover)]

      ${
        isLink
          ? !disabled
            ? `
              hover:border-[var(--btn-hover)] hover:text-[var(--btn-hover)]
              hover:underline hover:ring-[4px] hover:ring-[#757575]
              active:bg-[var(--btn-light)] active:underline active:scale-[0.98]
            `
            : ''
          : `
            enabled:hover:border-[var(--btn-hover)] enabled:hover:text-[var(--btn-hover)]
            enabled:hover:underline enabled:hover:ring-[4px] enabled:hover:ring-[#757575]
            enabled:active:bg-[var(--btn-light)] enabled:active:underline enabled:active:scale-[0.98]

            disabled:bg-white disabled:border-[var(--btn-border)] disabled:text-[var(--btn-border)]
          `
      }

      ${
        isEnterPressed && !disabled
          ? '!bg-[var(--btn-light)] !scale-[0.98] !underline'
          : ''
      }
    `,

    tertiary: `
      bg-transparent text-[var(--btn-hover)] underline

      ${
        isLink
          ? !disabled
            ? `
              hover:underline hover:decoration-[2px] hover:underline-offset-[3px]
              hover:ring-[4px] hover:ring-[#757575]
              active:bg-[var(--btn-light)] active:underline active:decoration-[2px]
              active:underline-offset-[3px] active:scale-[0.98]
            `
            : ''
          : `
            enabled:hover:underline enabled:hover:decoration-[2px] enabled:hover:underline-offset-[3px]
            enabled:hover:ring-[4px] enabled:hover:ring-[#757575]
            enabled:active:bg-[var(--btn-light)] enabled:active:underline enabled:active:decoration-[2px]
            enabled:active:underline-offset-[3px] enabled:active:scale-[0.98]

            disabled:text-[var(--btn-border)]
          `
      }

      ${
        isEnterPressed && !disabled
          ? '!bg-[var(--btn-light)] !decoration-[2px] !underline-offset-[3px] !scale-[0.98]'
          : ''
      }
    `,
  };

  const sizeClasses = {
    small: 'h-[34px]',
    medium: 'h-[40px]',
    large: 'h-[48px]',
  };

  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }

    if (onClick) onClick(e);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !disabled) {
      setIsEnterPressed(true);
    }

    if (onKeyDown) onKeyDown(e);
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      setIsEnterPressed(false);
    }

    if (onKeyUp) onKeyUp(e);
  };

  const handleBlur = (e) => {
    setIsEnterPressed(false);

    if (onBlur) onBlur(e);
  };

  const content = (
    <>
      {iconLeft && (
        <span className="flex-shrink-0">
          {iconLeft}
        </span>
      )}

      {children && (
        <span>
          {children}
        </span>
      )}

      {iconRight && (
        <span className="flex-shrink-0">
          {iconRight}
        </span>
      )}
    </>
  );

  const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${fullWidth ? 'w-full' : ''}
    ${disabled && isLink ? 'cursor-not-allowed opacity-60' : ''}
    ${className}
  `;

  if (isLink) {
    return (
      <Link
        ref={ref}
        href={href}
        aria-disabled={disabled ? 'true' : undefined}
        tabIndex={disabled ? -1 : undefined}
        style={buttonStyle}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onBlur={handleBlur}
        className={classes}
        {...props}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      ref={ref}
      type={props.type || 'button'}
      disabled={disabled}
      style={buttonStyle}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      onBlur={handleBlur}
      className={classes}
      {...props}
    >
      {content}
    </button>
  );
});

ButtonCustom.displayName = 'ButtonCustom';

export default ButtonCustom;