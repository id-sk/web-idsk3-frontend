'use client'

import { pageRoutes } from "@/constants/constants.js";
import React from "react";
import { TextButton } from "@eslovensko/idsk-react";
import SvgArrowUp from '/node_modules/@eslovensko/idsk-core/dist/assets/svgIcons/Navigation/arrow_upward.svg';
import Sidebar from "../../_components/sidebar/index.js";
import { scrollToTop } from "@/utils/scroll.js";

const IdskLayout = ({ children }) => {
  return (
    // Odstránený Navbar, Footer a SkipLink (tie sú už v RootLayout).
    // Obalený rovnako ako BaseLayout, aby to lícovalo na 1120px.
    <div className="flex flex-1 w-full max-w-[1120px] mx-auto px-4 h-full">
      
      <Sidebar data={pageRoutes} />
      
      <main id="main-content" className="flex-1 pl-0 lg:pl-15 py-8 overflow-hidden">
        <div className="relative h-auto overflow-auto">
          {children} 
        </div>
        <TextButton
          icon={<SvgArrowUp />}
          label="Naspäť hore"
          onClick={scrollToTop}
          className="go-up-btn mt-8"
        />
      </main>
      
    </div>
  );
};

export default IdskLayout;