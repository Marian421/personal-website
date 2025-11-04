const TechStack = () => {
  return (
    <section className="border-b border-gray-300 py-8 bg-gray-50">
      <div className="max-w-6xl m-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
          Tech Stack
        </h2>

        <div className="space-y-6">
          {/* Frontend */}
          <div>
            <h3 className="font-semibold text-xl text-gray-800 mb-2">Frontend</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-base sm:text-lg">
              <li>JavaScript, HTML, CSS</li>
              <li>React, Tailwind CSS</li>
              <li>Webpack, localStorage, date-fns</li>
            </ul>
          </div>

          {/* Backend */}
          <div>
            <h3 className="font-semibold text-xl text-gray-800 mb-2">Backend</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-base sm:text-lg">
              <li>Node.js, SQL, PL/SQL</li>
              <li>Express</li>
              <li>PostgreSQL</li>
            </ul>
          </div>

          {/* Other Tools */}
          <div>
            <h3 className="font-semibold text-xl text-gray-800 mb-2">Other Tools</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-base sm:text-lg">
              <li>Git, GitHub, VS Code, Linux (Ubuntu), Postman</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack

