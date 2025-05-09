import React from 'react'
import Slider from '../component/Slider'
import Navbar from '../component/Navbar'
import AccidentCasesPhoto from '../component/AccidentCasesPhoto'
import VideoAdoption from '../component/VideoAdoption'
import ShopButton from '../component/ShopButton'

function Home() {
  return (
   <>
    <div className='h-fit text-teal-900 w-[96vw]  rounded-md flex items-center justify-center m-4 text-[4vw] text-semibold font-serif hover:text-shadow-lg italic cursor-pointer hover:shadow-gray-900'><span className='text-[6vw]  hover:text-teal-900 font-serif font-bold'>Pawpal - </span>Find your Furry Friend.</div>
    <div className='h-full  flex items-center justify-center'>
      <Slider/>
      <hr />
      </div>
      {/* <ShopButton/> */}
      <AccidentCasesPhoto/>
      {/* <VideoAdoption/> */}
      {/* <div className='text-[8vw] h-fit p-8 w-fit text-bold italic text-teal-900'>Take an action towards the life saving</div> */}
    </>
  )
}

export default Home