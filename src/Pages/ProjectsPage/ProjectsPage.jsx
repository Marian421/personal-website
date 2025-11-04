import React from 'react'
import Header from '../HomePage/Components/Header';
import ProjectCard from './Components/ProjectCard';
import projects from '../../data/projects';

const ProjectsPage = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
      {/* Header always at the top */}
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        {/* Page Title */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8 text-center">
          My Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              path={project.path}
              name={project.name}
              description={project.description}
              route={project.route}
            />
          ))}
        </div>

        {/* GitHub Link Section */}
        <div className="mt-10 text-center">
          <p className="text-base sm:text-lg text-gray-700">
            Take a look at all my projects on my{' '}
            <a
              href="https://github.com/Marian421"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:underline transition-colors duration-300"
            >
              GitHub account
            </a>.
          </p>
        </div>
      </main>
    </div>
  )
}

export default ProjectsPage

