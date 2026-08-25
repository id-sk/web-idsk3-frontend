import React from 'react';
import Image from 'next/image';

export default function HorizontalTutorialCard({ title, text, image, link }) {
  return (
    <div className="group relative flex flex-col md:flex-row items-stretch w-full bg-white rounded-[10px] border border-solid border-neutral-200 transition-all hover:outline hover:outline-[4px] hover:outline-[#757575] p-0 m-0">
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="absolute inset-0 z-10 outline-none rounded-[15px] focus:outline focus:outline-[3px] focus:outline-custom-orange focus:outline-offset-2"
      >
        <span className="sr-only">{title} (otvorí sa na novej karte)</span>
      </a>

      <div className="flex relative z-0 w-full rounded-l-[8px] md:w-[35%] shrink-0 min-h-[200px] overflow-hidden bg-gray-100 p-0 m-0">
        <Image 
          src={image} 
          width={800} 
          height={450}
          unoptimized={true} 
          alt="" 
          aria-hidden="true" 
          className="block -ml-[5px] -my-[2px] rounded-l-[8px] w-[calc(100%+5px)] h-[calc(100%+4px)] max-w-none object-cover transition-transform duration-300 group-hover:scale-105" 
        />
      </div>
      
      <div className="flex flex-col flex-1 justify-center p-5 sm:p-6 w-full z-0">
        <h4 className="text-xl sm:text-2xl font-bold tracking-wide leading-8 sm:leading-9 text-[#0B4199] underline underline-offset-3 group-hover:text-[#126DFF] group-hover:decoration-[length:3px] transition-colors">
          {title}
        </h4>
        <p className="mt-2 text-base sm:text-lg leading-6 sm:leading-7 text-black">
          {text}
        </p>
      </div>
    </div>
  );
}