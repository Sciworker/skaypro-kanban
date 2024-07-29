import PopExit from "../../components/Popups/PopExit/PopExit";
import { useAuth } from "../../contexts/AuthContext";

export default function LogOut() {
    const { logout } = useAuth();
    return (
        <PopExit onExit={logout} />
    );
}