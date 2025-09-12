import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className='mb-4 flex flex-row items-center w-full max-w-6xl m-auto mt-4 border-b text-lg md:text-2xl'>
        <button className='hover:underline hover:text-orange-700' onClick={ () => navigate('/') }>Herciu Marian</button>
        <div className='ml-auto flex space-x-5 [&_*]:hover:underline [&_*]:hover:text-orange-700'>
            <button onClick={ () => navigate('/about') }>About me</button>
            <button onClick={ () => navigate('/projects') }>Projects</button>
        </div>
    </header>
  )
}

export default Header