'use client'

import Image from "next/image";
import React from "react";


const FooterResp = () => {
  return (
    <footer className="flex justify-start items-end px-15 py-12 w-full border-t border-solid bg-neutral-100 border-neutral-200 max-md:px-5 max-md:flex-col max-md:flex-nowrap max-md:justify-evenly max-md:items-baseline">
      <div className="justify-center w-full max-w-[1120px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-base tracking-wide leading-7 text-black max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-wrap">
                <a href="https://idsk2.gov.sk/ochrana-osobnych-udajov" className="underline">Ochrana osobných údajov</a>
                <a href="mailto:idsk@mirri.gov.sk" className="underline">Kontakt na prevádzkovateľa</a>
              </div>
              <p className="mt-5 leading-6 max-md:max-w-full">Prevádzkovateľom služby je Ministerstvo investícií, regionálneho rozvoja a informatizácie SR.</p>
              <p className="mt-5 leading-6 max-md:max-w-full">Na tomto webovom sídle sa využívajú len nevyhnutné/technické cookies. <a href="https://idsk.gov.sk/co-je/cookies-policy" className="underline">Viac informácií o spracovaní súborov cookies</a>.</p>
              <a href="https://idsk.gov.sk" className="mt-5 text-xl max-md:max-w-full">
                <span className="text-base tracking-wide leading-6 text-black">Vytvorené v súlade s </span>
                <span className="text-base tracking-wide leading-7 text-black underline"> IDSK.</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/images/group.svg"
        alt="mirri"
        width={290}
        height={66}
        className="max-md:mt-5"
      />
    </footer>
  );
}

export default FooterResp;