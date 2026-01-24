import React from 'react'
import { Link, NavLink} from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className='w-max-[500px] h-12 flex items-center justify-end bg-slate-700 rounded text-xl text-white '>
        <ul className='flex gap-30 px-6'>
            {
            //We dont use anchor tag because it reloads the whole page
            //Link doesnt need to refresh the whole page
            // className={`({isActive})=> isActive ? bg-white border-2 border-solid rounded text-slate-600 `} 
            }
            <li> <NavLink to="/"> Home</NavLink> </li>
            <li><NavLink to="/about">About Us</NavLink></li> 
            <li><NavLink to="/contact">Contact Us</NavLink></li>
            <li><NavLink to="/review">Reviews</NavLink></li>
        </ul>
    </div>
  )
}
