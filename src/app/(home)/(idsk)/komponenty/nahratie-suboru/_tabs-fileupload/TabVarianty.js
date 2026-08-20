'use client';

import React from 'react';

import FileUploadCustom from '@/app/(home)/_components/inputs/file-upload/FileUploadCustom';

import {
  SectionBlock,
  H3,
  Text,
  ExampleBlock,
} from '@/app/(home)/_components/content-blocks/ContentBlocks';

const formatsDescription = (
  <>
    Podporované formáty:{' '}
    <span className="font-bold">JPG, PNG, DOC, DOCX, PDF</span>
  </>
);

const maxSizeDescription = (
  <>
    Maximálna veľkosť súboru:{' '}
    <span className="font-bold">15 MB</span>
  </>
);

const TabVarianty = () => (
  <div className="animate-fade-in text-black w-full min-w-0">
    <SectionBlock titleString="Varianty a stavy">
      <H3>1. Základný stav</H3>

      <Text className="mb-4">
        Základný stav zobrazuje názov poľa, inštrukciu, podporované formáty,
        maximálnu veľkosť súboru a tlačidlo na výber súboru.
      </Text>

      <ExampleBlock className="mt-4" innerClassName="max-w-[600px]">
        <FileUploadCustom
          id="file-upload-basic"
          title="Nahrajte životopis"
          subtitle="Nahrajte súbor alebo ho sem presuňte."
          formatsText={formatsDescription}
          maxSizeText={maxSizeDescription}
          buttonText="Vyberte súbory"
        />
      </ExampleBlock>

      <H3>2. Stav nahrávania</H3>

      <Text className="mb-4">
        Pri nahrávaní musí byť viditeľný názov súboru a priebeh nahrávania.
        Progress bar je natívny HTML prvok <code>progress</code>.
      </Text>

      <ExampleBlock className="mt-4" innerClassName="max-w-[600px]">
        <FileUploadCustom
          id="file-upload-progress"
          title="Nahrajte prílohu"
          subtitle="Nahrajte súbor alebo ho sem presuňte."
          formatsText={formatsDescription}
          maxSizeText={maxSizeDescription}
          buttonText="Vyberte súbory"
          initialFiles={[
            {
              id: 'uploading-file',
              name: 'potvrdenie-o-prijme.pdf',
              size: 248000,
              status: 'uploading',
              progress: 65,
            },
          ]}
        />
      </ExampleBlock>

      <H3>3. Úspešne nahratý súbor</H3>

      <Text className="mb-4">
        Pri úspešnom nahratí sa zobrazí názov súboru, jeho veľkosť a tlačidlo
        na odstránenie súboru s prístupným názvom.
      </Text>

      <ExampleBlock className="mt-4" innerClassName="max-w-[600px]">
        <FileUploadCustom
          id="file-upload-success"
          title="Nahrajte dokument"
          subtitle="Nahrajte súbor alebo ho sem presuňte."
          formatsText={formatsDescription}
          maxSizeText={maxSizeDescription}
          buttonText="Vyberte súbory"
          initialFiles={[
            {
              id: 'success-file',
              name: 'potvrdenie-o-prijme.pdf',
              size: 312000,
              status: 'success',
            },
          ]}
        />
      </ExampleBlock>

      <H3>4. Chybový stav</H3>

      <Text className="mb-4">
        Chybový stav používa červené orámovanie riadku, výstražnú ikonku a
        textové vysvetlenie chyby.
      </Text>

      <ExampleBlock className="mt-4" innerClassName="max-w-[600px]">
        <FileUploadCustom
          id="file-upload-error"
          title="Nahrajte prílohu"
          subtitle="Nahrajte súbor alebo ho sem presuňte."
          formatsText={formatsDescription}
          maxSizeText={maxSizeDescription}
          buttonText="Vyberte súbory"
          initialFiles={[
            {
              id: 'failed-file',
              name: 'archiv-dokumentov.zip',
              size: 820000,
              status: 'error',
              errorMessage:
                'Nepodarilo sa nahrať súbor. Nahrajte súbor vo formáte JPG, PNG, DOC, DOCX alebo PDF.',
            },
          ]}
        />
      </ExampleBlock>

      <H3>5. Povinné pole s chybou</H3>

      <Text className="mb-4">
        Ak je nahratie súboru povinné, chybové hlásenie musí byť programovo
        prepojené s poľom pomocou <code>aria-describedby</code>.
      </Text>

      <ExampleBlock className="mt-4" innerClassName="max-w-[600px]">
        <FileUploadCustom
          id="file-upload-required-error"
          title="Nahrajte životopis"
          subtitle="Nahrajte súbor alebo ho sem presuňte."
          formatsText={formatsDescription}
          maxSizeText={maxSizeDescription}
          buttonText="Vyberte súbory"
          required
          errorMessage="Životopis je povinný. Nahrajte súbor vo formáte JPG, PNG, DOC, DOCX alebo PDF."
        />
      </ExampleBlock>

      <H3>6. Neaktívny stav</H3>

      <Text className="mb-4">
        Neaktívny komponent nepovoľuje kliknutie, presunutie súboru ani zameranie file inputu.
      </Text>

      <ExampleBlock className="mt-4" innerClassName="max-w-[600px]">
        <FileUploadCustom
          id="file-upload-drag-disabled"
          title="Nahrajte životopis"
          hint="Momentálne nie je možné nahrať súbor."
          subtitle="Nahrajte súbor alebo ho sem presuňte."
          formatsText={formatsDescription}
          maxSizeText={maxSizeDescription}
          buttonText="Vyberte súbory"
          disabled
        />
      </ExampleBlock>

      <H3>7. Variant bez drag and dropu</H3>

      <Text className="mb-4">
        Tento variant používa iba tlačidlo na výber súboru bez drag and drop oblasti.
        Je vhodný pre jednoduchšie formuláre.
      </Text>

      <ExampleBlock className="mt-4" innerClassName="max-w-[600px]">
        <FileUploadCustom
          id="file-upload-no-drag"
          title="Nahrajte životopis"
          hint="Nahrajte jeden súbor so životopisom."
          formatsText={formatsDescription}
          maxSizeText={maxSizeDescription}
          buttonText="Vyberte súbor"
          enableDragAndDrop={false}
          required
        />
      </ExampleBlock>
      
      <H3>8. Variant bez drag and dropu – úspešne vybraný súbor</H3>

      <Text className="mb-4">
        Po úspešnom výbere sa nad tlačidlom zobrazí stavová lišta s názvom súboru,
        veľkosťou a možnosťou odstránenia.
      </Text>

      <ExampleBlock className="mt-4" innerClassName="max-w-[600px]">
        <FileUploadCustom
          id="file-upload-no-drag-success"
          title="Nahrajte dokument"
          hint="Nahrajte jeden dokument."
          formatsText={formatsDescription}
          maxSizeText={maxSizeDescription}
          buttonText="Vyberte súbor"
          enableDragAndDrop={false}
          initialFiles={[
            {
              id: 'no-drag-success-file',
              name: 'potvrdenie-o-prijme.pdf',
              size: 312000,
              status: 'success',
            },
          ]}
        />
      </ExampleBlock>
      
      <H3>9. Variant bez drag and dropu – chybový stav</H3>

      <Text className="mb-4">
        Ak sa súbor nepodarí pridať, zobrazí sa chybová lišta nad tlačidlom a používateľ
        môže súbor odstrániť.
      </Text>

      <ExampleBlock className="mt-4" innerClassName="max-w-[600px]">
        <FileUploadCustom
          id="file-upload-no-drag-error"
          title="Nahrajte prílohu"
          hint="Nahrajte jeden súbor ako prílohu."
          formatsText={formatsDescription}
          maxSizeText={maxSizeDescription}
          buttonText="Vyberte súbor"
          enableDragAndDrop={false}
          initialFiles={[
            {
              id: 'no-drag-error-file',
              name: 'archiv-dokumentov.zip',
              size: 820000,
              status: 'error',
              errorMessage:
                'Nepodarilo sa nahrať súbor. Nahrajte súbor vo formáte JPG, PNG, DOC, DOCX alebo PDF.',
            },
          ]}
        />
      </ExampleBlock>

      <H3>10. Variant bez drag and dropu – neaktívny stav</H3>

      <Text className="mb-4">
        V neaktívnom stave nie je možné otvoriť systémový dialóg na výber súboru.
      </Text>

      <ExampleBlock className="mt-4" innerClassName="max-w-[600px]">
        <FileUploadCustom
          id="file-upload-no-drag-disabled"
          title="Nahrajte životopis"
          hint="Momentálne nie je možné nahrať súbor."
          formatsText={formatsDescription}
          maxSizeText={maxSizeDescription}
          buttonText="Vyberte súbor"
          enableDragAndDrop={false}
          disabled
        />
      </ExampleBlock>

    </SectionBlock>
  </div>
);

export default TabVarianty;