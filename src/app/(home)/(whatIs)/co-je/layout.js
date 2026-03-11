'use client'

import { scrollToTop } from "@/utils/scroll.js";
import { TextButton } from "@eslovensko/idsk-react";
import Sidebar from "../../_components/sidebar/index.js";
import SvgArrowUp from '/node_modules/@eslovensko/idsk-core/dist/assets/svgIcons/Navigation/arrow_upward.svg';
import { idskRoutes } from "@/constants/constants.js";

const WhatIsLayout = ({ children }) => {
  return (
    // Zarovnanie rovnako ako pri ostatných stránkach na max. 1120px do stredu
    <div className="flex flex-1 w-full max-w-[1120px] mx-auto px-4 h-full">
      
      <Sidebar data={idskRoutes} />
      
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

export default WhatIsLayout;