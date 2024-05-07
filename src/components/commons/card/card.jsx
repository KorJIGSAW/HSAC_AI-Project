import styled from 'styled-components';
import ApplycationButton from '../button/applicationButton';

export default function Card() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>
          <S.Title>[T204998] POP 디자인실험</S.Title>
          <S.FlexContainer>
            <S.FlexRow>
              {/* 헤더 제목 행 */}
              <S.FlexItem>타과1</S.FlexItem>
              <S.FlexItem>타과2</S.FlexItem>
              <S.FlexItem>타과3</S.FlexItem>
              <S.FlexItem>타과4</S.FlexItem>
              <S.FlexItem>편입</S.FlexItem>
              <S.FlexItem>차과</S.FlexItem>
            </S.FlexRow>
            <S.FlexRow>
              {/* 데이터 행 */}
              <S.FlexCell>0</S.FlexCell>
              <S.FlexCell>0</S.FlexCell>
              <S.FlexCell>0</S.FlexCell>
              <S.FlexCell>0</S.FlexCell>
              <S.FlexCell>0</S.FlexCell>
              <S.FlexCell>25</S.FlexCell>
            </S.FlexRow>
          </S.FlexContainer>
        </S.Header>
        <S.Section>
          <S.Info> A | 전선 | 3학점 | 주간 | 박원철 </S.Info>
          <S.Time> 창의관501 수1~3M </S.Time>
        </S.Section>
        <S.Button>
          <ApplycationButton />
        </S.Button>
      </S.Wrapper>
    </S.Container>
  );
}

const S = {
  //container
  Container: styled.div`
    //나중에 없애기 마진
    margin-top: 20px;
    margin-left: 20px;

    padding: 0.8rem 0.5rem 0.5rem 0.8rem;
    width: 65rem;
    background: ${({ theme }) => theme.white};
    border: 0.15rem solid ${({ theme }) => theme.gray300};
  `,

  Wrapper: styled.div`
    color: ${({ theme }) => theme.black};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,

  //header
  Header: styled.div`
    width: 30rem;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    justify-content: flex-start;
  `,

  Title: styled.h1`
    font-size: 1.6rem;
    color: ${({ theme }) => theme.black};
  `,

  //flex-container
  FlexContainer: styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${({ theme }) => theme.black};
    background-color: ${({ theme }) => theme.gray200};
  `,

  FlexItem: styled.div`
    font-size: 1.2rem;
    flex: 1;
    text-align: center;
    width: 1rem;
    border-right: 1px solid #ccc;
    padding: 0.2rem;
  `,

  FlexRow: styled.div`
    display: flex;
  `,

  FlexCell: styled.div`
    font-size: 1.2rem;
    flex: 1;
    padding: 0.2rem;
    text-align: center;
    border-right: 0.1rem solid #ccc;
    background-color: ${({ theme }) => theme.white};
  `,

  //section
  Section: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-right: 5rem;
  `,

  Info: styled.p`
    margin-top: 0.3rem;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.gray500};
  `,

  Time: styled.p`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.blue500};
    font-weight: bold;
  `,

  //button
  Button: styled.div`
    display: flex;
    justify-content: flex-end;
  `,
};
