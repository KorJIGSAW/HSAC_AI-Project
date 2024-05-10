import React from 'react';
import styled from 'styled-components';

// 스타일 컴포넌트 정의
const Table = styled.table`
  width: 50%; // 전체 테이블 너비를 줄입니다.
  border-collapse: collapse;
  font-size: 12px; // 전체 테이블의 폰트 사이즈를 줄입니다.
`;

const TableCell = styled.td`
  border: 1px solid #f0f0f0;
  text-align: center;
  padding: 5px; // 셀의 패딩을 줄입니다.
  height: 20px; // 셀의 최소 높이를 설정합니다.
  display: table-cell;
  vertical-align: middle; // 셀 내용을 수직 중앙에 배치합니다.
  &:not(:first-child):empty {
    border-top: 1px dashed #f0f0f0; /* 빈 셀의 상단에 점선을 추가합니다. */
  }
`;

const TableHeader = styled.th`
  border: 1px solid #f0f0f0;
  text-align: center;
  padding: 5px; // 헤더의 패딩을 줄입니다.
  background-color: #f9f9f9;
  width: calc(80% / 6); // 헤더의 너비를 조정합니다.
`;

const scheduleData = {
  "월": {"오전 9": "미적분학", "오전 11": "컴퓨터 과학"},
  "화": {"오전 9": "물리학", "오전 11": "영문학"},
  "수": {"오전 9": "화학", "오전 11": "생물학"},
  "목": {"오전 9": "역사", "오전 11": "경제학"},
  "금": {"오전 9": "정치학", "오전 11": "문학"},
};

// 시간 배열에 30분 단위 추가
const hours = ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"];

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
        {hours.map((hour, index) => {
          const isHalfHour = hour.endsWith(":30");
          return (
            <tr key={index}>
              {/* 30분 단위의 시간은 표시하지 않습니다. */}
              <TableCell>{isHalfHour ? '' : hour}</TableCell>
              {Object.keys(scheduleData).map(day => {
                const hourKey = hour === "09:00" ? "오전 9" : hour === "11:00" ? "오전 11" : hour;
                const classInfo = scheduleData[day][hourKey];
                // 30분 단위의 셀은 내용을 표시하지 않습니다.
                return <TableCell key={day}>{isHalfHour ? '' : classInfo || ''}</TableCell>;
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
