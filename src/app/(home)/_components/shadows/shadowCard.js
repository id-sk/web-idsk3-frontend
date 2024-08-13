'use client';

import React from 'react';

const ShadowCard = ({ title, shadowClass }) => (
  <div className="flex flex-col">
    <div className="self-center">{title}</div>
    <div className={`shrink-0 mt-5 bg-neutral-white rounded-card border border-solid ${shadowClass} border-neutral-n400 h-[125px] w-[125px]`} />
  </div>
);

export default ShadowCard;