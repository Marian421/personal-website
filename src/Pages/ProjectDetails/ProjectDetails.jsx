import React from 'react'
import { useParams } from 'react-router-dom'
import projects from '../../data/projects';
import Header from '../HomePage/Components/Header';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-gray-700">
        <p>Project not found.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        {/* Project Image + Title */}
        <div className="flex flex-col mb-8">
          <img
            src={project.path}
            alt={project.name}
            className="w-full max-h-[500px] object-cover rounded-xl shadow-sm mb-6"
          />
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-3">
            {project.name}
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed indent-4 sm:indent-8">
            {project.description}
          </p>
        </div>

        {/* Live Demo */}
        {project.liveDemo && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Live Demo</h3>
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:underline text-lg transition-colors duration-300 ml-2"
            >
              Click here to see the live site
            </a>
          </div>
        )}

        {/* Tech Stack */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Tech Stack</h3>
          <div className="space-y-4">
            {Object.entries(project.techStack).map(([category, technologies]) =>
              technologies.length > 0 && (
                <div key={category}>
                  <h4 className="font-semibold text-orange-600 capitalize mb-1 ml-2">
                    {category}
                  </h4>
                  <ul className="flex flex-wrap gap-2 ml-4">
                    {technologies.map((tech, index) => (
                      <li
                        key={index}
                        className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>

        {/* Features */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Features</h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed text-base sm:text-lg ml-2">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* GitHub Repository */}
        <div className="border-t border-gray-300 pt-6">
          <h3 className="text-base sm:text-lg text-gray-700">
            For more details, visit the{' '}
            <a
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:underline transition-colors duration-300"
            >
              GitHub Repository
            </a>{' '}
            of this project.
          </h3>
        </div>
      </main>
    </div>
  )
}

export default ProjectDetails

