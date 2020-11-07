import React from 'react';
import styled from 'styled-components';
import Fence from '@/components/common/Fence';
import LocationBlock from '@/components/search-option/LocationBlock';
import OptionButtonBlock from '@/components/search-option/OptionButtonBlock';

const LocationWrapper = styled.div`
  flex: 1.3;
  margin: -2px;
`;

const CheckIOWrapper = styled.div`
  flex: 2.2;
  display: flex;
  div {
    &.check-in-block,
    &.check-out-block {
      flex: 1;
    }
  }
`;

const HeadCountWrapper = styled.div`
  flex: 0.95;
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
      <HeadCountWrapper>
        <OptionButtonBlock category="인원" description="게스트 추가" />
      </HeadCountWrapper>
    </>
  );
};

export default StayBlock;
