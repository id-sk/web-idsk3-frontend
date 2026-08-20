import React from 'react';

import ErrorSummaryCustom from '@/app/(home)/_components/error-summary/errorSummaryCustom';
import TextInputCustom from '@/app/(home)/_components/inputs/textInputCustom';

import {
  SectionBlock,
  H3,
  Text,
  ExampleBlock,
} from '@/app/(home)/_components/content-blocks/ContentBlocks';

const TabVarianty = () => {
  const errorsWithoutDescription = [
    {
      id: 'error-summary-variant-email-error',
      targetId: 'error-summary-variant-email',
      message: 'Zadajte e-mailovú adresu v tvare meno@example.com.',
    },
  ];

  const errorsWithDescription = [
    {
      id: 'error-summary-variant-name-error',
      targetId: 'error-summary-variant-name',
      message: 'Meno musí obsahovať aspoň 3 znaky.',
    },
  ];

  return (
    <div className="animate-fade-in text-black w-full min-w-0">
      <SectionBlock titleString="Varianty a stavy">
        <H3>1. Prehľad chýb bez popisu</H3>

        <Text className="mb-4">
          Tento variant použite vtedy, keď nadpis a samotný zoznam chýb
          poskytujú dostatočný kontext.
        </Text>

        <ExampleBlock className="mt-4" innerClassName="max-w-[600px]">
          <ErrorSummaryCustom
            title="Vo formulári sú chyby"
            errors={errorsWithoutDescription}
          />

          <form className="space-y-8 mt-8" noValidate>
            <TextInputCustom
              id="error-summary-variant-email"
              name="email"
              type="email"
              label="Zadajte e-mail"
              value="test@"
              readOnly
              mandatory
              errorMsg="Zadajte e-mailovú adresu v tvare meno@example.com."
            />
          </form>
        </ExampleBlock>

        <H3>2. Prehľad chýb s popisom</H3>

        <Text className="mb-4">
          Popis použite vtedy, keď potrebujete používateľovi krátko vysvetliť,
          čo má urobiť pred pokračovaním.
        </Text>

        <ExampleBlock className="mt-4" innerClassName="max-w-[600px]">
          <ErrorSummaryCustom
            title="Vo formulári sú chyby"
            description="Opravte označené polia a formulár odošlite znova."
            errors={errorsWithDescription}
          />

          <form className="space-y-8 mt-8" noValidate>
            <TextInputCustom
              id="error-summary-variant-name"
              name="name"
              label="Zadajte meno"
              value="Al"
              readOnly
              mandatory
              errorMsg="Meno musí obsahovať aspoň 3 znaky."
            />
          </form>
        </ExampleBlock>
      </SectionBlock>
    </div>
  );
};

export default TabVarianty;