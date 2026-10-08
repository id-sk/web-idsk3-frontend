'use client';

import { scrollToTop } from '@/utils/scroll.js';
import ButtonCustom from '@/app/(home)/_components/button/buttonCustom';
import SvgArrowUp from '@/app/(home)/_components/icons/SvgArrowUp';
import ContentNav from '@/app/(home)/_components/content_navigation/index.js';

const PageLayout = ({
  title,
  intro,
  navData = [],
  navLabel = 'Bočné menu',
  children,
}) => {
  return (
    <main
      id="main-content"
      className="flex-1 w-full max-w-[1120px] mx-auto px-4 sm:px-8 min-[1160px]:px-4"
    >
      <header className="max-w-[740px] pt-8 pb-4 text-black">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight md:leading-[55px] mb-6">
          {title}
        </h1>
        {intro}
      </header>

    <div className="flex flex-col min-[1120px]:flex-row">
      {navData.length > 0 && <ContentNav data={navData} ariaLabel={navLabel} />}

      <div className="flex-1 min-w-0 pl-0 min-[1120px]:pl-[3.75rem] py-8">
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
        </div>
      </div>
    </main>
  );
};

export default PageLayout;