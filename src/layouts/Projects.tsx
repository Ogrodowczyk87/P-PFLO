import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Project One',
    image: 'https://via.placeholder.com/300x200', // Zastąp linkiem do obrazu
    github: 'https://github.com/username/project-one',
    technologies: ['React', 'Tailwind CSS', 'TypeScript'],
    description: 'A modern web application built with React and Tailwind CSS.',
  },
  {
    id: 2,
    title: 'Project Two',
    image: 'https://via.placeholder.com/300x200',
    github: 'https://github.com/username/project-two',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    description: 'A responsive website built with vanilla JavaScript.',
  },
  {
    id: 3,
    title: 'Project Three',
    image: 'https://via.placeholder.com/300x200',
    github: 'https://github.com/username/project-three',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    description: 'A backend API built with Node.js and MongoDB.',
  },
  {
    id: 4,
    title: 'Project Four',
    image: 'https://via.placeholder.com/300x200',
    github: 'https://github.com/username/project-four',
    technologies: ['React', 'Redux', 'Firebase'],
    description: 'A real-time chat application using React and Firebase.',
  },
  {
    id: 5,
    title: 'Project Five',
    image: 'https://via.placeholder.com/300x200',
    github: 'https://github.com/username/project-five',
    technologies: ['Next.js', 'Tailwind CSS'],
    description: 'A server-side rendered website built with Next.js.',
  },
  {
    id: 6,
    title: 'Project Six',
    image: 'https://via.placeholder.com/300x200',
    github: 'https://github.com/username/project-six',
    technologies: ['Python', 'Flask', 'SQLAlchemy'],
    description: 'A RESTful API built with Flask and SQLAlchemy.',
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
                className="w-full h-48 object-cover"
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