import { projects } from "./dummyData";

const Projects: React.FC = () => (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800 transition-all duration-500">
      <h2 className="text-4xl font-semibold text-center animate-fadeIn dark:text-white">Projects</h2>
      <div className="grid grid-cols-3 gap-4 p-6 mt-6">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`bg-white dark:bg-gray-700 shadow-md p-4 w-70 transition-all transform hover:scale-105 duration-300 animate-fadeIn animation-delay-${index * 100}`}
          >
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {project.description}
            </p>
            <a href={project.link} className="text-blue-500 hover:text-blue-700 dark:text-blue-400 no-underline">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );

  export default Projects;
  