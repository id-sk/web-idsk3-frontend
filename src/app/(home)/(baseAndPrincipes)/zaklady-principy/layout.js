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
    <div className="flex flex-col min-h-screen relative">
      <SkipLink onClick={handleSkip}>
        Preskočiť na hlavný obsah
      </SkipLink>
      <Navbar sidebarData={basicRoutes} />
      <div className="h-screen flex">
        <Sidebar data={basicRoutes} />
        <main className="flex-1 p-5 overflow-y-auto no-scrollbar">
          {children}
          <TextButton
            className='mt-6 go-up-btn'
            icon={<SvgArrowUp />}
            label="Naspäť hore"
            onClick={scrollToTop}
          />
        </main>
      </div>
      <FooterResp />
    </div>
  );
};

export default BaseLayout;