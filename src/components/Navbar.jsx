import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  const navItemClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
      : "text-gray-800 hover:text-blue-600 transition";

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/"><h1 className="text-2xl font-bold text-blue-700">My Dev Space</h1></Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-gray-800 font-semibold text-lg">
          <ul className="flex gap-4">
            <NavLink to="/skills" className={navItemClass} >Playground</NavLink>
            <NavLink to="/projects" className={navItemClass}>Projects</NavLink>
            <NavLink to="/experience" className={navItemClass}>Experience</NavLink>
            <NavLink to="/certificates" className={navItemClass}>Certificates</NavLink>
            <NavLink to="/aboutme" className={navItemClass}>About</NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
