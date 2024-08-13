'use client'

import Image from 'next/image'

const GridPage = () => {
    return (
        <div className="component-page">
            <title>Rozloženie stránky a responzívne zobrazenie</title>
            <header>
            <h1 className="my-8">
            Rozloženie stránky a responzívne zobrazenie
            </h1>
            </header>
            <main id="main-content" role="main">
            <p className="text-2xl tracking-normal leading-9">
            Mriežka slúži na vytvorenie vizuálneho poriadku a usporiadania prvkov v rámci dizajnu. Grid sa skladá z vertikálnych a horizontálnych liniek, ktoré delia dizajn na jednotlivé mriežky, segmenty alebo stĺpce. Prvky sú rozmiešťované na mriežke v rámci definovaných stĺpcov a riadkov, čím sa vytvára jasný vizuálny poriadok a zabezpečuje sa správne rozmiesťovanie jednotlivých prvkov v rámci celého dizajnu.
            </p>
            <h2 className="mt-8 mb-4">
                Mobile
            </h2>
            <p className="idsk-subtitle mb-8">
                375px - 520px / 4 stĺpce
            </p>
            <Image
                src="/images/grid/mobile.png"
                width={375}
                height={520}
                quality={100}
                alt="grid mobil"
                className='mt-8 mb-16'
            />
            <h2 className="mt-8 mb-4">
                Tablet
            </h2>
            <p className="idsk-subtitle mb-8">
                730px / 8 stĺpcov 75px
            </p>
            <Image
                src="/images/grid/tablet.png"
                width={730}
                height={75}
                quality={100}
                alt="grid tablet"
                className='mt-8 mb-16'
            />
            <h2 className="mt-8 mb-4">
                Desktop L
            </h2>
            <p className="idsk-subtitle mb-8">
                1440px / 12 stĺpcov 75px
            </p>
            <Image
                src="/images/grid/desktop.png"
                width={1440}
                height={75}
                quality={100}
                alt="grid desktop L"
                className='mt-8 mb-16'
            />
         </main>
        </div>
    );
}

export default GridPage;