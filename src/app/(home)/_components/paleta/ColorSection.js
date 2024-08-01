'use client'


import React from 'react';

const ColorSection = ({ title, description, children }) => {
  return (
    <section className="mt-20 max-md:mt-10">
      <h2 className="w-full text-4xl font-black text-black max-md:max-w-full">{title}</h2>
      <p className="mt-5 w-full text-custom-19 tracking-wide leading-7 text-black max-md:max-w-full">{description}</p>
      {children}
    </section>
  );
};

export default ColorSection;