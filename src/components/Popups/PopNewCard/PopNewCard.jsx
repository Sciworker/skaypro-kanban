import "../../../App.css";
import { Container, StyledPopNewCard, Block, Content, Title, CloseButton, Wrap, Form, FormBlock, Subtitle, Input, Area, CreateButton, Categories, P, Themes, CardTopic, TopicText } from "./PopNewCard.styled";
import { topicColors } from "../../../lib/topic";
import { useReducer, useState } from "react";
import { createCard } from "../../../api/kanban";
import { useAuth } from "../../../contexts/AuthContext";
import { useCards } from "../../../contexts/CardsContext";
import { Calendar } from "../../Calendar/Calendar";

const topics = Object.keys(topicColors);

const initialState = {
    title: "",
    description: "",
    topic: "",
    date: "",
};

const reducer = (state, action) => {
    switch (action.type) {
        case "title":
            return { ...state, title: action.payload };
        case "description":
            return { ...state, description: action.payload };
        case "topic":
            return { ...state, topic: action.payload };
        case "date":
            return { ...state, date: action.payload };
        default:
            return state;
    }
};

function PopNewCard({ onClose }) {
    const [isTaskCreating, setIsTaskCreating] = useState(false);
    const [error, setError] = useState("");
    const [taskData, dispatch] = useReducer(reducer, initialState);
    const { token } = useAuth();
    const { setCards } = useCards();

    const onCreate = async () => {
        setError("");
        setIsTaskCreating(true);
        try {
            const tasks = await createCard(token, {
                ...taskData,
                date: new Date(taskData.date).toISOString(),
            });
            console.log(tasks);
            setCards(tasks);
            onClose();
        } catch (e) {
            console.error(e.message);
            setError("Ошибка");
        } finally {
            setIsTaskCreating(false);
        }
    };

    return (
        <StyledPopNewCard id='popNewCard'>
            <Container>
                <Block>
                    <Content>
                        <Title>Создание задачи</Title>
                        <CloseButton onClick={onClose}>&#10006;</CloseButton>
                        <Wrap>
                            <Form id='formNewCard' action='#'>
                                <FormBlock>
                                    <Subtitle htmlFor='formTitle'>
                                        Название задачи
                                    </Subtitle>
                                    <Input
                                        type='text'
                                        name='name'
                                        id='formTitle'
                                        value={taskData.title}
                                        onChange={(e) =>
                                            dispatch({
                                                type: "title",
                                                payload: e.target.value,
                                            })
                                        }
                                        placeholder='Введите название задачи...'
                                        autoFocus
                                    />
                                </FormBlock>
                                <FormBlock>
                                    <Subtitle htmlFor='textArea'>
                                        Описание задачи
                                    </Subtitle>
                                    <Area
                                        name='text'
                                        id='textArea'
                                        placeholder='Введите описание задачи...'
                                        value={taskData.description}
                                        onChange={(e) =>
                                            dispatch({
                                                type: "description",
                                                payload: e.target.value,
                                            })
                                        }
                                    ></Area>
                                </FormBlock>
                            </Form>
                            <Calendar value={taskData.date} onSelect={(date) => dispatch({ type: "date", payload: date })} />
                        </Wrap>
                        <Categories>
                            <P>Категория</P>
                            <Themes>
                                {topics.map((topic) => (
                                    <CardTopic
                                        $active={
                                            taskData.topic
                                                ? topic === taskData.topic
                                                : topic === 'Web Design'
                                        }
                                        $topicColor={topicColors[topic]}
                                        key={topic}
                                        onClick={() =>
                                            dispatch({
                                                type: "topic",
                                                payload: topic,
                                            })
                                        }
                                    >
                                        <TopicText>{topic}</TopicText>
                                    </CardTopic>
                                ))}
                            </Themes>
                        </Categories>
                        <CreateButton
                            id='btnCreate'
                            onClick={onCreate}
                        >
                            {isTaskCreating ? "Создание..." : error ? error : "Создать задачу"}
                        </CreateButton>
                    </Content>
                </Block>
            </Container>
        </StyledPopNewCard>
    );
}

export default PopNewCard;
