import { useParams } from "react-router-dom";
import PopBrowse from "../../components/Popups/PopBrowse/PopBrowse";
import { useMemo } from "react";
import { useCards } from "../../contexts/CardsContext";

export default function CardView() {
    const { id } = useParams();
    const { cards } = useCards();
    const card = useMemo(() => {
        return cards.find((card) => card._id === id);
    }, [id, cards]);

    return (
        <PopBrowse card={card}/>
    );
}