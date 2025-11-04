
import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Projects from './Components/Projects';
import TechStack from './Components/TechStack';

const HomePage = () => {
  return (
    <div className="flex flex-col w-full bg-gradient-to-b from-cyan-50 via-white to-gray-50">
      <Header />
      <Main />
      <TechStack />
      <Projects />
    </div>
  )
}

export default HomePage

