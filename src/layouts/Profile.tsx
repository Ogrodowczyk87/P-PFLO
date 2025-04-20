import React from 'react';
import rafal from '../assets/rafal.jpg';

const Profile = () => {
  return (
    <div className="bg-gray-800 mt-4 rounded-2xl py-12">
      <div className="container mx-auto px-4">
        {/* Profile and Contact Form Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Profile Section */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden p-6">
            <div className="flex flex-col items-center">
              <img
                src={rafal}
                alt="Profile"
                className="w-32 h-32 rounded-full mb-4 md:w-40 md:h-40 xl:w-48 xl:h-48 mt-8"
              />
              <h3 className="text-4xl font-semibold">Rafal Ogrodowczyk</h3>
              <p className="text-gray-600 text-center text-2xl mt-5">
                Feel free to reach out to me for collaboration or inquiries!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden p-6">
            <h3 className="text-2xl font-semibold text-center mb-4">Contact Me</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  placeholder="Your Message"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;