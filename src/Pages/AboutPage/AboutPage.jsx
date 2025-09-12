import React from 'react'
import Header from '../HomePage/Components/Header'

const AboutPage = () => {
  return (
    <div className='max-w-6xl m-auto'>
      <Header />

      <h2 className='text-cyan-950 mb-4'>About me</h2>

      <p className='indent-4 md:indent-8 text-base md:text-xl mb-3'>
        Hi, I'm Marian, a recent Computer Science graduate from Facultatea de Stiinte, Vasile Alecsandri. 
        I'm passionate about building web applications and continuously learning new technologies to improve my skills. 
        I'm eager to gain professional experience and contribute to a team where I can grow as a software developer.
      </p>

      <p className='indent-4 md:indent-8 text-base md:text-xl mb-3'>
      At highschool, I built a strong foundation in algorithms, logical thinking, and problem-solving while learning to code in C++.
      </p>

      <p className='indent-4 md:indent-8 text-base md:text-xl mb-3'>
      During university, I expanded my knowledge to include Python, SQL, and PL/SQL, as well as modern web development technologies. 
      For my thesis, I developed a full-stack web application for booking football pitches using React, Node.js, Express, and PostgreSQL.      
      </p>

      <p className='indent-4 md:indent-8 text-base md:text-xl mb3'>
        I'm eager to continue learning and growing as a developer by gaining hands-on experience in a professional environment, 
        contributing to meaningful projects, and working as part of a collaborative team.
      </p>

      <h2 className='text-cyan-950 mt-6'>How to contact me</h2>

      <div>
        Email: 
        <a 
          href="mailto:herciumarian8@gmail.com" 
          className="text-orange-700 hover:underline ml-1"
        >
          herciumarian8@gmail.com
        </a>
      </div>

      <div className="flex items-center">
        Linkedin: 
        <a 
          href="https://www.linkedin.com/in/marian-herciu-1897b6302/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-700 hover:underline ml-2"
        >
           LinkedIn Profile
        </a>
      </div>

    </div>
  )
}

export default AboutPage