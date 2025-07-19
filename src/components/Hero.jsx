import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
//assets/hero-image.png'; // Assuming you have a hero image in your assets
import heroImage from '../assets/profile_reference.jpg'; // Adjust the path as necessary

const Hero = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-blue-100 to-white flex flex-col">
      <Navbar />

      <div className="flex flex-col md:flex-row items-center justify-between h-full">

        {/* Left Side: Text */}
        <div className="w-full md:w-1/2 px-10 md:px-20 py-10 md:py-0 text-center md:text-left">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Hi, I’m <span className="text-blue-600">Gopal</span>.
          </h1>
          <p className="mt-6 text-xl text-gray-700">
            I build things for the web using <strong>React</strong>, <strong>JavaScript</strong>, and more!
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-100 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 h-[300px] md:h-full">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full h-full object-cover rounded-t-3xl md:rounded-none"
          />
        </div>
      </div>

      <Footer />
    </div>

  )
}

export default Hero;