import { useContext } from 'react'
import {countContext} from './context/CountContextProvider'
function App() {

  const { count, setCount } = useContext(countContext)
  console.log(count, setCount);


  return (
    <>
      <button
        onClick={() => setCount(count + 1)}
      >Count</button>
      <span>Home Count{count}</span>
    </>
  )
}

export default App
