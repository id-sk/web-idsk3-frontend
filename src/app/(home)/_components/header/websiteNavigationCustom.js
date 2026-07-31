'use client';

import React, { useState } from 'react';
import HeaderMenuItemCustom from './headerMenuItemCustom';

const cx = (...classes) => classes.filter(Boolean).join(' ');

const WebsiteNavigationCustom = ({
  items = [],
  ariaLabel = 'Hlavná navigácia',
  className = '',
  ...props
}) => {
  const [openItemId, setOpenItemId] = useState(null);

  return (
    <nav
      data-idsk="website-navigation"
      className={cx(
        'idsk-website-nav hidden w-full flex-col items-center bg-white pt-1 min-[730px]:flex',
        className
      )}
      aria-label={ariaLabel}
      {...props}
    >
      <div className="flex w-full max-w-[1120px] items-start px-4">
        <ul className="m-0 flex list-none flex-row gap-4 p-0" role="list">
          {items.map((item) => {
            const itemKey = item.id ?? `${item.label}|${item.href ?? ''}`;

            return (
              <li key={itemKey} className="flex">
                <HeaderMenuItemCustom
                  href={item.href}
                  variant={item.variant}
                  active={item.active}
                  onClick={item.onClick}
                  dropdownItems={item.dropdownItems}
                  open={openItemId === itemKey}
                  defaultOpen={item.defaultOpen}
                  onOpenChange={(nextOpen) => {
                    setOpenItemId(nextOpen ? itemKey : null);
                    item.onOpenChange?.(nextOpen);
                  }}
                >
                  {item.label}
                </HeaderMenuItemCustom>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default WebsiteNavigationCustom;