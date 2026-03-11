import Image from "next/image";
import React from "react";

const Vzory404 = () => {
  return (
    <div className="flex flex-col max-w-[835px]">
      <title>Vzory</title>
      
      <h1 className="text-5xl font-black text-black leading-[55px] max-md:text-4xl">
        Vzory
      </h1>
      
      {/* Zmenené w-[496px] na max-w-[496px] w-full. 
        Tým pádom to na iPhone nepretečie mimo obrazovku!
      */}
      <div className="flex flex-col pt-7 pb-14 mt-8 w-full max-w-[496px] px-5 text-2xl tracking-normal leading-9 text-center text-black bg-white rounded-sm border border-solid border-black border-opacity-10">
        <Image
          src="/images/404/404.svg"
          width={300}
          height={550}
          quality={100}
          alt="404"
          className="w-full aspect-[1.5]"
        />
        <div className="self-center mt-11 max-md:mt-10">
          Na časti <span className="font-bold">Vzory</span> pilne pracujeme,
          <br />
          čoskoro bude dostupná...
        </div>
      </div>
      
    </div>
  );
}

export default Vzory404;
