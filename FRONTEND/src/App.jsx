import React, { useState } from 'react'
import Navbar from './components/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/cart/cart'
import Home  from  './pages/home/home'
import PlaceOrder from './pages/placeOrder/placeOrder'
import Footer from './components/footer/footer'
import LoginPop from './components/loginPop/loginPop'
const App = () => {
  const [showLogin ,setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPop setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
     <Navbar setShowLogin={setShowLogin}/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route  path='/cart' element = {<Cart/>}/>
      <Route path='/order' element = {<PlaceOrder/>}/>
     </Routes>
    

    </div>
     <Footer/>
     </>
  )
}

export default App