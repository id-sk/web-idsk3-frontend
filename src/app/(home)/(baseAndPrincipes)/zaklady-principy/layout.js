'use client'

import { basicRoutes } from "@/constants/constants.js";
import { scrollToTop } from "@/utils/scroll.js";
import { TextButton } from "@eslovensko/idsk-react";
import Sidebar from "../../_components/sidebar/index.js";
import SvgArrowUp from '/node_modules/@eslovensko/idsk-core/dist/assets/svgIcons/Navigation/arrow_upward.svg';

const BaseLayout = ({ children }) => {
  return (
    // Keďže hlavička a päta sú už v RootLayoute, tu riešime len stred (Sidebar + Obsah)
    <div className="flex flex-1 w-full max-w-[1120px] mx-auto px-4 sm:px-8 lg:px-4 h-full">
      
      <Sidebar data={basicRoutes} />
      
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

export default BaseLayout;