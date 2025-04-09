import React from 'react'
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='mb-0'>
      <footer className="bg-gray-800 text-white pt-12 pb-8 w-full mt-7 mb-0">
      <div className="container mx-auto px-4">
        {/* Footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Me</h3>
            <p className="text-gray-300 mb-4">
              Junior Frontend Developer based in Belfast with a passion for
              creating modern web experiences using cutting-edge technologies.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Skills</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-300 mb-2">Belfast, UK</p>
            <p className="text-gray-300 mb-4">email@example.com</p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Rafal Ogrodowczyk. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
    
  )
}

export default Footer
