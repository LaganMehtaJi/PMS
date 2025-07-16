import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const { projects } = useOutletContext();

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white border border-blue-200 rounded-xl shadow hover:shadow-md transition duration-300 p-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline mt-2 inline-flex items-center text-sm"
            >
              View Project <FaExternalLinkAlt className="ml-1 text-xs" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
