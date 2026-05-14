import { useState } from "react";
import { createContext } from 'react'

//Creating Context
export const countContext = createContext()


//Creating CountContextProvider
export const CountContextProvider = ({ children }) => {

    let [count, setCount] = useState(0)
    //Makes easier to pass as a prop
    let globalValue = {count,setCount}

    return (
        <countContext.Provider value={{globalValue}}>
            {children}
        </countContext.Provider>

    )
}
