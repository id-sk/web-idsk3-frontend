'use client';

import React from 'react';
import ShadowCard from './shadowCard';

const shadowData = [
    { title: "Tieň veľký", shadowClass: "shadow-lg-custom" },
    { title: "Tieň stredný", shadowClass: "shadow-md-custom" },
    { title: "Tieň malý", shadowClass: "shadow-sm-custom" },
    { title: "Tieň dialog", shadowClass: "shadow-dialog-custom" },
    { title: "Tieň hlavička", shadowClass: "shadow-header-custom" }
  ];
  

const ShadowSection = () => (
  <div className="flex gap-5 justify-between py-5 pr-3 mt-10 text-custom-19 tracking-wide leading-7 max-md:flex-wrap">
    {shadowData.map((shadow, index) => (
      <ShadowCard key={index} title={shadow.title} shadowClass={shadow.shadowClass} />
    ))}
  </div>
);

export default ShadowSection;
