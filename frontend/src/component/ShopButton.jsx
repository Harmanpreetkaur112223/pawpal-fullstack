import React from 'react'
import { Link } from 'react-router-dom'
function ShopButton() {
  return (
   <>
   <Link to='/shop' className='h-fit absolute bottom-10% rounded-lg text-[1.2vw] font-bold text-white hover:text-teal-900 hover:bg-white hover:shadow-lg hover:shadow-teal-900 bg-teal-800 p-4 w-[50%]'>Find Your Companion</Link>
   </>
  )
}

export default ShopButton