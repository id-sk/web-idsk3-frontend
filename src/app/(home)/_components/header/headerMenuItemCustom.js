'use client';

import React, { useEffect, useId, useRef, useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from './headerIcons';

const cx = (...classes) => classes.filter(Boolean).join(' ');

const HeaderMenuItemCustom = ({
  variant = 'link',
  active = false,
  href,
  children,
  onClick,
  dropdownItems = [],
  open,
  defaultOpen = false,
  onOpenChange,
  className = '',
  ...props
}) => {
  const reactId = useId();
  const instanceId = reactId.replace(/:/g, '');
  const triggerId = `header-menu-trigger-${instanceId}`;
  const menuId = `header-menu-${instanceId}`;

  const wrapperRef = useRef(null);
  const triggerRef = useRef(null);
  const [internalOpen, setInternalOpen] = useState(defaultOpen);

  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;

  const setOpen = (nextOpen) => {
    if (!isControlled) {
      setInternalOpen(nextOpen);
    }

    onOpenChange?.(nextOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const triggerClasses = cx(
    'relative flex h-12 cursor-pointer flex-col items-start bg-transparent p-0 text-left no-underline',
    'focus:outline focus:outline-[3px] focus:outline-[#D96E00] focus:outline-offset-2',
    className
  );

  const contentClasses = cx(
    'flex h-full items-center border-b-[3px] px-3',
    active || isOpen ? 'border-b-[#0B4199] bg-[#EFF5FE]' : 'border-b-transparent',
    'hover:rounded-[5px] hover:ring-[4px] hover:ring-[#757575]'
  );

  const dropdownItemClass = cx(
    'relative flex min-h-12 w-full cursor-pointer items-center rounded-none border-0 px-5 py-2.5 text-left text-[16px] leading-6 tracking-wide outline-none no-underline',
    'text-[#212121] bg-white',
    'hover:bg-[#F5F5F5] hover:underline hover:decoration-2 hover:underline-offset-2',
    'focus:bg-[#F5F5F5] focus:underline focus:decoration-2 focus:underline-offset-2'
  );

  if (variant === 'dropdown') {
    return (
      <div ref={wrapperRef} className="relative inline-flex">
        <button
          ref={triggerRef}
          id={triggerId}
          type="button"
          data-idsk="header-menu-item"
          aria-current={active ? 'page' : undefined}
          aria-expanded={isOpen}
          aria-haspopup="menu"
          aria-controls={isOpen ? menuId : undefined}
          onClick={() => setOpen(!isOpen)}
          className={triggerClasses}
          {...props}
        >
          <span className={contentClasses}>
            <span className="whitespace-nowrap text-[16px] font-bold leading-6 text-[#0B4199]">
              {children}
            </span>

            <span aria-hidden="true" className="ml-1 flex items-center text-[#0B4199]">
              {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </span>
          </span>
        </button>

        {isOpen && (
          <div
            id={menuId}
            role="menu"
            aria-labelledby={triggerId}
            aria-orientation="vertical"
            className="absolute left-[-5px] top-[calc(100%+5px)] z-[60] flex w-[249px] flex-col overflow-hidden rounded-[5px] border-2 border-[#BDBDBD] bg-white shadow-[0_12px_16px_rgba(26,26,26,0.24)]"
          >
            {dropdownItems.map((item) => {
              const key = item.id ?? item.href ?? item.label;

              if (item.href) {
                return (
                  <a
                    key={key}
                    href={item.href}
                    role="menuitem"
                    aria-current={item.active ? 'page' : undefined}
                    className={cx(
                      dropdownItemClass,
                      item.active && 'font-bold text-[#0B4199]'
                    )}
                    onClick={() => {
                      item.onClick?.();
                      setOpen(false);
                    }}
                  >
                    {item.active && (
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute bottom-0 left-[-2px] top-0 z-[60] w-[3px] bg-[#0B4199]"
                      />
                    )}

                    <span className="relative z-[2] min-w-0 flex-1">
                      {item.label}
                    </span>
                  </a>
                );
              }

              return (
                <button
                  key={key}
                  type="button"
                  role="menuitem"
                  className={cx(
                    dropdownItemClass,
                    item.active && 'font-bold text-[#0B4199]'
                  )}
                  onClick={() => {
                    item.onClick?.();
                    setOpen(false);
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={triggerClasses}
        aria-current={active ? 'page' : undefined}
        onClick={onClick}
        data-idsk="header-menu-item"
        {...props}
      >
        <span className={contentClasses}>
          <span className="whitespace-nowrap text-[16px] font-bold leading-6 text-[#0B4199]">
            {children}
          </span>
        </span>
      </a>
    );
  }

  return (
    <button
      type="button"
      className={triggerClasses}
      aria-current={active ? 'page' : undefined}
      onClick={onClick}
      data-idsk="header-menu-item"
      {...props}
    >
      <span className={contentClasses}>
        <span className="whitespace-nowrap text-[16px] font-bold leading-6 text-[#0B4199]">
          {children}
        </span>
      </span>
    </button>
  );
};

export default HeaderMenuItemCustom;