import React, { useEffect, useState } from 'react';
import ButtonBlock from '@/components/search/ButtonBlock';
import SearchBlock from '@/components/search/SearchBlock';
import SearchOptionConstants from '@/utils/constants/SearchOptionConstants';
import { useDispatch, useSelector } from 'react-redux';
import { scrollOn, scrollOff } from '@/modules/scroll';

const CenterBlock = ({ isSearching, setSearching }) => {
  const STAY = SearchOptionConstants.STAY;
  const [selectedTab, setSelectedTab] = useState(STAY);
  const isScrolled = useSelector((state) => state.scroll.isScrolled);
  const dispatch = useDispatch();

  const onScroll = () => {
    setSearching(false);
    document.documentElement.scrollTop > 100
      ? dispatch(scrollOn())
      : dispatch(scrollOff());
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div>
      {isScrolled && !isSearching && (
        <ButtonBlock setSearching={setSearching} />
      )}
      {(!isScrolled || isSearching) && (
        <SearchBlock
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      )}
    </div>
  );
};

export default CenterBlock;
