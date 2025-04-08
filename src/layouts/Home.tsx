import React from 'react'
import home from '../assets/home.png'

const Home = () => {
  return (
    <div className='bg-gradient-to-bl from-blue-500 to-purple-500 flex items-start justify-center'>
      <div className='container mx-auto px-4 pt-2 pb-3 md:pt-3 md:pb-6'>
        {/* Flex container - column on mobile, row on md+ screens */}
        <div className='flex flex-col md:flex-row items-center gap-6 md:gap-8'>
          {/* Image section - full width on mobile, half on desktop */}
          <div className='w-full md:w-1/2'>
            <img
              src={home}
              alt='home'
              className='object-contain w-full max-w-md mx-auto'
            />
          </div>

          {/* Text content section - full width on mobile, half on desktop */}
          <div className='w-full md:w-1/2 text-center md:text-left mt-4 md:mt-0'>
            <h1 className='text-3xl md:text-4xl font-bold mb-3'>
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