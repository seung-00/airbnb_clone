/* eslint-disable react/prop-types */
import React from 'react';
import styled, { css } from 'styled-components';
import BaseButton from '@/components/common/BaseButton';
import useComponentVisible from '@/utils/hooks/useComponentVisible';
import { ReactComponent as SearchSVG } from '@/svg/serach_button.svg';

const ButtonInnerWrapper = styled.div`
  position: relative;
  z-index: 3;
  padding: 17px 30px;
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

const SearchSVGWrapper = styled.div`
  background-color: rgb(255, 56, 92);
  border-radius: 50%;
  height: 15px;
  margin: 7px 7px 7px 0;
  padding: 16px;
  width: 15px;
  svg {
    width: 14px !important;
    height: 14px !important;
  }
`;

const SearchButtonBlock = () => {
  const [ref, isComponentVisible, setIsComponentVisible] = useComponentVisible(
    false
  );
  return (
    <>
      <label ref={ref}>
        <OptionButton
          hoverColor={'#EBEBEB'}
          isComponentVisible={isComponentVisible}
          onClick={() => {
            setIsComponentVisible(true);
          }}
        >
          <ButtonInnerWrapper>
            <SearchOptionText>인원</SearchOptionText>
            <ButtonInnerText>게스트 추가</ButtonInnerText>
          </ButtonInnerWrapper>
          <div className="search-button-wrapper">
            <SearchSVGWrapper>
              <SearchSVG />
            </SearchSVGWrapper>
          </div>
        </OptionButton>
      </label>
    </>
  );
};

export default SearchButtonBlock;