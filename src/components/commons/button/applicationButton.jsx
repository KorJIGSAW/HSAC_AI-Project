import styled from 'styled-components';

export default function ApplycationButton() {
  return <S.button>신청</S.button>;
}

const S = {
  button: styled.button`
  height: 2.8rem;
    padding: 0 0.35rem;
    background: ${({ theme }) => theme.green500};
    color: ${({ theme }) => theme.white};
    font-size: 14px;
    font-weight: 500;
    border-radius: 0.3rem;
    cursor: pointer;
  `,
};
