import React from 'react';
import { Link } from 'react-router-dom';
import { Code2 } from 'lucide-react';

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <Code2 className="w-8 h-8 text-blue-500" />
      <span className="text-xl font-bold">AI Code Generator</span>
    </Link>
  );
};