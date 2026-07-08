'use client';

import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import SiteHeaderCustom from '@/app/(home)/_components/header/siteHeaderCustom';
import Search from '../search/search';

import {
  allRoutes,
  headerNavigationItems,
} from '@/constants/constants';

const Navbar = ({ hideNavigation = false }) => {
  const pathname = usePathname();

  const navigationItems = headerNavigationItems.map((item) => ({
    ...item,
    active: pathname === item.href || pathname.startsWith(`${item.href}/`),
    dropdownItems: item.dropdownItems?.map((dropdownItem) => ({
      ...dropdownItem,
      active: pathname === dropdownItem.href,
    })),
  }));

  return (
    <SiteHeaderCustom
      headerProps={{
        sticky: true,
        hasNavigation: !hideNavigation,
      }}
      topBarProps={{
        officialWebsiteTitle: 'Doména gov.sk je oficiálna',
        officialWebsiteText:
          'Toto je oficiálna webová stránka orgánu verejnej moci Slovenskej republiky. Oficiálne stránky využívajú najmä doménu gov.sk.',
        officialWebsiteLinkHref:
          'https://www.slovensko.sk/sk/agendy/agenda/_organy-verejnej-moci',
        officialWebsiteLinkLabel:
          'Odkazy na jednotlivé webové sídla orgánov verejnej moci nájdete na tomto odkaze.',
        secureWebsiteTitle: 'Táto stránka je zabezpečená',
        secureWebsiteText:
          'Buďte pozorní a vždy sa uistite, že zdieľate informácie iba cez zabezpečenú webovú stránku verejnej správy SR. Zabezpečenú webovú stránku spoznáte podľa webovej adresy začínajúcej https://.',
      }}
      mainProps={{
        logo: (
          <div className="flex items-center gap-4">
            <Image
              src="/images/logotyp.svg"
              alt=""
              sizes="100vw"
              width={48}
              height={48}
              className="h-8 w-8 md:h-12 md:w-12"
            />
          </div>
        ),
        logoHref: '/',
        logoAriaLabel: 'Domovská stránka IDSK 3',
        orgName: 'IDSK 3',
        orgNameAsHeading: false,
        SearchComponent: Search,
        searchProps: {
          pageDetails: allRoutes,
        },
        showMail: false,
        showNotifications: false,
        showLogin: false,
        drawerProps: {
          navLabel: 'Navigácia',
          showUserSection: false,
        },
      }}
      navigationItems={hideNavigation ? [] : navigationItems}
    />
  );
};

export default Navbar;