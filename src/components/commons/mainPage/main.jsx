import React from 'react';
import styled from 'styled-components';
import Right from './Right';
import Left from './Left';
import Header from './Header';

const Main = () => {
    return (
        <MainPage>
            <Header />
            <Right />
            <Left />
        </MainPage>
    );
};

const MainPage = styled.main`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: aliceblue;

    section{
        min-height: 200vh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 5rem;
    }
`;

export default Main;