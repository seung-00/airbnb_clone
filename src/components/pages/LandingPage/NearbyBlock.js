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

const cardData = [
  { region: '서울', distance: '45분' },
  { region: '수원시', distance: '15분' },
  { region: '인천', distance: '45분' },
  { region: '의정부시', distance: '1시간' },
  { region: '대전', distance: '2시간' },
  { region: '대구', distance: '3.5시간' },
  { region: '성남시', distance: '30분' },
  { region: '안산시', distance: '30분' },
];

const NearbyBlock = () => {
  return (
    <NearbyWrapper>
      <CardContainer>
        {cardData.map((data, index) => (
          <CardBlock
            key={index}
            region={data.region}
            distance={data.distance}
          />
        ))}
      </CardContainer>
    </NearbyWrapper>
  );
};

export default NearbyBlock;
