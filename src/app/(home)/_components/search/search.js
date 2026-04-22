'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { normalizeForSearch } from '@/utils/string';
import './search.scss';

const SearchIcon = () => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
);

const Search = ({ pageDetails }) => {
  const router = useRouter();
  const [searchField, setSearchField] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [originalTerm, setOriginalTerm] = useState("");

  const wrapperRef = useRef(null);
  const inputRef = useRef(null);
  const listboxRef = useRef(null);

  const normalizedSearchField = normalizeForSearch(searchField);
  const filteredPages = pageDetails?.filter(page =>
    normalizeForSearch(page.name) !== normalizeForSearch("Zoznam komponentov") &&
    normalizeForSearch(page.name).includes(normalizedSearchField)
  ) || [];

  const showDropdown = searchField.length > 0 && isDropdownOpen;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (focusedIndex >= 0) {
      const activeOption = document.getElementById(`option-${focusedIndex}`);
      if (activeOption) {
        activeOption.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [focusedIndex]);

  const handleChange = (e) => {
    setSearchField(e.target.value);
    setIsDropdownOpen(true);
    setFocusedIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (!showDropdown || filteredPages.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (focusedIndex === -1) setOriginalTerm(searchField);
      const nextIndex = focusedIndex < filteredPages.length - 1 ? focusedIndex + 1 : 0;
      setFocusedIndex(nextIndex);
    } 
    else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (focusedIndex === 0) {
        setFocusedIndex(-1);
        setSearchField(originalTerm);
      } else if (focusedIndex > 0) {
        setFocusedIndex(focusedIndex - 1);
      } else {
        setFocusedIndex(filteredPages.length - 1);
        if (focusedIndex === -1) setOriginalTerm(searchField);
      }
    }
    else if (e.key === 'Enter') {
      e.preventDefault();
      if (focusedIndex >= 0 && focusedIndex < filteredPages.length) {
        router.push(filteredPages[focusedIndex].link);
        setIsDropdownOpen(false);
        setSearchField("");
      }
    } 
    else if (e.key === 'Escape') {
      setIsDropdownOpen(false);
      setFocusedIndex(-1);
    }
  };

  return (
    <div className="relative w-full max-w-md font-source-sans-pro z-50" ref={wrapperRef}>
      
      <div className="sr-only">
        <span id="autocomplete-assistiveHint">
          Ak sú k dispozícii výsledky vyhľadávania, použite šípky hore a dole na ich prezeranie a kláves Enter na výber.
        </span>
        <div role="status" aria-atomic="true" aria-live="polite">
          {showDropdown 
            ? `${filteredPages.length} ${filteredPages.length === 1 ? 'výsledok' : 'výsledkov'} k dispozícii.` 
            : ''}
        </div>
      </div>

      <div className="
        flex items-stretch w-full relative bg-white
        border-2 border-[#0b4199] rounded-[5px]
        hover:ring-[4px] hover:ring-[#757575]
        focus-within:outline focus-within:outline-[3px] focus-within:outline-[#d96e00] focus-within:outline-offset-2
        transition-all duration-100
      ">
        <label htmlFor="idsk-search" className="sr-only">Hľadať v komponentoch</label>
        
        <input
          ref={inputRef}
          id="idsk-search"
          type="text"
          autoComplete="off"
          value={searchField}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsDropdownOpen(true)}
          placeholder="Hľadať na stránke..."
          role="combobox"
          aria-expanded={showDropdown}
          aria-controls={showDropdown ? "search-results-list" : undefined}
          aria-autocomplete="list"
          aria-activedescendant={focusedIndex >= 0 ? `option-${focusedIndex}` : undefined}
          aria-describedby="autocomplete-assistiveHint"
          className="
            w-full px-4 py-2.5 text-[16px] text-[#212121] bg-transparent
            focus:outline-none rounded-l-[5px]
          "
        />

        <div 
          aria-hidden="true"
          className="shrink-0 flex items-center justify-center px-4 text-[#0b4199] bg-transparent rounded-r-[5px] border-l-2 border-[#0b4199]"
        >
          <SearchIcon />
        </div>
      </div>

      {showDropdown && (
        <div 
          className="
            absolute left-0 right-0 top-[calc(100%+8px)] bg-white border-2 border-[#BDBDBD] 
            shadow-[0_12px_32px_0_rgba(26,26,26,0.15)] max-h-[300px] overflow-y-auto rounded-[5px]
          "
        >
          {filteredPages.length > 0 ? (
            <ul 
              id="search-results-list" 
              role="listbox" 
              ref={listboxRef}
              className="m-0 p-[6px] list-none"
            >
              {filteredPages.map((page, index) => {
                const isFocused = focusedIndex === index;
                return (
                  <li 
                    key={page.link} 
                    id={`option-${index}`} 
                    role="option" 
                    aria-selected={isFocused} 
                    aria-posinset={index + 1}
                    aria-setsize={filteredPages.length}
                  >
                    <Link
                      href={page.link}
                      onClick={() => {
                        setIsDropdownOpen(false);
                        setSearchField("");
                      }}
                      className={`
                        block w-full px-4 py-3 text-[16px] text-[#212121] decoration-[1px] rounded-[2px]
                        hover:bg-[#F5F5F5] hover:underline
                        ${isFocused 
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
              Nenašli sa žiadne komponenty.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;