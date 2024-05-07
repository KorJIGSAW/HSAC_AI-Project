import styled from 'styled-components';
import { useState } from 'react';

export default function ApplycationButton() {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleClick = () => {
    setIsCompleted(prev => !prev);
  };

  return (
    <S.Button onClick={handleClick} $completed={isCompleted}>
      {isCompleted ? '완료' : '신청'}
    </S.Button>
  );
}

const S = {
  Button: styled.button`
    height: 2.8rem;
    padding: 0 0.35rem;
    background: ${({ theme, $completed }) =>
      $completed ? theme.gray400 : theme.green500};
    color: ${({ theme }) => theme.white};
    font-size: 14px;
    font-weight: 500;
    border-radius: 0.3rem;
    cursor: pointer;
  `,
};
