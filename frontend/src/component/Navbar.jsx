import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AdminDataContext, useAdmin } from '../context/AdminProvider'
import UserContext from '../context/UserContext'
function Navbar() {
 const {admin} = useAdmin()
  console.log(AdminDataContext)
  // console.log(admin , setIsAdmin)
  return (
        <nav className='h-[6vw] w-[98.9vw] p-8  flex items-center justify-between shadow-md shadow-Emerald-400'>
            <div className='text-[1.9vw] text-teal-900 italic hover:text-white hover:text-shadow-md hover:text-shadow-teal-900 font-bold mx-8 cursor-pointer'><img src="/images/paw.png" className='h-[4vh] w-[3vw] inline-block hover:scale-[1.1]' alt="" />PAL</div>
            <div className=' flex items-center gap-[3vw]  italic font-sans font-semibold'>
            <Link to='/home' className=' hover:border-b-2 hover:border-red-600 hover:border-teal-900 hover:text-orange-700 rounded-md p-2'>Home</Link>
            <Link to='/about' className=' hover:border-b-2 hover:border-red-600 hover:border-teal-900 hover:text-orange-700 rounded-md p-2'>About</Link>
            <Link to='/shop' className=' hover:border-b-2 hover:border-red-600 hover:border-teal-900 hover:text-orange-700 rounded-md p-2'>Shop</Link>
            <Link to='/services' className=' hover:border-b-2 hover:border-red-600 hover:border-teal-900 hover:text-orange-700 rounded-md p-2'>Services</Link>
            {/* <Link to='/shop' className=' hover:border-b-2 hover:border-red-600 hover:border-teal-900 hover:text-orange-700 rounded-md p-2'>Shop</Link> */}


            <Link to='/contact' className=' hover:border-b-2 hover:border-red-600 hover:border-teal-900 hover:text-orange-700 rounded-md p-2'>Contact</Link>
            </div>
            <div className=' flex items-center gap-[3vw]  italic font-sans font-semibold'>
              <Link to='/cart' className=' hover:border-b-2 hover:border-red-600 hover:border-teal-900 hover:text-orange-700 rounded-md p-2'>Cart</Link>
              <Link to='/login' className=' hover:border-b-2 hover:border-red-600 hover:border-teal-900 hover:text-orange-700 rounded-md p-2'>Login</Link>
             {admin &&  <Link to='/dashboard' className = {`hover:border-b-2 hover:border-red-600 hover:border-teal-900 hover:text-orange-700 rounded-md p-2`}>Dashboard</Link>}
            </div>
        </nav>
  )
}

export default Navbar