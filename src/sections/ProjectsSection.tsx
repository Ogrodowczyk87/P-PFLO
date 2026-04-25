import { motion } from 'framer-motion';
import { projects } from '../content/projects';
import { sectionIds } from '../content/sectionIds';
import {
  fadeUpVariants,
  gridStaggerVariants,
  revealCardVariants,
} from '../lib/src/utils/motionVariants';

const ProjectsSection = () => {
  return (
    <motion.section
      id={sectionIds.projects}
      className="py-16 bg-slate-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={fadeUpVariants}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.h2
          className="text-4xl font-poppins font-bold text-dark-blue text-center mb-12"
          variants={fadeUpVariants}
        >
          My Projects
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
          variants={gridStaggerVariants}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="h-full min-h-[620px] bg-white border border-slate-200 shadow-sm rounded-xl overflow-hidden transition-shadow hover:shadow-lg flex flex-col"
              variants={revealCardVariants}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="h-48 bg-slate-50 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`${project.id === 5 || project.id === 6
                      ? 'h-32 w-32 object-contain'
                      : project.id === 7
                        ? 'w-full h-full object-contain p-2'
                      : 'w-full h-full object-cover'
                    }`}
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-dark-blue mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-700 mb-4 whitespace-pre-line">{project.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-dark-blue">Technologies:</h4>
                  {project.technologyGroups?.length ? (
                    <div className="space-y-3 max-h-72 overflow-y-auto pr-1 mt-2">
                      {project.technologyGroups.map((group) => (
                        <div
                          key={group.category}
                          className="rounded-lg border border-slate-200 bg-slate-50 p-3"
                        >
                          <p className="text-sm font-semibold text-dark-blue mb-2">
                            {group.category}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {group.items.map((item) => (
                              <span
                                key={`${group.category}-${item}`}
                                className="inline-flex items-center rounded-full bg-white border border-slate-200 px-2.5 py-1 text-xs text-slate-700"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-full bg-slate-100 border border-slate-200 px-2.5 py-1 text-xs text-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
