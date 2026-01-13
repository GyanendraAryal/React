import React, { useState } from 'react'
export const Accordian = () => {
    const [active, setActive] = useState(false);
    return (
        <div className='h-60 w-full bg-slate-600 flex flex-col items-center justify-center'>
            <div className='text-2xl text-white'>Accordian</div>
            {active ? <div className='h-30 w-4/5 bg-amber-600 flex flex-col  items-center'>
                <p onClick={()=>setActive(!active)} className='text-white h-30 flex items-center'>What is your name?</p>
                {active ? <div className='h-30 w-full bg-amber-200 flex justify-center items-center '>My Name is Accordian!!</div> : ""}
            </div> : 
            <div className='h-15 w-4/5 bg-amber-600 flex flex-col  items-center'>
                <p onClick={()=>setActive(!active)} className='text-white h-15 flex items-center'>What is your name?</p>
                {active ? <div className='h-15 w-full bg-amber-200 flex justify-center items-center '>My Name is Accordian!!</div> : ""}
            </div>
            }

            {active ? <div className='h-30 w-4/5 bg-amber-600 flex flex-col  items-center'>
                <p onClick={()=>setActive(!active)} className='text-white h-30 flex items-center'>What is your name?</p>
                {active ? <div className='h-30 w-full bg-amber-200 flex justify-center items-center '>My Name is Accordian!!</div> : ""}
            </div> : 
            <div className='h-15 w-4/5 bg-amber-600 flex flex-col  items-center'>
                <p onClick={()=>setActive(!active)} className='text-white h-15 flex items-center'>What is your name?</p>
                {active ? <div className='h-15 w-full bg-amber-200 flex justify-center items-center '>My Name is Accordian!!</div> : ""}
            </div>
            }
            
            {active ? <div className='h-30 w-4/5 bg-amber-600 flex flex-col  items-center'>
                <p onClick={()=>setActive(!active)} className='text-white h-30 flex items-center'>What is your name?</p>
                {active ? <div className='h-30 w-full bg-amber-200 flex justify-center items-center '>My Name is Accordian!!</div> : ""}
            </div> : 
            <div className='h-15 w-4/5 bg-amber-600 flex flex-col  items-center'>
                <p onClick={()=>setActive(!active)} className='text-white h-15 flex items-center'>What is your name?</p>
                {active ? <div className='h-15 w-full bg-amber-200 flex justify-center items-center '>My Name is Accordian!!</div> : ""}
            </div>
            }
        </div>
    )
}
