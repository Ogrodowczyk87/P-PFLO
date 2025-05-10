import React from 'react';
import Card from '../components/card';
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  return (
    <div
      id="Home"
      className="bg-cod flex items-start justify-center border-b border-dark-blue xl:pl-[110px] xl:pr-[40px] py-10"
    >
      <div className="container shadow-lg rounded-lg p-8 md:p-10 mt-[60px] mb-[60px]">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Card Section */}
          <div className="w-full md:w-1/2">
            <Card className="shadow-md rounded-lg p-6 bg-light-gray" />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-dark-blue mb-6">
              Rafal Ogrodowczyk | Junior Frontend Developer
            </h1>
            <p className="text-lg md:text-xl font-open-sans text-black leading-relaxed">
              Hi, I'm Rafal Ogrodowczyk, a passionate Junior Frontend Developer based in Belfast. I have a deep enthusiasm for new technologies and enjoy creating modern web experiences. With dedication to clean code and user-friendly interfaces, I'm constantly expanding my skills in the ever-evolving tech landscape.
            </p>

            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start mt-6 space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-blue hover:text-accent-yellow transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-blue hover:text-accent-yellow transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-blue hover:text-accent-yellow transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="mailto:r.ogrodowczyk87@gmail.com"
                className="text-dark-blue hover:text-accent-yellow transition-colors"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;