import React, { useState } from 'react';
import styled from 'styled-components';

const LeftPanel = ({ setCourseCount }) => {
  const [courseCountInput, setCourseCountInput] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    setCourseCount(courseCountInput);
    localStorage.setItem('courseCount', courseCountInput);
    setCourseCountInput('');
  };

  return (
    <LeftPanelContainer>
      <form onSubmit={handleSubmit}>
        <h1 style={{ fontSize: '24px' }}>수강신청할 과목 개수</h1>
        <input
          type="number"
          placeholder="신청할 과목 개수"
          value={courseCountInput}
          onChange={e => setCourseCountInput(e.target.value)}
        />
        <button type="submit" style={{ marginLeft: '10px' }}>
          제출하기
        </button>
      </form>
    </LeftPanelContainer>
  );
};

const LeftPanelContainer = styled.section`
  flex: 1;
`;

export default LeftPanel;
