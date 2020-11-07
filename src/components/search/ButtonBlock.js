import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchSVG } from '@/svg/serach_button.svg';
import BaseButton from '@/components/common/BaseButton';
import OptionConstants from '@/utils/constants/SearchOptionConstants';

const ButtonWrapper = styled.div`
  width: 290px;
  height: 80px;
  display: flex;
  align-items: center;
`;

const SearchSVGWrapper = styled.div`
  background-color: rgb(255, 56, 92);
  border-radius: 50%;
  height: 15px;
  margin: 7px 7px 7px 0;
  padding: 10px;
  width: 12px;
  svg {
    width: 5px;
  }
`;

// text에만 flex-glow 1을 줘서 자리를 차지하도록 한다.
const SearchText = styled.div`
  font-size: 14px;
  flex: 1 1 auto;
  padding: 0 16px;
`;

const SearchButton = styled(BaseButton)`
  width: 290px;
  height: 48px;
`;

// eslint-disable-next-line react/prop-types
const ButtonBlock = ({ setSelectedTab, setSearching }) => {
  return (
    <ButtonWrapper>
      <SearchButton
        border
        shadow
        onClick={() => {
          setSelectedTab(OptionConstants.STAY); // default tab
          setSearching((prevState) => !prevState);
        }}
      >
        <SearchText>검색 시작하기</SearchText>
        <SearchSVGWrapper>
          <SearchSVG />
        </SearchSVGWrapper>
      </SearchButton>
    </ButtonWrapper>
  );
};

export default ButtonBlock;
