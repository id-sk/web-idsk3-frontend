'use client';

import React from 'react';

const cx = (...classes) => classes.filter(Boolean).join(' ');

const ChevronIcon = ({ className }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      d="M9 18L15 12L9 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HomeIcon = ({ className }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      d="M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V10.5Z"
      fill="currentColor"
    />
  </svg>
);

const BackIcon = ({ className }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      d="M15 18L9 12L15 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BreadcrumbCustom = ({
  items = [],
  homeHref = '/',
  homeLabel = 'Domov',
  homeVariant = 'text', // 'text' | 'icon'
  ariaLabel = 'Omrvinková navigácia',
  collapseOnMobile = false,
  className = '',
}) => {
  const normalizedItems = [
    {
        href: homeHref,
        label: homeLabel,
        isHome: true,
        homeVariant,
    },
    ...items,
  ];

  const currentIndex = normalizedItems.findIndex((item) => item.current);
  const hasCurrent = currentIndex !== -1;
  const lastIndex = normalizedItems.length - 1;

  const mobileBackItem =
    collapseOnMobile && normalizedItems.length > 1
      ? normalizedItems[normalizedItems.length - 2]
      : null;

  return (
    <nav
      className={cx('text-[16px]/[24px] text-black', className)}
      aria-label={ariaLabel}
    >
      {mobileBackItem && mobileBackItem.href && (
        <a
          href={mobileBackItem.href}
          className="mb-2 hidden items-center gap-1 underline text-[#212121] hover:text-[#0B4199] hover:decoration-[3px] visited:text-[#592999] focus:outline-offset-2 max-[480px]:inline-flex"
        >
          <BackIcon className="h-4 w-4 shrink-0" />
          <span>{mobileBackItem.label}</span>
        </a>
      )}

      <ol
        className={cx(
          'flex flex-wrap items-center gap-y-2',
          collapseOnMobile && 'max-[480px]:hidden'
        )}
      >
        {normalizedItems.map((item, index) => {
          const isLast = index === lastIndex;
          const isCurrent = item.current || (!hasCurrent && isLast);

          return (
            <li
              key={`${item.href || item.label}-${index}`}
              className="flex min-w-0 items-center"
              aria-current={isCurrent ? 'page' : undefined}
            >
              {index > 0 && (
                <ChevronIcon className="mx-2 h-4 w-4 shrink-0 text-[#757575]" />
                )}

                {item.href && !isCurrent ? (
                <a
                    href={item.href}
                    aria-label={item.isHome && item.homeVariant === 'icon' ? item.label : undefined}
                    className="min-w-0 text-[#212121] underline hover:text-[#0B4199] hover:decoration-[3px] visited:text-[#592999] focus:outline focus:outline-[3px] focus:outline-[#D96E00] focus:outline-offset-2"
                >
                    {item.isHome && item.homeVariant === 'icon' ? (
                    <HomeIcon className="h-4 w-4 shrink-0 text-[#212121] hover:text-[#0B4199] visited:text-[#592999]" />
                    ) : (
                    item.label
                    )}
                </a>
                ) : (
                <span className="min-w-0 text-black">
                    {item.isHome && item.homeVariant === 'icon' ? (
                    <>
                        <HomeIcon className="h-4 w-4 shrink-0 text-[#0B4199]" />
                        <span className="sr-only">{item.label}</span>
                    </>
                    ) : (
                    item.label
                    )}
                </span>
                )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadcrumbCustom;