import {
    useNavigate,
} from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import LogOut from "../pages/LogOut/LogOut";
import CardView from "../pages/CardView/CardView";
import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

function ProtectedRoute({ children }) {
    const { isAuth } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }
    }, [isAuth, navigate]);

    if (!isAuth) {
        return null;
    }
    return children;
}

export const routes = [
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <MainPage />
            </ProtectedRoute>
        ),
        children: [
            {
                path: "/exit",
                element: (
                    <ProtectedRoute>
                        <LogOut />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/card/:id",
                element: (
                    <ProtectedRoute>
                        <CardView />
                    </ProtectedRoute>
                ),
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <SignUp />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
];
