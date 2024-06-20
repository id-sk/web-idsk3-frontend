'use client'

import Image from 'next/image'

const ColorPage = () => {
    return (
        <div className="basic-page">
            <h1 className="my-8">
                Farebná paleta
            </h1>
            <p className="idsk-subtitle mb-16">
                Farebná paleta definuje základné farby, ktoré sú používané pre udržiavanie konzistentnosti vramci rozhrania. Navrhnuté farby su definované tak, aby splňali kontrastné pomery pre nevidiacich a slabozrakých. Farby sú rozdelené do základných skupín podľa účelu použitia.
            </p>
            <h2 className="mb-4">
                Primárna paleta
            </h2>
            <p className="idsk-subtitle mb-8">
                Primárna paleta je sada základných farieb, ktoré sú použité v grafickom dizajne pre vytvorenie konzistentného a súdržného vizuálneho prejavu. Sú to farby, ktoré tvoria základ všetkých ďalších kombinácií a farebných schém v rámci dizajnu.
            </p>
            <Image
                src="/images/farebna-paleta/primarna-paleta.png"
                width={650}
                height={125}
                quality={100}
                alt="primárna paleta"
                className='mb-12'
            />
            <h2 className="mb-4">
                Primárna rozšírená paleta
            </h2>
            <p className="idsk-subtitle mb-8">
                Primárna rozšírená paleta sa používa na doplnenie a rozšírenie primárnej palety. Táto paleta obsahuje ďalšie farby, ktoré sú zvyčajne odvodené od farieb v primárnej palete a slúžia na vytváranie rozmanitých a zaujímavých kombinácií farieb v rámci dizajnu.
            </p>
            <Image
                src="/images/farebna-paleta/primarna-rozsirena.png"
                width={1265}
                height={250}
                quality={100}
                alt="primárna rozšírená paleta"
                className='mb-12'
            />
            <h2 className="mb-4">
                Neutrálna paleta
            </h2>
            <p className="idsk-subtitle mb-8">
                V neutrálnej palete sú farby, ktoré majú nízku intenzitu a zvyčajne sú bezfarebné. Neutrálne farby zvyčajne zahŕňajú odtiene ako biela, čierna, šedá.
            </p>
            <Image
                src="/images/farebna-paleta/neutralna.svg"
                width={1265}
                height={500}
                quality={100}
                alt="neutrálna paleta"
                className='mb-12'
            />
            <h2 className="mb-4">
                Sekundárna paleta
            </h2>
            <p className="idsk-subtitle mb-8">
                Sekundárna paleta sa používa na doplnenie primárnej a rozšírenej palety, slúži na vytvorenie ďalších vizuálnych prvkov. Môže obsahovať aj úplne nové farby, ktoré sú prispôsobené potrebám daného projektu.
            </p>
            <Image
                src="/images/farebna-paleta/sekundarna-paleta.svg"
                width={1265}
                height={500}
                quality={100}
                alt="sekundárna paleta"
                className='mb-12'
            />
            <h2 className="mb-4">
                Upozornenia paleta
            </h2>
            <p className="idsk-subtitle mb-8">
                Farebná paleta upozornení je špecifickým súborom farieb, ktoré sa používajú na vytvorenie vizuálneho upozornenia pre určitý účel. Táto paleta farieb zvyčajne obsahuje farby, ktoré majú vysokú viditeľnosť a sú schopné prilákať pozornosť čitateľa.
            </p>
            <Image
                src="/images/farebna-paleta/upozornenia.svg"
                width={900}
                height={125}
                quality={100}
                alt="upozornenia paleta"
                className='mb-12'
            />
            <h2 className="mb-4">
                Textová paleta
            </h2>
            <p className="idsk-subtitle mb-8">
                Farebná paleta textov zvyčajne obsahuje súbor farieb, ktoré sa používajú na tvorbu textových elementov, ako sú nadpisy, popisy, označenia a odkazy.
            </p>
            <Image
                src="/images/farebna-paleta/textova.svg"
                width={1265}
                height={250}
                quality={100}
                alt="textová paleta"
                className='mb-12'
            />
            <h2 className="mb-4">
                Slovenská paleta
            </h2>
            <p className="idsk-subtitle mb-8">
                Slovenská paleta farieb obsahuje farby, ktoré sú špecifické pre Slovensko a symbolizujú trikolóru, používajú sa napríklad v logu.
            </p>
            <Image
                src="/images/farebna-paleta/slovenska.svg"
                width={1265}
                height={250}
                quality={100}
                alt="slovenská paleta"
                className='mb-12'
            />
        </div>
    );
}

export default ColorPage;