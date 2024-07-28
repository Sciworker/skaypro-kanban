import styled, { css } from "styled-components";
import { subttl } from "../../../App.styled";

export const StyledPopNewCard = styled.div`
    width: 100%;
    min-width: 375px;
    height: 100%;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 6;
`;

export const Container = styled.div`
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

export const Block = styled.div`
    display: block;
    margin: 0 auto;
    background-color: #FFFFFF;
    max-width: 630px;
    width: 100%;
    padding: 40px 30px 48px;
    border-radius: 10px;
    border: 0.7px solid #D4DBE5;
    position: relative;
`;

export const Content = styled.div`
    display: block;
    text-align: left;
`;

export const Title = styled.h3`
    color: #000;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    margin-bottom: 20px;
`;

export const CloseButton = styled.button`
    font-size: 16px;
    position: absolute;
    top: 20px;
    right: 30px;
    color: #94a6be;
    cursor: pointer;
    border: none;
    background-color: transparent;
    &:hover {
        color: #000000;
    }
`;

export const Wrap = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

export const Form = styled.form`
    max-width: 370px;
    width: 100%;
    display: block;
    margin-bottom: 20px;
`;

export const FormBlock = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Subtitle = styled.label`
    ${subttl}
`

const commonStyles = css`
    width: 100%;
    outline: none;
    padding: 14px;
    background: transparent;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    &::-moz-placeholder,
    &::placeholder {
        padding: 14px;
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: #94a6be;
        letter-spacing: -0.14px;
    }
`;

export const Input = styled.input`
    ${commonStyles}
    margin: 20px 0;
`;

export const Area = styled.textarea`
    ${commonStyles}
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    max-width: 370px;
    margin: 14px 0 0 0;
    height: 200px;
`;

import { hover01 } from "../../../App.styled";
export const CreateButton = styled.button`
    width: 132px;
    height: 30px;
    background-color: #565EEF;
    border-radius: 4px;
    border: 0;
    outline: none;
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    color: #FFFFFF;
    float: right;
    ${hover01}
`

export const Categories = styled.div`
    margin-bottom: 20px;
`

export const P = styled.p`
    margin-bottom: 14px;
    ${subttl}
`

export const Themes = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: flex-start;
`;

import { topicStyles } from "../../../lib/topic";

export const TopicText = styled.p`
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
`;

export const CardTopic = styled.button`
    border: none;
    display: block;
    width: auto;
    height: 30px;
    padding: 8px 20px;
    border-radius: 24px;
    margin-right: 7px;
    opacity: 0.4;
    background-color: ${({ $topicColor }) =>
        topicStyles[$topicColor]?.backgroundColor || "#b4fdd1"};
    ${TopicText} {
        color: ${({ $topicColor }) =>
            topicStyles[$topicColor]?.color || "#06b16e"};
    }
    ${( { $active } ) => $active && `
        opacity: 1 !important;
    `}
`;