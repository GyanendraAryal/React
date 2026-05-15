import { useContext } from 'react'
import {countContext} from './context/CountContextProvider'
function App() {

  const { count, setCount } = useContext(countContext)
  console.log(count, setCount);


  return (
    <>
     <div className='flex gap-4 bg-black text-white text-6xl items-center min-h-50'>
       <button
      className=' border-2 border-red-500 cursor-pointer'
      onClick={() => setCount(count + 1)}
      >Count</button>
      <span>Home {count}</span>
     </div>
    </>
  )
}

export default App
