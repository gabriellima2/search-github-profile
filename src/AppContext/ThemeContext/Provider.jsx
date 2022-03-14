import { useState } from 'react';

import ThemeContext from "./index";

import {
    addInStorage,
    verifyLocalStorage
} from '../../utils/LocalStorage';

import Dark from '../../style/Themes/dark';
import Light from '../../style/Themes/light';

const DEFAULT_THEME = 'light';

export default function ThemeContextProvider({ children }) {
    const [ theme, setTheme ] = useState(
        () => {
            const data = verifyLocalStorage('theme', DEFAULT_THEME);
            return data === 'light' ? Light : Dark;
        }
    );

    const toggleTheme = () => {
        setTheme( current => current === Dark ? Light : Dark );
        addInStorage('theme', theme === Dark ? 'light': 'dark');
    };

    return (
        <ThemeContext.Provider value={{
            currentTheme: theme, toggleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    );
};
