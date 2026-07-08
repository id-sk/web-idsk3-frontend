'use client';

import React, { useEffect, useId, useRef, useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from './headerIcons';

const cx = (...classes) => classes.filter(Boolean).join(' ');

const DEFAULT_LANGUAGES = [
  { value: 'sk', label: 'Slovenčina', lang: 'sk' },
  { value: 'en', label: 'English', lang: 'en' },
  { value: 'de', label: 'Deutsch', lang: 'de' },
  { value: 'cs', label: 'Čeština', lang: 'cs' },
  { value: 'hu', label: 'Magyar', lang: 'hu' },
];

const LanguagePickerCustom = ({
  className = '',
  languages = DEFAULT_LANGUAGES,
  value,
  defaultValue,
  onValueChange,
  onDark = false,
}) => {
  const reactId = useId();
  const instanceId = reactId.replace(/:/g, '');
  const triggerId = `language-picker-trigger-${instanceId}`;
  const menuId = `language-picker-menu-${instanceId}`;

  const wrapperRef = useRef(null);
  const triggerRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(
    defaultValue ?? languages[0]?.value ?? ''
  );

  const currentValue = value ?? internalValue;
  const currentLanguage = languages.find((language) => language.value === currentValue);
  const currentLabel = currentLanguage?.label ?? currentValue;
  const currentLang = currentLanguage?.lang ?? currentValue;

  const selectLanguage = (languageValue) => {
    if (value === undefined) {
      setInternalValue(languageValue);
    }

    onValueChange?.(languageValue);
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <div ref={wrapperRef} className={cx('relative z-[110] shrink-0', className)}>
      <button
        ref={triggerRef}
        id={triggerId}
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={isOpen ? menuId : undefined}
        aria-label={`Zmeniť jazyk, zvolený jazyk: ${currentLabel}`}
        onClick={() => setIsOpen((open) => !open)}
        className={cx(
          'my-[1px] inline-flex min-h-10 items-center gap-1 rounded-[5px] py-2 text-[16px] font-bold leading-6 underline',
          'focus:outline focus:outline-[3px] focus:outline-[#D96E00] focus:outline-offset-2',
          'hover:ring-[4px] hover:ring-white',
          'active:bg-[#EFF5FE] active:text-[#0B4199]',
          onDark && !isOpen ? 'text-white' : 'text-[#0B4199]',
          isOpen && 'bg-[#EFF5FE] text-[#0B4199]'
        )}
      >
        <span lang={currentLang}>{currentLabel}</span>

        <span aria-hidden="true">
          {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </span>
      </button>

      {isOpen && (
        <div
          id={menuId}
          role="menu"
          aria-labelledby={triggerId}
          aria-orientation="vertical"
          className="absolute right-0 top-[calc(100%+5px)] z-[110] max-h-[calc(100vh-56px)] min-w-full overflow-y-auto rounded-[5px] border-2 border-[#BDBDBD] bg-white shadow-[0px_12px_32px_0px_rgba(26,26,26,0.24)]"
        >
          {languages.map((language) => {
            const isSelected = language.value === currentValue;
            const languageLang = language.lang || language.value;

            return (
              <button
                key={language.value}
                type="button"
                role="menuitemradio"
                aria-checked={isSelected}
                lang={languageLang}
                onClick={() => selectLanguage(language.value)}
                className={cx(
                  'relative flex min-h-12 w-full items-center rounded-none border-0 px-5 py-2.5 text-left text-[16px] leading-6 outline-none',
                  'hover:bg-[#F5F5F5] hover:underline hover:decoration-2',
                  'focus:bg-[#F5F5F5] focus:underline focus:decoration-2',
                  isSelected ? 'font-bold text-[#0B4199]' : 'text-[#212121]'
                )}
              >
                {isSelected && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 top-0 w-[3px] bg-[#0B4199]"
                  />
                )}

                <span lang={languageLang}>{language.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguagePickerCustom;