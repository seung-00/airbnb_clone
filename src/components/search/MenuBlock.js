import React from 'react';
import styled, { css } from 'styled-components';
import BaseButton from '@/components/common/BaseButton';
import { ReactComponent as MenuSvg } from '@/svg/menu.svg';
import { ReactComponent as ProfileSvg } from '@/svg/profile.svg';
import { useSelector } from 'react-redux';

const MenuButton = styled(BaseButton)`
  padding: 5px 5px 5px 12px;
  height: 42px;
  ${(props) =>
    !props.isScrolled &&
    css`
      background-color: white;
    `}
`;

const ProfileWrapper = styled.div`
  // fix flex basis size
  flex: 0 0 30px;
  margin-left: 12px;
  align-items: center;
`;

const MenuWrapper = styled.div`
  position: relative;
  z-index: 101;
  width: 77px;
`;

const MenuBlock = () => {
  const isScrolled = useSelector((state) => state.scroll.isScrolled);
  return (
    <MenuWrapper>
      <MenuButton shadow border isScrolled={isScrolled}>
        <MenuSvg />
        <ProfileWrapper>
          <ProfileSvg />
        </ProfileWrapper>
      </MenuButton>
    </MenuWrapper>
  );
};

export default MenuBlock;
