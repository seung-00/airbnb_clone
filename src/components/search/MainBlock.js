import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import BaseButton from '@/components/common/BaseButton';
import { ReactComponent as EarthSvg } from '@/svg/earth.svg';
import { ReactComponent as BottomSvg } from '@/svg/bottom.svg';
import { ReactComponent as BottomWhiteSvg } from '@/svg/bottom_white.svg';
import { useSelector } from 'react-redux';

const HostWrapper = styled.div`
  border-radius: 22px;
  padding: 12px;
  ${(props) =>
    !props.isScrolled &&
    css`
      color: white;
    `}
`;

const Language = styled.div`
  background: transparent;
  padding: 12px;
  align-items: center;
  display: flex;
`;

const MainWrapper = styled.div`
  position: relative;
  z-index: 101;
  display: flex;
  height: 42px;
  margin-right: 8px;
`;

const EarthSvgWrapper = styled.div`
  padding: 0px 6px 0px 0px;
  ${(props) =>
    !props.isScrolled &&
    css`
      path {
        fill: rgb(255, 255, 255);
      }
    `}
`;

const MainBlock = () => {
  const isScrolled = useSelector((state) => state.scroll.isScrolled);
  const [hoverColor, setHoverColor] = useState('');
  useEffect(() => {
    isScrolled
      ? setHoverColor('rgb(247, 247, 247)')
      : setHoverColor('rgb(255, 255, 255,0.1)');
  }, [isScrolled]);

  return (
    <MainWrapper>
      <BaseButton hoverColor={hoverColor}>
        <HostWrapper isScrolled={isScrolled}>
          <Link to="/" /* host/homes */>호스트 되기</Link>
        </HostWrapper>
      </BaseButton>
      <BaseButton hoverColor={hoverColor}>
        <Language>
          <EarthSvgWrapper isScrolled={isScrolled}>
            <EarthSvg />
          </EarthSvgWrapper>
          {isScrolled ? <BottomSvg /> : <BottomWhiteSvg />}
        </Language>
      </BaseButton>
    </MainWrapper>
  );
};

export default MainBlock;
