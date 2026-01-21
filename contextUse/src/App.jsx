import { createContext, useState } from "react";
import { ChildA } from "./components/ChildA";

// Step 1: Create Context(createContext)
// Step 2: Wrap all the child in the provider
// Step 3: Pass value
// Step 4: Go to the consumer and consume the value as props(const name= usecontext(UserContext))

export const UserContext = createContext();
export const ThemeContext = createContext();
function App() {
  const [user,setUser] = useState({name:"Gyanendra"});
  const [theme, setTheme] = useState("light")

  return (
    <UserContext.Provider value={user}>
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`w-[500px] h-[200px] text-3xl text-blue-900 flex flex-col
        border border-slate-600 border-2 justify-center items-center
        ${theme === "light" ? "bg-yellow-500" : "bg-white"}`}
      >
        <ChildA />
      </div>
    </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
