import { useEffect, useState } from 'react'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const darkTheme = () => setThemeMode("dark")
  const lightTheme = () => setThemeMode("light")

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center dark:bg-gray-900">
        <div className="w-full">
          <div className="flex justify-end w-full mb-4 px-4">
            <ThemeBtn />
          </div>
          <div className="flex justify-center">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App