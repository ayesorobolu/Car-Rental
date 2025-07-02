import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import CarDetails from './Pages/CarDetails'



const App = () => {

  const [showLogin, setShowLogin] = useState(false)
  const isOwnerPath = useLocation().pathname.startsWith('/owner')
  return (
    <>
     {!isOwnerPath && <Navbar setShowLogin={setShowLogin}/>}

     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/car-details/:id' element={<CarDetails/>}/>
     </Routes>

     {!isOwnerPath && <Footer/>}
    </>
  )
}

export default App

