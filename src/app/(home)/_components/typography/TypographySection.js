'use client'

import React from 'react';
import TypographyTable from './TypographyTable';


const TypographySection = ({ title, items }) => {
  return (
    <section className="mt-20 w-full max-md:mt-10 max-md:max-w-full">
      <h2 className="text-4xl leading-custom-45 font-black text-neutral-500">{title}</h2>
      <TypographyTable items={items} />
    </section>
  );
};

export default TypographySection;