import React from 'react'
import Header from '../HomePage/Components/Header';
import ProjectCard from './Components/ProjectCard';
import projects from '../../data/projects';

const ProjectsPage = () => {

  return (
    <>
      <Header />

       <main className="max-w-6xl mx-auto px-4 py-10">
         <h2 className="text-3xl font-bold mb-6 text-center">My Projects</h2>

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

          <h2 className='mt-8'>Take a look at all my projects on my <a
          href='https://github.com/Marian421'
          target='_blank'
          rel='noopener noreferrer'
          className='self-start hover:underline text-cyan-950'         
          >Github account</a>.</h2>
       </main>
    
    </>
  )
}

export default ProjectsPage