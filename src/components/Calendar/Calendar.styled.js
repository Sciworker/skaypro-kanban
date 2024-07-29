import styled from 'styled-components';
import { subttl } from '../../App.styled';

export const StyledCalendar = styled.div`
    width: 182px;
    margin-bottom: 20px;
    @media screen and (max-width: 660px) {
        max-width: 340px;
        width: 100%;
    }
    .rdp-root {
        color: #94a6be;
        font-size: 10px;
        --rdp-accent-color: #94a6be;
        --rdp-accent-background-color: #94a6be;
        --rdp-font-family: "Roboto", Arial, Helvetica, sans-serif;
        --rdp-day-height: 24px;
        --rdp-day-width: 24px;
        --rdp-nav_button-height: 25px;
        --rdp-nav_button-width: 18px;
        --rdp-weekday-opacity: 1;
        --rdp-selected-border: none;
        --rdp-weekday-padding: 7px 0px;
        --rdp-nav-height: auto;
    }
    .rdp-caption_label {
        font-size: 14px;
        line-height: 25px;
        font-weight: 600;
        text-transform: capitalize;
        padding: 0px 0px 0px 7px;
    }
    .rdp-month_grid {
        margin: 0px 0px 8px 0px;
    }

    .rdp-weekday {
        font-weight: 500;
        font-size: 10px;
    }

    .rdp-footer {
        padding: 0px 7px;
    }

    .rdp-selected {
        color: #ffffff;
        background-color: #94a6be;
        border-radius: 50%;
        font-size: 10px;
        font-weight: 400;
        .rdp-day_button:hover {
            background-color: #94a6be;
        }
    }
    .rdp-today {
        font-weight: 700;
    }
    .rdp-day_button:hover {
        background-color: #EAEEF6;
    }
`;

export const Title = styled.p`
    margin-bottom: 14px;
    padding: 0 7px;
    ${subttl}
    @media screen and (max-width: 660px) {
        padding: 0;
    }
`;

// export const Block = styled.div`
//     display: block;
// `;

// export const Nav = styled.div`
//     width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     margin-top: 14px;
//     padding: 0 7px;
//     @media screen and (max-width: 660px) {
//         padding: 0;
//     }
// `;

// export const NavActions = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
// `;

// export const NavAction = styled.div`
//     width: 18px;
//     height: 25px;
//     cursor: pointer;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     svg {
//         fill: #94a6be;
//     }
// `;
// export const P = styled.p`
//     color: #94a6be;
//     font-size: 10px;
//     line-height: 1;
//     span {
//         color: #000000;
//     }
//     @media screen and (max-width: 660px) {
//         font-size: 14px;
//     }
// `;

// export const Month = styled.div`
//     color: #94A6BE;
//     font-size: 14px;
//     line-height: 25px;
//     font-weight: 600;
// `;

// export const Content = styled.div`
//     margin-bottom: 12px;
// `;

// export const DaysNames = styled.div`
//     display: flex;
//     flex-wrap: nowrap;
//     align-items: center;
//     justify-content: space-between;
//     margin: 7px 0;
//     padding: 0 7px;
// `;

// export const DayName = styled.div`
//     color: #94a6be;
//     font-size: 10px;
//     font-weight: 500;
//     line-height: normal;
//     letter-spacing: -0.2px;
//     @media screen and (max-width: 660px) {
//         font-size: 14px;
//     }
// `;

// export const Cells = styled.div`
//     width: 182px;
//     height: 126px;
//     display: flex;
//     flex-wrap: wrap;
//     @media screen and (max-width: 660px) {
//         width: 344px;
//         height: auto;
//         display: flex;
//         flex-wrap: wrap;
//         justify-content: space-around;
//     }
// `;

// export const Cell = styled.div`
//     width: 22px;
//     height: 22px;
//     margin: 2px;
//     border-radius: 50%;
//     display: flex;
//     flex-wrap: nowrap;
//     align-items: center;
//     justify-content: center;
//     color: #94a6be;
//     font-size: 10px;
//     line-height: 1;
//     letter-spacing: -0.2px;
//     cursor: pointer;
//     ${({ $current }) =>
//         $current &&
//         css`
//             font-weight: 700;
//         `}
//     @media screen and (max-width: 660px) {
//         width: 42px;
//         height: 42px;
//         font-size: 14px;
//     }
// `;

// export const CellDay = styled(Cell)`
//     &:hover {
//         color: #94a6be;
//         background-color: #eaeef6;
//     }
// `;

// export const OtherMonth = styled(Cell)`
//     opacity: 0;
// `;

// export const Period = styled.div`
//     padding: 0 7px;
//     @media screen and (max-width: 660px) {
//         padding: 0;
//     }
// `;
