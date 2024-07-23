'use client'

import { PrimaryButton } from '@eslovensko/idsk-react';
import { useRouter } from "next/navigation";


const DesignersPage = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('https://www.figma.com/design/3tUWjCp6CyJIbMGHeaemnw/IDSK-3?node-id=0-1&t=seo6LK65uZjSzf4m-0');
    };

    return (
        <div className="component-page">
            <title>Pre dizajnérov</title>
            <h1 className="my-8">
                Pre dizajnérov
            </h1>
            <p className="idsk-subtitle mb-16">
                V dizajnérskom nástroji Figma nájdete knižnicu dizajnového systému ID-SK – knižnicu štýlov, komponentov či vzorov.

                Všetky súbory sú voľne prístupné na prepoužitie a pre prácu s nimi je nevyhnutné duplikovať súbory alebo skopírovať do nového súboru.

                Pomocou týchto komponentov je možné vyskladať elektronickú v službu a/alebo webové sídlo v IDSK.
            </p>
            <PrimaryButton
                label="Knižnica ID-SK"
                onClick={handleClick}
                className='my-4'
            />
            <iframe style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2F3tUWjCp6CyJIbMGHeaemnw%2FIDSK-3-(BETA)-(Community)%3Fnode-id%3D0-1%26t%3D98x7BmK9k4hZ3x8b-1" allowFullScreen title='Figma pre dizajnérov'>
            </iframe>
        </div>
    );
}

export default DesignersPage;