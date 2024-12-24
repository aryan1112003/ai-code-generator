import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  return (
    <Link to={to} className="hover:text-blue-500 transition-colors">
      {children}
    </Link>
  );
};