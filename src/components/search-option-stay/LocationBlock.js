import React from 'react';
import styled from 'styled-components';
import BaseButton from '@/components/common/BaseButton';

const LocationButton = styled(BaseButton)`
  border-radius: 32px;
  border: 1px solid transparent;
  position: relative;
  &:focus-within {
    &::after {
      border-radius: 32px;
      border: 1px solid transparent;
      bottom: 0px;
      content: '';
      position: absolute;
      top: 0px;
      z-index: 0;
      background-color: rgb(255, 255, 255);
      box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 20px;
      left: 0px;
      right: 0px;
    }
  }
`;

const ButtonInnerWrapper = styled.div`
  position: relative;
  z-index: 3;
  padding: 12px 30px;
`;

const SearchOptionText = styled.div`
  font-weight: 700;
  letter-spacing: 0.3em;
  font-size: 12px;
  line-height: 16px;
  padding-bottom: 2px;
`;

const LocationInput = styled.input`
  border: 0px;
  padding: 0px;
  background: none;
  &:focus {
    outline-width: 0px;
  }
`;

const LocationWrapper = styled.div`
  flex: 1.3;
  margin: -2px;
`;

const LocationBlock = () => {
  return (
    <LocationWrapper>
      <label>
        <LocationButton hoverColor={'#EBEBEB'}>
          <ButtonInnerWrapper>
            <SearchOptionText>위치</SearchOptionText>
            <LocationInput placeholder="어디로 여행가세요?" autoFocus />
          </ButtonInnerWrapper>
        </LocationButton>
      </label>
    </LocationWrapper>
  );
};

export default LocationBlock;
