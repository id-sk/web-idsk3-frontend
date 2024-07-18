'use client'

import { ArticleCard } from '@eslovensko/idsk-react';
import Image from 'next/image'
import Link from 'next/link';

const FooterPage = () => {
    return (
        <div className="component-page">
            <h1 className="my-8">
                Päta
            </h1>
            <p className="idsk-subtitle mb-16">
                Všetky stránky musia používať štandardizovanú pätičku. Pätička môže ale nemusí obsahovať štrukturované,
                hyperlinkové odkazy na dôležitý obsah. Základnou variáciou je pätička bez sekundárdnej navigácie.
            </p>
            <div className="mb-16">
                <Link href={'https://komponenty.idsk3.gov.sk/components/footer/'}>
                    <ArticleCard>
                        <h4>Kód komponentu</h4>
                        <p className="my-1">HTML verzia na prevzatie</p>
                    </ArticleCard>
                </Link>
            </div>
            <h2 className="mb-4">
                Použitie päty
            </h2>
            <p className="idsk-subtitle mb-8">
                Pätička sa primárne využíva pre webové sídla a je umiestnená stále na konci stránky, roluje sa spoločne
                s obsahom. Komponent obsahuje textové informácie o prevádzkovateľovi webovej stránky a textové odkazy na:
            </p>
            <ol className='idsk-subtitle mb-4'>
                <li>1. vyhlásenie o prístupnosti</li>
                <li>2. priamy kontakt na prevádzkovateľa webového sídla</li>
                <li>3. odkaz na RSS kanál</li>
                <li>4. mapu webového sídla</li>
            </ol>
            <p className="idsk-subtitle mb-8">
                V prípade potreby je možné použiť pätičku s rozšírenou navigáciu, ktorá slúži ako sekundárna navigácia.
                Môžete tam umiestniť napríklad služby, ktoré poskytujete, dôležité zákony alebo štruktúru primárneho menu z hlavičky,
                prípadne iné dôležité informácie. Pätičku je možné v prospech používateľov využiť aj ako rozšírenú sekundárnu navigáciu stránkou.
            </p>
            <Image
                src="/images/pata/pouzitie-paty.png"
                width={1100}
                height={250}
                quality={100}
                alt="použitie päty"
            />
            <p className="idsk-subtitle mb-8">
                V prípade umiestnenia sekundárnej navigácie do pätičky dodržiavajte nasledujúce pravidlá:
            </p>
            <ol className='idsk-subtitle mb-8'>
                <li>1. Hyperlinkové odkazy sú štrukturované do stĺpcov s min. 2 a max. 6 odkazmi na stĺpec.</li>
                <li>2. Každý stĺpec by mal mať vlastný nadpis, ktorý zrozumiteľne a vecne zastreší linky v danom stĺpci.</li>
                <li>3. Stĺpce nemusia obsahovať rovnaký počet linkov.</li>
                <li>4. Štrukturujte navigáciu podľa platných ID-SK pravidiel rozloženia obsahu (tzv. grid)
                    použite rozloženie stránky na tretiny alebo štvrtiny (nepoužívajte iné formy rozloženia).</li>
                <li>5. Stĺpce s navigáciou môžete štrukturovať aj do niekoľkých riadkov, ak je to užitočné pre
                    naplnenie potrieb vašich používateľov.</li>
            </ol>
            <h2 className="my-4">
                Varianty
            </h2>
            <p className="idsk-subtitle mb-4">
                Komponent umožňuje použitie 3 variantov päty:
            </p>
            <ol className='idsk-subtitle mb-4'>
                <li>1. Veľká</li>
                <li>2. Stredná.</li>
                <li>3. Malá.</li>
            </ol>
            <Image
                src="/images/pata/varianty-paty.png"
                width={1100}
                height={250}
                quality={100}
                alt="varianty päty"
                className="my-4"

            />
            <h2 className="mt-8 mb-4">
                Responzivita
            </h2>
            <p className="idsk-subtitle mb-4">
                Zobrazenie vybraných variantov komponentu pätička na responzívnom zariadení. Položky sekundárnej navigácie a ostatné
                hypertextové odkazy sa zalamujú na mobilnom zariadení pod seba.
            </p>
            <Image
                src="/images/pata/responzivita-paty.png"
                width={1100}
                height={250}
                quality={100}
                alt="responzivita päty"
                className="my-4"
            />
        </div>
    );
}

export default FooterPage;