import React from 'react';

import ErrorSummaryCustom from '@/app/(home)/_components/error-summary/errorSummaryCustom';

import {
  SectionBlock,
  H3,
  Text,
} from '@/app/(home)/_components/content-blocks/ContentBlocks';

const exampleWrapperClass =
  'flex flex-col items-center gap-6 py-10 border-2 border-dashed border-[#757575] rounded-[10px] mb-8 mt-4';

const ExampleTextInput = ({
  id,
  name,
  type = 'text',
  label,
  value,
  errorMsg,
}) => {
  const errorId = `${id}-error`;

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-[19px] leading-[28px] mb-2">
        {label}
        <span aria-hidden="true" className="text-[#C3112B] text-xl ml-1">
          *
        </span>
      </label>

      <input
        id={id}
        name={name}
        type={type}
        value={value}
        readOnly
        aria-invalid="true"
        aria-describedby={errorId}
        className="
            w-full border-2 border-[#C3112B] px-3 py-2 text-[19px] leading-[28px]
            focus:outline focus:outline-[3px] focus:outline-[#d96e00] focus:outline-offset-2
            hover:ring-[4px] hover:ring-[#757575]
        "
      />

      <p id={errorId} className="text-[#C3112B] text-[19px] leading-[28px] mt-2">
        <span>Chyba: </span>
        {errorMsg}
      </p>

    </div>
  );
};

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

        <div className={exampleWrapperClass}>
          <div className="flex flex-col gap-6 w-full max-w-[600px] px-4">
            <ErrorSummaryCustom
              title="Vo formulári sú chyby"
              errors={errorsWithoutDescription}
            />

            <form className="space-y-8" noValidate>
              <ExampleTextInput
                id="error-summary-variant-email"
                name="email"
                type="email"
                label="Zadajte e-mail"
                value="test@"
                errorMsg="Zadajte e-mailovú adresu v tvare meno@example.com."
              />
            </form>
          </div>
        </div>

        <H3>2. Prehľad chýb s popisom</H3>

        <Text className="mb-4">
          Popis použite vtedy, keď potrebujete používateľovi krátko vysvetliť,
          čo má urobiť pred pokračovaním.
        </Text>

        <div className={exampleWrapperClass}>
          <div className="flex flex-col gap-6 w-full max-w-[600px] px-4">
            <ErrorSummaryCustom
              title="Vo formulári sú chyby"
              description="Opravte označené polia a formulár odošlite znova."
              errors={errorsWithDescription}
            />

            <form className="space-y-8" noValidate>
              <ExampleTextInput
                id="error-summary-variant-name"
                name="name"
                label="Zadajte meno"
                value="Al"
                errorMsg="Meno musí obsahovať aspoň 3 znaky."
              />
            </form>
          </div>
        </div>
      </SectionBlock>
    </div>
  );
};

export default TabVarianty;