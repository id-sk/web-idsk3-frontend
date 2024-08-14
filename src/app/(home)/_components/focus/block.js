'use client'

import React from 'react';

const Block = ({ children }) => {
  return (
    <pre className="flex-1 shrink gap-2.5 font-source-sans-pro self-stretch p-2.5 mt-8 w-full text-custom-19 tracking-wide leading-7 text-black bg-neutral-100 max-md:max-w-full">
      <code>{children}</code>
    </pre>
  );
}

export default Block;