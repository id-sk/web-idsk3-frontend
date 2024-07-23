import React from 'react';
import Card from '../card/card';


const SearchList = ({ filteredPages }) => {
  const filtered = filteredPages.map(page => <Card key={page.name} page={page} />);
  return (
    <ul role="list" aria-live="polite" className="search-results-list">
      {filtered}
    </ul>
  );
}

export default SearchList;