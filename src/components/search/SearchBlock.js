/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import StayBlock from '@/components/search-stay/StayBlock';

const SearchWrapper = styled.div`
  position: absolute;
  left: 0px;
  width: 100%;
`;
const StyledForm = styled.form`
  margin: 0 auto;
  max-width: 700px;
`;

const SearchTabWrapper = styled.fieldset`
  border: 0px;
  margin: 0px;
  padding: 0px;
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
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  padding: 10px 16px;
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
`;

const SearchBlock = ({ selectedTab, setSelectedTab }) => {
  return (
    <SearchWrapper>
      <StyledForm>
        <SearchTabWrapper>
          <SearchTabList role="tablist" aria-label="무엇을 찾고 계신가요?">
            <TabWrapper>
              <input
                id="search-tab-STAYS"
                role="tab"
                type="radio"
                aria-selected="true"
                onClick={(e) => setSelectedTab(e.target.id)}
              />
              <TabText type="input">숙소</TabText>
            </TabWrapper>
            <TabWrapper>
              <input
                id="search-tab-EXPERIENCES"
                role="tab"
                type="radio"
                aria-selected="false"
                onClick={(e) => setSelectedTab(e.target.id)}
              />
              <TabText type="input">체험</TabText>
            </TabWrapper>
            <Link to="/" /* s/experiences/online */ className="tab-text">
              <TabText>온라인 체험</TabText>
            </Link>
          </SearchTabList>
        </SearchTabWrapper>
        {selectedTab === 'search-tab-STAYS' && <StayBlock />}
        {selectedTab === 'search-tab-EXPERIENCES' && <h>test2</h>}
      </StyledForm>
    </SearchWrapper>
  );
};

export default SearchBlock;
