import React, { useContext } from 'react'
import { ThemeContext, UserContext} from '../App'

export const ChildC = () => {

    const user = useContext(UserContext)
    const {theme,setTheme} = useContext(ThemeContext)
    const handleClick = ()=>{
        {theme ==="light"? setTheme("dark") : setTheme("light") }
    }
    return (
        <div>
            <button
            className='border border-2 border-slate-600 cursor-pointer '
            onClick={handleClick}>
                Change Theme: {user.name}
            </button>
        </div>
    )
}
