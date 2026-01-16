import React, { useState, useCallback, useEffect, useRef } from 'react'

export const PasswordGenerator = () => {

  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //UseState Hook
  const [isCopied, setCopied]=useState(false);


  //UseCallBack Hook
  let passwordGenerator = useCallback(() => {

    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) string += "0123456789";
    if (charAllowed) string += "~!@#$%^&*";

    for (let index = 1; index <= length; index++) {

      let char= Math.floor(Math.random() * string.length + 1)
      pass += string.charAt(char)

    }
    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword]);

  let copyTextToClipBoard = useCallback(()=>{
    passRef.current ?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  //UseEffect Hook
  useEffect(()=>{
    passwordGenerator();
  },[length, numAllowed, charAllowed, setPassword])

  //UseRef Hook
  let passRef = useRef(null)
  
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-16 text-orange-500 bg-gray-800 ' >
        <h1 className='h-12 my-2 text-2xl text-white text-center' >PasswordGenerator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={password}
            className=' outline-none w-full py-1 px-3 rounded-lg bg-white text-gray-800 border-white'
            placeholder='Password'
            readOnly
            ref={passRef} />
          <button
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer hover:bg-blue-900'
            onClick={(copied)=>{
              copyTextToClipBoard();
              setCopied(!isCopied);
            }}
          >{isCopied ? "Copied" : "Copy"}</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input type="range"
              min={6}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length:{length} </label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numAllowed}
              id='numberInput'
              onChange={() => { setNumAllowed((prev) => !prev) }}
            />
            <label>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={() => { setCharAllowed((prev) => !prev) }}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}
