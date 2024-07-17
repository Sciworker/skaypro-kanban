// import PopNewCard from "../components/Popups/PopNewCard/PopNewCard";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import { useEffect, useState } from "react";
import { cardList } from "../../lib/data";
import { Wrapper } from "../../App.styled";
import { Outlet } from "react-router-dom";

function MainPage() {
    const [cards, setCards] = useState(cardList);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
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
            <Main cards={cards} isLoading={isLoading} />
            <Outlet />
            {/* <PopNewCard /> */}
        </Wrapper>
    );
}

export default MainPage;
