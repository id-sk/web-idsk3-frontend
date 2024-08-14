'use client'

import React from 'react';

const FocusSection = ({ title, examples }) => {
  return (
    <div>
      {examples.map((example, index) => (
        <div key={index}>
          <h4 className="mt-8 text-xl font-bold tracking-normal leading-custom-26 text-black max-md:max-w-full">{example.title}</h4>
          {example.component}
        </div>
      ))}
    </div>
  );
}

export default FocusSection;
