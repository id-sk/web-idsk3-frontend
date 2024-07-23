'use client'

import React from "react";
import ArrowUpBtn from "@/app/(home)/_components/arrow-up-btn/arrow";

const GithubPage = () => {
    return (
        <div className="pt-12 pb-8">
            <title>Github</title>
            <header>
                <h1 className="text-5xl font-black text-black leading-[55.2px] max-md:mr-1 max-md:max-w-full max-md:text-4xl">
                    Základy a princípy
                </h1>
            </header>
            <p className="mt-8 text-xl tracking-wide leading-7 text-black max-md:mr-1 max-md:max-w-full">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the{" "}
                <span className="text-black">Figma</span>{" "}
            </p>
            <div className='pt-20 mt-6'>
                <ArrowUpBtn />
            </div>
        </div>

    );
}

export default GithubPage;