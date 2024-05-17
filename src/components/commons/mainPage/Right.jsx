import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Right = () => {
  return (
    <MainRightPage>
      <Link to="https://www.naver.com/">
        <button>수강신청 Go</button>
      </Link>
    </MainRightPage>
  );
};

const MainRightPage = styled.section`
  flex: 1;
  /* width: 50%; */
  /* min-height: 100vh; */
`;

export default Right;
