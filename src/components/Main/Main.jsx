import "../../App.css";
import Column from "../Column/Column";
import { Container } from "../../App.styled";
import { Block, Content, StyledMain } from "./Main.styled";
import { DragDropContext } from "react-beautiful-dnd";
import { useCards } from "../../contexts/CardsContext.jsx";
import { useAuth } from "../../contexts/AuthContext.jsx";
import { updateCard } from "../../api/kanban.js";

export const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
];

// eslint-disable-next-line react/prop-types
function Main({ cards, isLoading, error }) {

    const { updateCardInContext } = useCards();
    const { token } = useAuth();

    const onDragEnd = async (result) => {
        const { source, destination } = result;

        if (!destination) return;

        if (source.droppableId === destination.droppableId && source.index === destination.index) {
            return;
        }

        // eslint-disable-next-line react/prop-types
        const draggedCard = cards.find(card => card._id === result.draggableId);

        if (!draggedCard) return;

        const updatedCard = { ...draggedCard, status: destination.droppableId };

        updateCardInContext(updatedCard);

        try {
            await updateCard(draggedCard._id, updatedCard, token);
        } catch (error) {
            console.error('Ошибка при обновлении карточки на сервере', error);
        }

    };

    return (
        <>
            <StyledMain>
                <Container>
                    <Block>
                        {isLoading ? (
                            <p>Загрузка данных. Пожалуйста, подождите...</p>
                        ) : error ?
                            (<p>Ошибка: {error}</p>) : (
                                <DragDropContext onDragEnd={onDragEnd}>
                                    <Content>
                                        {statusList.map((status) => (
                                            <Column
                                                columnId={status}
                                                key={status}
                                                title={status}
                                                cards={cards.filter(
                                                    (card) => card.status === status
                                                )}
                                            />
                                        ))}
                                    </Content>
                                </DragDropContext>
                        )}
                    </Block>
                </Container>
            </StyledMain>
        </>
    );
}

export default Main;