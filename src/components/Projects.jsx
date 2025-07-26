
import React from 'react';

const projects = [
  {
    title: 'React Portfolio Website',
    description:
      'A personal portfolio built with React, TailwindCSS, and Framer Motion. Showcases my projects, skills, and certifications.',
    stack: ['React', 'TailwindCSS', 'Redux', 'Vite'],
    demoLink: 'https://your-portfolio.vercel.app',
    codeLink: 'https://github.com/yourusername/portfolio',
  },
  {
    title: 'DSA Playground',
    description:
      'A web-based interactive playground for solving and visualizing data structure & algorithm problems.',
    stack: ['React', 'JavaScript', 'CodeMirror'],
    demoLink: 'https://dsa-playground.vercel.app',
    codeLink: 'https://github.com/yourusername/dsa-playground',
  },
  {
    title: 'Weather App',
    description:
      'Minimalistic weather application using OpenWeatherMap API with responsive UI and dark mode support.',
    stack: ['React', 'API', 'TailwindCSS'],
    demoLink: 'https://weather-app-demo.vercel.app',
    codeLink: 'https://github.com/yourusername/weather-app',
  },
];

const Projects = () => {
  return (
    <section className="px-6 py-21 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">🚀 Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-md dark:bg-blue-800 dark:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 mt-auto">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-700 dark:hover:text-white transition"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
