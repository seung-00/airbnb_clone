import React from 'react';
import styled from 'styled-components';

const FenceBlock = styled.div`
  border-right: 1px solid #dddddd;
  height: 32px;
  flex: 0 0 0px;
  align-self: center;
`;
const Fence = () => {
  return <FenceBlock />;
};

export default Fence;
