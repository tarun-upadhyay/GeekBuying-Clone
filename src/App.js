import React from 'react'
import { Footer}  from './Components/Footer'
import Navbar from './Components/Navbar'

import Homepage from './Pages/Homepage'
import MainRoutes from './Pages/MainRoutes'

const App = () => {
  return (
    <div>
      <Navbar/>
      <MainRoutes>
        <Homepage/>
      </MainRoutes>
      <Footer></Footer>
    </div>
  )
}

export default App