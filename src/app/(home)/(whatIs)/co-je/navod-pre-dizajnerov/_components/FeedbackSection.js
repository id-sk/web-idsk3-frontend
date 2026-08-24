import React from 'react';
import {
  SectionBlock,
  Text,
  Ul,
} from '@/app/(home)/_components/content-blocks/ContentBlocks';

export default function FeedbackSection({ index }) {
  return (
    <SectionBlock
      titleString="Spätná väzba a podnety"
      index={index}
    >
      <Text>
        Pomôžte nám zlepšovať dizajnovú knižnicu IDSK. Svoju spätnú väzbu
        pošlite na{' '}
        <a
          href="mailto:idsk@mirri.gov.sk"
          className="text-[#0B4199] underline underline-offset-3 hover:text-[#126DFF] hover:decoration-[3px]"
        >
          idsk@mirri.gov.sk
        </a>
        .
      </Text>

      <Ul>
        <li>
          Ak ste našli chybu v komponente alebo máte návrh na zlepšenie,
          napíšte nám.
        </li>
        <li>
          Ak knižnicu začínate používať, hľadáte odpovede alebo sa chcete
          zapojiť do jej rozvoja ako dizajnér či vývojár, kontaktujte nás.
        </li>
      </Ul>
    </SectionBlock>
  );
}