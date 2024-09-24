import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Calendar } from "../../Calendar/Calendar";
import { useCards } from '../../../contexts/CardsContext';
import { updateCard, deleteCard } from "../../../api/kanban.js";
import { statusList } from "../../Main/Main.jsx";
import {
    CardTopic,
    TopicText,
    PopBrowseWrapper,
    PopBrowseContainer,
    PopBrowseBlock,
    PopBrowseContent,
    PopBrowseTopBlock,
    PopBrowseTitle,
    SelectStatus,
    StatusWrapper,
    StatusText,
    StatusThemes,
    PopBrowseWrap,
    StatusTheme,
    StatusThemeText,
    PopBrowserForm,
    FormBrowseBlock,
    PopBrowseLabel,
    FormBrowseTextArea,
    PopBrowseButtons,
    ButtonGroup,
    EditButton, SaveButton, DeleteButton, CloseButton,
    EditTitle,
} from "./PopBrowse.styled";
import { topicColors } from "../../../lib/topic";

// eslint-disable-next-line react/prop-types
export default function PopBrowse ({ card, onClose }) {
    const { deleteCardInContext, updateCardInContext } = useCards();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [updatedCard, setUpdatedCard] = useState({
        title: '',
        status: '',
        description: '',
        topic: '',
    });
    const [selectedDate, setSelectedDate] = useState(null);


    useEffect(() => {
        if (card) {
            console.log("Current card date:", card.date); // Логируем дату
            setUpdatedCard({
                // eslint-disable-next-line react/prop-types
                title: card.title || '',
                // eslint-disable-next-line react/prop-types
                status: card.status || '',
                // eslint-disable-next-line react/prop-types
                description: card.description || '',
                // eslint-disable-next-line react/prop-types
                topic: card.topic || '',
                // eslint-disable-next-line react/prop-types
                category: card.category || '',
            });

            setSelectedDate(card.date ? new Date(card.date) : null);
        }
    }, [card]);

    const handleSelectDate = (date) => {
        setSelectedDate(date);
    };


    const handleDelete = async () => {
        if (window.confirm("Вы уверены, что хотите удалить эту задачу?")) {
            try {
                const user = localStorage.getItem('user');
                if (!user) {
                    console.error('Пользователь не найден в localStorage');
                    return;
                }

                const userObj = JSON.parse(user);
                const token = userObj.token;

                await deleteCard(token, card._id);
                deleteCardInContext(card._id);

                handleClose();

            } catch (error) {
                console.error('Ошибка удаления задачи:', error);
            }
        }
    }

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedCard(prev => ({ ...prev, [name]: value }));
    };

    const handleClose = () => {
        onClose();
        navigate('/');
    };

    const handleSave = async () => {
        setLoading(true);
        try {
            const user = localStorage.getItem('user');
            if (!user) {
                console.error('Пользователь не найден в localStorage');
                return;
            }

            const userObj = JSON.parse(user);
            const token = userObj.token;

            const updatedCardWithDate = {
                ...updatedCard,
                date: selectedDate ? selectedDate.toISOString() : null,
            };

            const responseFromServer = await updateCard(card._id, updatedCardWithDate, token);

            const tasksArray = responseFromServer.tasks;

            const updatedCardFromServer = tasksArray.find(item => item._id === card._id);

            if (!updatedCardFromServer) {
                console.error('Обновленная карточка не найдена в ответе сервера');
                return;
            }

            updateCardInContext(updatedCardFromServer);

            setIsEditing(false);

            handleClose();

        } catch (error) {
            console.error('Ошибка обновления задачи:', error);
        } finally {
            setLoading(false);
        }
    };


    if (loading) {
        return <p>Сохранение изменений...</p>;
    }

    return (
        <PopBrowseWrapper id='popBrowse'>
            <PopBrowseContainer>
                <PopBrowseBlock>
                    <PopBrowseContent>
                        <PopBrowseTopBlock>
                            <PopBrowseTitle>
                                {isEditing ? (
                                    <EditTitle
                                        type='text'
                                        name='title'
                                        value={updatedCard.title}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    updatedCard.title
                                )}
                            </PopBrowseTitle>
                            <CardTopic $topicColor={card?.topic ? topicColors[card.topic] : 'defaultColor'}>
                                <TopicText>{card?.topic || 'Нет темы'}</TopicText>
                            </CardTopic>
                        </PopBrowseTopBlock>
                        <StatusWrapper>
                            <StatusText>Статус</StatusText>
                            <StatusThemes>
                                <StatusTheme>
                                    {isEditing ? (
                                        <SelectStatus
                                            name='status'
                                            value={updatedCard.status}
                                            onChange={handleInputChange}
                                        >
                                            {statusList.map((status) => (
                                                <option key={status} value={status}>
                                                    {status}
                                                </option>
                                            ))}
                                        </SelectStatus>

                                    ) : (
                                        <StatusThemeText>{updatedCard.status}</StatusThemeText>
                                    )}
                                </StatusTheme>
                            </StatusThemes>
                        </StatusWrapper>
                        <PopBrowseWrap>
                            <PopBrowserForm
                                id='formBrowseCard'
                                action='#'
                            >
                                <FormBrowseBlock>
                                    <PopBrowseLabel htmlFor='textArea01'>
                                        Описание задачи
                                    </PopBrowseLabel>
                                    {isEditing ? (
                                        <FormBrowseTextArea
                                            name='description'
                                            value={updatedCard.description}
                                            onChange={handleInputChange}
                                        />
                                    ) : (
                                        <FormBrowseTextArea
                                            name='description'
                                            readOnly
                                            value={updatedCard.description}
                                        />
                                    )}
                                </FormBrowseBlock>
                            </PopBrowserForm>
                            <Calendar value={selectedDate} onSelect={handleSelectDate} />
                        </PopBrowseWrap>
                        <PopBrowseButtons>
                            <ButtonGroup>
                                <EditButton
                                    onClick={handleEditToggle}
                                >
                                    {isEditing ? 'Отменить' : 'Редактировать задачу'}
                                </EditButton>
                                {isEditing && (
                                    <SaveButton
                                        onClick={handleSave}
                                    >
                                        Сохранить
                                    </SaveButton>
                                )}
                                <DeleteButton
                                    onClick={handleDelete}
                                >
                                    Удалить задачу
                                </DeleteButton>
                            </ButtonGroup>
                            <CloseButton onClick={handleClose}>
                                Закрыть
                            </CloseButton>
                        </PopBrowseButtons>
                    </PopBrowseContent>
                </PopBrowseBlock>
            </PopBrowseContainer>
        </PopBrowseWrapper>
    );
}