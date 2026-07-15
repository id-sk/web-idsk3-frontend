import Image from "next/image";
import React from "react";

const FooterResp = () => {
  return (
    <footer className="w-full border-t border-solid bg-neutral-100 border-neutral-200">
      <div className="flex justify-between items-end w-full max-w-[1120px] mx-auto py-12 px-4 sm:px-8 min-[1160px]:px-4 max-md:flex-col max-md:items-start max-md:gap-8">
        
        {/* ĽAVÁ ČASŤ: Texty */}
        <div className="flex flex-col w-[73%] max-md:w-full [&_a]:text-[#212121] [&_a]:underline [&_a:hover]:text-[#0B4199] [&_a:hover]:decoration-[3px]">
          <p className="text-base tracking-wide text-black">
            Na tomto webovom sídle sa využívajú len nevyhnutné/technické cookies.
          </p>
          <div className="mt-4 flex max-w-[680px] flex-wrap gap-x-5 gap-y-2">
            <a href="https://idsk.gov.sk/co-je/cookies-policy">
              Informácie o spracúvaní súborov cookies
            </a>
            <a href="mailto:idsk@mirri.gov.sk">
              Kontakt na prevádzkovateľa
            </a>
            <a href="https://idsk2.gov.sk/">
              IDSK2
            </a>
            <a href="/mapa-stranok">
              Mapa stránok
            </a>
            <a href="/navrhnut-komponent">
              Navrhnúť komponent
            </a>
          </div>
          <p className="mt-4">
            Prevádzkovateľom služby je Ministerstvo investícií, regionálneho rozvoja a informatizácie SR.
          </p>
          <p className="mt-4">
            Vytvorené v súlade s <a href="https://idsk.gov.sk">Jednotným dizajnovým manuálom IDSK</a>.
          </p>
        </div>

        {/* PRAVÁ ČASŤ: Logo */}
        <a href="https://mirri.gov.sk" target="_blank" rel="noopener noreferrer" className="shrink-0 max-md:mt-5">
          <Image
            src="/images/group.svg"
            alt="Ministerstvo investícií, regionálneho rozvoja a informatizácie Slovenskej republiky"
            width={290}
            height={66}
          />
        </a>

      </div>
    </footer>
  );
}

export default FooterResp;