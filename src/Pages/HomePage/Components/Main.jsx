import { FaGithub, FaLinkedin } from "react-icons/fa";

const Main = () => {
  return (
    <section className="bg-gradient-to-r from-cyan-900 to-cyan-700 rounded-2xl mx-4 sm:mx-6 lg:mx-auto max-w-6xl py-12 px-6 sm:px-12 shadow-lg">
      <div className="text-center sm:text-left">
        <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-snug">
          I'm Marian, a computer science graduate passionate about building web applications and continuously improving my skills.
        </h1>

        <h2 className="text-white text-lg sm:text-xl lg:text-2xl mb-4 font-medium leading-relaxed">
          I'm eager to join a team where I can keep learning and grow as a software developer.
        </h2>

        <h3 className="text-white text-base sm:text-lg lg:text-xl mb-6 font-light">
          Check out my projects below or get in touch!
        </h3>

        <div className="flex justify-center sm:justify-start gap-6">
          <a
            href="https://github.com/Marian421"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors duration-300 transform hover:scale-110"
          >
            <FaGithub size={28} />
          </a>

          <a
            href="https://www.linkedin.com/in/marian-herciu-1897b6302/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors duration-300 transform hover:scale-110"
          >
            <FaLinkedin size={28} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Main

