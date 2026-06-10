'use client';

import { usePathname } from 'next/navigation';
import BreadcrumbCustom from './breadcrumbCustom';
import { allRoutes } from '@/constants/constants'; // uprav cestu podľa seba

const sectionRoutes = {
  '/co-je': 'Čo je IDSK',
  '/zaklady-principy': 'Základy a princípy',
  '/komponenty': 'Komponenty',
  '/vzory': 'Vzory',
};

const AutoBreadcrumbs = () => {
  const pathname = usePathname();

  if (!pathname || pathname === '/') {
    return null;
  }

  const normalizedPathname = pathname.replace(/\/$/, '');

  const currentRoute = allRoutes.find(
    (route) => route.link.replace(/\/$/, '') === normalizedPathname
  );

  const segments = normalizedPathname.split('/').filter(Boolean);

  const items = [];

  if (segments.length > 0) {
    const sectionHref = `/${segments[0]}`;
    const sectionLabel = sectionRoutes[sectionHref];

    if (sectionLabel && sectionHref !== normalizedPathname) {
      items.push({
        href: sectionHref,
        label: sectionLabel,
      });
    }
  }

  items.push({
    label: currentRoute?.name || sectionRoutes[normalizedPathname] || 'Aktuálna stránka',
    current: true,
  });

  return (
    <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-8 min-[1160px]:px-4 mt-8">
      <BreadcrumbCustom
        items={items}
        homeHref="/"
        homeLabel="Domov"
        homeVariant="text"
        collapseOnMobile
      />
    </div>
  );
};

export default AutoBreadcrumbs;