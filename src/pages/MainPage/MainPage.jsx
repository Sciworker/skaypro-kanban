import PopNewCard from "../../components/Popups/PopNewCard/PopNewCard";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import { useEffect, useState } from "react";
import { Wrapper } from "../../App.styled";
import { Outlet } from "react-router-dom";
import { getCards } from "../../api/kanban";
import { useAuth } from "../../contexts/AuthContext";
import { createPortal } from "react-dom";
import { useCards } from "../../contexts/CardsContext";

function MainPage() {
    const { cards, setCards } = useCards();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [showAddCardPopup, setShowAddCardPopup] = useState(false);
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

    return (
        <Wrapper>
            <Header showAddCardPopup={() => setShowAddCardPopup(true)} />
            <Main cards={cards} isLoading={loading} error={error} />
            <Outlet />
            {showAddCardPopup && createPortal(<PopNewCard onClose={() => setShowAddCardPopup(false)} />, document.body)}
        </Wrapper>
    );
}

export default MainPage;
