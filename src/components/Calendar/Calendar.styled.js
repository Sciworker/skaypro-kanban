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