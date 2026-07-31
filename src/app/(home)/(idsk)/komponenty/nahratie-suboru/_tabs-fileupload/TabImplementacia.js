import React from 'react';

import {
  SectionBlock,
  H4,
  Text,
  Ul,
  Ol,
  CodeBlock,
} from '@/app/(home)/_components/content-blocks/ContentBlocks';

const TabImplementacia = () => {
  const codeClass =
    'bg-neutral-100 border border-neutral-200 font-mono text-sm px-1.5 py-0.5 rounded text-black';

  return (
    <div className="animate-fade-in text-black w-full min-w-0">
      <SectionBlock titleString="Implementácia poľa na nahratie súboru">
        <Text>
          Pre tento komponent nepoužívame pôvodný{' '}
          <code className={codeClass}>DropZone</code> z externej knižnice,
          pretože audit identifikoval problémy s kontrastom, focus indikátorom,
          prístupným názvom tlačidla a ikonovým tlačidlom na odstránenie
          súboru. Namiesto toho používame vlastný komponent postavený nad
          natívnym <code className={codeClass}>&lt;input type=&quot;file&quot;&gt;</code>.
        </Text>

        <Ul>
          <li>názov poľa je programovo prepojený s file inputom,</li>
          <li>
            hint texty sú pripojené cez{' '}
            <code className={codeClass}>aria-describedby</code>,
          </li>
          <li>focus indikátor je viditeľný a kontrastný,</li>
          <li>tlačidlo na výber súboru má kontextový prístupný názov,</li>
          <li>
            tlačidlo na odstránenie súboru má vlastný{' '}
            <code className={codeClass}>aria-label</code>,
          </li>
          <li>stavy nahrávania majú textovú aj vizuálnu spätnú väzbu.</li>
        </Ul>
      </SectionBlock>

      <SectionBlock titleString="Základné použitie">
        <CodeBlock
          language="jsx"
          codeString={`import FileUploadCustom from '@/app/(home)/_components/inputs/fileUploadCustom';

            <FileUploadCustom
                id="file-upload-cv"
                title="Nahrajte životopis"
                subtitle="Nahrajte súbor alebo ho sem presuňte."
                formatsText="Podporované formáty: JPG, PNG, DOC, DOCX, PDF"
                maxSizeText="Maximálna veľkosť súboru: 500 MB"
                buttonText="Vyberte súbory"
                required
            />`}
        />
      </SectionBlock>

      <SectionBlock titleString="Ukážka stavov">
        <div className="mt-4 mb-8">
          <H4>1. Nahrávanie súboru</H4>

          <CodeBlock
            language="jsx"
            codeString={`<FileUploadCustom
                id="file-upload-progress"
                title="Nahrajte prílohu"
                subtitle="Nahrajte súbor alebo ho sem presuňte."
                formatsText="Podporované formáty: JPG, PNG, DOC, DOCX, PDF"
                maxSizeText="Maximálna veľkosť súboru: 500 MB"
                initialFiles={[
                    {
                    id: 'uploading-file',
                    name: 'zivotopis.pdf',
                    size: 248000,
                    status: 'uploading',
                    progress: 65,
                    },
                ]}
            />`}
          />
        </div>

        <div className="mt-12 mb-8">
          <H4>2. Úspešne nahratý súbor</H4>

          <CodeBlock
            language="jsx"
            codeString={`<FileUploadCustom
                id="file-upload-success"
                title="Nahrajte dokument"
                subtitle="Nahrajte súbor alebo ho sem presuňte."
                formatsText="Podporované formáty: JPG, PNG, DOC, DOCX, PDF"
                maxSizeText="Maximálna veľkosť súboru: 500 MB"
                initialFiles={[
                    {
                    id: 'success-file',
                    name: 'potvrdenie-o-prijme.pdf',
                    size: 312000,
                    status: 'success',
                    },
                ]}
            />`}
          />
        </div>

        <div className="mt-12 mb-8">
          <H4>3. Chybový stav</H4>

          <CodeBlock
            language="jsx"
            codeString={`<FileUploadCustom
                id="file-upload-error"
                title="Nahrajte prílohu"
                subtitle="Nahrajte súbor alebo ho sem presuňte."
                formatsText="Podporované formáty: JPG, PNG, DOC, DOCX, PDF"
                maxSizeText="Maximálna veľkosť súboru: 500 MB"
                initialFiles={[
                    {
                    id: 'failed-file',
                    name: 'archiv-dokumentov.zip',
                    status: 'error',
                    errorMessage:
                        'Nepodarilo sa nahrať súbor. Nahrajte súbor vo formáte JPG, PNG, DOC, DOCX alebo PDF.',
                    },
                ]}
            />`}
          />
        </div>
      </SectionBlock>

      <SectionBlock titleString="Technické požiadavky">
        <Text>Pri implementácii dodržte tieto pravidlá:</Text>

        <Ol>
          <li>
            <strong className="block mb-2">Použite natívny file input</strong>
            Komponent musí obsahovať reálny{' '}
            <code className={codeClass}>&lt;input type=&quot;file&quot;&gt;</code>.
          </li>

          <li className="mt-6">
            <strong className="block mb-2">Prepojte hint texty</strong>
            Podporované formáty a maximálnu veľkosť súboru prepojte cez{' '}
            <code className={codeClass}>aria-describedby</code>.
          </li>

          <li className="mt-6">
            <strong className="block mb-2">
              Použite natívny progress indikátor
            </strong>
            Pri nahrávaní použite{' '}
            <code className={codeClass}>&lt;progress&gt;</code> s prístupným
            názvom.
          </li>

          <li className="mt-6">
            <strong className="block mb-2">Oznamujte zmeny stavu</strong>
            Úspešné nahratie alebo odstránenie súboru oznámte cez{' '}
            <code className={codeClass}>aria-live=&quot;polite&quot;</code>.
          </li>

          <li className="mt-6">
            <strong className="block mb-2">
              Nedávajte ikonové tlačidlo bez názvu
            </strong>
            Odstránenie súboru musí mať napríklad{' '}
            <code className={codeClass}>
              aria-label=&quot;Odstrániť súbor názov.pdf&quot;
            </code>.
          </li>

          <li className="mt-6">
            <strong className="block mb-2">
              Nepoužívajte transparentný focus
            </strong>
            Focus indikátor musí byť viditeľný. V tomto komponente používame{' '}
            <code className={codeClass}>#d96e00</code> s hrúbkou 3 px.
          </li>

          <li className="mt-6">
            <strong className="block mb-2">Validujte typ a veľkosť súboru</strong>
            Komponent používa default hodnoty:
            <CodeBlock
              language="js"
              codeString={`accept=".jpg,.jpeg,.png,.doc,.docx,.pdf"
                    maxSize={500 * 1024 * 1024}`}
            />
          </li>
        </Ol>
      </SectionBlock>

      <SectionBlock titleString="Čomu sa vyhnúť">
        <Text className="mb-4">
          Nepoužívajte pattern, v ktorom je vizuálne tlačidlo oddelené od
          významu poľa a nemá prístupný názov s kontextom.
        </Text>

        <CodeBlock
          language="html"
          codeString={`
                <button type="button">
                    Vyberte súbory
                </button>`}
        />

        <Text className="mt-8 mb-4">
          Rovnako nepoužívajte tlačidlo na odstránenie súboru iba so SVG ikonou.
        </Text>

        <CodeBlock
          language="html"
          codeString={`
            <button type="button">
                <svg aria-hidden="true">...</svg>
            </button>`}
        />

        <Text className="mt-8 mb-4">Správne riešenie:</Text>

        <CodeBlock
          language="html"
          codeString={`<button type="button" aria-label="Odstrániť súbor zivotopis.pdf">
                <svg aria-hidden="true" focusable="false">...</svg>
            </button>`}
        />
      </SectionBlock>
    </div>
  );
};

export default TabImplementacia;