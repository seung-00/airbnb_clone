/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import useComponentVisible from '@/utils/hooks/useComponentVisible';

const HeadCountWrapper = styled.div`
  flex: 0.95;
`;

const HeadCountBlock = ({
  ButtonInnerWrapper,
  SearchOptionText,
  ButtonInnerText,
  OptionButton,
}) => {
  const [
    refHeadCount,
    isHeadCountVisible,
    setHeadCountVisible,
  ] = useComponentVisible(false);
  return (
    <HeadCountWrapper>
      <div className="check-in-block" ref={refHeadCount}>
        <label>
          <OptionButton
            hoverColor={'#EBEBEB'}
            isComponentVisible={isHeadCountVisible}
            onClick={() => setHeadCountVisible(true)}
          >
            <ButtonInnerWrapper>
              <SearchOptionText>인원</SearchOptionText>
              <ButtonInnerText>게스트 추가</ButtonInnerText>
            </ButtonInnerWrapper>
          </OptionButton>
        </label>
      </div>
    </HeadCountWrapper>
  );
};

export default HeadCountBlock;
