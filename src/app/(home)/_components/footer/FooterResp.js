import Image from "next/image";
import React from "react";

const FooterResp = () => {
  return (
    <footer className="w-full border-t border-solid bg-neutral-100 border-neutral-200">
      
      {/* ZMENA V PADDINGOCH: 
        px-4 (Mobil: 16px) -> sm:px-8 (Tablet od 640px: 32px) -> min-[1160px]:px-4 (Desktop od 1160px: 16px)
        Toto presne kopíruje tvoj navbar.scss!
      */}
      <div className="flex justify-between items-end w-full max-w-[1120px] mx-auto py-12 px-4 sm:px-8 min-[1160px]:px-4 max-md:flex-col max-md:items-start max-md:gap-8">
        
        {/* ĽAVÁ ČASŤ: Texty */}
        <div className="flex flex-col w-[73%] max-md:w-full">
          <p className="text-base tracking-wide text-black">
            Na tomto webovom sídle sa využívajú len nevyhnutné/technické cookies.
          </p>
          <div className="mt-4 flex gap-5 max-md:flex-wrap">
            <a href="https://idsk.gov.sk/co-je/cookies-policy" className="underline hover:text-blue-600">
              Informácie o spracúvaní súborov cookies
            </a>
            <a href="mailto:idsk@mirri.gov.sk" className="underline hover:text-blue-600">
              Kontakt na prevádzkovateľa
            </a>
            <a href="https://idsk2.gov.sk/" className="underline hover:text-blue-600">
              IDSK2
            </a>
          </div>
          <p className="mt-4">
            Prevádzkovateľom služby je Ministerstvo investícií, regionálneho rozvoja a informatizácie SR.
          </p>
          <p className="mt-4">
            Vytvorené v súlade s <a href="https://idsk.gov.sk" className="underline hover:text-blue-600">Jednotným dizajnovým manuálom IDSK</a>.
          </p>
        </div>

        {/* PRAVÁ ČASŤ: Logo */}
        <a href="https://mirri.gov.sk" target="_blank" rel="noopener noreferrer" className="shrink-0 max-md:mt-5">
          <Image
            src="/images/group.svg"
            alt="mirri"
            width={290}
            height={66}
          />
        </a>

      </div>
    </footer>
  );
}

export default FooterResp;