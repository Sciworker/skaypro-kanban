import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);

    const contextValue = useMemo(() => ({ isAuth, login: () => setIsAuth(true), logout: () => setIsAuth(false) }), [isAuth]);

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);