import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RightPanel = ({ isButtonDisabled, courseCount }) => {
  return (
    <RightPanelContainer>
      <Link to={`/TransPage?courseCount=${courseCount}`}>
        <button disabled={isButtonDisabled}>수강신청 Go</button>
      </Link>
    </RightPanelContainer>
  );
};

const RightPanelContainer = styled.section`
  flex: 1;
`;

export default RightPanel;
