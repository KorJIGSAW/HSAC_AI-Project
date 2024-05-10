import React, { useState, useEffect } from 'react';

function CourseForm({ addCourse }) {
  //useState()로 싱테 빋기
  const [courseCode, setCourseCode] = useState('');
  const [division, setDivision] = useState('');
  const [creditValue, setCreditValue] = useState('');
  const [credit, setCredit] = useState(false);

  //폼 제출 핸들러
  const handleSubmit = event => {
    event.preventDefault();
    addCourse({
      courseCode,
      division,
      creditValue,
      credit: parseFloat(creditValue) >= 4.0,
    });
    //초기화
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
  const [courses, setCourses] = useState([]); //과목 목록

  //과목 목록 불러오기
  useEffect(() => {
    const savedCourses = localStorage.getItem('courses');
    if (savedCourses) {
      setCourses(JSON.parse(savedCourses));
    }
  }, []);

  //목록 변경될 때마다 로컬 스토리지 업데이트
  useEffect(() => {
    localStorage.setItem('courses', JSON.stringify(courses));
  }, [courses]);

  //내림차순으로 로컬 스토리지 업데이트
  const addCourse = course => {
    setCourses(prevCourses => {
      const updatedCourses = [...prevCourses, course].sort((a, b) =>
        a.courseCode.localeCompare(b.courseCode)
      );
      return updatedCourses;
    });
  };

  //로컬 스토리지 상태 업데이트
  const clearLocalStorage = () => {
    localStorage.removeItem('courses');
    setCourses([]);
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
