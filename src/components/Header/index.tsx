import React from 'react';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { HeaderCopyright } from './Copyright';

export const Header = () => {
  return (
    <header className="bg-gray-900 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Logo />
            <HeaderCopyright />
          </div>
          <Navigation />
        </div>
      </div>
    </header>
  );
};