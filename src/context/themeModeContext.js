import { createContext, useContext, useState } from "react";


const ThemeModeContext = createContext();

export const ThemeModeContextProvider = ({children}) => {
    const [themeMode, setThemeMode] = useState(false);

    const values = {
        themeMode,
        setThemeMode
    }

    return (<ThemeModeContext.Provider value={values}>{children}</ThemeModeContext.Provider>)
}

export const useThemeMode = () => useContext(ThemeModeContext);