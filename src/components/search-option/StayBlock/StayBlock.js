import React from 'react';
import styled from 'styled-components';
import Fence from '@/components/common/Fence';
import SearchInputBlock from '@/components/search-option/SearchInputBlock';

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
        <SearchInputBlock
          form={'stay'}
          name={'location'}
          namePrint={'위치'}
          inputPlaceholder={'어디로 여행가세요?'}
          isFocus={true}
        />
      </LocationWrapper>
      <Fence />
      <CheckIOWrapper>
        <div className="check-in-block">
          <SearchInputBlock
            form={'stay'}
            name={'checkIn'}
            namePrint={'체크인'}
            inputPlaceholder={'날짜 추가'}
          />
        </div>
        <Fence />
        <div className="check-out-block">
          <SearchInputBlock
            form={'stay'}
            name={'checkOut'}
            namePrint={'체크아웃'}
            inputPlaceholder={'날짜 추가'}
          />
        </div>
      </CheckIOWrapper>
      <Fence />
      <RestBlockWrapper>
        <div className="head-count-block">
          <SearchInputBlock
            form={'stay'}
            name={'guestNum'}
            namePrint={'인원'}
            inputPlaceholder={'게스트 추가'}
          />
        </div>
      </RestBlockWrapper>
    </>
  );
};

export default StayBlock;
