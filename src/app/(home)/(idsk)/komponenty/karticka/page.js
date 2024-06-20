'use client'

import Image from 'next/image';

const CardPage = () => {
    return (
        <div className="component-page">
            <h1 className="my-8">
                Kartička
            </h1>
            <p className="idsk-subtitle mb-16">
                Primárna funkcia komponentu kartička je vizuálna reprezentácia obsahu článkov alebo podstránok. Prvky, ako sú text a obrázky, by mali byť na kartičke umiestnené spôsobom, ktorý jasne naznačuje ich hierarchiu.
            </p>
            <h2 className="mb-4">
                Použitie kartičky
            </h2>
            <p className="idsk-subtitle mb-8">
                Kartička je komponent obsahujúci stručný popis poprípade tag ale taktiež môže obsahovať obrázok. Slúži, ako navigácia na články alebo podstránky. Celá plocha kartičky je klikateľná, kde po kliku je používateľ presmerovaný na konkrétny obsah.
            </p>
            <h2 className="mt-8 mb-4">
                Varianty
            </h2>
            <p className="idsk-subtitle mb-4">
                Komponent umožňuje použitie 2 variantov:
            </p>
            <ol className='idsk-subtitle mb-4'>
                <li>1. Horizontálna</li>
                <li>2. Vertikálna</li>
            </ol>
            <Image
                src="/images/karticka/varianty-karticky.svg"
                width={1100}
                height={250}
                quality={100}
                alt="varianty kartičky"
                className="mt-4 mb-8"
            />
            <h2 className="mt-8 mb-4">
                Nastavenie
            </h2>
            <p className="idsk-subtitle mb-4">
                1. Variant kartičky základný stav/vybraný stav
            </p>
            <Image
                src="/images/karticka/nastavenie-vybrany-stav.svg"
                width={1100}
                height={250}
                quality={100}
                alt="varianty kartičky základný stav/vybraný stav"
                className="mt-4 mb-8"
            />
            <p className="idsk-subtitle mb-4">
                2. Variant kartičky s obrázkom/bez obrázku
            </p>
            <Image
                src="/images/karticka/nastavenie-s-obrazkom.svg"
                width={1100}
                height={250}
                quality={100}
                alt="kartičky s obrázkom/bez obrázku"
                className="mt-4 mb-8"
            />
        </div>
    );
}

export default CardPage;