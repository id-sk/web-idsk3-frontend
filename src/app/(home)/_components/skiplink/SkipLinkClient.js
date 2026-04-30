// components/SkipLinkClient.js
'use client';

import { SkipLink } from "@eslovensko/idsk-react";
import { handleSkip } from "@/utils/skip";

export default function SkipLinkClient() {
  return (
    <SkipLink className="text-[#212121] font-medium underline hover:text-[#0B4199] hover:decoration-[3px] hover:underline-offset-[2px] visited:text-[#592999]" onClick={handleSkip}>
      Preskočiť na hlavný obsah
    </SkipLink>
  );
}