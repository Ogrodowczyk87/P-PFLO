import React from 'react'
import home from '../assets/home.png'

const Home = () => {
  return (
    <div className='bg-amber-500'>
      <div className='container mx-auto px-4 py-8 md:py-16'>
        {/* Flex container - column on mobile, row on md+ screens */}
        <div className='flex flex-col md:flex-row items-center gap-8 md:gap-12'>
          {/* Image section - full width on mobile, half on desktop */}
          <div className='w-full md:w-1/2'>
            <img
              src={home}
              alt='home'
              className='object-contain w-full max-w-md mx-auto'
            />
          </div>

          {/* Text content section - full width on mobile, half on desktop */}
          <div className='w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0'>
            <h1 className='text-3xl md:text-4xl font-bold mb-4'>
              Lorem ipsum dolor sit.
            </h1>
            <p className='text-lg md:text-xl text-gray-700'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt pariatur distinctio delectus, iure voluptas est ad hic. Tenetur, id nostrum!
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home