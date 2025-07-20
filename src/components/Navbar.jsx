import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/"><h1 className="text-2xl font-bold text-blue-700">My Dev Space</h1></Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-gray-800 font-semibold text-lg">
          <ul className="flex gap-4">
            <li><Link to="/skills" className="hover:text-blue-600 transition">Skills</Link></li>
            <li><Link to="/projects" className="hover:text-blue-600 transition">Projects</Link></li>
            <li><Link to="/experience" className="hover:text-blue-600 transition">Experience</Link></li>
            <li><Link to="/certificates" className="hover:text-blue-600 transition">Certificates</Link></li>
            <li><Link to="/journey" className="hover:text-blue-600 transition">Journey</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600 transition">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
