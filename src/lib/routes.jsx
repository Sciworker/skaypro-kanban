import MainPage from "../pages/MainPage/MainPage";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import LogOut from "../pages/LogOut/LogOut";
import CardView from "../pages/CardView/CardView";
import { useAuth } from "../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" />;
    }
    return <Outlet />;
}

export const routes = [
    {
        path: "/",
        element: <ProtectedRoute />,
        children: [
            {
                path: "/",
                element: <MainPage />,
                children: [
                    {
                        path: "exit",
                        element: <LogOut />,
                    },
                    {
                        path: "card/:id",
                        element: <CardView />,
                    },
                ],
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
