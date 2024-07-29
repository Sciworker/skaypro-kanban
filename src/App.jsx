import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { AuthContextProvider } from "./contexts/AuthContext";
import { routes } from "./lib/routes";
import { CardsContextProvider } from "./contexts/CardsContext";

const router = createBrowserRouter(routes);

function App() {
    return (
        <AuthContextProvider>
            <CardsContextProvider>
                <RouterProvider router={router} />
            </CardsContextProvider>
        </AuthContextProvider>
    );
}

export default App;