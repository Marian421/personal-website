import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Main = () => {
  return (
 <section className="bg-cyan-950 rounded-2xl self-center">
  <div className="max-w-6xl mx-auto px-4 py-6">
    <h1 className="mb-4 text-white">
      I'm Marian. I'm a computer science graduate passionate about building web applications and continuously improving my skills.
    </h1>
    
    <h2 className="mb-4 text-white">
      I'm eager to join a team where I can keep learning and grow as a software developer.
    </h2>

    <h3 className="text-white mb-4">
      Check out my projects below or get in touch!
    </h3>

    <div className="flex flex-row gap-4">
      <a
        href="https://github.com/Marian421"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-300 transition-colors"
      >
        <FaGithub size={24} />
      </a>
      
      <a
        href="https://www.linkedin.com/in/marian-herciu-1897b6302/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-300 transition-colors"
      >
        <FaLinkedin size={24} />
      </a>
    </div>
  </div>
</section>

  )
}

export default Main