import SoftwareHouse from '../assets/SoftwareHouse.jpg'; 
import IceCream from '../assets/IceCream.webp';
import FilmWeb from '../assets/FilmWeb.png';
import phonebook from '../assets/phonebook.png'
import build from '../assets/build.jpg'

const projects = [
  {
    id: 1,
    title: 'Software House',
    image: SoftwareHouse, 
    github: 'https://github.com/Ogrodowczyk87/software-house.git',
    technologies: ['HTML', 'SASS', 'JavaScript'],
    description: 'This is my first mobile-first project, designed with responsiveness in mind. It utilizes HTML, SASS, and JavaScript to create a modern and user-friendly web application.',
  },
  {
    id: 2,
    title: 'Ice Cream Shop',
    image: IceCream,
    github: 'https://github.com/Ogrodowczyk87/Ice-cream-shop.git',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    description: 'A visually appealing landing page for an ice cream shop, designed with responsiveness in mind. Built using HTML, CSS, and JavaScript to provide a delightful user experience.',
  },
  {
    id: 3,
    title: 'FilmWeb',
    image: FilmWeb,
    github: 'https://github.com/Ogrodowczyk87/FilmWeb.git',
    technologies: ['JavaScript', 'Sass', 'API'],
    description: 'A collaborative project developed with a team, featuring a movie database web application. It uses JavaScript, Sass, and external APIs to provide users with movie information, ratings, and reviews.',
  },
  {
    id: 4,
    title: 'Phonebook App',
    image: phonebook,
    github: 'https://github.com/Ogrodowczyk87/goit-react-hw-08-phonebook.git',
    technologies: ['React', 'Redux', 'Firebase'],
    description: 'A contact management application built with React and Redux. It allows users to add, edit, and delete contacts, with real-time data synchronization using Firebase.',
  },
  {
    id: 5,
    title: 'Project Five',
    image: build,
    github: '',
    technologies: ['---', '---'],
    description: 'This project is currently under construction. More details will be available soon.',
  },
  {
    id: 6,
    title: 'Project Six',
    image: build,
    github: '',
    technologies: ['---', '---', '---'],
    description: 'This project is currently under construction. More details will be available soon.',
  },
];

const Projects = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-fill"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold">Technologies:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {project.technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View on GitHub
                </a>
              </div>
            </div>
            
          ))}             
        </div>
      </div>
    </div>
  );
};

export default Projects;