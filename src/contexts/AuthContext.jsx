import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
    // const [token, setToken] = useState(localStorage.getItem('token') || null);

    const contextValue = useMemo(() => ({ user, token: user?.token || null, login: (userData) => { setUser(userData); localStorage.setItem('user', JSON.stringify(userData)) }, logout: () => { setUser(null); localStorage.removeItem('user'); } }), [user]);

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);