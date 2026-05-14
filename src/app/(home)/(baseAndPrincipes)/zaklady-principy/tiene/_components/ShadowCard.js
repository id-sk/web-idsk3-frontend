'use client';

import React from 'react';

const ShadowCard = ({ title, shadowClass }) => (
  <figure className="flex flex-col items-center m-0">
    
    <figcaption className="text-sm sm:text-base font-bold text-black mb-5 text-center">
      {title}
    </figcaption>

    <div
      aria-hidden="true"
      className={`shrink-0 bg-white rounded-card border border-solid border-neutral-n400 h-[125px] w-[125px] ${shadowClass}`}
    />
  </figure>
);

export default ShadowCard;