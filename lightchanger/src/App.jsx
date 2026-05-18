import Card from "./components/Card"
import { ThemeProvider } from "./contexts/theme"

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen w-full bg-white dark:bg-gray-900 flex flex-col items-center justify-start gap-6 pt-10 transition-colors duration-300">
        <h1 className="text-4xl text-orange-600 text-center">Theme Toggler With Context API</h1>
        <Card />
      </div>
    </ThemeProvider>
  )
}

export default App

















// import Card from "./components/Card"
// import { ThemeProvider } from "./contexts/theme"
// import { useState, useEffect } from 'react'

// function App() {

//   const [themeMode, setThemeMode] = useState("light")

//   const darkThemeMode = () => setthemeMode("dark")

//   const lightThemeMode = () => setthemeMode("light")

//   useEffect(() => {
//     const html = document.querySelector('html')
//     html.classList.remove('dark', 'light')
//     html.classList.add(themeMode)
//   }, [themeMode])

//   return (
//     <ThemeProvider value={{ themeMode, lightThemeMode, darkThemeMode }}>
//       <div className="max-w-full flex flex-col items-center justify-start gap-6">
//         <h1 className="text-4xl text-orange-600 text-center">Them Toggler With Context Api</h1>
//         <Card />
//       </div>
//     </ThemeProvider>
//   )
// }

// export default App
