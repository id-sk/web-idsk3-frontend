'use client'

import Image from "next/image";
import React from "react";


const Article = ({ title, description, src, date }) => (
  <article className="self-center p-5 mt-8 mb-6 ml-5 w-full bg-white rounded-xl border border-solid border-neutral-200 max-w-[1120px] max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <div className="flex flex-col w-[29%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow justify-center self-stretch max-md:mt-10">
          <Image
            src="/images/home-page/blank.png"
            className="w-full aspect-[1.82]"
            width={100}
            height={100}
            quality={100}
            alt="blank"
          />
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[71%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow justify-center tracking-wide leading-[150%] max-md:mt-10 max-md:max-w-full">
          <div className="text-2xl font-bold text-my-blue underline max-md:max-w-full">{title}</div>
          <div className="mt-2.5 text-xl leading-7 text-black max-md:max-w-full">{description}</div>
          <div className="mt-2.5 text-base text-neutral-500 max-md:max-w-full">{date}</div>
        </div>
      </div>
    </div>
  </article>
);

export default Article;