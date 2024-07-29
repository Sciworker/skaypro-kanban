import { createContext, useContext, useMemo, useState } from "react";

const CardsContext = createContext();

// eslint-disable-next-line react/prop-types
export const CardsContextProvider = ({ children }) => {
    const [cards, setCards] = useState([]);

    const updateCardInContext = (updatedCard) => {
        setCards(prevCards =>
            prevCards.map(card =>
                card._id === updatedCard._id ? { ...updatedCard } : card
            )
        );
    };

    const deleteCardInContext = (_id) => {
        setCards((prevCards) => prevCards.filter((card) => card._id !== _id));
    };

    const contextValue = useMemo(
        () => ({ cards, setCards, deleteCardInContext, updateCardInContext }),
        [cards]
    );

    return (
        <CardsContext.Provider value={contextValue}>
            {children}
        </CardsContext.Provider>
    );
};

export const useCards = () => useContext(CardsContext);