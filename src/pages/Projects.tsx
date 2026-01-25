import { projects } from '../content/projects';

const Projects = () => {
  return (
    <div
      id="Projects"
      className="py-16 bg-slate-50"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-poppins font-bold text-dark-blue text-center mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-slate-200 shadow-sm rounded-xl overflow-hidden transition-shadow hover:shadow-lg"
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
                <p className="text-slate-700 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-dark-blue">Technologies:</h4>
                  <ul className="list-disc list-inside text-slate-600">
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
                    className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 text-dark-blue font-medium transition-colors hover:border-accent-yellow hover:text-accent-yellow"
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
