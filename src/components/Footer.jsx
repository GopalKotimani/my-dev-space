import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left: Name */}
        <div className="text-sm">
          © {new Date().getFullYear()} Gopal Kotemani. All rights reserved.
        </div>

        {/* Center: Social Links */}
        <div className="flex gap-4 text-lg">
          <a href="https://github.com/GopalKotimani" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            GitHub
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            LinkedIn
          </a>
          <a href="mailto:your.email@example.com" className="hover:text-blue-400 transition">
            Email
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
