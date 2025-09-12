import React from 'react'

const TechStack = () => {
  return (
    <section className="border-b border-gray-300 py-8 ">
        <div className='max-w-6xl m-auto'>
            <h2 className="text-2xl font-bold mb-4 w-full">Tech Stack</h2>
            
            <div>
                <div>
                <h3 className="font-semibold indent-4">Frontend</h3>
                <ul className="list-disc list-inside text-gray-700 indent-8">
                    <li>JavaScript, HTML, CSS</li>
                    <li>React, Tailwind CSS</li>
                    <li>Webpack, localStorage, date-fns</li>
                </ul>
                </div>

                <div>
                <h3 className="font-semibold indent-4">Backend</h3>
                <ul className="list-disc list-inside text-gray-700 indent-8">
                    <li>Node.js, SQL, PL/SQL</li>
                    <li>Express</li>
                    <li>PostgreSQL</li>
                </ul>
                </div>

                <div>
                <h3 className="font-semibold indent-4">Other Tools</h3>
                <ul className="list-disc list-inside text-gray-700 indent-8">
                    <li>Git, GitHub, VS Code, Linux (Ubuntu), Postman</li>
                </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TechStack