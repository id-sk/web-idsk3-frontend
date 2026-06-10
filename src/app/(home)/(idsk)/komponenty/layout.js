'use client'

import { pageRoutes } from "@/constants/constants.js";
import React from "react";
import ButtonCustom from '@/app/(home)/_components/button/buttonCustom';
import SvgArrowUp from '/node_modules/@eslovensko/idsk-core/dist/assets/svgIcons/Navigation/arrow_upward.svg';
import Sidebar from "../../_components/sidebar/index.js";
import { scrollToTop } from "@/utils/scroll.js";

const IdskLayout = ({ children }) => {
  return (
    <div className="flex flex-1 w-full max-w-[1120px] mx-auto px-4 sm:px-8 min-[1160px]:px-4 h-full">
      
      <Sidebar data={pageRoutes} />
      
      <main id="main-content" className="flex-1 pl-0 min-[1120px]:pl-[3.75rem] py-8">
        <div className="relative h-auto">
          {children} 
        </div>
        <ButtonCustom variant="tertiary" status="basic" iconRight={<SvgArrowUp />}
            onClick={scrollToTop}
            className="-ml-2 mt-8">
              Naspäť hore
        </ButtonCustom>
      </main>
      
    </div>
  );
};

export default IdskLayout;