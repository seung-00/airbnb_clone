import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  height: 80px;
  width: calc((100% - 48px) / 4);
  margin-right: 8px;
  margin-bottom: 16px;
  margin-left: 0px;
  background-color: transparent;
  align-items: center;
  a {
    // Link
    &.card-container {
      display: flex;
      align-items: center;
    }
  }
`;

const ImageWrapper = styled.div`
  flex: 0 0 64px;
  height: 64px;
  border-radius: 8px;
  width: 64px;
  overflow: hidden;
  margin-right: 16px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  span {
    flex: 0 1 100%;
  }
`;

const CardBlock = ({ region, distance }) => {
  return (
    <CardWrapper>
      <Link to="/" /* region */ className="card-container">
        <ImageWrapper>
          <img
            src={require('@/img/cities/' + region + '.webp')}
            width="64px"
            height="64px"
          />
        </ImageWrapper>
        <TextWrapper>
          <span className="regieon">
            <b>{region}</b>
          </span>
          <span className="distance">차로 {distance} 거리</span>
        </TextWrapper>
      </Link>
    </CardWrapper>
  );
};

export default CardBlock;
