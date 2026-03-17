'use client'

import Image from 'next/image';
import Link from 'next/link';
import { InformationBanner } from '@eslovensko/idsk-react';

const DeveloperPage = () => {
    return (
        /* Odstránené prebytočné Title - spravuje Layout alebo Metadata v Next.js */
        <div className="flex flex-col max-w-[1000px] px-4 sm:px-0">
            <header>
                {/* Zjednotený nadpis s WhatIsPage */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] my-8">
                    Pre vývojárov
                </h1>
            </header>

            <main id="main-content" role="main">
                {/* ZMENŠENÝ TEXT: z text-custom-19 na text-base/lg */}
                <p className="text-base md:text-lg tracking-wide leading-relaxed md:leading-8 mb-6 text-black">
                    Pre použitie IDSK vo vašom projekte môžete využiť <a href="https://github.com/id-sk/idsk3-frontend" className="text-my-blue underline hover:text-blue-700">repozitár dostupný na GitHub-e</a>. V repozitári nájdete sadu komponentov používateľského rozhrania pre webové sídlo, elektronickú službu a webovú aplikáciu.
                </p>
                <Link 
                    href="https://github.com/id-sk/id-sk-frontend" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 self-start 
                        px-5 py-3 mt-1 text-base font-bold tracking-wide leading-6 text-center text-white 
                        bg-blue-600 rounded-md transition-all duration-200
                        outline-none
                        hover:shadow-none 
                        hover:ring-[4px] 
                        hover:ring-[#757575]
                    "
                    >
                    <span className="underline">GitHub knižnica IDSK</span>
                    
                    <svg 
                        className="w-6 h-6 shrink-0" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                        />
                    </svg>
                </Link>
                
                <p className="text-base md:text-lg tracking-wide leading-relaxed md:leading-8 mb-4 mt-8 text-black">
                    Dva najčastejšie spôsoby, ako začať používať IDSK Frontend vo vašej aplikácii:
                </p>

                <ol className='text-base md:text-lg tracking-wide leading-relaxed md:leading-8 mb-8 ml-4 list-decimal'>
                    <li>Inštaláciou pomocou NPM (odporúčame)</li>
                    <li>Inštaláciou kompilovaných súborov</li>
                </ol>

                <h2 className="text-xl md:text-2xl font-bold mb-6 text-black">
                    1. Inštalácia IDSK pomocou NPM
                </h2>
                <p className="text-base md:text-lg tracking-wide leading-relaxed md:leading-8 mb-8 text-black">
                    Odporúčame nainštalovať si ID-SK Frontend zo správcu balíčkov platformy <a href="https://www.npmjs.com/package/@id-sk/frontend?activeTab=versions" className="text-my-blue underline">Node (NPM)</a>.
                </p>

                <h3 className="text-lg md:text-xl font-bold mb-4 text-black">
                    Ako postupovať pri inštalácii
                </h3>
                <p className="text-base md:text-lg tracking-wide leading-relaxed md:leading-8 mb-12 text-black">
                    Návod nájdete na stránke Inštalácia IDSK Frontend pomocou NPM.
                </p>

                <h2 className="text-xl md:text-2xl font-bold mb-4 text-black">
                    2. Inštalácia IDSK z dist
                </h2>
                <p className="text-base md:text-lg tracking-wide leading-relaxed md:leading-8 mb-8 text-black">
                    Môžete si tiež stiahnuť <a href="https://github.com/id-sk/idsk3-frontend/tree/main/dist" className="text-my-blue underline">skompilované a minifikované prvky (CSS, Javascript)</a> z GitHub. Po inštalácii budete môcť vo vašej službe používať kód z dizajn systému ID-SK.
                </p>

                <h3 className="text-lg md:text-xl font-bold mb-4 text-black">
                    Obmedzenia
                </h3>
                <p className="text-base md:text-lg tracking-wide leading-relaxed md:leading-8 mb-4 text-black">
                    Pri inštalácii z dist sa používajú kompilované a minifikované verzie šablóny so štýlmi. To znamená, že nebudete môcť:
                </p>

                <ul className='text-base md:text-lg tracking-wide leading-relaxed md:leading-8 list-disc ml-8 mb-8 space-y-2 text-black'>
                    <li>selektívne zahrnúť CSS alebo JavaScript pre jednotlivé komponenty</li>
                    <li>zostaviť si vlastné štýly alebo komponenty na základe palety alebo typografických či medzerových kombinácií.</li>
                    <li>prispôsobiť zostavu (napríklad prepísať farby alebo povoliť globálne štýly)</li>
                    <li>Použiť komponenty z Nunjucks šablón.</li>
                </ul>
                
                <div className="w-full overflow-hidden my-8">
                    <InformationBanner 
                        variant="information" 
                        title="Odstránenie obmedzení"
                        ariaLabel="Oznámenie o inštalácii"
                    >
                        Ak požadujete niektorú z týchto funkcií, je výhodnejšie nainštalovať IDSK Frontend pomocou node package manager.
                    </InformationBanner>
                </div>

                <h2 className="text-xl md:text-2xl font-bold my-6 text-black">
                    Kroky k inštalácii
                </h2>

                <h3 className="text-lg font-bold my-4 text-black">1. Stiahnite si zdroje</h3>
                <p className="text-base md:text-lg tracking-wide leading-relaxed md:leading-8 mb-4 text-black">
                    Stiahnite si najnovšie kompilované a minifikované verzie šablón štýlov, JavaScript a assetov:
                </p>
                <ul className='text-base md:text-lg tracking-wide leading-relaxed md:leading-8 list-disc ml-8 mb-8 text-black'>
                    <li><a href="https://github.com/id-sk/idsk3-frontend/tree/main/dist/%40id-sk" target="_blank" rel="noopener noreferrer" className="text-my-blue underline">CSS a JS</a></li>
                    <li><a href="https://github.com/id-sk/idsk3-frontend/tree/main/dist/assets" target="_blank" rel="noopener noreferrer" className="text-my-blue underline">Assety</a></li>
                </ul>

                <h3 className="text-lg font-bold my-4 text-black">2. Zahrňte zdroje</h3>
                <p className="text-base md:text-lg tracking-wide leading-relaxed md:leading-8 mb-6 text-black">
                    Skopírujte celý priečinok assets do rootu vašej služby. Podľa nižšie uvedeného príkladu pridajte súbory CSS a JavaScript do šablóny HTML.
                </p>
                <div className="my-8 max-w-full w-full bg-[#f3f2f1] border border-[#bfc1c3] rounded-sm">
<div className="bg-[#dee0e2] px-4 py-2 border-b border-[#bfc1c3] flex justify-between items-center">
    <span className="text-sm font-bold text-[#0b0c0c] font-mono">Ukážka HTML štruktúry</span>
    <span className="text-xs text-[#505a5f]">index.html</span>
</div>
<pre className="p-4 overflow-x-auto text-sm sm:text-base leading-6 text-[#0b0c0c] font-mono whitespace-pre-wrap break-words">
{`<!DOCTYPE html>
<html>
<head>
    <title>Ukážka</title>
    <link rel="stylesheet" href="stylesheets/idsk-frontend-[latest version].min.css">
    </head>
<body>
    <button class="govuk-button">Toto je komponent tlačidlo</button>
    
    <script src="javascript/idsk-frontend-[latest version].min.js"></script>
    <script>window.GOVUKFrontend.initAll()</script>
</body>
</html>`}
</pre>
</div>
            </main>
        </div>
    );
}

export default DeveloperPage;