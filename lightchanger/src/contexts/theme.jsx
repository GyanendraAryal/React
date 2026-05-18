// src/contexts/theme.js — upgraded pattern
import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("light")

  const darkThemeMode = () => setThemeMode("dark")
  const lightThemeMode = () => setThemeMode("light")

  useEffect(() => {
    const html = document.querySelector('html')
    if (themeMode === "dark") {
      html.classList.add("dark")
    } else {
      html.classList.remove("dark")
    }
  }, [themeMode])

  return (
    <ThemeContext.Provider value={{ themeMode, darkThemeMode, lightThemeMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error("useTheme must be used within a ThemeProvider")
  return context
}










// import { createContext, useContext } from 'react'

// export const ThemeContext = createContext(null)
// // export const ThemeContext = createContext({
// //     themeMode: "light",
// //     darkThemeMode: () => { },
// //     lightThemeMode: () => { }
// // })

// export const ThemeProvider = ThemeContext.Provider

// export const useTheme = () => {
//     const context = useContext(ThemeContext)
//     if (context === null) {
//         throw new Error("useTheme must be used within a ThemeProvider")
//     }
//     return context
// }
// // export const useTheme = () => {
// //     return useContext(ThemeContext)
// // }