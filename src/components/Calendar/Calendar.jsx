import { useState, useEffect } from "react";
import { StyledCalendar, Title } from "./Calendar.styled";
import { ru } from "date-fns/locale";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

export const Calendar = ({ value, onSelect }) => {
    const [date, setDate] = useState(value);

    useEffect(() => {
        setDate(value);
    }, [value]);

    const handleSelect = (date) => {
        setDate(date);
        onSelect(date);
    };

    return (
        <StyledCalendar>
            <Title>Даты</Title>
            <DayPicker
                mode='single'
                locale={ru}
                selected={date}
                onSelect={handleSelect}
                footer={
                    date
                        ? `Выбрано: ${date.toLocaleDateString()}`
                        : "Выберете срок исполнения."
                }
            />
        </StyledCalendar>
    );
};
