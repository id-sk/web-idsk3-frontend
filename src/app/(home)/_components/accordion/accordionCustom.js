// src/app/(home)/_components/accordion/accordionCustom.js
import React from 'react';
import { Accordion } from '@eslovensko/idsk-react';
import './_accordion-custom.scss';

export const CustomAccordion = ({ className, children, ...props }) => {
  return (
    <Accordion
      className={`custom-accordion-wrapper ${className || ''}`}
      {...props}
    >
      {children}
    </Accordion>
  );
};