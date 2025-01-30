import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: 'light',
    darkTheme: () => {},
    lightTheme: () => {}
}); // we can provide an initial/default value.

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() { // custom hook
    return useContext(ThemeContext);
}

// useTheme can be imported and all the values in ThemeContext will be available.
