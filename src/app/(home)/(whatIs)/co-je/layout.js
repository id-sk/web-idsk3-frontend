'use client'

import { scrollToTop } from "@/utils/scroll.js";
import { TextButton } from "@eslovensko/idsk-react";
import Sidebar from "../../_components/sidebar/index.js";
import SvgArrowUp from '/node_modules/@eslovensko/idsk-core/dist/assets/svgIcons/Navigation/arrow_upward.svg';
import { idskRoutes } from "@/constants/constants.js";

const WhatIsLayout = ({ children }) => {
  return (
    <div className="flex flex-1 w-full max-w-[1120px] mx-auto px-4 sm:px-8 min-[1160px]:px-4 h-full">
      <Sidebar data={idskRoutes} />
      
      {/* ODSTRÁNENÉ overflow-hidden */}
      <main id="main-content" className="flex-1 pl-0 min-[1120px]:pl-15 py-8"> 
        {/* ODSTRÁNENÉ overflow-auto */}
        <div className="relative h-auto">
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