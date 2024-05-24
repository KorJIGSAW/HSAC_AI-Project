import Calendar from 'components/commons/calendar/calendar';
import styled from 'styled-components';

export default function CalendarList() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>
          <S.Title>당신의 시간표</S.Title>
        </S.Header>
        <S.Section>
            <CalendarWrapper>
                <Calendar />
            </CalendarWrapper>
        </S.Section>
      </S.Wrapper>
    </S.Container>
  );
}

const CalendarWrapper = styled.div`
    width: 700px;
    height: 700px;
`;

const S = {
  Container: styled.div`
    //마진 나중에 없애기
    margin-left: 1rem;
    margin-top: 1rem;

    width: 73rem;
    display: flex;
    justify-content: center;
    
    align-items: center;

    border-bottom: 0.3rem solid ${({ theme }) => theme.blue};
    background-color: ${({ theme }) => theme.blue};
  `,

  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,

  //bar

  //header
  Header: styled.div`
    display: flex;
    flex-direction: flex-start;
    align-items: center;
    margin-left: 1rem;
    gap: 23.8rem;
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
    overflow-y: hidden;

    > div {
      &:not(:first-child) {
        margin-top: -0.1rem;
      }
    }
  `,
};
