import React from 'react'
import ShopButton from './ShopButton';

// function Slider() {
//   return (
//     <div className=' m-4 shadow-md w-screen shadow-gray h-fit w-[98vw] flex items-center justify-center overflow-hidden '>
//         <img src="/images/dog2.jpg" className='h-[90vh] w-[full border-2 border-red-900 object-fit-cover' alt="" />
//         <img src="/images/dog2.jpg" className='h-[90vh] w-full object-fit-cover' alt="" />
//         <img src="/images/dog2.jpg" className='h-[90vh] w-full object-fit-cover' alt="" />
//         <img src="/images/dog2.jpg" className='h-[90vh] w-full object-fit-cover' alt="" />
//         <img src="/images/dog2.jpg" className='h-[90vh] w-full object-fit-cover' alt="" />

//     </div>
//   )
// }

const { useState, useEffect } = React;

    const images = [
      '/images/dog.jpg',
      '/images/dog2.jpg',
      '/images/dog3.jpg',
      '/images/cat.jpg',
    ];

    const Slider = () => {
      const [currentIndex, setCurrentIndex] = useState(0);

      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
      }, []);

      return (
        <div className="relative w-[90vw] h-[80vh] overflow-hidden object-cover m-auto hover:shadow-md  hover:shadow-black p-8">
          {images.map((image, index) => {
            const isCurrent = index === currentIndex;
            const isNext = index === (currentIndex + 1) % images.length;
            const isPrev = index === (currentIndex - 1 + images.length) % images.length;

            let positionClass = 'translate-x-full opacity-0';
            if (isCurrent) {
              positionClass = 'translate-x-0 opacity-100';
            } else if (isPrev) {
              positionClass = '-translate-x-full opacity-0';
            }

            return (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out ${
                  isCurrent || isNext || isPrev ? 'block' : 'hidden'
                } ${positionClass}`}
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            );
          })}
          {/* <ShopButton/> */}
        </div>
      );
    };

export default Slider