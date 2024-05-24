import React, { useRef, useEffect } from 'react';
import { theme } from '../../../styles/theme';

function CalendarTable() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // 캔버스 크기 설정
    canvas.width = 850;
    canvas.height = 710;

    // 기본 설정
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;

    // 과목 색상 설정
    const subjectColors = {
      '데이터베이스': theme.blue300,
      '운영체제': theme.green300,
      '네트워크': theme.purple300,
    };

    // 시간표 그리기
    // 수직선 (요일 구분)
    for (let i = 1; i <= 6; i++) {
      ctx.moveTo(i * 150 - 80, 0);
      ctx.lineTo(i * 150 - 80, 700);
      ctx.stroke();
    }

    // 수평선 (시간 구분)
    for (let i = 1; i <= 14; i++) {
      ctx.moveTo(0, i * 50);
      ctx.lineTo(820, i * 50);
      ctx.stroke();
    }

    // 텍스트 추가
    ctx.font = '16px Arial';
    ctx.fillText('월', 75, 20);
    ctx.fillText('화', 225, 20);
    ctx.fillText('수', 375, 20);
    ctx.fillText('목', 525, 20);
    ctx.fillText('금', 675, 20);

    // 시간 추가
    for (let i = 9; i <= 21; i++) {
      ctx.fillText(`${i}시`, 10, (i - 8) * 50 + 20);
    }

    // 과목 그리기
    function drawSubject(day, startTime, studyTime, subject) {
      const days = ['월', '화', '수', '목', '금'];
      const dayIndex = days.indexOf(day);
      const x = 71 + dayIndex * 150;
      const y = (startTime - 9) * 50 + 51;
      const height = studyTime * 50 - 2;

      // 과목 배경 색칠
      ctx.fillStyle = subjectColors[subject] || 'lightblue'; // 과목 배경색
      ctx.fillRect(x, y, 148, height);

      // 과목명 텍스트
      ctx.fillStyle = 'black'; // 텍스트 색상
      ctx.fillText(subject, x + 5, y + 25); // 과목명 위치 조정
    }

    // 과목 정보를 기반으로 과목 그리기
    drawSubject("월", 9, 1.5, "데이터베이스");
    drawSubject("화", 10, 1, "운영체제");
    drawSubject("수", 14, 1.5, "네트워크");
    drawSubject("목", 12, 1, "데이터베이스");
    drawSubject("금", 13, 1.5, "운영체제");
    drawSubject("수", 9, 3, "황기태");

  }, []);

  return <canvas ref={canvasRef} />;
}

export default CalendarTable;
