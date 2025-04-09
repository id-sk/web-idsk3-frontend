'use client'

import Image from "next/image";
import React from "react";

const FooterResp = () => {
  return (
    <footer className="flex justify-start items-end px-15 py-12 w-full border-t border-solid bg-neutral-100 border-neutral-200 max-md:px-5 max-md:flex-col max-md:justify-evenly max-md:items-baseline">
      <div className="w-full max-w-[1120px] mx-auto max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-4">
          <div className="flex flex-col w-[73%] max-md:w-full">
            <p className="text-base tracking-wide text-black max-md:mt-10">
              Na tomto webovom sídle sa využívajú len nevyhnutné/technické cookies.
            </p>
            <div className="mt-4 flex gap-5 max-md:flex-wrap">
              <a href="https://idsk.gov.sk/co-je/cookies-policy" className="underline">Informácie o spracúvaní súborov cookies</a>
              <a href="mailto:idsk@mirri.gov.sk" className="underline">Kontakt na prevádzkovateľa</a>
            </div>
            <p className="mt-4">Prevádzkovateľom služby je Ministerstvo investícií, regionálneho rozvoja a informatizácie SR.</p>
            <p className="mt-4">Vytvorené v súlade s <a href="https://idsk.gov.sk" className="underline">Jednotným dizajnovým manuálom IDSK</a>.</p>
          </div>
        </div>
      </div>
      <a href="https://mirri.gov.sk" target="_blank" rel="noopener noreferrer">
        <Image
          src="/images/group.svg"
          alt="mirri"
          width={290}
          height={66}
          className="max-md:mt-5"
        />
      </a>
    </footer>
  );
}

export default FooterResp;
