'use client'

import { basicRoutes } from "@/constants/constants.js";
import { scrollToTop } from "@/utils/scroll.js";
import { SkipLink, TextButton } from "@eslovensko/idsk-react";
import FooterResp from "../../_components/footer/FooterResp.js";
import Navbar from "../../_components/navbar/navbar.js";
import Sidebar from "../../_components/sidebar/index.js";
import SvgArrowUp from '/node_modules/@eslovensko/idsk-core/dist/assets/svgIcons/Navigation/arrow_upward.svg';
import { handleSkip } from "@/utils/skip.js";


const BaseLayout = ({ children }) => {
  return (
    <div className="flex flex-col relative">
      <SkipLink onClick={handleSkip}>
        Preskočiť na hlavný obsah
      </SkipLink>
      <Navbar sidebarData={basicRoutes} />
      <div className="flex flex-1 h-full">
        <Sidebar data={basicRoutes} />
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

export default BaseLayout;