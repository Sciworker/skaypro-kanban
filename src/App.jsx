import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { AuthContextProvider } from "./contexts/AuthContext";
import { routes } from "./lib/routes";

const router = createBrowserRouter(routes);

function App() {
    return (
        <AuthContextProvider>
            <RouterProvider router={router} />
        </AuthContextProvider>
    );
}

export default App;