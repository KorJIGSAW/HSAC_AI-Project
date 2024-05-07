import React from 'react';
import styled from 'styled-components';

// 스타일 컴포넌트 정의
const ScheduleContainer = styled.div`
  display: flex;
`;

const DayColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #f0f0f0;
`;

const TimeSlot = styled.div`
  flex: 1;
  border: 1px solid #f0f0f0;
  padding: 10px;
  text-align: center;
  min-height: 50px;
`;

const Hour = styled.div`
  background-color: #f9f9f9;
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #f0f0f0;
`;

const HoursContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
`;

const DayLabel = styled.div`
  min-width: 50px;
  text-align: center;
  font-weight: bold;
`;

const scheduleData = {
  "월": {"오전 9": "미적분학", "오전 11": "컴퓨터 과학"},
  "화": {"오전 9": "물리학", "오전 11": "영문학"},
  "수": {"오전 9": "화학", "오전 11": "생물학"},
  "목": {"오전 9": "역사", "오전 11": "경제학"},
  "금": {"오전 9": "정치학", "오전 11": "문학"},
};


// scheduleData 및 hours는 변경 없음
const hours = ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"];

export default function Calendar() {
  return (
    <ScheduleContainer>
      {Object.keys(scheduleData).map(day => (
        <DayColumn key={day}>
          <DayLabel>{day}</DayLabel> {/* 각 요일을 표시 */}
          {hours.map((hour, index) => {
            // 해당 시간에 맞는 수업 정보를 찾아 표시합니다.
            const classInfo = scheduleData[day][hour];
            return (
              <TimeSlot key={index}>
                {classInfo || ''}
              </TimeSlot>
            );
          })}
        </DayColumn>
      ))}
      <HoursContainer>
        <DayLabel>시간</DayLabel> {/* 요일 표시를 위한 레이블 추가 */}
        {hours.map((hour, index) => (
          <Hour key={index}>{hour}</Hour>
        ))}
      </HoursContainer>
    </ScheduleContainer>
  );
}




