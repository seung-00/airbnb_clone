/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import StayBlock from '@/components/search-option/StayBlock/StayBlock';
import ExperienceBlock from '@/components/search-option/ExperienceBlock/ExperienceBlock';
import OptionConstants from '@/utils/constants/SearchOptionConstants';
import { useSelector } from 'react-redux';

const SearchWrapper = styled.div`
  position: absolute;
  left: 0px;
  width: 100%;
`;
const OptionBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

const SearchTabWrapper = styled.fieldset`
  border: 0px;
  margin: 0px;
  padding: 0px;
`;

const SearchTabList = styled.div`
  ${(props) =>
    !props.isScrolled &&
    css`
      color: white;
    `}
  align-items: center;
  display: flex;
  justify-content: center;
  height: 80px;
`;

const TabWrapper = styled.label`
  ${(props) => `#${props.stay} {appearance: none;}`}
  ${(props) => `#${props.experience} {appearance: none;}`}
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
  height: 67px;
  position: relative;
  background-color: #f7f7f7;
`;

const Header = styled.header`
  height: 75px;
  left: 0px;
  width: 100%;
  z-index: 100;
  position: fixed;
  top: 0px;
`;

const SearchBlock = ({ selectedTab, setSelectedTab }) => {
  const STAY = OptionConstants.STAY;
  const EXPERIENCE = OptionConstants.EXPERIENCE;
  const isScrolled = useSelector((state) => state.scroll.isScrolled);

  return (
    <Header>
      <SearchWrapper>
        <OptionBlock>
          <SearchTabWrapper>
            <SearchTabList
              role="tablist"
              aria-label="무엇을 찾고 계신가요?"
              isScrolled={isScrolled} // 스크롤 여부에 따라 폰트 색 변경
            >
              <TabWrapper stay={STAY} experience={EXPERIENCE}>
                <input
                  id={STAY}
                  role="tab"
                  type="radio"
                  aria-selected="true"
                  onClick={(e) => {
                    setSelectedTab(e.target.id);
                  }}
                />
                <TabText type="input" selectedTab={selectedTab} tabName={STAY}>
                  숙소
                </TabText>
              </TabWrapper>
              <TabWrapper stay={STAY} experience={EXPERIENCE}>
                <input
                  id={EXPERIENCE}
                  role="tab"
                  type="radio"
                  aria-selected="false"
                  onClick={(e) => setSelectedTab(e.target.id)}
                />
                <TabText
                  type="input"
                  selectedTab={selectedTab}
                  tabName={EXPERIENCE}
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
            {selectedTab === STAY && <StayBlock />}
            {selectedTab === EXPERIENCE && <ExperienceBlock />}
          </SearchOptionWrapper>
        </OptionBlock>
      </SearchWrapper>
    </Header>
  );
};
export default SearchBlock;
