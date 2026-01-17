import { useState } from 'react'
import Props from './components/Props'
import Card from './components/Card'

function App() {
  let myDetail = {
    Roll:1,
    name:"normie",
    age:100
  }
  return (
    <>
      <Props />
      <div className='w-full h-full flex flex gap-4 items-center justify-center'>
        <Card creator="Ich heise gyanendra" value = {myDetail} field="learning" />
        <Card />
      </div>
    </>
  )
}

export default App
