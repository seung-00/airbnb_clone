import React from 'react';
import styled from 'styled-components';
import Fence from '@/components/common/Fence';
import SearchInputBlock from '@/components/search-option/SearchInputBlock';

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
        <SearchInputBlock
          form={'experience'}
          name={'location'}
          namePrint={'위치'}
          inputPlaceholder={'어디로 여행가세요?'}
          isFocus={true}
        />
      </LocationWrapper>
      <Fence />
      <DateWrapper>
        <SearchInputBlock
          form={'experience'}
          name={'date'}
          namePrint={'날짜'}
          inputPlaceholder={'원하시는 날짜를 입력하세요.'}
        />
      </DateWrapper>
    </>
  );
};

export default ExperienceBlock;
