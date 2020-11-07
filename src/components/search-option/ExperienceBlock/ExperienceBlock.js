import React from 'react';
import styled from 'styled-components';
import Fence from '@/components/common/Fence';
import LocationBlock from '@/components/search-option/LocationBlock';
import useComponentVisible from '@/utils/hooks/useComponentVisible';
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
  const [refDate, isDateVisible, setDateVisible] = useComponentVisible(false);

  return (
    <>
      <LocationWrapper>
        <LocationBlock />
      </LocationWrapper>
      <Fence />
      <DateWrapper ref={refDate}>
        <OptionButtonBlock
          category="날짜"
          description="원하는 날짜를 입력하세요."
          isButtonVisible={isDateVisible}
          setButtonVisible={setDateVisible}
        />
      </DateWrapper>
    </>
  );
};

export default ExperienceBlock;
