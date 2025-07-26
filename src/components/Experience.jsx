import React from 'react';

const experiences = [
  {
    title: 'Frontend Developer Intern',
    company: 'TechNova Solutions',
    location: 'Remote',
    duration: 'Jan 2024 – Apr 2024',
    description:
      'Built responsive UIs with React and TailwindCSS. Integrated APIs and improved app performance. Collaborated in Agile teams.',
  },
  {
    title: 'Freelance Web Developer',
    company: 'Self-employed',
    location: 'India',
    duration: 'Jul 2023 – Dec 2023',
    description:
      'Delivered custom web apps for 3+ clients. Specialized in React, TailwindCSS, and deployment via Vercel.',
  },
  {
    title: 'Learning Phase',
    company: 'Self-Led Projects',
    location: 'Remote',
    duration: '2022 – 2023',
    description:
      'Mastered JavaScript, React, and DSA. Completed 100+ LeetCode problems. Built multiple mini-projects and a portfolio.',
  },
];

const Experience = () => {
  return (
    <section className="px-6 py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">🧑‍💻 Experience</h2>

        <div className="border-l-4 border-blue-600 pl-6 space-y-8 relative">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-3 top-1 w-6 h-6 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>

              <div className="bg-blue-50 dark:bg-gray-800 p-5 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-blue-700">{exp.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                  {exp.company} • {exp.location}
                </p>
                <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-2">
                  {exp.duration}
                </p>
                <p className="text-sm">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
