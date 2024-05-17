import React, { useState } from 'react';
import styled from 'styled-components';

const Left = () => {
  return (
    <MainLeftPage>
      <CourseForm />
    </MainLeftPage>
  );
};

const MainLeftPage = styled.section`
  flex: 1;
`;
function CourseForm() {
  const [courseCountInput, setCourseCountInput] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    localStorage.setItem('courseCount', courseCountInput);
    setCourseCountInput('');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="course-form">
        <br />
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
    </div>
  );
}

export default Left;
