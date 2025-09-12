import React from 'react'
import { useParams } from 'react-router-dom'
import projects from '../../data/projects';
import Header from '../HomePage/Components/Header';

const ProjectDetails = () => {

  const { id }  = useParams();

  const project = projects.find(p => p.id === id);

  console.log(project);

  return (
    <>
      <Header />
      <div className='max-w-6xl mx-auto flex flex-col [&_*]:mb-4'>
        <div className='flex flex-col'>
          <img 
          src={ project.path } 
          alt={ project.name }
          className='object-cover'
           />
          <h2 className='text-cyan-950'>{ project.name }</h2>
          <p className='indent-8 text-base md:text-lg'>{ project.description }</p>
        </div>
        <div>
          <h3 className='text-cyan-950'>Tech Stack</h3>
          <div>
            {Object.entries(project.techStack).map(([category, technologies]) => (
              technologies.length > 0 && (
                <div key={category} className="mb-2">
                  <h4 className="font-semibold capitalize text-orange-700">{category}</h4>
                  <ul className="flex gap-2 flex-wrap">
                    {technologies.map((tech, index) => (
                      <li 
                        key={index} 
                        className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-sm"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            ))}
          </div>
        </div>
        <div>
          <h3 className='text-cyan-950'>Features</h3>
            <ul className='list-disc list-inside'>
              {
                project.features.map((feature, index) => (
                  <li
                  key={ index } 
                  className='text-base '>
                    { feature }
                  </li>
                ))
              }
            </ul>
        </div>
        <div>
          <h3>For more details visit the <a
          href={ project.source }
          target='_blank'
          rel='noopener noreferrer'
          className='self-start hover:underline text-cyan-950'
          >Github Repository</a> of this project.</h3>
        </div>
      </div>
    </>
  )
}

export default ProjectDetails