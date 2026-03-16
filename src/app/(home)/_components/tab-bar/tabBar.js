import React from 'react';
import { TabBar, TabBarLink } from '@eslovensko/idsk-react';
import './_tabbar.scss'; 

export const MyTabBar = ({ children, ...props }) => {
  return (
    <TabBar className="moj-vlastny-tab-bar" {...props}>
      {children}
    </TabBar>
  );
};

export const MyTabLink = TabBarLink;