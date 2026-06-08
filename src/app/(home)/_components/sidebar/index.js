'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const cx = (...classes) => classes.filter(Boolean).join(' ');

const SidebarLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={cx(
        'block rounded-lg py-2 pl-[4px] text-base tracking-wide transition-colors duration-150 outline-none',
        'pr-[3px]', 
        'focus:outline focus:outline-[3px] focus:outline-custom-orange focus:outline-offset-2',
        isActive
          ? 'bg-[#eff5fe] font-semibold text-regal-blue'
          : 'text-black hover:bg-[#eff5fe]'
      )}
    >
      <span className="inline-block pl-3">{children}</span>
    </Link>
  );
};

const Sidebar = ({ data = [] }) => {
  return (
    <aside className="hidden w-72 flex-col border-r-2 border-solid border-neutral-n400 bg-white py-8 min-[1120px]:flex">
      <div className="min-h-[300px] flex-initial rounded-card bg-white py-4">
        <div className="mt-3 flex flex-col text-base leading-6 tracking-wide text-black pb-8 sticky">
          <nav aria-label="Bočné menu">
            <ul className="ml-0 pl-0 pt-2 pr-3 text-black list-none">
              {data.map((item) => (
                <li key={item.name} className="mb-1">
                  <SidebarLink href={item.link}>
                    {item.name}
                  </SidebarLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;