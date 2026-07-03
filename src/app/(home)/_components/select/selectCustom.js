'use client';

import React, {
  forwardRef,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';

const cx = (...classes) => classes.filter(Boolean).join(' ');

const ChevronDownIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const WarningIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2 1 21h22L12 2Zm1 16h-2v-2h2v2Zm0-4h-2V9h2v5Z" />
  </svg>
);

const SelectDropdownCustom = forwardRef(
  (
    {
      id,
      name,
      label,
      hint,
      caption,
      error = false,
      errorMsg,
      disabled = false,
      mandatory = false,
      inputSize = 'large',
      fullWidth = false,
      placeholder = 'Vyberte položku',
      options = [],
      value,
      defaultValue = '',
      onValueChange,
      className = '',
    },
    ref
  ) => {
    const generatedId = useId();
    const selectId = id || `select-${generatedId}`;
    const listboxId = `${selectId}-listbox`;
    const hintId = `${selectId}-hint`;
    const captionId = `${selectId}-caption`;
    const errorId = `${selectId}-error`;

    const wrapperRef = useRef(null);
    const typeaheadTimeoutRef = useRef(null);

    const hasError = error || !!errorMsg;
    const isControlled = value !== undefined;

    const [internalValue, setInternalValue] = useState(defaultValue);
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const [typeahead, setTypeahead] = useState('');

    const selectedValue = isControlled ? value : internalValue;
    const selectedOption = options.find((option) => option.value === selectedValue);
    const isEmpty = !selectedOption;

    const selectedIndex = options.findIndex((option) => option.value === selectedValue);
    const enabledOptions = options.filter((option) => !option.disabled);

    const describedBy =
      [
        hint ? hintId : null,
        caption && !hasError ? captionId : null,
        hasError && errorMsg ? errorId : null,
      ]
        .filter(Boolean)
        .join(' ') || undefined;

    const sizeClasses = {
      small: 'min-h-[40px] text-[16px] leading-[24px] py-2 pl-4 pr-12',
      medium: 'min-h-[40px] text-[16px] leading-[24px] py-2 pl-4 pr-12',
      large: 'min-h-[48px] text-[19px] leading-[28px] py-2.5 pl-5 pr-12',
    };

    const setValue = (newValue) => {
      if (!isControlled) {
        setInternalValue(newValue);
      }

      if (onValueChange) {
        onValueChange(newValue);
      }
    };

    const getEnabledIndexes = () =>
      options
        .map((option, index) => (option.disabled ? null : index))
        .filter((index) => index !== null);

    const openDropdown = () => {
      if (disabled) return;

      const firstEnabledIndex = options.findIndex((option) => !option.disabled);
      const nextIndex = selectedIndex >= 0 ? selectedIndex : firstEnabledIndex;

      setIsOpen(true);
      setHighlightedIndex(nextIndex);
    };

    const closeDropdown = () => {
      setIsOpen(false);
      setHighlightedIndex(-1);
      setTypeahead('');
    };

    const selectOption = (option) => {
      if (!option || option.disabled) return;

      setValue(option.value);
      closeDropdown();
    };

    const moveHighlight = (direction) => {
      const enabledIndexes = getEnabledIndexes();

      if (enabledIndexes.length === 0) return;

      const currentEnabledPosition = enabledIndexes.indexOf(highlightedIndex);

      if (currentEnabledPosition === -1) {
        setHighlightedIndex(enabledIndexes[0]);
        return;
      }

      const nextPosition =
        direction === 'down'
          ? Math.min(currentEnabledPosition + 1, enabledIndexes.length - 1)
          : Math.max(currentEnabledPosition - 1, 0);

      setHighlightedIndex(enabledIndexes[nextPosition]);
    };

    const moveHighlightByPage = (direction) => {
      const enabledIndexes = getEnabledIndexes();

      if (enabledIndexes.length === 0) return;

      const currentEnabledPosition = enabledIndexes.indexOf(highlightedIndex);
      const startPosition = currentEnabledPosition === -1 ? 0 : currentEnabledPosition;

      const pageSize = 5;

      const nextPosition =
        direction === 'down'
          ? Math.min(startPosition + pageSize, enabledIndexes.length - 1)
          : Math.max(startPosition - pageSize, 0);

      setHighlightedIndex(enabledIndexes[nextPosition]);
    };

    const findByTypeahead = (searchTerm) => {
      const normalizedSearchTerm = searchTerm.toLowerCase();

      if (!normalizedSearchTerm) return;

      const startIndex = highlightedIndex >= 0 ? highlightedIndex + 1 : 0;

      const orderedOptions = [
        ...options.slice(startIndex),
        ...options.slice(0, startIndex),
      ];

      const foundOption = orderedOptions.find(
        (option) =>
          !option.disabled &&
          option.label.toLowerCase().startsWith(normalizedSearchTerm)
      );

      if (!foundOption) return;

      const foundIndex = options.findIndex(
        (option) => option.value === foundOption.value
      );

      setHighlightedIndex(foundIndex);

      if (!isOpen) {
        setValue(foundOption.value);
      }
    };

    const handleTypeahead = (event) => {
      if (
        event.key.length !== 1 ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey
      ) {
        return false;
      }

      const nextTypeahead = `${typeahead}${event.key}`;

      setTypeahead(nextTypeahead);
      findByTypeahead(nextTypeahead);

      window.clearTimeout(typeaheadTimeoutRef.current);
      typeaheadTimeoutRef.current = window.setTimeout(() => {
        setTypeahead('');
      }, 700);

      return true;
    };

    const handleKeyDown = (event) => {
      if (disabled) return;

      switch (event.key) {
        case 'Enter':
        case ' ':
          event.preventDefault();

          if (!isOpen) {
            openDropdown();
            return;
          }

          selectOption(options[highlightedIndex]);
          break;

        case 'ArrowDown':
          event.preventDefault();

          if (!isOpen) {
            openDropdown();
            return;
          }

          moveHighlight('down');
          break;

        case 'ArrowUp':
          event.preventDefault();

          if (!isOpen) {
            openDropdown();
            return;
          }

          moveHighlight('up');
          break;

        case 'PageDown':
          event.preventDefault();

          if (!isOpen) {
            openDropdown();
            return;
          }

          moveHighlightByPage('down');
          break;

        case 'PageUp':
          event.preventDefault();

          if (!isOpen) {
            openDropdown();
            return;
          }

          moveHighlightByPage('up');
          break;

        case 'Home':
          event.preventDefault();

          if (isOpen && enabledOptions.length > 0) {
            const firstEnabledIndex = options.findIndex((option) => !option.disabled);
            setHighlightedIndex(firstEnabledIndex);
          }
          break;

        case 'End':
          event.preventDefault();

          if (isOpen && enabledOptions.length > 0) {
            const lastEnabledIndex = [...options]
              .map((option, index) => ({ option, index }))
              .reverse()
              .find(({ option }) => !option.disabled)?.index;

            setHighlightedIndex(lastEnabledIndex);
          }
          break;

        case 'Escape':
          event.preventDefault();
          closeDropdown();
          break;

        case 'Tab':
          closeDropdown();
          break;

        default:
          handleTypeahead(event);
          break;
      }
    };

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
          closeDropdown();
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
      if (!isOpen || highlightedIndex < 0) return;

      const activeOption = document.getElementById(`${selectId}-option-${highlightedIndex}`);
      activeOption?.scrollIntoView({ block: 'nearest' });
    }, [highlightedIndex, isOpen, selectId]);

    useEffect(() => {
      return () => {
        window.clearTimeout(typeaheadTimeoutRef.current);
      };
    }, []);

    return (
      <div
        ref={wrapperRef}
        className={cx(
          'flex flex-col',
          fullWidth ? 'w-full' : 'w-80 max-w-full',
          className
        )}
      >
        {label && (
          <label
            htmlFor={selectId}
            className={cx(
              'block text-[19px] leading-[28px] mb-1',
              disabled ? 'text-[#757575]' : 'text-black'
            )}
          >
            {label}

            {mandatory ? (
              <span aria-hidden="true" className="text-[#C3112B] text-xl ml-1">
                *
              </span>
            ) : (
              <span className="text-[#757575] text-[16px] leading-[24px] font-normal ml-1">
                (nepovinné pole)
              </span>
            )}
          </label>
        )}

        {hint && (
          <div id={hintId} className="text-[#757575] text-[19px] leading-[28px] mb-2">
            {hint}
          </div>
        )}

        <div className="relative w-full">
          <button
            id={selectId}
            ref={ref}
            type="button"
            disabled={disabled}
            role="combobox"
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            aria-controls={listboxId}
            aria-activedescendant={
              isOpen && highlightedIndex >= 0
                ? `${selectId}-option-${highlightedIndex}`
                : undefined
            }
            aria-required={mandatory ? 'true' : undefined}
            aria-invalid={hasError ? 'true' : undefined}
            aria-describedby={describedBy}
            aria-errormessage={hasError && errorMsg ? errorId : undefined}
            onClick={() => {
              if (isOpen) {
                closeDropdown();
              } else {
                openDropdown();
              }
            }}
            onKeyDown={handleKeyDown}
            className={cx(
              'relative flex w-full items-center rounded-[5px] border-2 bg-white tracking-wide outline-none text-left transition-colors',
              sizeClasses[inputSize] || sizeClasses.large,
              isEmpty ? 'text-[#757575]' : 'text-[#212121]',
              hasError && !disabled
                ? 'border-[#C3112B] pr-[75px]'
                : 'border-[#424242]',
              disabled
                ? 'cursor-not-allowed border-[#BDBDBD] bg-[#F5F5F5] text-[#757575]'
                : 'cursor-pointer hover:ring-[4px] hover:ring-[#757575] focus:outline focus:outline-[3px] focus:outline-[#D96E00] focus:outline-offset-2'
            )}
          >
            <span className="block min-w-0 flex-1 truncate">
              {selectedOption ? selectedOption.label : placeholder}
            </span>

            {hasError && !disabled && (
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-[45px] top-1/2 -translate-y-1/2 text-[#C3112B]"
              >
                <WarningIcon className="h-5 w-5" />
              </span>
            )}

            <span
              aria-hidden="true"
              className={cx(
                'pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 transition-transform',
                isOpen && 'rotate-180',
                disabled ? 'text-[#757575]' : 'text-[#212121]'
              )}
            >
              <ChevronDownIcon className="h-5 w-5" />
            </span>
          </button>

          {isOpen && (
            <div
              id={listboxId}
              role="listbox"
              aria-labelledby={selectId}
              className="
                absolute left-0 right-0 top-[calc(100%+5px)] z-50
                rounded-[5px] border-2 border-[#BDBDBD] bg-white
                shadow-[0px_12px_32px_0px_rgba(26,26,26,0.24)]
              "
            >
              {selectedIndex >= 0 && (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-[-2px] z-[60] h-12 w-[3px] bg-[#0B4199]"
                  style={{ top: `${selectedIndex * 48}px` }}
                />
              )}

              <div className="max-h-[300px] overflow-y-auto rounded-[3px]">
                <div className="flex flex-col">
                  {options.map((option, index) => {
                    const isSelected = option.value === selectedValue;
                    const isHighlighted = index === highlightedIndex;

                    return (
                      <button
                        key={option.value}
                        id={`${selectId}-option-${index}`}
                        type="button"
                        role="option"
                        aria-selected={isSelected}
                        disabled={option.disabled}
                        onMouseEnter={() => {
                          if (!option.disabled) {
                            setHighlightedIndex(index);
                          }
                        }}
                        onMouseDown={(event) => {
                          event.preventDefault();
                        }}
                        onClick={() => selectOption(option)}
                        className={cx(
                          'relative flex min-h-12 w-full items-center rounded-none border-0 px-5 py-2.5 text-left text-[16px] leading-[24px] tracking-wide outline-none',
                          option.disabled
                            ? 'cursor-not-allowed bg-white text-[#757575]'
                            : 'cursor-pointer text-[#212121]',
                          isHighlighted && !option.disabled
                            ? 'bg-[#F5F5F5] underline decoration-2 underline-offset-2'
                            : !option.disabled && 'bg-white',
                          isSelected && 'font-bold text-[#0B4199]'
                        )}
                      >
                        <span className="relative z-[2] min-w-0 flex-1 truncate">
                          {option.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>

        <input type="hidden" name={name} value={selectedValue || ''} />

        {caption && !hasError && (
          <div id={captionId} className="mt-2 text-[#757575] text-[16px] leading-[24px]">
            {caption}
          </div>
        )}

        {hasError && errorMsg && !disabled && (
          <div id={errorId} className="mt-2 text-[#C3112B] text-[19px] leading-[28px]">
            {errorMsg}
          </div>
        )}
      </div>
    );
  }
);

SelectDropdownCustom.displayName = 'SelectDropdownCustom';

export default SelectDropdownCustom;