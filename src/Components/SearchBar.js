import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const SearchBar = (isSearch) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={isSearch}
      value={searchQuery}
    />
  );
};

export default SearchBar;