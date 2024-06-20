'use client'

import Navbar from "../../_components/navbar/navbar.js";
import { pageRoutes } from "@/constants/constants.js";
import FooterResp from "../../_components/footer/FooterResp.js";
import React from 'react';
import { TextButton } from "@eslovensko/idsk-react";
import SvgArrowUp from '/node_modules/@eslovensko/idsk-core/dist/assets/svgIcons/Navigation/arrow_upward.svg';
import Sidebar from "../../_components/sidebar/index.js";
import { scrollToTop } from "@/utils/scroll.js";


const IdskLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar sidebarData={pageRoutes} />
      <div className="h-screen flex">
        <Sidebar data={pageRoutes} />
        <main className="flex-1 p-5 overflow-y-auto no-scrollbar">
          {children}
          <TextButton
            icon={<SvgArrowUp />}
            label="Naspäť hore"
            onClick={scrollToTop}
            className="go-up-btn"
          />
        </main>
      </div>
      <FooterResp />
    </div>
  );
};

export default IdskLayout;