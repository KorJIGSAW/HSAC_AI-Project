import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <MainHeader>
            <div>교무 &gt; 수강신청 장바구니</div>
        </MainHeader>
    );
};

const MainHeader = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    font-size: 1.1rem;
    margin-top: 15px;
    width: 100%;
    text-align: right;
    color: #969696;
    /* background-color: red; */
`

export default Header;