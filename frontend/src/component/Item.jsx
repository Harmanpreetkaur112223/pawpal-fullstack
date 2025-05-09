// import React from 'react'
// import { Link } from 'react-router-dom'
// function Item({type , name , breed , photo , age , energyLevel , description , category}) {
//   return (
//     <div className="w-[30%] bg-gray-100 rounded-xl shadow-sm shadow-gray-800 p-1 m-4  hover:shadow-lg hover:black">
//       <Link to='/selected-item '>
//       <img className='h-fit rounded-lg w-full  flex items-center justify-between 'src={photo} alt="" />
//       <div>
//           <h2 className='text-[1.1vw] font-semibold text-red-800'>{name}</h2>
//           <p className='text-[1vw] italic font-semibold text-black '>breed: {breed}</p>
//           <p className='text-[1.1vw] font-bold text-black'>age: {age}</p>
//           <p className='text-[0.9vw] font-semibold italic'>{description}</p>
//           <p className='text-[1.1vw] font-bold text-black'>{energyLevel}</p>
//           <p className='text-[1.1vw] font-bold text-black'>{category}</p>
//           <p className='text-[1.1vw] font-bold text-black'>{type}</p>
//       </div>
//       </Link>
//     </div>
//   )
// }

// export default Item

import React from "react";
const Item = ({ name , type , breed,photo ,cost,description,}) => {
  return (
      
        <div className="bg-white rounded-lg w-[45%] shadow-md p-4 m-8 hover:shadow-lg transition-shadow">
         <img className='h-[70vh] rounded-lg w-full  flex items-center justify-between '
              src={photo} 
              alt={name} 
              
          />
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          {/* <p className="text-gray-600 mb-2">Type: {type}</p> */}
          <p className="text-gray-600 mb-2">Breed: {breed}</p>
          <p className="text-sm font-bold text-green-600 mb-4">{description}</p>
          <button 
              className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 transition-colors"
              onClick={() => alert(`Added ${name} to cart!`)}
          >
             Adopt me
          </button>
      </div>
  );
};

export default Item