import React from 'react';
import { TabBar, TabBarLink } from '@eslovensko/idsk-react';
import './_tabbar.scss'; // Import tvojich tvrdých pravidiel

// 1. Exportujeme vylepšený obal
export const MyTabBar = ({ children, ...props }) => {
  return (
    <TabBar className="moj-vlastny-tab-bar" {...props}>
      {children}
    </TabBar>
  );
};

// 2. TabBarLink len posunieme ďalej, SCSS si ho nájde samo
export const MyTabLink = TabBarLink;