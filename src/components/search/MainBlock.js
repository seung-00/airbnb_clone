import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BaseButton from '@/components/common/BaseButton';
import { ReactComponent as EarthSvg } from '@/svg/earth.svg';
import { ReactComponent as BottomSvg } from '@/svg/bottom.svg';

const HostWrapper = styled.div`
  border-radius: 22px;
  padding: 12px;
`;

const Language = styled.div`
  background: transparent;
  padding: 12px;
  align-items: center;
  display: flex;
`;

const MainWrapper = styled.div`
  position: relative;
  display: flex;
  height: 42px;
  margin-right: 8px;
`;

const EarthSvgWrapper = styled.div`
  padding: 0px 6px 0px 0px;
`;

const MainBlock = () => {
  return (
    <MainWrapper>
      <BaseButton hoverColor={'rgb(247, 247, 247)'}>
        <HostWrapper>
          <Link to="/" /* host/homes */>호스트 되기</Link>
        </HostWrapper>
      </BaseButton>
      <BaseButton hoverColor={'rgb(247, 247, 247)'}>
        <Language>
          <EarthSvgWrapper>
            <EarthSvg />
          </EarthSvgWrapper>
          <BottomSvg />
        </Language>
      </BaseButton>
    </MainWrapper>
  );
};

export default MainBlock;
