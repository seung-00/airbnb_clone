/* eslint-disable react/prop-types */
import React from 'react';
import styled, { css } from 'styled-components';
import BaseButton from '@/components/common/BaseButton';

const ButtonInnerWrapper = styled.div`
  position: relative;
  z-index: 3;
  padding: 12px 30px;
`;
const SearchOptionText = styled.div`
  font-weight: 700;
  letter-spacing: 0.3em;
  font-size: 12px;
  line-height: 16px;
  padding-bottom: 2px;
`;

const ButtonInnerText = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: #717171;
  font-weight: 400;
  width: 100%;
`;

const OptionButton = styled(BaseButton)`
  border-radius: 32px;
  border: 1px solid transparent;
  position: relative;
  ${(props) =>
    props.isComponentVisible &&
    css`
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
    `}
`;

const OptionButtonBlock = ({
  category,
  description,
  isButtonVisible,
  setButtonVisible,
}) => {
  return (
    <>
      <label>
        <OptionButton
          hoverColor={'#EBEBEB'}
          isComponentVisible={isButtonVisible}
          onClick={() => setButtonVisible(true)}
        >
          <ButtonInnerWrapper>
            <SearchOptionText>{category}</SearchOptionText>
            <ButtonInnerText>{description}</ButtonInnerText>
          </ButtonInnerWrapper>
        </OptionButton>
      </label>
    </>
  );
};

export default OptionButtonBlock;
