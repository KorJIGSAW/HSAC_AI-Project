import styled from 'styled-components';

export default function ApplycationButton({ onClick }) {
  return <S.Button onClick={onClick}>신청</S.Button>;
}

const S = {
  Button: styled.button`
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
