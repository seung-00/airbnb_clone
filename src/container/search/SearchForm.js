import React from 'react';
import SearchBar from '@/components/search/SearchBar';
import { show } from '@/modules/search';
import { useDispatch, useSelector } from 'react-redux';

const SearchForm = () => {
  const dispatch = useDispatch();
  const isSearching = useSelector((state) => state.search.isSearching);

  const onClick = () => {
    dispatch(show());
  };

  return <SearchBar isSearching={isSearching} onClick={onClick} />;
};

export default SearchForm;
