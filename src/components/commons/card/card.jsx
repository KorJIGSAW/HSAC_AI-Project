import styled from 'styled-components';
import ApplycationButton from 'components/commons/buttons/applicationButton';

export default function Card({ data }) {

  const handleApplyClick = () => {
    const confirmMessage = `${data.title}(${data.code})를 수강 신청하시겠습니까?`;
    if (window.confirm(confirmMessage)) {
    }
  };

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>
          <S.Title>[{data.code}] {data.title}</S.Title>
          <S.FlexContainer>
            <S.FlexRow>
              {/* 헤더 제목 행 */}
              {data.cells.map((item, index) => (
                <S.FlexItem key={index}>{item.name}</S.FlexItem>
              ))}
            </S.FlexRow>
            <S.FlexRow>
              {/* 데이터 행 */}
              {data.cells.map((item, index) => (
                <S.FlexCell key={index}>{item.value}</S.FlexCell>
              ))}
            </S.FlexRow>
          </S.FlexContainer>
        </S.Header>
        <S.Section>
          <S.Info>
            {data.info.type} | {data.info.lectureType} | {data.info.credits} |{' '}
            {data.info.timePeriod} | {data.info.professor}
          </S.Info>
          <S.Time>{data.time}</S.Time>
        </S.Section>
        <S.Button>
          <ApplycationButton  onClick={handleApplyClick}/>
        </S.Button>
      </S.Wrapper>
    </S.Container>
  );
}

const S = {
  //container
  Container: styled.div`
    //나중에 없애기 마진
    padding: 0.8rem 0.5rem 0.5rem 0.8rem;
    width: 70.5rem;
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
