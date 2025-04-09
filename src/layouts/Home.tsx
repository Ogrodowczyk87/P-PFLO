import React from 'react'
import connection from '../assets/connection.svg'

const Home = () => {
  return (
    <div className='flex items-start justify-center mt-[80px] mb-[80px] border-b-orange-100'>
      <div className='container pt-5 pb-5 md:pt-3 md:pb-6'>
        {/* Flex container - column on mobile, row on md+ screens */}
        <div className='flex flex-col md:flex-row items-center gap-6 md:gap-8'>
          {/* Image section - full width on mobile, half on desktop */}
          <div className='w-full md:w-1/2'>
            <img
              src={connection}
              alt='connection'
              className='object-contain w-full max-w-md mx-auto'
            />
          </div>

          {/* Text content section - full width on mobile, half on desktop */}
          <div className='w-full md:w-1/2 text-center md:text-left mt-4 md:mt-0'>
            <h1 className='text-3xl md:text-5xl font-bold mb-5'>
              Rafal Ogrodowczyk | Junior Frontend Developer
            </h1>
            <p className='text-lg md:text-xl text-gray-700'>
              Hi, I'm Rafal Ogrodowczyk, a passionate Junior Frontend Developer based in Belfast. I have a deep enthusiasm for new technologies and enjoy creating modern web experiences. With dedication to clean code and user-friendly interfaces, I'm constantly expanding my skills in the ever-evolving tech landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home