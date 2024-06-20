'use client'

import Image from "next/image";
import Link from "next/link";


const Section = ({ href ,title, description, src }) => (
  <Link href={href ?? "#"}>
    <section className="flex flex-col grow p-5 mt-10 w-full tracking-wide bg-white rounded-xl border border-solid border-neutral-200 max-md:mt-5">
      <Image
        src="/images/home-page/blank.png"
        className="w-full aspect-[1.64]"
        width={100}
        height={100}
        quality={100}
        alt="blank"
      />
      <div className="mt-5 text-2xl font-bold leading-9 text-my-blue underline">{title}</div>
      <div className="mt-2.5 text-xl leading-7 text-black">{description}</div>
    </section>
    </Link>
  );

  export default Section;