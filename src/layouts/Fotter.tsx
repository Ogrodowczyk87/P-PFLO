import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="mb-0">
      <footer className="bg-dark-blue text-white pt-12 pb-8 w-full mb-0 shadow-lg">
        <div className="container mx-auto px-4">
          {/* Footer content grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: About */}
            <div>
              <h3 className="text-2xl font-poppins font-bold mb-4 text-white">
                About Me
              </h3>
              <p className="text-light-gray mb-4">
                Junior Frontend Developer based in Belfast with a passion for
                creating modern web experiences using cutting-edge technologies.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-2xl font-poppins font-bold mb-4 text-white">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-light-gray hover:text-accent-yellow transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-light-gray hover:text-accent-yellow transition-colors"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-light-gray hover:text-accent-yellow transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-light-gray hover:text-accent-yellow transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h3 className="text-2xl font-poppins font-bold mb-4 text-white">
                Contact
              </h3>
              <p className="text-light-gray mb-2">Belfast, UK</p>
              <p className="text-light-gray mb-4">r.ogrodowczyk87@gmail.com</p>

              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-light-gray hover:text-accent-yellow transition-colors"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="#"
                  className="text-light-gray hover:text-accent-yellow transition-colors"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="#"
                  className="text-light-gray hover:text-accent-yellow transition-colors"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="#"
                  className="text-light-gray hover:text-accent-yellow transition-colors"
                >
                  <FaEnvelope size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-light-gray mt-8 pt-6 text-center text-light-gray">
            <p>&copy; {new Date().getFullYear()} Rafal Ogrodowczyk. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
