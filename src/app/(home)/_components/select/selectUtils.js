// select/selectUtils.js
import React from 'react';

export const cx = (...classes) => classes.filter(Boolean).join(' ');

export const sizeClasses = {
  small: 'min-h-[40px] text-[16px] leading-[24px] py-2 pl-4 pr-12',
  medium: 'min-h-[40px] text-[16px] leading-[24px] py-2 pl-4 pr-12',
  large: 'min-h-[48px] text-[19px] leading-[28px] py-2.5 pl-5 pr-12',
};

export const ChevronDownIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export const WarningIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2 1 21h22L12 2Zm1 16h-2v-2h2v2Zm0-4h-2V9h2v5Z" />
  </svg>
);

export const getEnabledIndexes = (options) =>
  options
    .map((option, index) => (option.disabled ? null : index))
    .filter((index) => index !== null);