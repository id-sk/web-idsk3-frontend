'use client';

import React, { useEffect, useId, useRef, useState } from 'react';

const cx = (...classes) => classes.filter(Boolean).join(' ');

const TriangleDownIcon = ({ className = '' }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 10 6"
    className={cx('h-[6px] w-[10px] shrink-0 fill-current', className)}
  >
    <path d="M0 0h10L5 6 0 0Z" />
  </svg>
);

const TriangleUpIcon = ({ className = '' }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 10 6"
    className={cx('h-[6px] w-[10px] shrink-0 fill-current', className)}
  >
    <path d="M0 6h10L5 0 0 6Z" />
  </svg>
);

const DEFAULT_LANGUAGES = [
  { value: 'sk', label: 'Slovenčina', lang: 'sk' },
  /*
  { value: 'en', label: 'English', lang: 'en' },
  { value: 'de', label: 'Deutsch', lang: 'de' },
  { value: 'cs', label: 'Čeština', lang: 'cs' },
  { value: 'hu', label: 'Magyar', lang: 'hu' },
  */
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
  const itemRefs = useRef([]);

  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [internalValue, setInternalValue] = useState(
    defaultValue ?? languages[0]?.value ?? ''
  );

  const currentValue = value ?? internalValue;
  const currentLanguage = languages.find((language) => language.value === currentValue);
  const currentLabel = currentLanguage?.label ?? currentValue;
  const currentLang = currentLanguage?.lang ?? currentValue;
  const selectedIndex = languages.findIndex((language) => language.value === currentValue);

  const closeMenu = () => {
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  const openMenu = (nextIndex = selectedIndex >= 0 ? selectedIndex : 0) => {
    setIsOpen(true);
    setHighlightedIndex(nextIndex);
  };

  const focusItem = (index) => {
    const nextIndex = Math.max(0, Math.min(index, languages.length - 1));

    setHighlightedIndex(nextIndex);
    itemRefs.current[nextIndex]?.focus();
  };

  const selectLanguage = (languageValue) => {
    if (value === undefined) {
      setInternalValue(languageValue);
    }

    onValueChange?.(languageValue);
    closeMenu();
    triggerRef.current?.focus();
  };

  const handleTriggerKeyDown = (event) => {
    switch (event.key) {
      case 'Enter':
      case ' ':
      case 'ArrowDown':
        event.preventDefault();
        openMenu(selectedIndex >= 0 ? selectedIndex : 0);
        break;

      case 'ArrowUp':
        event.preventDefault();
        openMenu(selectedIndex >= 0 ? selectedIndex : languages.length - 1);
        break;

      case 'Escape':
        closeMenu();
        break;

      default:
        break;
    }
  };

  const handleItemKeyDown = (event, index, languageValue) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        focusItem(index + 1 >= languages.length ? 0 : index + 1);
        break;

      case 'ArrowUp':
        event.preventDefault();
        focusItem(index - 1 < 0 ? languages.length - 1 : index - 1);
        break;

      case 'Home':
        event.preventDefault();
        focusItem(0);
        break;

      case 'End':
        event.preventDefault();
        focusItem(languages.length - 1);
        break;

      case 'Enter':
      case ' ':
        event.preventDefault();
        selectLanguage(languageValue);
        break;

      case 'Escape':
        event.preventDefault();
        closeMenu();
        triggerRef.current?.focus();
        break;

      case 'Tab':
        closeMenu();
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    if (!isOpen || highlightedIndex < 0) return;

    itemRefs.current[highlightedIndex]?.focus();
  }, [isOpen, highlightedIndex]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key !== 'Escape') return;

      event.preventDefault();
      closeMenu();
      triggerRef.current?.focus();
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

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
        onClick={() => {
          if (isOpen) {
            closeMenu();
          } else {
            openMenu(selectedIndex >= 0 ? selectedIndex : 0);
          }
        }}
        onKeyDown={handleTriggerKeyDown}
        className={cx(
          'language-picker-trigger',
          'my-[1px] inline-flex min-h-10 items-center gap-1.5 rounded-[5px] px-2 py-2 text-[16px] font-bold leading-6 underline',
          'focus:outline focus:outline-[3px] focus:outline-[#FFF] focus:outline-offset-2',
          'hover:ring-[4px] hover:ring-white',
          'active:bg-[#EFF5FE] active:text-[#0B4199]',
          onDark && !isOpen ? 'text-white' : 'text-[#0B4199]',
          isOpen && 'bg-[#EFF5FE] text-[#0B4199]'
        )}
      >
        <span lang={currentLang} className="min-w-0">
          {currentLabel}
        </span>

        <span aria-hidden="true" className="inline-flex shrink-0 items-center">
          {isOpen ? <TriangleUpIcon /> : <TriangleDownIcon />}
        </span>
      </button>

      {isOpen && (
        <div
          id={menuId}
          role="menu"
          aria-labelledby={triggerId}
          aria-orientation="vertical"
          className="absolute right-0 top-[calc(100%+5px)] z-[110] max-h-[calc(100vh-56px)] min-w-full rounded-[5px] border-2 border-[#BDBDBD] bg-white shadow-[0px_12px_32px_0px_rgba(26,26,26,0.24)]"
        >
          {selectedIndex >= 0 && (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-[-2px] z-[120] h-10 w-[3px] bg-[#0B4199]"
              style={{ top: `${selectedIndex * 40}px` }}
            />
          )}

          <div className="max-h-[calc(100vh-56px)] overflow-y-auto rounded-[3px]">
            <div className="flex flex-col">
              {languages.map((language, index) => {
                const isSelected = language.value === currentValue;
                const isHighlighted = index === highlightedIndex;
                const languageLang = language.lang || language.value;

                return (
                  <button
                    key={language.value}
                    ref={(element) => {
                      itemRefs.current[index] = element;
                    }}
                    type="button"
                    role="menuitemradio"
                    aria-checked={isSelected}
                    tabIndex={-1}
                    lang={languageLang}
                    onMouseEnter={() => setHighlightedIndex(index)}
                    onClick={() => selectLanguage(language.value)}
                    onKeyDown={(event) =>
                      handleItemKeyDown(event, index, language.value)
                    }
                    className={cx(
                      'relative flex min-h-10 w-full items-center rounded-none border-0 px-3 py-2 text-left text-[16px] leading-6 outline-none',
                      'hover:bg-[#F5F5F5] hover:underline hover:decoration-2 hover:underline-offset-2',
                      'focus:bg-[#F5F5F5] focus:underline focus:decoration-2 focus:underline-offset-2 focus:outline focus:outline-[3px] focus:outline-[#FFF] focus:outline-offset-2',
                      isHighlighted && 'bg-[#F5F5F5] underline decoration-2 underline-offset-2',
                      isSelected ? 'font-bold text-[#0B4199]' : 'text-[#212121]'
                    )}
                  >
                    <span lang={languageLang} className="relative z-[2] min-w-0 flex-1">
                      {language.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguagePickerCustom;