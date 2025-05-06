import React from 'react';
import SoftwareHouse from '../assets/SoftwareHouse.jpg';
import IceCream from '../assets/IceCream.webp';
import FilmWeb from '../assets/FilmWeb.png';
import phonebook from '../assets/phonebook.png';
import build from '../assets/build.svg';

const projects = [
  {
    id: 1,
    title: 'Software House',
    image: SoftwareHouse,
    github: 'https://github.com/Ogrodowczyk87/software-house.git',
    technologies: ['HTML', 'SASS', 'JavaScript'],
    description:
      'This is my first mobile-first project, designed with responsiveness in mind. It utilizes HTML, SASS, and JavaScript to create a modern and user-friendly web application.',
  },
  {
    id: 2,
    title: 'Ice Cream Shop',
    image: IceCream,
    github: 'https://github.com/Ogrodowczyk87/Ice-cream-shop.git',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    description:
      'A visually appealing landing page for an ice cream shop, designed with responsiveness in mind. Built using HTML, CSS, and JavaScript to provide a delightful user experience.',
  },
  {
    id: 3,
    title: 'FilmWeb',
    image: FilmWeb,
    github: 'https://github.com/Ogrodowczyk87/FilmWeb.git',
    technologies: ['JavaScript', 'Sass', 'API'],
    description:
      'A collaborative project developed with a team, featuring a movie database web application. It uses JavaScript, Sass, and external APIs to provide users with movie information, ratings, and reviews.',
  },
  {
    id: 4,
    title: 'Phonebook App',
    image: phonebook,
    github: 'https://github.com/Ogrodowczyk87/goit-react-hw-08-phonebook.git',
    technologies: ['React', 'Redux', 'Firebase'],
    description:
      'A contact management application built with React and Redux. It allows users to add, edit, and delete contacts, with real-time data synchronization using Firebase.',
  },
  {
    id: 5,
    title: 'Project Five',
    image: build,
    github: '',
    technologies: ['---', '---'],
    description:
      'This project is currently under construction. More details will be available soon.',
  },
  {
    id: 6,
    title: 'Project Six',
    image: build,
    github: '',
    technologies: ['---', '---', '---'],
    description:
      'This project is currently under construction. More details will be available soon.',
  },
];

const Projects = () => {
  return (
    <div
      id="Projects"
      className="bg-light-beige py-16 border-t-2 border-dark-blue"
    >
      <div className="container mx-auto px-4 bg-white shadow-lg rounded-lg p-8 md:p-10 mt-[60px] mb-[60px]">
        <h2 className="text-4xl font-poppins font-bold text-dark-blue text-center mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-cod shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl border border-gray"
            >
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-48 ${project.id === 5 || project.id === 6
                    ? 'h-32 w-32 object-contain mx-auto mt-4'
                    : 'object-cover'
                  }`}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-dark-blue mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-dark mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-dark-blue">Technologies:</h4>
                  <ul className="list-disc list-inside text-gray-darker">
                    {project.technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-yellow hover:text-dark-blue font-medium transition-colors"
                  >
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;