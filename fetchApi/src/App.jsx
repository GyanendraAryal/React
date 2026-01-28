import { useState,useEffect } from 'react'

function App() {

  const getUsersData = async ()=>{
   try {
    const url = 'https://jsonplaceholder.typicode.com/users';
   let response = await fetch(url);
   response = await response.json();
   console.log(response);
   setUsersData(response)
   } catch (error) {
    console.error(error)
   }
  }
  const [usersData, setUsersData] = useState([])
  useEffect(()=>{
    getUsersData();
  },[])

  return (
    <>
      <div>
        <h1>Fetch data from API</h1>
        {usersData.map((user) => (
        <h2 key={user.id}>{user.name}</h2>
      ))}
      </div>
    </>
  )
}

export default App
