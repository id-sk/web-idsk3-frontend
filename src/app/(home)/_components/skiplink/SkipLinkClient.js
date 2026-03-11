// components/SkipLinkClient.js
'use client';

import { SkipLink } from "@eslovensko/idsk-react";
import { handleSkip } from "@/utils/skip";

export default function SkipLinkClient() {
  return (
    <SkipLink onClick={handleSkip}>
      Preskočiť na hlavný obsah
    </SkipLink>
  );
}