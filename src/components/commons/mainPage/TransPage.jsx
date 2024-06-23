import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const TransPage = () => {
  const location = useLocation();
  const [courseCount, setCourseCount] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const count = params.get('courseCount');
    setCourseCount(count);
  }, [location.search]);

  return (
    <div>
      <h1>수강신청 과목 개수: {courseCount}</h1>
    </div>
  );
};

export default TransPage;
