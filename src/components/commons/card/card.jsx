import styled from 'styled-components';

export default function Card() {
  return (
    <S.CardContainer>
      <S.CardTitle>Card</S.CardTitle>
    </S.CardContainer>
  );
}

const S = {
    CardContainer: styled.div`
    background-color: #f9f9f9;
    background: ${({ theme }) => theme.purple600};
    border: 1px solid #ccc;   
    border-radius: 8px;        
    padding: 20px;             
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin: 20px;              
  `,
  
  CardTitle: styled.h1`
    font-size: 24px;           
    color: #333;               
    margin-bottom: 10px;       
  `,
}