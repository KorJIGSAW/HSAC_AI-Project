import Card from '../card/card';
import styled from 'styled-components';

export default function CardList() {
  return (
    <S.Container>
      <S.Wrapper>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </S.Wrapper>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    //마진 나중에 없애기
    margin-left: 1rem;
    margin-top: 1rem;
  `,

  Wrapper: styled.div`
    display: flex;
    flex-direction: column;

    > div {
      &:not(:first-child) {
        margin-top: -0.11rem;
      }
    }
  `,
};
