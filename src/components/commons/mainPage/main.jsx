import React, { useState } from 'react';
import styled from 'styled-components';
import RightPanel from './Right';
import LeftPanel from './Left';
import Header from './Header';

const Main = () => {
  const [courseCount, setCourseCount] = useState('');

  return (
    <MainPage>
      <Header />
      <LeftPanel setCourseCount={setCourseCount} />
      <RightPanel isButtonDisabled={!courseCount} courseCount={courseCount} />
    </MainPage>
  );
};

const MainPage = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;

  section {
    min-height: 200vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
  }
`;

export default Main;
