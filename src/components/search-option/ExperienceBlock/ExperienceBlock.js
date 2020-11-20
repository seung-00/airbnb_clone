import React from 'react';
import styled from 'styled-components';
import Fence from '@/components/common/Fence';
import LocationBlock from '@/components/search-option/LocationBlock';
import OptionButtonBlock from '@/components/search-option/OptionButtonBlock';

const LocationWrapper = styled.div`
  flex: 1;
  margin: -2px;
`;
const DateWrapper = styled.div`
  flex: 1;
  margin: -2px;
`;

const ExperienceBlock = () => {
  return (
    <>
      <LocationWrapper>
        <LocationBlock />
      </LocationWrapper>
      <Fence />
      <DateWrapper>
        <OptionButtonBlock
          category="날짜"
          description="원하는 날짜를 입력하세요."
        />
      </DateWrapper>
    </>
  );
};

export default ExperienceBlock;
