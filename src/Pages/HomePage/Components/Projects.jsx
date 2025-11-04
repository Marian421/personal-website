import React from 'react'
import projects from '../../../data/projects';
import ProjectCard from '../../ProjectsPage/Components/ProjectCard';

const Projects = () => {
  return (
    <section className='max-w-6xl m-auto px-4 sm:px-6 py-12'>
      {/* Section Heading */}
      <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-8'>
        Personal Projects
      </h2>

      {/* Projects Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {
          projects.map(project => (
            <ProjectCard
              key={project.id}
              id={project.id}
              path={project.path}
              name={project.name}
              description={project.description}
              route={project.route}
            />
          ))
        }
      </div>

      {/* GitHub Link */}
      <h2 className='mt-12 text-xl sm:text-2xl font-medium text-gray-800'>
        Or go to my{' '}
        <a
          href='https://github.com/Marian421'
          target='_blank'
          rel='noopener noreferrer'
          className='text-cyan-900 hover:text-cyan-700 hover:underline transition-colors duration-300'
        >
          GitHub account
        </a>{' '}
        to take a look at all my projects.
      </h2>
    </section>
  )
}

export default Projects

