/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import ButtonBlock from '@/components/search/ButtonBlock';
import MainBlock from '@/components/search/MainBlock';
import MenuBlock from '@/components/search/MenuBlock';
import SearchBlock from '@/components/search/SearchBlock';
import { respondTo } from '@/components/utils/mixins';
import { ReactComponent as LogoSvg } from '@/svg/logo.svg';

/**
 * Components responsible for layout navigation bar
 */

const NavBlock = styled.div`
  display: flex;
  background: white;
  height: 80px;
  align-items: center;
  text-align: left;
  ${respondTo.mobile`
        padding-left: 24px;
        padding-right: 24px;
    `}
  ${respondTo.tablet`
        padding-left: 40px;
        padding-right: 40px;
    `}
    ${respondTo.desktop`
        padding-left: 80px;
        padding-right: 80px;
    `}
    
    div {
    // fix flex-basis size for outer block
    &.left-block {
      flex: 1 0 140px;
    }
    &.right-block {
      flex: 1 0 140px;
      display: flex;
      justify-content: flex-end;
    }
    &.center-block {
      padding: 0 24px;
      flex: 0 1 auto;
    }
  }
`;

const LogoWrapper = styled.div`
  path {
    height: 80px;
    width: 102px;
    fill: rgb(255, 56, 92);
  }
`;

const SearchBar = ({ isSearching, onClick }) => {
  return (
    <NavBlock>
      <div className="left-block">
        <LogoWrapper>
          <LogoSvg />
        </LogoWrapper>
      </div>
      <div className="center-block">
        {isSearching ? <SearchBlock /> : <ButtonBlock onClick={onClick} />}
      </div>
      <div className="right-block">
        <MainBlock />
        <MenuBlock />
      </div>
    </NavBlock>
  );
};

export default SearchBar;
