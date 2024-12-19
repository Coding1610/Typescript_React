// type with useContext()

import React, { createContext } from "react";
import { theme } from "./Theme";

// Context
export const ThemeContext = createContext(theme);

// children type
type ThemeContextProviderProps = {
    children:React.ReactNode;
}
// Provider
export const ThemeContextProvider = ({children}:ThemeContextProviderProps) => {
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}