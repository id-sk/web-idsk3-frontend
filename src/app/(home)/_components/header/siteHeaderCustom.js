'use client';

import React from 'react';

import HeaderCustom from './headerCustom';
import HeaderMainSectionCustom from './headerMainSectionCustom';
import TopBarCustom from './topBarCustom';
import WebsiteNavigationCustom from './websiteNavigationCustom';

const SiteHeaderCustom = ({
  showTopBar = true,
  topBarProps = {},
  headerProps = {},
  mainProps = {},
  navigationItems = [],
  navigationProps = {},
}) => {
  const drawerNavItems = navigationItems.map((item) => {
    if (item.variant === 'dropdown' && item.dropdownItems?.length > 0) {
      return {
        label: item.label,
        href: item.href,
        active: item.active,
        children: item.dropdownItems.map((dropdownItem) => ({
          label: dropdownItem.label,
          href: dropdownItem.href,
          active: dropdownItem.active,
        })),
      };
    }

    return {
      label: item.label,
      href: item.href,
      active: item.active,
    };
  });

  return (
    <HeaderCustom {...headerProps}>
      {showTopBar && <TopBarCustom {...topBarProps} />}

      <HeaderMainSectionCustom
        {...mainProps}
        drawerProps={{
          ...(mainProps.drawerProps || {}),
          navItems: drawerNavItems,
        }}
      />

      {navigationItems.length > 0 && (
        <WebsiteNavigationCustom items={navigationItems} {...navigationProps} />
      )}
    </HeaderCustom>
  );
};

export default SiteHeaderCustom;