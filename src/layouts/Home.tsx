import React from 'react';
import Card from '../components/card';

const Home = () => {
  return (
    <div
      id="AboutMe"
      className="bg-gray-50 flex items-start justify-center border-b border-gray-300 xl:pl-[110px] xl:pr-[40px] py-10"
    >
      <div className="bg-white container shadow-lg rounded-lg p-8 md:p-10 mt-[60px] mb-[60px]">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Card Section */}
          <div className="w-full md:w-1/2">
            <Card className="shadow-md rounded-lg p-6" />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
              Rafal Ogrodowczyk | Junior Frontend Developer
            </h1>
            <p className="text-lg md:text-xl font-open-sans text-gray-700 leading-relaxed">
              Hi, I'm Rafal Ogrodowczyk, a passionate Junior Frontend Developer based in Belfast. I have a deep enthusiasm for new technologies and enjoy creating modern web experiences. With dedication to clean code and user-friendly interfaces, I'm constantly expanding my skills in the ever-evolving tech landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;