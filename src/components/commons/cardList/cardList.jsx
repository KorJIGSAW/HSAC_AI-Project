import Card from 'components/commons/card/card';
import styled from 'styled-components';
import { mockData } from 'mockDatas/cardListMockData';

export default function CardList() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>
          <S.Title>[과목코드] 교과목명</S.Title>
          <S.Description>
            분반 | 이수 | 학점 | 주야 | 학년 | 담당교수 | 비고
          </S.Description>
        </S.Header>
        <S.Section>
          {mockData.map((data, index) => (
            <Card key={index} data={data} />
          ))}
        </S.Section>
      </S.Wrapper>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    //마진 나중에 없애기
    margin-left: 1rem;
    margin-top: 1rem;

    width: 67.3rem;
    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: 0.3rem solid ${({ theme }) => theme.blue500};
    background-color: ${({ theme }) => theme.blue};
  `,

  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,

  Header: styled.div`
    display: flex;
    flex-direction: flex-start;
    align-items: center;
    margin-left: 1rem;
    gap: 21.2rem;
    padding: 0.75rem 0;
  `,

  Title: styled.h1`
    font-size: 1.4rem;
    color: ${({ theme }) => theme.white};
  `,

  Description: styled.p`
    font-size: 1.1rem;
    color: ${({ theme }) => theme.white};
  `,

  Section: styled.div`
    height: 50rem; 
    overflow-y: auto;

    > div {
      &:not(:first-child) {
        margin-top: -0.1rem;
      }
    }
  `,
};
