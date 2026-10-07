import React from 'react';
import { SectionBlock, H3, ExampleBlock } from '@/app/(home)/_components/content-blocks/ContentBlocks';
import { Tooltip } from '@/app/(home)/_components/tooltip/tooltip';

const TabVarianty = () => (
    <div className="animate-fade-in text-black w-full min-w-0">

        <SectionBlock titleString="Varianty a stavy">

            <H3>1. Pozícia bubliny – hore, vpravo, dole, vľavo</H3>
            <ExampleBlock className="mt-4" innerClassName="grid grid-cols-1 sm:grid-cols-4 place-items-center gap-12 max-w-[800px]">
                <Tooltip
                    label="Hore"
                    preferredPosition="top"
                    content="Bublina sa zobrazí nad ikonou. Ide o predvolenú pozíciu."
                />
                <Tooltip
                    label="Vpravo"
                    preferredPosition="right"
                    content="Bublina sa zobrazí vpravo od ikony."
                />
                <Tooltip
                    label="Dole"
                    preferredPosition="bottom"
                    content="Bublina sa zobrazí pod ikonou."
                />
                <Tooltip
                    label="Vľavo"
                    preferredPosition="left"
                    content="Bublina sa zobrazí vľavo od ikony."
                />
            </ExampleBlock>

        </SectionBlock>
    </div>
);

export default TabVarianty;