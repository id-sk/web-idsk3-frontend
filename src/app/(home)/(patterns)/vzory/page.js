import Image from "next/image";
import React from "react";


const Vzory404 = () => {
  return (
    <div className="flex flex-col pt-12 pb-8 max-w-[835px]">
      <title>Vzory</title>
      <h1 className="text-5xl font-black text-black leading-[55.2px] max-md:mr-1 max-md:max-w-full max-md:text-4xl">
        Vzory
      </h1>
      <div className="px-1 flex flex-col pt-7 pb-14 mt-8 max-w-full text-2xl tracking-normal leading-9 text-center text-black bg-white rounded-sm border border-solid border-black border-opacity-10 w-[496px] max-md:px-5">
        <Image
          src="/images/404/404.svg"
          width={300}
          height={550}
          quality={100}
          alt="404"
          className="w-full aspect-[1.55]"
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




