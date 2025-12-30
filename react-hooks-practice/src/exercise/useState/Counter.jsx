import { useState } from "react";
export default function Counter(){
    const [count, setCount]=useState(0);

    const handleIncrease=()=>setCount((prev)=>prev+1);
    const handleDecrease=()=>setCount((prev)=>(prev > 0 ? prev-1 : 0));
    const handleReset=()=>setCount(0);

    return(
        
        <div 
        className="flex flex-col items-center justify-center mt-70 ml-140 rounded-lg h-60 w-1/4 bg-gray-200">
            <div className="text-xl bg-green-500 flex justify-center">CounterApp</div>
            <p className="text-3xl text-center mt-5 text-yellow-600">Count: {count}</p>
            <div className="text-center mt-5">
            <button className="p-4 py-2 text-xl w-15 mt-5 rounded-lg m-2 bg-red-300 hover:bg-red-400" onClick={handleDecrease} >-</button>
            <button className="p-4 py-2 text-xl mt-5 rounded-lg m-2 bg-gray-300 hover:bg-gray-400" onClick={handleReset}>Reset</button>
            <button className="p-4 py-2 text-xl w-15 mt-5 rounded-lg m-2 bg-green-300 hover:bg-green-400" onClick={handleIncrease}>+</button>
            </div>
        </div>
    );
}