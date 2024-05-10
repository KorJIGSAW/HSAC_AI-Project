/*import React, { useState, useEffect } from 'react';

// CourseForm 컴포넌트: 과목 코드와 분반 입력을 받아 추가하는 기능을 제공
function CourseForm({ addCourse }) {
  const [courseCode, setCourseCode] = useState('');
  const [division, setDivision] = useState('');

  // 폼 제출 핸들러
  const handleSubmit = event => {
    event.preventDefault();
    addCourse({ courseCode, division });
    setCourseCode('');
    setDivision('');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="course-form">
        <input
          type="text"
          placeholder="과목 코드"
          value={courseCode}
          onChange={e => setCourseCode(e.target.value)}
        />
        <input
          type="text"
          placeholder="분반"
          value={division}
          onChange={e => setDivision(e.target.value)}
        />
        <button type="submit" style={{ marginLeft: '10px' }}>
          추가하기
        </button>
      </form>
    </div>
  );
}

// CourseList 컴포넌트: 입력된 과목들을 저장하고 로컬 스토리지에만 저장하는 기능
function CourseList() {
  const [courses, setCourses] = useState([]);

  // 컴포넌트 마운트 시 로컬 스토리지에서 과목 데이터 로드
  useEffect(() => {
    const savedCourses = localStorage.getItem('courses');
    if (savedCourses) {
      setCourses(JSON.parse(savedCourses));
    }
  }, []);

  // 과목 데이터가 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem('courses', JSON.stringify(courses));
  }, [courses]);

  // 새 과목을 추가하는 함수
  const addCourse = course => {
    setCourses(prevCourses => {
      const updatedCourses = [...prevCourses, course].sort((a, b) =>
        a.courseCode.localeCompare(b.courseCode)
      );
      return updatedCourses;
    });
  };

  // 로컬 스토리지에서 저장된 데이터를 삭제하는 함수
  const clearLocalStorage = () => {
    localStorage.removeItem('courses');
    setCourses([]); // 컴포넌트 상태도 업데이트하여 화면 갱신
  };

  // Clear Data 버튼을 클릭하여 로컬 스토리지에 저장된 데이터 삭제
  return (
    <div className="course-list-container">
      <br />
      <h1 style={{ fontSize: '24px' }}>장바구니 담기</h1>
      <br />
      <div className="action-buttons">
        <CourseForm addCourse={addCourse} />
        <button onClick={clearLocalStorage} style={{ marginRight: '10px' }}>
          Clear Data
        </button>
      </div>
    </div>
  );
}

export default CourseList;
*/

import React, { useState } from 'react';

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
        <br />
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

export default CourseForm;
