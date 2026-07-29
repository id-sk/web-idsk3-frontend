'use client';

import ButtonCustom from '@/app/(home)/_components/button/buttonCustom';
import ArrowUpIcon from '@/app/(home)/_components/icons/ArrowUpIcon';
import { scrollToTop } from '@/utils/scroll';

const BackToTop = ({ className = '' }) => (
  <ButtonCustom
    type="button"
    variant="tertiary"
    status="basic"
    iconRight={<ArrowUpIcon className="h-5 w-5" />}
    onClick={scrollToTop}
    className={className}
  >
    Naspäť hore
  </ButtonCustom>
);

export default BackToTop;



