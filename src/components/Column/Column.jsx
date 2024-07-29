import "../../App.css";
import { Card } from "../Card/Card";
import { Cards, Item, StyledColumn, Title } from "./Column.styled";
import { Droppable } from "react-beautiful-dnd";

// eslint-disable-next-line react/prop-types
function Column({ title, cards, columnId }) {
    return (
        <Droppable droppableId={columnId}>
            {(provided) => (
                <StyledColumn
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                >
                    <Title>
                        <p>{title}</p>
                    </Title>
                    <Cards>
                        {/* eslint-disable-next-line react/prop-types */}
                        {cards.map((card, index) => (
                            <Item key={card._id}>
                                <Card cardId={card._id} index={index} />
                            </Item>
                        ))}
                        {provided.placeholder}
                    </Cards>
                </StyledColumn>
            )}
        </Droppable>
    );
}

export default Column;