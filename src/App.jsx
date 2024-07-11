import "./App.css";
import PopExit from "./components/Popups/PopUser/PopUser";
import PopNewCard from "./components/Popups/PopNewCard/PopNewCard";
import PopBrowse from "./components/Popups/PopBrowse/PopBrowse";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { useEffect, useState } from "react";
import { cardList } from "./data";
import { Wrapper } from "./components/Wrapper/Wrapper";
function App() {
    const [cards, setCards] = useState(cardList);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    function onCardAdd() {
        setCards([...cards, {
            id: cards.length + 1,
            topic: "Web Design",
            title: "Новая задача",
            date: "12.12.2022",
            status: "Без статуса",
        }]);
    }
    return (
        <Wrapper>
            <PopExit />
            <PopNewCard />
            <PopBrowse />
            <Header onCardAdd={ onCardAdd } />
            <Main cards={ cards } isLoading={ isLoading } />
        </Wrapper>
    );
}

export default App;
