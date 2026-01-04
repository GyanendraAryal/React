import { useState } from "react";

export default function LivePreview() {
    const [text, setText] = useState("");

    const charCount = text.length;
    const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    const isEmpty = text.trim() === "";
    const tooLong = charCount > 50;


    return (
        <div className="w-1/2 h-100 bg-blue-400 flex flex-wrap flex-col items-center">
            <div className="w-1/2 h-50 mt-5 bg-amber-200 rounded-lg flex flex-col flex-wrap items-center justify-center gap-10" >
                <input
                    className="w-full h-15 bg-white rounded-lg flex flex-col items-center justify-between border border-slate-500" value={text}
                    placeholder="Type something..."
                    onChange={(e) => setText(e.target.value)}
                    type="text" />

                <p className="mr-20 flex flex-wrap text-xl text-blue-600">
                    Preview: {text}
                </p>
            </div>
            <div className="mt-4 space-y-2 text-lg">
                <p>Total characters:{charCount}</p>
                <p>Word count:{wordCount}</p>
                <p>Is empty?:{isEmpty ? "Yes" : "No"}</p>

                {tooLong && (
                    <p className="text-red-600 font-semibold">
                        Warning: More than 50 characters!
                    </p>
                )}
            </div>
        </div>

    )
}