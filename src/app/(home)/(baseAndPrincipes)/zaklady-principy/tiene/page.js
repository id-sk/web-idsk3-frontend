'use client'

import Image from 'next/image'

const ShadowsPage = () => {
    return (
        <div className="component-page">
            <h1 className="my-8">
                Tiene
            </h1>
            <p className="idsk-subtitle mb-16">
                Tiene môžu byť použité na vizuálne oddelenie dôležitých prvkov, ale aj na na vizuálne zdôraznenie konkrétneho prvku, napríklad modálneho okna alebo ikony. Týmto spôsobom sa zvyšuje jeho význam a pritiahne pozornosť čitateľa. Môžu byť použité na vytvorenie efektu hĺbky a 3D vzhľadu.
            </p>
            <Image
                src="/images/shadows/tiene.png"
                width={1485}
                height={250}
                quality={100}
                alt="tiene"
                className='mt-8 mb-16'
            />
        </div>
    );
}

export default ShadowsPage;