'use client'

import { PrimaryButton } from '@eslovensko/idsk-react';
import { useRouter } from "next/navigation";
import Image from 'next/image';

const DeveloperPage = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('https://github.com/id-sk/id-sk-frontend');
    };

    return (
        <div className="flex flex-col max-w-[1000px]">
            <title>Pre vývojárov</title>
            <header>
            <h1 className="my-8">
                Pre vývojárov
            </h1>
            </header>
            <main id="main-content" role="main">
            <p className="text-2xl leading-9 tracking-wide mb-12">
                Ak budete chcieť vytvoriť elektronickú službu pomocou ID-SK, môžete využiť repozitár dostupný na GitHub-e. V repozitári nájdete hlavičku, pätičku a webové komponenty používateľského rozhrania pre elektronickú službu a webové sídlo.
            </p>
            <PrimaryButton
                label="GitHub knižnica ID-SK"
                onClick={handleClick}
                className='my-4'
            />
            <p className="text-custom-19 tracking-wide leading-7 mb-4">
                Sú dva najčastejšie spôsoby, ako začať používať ID-SK Frontend vo vašej aplikácii:
            </p>
            <ol className='text-custom-19 tracking-wide leading-7 mb-4'>
                <li>1. Inštaláciou pomocou NPM (odporúčame)</li>
                <li>2. Inštaláciou kompilovaných súborov</li>
            </ol>
            <h2 className="mb-6">
                1. Inštalácia ID-SK pomocou NPM
            </h2>
            <p className="text-custom-19 tracking-wide leading-7 mb-8">
                Odporúčame nainštalovať si ID-SK Frontend zo správcu balíčkov platformy Node (NPM).
            </p>
            <h3 className="mb-4">
                Ako postupovať pri inštalácii
            </h3>
            <p className="text-custom-19 tracking-wide leading-7 my-8">
                Návod nájdete na stránke Inštalácia ID-SK Frontend pomocou NPM.
            </p>
            <h2 className="mb-4">
                2. Inštalácia ID-SK z dist
            </h2>
            <p className="text-custom-19 tracking-wide leading-7 mb-8">
                Môžete si tiež stiahnuť skompilované a minifikované prvky (CSS, Javascript) z GitHub. Po inštalácii budete môcť vo vašej službe používať kód z dizajn systému ID-SK.
            </p>
            <h3 className="mb-4">
                Obmedzenia
            </h3>
            <p className="text-custom-19 tracking-wide leading-7">
                Pri inštalácii z dist sa používajú kompilované a minifikované verzie šablóny so štýlmi. To znamená, že nebudete môcť:
            </p>
            <ul className='text-custom-19 tracking-wide leading-7 list-disc list-inside'>
                <li>selektívne zahrnúť CSS alebo JavaScript pre jednotlivé komponenty</li>
                <li className="whitespace-nowrap flex-wrap">zostaviť si vlastné štýly alebo komponenty na základe palety alebo typografických či medzerových kombinácií.
                </li>
                <li>prispôsobiť zostavu (napríklad prepísať farby alebo povoliť globálne štýly)</li>
                <li>Použiť komponenty z Nunjucks šablón.</li>
            </ul>
            <p className="text-custom-19 tracking-wide leading-7">
                Ak požadujete niektorú z týchto funkcií, je výhodnejšie nainštalovať ID-SK Frontend pomocou node package manager.
            </p>
            <h3 className="my-6">
                Kroky k inštalácii
            </h3>
            <h2 className="idsk-subtitle my-4">1. Stiahnite si zdroje</h2>
            <p className="text-custom-19 tracking-wide leading-7 my-4">
                Stiahnite si najnovšie kompilované a minifikované verzie šablón štýlov, JavaScript a assetov:
            </p>
            <ul className='text-custom-19 tracking-wide leading-7 list-disc list-inside mb-4'>
                <li>CSS a JS</li>
                <li>Assety</li>
            </ul>
            <h2 className="idsk-subtitle my-4">2. Zahrňte zdroje</h2>
            <p className="text-custom-19 tracking-wide leading-7 my-4">
                Skopírujte celý priečinok assets do rootu vašej služby.
                Podľa nižšie uvedeného príkladu pridajte súbory CSS a JavaScript do šablóny HTML. Tento príklad predpokladá, že ste skopírovali šablóny so štýlmi a JavaScript súbory do /stylesheets a /javascript.
            </p>
            <p className="text-custom-19 tracking-wide leading-7 my-4">
                Ukážka HTML:
            </p>
            <Image
                src="/images/developers/html.svg"
                width={1100}
                height={250}
                quality={100}
                alt="zaškrtávacieho poľa s textom/bez textu"
                className="mt-4 mb-8"
            />
            </main>
        </div>
    );
}

export default DeveloperPage;