import React from 'react';

// SEO metadáta (fungujú iba v Server komponentoch)
export const metadata = {
  title: 'Vyhlásenie o prístupnosti | IDSK',
  description: 'Vyhlásenie o prístupnosti pre dizajnový systém IDSK.',
};

export default function VyhlasenieOPristupnostiPage() {
  const IDSK_EMAIL = 'idsk@mirri.gov.sk';

  return (
    <main id="main-content" className="mx-auto w-full max-w-[1120px] px-4 py-8 flex flex-col text-black">
      
      <h1 className="text-[32px] sm:text-[43px] font-bold leading-tight sm:leading-[52px] text-[#212121] mb-6">
        Vyhlásenie o prístupnosti
      </h1>

      <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-10">
        Tento obsah pre vás momentálne pripravujeme a čoskoro bude dostupný. Ak máte akékoľvek otázky, postrehy alebo nápady na vylepšenie prístupnosti, neváhajte nás kontaktovať.
      </p>

      {/* Kontaktný blok bez sivého rámu */}
      <div className="min-w-0 text-left">
        <p className="m-0 text-[19px] leading-7 text-[#212121] mb-6">
          <strong>
            IDSK tím Ministerstva investícií, regionálneho rozvoja a informatizácie Slovenskej republiky.
          </strong>
        </p>

        <div className="flex max-w-full flex-wrap items-center gap-x-2 gap-y-3 text-[19px] leading-7 text-[#212121]">
          <span>E-mail:</span>

          <a
            href={`mailto:${IDSK_EMAIL}`}
            className="
              text-[#0B4199] underline underline-offset-2 font-bold
              hover:text-[#126DFF] hover:decoration-2
              focus:outline focus:outline-[3px] focus:outline-[#D96E00]
              focus:outline-offset-2 focus:rounded-[5px] transition-colors
            "
          >
            {IDSK_EMAIL}
            <span className="sr-only"> (otvorí sa váš predvolený e-mailový klient)</span>
          </a>
        </div>
      </div>
      
    </main>
  );
}