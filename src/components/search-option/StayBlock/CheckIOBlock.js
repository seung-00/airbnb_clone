/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Fence from '@/components/common/Fence';
import useComponentVisible from '@/utils/hooks/useComponentVisible';

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

const CheckIOBlock = ({
  ButtonInnerWrapper,
  SearchOptionText,
  ButtonInnerText,
  OptionButton,
}) => {
  const [refCheckIn, isCheckInVisible, setCheckInVisible] = useComponentVisible(
    false
  );

  const [
    refCheckOut,
    isCheckOutVisible,
    setCheckOutVisible,
  ] = useComponentVisible(false);

  return (
    <CheckIOWrapper>
      <div className="check-in-block" ref={refCheckIn}>
        <label>
          <OptionButton
            hoverColor={'#EBEBEB'}
            isComponentVisible={isCheckInVisible}
            onClick={() => setCheckInVisible(true)}
          >
            <ButtonInnerWrapper>
              <SearchOptionText>체크인</SearchOptionText>
              <ButtonInnerText>날짜 추가</ButtonInnerText>
            </ButtonInnerWrapper>
          </OptionButton>
        </label>
      </div>
      <Fence />
      <div className="check-out-block" ref={refCheckOut}>
        <label>
          <OptionButton
            hoverColor={'#EBEBEB'}
            isComponentVisible={isCheckOutVisible}
            onClick={() => setCheckOutVisible(true)}
          >
            <ButtonInnerWrapper>
              <SearchOptionText>체크아웃</SearchOptionText>
              <ButtonInnerText>날짜 추가</ButtonInnerText>
            </ButtonInnerWrapper>
          </OptionButton>
        </label>
      </div>
    </CheckIOWrapper>
  );
};

export default CheckIOBlock;
