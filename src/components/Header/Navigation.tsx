import React from 'react';
import { Github } from 'lucide-react';
import { NavLink } from '../NavLink';

export const Navigation = () => {
  return (
    <div className="flex items-center space-x-4">
      <NavLink to="/editor">Editor</NavLink>
      <a
        href="https://github.com/aryan1112003"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500 transition-colors"
      >
        <Github className="w-6 h-6" />
      </a>
    </div>
  );
};