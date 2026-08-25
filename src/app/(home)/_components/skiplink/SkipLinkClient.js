"use client";

import { handleSkip } from "@/utils/skip";

export default function SkipLinkClient() {
  return (
    <a
      href="#main-content"
      onClick={handleSkip}
      className="
        fixed left-4 top-4 z-[100]
        -translate-y-[150%]
        rounded bg-[#EFF5FE] px-4 py-3
        font-bold text-[#212121] underline
        transition-transform
        hover:text-[#0B4199]
        hover:decoration-[3px]
        hover:underline-offset-2
        focus:translate-y-0
        focus-visible:outline
        focus-visible:outline-[3px]
        focus-visible:outline-offset-2
        focus-visible:outline-[#D96E00]
        motion-reduce:transition-none
      "
    >
      Preskočiť na hlavný obsah
    </a>
  );
}