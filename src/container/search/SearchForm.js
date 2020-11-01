import React from 'react';
import { changeTab } from '@/modules/search';
import { useDispatch, useSelector } from 'react-redux';
import SearchBlock from '@/components/search/SearchBlock';

const SearchForm = () => {
  const dispatch = useDispatch();
  const selectedTab = useSelector((state) => state.search.selectedTab);

  const onChangeTab = (e) => {
    const tab = e.target.id;
    dispatch(changeTab(tab));
  };

  // return <SearchBlock selectedTab={selectedTab} onChangeTab={onChangeTab} />;
};

export default SearchForm;
