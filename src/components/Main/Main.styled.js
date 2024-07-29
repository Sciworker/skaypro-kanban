import styled from 'styled-components';

export const StyledMain = styled.main`
    width: 100%;
    flex-grow: 1;
    background-color: #eaeef6;
`;

export const Block = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 25px 0 49px;
    @media screen and (max-width: 1200px) {
        width: 100%;
        margin: 0 auto;
        padding: 40px 0 64px;
    }
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    @media screen and (max-width: 1200px) {
        display: block;
    }
`;