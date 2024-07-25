// import PopNewCard from "../components/Popups/PopNewCard/PopNewCard";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import { useEffect, useState } from "react";
import { Wrapper } from "../../App.styled";
import { Outlet } from "react-router-dom";
import { getCards } from "../../api/kanban";
import { useAuth } from "../../contexts/AuthContext";

function MainPage() {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const { token } = useAuth();

    const fetchCards = async () => {
        setLoading(true);
        try {
            const cards = await getCards(token);
            setCards(cards);
        } catch (error) {
            setError('Не удалось загрузить данные, попробуйте позже.');
        } finally {
            setLoading(false);
        }
    };
    // loader
    useEffect(() => {
        fetchCards()
    }, []);

    function onCardAdd() {
        setCards([
            ...cards,
            {
                id: cards.length + 1,
                topic: "Web Design",
                title: "Новая задача",
                date: "12.12.2022",
                status: "Без статуса",
            },
        ]);
    }
    return (
        <Wrapper>
            <Header onCardAdd={onCardAdd} />
            <Main cards={cards} isLoading={loading} error={error} />
            <Outlet />
            {/* <PopNewCard /> */}
        </Wrapper>
    );
}

export default MainPage;
