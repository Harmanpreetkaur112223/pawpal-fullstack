import React from 'react'
import Navbar from './component/Navbar'
import {Routes , Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Shop from './Pages/Shop'
import Contact from './Pages/Contact'
import Footer from './component/Footer'
import Login from './component/login'
import Register from './component/Register'
import Cart from './component/Cart'
import Dashboard from './Pages/Dashboard'
function App() {
  return (
    <>
     <Navbar/>
      {/* <div className='flex item-center '> */}
      <Routes>
       <Route path='/home' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/shop' element={<Shop/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path = '/login' element={<Login/>}/>
       <Route path = '/register' element={<Register/>}/>
       <Route path = '/cart' element={<Cart/>}/>
       <Route path = '/dashboard' element={<Dashboard/>}/>

      </Routes>
      {/* </div> */}
      <Footer/>
    </>
  )
}

export default App