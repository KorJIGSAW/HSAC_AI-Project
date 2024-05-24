import React, { useRef, useEffect } from 'react';
import { theme } from '../../../styles/theme';

function CalendarTable() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // 기본 캔버스 크기
    const baseWidth = 700;
    const baseHeight = 537;
    
    // 실제 화면 크기에 맞추기
    const scale = window.devicePixelRatio;
    canvas.width = baseWidth * scale;
    canvas.height = baseHeight * scale;
    canvas.style.width = `${baseWidth}px`;
    canvas.style.height = `${baseHeight}px`;

    // 스케일링 적용
    ctx.scale(scale, scale);

    // 캔버스 배경색을 하얀색으로 설정
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, baseWidth, baseHeight);

    // 기본 설정
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;

    // 과목 색상 설정
    const subjectColors = {
      '데이터 베이스': theme.blue300,
      '운영체제': theme.green300,
      '네트워크': theme.purple300,
      '자료구조': theme.beige300,
      '알고리즘': theme.orange300,
      '객체 지향 언어': theme.pink300,
      '데이터 통신': theme.yellow300,
      '응용 수학': theme.red300,
      '웹 프레임 워크': theme.beige400,
    };

    // 시간표 그리기
    const days = ['월', '화', '수', '목', '금'];
    const dayWidth = baseWidth / (days.length + 1); // 6개의 구분선(5개의 요일 + 1)
    const timeSlots = 14;
    const timeHeight = baseHeight / (timeSlots + 1); // 15개의 구분선(14개의 시간 + 1)

    // 수직선 (요일 구분)
    for (let i = 0; i <= days.length + 1; i++) {
      ctx.moveTo(i * dayWidth, 0);
      ctx.lineTo(i * dayWidth, baseHeight);
      ctx.stroke();
    }

    // 수평선 (시간 구분)
    for (let i = 0; i <= timeSlots + 1; i++) {
      ctx.moveTo(0, i * timeHeight);
      ctx.lineTo(baseWidth, i * timeHeight);
      ctx.stroke();
    }

    // 요일 텍스트 추가
    ctx.font = '16px Arial';
    ctx.fillStyle = 'black';
    days.forEach((day, index) => {
      ctx.fillText(day, (index+1) * dayWidth + dayWidth / 2 - 8, 20);
    });

    // 시간 텍스트 추가
    for (let i = 9; i <= 21; i++) {
      ctx.fillText(`${i}시`, 10, (i - 8) * timeHeight + timeHeight / 2 + 5);
    }

    // 과목 그리기
    function drawSubject(day, startTime, studyTime, subject) {
      const dayIndex = days.indexOf(day) + 1; // 첫 번째 열은 시간 표시용
      const x = dayIndex * dayWidth;
      const y = (startTime - 9) * timeHeight + timeHeight;
      const height = studyTime * timeHeight;

      // 과목 배경 색칠
      ctx.fillStyle = subjectColors[subject] || 'lightblue'; // 과목 배경색
      ctx.fillRect(x + 1, y + 1, dayWidth - 2, height - 2);

      // 상단 검은 선
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + dayWidth, y);
      ctx.stroke();

      // 하단 검은 선
      ctx.beginPath();
      ctx.moveTo(x, y + height);
      ctx.lineTo(x + dayWidth, y + height);
      ctx.stroke();

      // 과목명 텍스트
      ctx.fillStyle = 'black'; // 텍스트 색상
      ctx.font = '13px Arial';
      ctx.fillText(subject, x + 5, y + 15); // 과목명 위치 조정
    }

    // 과목 정보를 기반으로 과목 그리기
    drawSubject("월", 9, 1.5, "데이터베이스");
    drawSubject("화", 10, 1, "운영체제");
    drawSubject("수", 14, 1.5, "네트워크");
    drawSubject("목", 12, 1, "데이터베이스");
    drawSubject("금", 13, 1.5, "운영체제");
    drawSubject("수", 9, 3, "황기태");

    // 화요일
    drawSubject("화", 10, 1, "운영체제");
    drawSubject("화", 11.5, 1.5, "객체 지향 언어");

    // 수요일
    drawSubject("수", 14, 1.5, "네트워크");
    drawSubject("수", 16, 1, "데이터 통신");

    // 목요일
    drawSubject("목", 12, 1, "데이터 베이스");
    drawSubject("목", 13.5, 1.5, "응용 수학");

    // 금요일
    drawSubject("금", 13, 1.5, "운영체제");
    drawSubject("금", 15, 1, "웹 프레임 워크");
    drawSubject("금", 16.5, 1, "알고리즘");
  }, []);

  return <canvas ref={canvasRef} />;
}

export default CalendarTable;
