import { Link, useParams } from "react-router-dom";
import { Calendar } from "../../components/Calendar/Calendar";
import PopBrowse from "../../components/Popups/PopBrowse/PopBrowse";

export default function CardView() {
    const { id } = useParams();
    return (
        <PopBrowse cardId={id}/>
    );
}