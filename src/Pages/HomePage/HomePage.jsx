import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Projects from './Components/Projects';
import TechStack from './Components/TechStack';

const HomePage = () => {
  return (
    <div className='flex flex-col w-full h-screen justify-baseline'>
        <Header />
        <Main />
        <TechStack />
        <Projects />
    </div>
  )
}

export default HomePage