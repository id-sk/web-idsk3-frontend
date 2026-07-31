'use client';

import ButtonCustom from '@/app/(home)/_components/button/buttonCustom';
import SvgArrowUp from '@/app/(home)/_components/icons/SvgArrowUp';
import { scrollToTop } from '@/utils/scroll';

const BackToTop = ({ className = '' }) => (
  <ButtonCustom
    type="button"
    variant="tertiary"
    status="basic"
    iconRight={<SvgArrowUp className="h-5 w-5" />}
    onClick={scrollToTop}
    className={className}
  >
    Naspäť hore
  </ButtonCustom>
);

export default BackToTop;



