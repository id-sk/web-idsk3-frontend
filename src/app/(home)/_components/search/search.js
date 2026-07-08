'use client';

import React, { useEffect, useId, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { normalizeForSearch } from '@/utils/string';
import './search.scss';

const SearchIcon = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="currentColor"
    className="h-5 w-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    />
  </svg>
);

const Search = ({ pageDetails = [] }) => {
  const router = useRouter();
  const reactId = useId();
  const instanceId = reactId.replace(/:/g, '');

  const inputId = `idsk-search-${instanceId}`;
  const listboxId = `search-results-list-${instanceId}`;
  const hintId = `autocomplete-assistive-hint-${instanceId}`;
  const statusId = `autocomplete-status-${instanceId}`;
  const optionId = (index) => `search-option-${instanceId}-${index}`;

  const [searchField, setSearchField] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [originalTerm, setOriginalTerm] = useState('');

  const wrapperRef = useRef(null);
  const inputRef = useRef(null);
  const listboxRef = useRef(null);

  const normalizedSearchField = normalizeForSearch(searchField);

  const filteredPages =
    pageDetails?.filter(
      (page) =>
        normalizeForSearch(page.name) !== normalizeForSearch('Zoznam komponentov') &&
        normalizeForSearch(page.name).includes(normalizedSearchField)
    ) || [];

  const showDropdown = searchField.length > 0 && isDropdownOpen;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setFocusedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (focusedIndex >= 0) {
      const activeOption = document.getElementById(optionId(focusedIndex));

      if (activeOption) {
        activeOption.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [focusedIndex]);

  const handleChange = (event) => {
    setSearchField(event.target.value);
    setIsDropdownOpen(true);
    setFocusedIndex(-1);
  };

  const handleKeyDown = (event) => {
    if (!showDropdown || filteredPages.length === 0) {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
        setFocusedIndex(-1);
      }

      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();

      if (focusedIndex === -1) {
        setOriginalTerm(searchField);
      }

      const nextIndex = focusedIndex < filteredPages.length - 1 ? focusedIndex + 1 : 0;
      setFocusedIndex(nextIndex);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();

      if (focusedIndex === 0) {
        setFocusedIndex(-1);
        setSearchField(originalTerm);
      } else if (focusedIndex > 0) {
        setFocusedIndex(focusedIndex - 1);
      } else {
        setFocusedIndex(filteredPages.length - 1);
        setOriginalTerm(searchField);
      }
    } else if (event.key === 'Enter') {
      event.preventDefault();

      if (focusedIndex >= 0 && focusedIndex < filteredPages.length) {
        router.push(filteredPages[focusedIndex].link);
        setIsDropdownOpen(false);
        setFocusedIndex(-1);
        setSearchField('');
      }
    } else if (event.key === 'Escape') {
      setIsDropdownOpen(false);
      setFocusedIndex(-1);
    }
  };

  return (
    <div
      className="relative z-[70] w-full max-w-md font-source-sans-pro"
      ref={wrapperRef}
    >
      <div className="sr-only">
        <span id={hintId}>
          Ak sú k dispozícii výsledky vyhľadávania, použite šípky hore a dole na ich
          prezeranie a kláves Enter na výber.
        </span>

        <div id={statusId} role="status" aria-atomic="true" aria-live="polite">
          {showDropdown
            ? `${filteredPages.length} ${
                filteredPages.length === 1 ? 'výsledok' : 'výsledkov'
              } k dispozícii.`
            : ''}
        </div>
      </div>

      <div
        className="
          relative flex w-full items-stretch rounded-[5px] border-2 border-[#0b4199] bg-white
          transition-all duration-100
          hover:ring-[4px] hover:ring-[#757575]
          focus-within:outline focus-within:outline-[3px] focus-within:outline-[#d96e00] focus-within:outline-offset-2
        "
      >
        <label htmlFor={inputId} className="sr-only">
          Hľadať na stránke
        </label>

        <input
          ref={inputRef}
          id={inputId}
          type="text"
          autoComplete="off"
          value={searchField}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsDropdownOpen(true)}
          placeholder="Hľadať na stránke..."
          role="combobox"
          aria-expanded={showDropdown}
          aria-controls={showDropdown ? listboxId : undefined}
          aria-autocomplete="list"
          aria-activedescendant={focusedIndex >= 0 ? optionId(focusedIndex) : undefined}
          aria-describedby={hintId}
          className="
            w-full rounded-l-[5px] bg-transparent px-4 py-2.5 text-[16px] text-[#212121]
            placeholder:text-[#757575]
            focus:outline-none
          "
        />

        <div
          aria-hidden="true"
          className="flex shrink-0 items-center justify-center rounded-r-[5px] border-l-2 border-[#0b4199] bg-transparent px-4 text-[#0b4199]"
        >
          <SearchIcon />
        </div>
      </div>

      {showDropdown && (
        <div
          className="
            absolute left-0 right-0 top-[calc(100%+8px)] z-[70] max-h-[300px] overflow-y-auto
            rounded-[5px] border-2 border-[#BDBDBD] bg-white
            shadow-[0_12px_32px_0_rgba(26,26,26,0.15)]
          "
        >
          {filteredPages.length > 0 ? (
            <ul
              id={listboxId}
              role="listbox"
              ref={listboxRef}
              className="m-0 list-none p-[6px]"
            >
              {filteredPages.map((page, index) => {
                const isFocused = focusedIndex === index;

                return (
                  <li
                    key={page.link}
                    id={optionId(index)}
                    role="option"
                    aria-selected={isFocused}
                    aria-posinset={index + 1}
                    aria-setsize={filteredPages.length}
                  >
                    <Link
                      href={page.link}
                      onClick={() => {
                        setIsDropdownOpen(false);
                        setFocusedIndex(-1);
                        setSearchField('');
                      }}
                      className={`
                        block w-full rounded-[2px] px-4 py-3 text-[16px] text-[#212121] decoration-[1px]
                        hover:bg-[#F5F5F5] hover:underline
                        ${
                          isFocused
                            ? 'bg-white underline outline outline-[3px] outline-[#d96e00] outline-offset-[2px]'
                            : 'bg-white'
                        }
                      `}
                      tabIndex={-1}
                    >
                      {page.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="px-4 py-4 text-[19px] text-[#505a5f]" role="status">
              Nenašli sa žiadne výsledky.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;