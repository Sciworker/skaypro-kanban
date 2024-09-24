import styled, { css } from "styled-components";
import { topicStyles } from "../../../lib/topic";
import { hover03, hover01 } from "../../../App.styled.js";

const { _gray } = topicStyles

export const TopicText = styled.p`
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
`;

export const CardTopic = styled.div`
    opacity: 1 !important;
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
`;

export const PopBrowseWrapper = styled.div`
    width: 100%;
    height: 100%;
    min-width: 375px;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 7;
`

export const PopBrowseContainer = styled.div `
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
`

export const PopBrowseBlock = styled.div `
    display: block;
    margin: 0 auto;
    background-color: #FFFFFF;
    max-width: 630px;
    width: 100%;
    padding: 40px 30px 38px;
    border-radius: 10px;
    border: 0.7px solid #D4DBE5;
    position: relative;
`

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopBrowseTitle = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const EditTitle = styled.input `
    width: 100%;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    padding: 14px;
    background: transparent;
`

export const StatusWrapper = styled.div `
    margin-bottom: 11px;
`

export const StatusText = styled.p`
  margin-bottom: 14px;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  //color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
    background-color: ${_gray.backgroundColor};
    color: ${_gray.color};
`;

export const SelectStatus = styled.select `
    background-color: ${_gray.backgroundColor};
    color: ${_gray.color};
    border: none;
`;

export const StatusThemeText = styled.p `
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    background-color: ${_gray.backgroundColor};
    color: ${_gray.color};
`

export const PopBrowseWrap = styled.div `
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

export const PopBrowserForm = styled.form `
    max-width: 370px;
    width: 100%;
    display: block;
    margin-bottom: 20px;
`;

export const FormBrowseBlock = styled.div `
    display: flex;
    flex-direction: column;
`;

export const PopBrowseLabel = styled.label `

`

export const FormBrowseTextArea = styled.textarea `
    max-width: 370px;
    width: 100%;
    outline: none;
    padding: 14px;
    background: #EAEEF6;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    margin-top: 14px;
    height: 200px;
    &::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: #94A6BE;
        letter-spacing: -0.14px;
        &::-moz-placeholder {
            font-weight: 400;
            font-size: 14px;
            line-height: 1px;
            color: #94A6BE;
            letter-spacing: -0.14px;
`

export const PopBrowseButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
`

export const ButtonGroup = styled.div `
    @media screen and (max-width: 495px) {
        width: 100%;
    }
`

export const Button = css `
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
`

export const ButtonBorder = css`
    border-radius: 4px;
    border: 0.7px solid var(--palette-navy-60, #565EEF);
    outline: none;
    background: transparent;
    color: #565EEF;
    &a {
        color: #565EEF;
    }
`

export const ButtonBackground = css `
    border-radius: 4px;
    background: #565EEF;
    border: none;
    outline: none;
    color: #FFFFFF;
    a {
        color: #FFFFFF;
`

export const EditButton = styled.button `
    ${Button}
    ${ButtonBorder}
    ${hover03}
    margin-right: 8px;
`

export const SaveButton = styled.button `
    ${Button}
    ${ButtonBorder}
    ${hover03}
    margin-right: 8px;
`

export const DeleteButton = styled.button `
    ${Button}
    ${ButtonBorder}
    ${hover03}
`

export const CloseButton = styled.button `
    ${Button}
    ${ButtonBackground}
    ${hover01}
`
