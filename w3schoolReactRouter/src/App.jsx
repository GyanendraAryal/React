import { useState } from 'react'
import {BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Products } from './components/Products';
import { CarProducts } from './components/CarProducts';
import BikeProducts from './components/BikeProducts';
function App() {
  const [count, setCount] = useState(0)

  return (

    <BrowserRouter>
    
    <nav className='flex gap-5 justify-center h-10 text-2xl items-center'>
      <Link to='/' >Home</Link>
      <Link to='/about' >About</Link>
      <Link to='/contact' >Contact</Link>
      <Link to='/products' >Products</Link>
    </nav>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>} />
      <Route path='/products' element={<Products/>}>
        <Route path='cars' element={<CarProducts/>} />
        <Route path='bikes' element={<BikeProducts/>} />
      </Route>
    </Routes>

    </BrowserRouter>
  )
}

export default App
