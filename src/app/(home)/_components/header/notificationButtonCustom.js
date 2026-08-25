'use client';

import React from 'react';

const cx = (...classes) => classes.filter(Boolean).join(' ');

const NotificationButtonCustom = ({
  icon,
  hasNew = false,
  newLabel = 'Nová notifikácia',
  className = '',
  'aria-label': ariaLabel,
  ...props
}) => {
  const computedAriaLabel =
    hasNew && ariaLabel ? `${ariaLabel} - ${newLabel}` : ariaLabel;

  return (
    <button
      type="button"
      data-idsk="notification-button"
      aria-label={computedAriaLabel}
      className={cx(
        'relative inline-flex min-w-[41px] cursor-pointer items-center justify-center rounded-[5px] px-3 py-2 text-[#0B4199]',
        'hover:ring-[4px] hover:ring-[#757575]',
        'focus:outline focus:outline-[3px] focus:outline-[#D96E00] focus:outline-offset-2 focus:z-10',
        'active:bg-[#EFF5FE]',
        className
      )}
      {...props}
    >
      <span className="relative h-[25px] w-[25px]">
        <span
          aria-hidden="true"
          className="flex h-full w-full items-center justify-center"
        >
          {icon}
        </span>

        {hasNew && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-[14px] top-[2px] h-[9px] w-[9px] rounded-full bg-[#C3112B] shadow-[0_0_0_1.5px_#fff]"
          />
        )}
      </span>
    </button>
  );
};

export default NotificationButtonCustom;