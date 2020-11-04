import React from 'react';
import styled from 'styled-components';
import BaseButton from '@/components/common/BaseButton';
import Fence from '@/components/common/Fence';

const CheckButton = styled(BaseButton)`
  border-radius: 32px;
  border: 1px solid transparent;
  position: relative;
  &:focus-within {
    &::after {
      border-radius: 32px;
      border: 1px solid transparent;
      bottom: 0px;
      content: '';
      position: absolute;
      top: 0px;
      z-index: 0;
      background-color: rgb(255, 255, 255);
      box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 20px;
      left: 0px;
      right: 0px;
    }
  }
`;

const CheckIOWrapper = styled.div`
  flex: 2;
  display: flex;
  div {
    &.check-in-block,
    &.check-out-block {
      flex: 1;
    }
  }
`;
const SearchOptionText = styled.div`
  font-weight: 700;
  letter-spacing: 0.3em;
  font-size: 12px;
  line-height: 16px;
  padding-bottom: 2px;
`;

const ButtonInnerWrapper = styled.div`
  position: relative;
  z-index: 3;
  padding: 12px 30px;
`;

const ButtonInnerText = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: #717171;
  font-weight: 400;
  width: 100%;
`;

const CheckIOBlock = () => {
  return (
    <CheckIOWrapper>
      <div className="check-in-block">
        <label className="input-wrapper">
          <CheckButton grayBackground backColor={'lightgray'}>
            <ButtonInnerWrapper>
              <SearchOptionText>체크인</SearchOptionText>
              <ButtonInnerText>날짜 추가</ButtonInnerText>
            </ButtonInnerWrapper>
          </CheckButton>
        </label>
      </div>
      <Fence />
      <div className="check-out-block">
        <label className="input-wrapper">
          <CheckButton grayBackground backColor={'lightgray'}>
            <ButtonInnerWrapper>
              <SearchOptionText>체크아웃</SearchOptionText>
              <ButtonInnerText>날짜 추가</ButtonInnerText>
            </ButtonInnerWrapper>
          </CheckButton>
        </label>
      </div>
    </CheckIOWrapper>
  );
};

export default CheckIOBlock;
