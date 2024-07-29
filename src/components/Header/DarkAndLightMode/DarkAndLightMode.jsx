import { useEffect, createContext } from 'react';
import { UseLocalStorage } from './../../../hooks/useLocalStorage.js'

export const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
const DarkAndLightMode = ({children}) => {

    const [theme, setTheme] = UseLocalStorage('theme', 'light');

    useEffect(() => {
        if(theme === 'dark') document.body.classList.add('dark');
        else document.body.classList.remove('dark');
    }, [theme])

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    );
};

export default DarkAndLightMode;