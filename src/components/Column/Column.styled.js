import styled, { keyframes } from 'styled-components';

export const StyledColumn = styled.div`
    width: 20%;
    margin: 0 auto;
    display: block;

    @media screen and (max-width: 1200px) {
        width: 100%;
        margin: 0 auto;
        display: block;
    }
`;
export const Title = styled.div`
    padding: 0 10px;
    margin: 15px 0;
    p {
        color: #94A6BE;
        font-size: 14px;
        font-weight: 600;
        line-height: 1;
        text-transform: uppercase;
    }
`;

export const Cards = styled.div`
    width: 100%;
    display: block;
    position: relative;
    @media screen and (max-width: 1200px) {
        width: 100%;
        display: flex;
        overflow-y: auto;
    }
`;

const cardAnimation = keyframes`
    0% {
        height: 0;
        opacity: 0;
    }
    100% {
        height: auto;
        opacity: 1;
    }
`;

export const Item = styled.div`
    padding: 5px;
    animation-name: ${cardAnimation};
    animation-duration: 500ms;
    animation-timing-function: linear;
`;