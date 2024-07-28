import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    background-color: #eaeef6;
`;

export const Container = styled.div`
    display: block;
    width: 100vw;
    min-height: 100vh;
    margin: 0 auto;
`;

export const Modal = styled.div`
    width: 100%;
    height: 100%;
    min-width: 320px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 375px) {
        background-color: #ffffff;
    }
`;

export const Block = styled.div`
    text-align: center;
    display: block;
    margin: 0 auto;
    background-color: #ffffff;
    padding: 50px 60px;
    border-radius: 10px;
    border: 0.7px solid #d4dbe5;
    box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
    @media screen and (max-width: 375px) {
        h2 {
            font-size: 17px;
        }
        padding: 0 16px;
        border-radius: none;
        border: none;
        box-shadow: none;
    }
`;