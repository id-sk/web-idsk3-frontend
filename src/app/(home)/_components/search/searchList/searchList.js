import React from 'react';
import Card from '../card/card';

const SearchList = ({ filteredPages }) => {
  const filtered = filteredPages.map(page => <Card key={page.name} page={page} />);
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;