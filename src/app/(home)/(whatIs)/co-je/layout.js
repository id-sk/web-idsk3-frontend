'use client';

import { usePathname } from 'next/navigation';
import { scrollToTop } from '@/utils/scroll.js';
import ButtonCustom from '@/app/(home)/_components/button/buttonCustom';
import SvgArrowUp from '@/app/(home)/_components/icons/SvgArrowUp';
import ContentNav from '@/app/(home)/_components/content_navigation/index.js';
import { whatIsData } from '@/constants/data.js';
import { toNav } from '@/utils/navigation.js';

// Stránky, ktoré už používajú PageLayout – postupne sem pridávaj ďalšie
const migrated = ['/co-je/principy'];

const WhatIsLayout = ({ children }) => {
  const pathname = usePathname();

  if (migrated.includes(pathname)) return children;

  return (
    <div className="flex flex-1 w-full max-w-[1120px] mx-auto px-4 sm:px-8 min-[1160px]:px-4">
      <ContentNav data={toNav(whatIsData)} />
      <main id="main-content" className="flex-1 min-w-0 pl-0 min-[1120px]:pl-[3.75rem] py-8">
        <div className="relative h-auto">{children}</div>
        <ButtonCustom
          variant="tertiary"
          status="basic"
          iconRight={<SvgArrowUp />}
          onClick={scrollToTop}
          className="-ml-2 mt-8"
        >
          Naspäť hore
        </ButtonCustom>
      </main>
    </div>
  );
};

export default WhatIsLayout;