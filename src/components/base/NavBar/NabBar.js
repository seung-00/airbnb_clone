/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import ButtonBlock from '@/components/search/ButtonBlock';
import MainBlock from '@/components/search/MainBlock';
import MenuBlock from '@/components/search/MenuBlock';
import { respondTo } from '@/utils/mixins';
import { ReactComponent as LogoSvg } from '@/svg/logo.svg';
import SearchBlock from '@/components/search/SearchBlock';

/**
 * Components responsible for layout navigation bar
 */

const NavHeader = styled.header`
  position: fixed;
  left: 0px;
  top: 0px;
  height: 80px;
  width: 100%;
  background-color: white;
  z-index: 100;

  ${(props) =>
    props.selectedTab &&
    css`
      &::after {
        position: absolute;
        content: '';
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: white;
        z-index: 0;
      }
    `}
`;

const NavWraper = styled.div`
  display: flex;
  height: auto;
  text-align: left;
  position: relative;
  z-index: 1;
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
      flex: 1 0 130px;
      display: flex;
      align-items: center;
      height: 80px;
    }
    &.right-block {
      flex: 1 0 130px;
      display: flex;
      align-items: center;
      height: 80px;
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

const NavBar = () => {
  const [isSearching, setSearching] = useState(false);
  const [selectedTab, setSelectedTab] = useState('');
  return (
    <NavHeader selectedTab={selectedTab}>
      <NavWraper>
        <div className="left-block">
          <LogoWrapper>
            <LogoSvg />
          </LogoWrapper>
        </div>
        <div className="center-block">
          {isSearching ? (
            <SearchBlock
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          ) : (
            <ButtonBlock
              setSelectedTab={setSelectedTab}
              setSearching={setSearching}
            />
          )}
        </div>
        <div className="right-block">
          <MainBlock />
          <MenuBlock />
        </div>
      </NavWraper>
    </NavHeader>
  );
};

export default NavBar;
