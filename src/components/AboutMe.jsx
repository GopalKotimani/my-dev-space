import React from 'react';

const AboutMe = () => {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-12 flex flex-col md:flex-row items-center justify-center gap-12">
      {/* Profile Image */}
      <div className="flex-shrink-0">
        <img
          src="/profile.jpg" // Replace with your image path
          alt="Profile"
          className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover border-4 border-blue-500 shadow-lg"
        />
      </div>

      {/* Content */}
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-4xl font-bold mb-2">Hi, I'm Gopal 👋</h2>
        <p className="text-blue-600 text-lg font-semibold mb-4">Frontend-Focused Full-Stack Developer</p>

        <p className="text-md leading-relaxed mb-6">
          I’m a passionate developer with a knack for crafting elegant, responsive web applications.
          With a solid foundation in JavaScript, ReactJS, and TailwindCSS, I’m currently diving deep into full-stack
          development and cloud technologies like AWS. I love solving problems and turning ideas into reality.
        </p>

        {/* Highlights */}
        <ul className="mb-6 text-left list-disc list-inside text-sm space-y-1">
          <li>💻 Strong in React, Redux, TailwindCSS</li>
          <li>📚 Solved 100+ DSA problems on LeetCode</li>
          <li>🚀 Learning AWS Cloud Practitioner</li>
          <li>🛠️ Working on capstone React portfolio projects</li>
        </ul>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="/resume.pdf" // Replace with your resume
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition-all"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="border border-blue-600 text-blue-600 px-5 py-2 rounded-xl hover:bg-blue-100 transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
