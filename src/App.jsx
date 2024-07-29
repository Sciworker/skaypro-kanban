import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { AuthContextProvider } from "./contexts/AuthContext";
import { routes } from "./lib/routes";
import { CardsContextProvider } from "./contexts/CardsContext";
import DarkAndLightMode from "./components/Header/DarkAndLightMode/DarkAndLightMode.jsx";

const router = createBrowserRouter(routes);

function App() {
    return (
        <DarkAndLightMode>
            <AuthContextProvider>
                <CardsContextProvider>
                    <RouterProvider router={router} />
                </CardsContextProvider>
            </AuthContextProvider>
        </DarkAndLightMode>

    );
}

export default App;
