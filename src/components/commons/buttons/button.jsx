import styled from 'styled-components';

export default function Button({ onClick, children, status }) {
  return (
    <S.Button onClick={onClick} status={status}>
      {children}
    </S.Button>
  );
}

const S = {
  Button: styled.button`
    height: 2.8rem;
    padding: 0 0.35rem;
    background: ${({ theme, status }) => {
      switch (status) {
        case 'basic':
          return theme.green500;
        case 'quick':
          return theme.blue500;
        case 'cancel':
          return theme.red;
        default:
          return theme.green;
      }
    }};
    color: ${({ theme }) => theme.white};
    font-size: 14px;
    font-weight: 500;
    border-radius: 0.3rem;
    cursor: pointer;
  `,
};
