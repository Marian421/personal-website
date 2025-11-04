import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProjectCard = ({ path, name, description, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${id}`);
  }

  return (
    <div className='bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1.5 cursor-pointer'>
      {/* Project Image */}
      <img
        src={path}
        alt={name}
        className='w-full h-40 md:h-60 lg:h-80 object-cover'
      />

      {/* Project Info */}
      <div className='p-4'>
        <button
          onClick={handleClick}
          type='button'
          className='text-lg sm:text-xl font-semibold mb-2 text-gray-900 hover:text-orange-600 hover:underline transition-colors duration-300'
        >
          {name}
        </button>
        <p className='text-sm sm:text-base text-gray-700'>
          {description}
        </p>
      </div>
    </div>
  )
}

export default ProjectCard

