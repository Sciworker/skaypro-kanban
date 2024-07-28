import "../../App.css";
import Column from "../Column/Column";
import { Container } from "../../App.styled";
import { Block, Content, StyledMain } from "./Main.styled";

const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
];

function Main({ cards, isLoading, error }) {
    console.log(cards);
    return (
        <>
            <StyledMain>
                <Container>
                    <Block>
                        {isLoading ? (
                            <p>Загрузка данных. Пожалуйста, подождите...</p>
                        ) : error ?
                            (<p>Ошибка: {error}</p>) : (
                            <Content>
                                {statusList.map((status) => (
                                    <Column
                                        key={status}
                                        title={status}
                                        cards={cards.filter(
                                            (card) => card.status === status
                                        )}
                                    />
                                ))}
                            </Content>
                        )}
                    </Block>
                </Container>
            </StyledMain>
        </>
    );
}

export default Main;
