export const metadata = {
  title: 'Návod pre vývojárov | IDSK',
  description: 'Ukážka možností importovania knižnice do vášho projektu.',
};

import React from 'react';
import InformationBanner from '@/app/(home)/_components/information-banner/informationBannerCustom';
import { Text, SectionBlock, Ul, Ol, H3, ExtLink, CodeBlock } from '@/app/(home)/_components/content-blocks/ContentBlocks';

export default function DeveloperPage() {
  return (
    <div className="flex flex-col max-w-[1120px] px-4 sm:px-0 my-8">
      
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
        Pre vývojárov
      </h1>
      
      <Text>
        Pre použitie IDSK vo vašom projekte môžete využiť <ExtLink href="https://github.com/id-sk/idsk3-frontend">repozitár dostupný na GitHub-e</ExtLink>. V repozitári nájdete sadu komponentov používateľského rozhrania pre webové sídlo, elektronickú službu a webovú aplikáciu.
      </Text>
      
      <a 
        href="https://github.com/id-sk/id-sk-frontend" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 self-start px-5 py-3 mt-8 mb-8 text-base font-bold tracking-wide leading-6 text-center text-white bg-blue-600 rounded-md transition-all duration-200 outline-none hover:shadow-none hover:ring-[4px] hover:ring-[#757575] active:bg-[#072c66]"
      >
        <span>GitHub knižnica IDSK</span>
        <span className="sr-only"> (otvorí sa na novej karte)</span>
        <svg className="w-6 h-6 shrink-0" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
      
      <Text>
        Dva najčastejšie spôsoby, ako začať používať IDSK Frontend vo vašej aplikácii:
      </Text>

      <Ol>
        <li>Inštaláciou pomocou NPM (odporúčame)</li>
        <li>Inštaláciou kompilovaných súborov</li>
      </Ol>

      {/* --- SEKCIE --- */}

      <SectionBlock titleString="1. Inštalácia IDSK pomocou NPM">
        <Text>
          Odporúčame nainštalovať si ID-SK Frontend zo správcu balíčkov platformy <ExtLink href="https://www.npmjs.com/package/@id-sk/frontend?activeTab=versions">Node (NPM)</ExtLink>.
        </Text>

        <H3>Ako postupovať pri inštalácii</H3>
        <Text>
          Návod nájdete na stránke Inštalácia IDSK Frontend pomocou NPM.
        </Text>
      </SectionBlock>

      <SectionBlock titleString="2. Inštalácia IDSK z dist">
        <Text>
          Môžete si tiež stiahnuť <ExtLink href="https://github.com/id-sk/idsk3-frontend/tree/main/dist">skompilované a minifikované prvky (CSS, Javascript)</ExtLink> z GitHub. Po inštalácii budete môcť vo vašej službe používať kód z dizajn systému ID-SK.
        </Text>

        <H3>Obmedzenia</H3>
        <Text>
          Pri inštalácii z dist sa používajú kompilované a minifikované verzie šablóny so štýlmi. To znamená, že nebudete môcť:
        </Text>

        <Ul>
          <li>selektívne zahrnúť CSS alebo JavaScript pre jednotlivé komponenty</li>
          <li>zostaviť si vlastné štýly alebo komponenty na základe palety alebo typografických či medzerových kombinácií.</li>
          <li>prispôsobiť zostavu (napríklad prepísať farby alebo povoliť globálne štýly)</li>
          <li>Použiť komponenty z Nunjucks šablón.</li>
        </Ul>
        
        <div className="w-full overflow-hidden my-8">
          <InformationBanner 
            ariaLabel="Odstránenie obmedzení inštaláciou node package manager"
            type="banner"
            variant="basic"
            hideCloseButton={true}
          >
            <div className="p-2 pt-4">
              <h3 className="text-lg sm:text-xl font-bold text-black leading-tight mb-2">
                Odstránenie obmedzení
              </h3>
              <p className="text-sm md:text-base tracking-wide leading-relaxed text-black">
                Ak požadujete niektorú z týchto funkcií, je výhodnejšie nainštalovať IDSK Frontend pomocou node package manager.
              </p>
            </div>
          </InformationBanner>
        </div>
      </SectionBlock>

      <SectionBlock titleString="Kroky k inštalácii">
        <H3>1. Stiahnite si zdroje</H3>
        <Text>
          Stiahnite si najnovšie kompilované a minifikované verzie šablón štýlov, JavaScript a assetov:
        </Text>
        <Ul>
          <li><ExtLink href="https://github.com/id-sk/idsk3-frontend/tree/main/dist/%40id-sk">CSS a JS</ExtLink></li>
          <li><ExtLink href="https://github.com/id-sk/idsk3-frontend/tree/main/dist/assets">Assety</ExtLink></li>
        </Ul>

        <H3>2. Zahrňte zdroje</H3>
        <Text>
          Skopírujte celý priečinok assets do rootu vašej služby. Podľa nižšie uvedeného príkladu pridajte súbory CSS a JavaScript do šablóny HTML.
        </Text>
        
        {/* Tu používame náš nový, čistý komponent pre kód */}
        <CodeBlock 
          language="html"
          title="Ukážka HTML štruktúry"
          subtitle="index.html"
          codeString={`
            <!DOCTYPE html>
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
            </html>
          `}
        />
      </SectionBlock>

    </div>
  );
}