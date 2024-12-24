import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Github } from 'lucide-react';
import { NavLink } from './NavLink';

export const Navbar = () => {
  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Code2 className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold">AI Code Generator</span>
          </Link>
          <div className="flex items-center space-x-4">
            <NavLink to="/editor">Editor</NavLink>
            <a
              href="https://github.com/aryanacharya"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;