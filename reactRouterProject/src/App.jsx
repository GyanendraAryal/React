import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { HomePage } from './components/HomePage'
import { Contact } from './components/Contact'
import { About } from './components/About'
import { NavBar } from './components/NavBar'
import { Review } from './components/Review'

function App() {

  const route = createBrowserRouter([
    {
      path:"/",
      element: <div>
        <NavBar/>
        <HomePage/>
      </div>
    },
    {
      path:"/contact",
      element: <div>
        <NavBar/>
        <Contact/>
      </div>
    },
    {
      path:"/about",
      element: <div>
        <NavBar/>
        <About/>
      </div>
    },
    {
      path:"/review",
      element: <div>
        <NavBar/>
        <Review/>
      </div>
    }
  ])

  return (
    <>
    <RouterProvider router={route} />
    <h1>Hello I'm React Routing from Code Help</h1>
    </>
  )
}

export default App
