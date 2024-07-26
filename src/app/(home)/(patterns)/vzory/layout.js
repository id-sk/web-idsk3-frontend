'use client'

import Navbar from "../../_components/navbar/navbar.js";
import FooterResp from "../../_components/footer/FooterResp.js";
import { SkipLink } from "@eslovensko/idsk-react";
import { handleSkip } from "@/utils/skip.js";


const VzoryLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <SkipLink onClick={handleSkip}>
        Preskočiť na hlavný obsah
      </SkipLink>
      <Navbar />
      <main className="flex-grow mx-12 p-4 mb-4 -my-2">
        {children}
      </main>
      <FooterResp />
    </div>
  );
};

export default VzoryLayout;