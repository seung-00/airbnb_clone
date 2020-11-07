import React from 'react';
import styled from 'styled-components';
import Fence from '@/components/common/Fence';
import LocationBlock from '@/components/search-option/LocationBlock';
import OptionButtonBlock from '@/components/search-option/OptionButtonBlock';
import useComponentVisible from '@/utils/hooks/useComponentVisible';

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
  const [refCheckIn, isCheckInVisible, setCheckInVisible] = useComponentVisible(
    false
  );

  const [
    refCheckOut,
    isCheckOutVisible,
    setCheckOutVisible,
  ] = useComponentVisible(false);

  const [
    refHeadCount,
    isHeadCountVisible,
    setHeadCountVisible,
  ] = useComponentVisible(false);

  return (
    <>
      <LocationWrapper>
        <LocationBlock />
      </LocationWrapper>
      <Fence />
      <CheckIOWrapper>
        <div className="check-in-block" ref={refCheckIn}>
          <OptionButtonBlock
            category="체크인"
            description="날짜 추가"
            isButtonVisible={isCheckInVisible}
            setButtonVisible={setCheckInVisible}
          />
        </div>
        <Fence />
        <div className="check-out-block" ref={refCheckOut}>
          <OptionButtonBlock
            category="체크아웃"
            description="날짜 추가"
            isButtonVisible={isCheckOutVisible}
            setButtonVisible={setCheckOutVisible}
          />
        </div>
      </CheckIOWrapper>
      <Fence />
      <HeadCountWrapper>
        <div ref={refHeadCount}>
          <OptionButtonBlock
            category="인원"
            description="게스트 추가"
            isButtonVisible={isHeadCountVisible}
            setButtonVisible={setHeadCountVisible}
          />
        </div>
      </HeadCountWrapper>
    </>
  );
};

export default StayBlock;
