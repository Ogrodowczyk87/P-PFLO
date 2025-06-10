import { projects } from '../data/projectsData';

const Projects = () => {
  return (
    <div
      id="Projects"
      className="py-16 bg-slate-200"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-poppins font-bold text-black text-center mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl"
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