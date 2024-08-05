'use client'

import React from 'react';
import LinkTable from './LinkTable';

const LinkSection = ({ title, items }) => {
  return (
    <section className="mt-20 w-full max-md:mt-10 max-md:max-w-full">
      <h2 className="text-4xl font-black text-neutral-500">{title}</h2>
      <LinkTable items={items} />
    </section>
  );
};

export default LinkSection;