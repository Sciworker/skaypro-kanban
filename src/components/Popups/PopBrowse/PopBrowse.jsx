import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Calendar } from "../../Calendar/Calendar";
import { useCards } from '../../../contexts/CardsContext';
import { updateCard, deleteCard } from "../../../api/kanban.js";
import { statusList } from "../../Main/Main.jsx";
import { CardTopic, TopicText } from "./PopBrowse.styled";
import { topicColors } from "../../../lib/topic";

// eslint-disable-next-line react/prop-types
export default function PopBrowse({ card, onClose }) {
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

    const [selectedDate, setSelectedDate] = useState(null); // Состояние для даты

    useEffect(() => {
        if (card) {
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
            setSelectedDate(card.date ? new Date(card.date) : null); // Установка даты, если она есть
        }
    }, [card]);

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

            console.log('Ответ сервера:', responseFromServer);

            const tasksArray = responseFromServer.tasks;

            const updatedCardFromServer = tasksArray.find(item => item._id === card._id);

            if (!updatedCardFromServer) {
                console.error('Обновленная карточка не найдена в ответе сервера');
                return;
            }

            updateCardInContext(updatedCardFromServer);

            setIsEditing(false);
            onClose();
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
        <div className='pop-browse' id='popBrowse'>
            <div className='pop-browse__container'>
                <div className='pop-browse__block'>
                    <div className='pop-browse__content'>
                        <div className='pop-browse__top-block'>
                            <h3 className='pop-browse__ttl'>
                                {isEditing ? (
                                    <input
                                        type='text'
                                        name='title'
                                        value={updatedCard.title}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    updatedCard.title
                                )}
                            </h3>
                            <CardTopic $topicColor={card?.topic ? topicColors[card.topic] : 'defaultColor'}>
                                <TopicText>{card?.topic || 'Нет темы'}</TopicText>
                            </CardTopic>
                        </div>
                        <div className='pop-browse__status status'>
                            <p className='status__p subttl'>Статус</p>
                            <div className='status__themes'>
                                <div className='status__theme _gray'>
                                    {isEditing ? (
                                        <select
                                            name='status'
                                            value={updatedCard.status}
                                            onChange={handleInputChange}
                                        >
                                            {statusList.map((status) => (
                                                <option key={status} value={status}>
                                                    {status}
                                                </option>
                                            ))}
                                        </select>

                                    ) : (
                                        <p className='_gray'>{updatedCard.status}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='pop-browse__wrap'>
                            <form
                                className='pop-browse__form form-browse'
                                id='formBrowseCard'
                                action='#'
                            >
                                <div className='form-browse__block'>
                                    <label htmlFor='textArea01' className='subttl'>
                                        Описание задачи
                                    </label>
                                    {isEditing ? (
                                        <textarea
                                            className='form-browse__area'
                                            name='description'
                                            value={updatedCard.description}
                                            onChange={handleInputChange}
                                        />
                                    ) : (
                                        <textarea
                                            className='form-browse__area'
                                            name='description'
                                            readOnly
                                            value={updatedCard.description}
                                        />
                                    )}
                                </div>
                            </form>
                            <Calendar value={selectedDate} onSelect={setSelectedDate} /> {/* Добавление календаря */}
                        </div>
                        <div className='pop-browse__btn-browse'>
                            <div className='btn-group'>
                                <button
                                    className='btn-browse__edit _btn-bor _hover03'
                                    onClick={handleEditToggle}
                                >
                                    {isEditing ? 'Отменить' : 'Редактировать'}
                                </button>
                                {isEditing && (
                                    <button
                                        className='btn-browse__save _btn-bor _hover03'
                                        onClick={handleSave}
                                    >
                                        Сохранить
                                    </button>
                                )}
                                <button
                                    className='btn-browse__delete _btn-bor _hover03'
                                    onClick={handleDelete}
                                >
                                    Удалить задачу
                                </button>
                            </div>
                            <button className='btn-browse__close _btn-bg _hover01' onClick={handleClose}>
                                Закрыть
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}