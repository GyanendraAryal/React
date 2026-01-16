import { useState } from 'react'
import Props from './components/Props'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Props/>
    </>
  )
}

export default App
