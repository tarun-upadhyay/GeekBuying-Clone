import React from 'react'
import { Footer}  from './Components/Footer'
import {Nav} from './Components/Navbar'
import Homepage from './Pages/Homepage'
import MainRoutes from './Pages/MainRoutes'

const App = () => {
  return (
    <div>
      <Nav></Nav>
      <MainRoutes>
        <Homepage/>
      </MainRoutes>
      <Footer></Footer>
    </div>
  )
}

export default App