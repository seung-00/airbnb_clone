import React from 'react';
import styled from 'styled-components';
import BaseButton from '@/components/common/BaseButton';

const HeadCountWrapper = styled.div`
  flex: 0.95;
`;
const HeadCountButton = styled(BaseButton)``;

const HeadCountBlock = () => {
  return (
    <HeadCountWrapper>
      <label className="input-wrapper">
        <HeadCountButton
          grayBackground
          backColor={'lightgray'}
        ></HeadCountButton>
      </label>
    </HeadCountWrapper>
  );
};

export default HeadCountBlock;
