'use client';

import React, { useEffect, useRef } from 'react';

const ErrorSummaryCustom = ({
  title = 'Vyskytol sa problém',
  description,
  errors = [], // Očakáva pole objektov: [{ id: 'meno', message: 'Zadajte meno' }]
  className = '',
  ...props
}) => {
  const summaryRef = useRef(null);

  // Zabezpečí presun focusu na prehľad chýb, keď sa objavia nové chyby
  useEffect(() => {
    if (errors.length > 0 && summaryRef.current) {
      summaryRef.current.focus();
    }
  }, [errors]);

  // Ak nie sú žiadne chyby, komponent sa vôbec nevykreslí
  if (!errors || errors.length === 0) return null;

  return (
    <div
      ref={summaryRef}
      className={`
        bg-white text-black p-[20px] mb-8 outline-none
        border-[#C3112B] rounded-lg border-y-2 border-r-2 border-l-[5px]
        focus-visible:ring-[3px] focus-visible:ring-[#d96e00] focus-visible:ring-offset-2
        ${className}
      `}
      role="alert"
      aria-labelledby="error-summary-title"
      tabIndex="-1"
      {...props}
    >
      <h2 id="error-summary-title" className="text-lg sm:text-xl font-bold mb-4">
        {title}
      </h2>
      
      {description && (
        <p className="text-base mb-4">
          {description}
        </p>
      )}

      {/* Zoznam chýb bez odsadenia a bez odrážok (list-none, pl-0) */}
      <ul className="list-none pl-0 m-0 space-y-2">
        {errors.map((error, index) => (
          <li key={index}>
            <a
              href={`#${error.id}`}
              className="
                text-[#0B4199] underline decoration-[1px] underline-offset-3
                hover:text-[#126DFF] hover:decoration-[2px] hover:underline-offset-3
                focus:text-[#126DFF] focus-visible:ring-[3px] focus-visible:ring-[#d96e00] focus-visible:ring-offset-2
                visited:text-[#592999]
                transition-all duration-200
              "
              onClick={(e) => {
                // Hladký presun focusu na chybné pole po kliknutí na link
                e.preventDefault();
                const targetElement = document.getElementById(error.id);
                if (targetElement) {
                  targetElement.focus();
                  targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }}
            >
              {error.message}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ErrorSummaryCustom;