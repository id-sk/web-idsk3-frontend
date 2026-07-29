'use client';

import { handleSkip } from "@/utils/skip";

export default function SkipLinkClient() {
  return (
    <div className="idsk-skip-link__wrapper">
      <a 
        href="#main-content" 
        onClick={handleSkip}
        className="idsk-skip-link text-[#212121] font-medium underline hover:text-[#0B4199] hover:decoration-[3px] hover:underline-offset-[2px]"
      >
        Preskočiť na hlavný obsah
      </a>
    </div>
  );
}