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

  const activeDropdownIndex = dropdownItems.findIndex((item) => item.active);

  const setOpen = (nextOpen) => {
    if (!isControlled) {
      setInternalOpen(nextOpen);
    }

    onOpenChange?.(nextOpen);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key !== 'Escape') return;

      event.preventDefault();
      setOpen(false);
      triggerRef.current?.focus();
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

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
    'relative flex min-h-12 w-full cursor-pointer items-center rounded-[2px] border-0 bg-white px-5 py-2.5 text-left text-[16px] leading-6 tracking-wide outline-none no-underline',
    'hover:bg-[#F5F5F5] hover:underline hover:decoration-2 hover:underline-offset-2',
    'focus:underline-offset-2 focus:outline focus:outline-[3px] focus:outline-[#D96E00] focus:outline-offset-2'
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
            aria-labelledby={triggerId}
            className="absolute left-[-5px] top-[calc(100%+5px)] z-[60] flex w-[249px] flex-col rounded-[5px] border-2 border-[#BDBDBD] bg-white shadow-[0_12px_16px_rgba(26,26,26,0.24)]"
          >
            {activeDropdownIndex >= 0 && (
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-[-2px] z-[70] h-12 w-[3px] bg-[#0B4199]"
                style={{ top: `${6 + activeDropdownIndex * 48}px` }}
              />
            )}

            <ul className="m-0 flex list-none flex-col p-[6px]" role="list">
              {dropdownItems.map((item) => {
                const key = item.id ?? item.href ?? item.label;

                if (item.href) {
                  return (
                    <li key={key} className="m-0 flex w-full p-0">
                      <a
                        href={item.href}
                        aria-current={item.active ? 'page' : undefined}
                        className={cx(
                          dropdownItemClass,
                          item.active ? 'font-bold text-[#0B4199]' : 'text-[#212121]'
                        )}
                        onClick={() => {
                          item.onClick?.();
                          setOpen(false);
                        }}
                      >
                        <span className="relative z-[2] min-w-0 flex-1">
                          {item.label}
                        </span>
                      </a>
                    </li>
                  );
                }

                return (
                  <li key={key} className="m-0 flex w-full p-0">
                    <button
                      type="button"
                      className={cx(
                        dropdownItemClass,
                        item.active ? 'font-bold text-[#0B4199]' : 'text-[#212121]'
                      )}
                      onClick={() => {
                        item.onClick?.();
                        setOpen(false);
                      }}
                    >
                      <span className="relative z-[2] min-w-0 flex-1">
                        {item.label}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
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