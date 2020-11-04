import React from 'react';
import styled from 'styled-components';
import LocationBlock from '@/components/search-stay/LocationBlock';
import CheckIOBlock from '@/components/search-stay/CheckIOBlock';
import HeadCountBlock from '@/components/search-stay/HeadCountBlock';
import Fence from '@/components/common/Fence';

const StayWrapper = styled.div`
  border: 1px solid rgb(221, 221, 221);
  border-radius: 32px;
  color: rgb(34, 34, 34);
  display: flex;
  height: 60px;
  position: relative;
  background-color: rgb(247, 247, 247);
`;

const StayBlock = () => {
  return (
    <StayWrapper>
      <LocationBlock />
      <Fence />
      <CheckIOBlock />
      <Fence />
      <HeadCountBlock />
    </StayWrapper>
  );
};

export default StayBlock;
