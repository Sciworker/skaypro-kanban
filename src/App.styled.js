import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    max-width: 100%;
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    background-color: #f1f1f1;
    display: flex;
    flex-direction: column;
`;

export const Container = styled.div`
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
    @media screen and (max-width: 495px) {
        width: 100%;
        padding: 0 16px;
    }
`;

export const hover01 = css`
    &:hover {
        background-color: #33399b;
    }
`;

export const hover03 = css`
    &:hover {
        background-color: #33399b;
        color: #ffffff;

        a {
            color: #ffffff;
        }
    }
`;

export const hover02 = css`
    &:hover {
        color: #33399b;
    }

    &:hover::after {
        border-left-color: #33399b;
        border-bottom-color: #33399b;
    }
`

export const subttl = css`
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
`;

export const StyledPopup = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
`;

export const PopupContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
`;