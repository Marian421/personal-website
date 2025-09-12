import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProjectCard = ({ path, name, description, id }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${id}`);
  }

  return (
    <div className='bg-[#edede9] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300'>
        <img 
        src={ path } 
        alt={ name }
        className='w-full h-40 md:h-80 object-cover' />
        <div className='p-4'>
            <button onClick={handleClick} type='button' className='text-lg font-semibold mb-2 hover:text-orange-700 hover:underline'>{ name }</button>
            <p className='text-sm'>{ description }</p>
        </div>
    </div>
  )
}

export default ProjectCard