import { useState,useEffect } from 'react'

function App() {

  const getUsersData = async ()=>{
   const url = 'https://dummyjson.com/users';
   let response = await fetch(url);
   response = await response.json;
   console.log(response);
  }
  const [count, setCount] = useState(0)
  useEffect(()=>{
    getUsersData();
  },[])

  return (
    <>
      <div>
        <h1>Fetch data from API</h1>
      </div>
    </>
  )
}

export default App
