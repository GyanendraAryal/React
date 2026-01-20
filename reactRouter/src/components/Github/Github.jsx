import React, {useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'
export default function Github() {

   /*  const [data, setData] = useState([])

    useEffect(()=>{
        
        
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            setData(data)
        })
    },[]) */

    const data = useLoaderData()

  return (
    <div className='text-center m-4 bg-gray-400 text-white p-4 text-3xl' >Github Followers:{data.followers}
    <img src={data.avatar_url} alt="GitPicture" width={300} />
    
     </div>
  )
}

export const  githubInfoLoader = async () =>{
const response = await fetch("https://api.github.com/users/GyanendraAryal")
return response.json()
}