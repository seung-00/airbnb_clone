import React from 'react';
import SearchBar from '@/components/search/SearchBar';
import { initSearch, changeTab } from '@/modules/search';
import { useDispatch, useSelector } from 'react-redux';

const SearchForm = () => {
  const dispatch = useDispatch();
  const isSearching = useSelector((state) => state.search.isSearching);
  const selectedTab = useSelector((state) => state.search.selectedTab);

  const onSearch = () => {
    dispatch(initSearch());
  };

  const onChangeTab = (e) => {
    const tab = e.target.id;
    console.log(tab);
    dispatch(changeTab(tab));
  };

  return (
    <SearchBar
      isSearching={isSearching}
      onSearch={onSearch}
      selectedTab={selectedTab}
      onChangeTab={onChangeTab}
    />
  );
};

export default SearchForm;
