import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StayResultBlock = styled.main`
  position: relative;
  margin-top: 80px;
  background-color: lightgray;
  height: 100vh;
`;

const TextArea = styled.div`
  position: relative;
  padding: 40px 0 0 100px;
`;

const StayPage = () => {
  const { location, checkIn, checkOut, guestNum } = useSelector(
    ({ search }) => ({
      location: search.stay.location,
      checkIn: search.stay.checkIn,
      checkOut: search.stay.checkOut,
      guestNum: search.stay.guestNum,
    })
  );
  return (
    <StayResultBlock>
      <TextArea>
        <h1>Here's what you entered.</h1>
        <ul>
          <li>{`location: ${location}`}</li>
          <li>{`check in: ${checkIn}`}</li>
          <li>{`check out: ${checkOut}`}</li>
          <li>{`guest number: ${guestNum}`}</li>
        </ul>
      </TextArea>
    </StayResultBlock>
  );
};

export default StayPage;
