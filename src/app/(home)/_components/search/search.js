'use client';

import React, { useState } from 'react';
import { SearchBar } from '@eslovensko/idsk-react';
import Scroll from './scroll/scroll';
import SearchList from './searchList/searchList';
import './search.scss';
import { normalizeForSearch } from '@/utils/string';


const Search = ({ pageDetails }) => {
  const [searchField, setSearchField] = useState("");

  const normalizedSearchField = normalizeForSearch(searchField);

  const filteredPages = pageDetails.filter(page =>
    normalizeForSearch(page.name) !== normalizeForSearch("Zoznam komponentov") &&
    normalizeForSearch(page.name).includes(normalizedSearchField)
  );

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  const handleCancel = () => {
    setSearchField("");
  };

  return (
    <section className="search">
      <div className="small-screen-only">
        <SearchBar
          placeholder="Vyhľadať komponent..."
          searchbarSize="medium"
          onChange={handleChange}
          showCancelButton={searchField.length > 0}
          onCancel={handleCancel}
          cancelButtonAriaLabel='zrušiť'
          buttonDisabled
          label='Vyhľadať komponent'
        />
      </div>
      <div className="large-screen-only">
        <SearchBar
          placeholder="Vyhľadať komponent..."
          searchbarSize="medium"
          onChange={handleChange}
          showCancelButton={searchField.length > 0}
          onCancel={handleCancel}
          cancelButtonAriaLabel='zrušiť'
          buttonDisabled
          label='Vyhľadať komponent'
        />
      </div>
      <Scroll length={filteredPages.length} searchLength={searchField.length}>
        <SearchList filteredPages={filteredPages} />
      </Scroll>
    </section>
  );
}

export default Search;
