'use client';

import React from 'react';

const cx = (...classes) => classes.filter(Boolean).join(' ');

const HeaderCustom = ({
  children,
  sticky = false,
  transparent = false,
  hasNavigation = true,
  className = '',
  ...props
}) => {
  return (
    <header
      data-idsk="header"
      className={cx(
        'w-full font-source-sans-pro shadow-[0_4px_12px_rgba(26,26,26,0.12)]',
        transparent ? 'bg-transparent' : 'bg-white',
        sticky && 'sticky top-0 z-40',
        !hasNavigation && '[&_.idsk-website-nav]:hidden',
        className
      )}
      {...props}
    >
      {children}
    </header>
  );
};

export default HeaderCustom;