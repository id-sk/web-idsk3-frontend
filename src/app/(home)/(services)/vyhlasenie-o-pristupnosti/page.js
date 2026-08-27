export const metadata = {
  title: 'Vyhlásenie o prístupnosti | IDSK',
  description: 'Vyhlásenie o prístupnosti webového sídla Ministerstva investícií, regionálneho rozvoja a informatizácie SR.',
};

import React from "react";
import {
  Text,
  SectionBlock,
  ExtLink,
  MailLink,
} from '@/app/(home)/_components/content-blocks/ContentBlocks';

export default function VyhlasenieOPristupnostiPage() {
  return (
    <main className="mx-auto my-8 w-full max-w-[1120px] px-4">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
        Vyhlásenie o prístupnosti
      </h1>

      <Text className="!mb-4">
        Ministerstvo investícií, regionálneho rozvoja a informatizácie SR má záujem
        zabezpečiť prístupnosť svojho webového sídla v súlade so zákonom č. 95/2019 Z. z.
        o informačných technológiách vo verejnej správe a o zmene a doplnení niektorých
        zákonov v znení neskorších predpisov (ďalej len „zákon č. 95/2019 Z. z. o ITVS“)
        a príslušnými vykonávacími predpismi.
      </Text>

      <Text className="!mb-4">
        Toto vyhlásenie o prístupnosti sa vzťahuje na webové sídlo{' '}
        <ExtLink href="https://idsk.gov.sk/">https://idsk.gov.sk/</ExtLink>.
      </Text>

      <SectionBlock titleString="Stav súladu">
        <Text>
          Toto webové sídlo je v úplnom súlade so zákonom č. 95/2019 Z. z. o ITVS
          a príslušnými vykonávacími predpismi.
        </Text>
      </SectionBlock>

      <SectionBlock titleString="Vypracovanie tohto vyhlásenia o prístupnosti">
        <Text>
          Toto vyhlásenie bolo vypracované{' '}
          <time dateTime="2026-08-27">27. augusta 2026</time>.
        </Text>
        <Text>
          Vyhodnotenie súladu webového sídla s požiadavkami zákona č. 95/2019 Z. z.
          o ITVS a príslušnými vykonávacími predpismi bolo vykonané samohodnotením.
        </Text>
        <Text>
          Vyhlásenie bolo naposledy aktualizované{' '}
          <time dateTime="2026-08-27">27. augusta 2026</time>.
        </Text>
      </SectionBlock>

      <SectionBlock titleString="Spätná väzba a kontaktné informácie">
        <Text>
          V prípade, že sa na našom webovom sídle vyskytuje obsah, ktorý nie je v súlade
          s pravidlami prístupnosti podľa § 14 ods. 1 vyhlášky Úradu podpredsedu vlády
          Slovenskej republiky pre investície a informatizáciu č. 78/2020 Z. z.
          o štandardoch pre informačné technológie verejnej správy v znení vyhlášky
          č. 546/2021 Z. z., oznámte to, prosím, oddeleniu kvality používateľskej
          skúsenosti a prístupnosti Ministerstva investícií, regionálneho rozvoja
          a informatizácie SR na e-mailovej adrese:{' '}
          <MailLink href="mailto:idsk@mirri.gov.sk">idsk@mirri.gov.sk</MailLink>.
        </Text>
      </SectionBlock>

      <SectionBlock titleString="Vynucovacie konanie">
        <Text className="!mb-4">
          V prípade neuspokojivej odpovede na oznámenie nesúladu webového sídla
          s pravidlami prístupnosti podľa § 14 vyhlášky Úradu podpredsedu vlády
          Slovenskej republiky pre investície a informatizáciu č. 78/2020 Z. z.
          o štandardoch pre informačné technológie verejnej správy v znení vyhlášky
          č. 546/2021 Z. z. v rámci mechanizmu spätnej väzby alebo v prípade
          neuspokojivej odpovede na žiadosť o informáciu alebo obsah, ktorý je vyňatý
          z rozsahu pôsobnosti zákona č. 95/2019 Z. z. o ITVS v rámci mechanizmu spätnej
          väzby, sa môžete obrátiť na Ministerstvo investícií, regionálneho rozvoja
          a informatizácie Slovenskej republiky, ako na subjekt poverený presadzovaním
          Smernice (EÚ) 2016/2102, na adrese:
        </Text>

        <address
          className="
            mb-4 not-italic text-sm leading-5 tracking-[0.5px] text-black
            sm:text-base sm:leading-6
            md:text-[19px] md:leading-7
          "
        >
          Ministerstvo investícií, regionálneho rozvoja a informatizácie Slovenskej republiky<br />
          Pribinova 25<br />
          811 09 Bratislava
        </address>

        <Text>
          alebo na e-mailovej adrese:{' '}
          <MailLink href="mailto:standard@mirri.gov.sk">standard@mirri.gov.sk</MailLink>.
        </Text>
      </SectionBlock>

    </main>
  );
}