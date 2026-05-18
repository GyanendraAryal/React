import { useContext, useEffect, useState } from "react"

const ThemeProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState(
        localStorage.getItem("theme") || "light"
    )
    const lightTheme = () => {
        setThemeMode("light")
    }

    const darkTheme = () => {
        setThemeMode("dark")
    }
    return (
        <ThemeContext.Provider
            value={{
                themeMode,
                lightTheme,
                darkTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}