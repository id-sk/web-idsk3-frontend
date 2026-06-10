'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const cx = (...classes) => classes.filter(Boolean).join(' ');

const SidebarLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <li 
      className={cx(
        'mb-[7px] rounded-lg transition-all duration-150',
        'hover:ring-[4px] hover:ring-[#757575]',
        'focus-within:outline focus-within:outline-[3px] focus-within:outline-custom-orange focus-within:outline-offset-2',
        
        isActive 
          ? 'bg-[#eff5fe] border-l-[3px] border-solid border-regal-blue rounded-l-none' 
          : 'bg-transparent'
      )}
    >
      <Link
        href={href}
        aria-current={isActive ? 'page' : undefined}
        className={cx(
          'block py-2 pl-[16px] pr-3 tracking-wide select-none outline-none',
          isActive ? 'font-semibold text-regal-blue' : 'text-black'
        )}
      >
        {children}
      </Link>
    </li>
  );
};

const Sidebar = ({ data = [] }) => {
  return (
   <aside className="relative hidden w-72 flex-col bg-white py-8 min-[1120px]:flex">
      <span
        aria-hidden="true"
        className="absolute right-0 top-12 bottom-0 w-[2px] bg-neutral-n400"
      />

      <div className="min-h-[300px] flex-initial rounded-card bg-white py-4 pr-3">
        <div className="mt-3 flex flex-col text-base leading-6 tracking-wide text-black pb-8 sticky">
          <nav aria-label="Bočné menu" className="idsk-sidebar-nav">
            <ul className="ml-0 pt-2 pr-3 text-black list-none">
              {data.map((item) => (
                <SidebarLink key={item.name} href={item.link}>
                  {item.name}
                </SidebarLink>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;