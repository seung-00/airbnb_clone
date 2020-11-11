import React from 'react';
import styled from 'styled-components';
import CardBlock from './CardBlock';

const NearbyWrapper = styled.div`
  background-color: transparent;
  margin: 40px 0px 40px 0px;
  position: relative;
  padding-right: 80px;
  padding-left: 80px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
`;

const NearbyBlock = () => {
  return (
    <NearbyWrapper>
      <CardContainer>
        <CardBlock region="서울" distance="45분" />
        <CardBlock region="수원시" distance="15분" />
        <CardBlock region="인천" distance="45분" />
        <CardBlock region="의정부시" distance="1시간" />
        <CardBlock region="대전" distance="2시간" />
        <CardBlock region="대구" distance="3.5시간" />
        <CardBlock region="성남시" distance="30분" />
        <CardBlock region="안산시" distance="30분" />
      </CardContainer>
    </NearbyWrapper>
  );
};

export default NearbyBlock;
