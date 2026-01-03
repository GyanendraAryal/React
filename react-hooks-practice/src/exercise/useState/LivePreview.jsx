import { useState } from "react";

export default function LivePreview(){
    const [text, setText] = useState("");

    return(
        <div className="w-1/4 h-20 mt-5 ml-25 bg-amber-200 rounded-lg flex flex-col items-center justify-between" >
            <input
            className="w-full h-15 bg-white rounded-lg flex flex-col items-center justify-between border border-slate-500"            value={text}
            placeholder="Type something..."
            onChange={(e)=>setText(e.target.value )}
            type="text" />

            <p className="mt-4 mr-20 text-xl text-blue-600">
                Preview: {text}
            </p>
        </div>
    )
}