'use client'

import { scrollToTop } from "@/utils/scroll.js";
import ButtonCustom from '@/app/(home)/_components/button/buttonCustom';
import SvgArrowUp from '/node_modules/@eslovensko/idsk-core/dist/assets/svgIcons/Navigation/arrow_upward.svg';

const WhatIsLayout = ({ children }) => {
  return (
    <div className="flex flex-1 w-full max-w-[1120px] mx-auto px-4 sm:px-8 min-[1160px]:px-4 h-full">
      
      <main id="main-content" className="flex-1 pl-0 py-8"> 
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

export default WhatIsLayout;