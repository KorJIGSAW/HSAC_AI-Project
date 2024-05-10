import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <MainHeader>
            Header
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
`

export default Header;