'use client'

import { PrimaryButton } from '@eslovensko/idsk-react';

const DesignersPage = () => {
    
    const handleClick = () => {
        // OPRAVA 1: Na externé weby používame window.open, nie next/router
        window.open('https://www.figma.com/community/file/1581301778555425083', '_blank');
    };

    return (
        // OPRAVA: Zjednotený responzívny obal
        <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0">
            <title>Pre dizajnérov</title>
            
            <header>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
                    Pre dizajnérov
                </h1>
            </header>

            <main id="main-content" role="main">
                {/* OPRAVA 3: Rozdelené do samostatných odstavcov a nasadené štandardné štýly */}
                <div className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-8 space-y-6">
                    <p>
                        V dizajnérskom nástroji Figma nájdete knižnicu dizajnového systému IDSK – knižnicu štýlov, komponentov či vzorov.
                    </p>
                    <p>
                        Všetky súbory sú voľne prístupné na prepoužitie a pre prácu s nimi je nevyhnutné duplikovať súbory alebo skopírovať do nového súboru.
                    </p>
                    <p>
                        Pomocou týchto komponentov je možné vyskladať elektronickú službu a/alebo webové sídlo v IDSK.
                    </p>
                </div>

                <div className="mb-12">
                    <PrimaryButton
                        label="Knižnica IDSK"
                        onClick={handleClick}
                        className="my-4"
                    />
                </div>

                {/* OPRAVA 2: Responzívny obal pre iFrame (aspect-video udrží pomer strán 16:9 na každom displeji) */}
                <div className="w-full aspect-video rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
                    <iframe 
                        className="w-full h-full border-0" 
                        src="https://embed.figma.com/file/1581301778555425083/hf_embed?community_viewer=true&embed_host=fastma&fuid=1567875285555985583&kind=file&page-selector=0&viewer=1" 
                        allowFullScreen 
                        title="Figma pre dizajnérov"
                    ></iframe>
                </div>
            </main>
        </div>
    );
}

export default DesignersPage;