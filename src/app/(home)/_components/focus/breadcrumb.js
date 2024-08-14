'use client'

import Image from 'next/image';
import React from 'react';

const BreadcrumbExample = () => {
  const breadcrumbItems = [
    { label: "Domov", link: "#" },
    { label: "Sekcia1", link: "#", active: true },
    { label: "Sekcia2", link: "#" },
    { label: "Sekcia3", link: "#" },
    { label: "Sekcia4", link: "#" },
    { label: "Sekcia5", link: "#", last: true }
  ];

  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2.5 items-center self-start mt-8 max-md:max-w-full">
      {breadcrumbItems.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <div className="flex gap-2.5 items-center my-3 self-stretch w-4 h-full">
              <Image
                src="/images/arrowRight.svg"
                width={100}
                height={100}
                quality={100} className="object-contain self-stretch my-auto w-4 aspect-square"
                alt="" />
            </div>
          )}
          {item.active ? (
            <div className="flex flex-col gap-2.5 justify-center self-stretch p-0.5 my-auto text-base tracking-wide leading-6 text-black whitespace-nowrap rounded-md border-amber-600 border-solid border-[3px]">
              <div className="overflow-hidden self-stretch underline">
                {item.label}
              </div>
            </div>
          ) : (
            <a href={item.link} className={`overflow-hidden self-stretch my-auto text-base tracking-wide leading-6 text-black ${!item.last ? 'underline' : ''} whitespace-nowrap`}>
              {item.label}
            </a>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}

export default BreadcrumbExample;