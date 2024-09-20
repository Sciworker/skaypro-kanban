import { createContext, useContext, useMemo, useState } from "react";

const CardsContext = createContext();

// const initialState = {
//     cards: [],
// }

// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'ADD_CARD': {
//             return { ...state, cards: [...state.cards, action.payload] }
//         }
//     }
// }

export const CardsContextProvider = ({ children }) => {
    const [cards, setCards] = useState([]);

    const contextValue = useMemo(() => ({ cards, setCards }), [cards]);

    return (
        <CardsContext.Provider value={contextValue}>
            {children}
        </CardsContext.Provider>
    )
}

export const useCards = () => useContext(CardsContext);



