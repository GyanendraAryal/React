import { useState } from "react";
import { createContext } from 'react'

//Creating Context
export let countContext = createContext()


//Creating CountContextProvider
export let CountContextProvider = ({ children }) => {

    let [count, setCount] = useState(1)
    //Makes easier to pass as a prop
    // let globalValue = {count,setCount}
    
    return (
        <countContext.Provider value={{count,setCount}}>
            {children}
        </countContext.Provider>

    )
}
