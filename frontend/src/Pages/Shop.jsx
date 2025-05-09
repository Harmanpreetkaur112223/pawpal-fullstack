import React from 'react'
import Item from '../component/Item'
import arr from '../assets/items.js'
function Shop() {
  console.log(arr)
  return (
    <div className='h-fit w-fit flex  flex-wrap  '>
     {
      arr.map(item=>
        <Item
        key={item.id}
        name={item.name}
        type={item.type}
        breed={item.breed}
        photo={item.photos}
        cost={item.cost}
        description={item.description}
        category={item.category}
        />
      )
     }

    </div>
  )
}

export default Shop