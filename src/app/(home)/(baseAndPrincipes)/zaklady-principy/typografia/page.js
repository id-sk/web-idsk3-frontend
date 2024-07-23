'use client'

import Image from 'next/image'

const TypografiaPage = () => {
    return (
        <div className="component-page">
            <title>Typografia</title>
            <h1 className="my-8">
                Typografia
            </h1>
            <p className="idsk-subtitle mb-16">
                Typografia je súbor rôznych typov písma, ktoré sú odlišné v štýle, veľkosti, šírke riadkovania a vzdialenosti medzi písmenami. Pri definovaní typografie bola definovaná škálovateľnosť v podobe preddefinovaných štylov, ktorých úlohov je správne zobrazenie na rozličných zariadeniach. Ďalším dôvodom potreby škálovania je zabezpečenie správnej čitateľnosti a estetickej prijemnosti v rôznych častiach rozhrania.
            </p>
            <Image
                src="/images/typografia/source-sans-pro.png"
                width={1100}
                height={250}
                quality={100}
                alt="source sans pro štýl"
                className='mt-8 mb-16'
            />
            <Image
                src="/images/typografia/nadpis.png"
                width={1100}
                height={250}
                quality={100}
                alt="nadpis"
                className='mt-8 mb-16'
            />
            <Image
                src="/images/typografia/podnadpis.png"
                width={1100}
                height={250}
                quality={100}
                alt="podnadpis"
                className='mt-8 mb-16'
            />
            <Image
                src="/images/typografia/hlavny-text.png"
                width={1100}
                height={250}
                quality={100}
                alt="hlavný text"
                className='mt-8 mb-16'
            />
            <Image
                src="/images/typografia/popis.png"
                width={1100}
                height={250}
                quality={100}
                alt="popis a tlačidlo"
                className='mt-8 mb-16'
            />
            <Image
                src="/images/typografia/hypertextove-linky.png"
                width={1100}
                height={250}
                quality={100}
                alt="hypertextové linky"
                className='mt-8 mb-16'
            />
        </div>
    );
}

export default TypografiaPage;