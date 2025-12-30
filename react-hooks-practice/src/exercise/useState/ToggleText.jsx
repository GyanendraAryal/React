import {useState} from "react";
export default function ToggleText(){

    const [toggle, setToggle]=useState(true);

    return(
         <div className="min-h-screen flex items-start justify-center bg-white-600">
        <div className="w-1/4 h-40 flex items-center justify-center bg-green-600">
        <div className="w-80 h-30 rounded-lg flex flex-col items-center justify-center bg-red-600">
            {toggle && <p className="mt-5 rounded-lg bg-slate-800 text-white" >This text can be seen and not seen!!</p> }
            <button
            onClick={()=>setToggle(!toggle)}
            className="mt-5 bg-white rounded-lg px-4 py-2 text-slate-800"
            >
                {toggle ? "Hide":"Show"}
            </button>
        </div>
        </div>
        </div>
    );
}