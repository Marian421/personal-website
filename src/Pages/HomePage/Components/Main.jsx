import React from 'react'
import { FaGithub } from "react-icons/fa";

const Main = () => {
  return (
    <main>
        <h1>I'm Marian. A junior full-stack developer from Romania</h1>

        <div>
            <a 
            href="https://github.com/Marian421"
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Github icon'
            >
                <FaGithub />
            </a>
        </div>
    </main>
  )
}

export default Main