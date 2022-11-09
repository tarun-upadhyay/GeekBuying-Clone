import React from 'react'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import MainRoutes from './Pages/MainRoutes'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <MainRoutes></MainRoutes>
      <Footer></Footer>
    </div>
  )
}

export default App