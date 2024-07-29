import "../../App.css";
import { Card } from "../Card/Card";
import { Cards, Item, StyledColumn, Title } from "./Column.styled";

function Column({ title, cards }) {
    return (
        <StyledColumn>
            <Title>
                <p>{title}</p>
            </Title>
            <Cards>
                {cards.map((card) => (
                    <Item key={card._id}>
                        <Card card={card} />
                    </Item>
                ))}
            </Cards>
        </StyledColumn>
    );
}

export default Column;
