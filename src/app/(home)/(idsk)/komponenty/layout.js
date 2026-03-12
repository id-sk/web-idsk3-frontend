'use client'

import { pageRoutes } from "@/constants/constants.js";
import React from "react";
import { TextButton } from "@eslovensko/idsk-react";
import SvgArrowUp from '/node_modules/@eslovensko/idsk-core/dist/assets/svgIcons/Navigation/arrow_upward.svg';
import Sidebar from "../../_components/sidebar/index.js";
import { scrollToTop } from "@/utils/scroll.js";

const IdskLayout = ({ children }) => {
  return (
    // 1. OPRAVA OKRAJOV: Zmenené lg:px-4 na min-[1160px]:px-4
    <div className="flex flex-1 w-full max-w-[1120px] mx-auto px-4 sm:px-8 min-[1160px]:px-4 h-full">
      
      <Sidebar data={pageRoutes} />
      
      {/* 2. OPRAVA DIERY: Odsadenie obsahu naskočí presne na 1120px spolu so Sidebarom */}
      <main id="main-content" className="flex-1 pl-0 min-[1120px]:pl-15 py-8 overflow-hidden">
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