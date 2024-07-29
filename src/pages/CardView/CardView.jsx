import { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import PopBrowse from "../../components/Popups/PopBrowse/PopBrowse.jsx";
import { useCards } from "../../contexts/CardsContext";

export default function CardView() {
    const { id } = useParams();
    const { cards } = useCards();
    const card = useMemo(() => cards.find(c => c._id === id), [id, cards]);

    const [isPopupOpen, setIsPopupOpen] = useState(true);

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <>
            {isPopupOpen && card && (
                <PopBrowse card={card} onClose={handleClosePopup} />
            )}
        </>
    );
}
