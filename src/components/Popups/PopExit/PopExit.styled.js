import { hover01, hover03, StyledPopup } from "../../../App.styled"
import styled from "styled-components";

export const StyledExitPopup = styled(StyledPopup)`
    min-width: 320px;
    z-index: 5;
`;

export const Block = styled.div`
    display: block;
    margin: 0 auto;
    background-color: #ffffff;
    max-width: 370px;
    width: 100%;
    padding: 50px 60px;
    border-radius: 10px;
    border: 0.7px solid #d4dbe5;
    box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`;

export const Title = styled.div`
    h2 {
        text-align: center;
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
        letter-spacing: -0.4px;
        margin-bottom: 20px;
    }
`;

export const FormGroup = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`;

export const YesButton = styled.button`
    width: 153px;
    height: 30px;
    background-color: #565EEF;
    border-radius: 4px;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    letter-spacing: -0.14px;
    color: #FFFFFF;
    a {
        width: 100%;
        height: 100%;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    ${hover01}
`

export const NoButton = styled.button`
    width: 153px;
    height: 30px;
    background-color: transparent;
    border-radius: 4px;
    border: 0.7px solid var(--palette-navy-60, #565EEF);
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    letter-spacing: -0.14px;
    color: #565EEF;
    a {
        width: 100%;
        height: 100%;
        color: #565EEF;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    ${hover03}
`