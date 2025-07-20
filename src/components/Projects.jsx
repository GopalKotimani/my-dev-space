import React from 'react'

const Projects = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-4">My Projects</h1>
      <p className="text-center text-gray-600 mb-8">Here are some of the projects I've worked on:</p>
      <ul className="space-y-4">
        <li className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold">JavaScript Mini Projects</h2>
          <p className="text-gray-700">This project involves...</p>
          <a href="#" className="text-blue-600 hover:underline">Demo Project</a>
        </li>
        <li className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold">ReactJS Mini Projects</h2>
          <p className="text-gray-700">This project focuses on...</p>
          <a href="#" className="text-blue-600 hover:underline">Demo Project</a>
        </li>
        <li className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Capstone Project</h2>
          <p className="text-gray-700">This project showcases...</p>
          <a href="#" className="text-blue-600 hover:underline">Demo Project</a>  
        </li>
      </ul>
    </div>
  )
}

export default Projects