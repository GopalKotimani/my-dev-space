import React from 'react'
import { Link } from 'react-router-dom';

//assets/hero-image.png'; // Assuming you have a hero image in your assets
// Adjust the path as necessary

const Hero = ({ heroData }) => {
  const { name, bio, image, resumeUrl } = heroData;
  return (
    <div className="w-full h-screen bg-gradient-to-br from-blue-100 to-white flex flex-col">
      <div className="flex flex-col md:flex-row items-center justify-between h-full">

        {/* Left Side: Text */}
        <div className="w-full md:w-1/2 px-10 md:px-20 py-10 md:py-0 text-center md:text-left">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Hi, I’m <span className="text-blue-600">{name}</span>.
          </h1>
          <p className="mt-6 text-xl text-gray-700">
            {bio}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-100 transition"
            >
              Contact Me
            </Link>
            <button className="bg-white text-pink-600 hover:bg-pink-600 hover:text-white flex items-center gap-2 px-3 py-2 rounded shadow cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
              </svg>
              Resume
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 h-[100px] md:h-full ">
          <img
            src={image}
            alt="Hero"
            className="w-full h-full object-cover rounded-t-3xl md:rounded-none"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero;