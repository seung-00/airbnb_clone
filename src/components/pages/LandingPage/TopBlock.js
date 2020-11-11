import React from 'react';
import styled from 'styled-components';
import wallpaper from '@/img/background0.jpg';
import { Link } from 'react-router-dom';

const TopWallpaper = styled.img`
  position: absolute;
  width: 100%;
  height: 550px;
`;

const TopWrapper = styled.div`
  background-color: beige;
  position: relative;
  height: 550px;
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

const WallpaperWrapper = styled.div`
  z-index: 0;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

const ButtonWrapper = styled.div`
  position: relative;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  display: flex;
  margin: 146px 80px 40px; // mixin 필요
`;

const InnerBox = styled.div`
  width: 416px; // mixin 필요
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TextWrapper = styled.span`
  font-size: 48px;
  color: white;
  letter-spacing: -0.02em;
  font-weight: 700;
`;

const LinkContainer = styled.div`
  margin-top: 22px;
  border-radius: 8px;
  text-align: center;
  border-width: 1px;
  border-style: solid;
  border-color: #222222;
  background: #ffffff;
  padding: 7px 15px;

  span {
    font-size: 14px;
    font-weight: 500;
  }
`;

const TopBlock = () => {
  return (
    <>
      <TopWrapper>
        <WallpaperWrapper>
          <picture>
            <TopWallpaper srcSet={wallpaper} />
          </picture>
        </WallpaperWrapper>
        <ButtonWrapper>
          <InnerBox>
            <TextWrapper>
              이제, 여행은
              <br />
              가까운 곳에서
            </TextWrapper>
            <LinkContainer>
              <Link to="/" /* homes/location_search=NEARBY */>
                <span>근처의 숙소 둘러보기</span>
              </Link>
            </LinkContainer>
          </InnerBox>
        </ButtonWrapper>
      </TopWrapper>
    </>
  );
};

export default TopBlock;
