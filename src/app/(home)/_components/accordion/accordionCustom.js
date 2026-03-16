// src/app/(home)/_components/accordion/accordionCustom.js
import React from 'react';
import { Accordion } from '@eslovensko/idsk-react';
import './_accordion-custom.scss'; // Importujeme naše tvrdé pravidlá

export const CustomAccordion = ({ className, children, ...props }) => {
  return (
    <Accordion
      // Pridáme našu custom triedu, ale zachováme aj prípadné ďalšie Tailwind triedy zvonku
      className={`custom-accordion-wrapper ${className || ''}`}
      {...props}
    >
      {children}
    </Accordion>
  );
};