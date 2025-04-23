import React from 'react'
import JavaScript from '../assets/JavaScript.svg'
import TypeScript from '../assets/TypeScript.svg'
import css from '../assets/css.svg'
import Github from '../assets/Github.svg'
import tailwind from '../assets/tailwind.svg'
import linux from '../assets/linux.svg'
import react from '../assets/react.svg'

const Skills = () => {
  return (

    <div id='Skills'>
      <h2 className='  bg-gray-800 border-t-2 flex justify-center text-5xl pb-8 text-white pt-8'>This are some of my Skills</h2>
      <div className="relative h-full w-full flex items-center justify-center pt-[100px] pb-[100px]">
        <div className="profileCard_container relative p-10 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50">
          <button className="profile_item left-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1 ">
              <img src={react} alt="react" />
            </span>
          </button>

          <button className="profile_item right-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
              {/* tailwiend */}
              <img className='rounded-full' src={tailwind} alt="tailwind" />
            </span>
          </button>

          <button className="profile_item -left-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
            <span className="block w-[45px] h-[45px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
              <img className='rounded-full' src={linux} alt="HTML" />
            </span>

          </button>

          <button className="profile_item -right-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
              <img className='rounded-full bg-yellow-300' src={JavaScript} alt="JS" />
            </span>
          </button>

          <button className="profile_item bottom-8 -left-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
              <img className='rounded-full' src={css} alt="CSS" />
            </span>
          </button>

          <button className="profile_item bottom-8 -right-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
              <img className='rounded-full' src={TypeScript} alt="TS" />
            </span>
          </button>

          <button className="profile_item right-[40%] -bottom-4 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
              <img className='rounded-full' src={Github} alt="Github" />
            </span>
          </button>

          <button className="profile_item w-[200px] h-[200px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
            <div className="w-full bg-white h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500">
              <span className="w-20 h-20 inline-block">
                <img className='rounded-full animate-spin-slow'  src={react} alt="react" />
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>




  )

}

export default Skills