'use client'

import Navbar from "../../_components/navbar/navbar.js";
import { pageRoutes } from "@/constants/constants.js";
import FooterResp from "../../_components/footer/FooterResp.js";
import React from 'react';
import { SkipLink, TextButton } from "@eslovensko/idsk-react";
import SvgArrowUp from '/node_modules/@eslovensko/idsk-core/dist/assets/svgIcons/Navigation/arrow_upward.svg';
import Sidebar from "../../_components/sidebar/index.js";
import { scrollToTop } from "@/utils/scroll.js";
import { handleSkip } from "@/utils/skip.js";


const sortedPageRoutes = pageRoutes.sort((a, b) => a.name.localeCompare(b.name));


const IdskLayout = ({ children }) => {
  return (
    <div className="flex flex-col relative">
      <SkipLink onClick={handleSkip}>
        Preskočiť na hlavný obsah
      </SkipLink>
      <Navbar sidebarData={pageRoutes} />
      <div className="flex flex-1 h-full">
        <Sidebar data={sortedPageRoutes} />
        <main id="main-content" className="flex-1 p-5 overflow-hidden">
          <div className="relative h-auto overflow-auto">
          {children} 
          </div>
          <TextButton
            icon={<SvgArrowUp />}
            label="Naspäť hore"
            onClick={scrollToTop}
            className="go-up-btn"
          />
        </main>
      </div>
      <FooterResp className={`fixed bottom-0 w-full p-4 `} />
    </div>
  );
};

export default IdskLayout;