import React from 'react';
import styled from 'styled-components';
import BaseButton from '../common/BaseButton';
// import BaseButton from '../common/BaseButton';

const StayWrapper = styled.div`
  border: 1px solid rgb(221, 221, 221);
  border-radius: 32px;
  color: rgb(34, 34, 34);
  display: flex;
  height: 60px;
  position: relative;
  background-color: rgb(247, 247, 247);
`;

const StayOptionContainer = styled.div`
  display: flex;
  flex: 1 1 0%;
`;

const Fence = styled.div`
  border-right: 1px solid #dddddd;
  height: 32px;
  flex: 0 0 0px;
  align-self: center;
`;

const LocationOption = styled(BaseButton)`
  flex: 1.5 0 0%;
`;
const CheckOption = styled(BaseButton)`
  flex: 2 0 0%;
`;
const HeadCountOption = styled(BaseButton)`
  flex: 0.95 0 0%;
`;

const StayBlock = () => {
  return (
    <StayWrapper>
      <StayOptionContainer>
        <LocationOption grayBackground backColor={'lightgray'}>
          gd
        </LocationOption>
        <Fence />
        <CheckOption grayBackground backColor={'lightgray'}>
          gd
        </CheckOption>
        <Fence />
        <HeadCountOption grayBackground backColor={'lightgray'}>
          gd
        </HeadCountOption>
      </StayOptionContainer>
    </StayWrapper>
  );
};

export default StayBlock;
