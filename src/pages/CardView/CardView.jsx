import { useParams } from "react-router-dom";
import PopBrowse from "../../components/Popups/PopBrowse/PopBrowse";
import { cardList } from "../../lib/data";
import { useMemo } from "react";

export default function CardView() {
    const { id } = useParams();
    const card = useMemo(() => {
        return cardList.find((card) => card.id === +id);
    }, [id]);

    return (
        <PopBrowse card={card}/>
    );
}