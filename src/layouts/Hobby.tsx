import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const hobbies = [
  {
    id: 1,
    title: 'Photography',
    description:
      'Photography allows me to capture the beauty of the world, which I combine with my passion for traveling. You can follow my journey and see my work on Instagram.',
    icon: (
      <div className="flex items-center justify-center">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dark-blue hover:text-accent-yellow transition-colors"
        >
          <FaInstagram size={60} />
        </a>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Gaming',
    description:
      'Everyone needs to unwind sometimes! I enjoy playing FPS titles, but I am also familiar with many co-op and multiplayer games. Gaming helps me relax and stay sharp.',
    icon: '🎮',
  },
  {
    id: 3,
    title: 'Reading',
    description:
      'I am a big fan of hard sci-fi literature and similar genres. My favorite authors include B. V. Larson and Stephen Baxter, whose works inspire my imagination.',
    icon: '📚',
  },
];

const Hobby = () => {
  return (
    <div id="Hobby" className="bg-light-beige py-16 flex items-center justify-center pb-[160px] pt-[120px] border-t-2 border-dark-blue">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-poppins font-bold text-dark-blue text-center mb-12">
          My Hobbies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby) => (
            <div
              key={hobby.id}
              className="bg-white shadow-lg rounded-lg p-6 text-center transform transition-transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="text-5xl mb-4">{hobby.icon}</div>
              <h3 className="text-xl font-semibold text-dark-blue mb-2">
                {hobby.title}
              </h3>
              <p className="text-dark-blue">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hobby;