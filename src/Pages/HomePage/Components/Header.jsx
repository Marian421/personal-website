import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className='w-full max-w-6xl mx-auto mt-4 mb-6 px-4 flex flex-col sm:flex-row items-center justify-between border-b border-gray-300'>
      {/* Logo / Name */}
      <button
        className='text-2xl sm:text-3xl font-semibold text-gray-800 hover:text-orange-600 hover:underline transition-colors duration-300'
        onClick={() => navigate('/')}
      >
        Herciu Marian
      </button>

      {/* Navigation */}
      <nav className='mt-3 sm:mt-0 flex space-x-6 text-lg sm:text-xl'>
        <button
          className='text-gray-700 hover:text-orange-600 hover:underline transition-colors duration-300'
          onClick={() => navigate('/about')}
        >
          About me
        </button>
        <button
          className='text-gray-700 hover:text-orange-600 hover:underline transition-colors duration-300'
          onClick={() => navigate('/projects')}
        >
          Projects
        </button>
      </nav>
    </header>
  )
}

export default Header

