'use client'
import { scrollToTop } from "@/utils/scroll.js";
import { TextButton } from "@eslovensko/idsk-react";
import FooterResp from "../../_components/footer/FooterResp.js";
import Navbar from "../../_components/navbar/navbar.js";
import Sidebar from "../../_components/sidebar/index.js";
import SvgArrowUp from '/node_modules/@eslovensko/idsk-core/src/assets/svgIcons/Navigation/arrow_upward.svg';
import { idskRoutes } from "@/constants/constants.js";


const WhatIsLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar sidebarData={idskRoutes} />
      <div className="h-screen flex">
        <Sidebar data={idskRoutes} />
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

export default WhatIsLayout;