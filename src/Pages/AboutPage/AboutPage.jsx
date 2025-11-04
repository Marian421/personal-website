import React from 'react'
import Header from '../HomePage/Components/Header'

const AboutPage = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
      {/* Keep Header separate from content */}
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
          About Me
        </h2>

        {/* Paragraphs */}
        <div className="space-y-5 leading-relaxed text-gray-700 text-base sm:text-lg">
          <p className="indent-4 sm:indent-8">
            Hi, I'm Marian, a recent Computer Science graduate from Facultatea de Stiinte, Vasile Alecsandri.
            I'm passionate about building web applications and continuously learning new technologies to improve my skills.
            I'm eager to gain professional experience and contribute to a team where I can grow as a software developer.
          </p>

          <p className="indent-4 sm:indent-8">
            At high school, I built a strong foundation in algorithms, logical thinking, and problem-solving while learning to code in C++.
          </p>

          <p className="indent-4 sm:indent-8">
            During university, I expanded my knowledge to include Python, SQL, and PL/SQL, as well as modern web development technologies.
            For my thesis, I developed a full-stack web application for booking football pitches using React, Node.js, Express, and PostgreSQL.
          </p>

          <p className="indent-4 sm:indent-8">
            I'm eager to continue learning and growing as a developer by gaining hands-on experience in a professional environment,
            contributing to meaningful projects, and working as part of a collaborative team.
          </p>
        </div>

        {/* Contact Section */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mt-12 mb-4">
          How to Contact Me
        </h2>

        <div className="text-gray-700 text-base sm:text-lg space-y-2">
          <div>
            Email:
            <a
              href="mailto:herciumarian8@gmail.com"
              className="text-orange-600 hover:underline ml-1 transition-colors duration-300"
            >
              herciumarian8@gmail.com
            </a>
          </div>

          <div className="flex flex-wrap items-center">
            LinkedIn:
            <a
              href="https://www.linkedin.com/in/marian-herciu-1897b6302/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:underline ml-2 transition-colors duration-300"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AboutPage

