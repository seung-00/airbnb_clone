/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { respondTo } from '@/components/utils/mixins';

const SearchForm = styled.form`
  margin: 0 auto !important;
  max-width: 850px !important;
`;

const SearchSet = styled.fieldset`
  border: 0px !important;
  margin: 0px !important;
  padding: 0px !important;
`;

const SearchTabList = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 80px;
`;

const TabWrapper = styled.label`
  #search-tab-STAYS {
    appearance: none;
  }
  #search-tab-EXPERIENCES {
    appearance: none;
  }
`;

const TabText = styled.span`
  position: relative;

  ${(props) =>
    props.type === 'input' &&
    css`
      cursor: pointer;
    `}

  &:hover {
    opacity: 0.7;
    &::before {
      content: '';
      background-color: currentcolor;
      border-radius: 1px;
      height: 2px;
      width: 4.5px;
      position: absolute;
      left: 50%;
      bottom: 0px;
    }
  }

  ${respondTo.desktop`
      font-size: 16px;
      line-height: 20px;
      font-weight: 400;
      padding: 10px 16px !important;
  `}
`;

const SearchBlock = ({ onChangeTab }) => {
  return (
    <SearchForm>
      <SearchSet>
        <SearchTabList role="tablist" aria-label="무엇을 찾고 계신가요?">
          <TabWrapper>
            <input
              id="search-tab-STAYS"
              role="tab"
              type="radio"
              aria-selected="true"
              onClick={onChangeTab}
            />
            <TabText type="input">숙소</TabText>
          </TabWrapper>
          <TabWrapper>
            <input
              id="search-tab-EXPERIENCES"
              role="tab"
              type="radio"
              aria-selected="false"
              onClick={onChangeTab}
            />
            <TabText type="input">체험</TabText>
          </TabWrapper>
          <Link to="/" /* s/experiences/online */ className="tab-text">
            <TabText>온라인 체험</TabText>
          </Link>
        </SearchTabList>
      </SearchSet>
    </SearchForm>
  );
};

export default SearchBlock;
