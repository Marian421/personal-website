import React from 'react'
import projects from '../../../data/projects';
import ProjectCard from '../../ProjectsPage/Components/ProjectCard';

const Projects = () => {

  return (
    <section className='max-w-6xl m-auto flex flex-col mt-8'>
        <h2 className='mb-4'>Personal Projects</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
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

        <h2 className='mt-8 mb-4'>Or go to my <a
          href='https://github.com/Marian421'
          target='_blank'
          rel='noopener noreferrer'
          className='self-start hover:underline text-cyan-950'  
        >Github account</a> to take a look at all my projects.</h2>
    </section>
  )
}

export default Projects