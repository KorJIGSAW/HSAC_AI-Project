import React from 'react';
import styled from 'styled-components';

// 스타일 컴포넌트 정의
const Table = styled.table`
  width: 100%;
  border-collapse: collapse; /* 테이블 셀 사이의 간격을 없앱니다. */
`;

const TableCell = styled.td`
  border: 1px solid #f0f0f0; /* 셀마다 구분선을 추가합니다. */
  text-align: center;
  padding: 10px;
`;

const TableHeader = styled.th`
  border: 1px solid #f0f0f0; /* 헤더 셀마다 구분선을 추가합니다. */
  text-align: center;
  padding: 10px;
  background-color: #f9f9f9; /* 배경색을 추가합니다. */
`;

const scheduleData = {
  "월": {"오전 9": "미적분학", "오전 11": "컴퓨터 과학"},
  "화": {"오전 9": "물리학", "오전 11": "영문학"},
  "수": {"오전 9": "화학", "오전 11": "생물학"},
  "목": {"오전 9": "역사", "오전 11": "경제학"},
  "금": {"오전 9": "정치학", "오전 11": "문학"},
};

const hours = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"];

export default function CalendarTable() {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeader>시간/요일</TableHeader>
          {Object.keys(scheduleData).map(day => (
            <TableHeader key={day}>{day}</TableHeader>
          ))}
        </tr>
      </thead>
      <tbody>
        {hours.map((hour, index) => (
          <tr key={index}>
            <TableCell>{hour}</TableCell>
            {Object.keys(scheduleData).map(day => {
              const hourKey = hour === "09:00" ? "오전 9" : hour === "11:00" ? "오전 11" : hour;
              const classInfo = scheduleData[day][hourKey];
              return <TableCell key={day}>{classInfo || ''}</TableCell>;
            })}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
