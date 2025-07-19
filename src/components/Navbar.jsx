import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-700">My Dev Space</h1>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-gray-800 font-semibold text-lg">
          <a href="/skills" className="hover:text-blue-600 transition">Skills</a>
          <a href="/projects" className="hover:text-blue-600 transition">Projects</a>
          <a href="/experience" className="hover:text-blue-600 transition">Experience</a>
          <a href="/certificates" className="hover:text-blue-600 transition">Certificates</a>
          <a href="/journey" className="hover:text-blue-600 transition">Journey</a>
          <a href="/contact" className="hover:text-blue-600 transition">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
