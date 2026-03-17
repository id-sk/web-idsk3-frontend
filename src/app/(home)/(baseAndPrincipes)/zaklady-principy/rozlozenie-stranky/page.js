'use client'

import Image from 'next/image'

const GridPage = () => {
    return (
        <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0 text-black">
            <title>Rozloženie stránky a responzívne zobrazenie</title>
            
            <header>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
                    Rozloženie stránky a responzívne zobrazenie
                </h1>
            </header>
            
            <main id="main-content" role="main">
                <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-12">
                    Mriežka slúži na vytvorenie vizuálneho poriadku a usporiadania prvkov v rámci dizajnu. Grid sa skladá z vertikálnych a horizontálnych liniek, ktoré delia dizajn na jednotlivé mriežky, segmenty alebo stĺpce. Prvky sú rozmiestňované na mriežke v rámci definovaných stĺpcov a riadkov, čím sa vytvára jasný vizuálny poriadok a zabezpečuje sa správne rozmiestňovanie jednotlivých prvkov v rámci celého dizajnu.
                </p>

                {/* Mobile */}
                <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-black mt-10 mb-2">
                    Mobile
                </h2>
                <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-6">
                    375px - 520px / 4 stĺpce
                </p>
                <Image
                    src="/images/grid/mobile.png"
                    width={375}
                    height={520}
                    quality={100}
                    alt="Mriežka pre mobilné zariadenia"
                    className="w-full max-w-[375px] h-auto rounded-lg shadow-sm border border-gray-200 mb-12"
                />

                {/* Tablet */}
                <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-black mt-12 mb-2">
                    Tablet
                </h2>
                <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-6">
                    730px / 8 stĺpcov 75px
                </p>
                <Image
                    src="/images/grid/tablet.png"
                    width={730}
                    height={75}
                    quality={100}
                    alt="Mriežka pre tablet"
                    className="w-full h-auto rounded-lg shadow-sm border border-gray-200 mb-12"
                />

                {/* Desktop L */}
                <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-black mt-12 mb-2">
                    Desktop L
                </h2>
                <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-6">
                    1440px / 12 stĺpcov 75px
                </p>
                <Image
                    src="/images/grid/desktop.png"
                    width={1440}
                    height={75}
                    quality={100}
                    alt="Mriežka pre Desktop L"
                    className="w-full h-auto rounded-lg shadow-sm border border-gray-200 mb-12"
                />
            </main>
        </div>
    );
}

export default GridPage;