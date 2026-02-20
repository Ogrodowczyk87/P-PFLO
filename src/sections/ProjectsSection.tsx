import { projects } from '../content/projects';
import { sectionIds } from '../content/sectionIds';

const ProjectsSection = () => {
  return (
    <section
      id={sectionIds.projects}
      className="py-16 bg-slate-50"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-poppins font-bold text-dark-blue text-center mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project) => (
            <div
              key={project.id}
              className="h-full min-h-[620px] bg-white border border-slate-200 shadow-sm rounded-xl overflow-hidden transition-shadow hover:shadow-lg flex flex-col"
            >
              <div className="h-48 bg-slate-50 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`${project.id === 5 || project.id === 6
                      ? 'h-32 w-32 object-contain'
                      : 'w-full h-full object-cover'
                    }`}
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
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
                    className="w-full inline-flex items-center justify-center rounded-lg bg-dark-blue text-white font-medium py-3 px-4 hover:bg-accent-yellow transition-colors mt-auto"
                  >
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
