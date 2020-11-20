import React from 'react';
import styled from 'styled-components';
import Fence from '@/components/common/Fence';
import LocationBlock from '@/components/search-option/LocationBlock';
import OptionButtonBlock from '@/components/search-option/OptionButtonBlock';
import SearchButtonBlock from './SearchButtonBlock';

const LocationWrapper = styled.div`
  flex: 1.3;
  margin: -2px;
  position: relative;
`;

const CheckIOWrapper = styled.div`
  flex: 2.5;
  display: flex;
  position: relative;
  div {
    &.check-in-block,
    &.check-out-block {
      flex: 1;
    }
  }
`;

const RestBlockWrapper = styled.div`
  flex: 2;
  div {
    &.head-count-block {
      position: relative;
      z-index: 1;
    }
    &.search-button-wrapper {
      margin-left: auto;
      padding-right: 15px;
      position: relative;
      z-index: 5;
    }
  }
`;

const StayBlock = () => {
  return (
    <>
      <LocationWrapper>
        <LocationBlock />
      </LocationWrapper>
      <Fence />
      <CheckIOWrapper>
        <div className="check-in-block">
          <OptionButtonBlock category="체크인" description="날짜 추가" />
        </div>
        <Fence />
        <div className="check-out-block">
          <OptionButtonBlock category="체크아웃" description="날짜 추가" />
        </div>
      </CheckIOWrapper>
      <Fence />
      <RestBlockWrapper>
        <div className="head-count-block">
          <SearchButtonBlock />
        </div>
      </RestBlockWrapper>
    </>
  );
};

export default StayBlock;
