'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './sidebar-link.scss';

const SidebarLink = ({ href, children }) => {
  const pathname = usePathname();
  const active = href === pathname;

  return (
    <Link
      href={href}
       className={`sidebar-link ${active ? 'active' : ''}`}
    >
      {children}
    </Link>
  );
};

export default SidebarLink;