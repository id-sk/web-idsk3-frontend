'use client'

import Image from 'next/image'

const IconsPage = () => {
    return (
        <div className="component-page">
            <title>Ikony</title>
            <h1 className="my-8">
                Ikony
            </h1>
            <p className="idsk-subtitle mb-16">
                Ikony sú vizuálne symboly, ktoré zvyčajne predstavujú konkrétny objekt alebo akciu. Slúžia na vizuálne reprezentovanie informácie a často sa používajú na zjednodušenie a zlepšenie používateľského rozhrania. Používanie ikon umožňuje zjednodušiť dizajn a umožňuje používateľom rýchlo identifikovať a pochopiť prvky v aplikácii alebo webovej stránke.
            </p>
            <h2 className="my-8">
                Akcie
            </h2>
            <Image
                src="/images/icons/akcie.png"
                width={1485}
                height={250}
                quality={100}
                alt="akcie"
                className='mt-8 mb-16'
            />
            <h2 className="my-8">
                Upozornenie
            </h2>
            <Image
                src="/images/icons/upozornenie.png"
                width={300}
                height={250}
                quality={100}
                alt="upozornenie"
                className='mt-8 mb-16'
            />
            <h2 className="my-8">
                Audio & Video
            </h2>
            <Image
                src="/images/icons/audio-video.png"
                width={1485}
                height={250}
                quality={100}
                alt="audio & video"
                className='mt-8 mb-16'
            />
            <h2 className="my-8">
                Zariadenia
            </h2>
            <Image
                src="/images/icons/zaradenia.png"
                width={1485}
                height={250}
                quality={100}
                alt="zaradenia"
                className='mt-8 mb-16'
            />
            <h2 className="my-8">
                Kontent
            </h2>
            <Image
                src="/images/icons/kontent.png"
                width={1485}
                height={250}
                quality={100}
                alt="kontent"
                className='mt-8 mb-16'
            />
            <h2 className="my-8">
                Komunikácia
            </h2>
            <Image
                src="/images/icons/komunikacia.png"
                width={1485}
                height={250}
                quality={100}
                alt="komunikácia"
                className='mt-8 mb-16'
            />
            <h2 className="my-8">
                Súbor
            </h2>
            <Image
                src="/images/icons/subor.png"
                width={1485}
                height={250}
                quality={100}
                alt="súbor"
                className='mt-8 mb-16'
            />
            <h2 className="my-8">
                Editor
            </h2>
            <Image
                src="/images/icons/editor.png"
                width={1485}
                height={250}
                quality={100}
                alt="editor"
                className='mt-8 mb-16'
            />
            <h2 className="my-8">
                Hardware
            </h2>
            <Image
                src="/images/icons/hardware.png"
                width={1485}
                height={250}
                quality={100}
                alt="hardware"
                className='mt-8 mb-16'
            />
            <h2 className="my-8">
                Domov
            </h2>
            <Image
                src="/images/icons/domov.png"
                width={1100}
                height={250}
                quality={100}
                alt="domov"
                className='mt-8 mb-16'
            />
            <h2 className="my-8">
                Obrázky
            </h2>
            <Image
                src="/images/icons/obrazky.png"
                width={1485}
                height={250}
                quality={100}
                alt="obrázky"
                className='mt-8 mb-16'
            />
            <h2 className="my-8">
                Mapy
            </h2>
            <Image
                src="/images/icons/mapy.png"
                width={1485}
                height={250}
                quality={100}
                alt="mapy"
                className='mt-8 mb-16'
            />
            <h2 className="my-8">
                Navigácia
            </h2>
            <Image
                src="/images/icons/navigacia.png"
                width={1485}
                height={250}
                quality={100}
                alt="navigácia"
                className='mt-8 mb-16'
            />
            <h2 className="my-8">
                Vyhľadávanie
            </h2>
            <Image
                src="/images/icons/vyhladavanie.png"
                width={1485}
                height={250}
                quality={100}
                alt="vyhľadávanie"
                className='mt-8 mb-16'
            />
            <h2 className="my-8">
                Notifikácie
            </h2>
            <Image
                src="/images/icons/notifikacie.png"
                width={1485}
                height={250}
                quality={100}
                alt="notifikácie"
                className='mt-8 mb-16'
            />
            <h2 className="my-8">
                Miesta
            </h2>
            <Image
                src="/images/icons/miesta.png"
                width={1485}
                height={250}
                quality={100}
                alt="miesta"
                className='mt-8 mb-16'
            />
            <h2 className="my-8">
                Spoločnosť
            </h2>
            <Image
                src="/images/icons/spolocnost.png"
                width={1485}
                height={250}
                quality={100}
                alt="spoločnosť"
                className='mt-8 mb-16'
            />
            <h2 className="my-8">
                Toggle
            </h2>
            <Image
                src="/images/icons/toggle.png"
                width={700}
                height={250}
                quality={100}
                alt="toggle"
                className='mt-8 mb-16'
            />
        </div>
    );
}

export default IconsPage;