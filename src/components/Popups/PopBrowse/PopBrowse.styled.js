import styled from "styled-components";
import { topicStyles } from "../../../lib/topic";

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

// ._active-category {
//   opacity: 1 !important;
// } 