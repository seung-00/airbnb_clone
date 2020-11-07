/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import StayBlock from '@/components/search-option-stay/StayBlock';

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
  &::before {
    content: '';
    background-color: currentcolor;
    border-radius: 1px;
    height: 2px;
    width: 20px;
    position: absolute;
    left: 35%;
    bottom: 0px;
    transform: scaleX(0);
  }

  ${(props) =>
    props.type === 'input' &&
    css`
      cursor: pointer;
    `}

  &:hover {
    opacity: 0.7;
    &::before {
      transform: scaleX(0.2);
    }
  }
  ${(props) =>
    props.selectedTab &&
    props.selectedTab === props.tabName &&
    css`
      &::before {
        transform: scaleX(1) !important;
      }
    `}
`;

const SearchOptionWrapper = styled.div`
  border: 1px solid rgb(221, 221, 221);
  border-radius: 32px;
  color: rgb(34, 34, 34);
  display: flex;
  height: 60px;
  position: relative;
  background-color: rgb(247, 247, 247);
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
                onClick={(e) => {
                  setSelectedTab(e.target.id);
                }}
              />
              <TabText
                type="input"
                selectedTab={selectedTab}
                tabName="search-tab-STAYS"
              >
                숙소
              </TabText>
            </TabWrapper>
            <TabWrapper>
              <input
                id="search-tab-EXPERIENCES"
                role="tab"
                type="radio"
                aria-selected="false"
                onClick={(e) => setSelectedTab(e.target.id)}
              />
              <TabText
                type="input"
                selectedTab={selectedTab}
                tabName="search-tab-EXPERIENCES"
              >
                체험
              </TabText>
            </TabWrapper>
            <Link to="/" /* s/experiences/online */ className="tab-text">
              <TabText>온라인 체험</TabText>
            </Link>
          </SearchTabList>
        </SearchTabWrapper>
        <SearchOptionWrapper>
          {selectedTab === 'search-tab-STAYS' && <StayBlock />}
          {selectedTab === 'search-tab-EXPERIENCES' && <h>test2</h>}
        </SearchOptionWrapper>
      </StyledForm>
    </SearchWrapper>
  );
};

export default SearchBlock;
