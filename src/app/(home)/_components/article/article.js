'use client';

import React from 'react';

const Card = ({ title, content }) => (
  <div
  tabIndex="0" 
  className="flex grow items-start p-4 sm:p-5 mt-5 max-w-full tracking-wide bg-white rounded-xl border border-solid border-neutral-200 hover:outline-3 hover:border-neutral-n600 w-full focus-outline-orange">
    <div className="flex flex-col flex-1 shrink justify-center w-full basis-0 min-w-[200px] sm:min-w-[240px]">
      <div className="flex flex-col">
        <h3 className="text-xl sm:text-2xl font-bold tracking-wide leading-8 sm:leading-9 text-my-blue underline">
          {title}
        </h3>
        <p className="mt-2 text-base sm:text-lg leading-6 sm:leading-7 text-black">
          {content}
        </p>
      </div>
    </div>
  </div>
);

export default Card;
