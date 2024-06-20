'use client'

import Image from 'next/image'

const MarginPage = () => {
    return (
        <div className="component-page">
            <h1 className="my-8">
                Medzery
            </h1>
            <p className="idsk-subtitle mb-16">
                Medzery sú dôležité  pri určovaní vzťahou medzi jednotlivými prvky a prispieva k celkovej prehľadnosti a zrozumiteľnosti dizajnu. Medzera môže byť použitá na oddelenie jedného prvku od druhého, aby sa zvýšila jeho vizuálna dôležitosť a vytvorila sa jasná hierarchia prvkov. Pomáhajú zlepšiť čitateľnosť textu tým, že oddelia riadky alebo odseky a zvýraznia tak jednotlivé časti textu.
            </p>
            <Image
                src="/images/margin/medzery.svg"
                width={1485}
                height={250}
                quality={100}
                alt="medzery"
                className='mt-8 mb-16'
            />
        </div>
    );
}

export default MarginPage;