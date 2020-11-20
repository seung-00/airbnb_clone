import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #f7f7f7;
  border-top: 1px solid #dddddd;
  height: 200px;
`;

const FooterContent = styled.div`
  padding: 32px 100px 0 100px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent></FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
