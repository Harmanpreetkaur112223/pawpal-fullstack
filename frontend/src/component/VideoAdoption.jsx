import React from 'react'
const obj = [{
  src:'vid1.mp4',
  description:"There are lot many cases of animals accidents on roads are happening right now. But we are unaware or just ignoring it."
}]
function VideoAdoption() {
  return (
    <div className='h-fit w-full '>
      {
        obj.map((elem , idx)=>{
          return <>
          <div key={idx} className='h-fit  hover:shadow-lg hover:shadow-teal-900'><video src={elem.src} muted autoPlay loop className='h-screen w-[100%] rounded-md my-4  hover:opacity-[.76]'></video>
          <div className=' text-teal-900 h-fit w-[98vw] p-8  my-4 flex items-center justify-center'><div>{elem.description}</div> </div></div>
          </>
        })
      }
      
    </div>
  )
}

export default VideoAdoption