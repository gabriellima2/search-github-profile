import { createContext } from 'react';

const ThemeContext = createContext({
    currentTheme: null,
    toggleTheme: () => {}
});

export default ThemeContext;
