import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ExperienceResultBlock = styled.main`
  position: relative;
  margin-top: 80px;
  background-color: lightgray;
  height: 100vh;
`;

const TextArea = styled.div`
  position: relative;
  padding: 40px 0 0 100px;
`;

const ExperiencePage = () => {
  const { location, date } = useSelector(({ search }) => ({
    location: search.experience.location,
    date: search.experience.date,
  }));
  return (
    <ExperienceResultBlock>
      <TextArea>
        <h1>Here's what you entered.</h1>
        <ul>
          <li>{`location: ${location}`}</li>
          <li>{`date: ${date}`}</li>
        </ul>
      </TextArea>
    </ExperienceResultBlock>
  );
};

export default ExperiencePage;
