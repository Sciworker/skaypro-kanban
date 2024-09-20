import "../../../App.css";
import { Container, StyledPopNewCard, Block, Content, Title, CloseButton, Wrap, Form, FormBlock, Subtitle, Input, Area, CreateButton, Categories, P, Themes, CardTopic, TopicText, FormInfo } from "./PopNewCard.styled";
import { topicColors } from "../../../lib/topic";
import { useReducer, useState } from "react";
import { createCard } from "../../../api/kanban";
import { useAuth } from "../../../contexts/AuthContext";
import { useCards } from "../../../contexts/CardsContext";
import { Calendar } from "../../Calendar/Calendar";
import { set } from "date-fns";

const topics = Object.keys(topicColors);

const initialState = {
    title: "",
    description: "",
    topic: "Web Design",
    date: "",
};

const reducer = (state, action) => {
    switch (action.type) {
        case "title":
        case "description":
        case "topic":
        case "date":
            return { ...state, [action.type]: action.payload };
        default:
            return state;
    }
};

function PopNewCard({ onClose }) {
    const [isTaskCreating, setIsTaskCreating] = useState(false);
    const [error, setError] = useState("");
    const [taskData, dispatch] = useReducer(reducer, initialState);
    const [fieldErrors, setFieldErrors] = useState({});
    const { token } = useAuth();
    const { setCards } = useCards();

    const validateForm = () => {
        const errors = {};
        if (!taskData.title) errors.title = true;
        if (!taskData.description) errors.description = true;
        setFieldErrors(errors);

        if (Object.keys(errors).length) {
            setError("Пожалуйста, заполните все поля.");
            return false;
        }
        return true;
    }

    const onCreate = async () => {
        if (!validateForm()) return;
        setError("");
        setIsTaskCreating(true);
        try {
            const tasks = await createCard(token, {
                ...taskData,
                date: taskData.date ? new Date(taskData.date).toISOString() : new Date().toISOString(),
            });
            setCards(tasks);
            onClose();
        } catch (e) {
            console.error(e.message);
            setError("Ошибка создания задачи. Пожалуйста, попробуйте снова.");
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
                                        $error={fieldErrors.title}
                                        type='text'
                                        name='name'
                                        id='formTitle'
                                        value={taskData.title}
                                        onChange={(e) => {
                                            dispatch({
                                                type: "title",
                                                payload: e.target.value,
                                            });
                                            }
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
                                        $error={fieldErrors.description}
                                        name='text'
                                        id='textArea'
                                        placeholder='Введите описание задачи...'
                                        value={taskData.description}
                                        onChange={(e) => {
                                            dispatch({
                                                type: "description",
                                                payload: e.target.value,
                                            })
                                        }
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
                                            topic === taskData.topic
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
                            disabled={isTaskCreating}
                        >
                            {isTaskCreating ? "Создание..." : "Создать задачу"}
                        </CreateButton>
                        <FormInfo>{error}</FormInfo>
                    </Content>
                </Block>
            </Container>
        </StyledPopNewCard>
    );
}

export default PopNewCard;
