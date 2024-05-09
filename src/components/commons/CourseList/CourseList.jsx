import React, { useState, useEffect } from 'react';

function CourseForm({ addCourse }) {
  const [courseCode, setCourseCode] = useState('');
  const [division, setDivision] = useState('');
  const [creditValue, setCreditValue] = useState('');
  const [credit, setCredit] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    addCourse({
      courseCode,
      division,
      creditValue,
      credit: parseFloat(creditValue) >= 4.0,
    });
    setCourseCode('');
    setDivision('');
    setCreditValue('');
    setCredit(parseFloat(creditValue) >= 4.0);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="course-form">
        <input
          type="text"
          placeholder="학점"
          value={creditValue}
          onChange={e => setCreditValue(e.target.value)}
        />
        <br />
        <br />

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

function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const savedCourses = localStorage.getItem('courses');
    if (savedCourses) {
      setCourses(JSON.parse(savedCourses));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('courses', JSON.stringify(courses));
  }, [courses]);

  const addCourse = course => {
    setCourses(prevCourses => {
      const updatedCourses = [...prevCourses, course].sort((a, b) =>
        a.courseCode.localeCompare(b.courseCode)
      );
      return updatedCourses;
    });
  };

  const clearLocalStorage = () => {
    localStorage.removeItem('courses');
    setCourses([]); // 컴포넌트 상태도 업데이트하여 화면 갱신
  };

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
