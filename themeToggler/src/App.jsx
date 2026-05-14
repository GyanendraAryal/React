import { useContext } from "react";
import ThemeContext from "./context/themeContext";

function App() {
  const { darkMode, toggleTheme } =
    useContext(ThemeContext);

  return (
    <div
      className={
        darkMode
          ? "min-h-screen bg-black text-white"
          : "min-h-screen bg-white text-black"
      }
    >
      <h1 className="text-4xl mt-2 text-center text-orange-500">
        Theme Toggler
      </h1>

      <button
        onClick={toggleTheme}
        className="bg-green-500 text-white p-2 rounded"
      >
        Click Me!!
      </button>
    </div>
  );
}

export default App;